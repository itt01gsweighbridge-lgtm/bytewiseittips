# Test report

Date: 7 November 2026 · Environment: Linux, Node.js 22, Eleventy 3.1.8, Google Chrome (headless), Lighthouse 12, html-validate 9.

## Summary

| Area | Result |
|---|---|
| Automated build tests (`npm test`) | **PASS** – 58 HTML pages, 30 articles, 3,610 internal links/assets, 45 sitemap URLs, 0 problems |
| Browser end-to-end tests | **PASS** – 36/36 checks |
| Lighthouse (mobile emulation, local server) | Performance 99–100, Accessibility 100, Best Practices 100, SEO 100 on indexable pages |
| HTML validation | **PASS** after fixing 1 issue |
| External source links | **PASS** – 71 reference URLs checked; 6 broken/redirected links found and corrected |
| Publication readiness check | Works as designed – blocks deploy while owner fields are empty |

## 1. Automated build tests (`scripts/test-site.mjs`)

Run on both preview and production builds. Each HTML page is checked for:

- `<title>`, meta description, canonical URL, `lang`, viewport, `og:image` – present on every page;
- no duplicate titles or descriptions;
- exactly one `<h1>` and a `main` landmark;
- `alt` attribute on every image;
- valid JSON-LD (TechArticle + BreadcrumbList on every article);
- every internal link, image, script and stylesheet resolves; in-page anchors exist;
- no placeholder text (“lorem ipsum”, TODO, etc.) and no “Setup required” notices in production;
- articles: ≥700 words of body text and ≥1 internal link to another guide.

Site-level: sitemap URLs all exist and exclude noindex pages; robots.txt contains the sitemap; ads.txt present and contains no fake ID; search index entry count matches article count; feed, manifest, favicon and admin present.

**Issues found and fixed during testing:** related-articles filter crash (template error), four articles without internal links, two articles below the length threshold (expanded with genuinely useful sections), word-count measurement bug in the test itself.

## 2. Browser end-to-end tests (Puppeteer + Chrome)

| Check | Result |
|---|---|
| Home loads, correct H1 | PASS |
| No consent banner / no AdSense script when nothing optional is configured | PASS |
| Skip link is the first keyboard stop | PASS |
| Dark mode toggles and persists across reloads | PASS |
| Search returns results, handles no results, escapes HTML input (XSS test) | PASS |
| Hero search form submits to search page | PASS |
| Article: table of contents, code copy buttons, 3 related guides, FAQ | PASS |
| No ad slots rendered without configuration | PASS |
| Mobile (375 px): menu opens/closes, `aria-expanded` updates, Escape closes | PASS |
| Mobile: no horizontal overflow on home, article, policy, categories, contact | PASS |
| Unknown URL returns 404 | PASS (local server; GitHub Pages serves `404.html` automatically) |
| **Simulated AdSense + GA4 configuration** (syntactically valid dummy ID, test copy only): | |
| – consent banner shown on first visit | PASS |
| – Consent Mode default denied before choice | PASS |
| – non-personalised ads requested before consent | PASS |
| – Reject hides banner and is remembered | PASS |
| – Footer “Cookie settings” reopens with options; custom choice saved | PASS |
| – Consent Mode update sent with correct values | PASS |
| – manual ad units labelled “Advertisement” | PASS |
| – `ads.txt` generated correctly; `google-adsense-account` meta present | PASS |
| – invalid publisher ID makes the build fail | PASS |
| No JavaScript errors on any tested page | PASS |

## 3. Lighthouse (local)

| Page | Perf | A11y | Best practices | SEO |
|---|---|---|---|---|
| Home | 99 | 100 | 100 | 100 |
| Article (SSD vs HDD) | 100 | 100 | 100 | 100 |
| Category (Networking) | 100 | 100 | 100 | 100 |
| Contact | 100 | 100 | 100 | 100 |
| Search | 80 | 100 | 100 | 66* |

\*The search results page is intentionally `noindex` (Google’s guidance is not to index internal search results), which Lighthouse scores as an SEO issue. Its performance score reflects loading the 165 KB search index on demand.

Accessibility issues found and fixed: colour contrast of category labels and muted footer text, a link whose accessible name didn’t match its visible text, heading order on listing pages, and a lazy-loaded image that was the largest visible element.

## 4. Tests that could NOT be completed here

| Test | Why | How to complete |
|---|---|---|
| Live deployment / HTTPS / custom domain | Requires your GitHub account and domain | DEPLOYMENT.md, then visit the live site |
| Contact form delivery | Requires your Web3Forms key | Send yourself a test message |
| Admin login and saving content | Requires your GitHub repository and token | Sign in at `/admin/`, edit a draft, confirm a commit appears and the site redeploys |
| Scheduled publishing on the live site | Requires GitHub Actions on your repo | Create a test draft dated tomorrow; check it appears after the daily run |
| Real AdSense ad serving and Google CMP message | Requires your AdSense account | ADSENSE-READINESS.md › Setting up AdSense |
| Google Rich Results Test / Search Console | Requires a public URL | Test a live article URL |
| Real-device testing (iOS Safari, Android Chrome) | Only headless Chrome available | Check on your own phone |
| Field Core Web Vitals | Needs real-user data | Search Console › Core Web Vitals after traffic arrives |

The admin panel configuration (`config.yml`) was validated as YAML and its syntax checked against the current Sveltia CMS documentation (token sign-in, relation fields, image optimisation), but the panel itself could not be run without a GitHub repository.
