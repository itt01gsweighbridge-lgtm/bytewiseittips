#!/usr/bin/env node
// Publication readiness check. Fails (exit 1) when owner information that must be real
// before going live is missing, so placeholder content can never be deployed.
// Run locally with:  npm run check
import fs from "node:fs";

const site = JSON.parse(fs.readFileSync("src/_data/site.json", "utf8"));
const cms = fs.readFileSync("src/admin/config.yml", "utf8");
const errors = [];
const warnings = [];

if (!site.url || site.url === "https://bytewise-it-tips.github.io" || site.url.endsWith("/"))
  errors.push("Settings › Website address: enter your real site URL without a trailing slash (e.g. https://www.yourdomain.com or https://USERNAME.github.io).");
if (!site.url.startsWith("https://")) errors.push("Website address must start with https://");
if (!site.owner.name) errors.push("Settings › Owner: enter the owner/operator name (shown on About, Privacy and Terms pages).");
if (!site.owner.country) errors.push("Settings › Owner: enter the owner's country.");
if (!site.contact.web3formsAccessKey && !site.owner.contactEmail)
  errors.push("Settings › Contact form: add a Web3Forms access key or a public contact email so visitors can reach you.");
if (cms.includes("YOUR-GITHUB-USERNAME/YOUR-REPOSITORY"))
  warnings.push("src/admin/config.yml: set backend.repo to your GitHub repository so the admin panel can sign in.");
if (cms.includes("site_url: https://bytewise-it-tips.github.io") && site.url !== "https://bytewise-it-tips.github.io")
  warnings.push("src/admin/config.yml: update site_url/display_url to your real website address.");

const PUB = /^ca-pub-\d{16}$/;
if (site.adsense.enabled && !PUB.test(site.adsense.publisherId))
  errors.push("AdSense is enabled but the publisher ID is missing or invalid.");
if (site.adsense.enabled && site.consent.provider !== "google")
  warnings.push("AdSense is enabled with the built-in consent banner. If you have visitors from the EEA, UK or Switzerland, publish Google's European regulations message (AdSense › Privacy & messaging) and set Consent provider to 'Google certified CMP'.");
if (!site.analytics.ga4MeasurementId) warnings.push("Google Analytics 4 is not configured (optional).");
if (!site.searchConsole.verificationCode) warnings.push("Google Search Console verification code is not set (optional – DNS verification also works).");

const author = JSON.parse(fs.readFileSync("src/_data/author.json", "utf8"));
if (!author.personName) warnings.push("Settings › Author profile: adding the editor's real name and a truthful bio improves reader trust (recommended).");

for (const w of warnings) console.log("⚠  " + w);
if (errors.length) {
  console.error("\n✖ Publication blocked – complete these settings first:\n");
  for (const e of errors) console.error("  • " + e);
  console.error("\nSee docs/ADMIN-MANUAL.md › First-time setup.\n");
  process.exit(1);
}
console.log("✔ Publication readiness check passed.");
