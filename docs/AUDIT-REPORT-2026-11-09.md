# ByteWise IT Tips – audit, fixes and AdSense readiness report

Date: 9 November 2026 · Site: https://bytewiseittips.com · Repository: itt01gsweighbridge-lgtm/bytewiseittips
Rollback point: commit `c67d24c` (state before this audit). To roll back: revert the later commits in GitHub.

Status key: **PASS** verified · **FIXED** corrected and retested · **WARNING** improvement still advisable · **BLOCKED** needs access/information · **NOT TESTED**

## Summary table

| Item | Status | Result / evidence |
|---|---|---|
| Contact email replacement | **FIXED** | `itt01.gsweighbridge@gmail.com` removed from all source files, settings and the built site (automated scan: 0 occurrences). `nebshe@gmail.com` now on Contact, footer (every page), About, Privacy, Cookie, Terms, Editorial, Corrections, Accessibility, Author and Organization structured data. Live pages spot-checked (Privacy, Author, articles): only nebshe@gmail.com. |
| Old email in Git commit history | **WARNING** | The first three commits on GitHub are signed with the old address. Rewriting history is destructive, so it was left; all new commits use nebshe@gmail.com. |
| Contact form | **FIXED / partly NOT TESTED** | Web3Forms form added (name, email, topic, message, consent, honeypot spam trap, client-side validation, privacy notice). A live test message was submitted on 9 Nov 2026 and the service returned success. **Delivery to the inbox must be confirmed by the owner.** |
| Contact page | **FIXED** | Title “Contact ByteWise IT Tips”, contact card with email, response time and operator; scam warning (never asks for passwords/payment/remote access) preserved. |
| Author credibility | **FIXED** | Author page now names Sador (founder and editor, IT governance and administration professional), experience, expertise, editorial responsibilities, verification process, AI-use disclosure, contact. No credentials invented; qualifications section hidden until real ones are added. ProfilePage/Person schema added. |
| Misleading publication dates | **FIXED** | Articles previously showed dates from September–November although all went live on 7 Nov 2026. Dates corrected to the real publication date. |
| “Popular” label without data | **FIXED** | Renamed “Common fixes”. |
| AI-assisted content disclosure | **FIXED** | Every article ends with “drafted with AI assistance, checked against the official documentation listed above … last reviewed [date]”; byline shows the editor. |
| Mobile/tablet layout | **FIXED** | Viewport tests found horizontal overflow on the homepage at 360–390 px and header overflow at 1024 px, plus 20 px-tall tap targets. Fixed and retested: no overflow on 11 key pages at 360, 390, 768, 1024 and 1440 px in light and dark mode. |
| Stale CSS after same-day updates | **FIXED** | Asset URLs now use content hashes, so visitors always get the latest CSS/JS. |
| Dark/light mode | **PASS** | Toggle and persistence tested; dark-mode pages render without overflow. |
| Navigation, search, 404 | **PASS** | 36/36 browser tests (navigation, search incl. XSS escaping, mobile menu, keyboard skip link, TOC, FAQ, related guides, consent banner, ad-slot labelling, 404). |
| Internal links / metadata | **PASS** | Automated test: 58 pages, 3,600+ internal links/assets, 0 broken; unique titles/descriptions; canonical, OG image, one H1, valid JSON-LD on every page. |
| HTML validity | **PASS** | html-validate: 0 errors (1 honeypot attribute error found and fixed). |
| Structured data | **FIXED** | Added Organization (logo, email, founder, YouTube sameAs) and ProfilePage/Person; articles now include editor and publisher @id. Existing TechArticle, BreadcrumbList, FAQPage, WebSite retained. |
| XML sitemap / robots.txt | **PASS** | 45 canonical, indexable URLs (no search/404/admin pages); robots.txt allows crawling, blocks /admin/ and /search/, lists sitemap. Both publicly reachable. |
| Google Search Console | **FIXED / WARNING** | Property https://bytewiseittips.com/ verified (HTML tag, auto-verified) with itt01.gsweighbridge@gmail.com. Sitemap submitted 9 Nov 2026; status initially “Couldn’t fetch”, which normally clears on Google’s next read – check in a few days. |
| Performance (live, PageSpeed Insights, 9 Nov 10:59) | **PASS** | Mobile: Performance 99, Accessibility 100, Best Practices 100, SEO 100; LCP 0.9 s, CLS 0, TBT 0 ms. Desktop: 100/100/100/100; LCP 0.3 s, CLS 0. INP field data: not yet available (new site, no real-user data). |
| HTTPS | **PASS** | Valid certificate, HTTPS enforced in GitHub Pages; www redirects to the apex domain. |
| Security headers | **WARNING** | GitHub Pages does not allow custom HTTP headers (CSP, X-Frame-Options, HSTS). Referrer-Policy added via meta tag. For full headers, move hosting to Cloudflare Pages (`src/_headers` is ready). |
| Dependencies | **PASS** | `npm audit`: 0 vulnerabilities. |
| Secrets | **PASS** | No secrets in the repository. Web3Forms key and Search Console code are public identifiers by design. |
| Backups / recovery | **PASS** | Full Git history on GitHub; any commit can be restored; rollback point recorded above. |
| Access permissions | **PASS** | Admin panel requires a GitHub token with write access to this one repository; Claude GitHub App limited to this repository. |
| ads.txt | **PASS** | Present with comments only – correct until a real publisher ID exists. No fake IDs, no ad code loaded. |
| Consent (UK/EEA/CH) | **WARNING** | Built-in consent banner and Consent Mode v2 are ready and tested. Once AdSense is set up, publish Google’s certified CMP message (AdSense › Privacy & messaging) and switch Consent provider to “Google certified CMP”. |
| Content quality | **PASS / WARNING** | 30 original articles (720–1,340 words), official sources verified, FAQs, internal links, no duplicates or keyword stuffing. Warnings: no screenshots (none were invented; adding your own screenshots would strengthen the guides); owner should read the guides. |
| Ongoing content | **FIXED** | Scheduled task publishes one researched, tested article every Mon/Wed/Fri/Sat at 08:23 (Juba time), starting 11 Nov 2026. |

## AdSense readiness verdict

**The site meets the published technical and policy prerequisites for an AdSense review**: own domain over HTTPS, original and useful content, clear navigation, About/Contact/Privacy/Terms/Cookie/Editorial/Corrections pages, a real named editor and working contact details, no prohibited content, no misleading elements, crawlable and verified in Search Console, fast and mobile-friendly.

Google decides approval; no outcome is guaranteed. Remaining risks:

1. **Indexing:** the site is two days old and not yet indexed. Many publishers wait until Search Console shows pages as indexed (typically days to weeks) before applying.
2. **Scale of AI-assisted content:** Google evaluates helpfulness, not authorship method, but a new site whose content is mostly AI-assisted carries some risk. Personal screenshots, real examples and your own edits reduce it.
3. **Contact delivery** must be confirmed in the nebshe@gmail.com inbox.

## Changed files (this audit)

`src/_data/site.json`, `src/_data/author.json`, `src/pages/contact.md`, `src/pages/author.md`, `src/pages/about.md`, `src/pages/terms.md`, `src/pages/editorial-policy.md`, `src/pages/corrections-policy.md`, `src/pages/cookie-policy.md`, `src/pages/accessibility.md`, `src/_includes/layouts/base.njk`, `src/_includes/layouts/article.njk`, `src/_includes/partials/schema.njk`, `src/_includes/partials/footer.njk`, `src/index.njk`, `src/assets/css/main.css`, `src/admin/config.yml`, `eleventy.config.js`, all 30 `src/articles/*.md` (date correction).
