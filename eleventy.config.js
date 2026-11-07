import fs from "node:fs";
import { minify } from "html-minifier-terser";

const ENV = process.env.ELEVENTY_ENV || "development";
const site = JSON.parse(fs.readFileSync("./src/_data/site.json", "utf8"));

// ---- Configuration safety checks (fail fast, never ship a fake/invalid publisher ID) ----
const PUB_RE = /^ca-pub-\d{16}$/;
if (site.adsense.enabled && !PUB_RE.test(site.adsense.publisherId)) {
  throw new Error(
    `AdSense is enabled but publisherId "${site.adsense.publisherId}" is not a valid ca-pub-XXXXXXXXXXXXXXXX ID. ` +
      `Disable AdSense or enter the real ID from your AdSense account.`
  );
}
if (site.analytics.ga4MeasurementId && !/^G-[A-Z0-9]{4,}$/.test(site.analytics.ga4MeasurementId)) {
  throw new Error(`GA4 measurement ID "${site.analytics.ga4MeasurementId}" looks invalid (expected G-XXXXXXX).`);
}

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isPublished = (item) => {
  if (item.data.draft) return false;
  // Scheduled publishing: future-dated articles are excluded from non-dev builds.
  // A daily GitHub Actions rebuild publishes them automatically once their date arrives.
  if (ENV !== "development" && item.date > new Date()) return false;
  return true;
};

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("env", ENV);
  eleventyConfig.addGlobalData("buildTime", new Date());

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers", "src/_redirects": "_redirects" });
  // GitHub Pages: serve files as-is (no Jekyll processing).
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll", "src/CNAME": "CNAME" });

  // Drafts and future posts never get written to disk outside development.
  eleventyConfig.addPreprocessor("drafts-and-scheduled", "md", (data) => {
    if (!String(data.page.inputPath).includes("/articles/")) return;
    if (ENV === "development") return;
    if (data.draft) return false;
    if (data.page.date > new Date()) return false;
  });

  // ---- Markdown: heading IDs for table of contents + external link safety ----
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.push("heading_ids", (state) => {
      const used = new Set();
      state.tokens.forEach((tok, i) => {
        if (tok.type === "heading_open" && (tok.tag === "h2" || tok.tag === "h3")) {
          const text = state.tokens[i + 1].content;
          let id = slugify(text) || "section";
          while (used.has(id)) id += "-x";
          used.add(id);
          tok.attrSet("id", id);
        }
      });
    });
    const defaultLink =
      md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const href = tokens[idx].attrGet("href") || "";
      if (/^https?:\/\//.test(href) && !href.startsWith(site.url)) {
        tokens[idx].attrSet("rel", "noopener noreferrer");
        tokens[idx].attrSet("target", "_blank");
      }
      return defaultLink(tokens, idx, options, env, self);
    };
    const defaultImage = md.renderer.rules.image;
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      tokens[idx].attrSet("loading", "lazy");
      tokens[idx].attrSet("decoding", "async");
      return defaultImage(tokens, idx, options, env, self);
    };
    const defaultTable = md.renderer.rules.table_open || ((t, i, o, e, s) => s.renderToken(t, i, o));
    md.renderer.rules.table_open = (t, i, o, e, s) => '<div class="table-wrap">' + defaultTable(t, i, o, e, s);
    md.renderer.rules.table_close = () => "</table></div>";
  });

  // ---- Collections ----
  eleventyConfig.addCollection("articles", (api) =>
    api
      .getFilteredByGlob("src/articles/*.md")
      .filter(isPublished)
      .sort((a, b) => b.date - a.date)
  );

  // ---- Filters ----
  eleventyConfig.addFilter("slugify", slugify);
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("ymd", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("absoluteUrl", (path) => new URL(path, site.url).href);
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v).replace(/</g, "\\u003c"));
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  });
  eleventyConfig.addFilter("wordCount", (content) =>
    String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
  );
  eleventyConfig.addFilter("category", (slug, cats) => cats.find((c) => c.slug === slug));
  eleventyConfig.addFilter("byCategory", (items, slug) => items.filter((i) => i.data.category === slug));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((i) => i.url !== url));
  eleventyConfig.addFilter("related", (items, url, category, keywords, relatedSlugs) => {
    const tags = new Set(keywords || []);
    const pinned = relatedSlugs || [];
    return items
      .filter((i) => i.url !== url)
      .map((i) => {
        let score = i.data.category === category ? 3 : 0;
        (i.data.keywords || []).forEach((k) => tags.has(k) && (score += 1));
        if (pinned.includes(i.fileSlug)) score += 5;
        return { i, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.i);
  });
  eleventyConfig.addFilter("toc", (html) => {
    const out = [];
    const re = /<h2 id="([^"]+)">(.*?)<\/h2>/g;
    let m;
    while ((m = re.exec(html))) out.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, "") });
    return out;
  });
  eleventyConfig.addFilter("videoById", (id, items) => (items || []).find((v) => v.id === id));
  eleventyConfig.addFilter("plain", (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Highlights owner-only information that must be completed before publication.
  // Visible in development/preview builds; production deploys are blocked by `npm run check` instead.
  eleventyConfig.addShortcode("setupRequired", (label) =>
    ENV === "production"
      ? ""
      : `<span class="setup-required" role="note"><strong>Setup required:</strong> ${label}</span>`
  );

  // ---- Production HTML minification ----
  if (ENV === "production") {
    eleventyConfig.addTransform("minify", async (content, outputPath) => {
      if (outputPath && outputPath.endsWith(".html")) {
        return minify(content, {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
      return content;
    });
  }

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "11ty.js"],
  };
}
