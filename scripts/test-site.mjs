#!/usr/bin/env node
// Automated site tests over the built _site folder (run `npm run build` or `npm run build:preview` first).
// Checks: internal links & assets, metadata, headings, alt text, structured data, sitemap, robots,
// ads.txt, search index, duplicate titles/descriptions, placeholder text and article quality signals.
import fs from "node:fs";
import path from "node:path";

const ROOT = "_site";
const failures = [];
const notes = [];
const fail = (f, m) => failures.push(`${f}: ${m}`);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const files = walk(ROOT);
const htmlFiles = files.filter((f) => f.endsWith(".html") && !f.includes(`${path.sep}admin${path.sep}`));
const exists = (urlPath) => {
  const clean = decodeURIComponent(urlPath.split("#")[0].split("?")[0]);
  const p = path.join(ROOT, clean);
  return fs.existsSync(p) && fs.statSync(p).isFile() || fs.existsSync(path.join(p, "index.html"));
};

const titles = new Map(), descs = new Map();
let linkCount = 0, articleCount = 0;
const ENV_PROD = !fs.readFileSync(path.join(ROOT, "index.html"), "utf8").includes("preview-banner");

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, "utf8");
  const rel = "/" + path.relative(ROOT, f).replace(/\\/g, "/");
  const is404 = rel === "/404.html";

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) fail(rel, "missing <title>");
  else { if (titles.has(title)) fail(rel, `duplicate title with ${titles.get(title)}`); titles.set(title, rel); }
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) fail(rel, "missing meta description");
  else {
    if (descs.has(desc)) fail(rel, `duplicate description with ${descs.get(desc)}`);
    descs.set(desc, rel);
    if (desc.length < 50 || desc.length > 200) notes.push(`${rel}: description length ${desc.length}`);
  }
  if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fail(rel, "missing canonical");
  if (!/<html lang="en"/.test(html)) fail(rel, "missing lang attribute");
  if (!/<meta name="viewport"/.test(html)) fail(rel, "missing viewport");
  if (!/property="og:image"/.test(html)) fail(rel, "missing og:image");
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(rel, `expected exactly one <h1>, found ${h1}`);
  if (!html.includes('id="main"')) fail(rel, "missing main landmark");

  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\balt="/.test(img)) fail(rel, `img without alt: ${img.slice(0, 80)}`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(rel, "invalid JSON-LD: " + e.message); }
  }

  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|#)/.test(u) || u.startsWith("//")) continue;
    linkCount++;
    if (!u.startsWith("/")) { fail(rel, `relative link ${u}`); continue; }
    if (!exists(u)) fail(rel, `broken internal link ${u}`);
    const hash = u.split("#")[1];
    if (hash && u.split("#")[0] === rel.replace(/index\.html$/, "")) {
      if (!html.includes(`id="${hash}"`)) fail(rel, `missing anchor #${hash}`);
    }
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`) && m[1] !== "main") fail(rel, `missing in-page anchor #${m[1]}`);
  }

  if (/lorem ipsum|TODO|FIXME|\[insert/i.test(html.replace(/<script[\s\S]*?<\/script>/g, ""))) fail(rel, "placeholder text found");
  if (ENV_PROD && html.includes("Setup required")) fail(rel, "setup notice visible in production build");

  if (rel.startsWith("/articles/") && rel !== "/articles/index.html" && !rel.includes("/page/")) {
    articleCount++;
    if (!html.includes('"@type":"TechArticle"') && !html.includes('"@type": "TechArticle"')) fail(rel, "missing Article schema");
    if (!html.includes('"BreadcrumbList"')) fail(rel, "missing Breadcrumb schema");
    const body = (html.match(/<div class="prose">([\s\S]*?)(?:<section class="faq"|<section class="references"|<aside class="article-note")/) || [])[1] || "";
    const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    if (words < 700) fail(rel, `article body only ${words} words`);
    const internal = (body.match(/href="\/articles\//g) || []).length;
    if (internal < 1) fail(rel, "no internal links to other articles in body");
    notes.push(`${rel}: ${words} words, ${internal} internal links`);
  }
  if (is404 && !html.includes("noindex")) fail(rel, "404 should be noindex");
}

// Sitemap
const sm = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length < 40) fail("sitemap.xml", `only ${locs.length} URLs`);
for (const l of locs) { const p = new URL(l).pathname; if (!exists(p)) fail("sitemap.xml", `URL not built: ${p}`); }
if (locs.some((l) => /\/search\/|\/404/.test(l))) fail("sitemap.xml", "contains noindex page");
// robots, ads.txt, search index, feed, manifest
const robots = fs.readFileSync(path.join(ROOT, "robots.txt"), "utf8");
if (!/User-agent: \*/.test(robots)) fail("robots.txt", "missing user-agent");
if (ENV_PROD && !/Sitemap: https?:\/\//.test(robots)) fail("robots.txt", "missing sitemap line");
if (!fs.existsSync(path.join(ROOT, "ads.txt"))) fail("ads.txt", "missing");
const ads = fs.readFileSync(path.join(ROOT, "ads.txt"), "utf8");
if (/pub-0{16}|pub-1234/.test(ads)) fail("ads.txt", "fake publisher ID");
try {
  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, "search-index.json"), "utf8"));
  if (idx.length !== articleCount) fail("search-index.json", `has ${idx.length} entries, expected ${articleCount}`);
} catch (e) { fail("search-index.json", "invalid JSON"); }
for (const f of ["feed.xml", "site.webmanifest", "favicon.ico", "admin/index.html", "admin/config.yml"])
  if (!fs.existsSync(path.join(ROOT, f))) fail(f, "missing");

// Asset weights
const css = fs.statSync(path.join(ROOT, "assets/css/main.css")).size;
const js = fs.statSync(path.join(ROOT, "assets/js/main.js")).size;
notes.push(`CSS ${(css / 1024).toFixed(1)} KB, main JS ${(js / 1024).toFixed(1)} KB`);

console.log(`Checked ${htmlFiles.length} HTML pages, ${articleCount} articles, ${linkCount} internal links/assets, ${locs.length} sitemap URLs.`);
if (process.argv.includes("--verbose")) notes.forEach((n) => console.log("  · " + n));
if (failures.length) {
  console.error(`\n✖ ${failures.length} problem(s):`);
  failures.forEach((f) => console.error("  • " + f));
  process.exit(1);
}
console.log("✔ All site tests passed.");
