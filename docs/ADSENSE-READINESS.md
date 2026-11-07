# Google AdSense readiness audit

Audit date: 7 November 2026 · Audited build: production build of this repository.

> **Google makes every approval decision.** This checklist reflects Google’s published AdSense Program Policies, eligibility requirements and consent requirements as researched at build time. It does not and cannot guarantee approval, and no approval percentage is claimed.

Status key: **PASS** = met and verified in this build · **NEEDS ACTION** = owner must complete · **NOT VERIFIED** = cannot be confirmed until the site is live or depends on Google/the owner.

Key official references:
- AdSense Program policies – https://support.google.com/adsense/answer/48182
- AdSense eligibility requirements – https://support.google.com/adsense/answer/9724
- What can be added as a site (domains only) – https://support.google.com/adsense/answer/12170421
- Consent requirements for EEA/UK/Switzerland (certified CMP) – https://support.google.com/adsense/answer/13554116

---

## 1. Content originality and usefulness

| Requirement | Status | Evidence / action |
|---|---|---|
| Original content, not copied, scraped or spun | **PASS** | 30 articles written specifically for this site; no third-party text reproduced. |
| Substantial, people-first content | **PASS** | Articles 720–1,340 words of body text plus FAQs; automated test fails any article under 700 words. |
| Practical, step-by-step and accurate | **PASS** | Steps checked against official vendor and government documentation; 60+ source links verified as reachable on 7 Nov 2026. |
| No fabricated tests, reviews, benchmarks or experience | **PASS** | Buying guides compare published specifications and are labelled as such; no hands-on claims. |
| Enough content to review | **PASS** | 30 articles across 10 categories, no empty categories. |
| Human editorial review of AI-assisted drafts | **NEEDS ACTION** | Articles were drafted with AI assistance and fact-checked during development. **The owner must read and approve every article before launch**, as stated in the Editorial Policy. |
| Ongoing publishing | **NEEDS ACTION** | Add new, genuinely useful guides regularly (e.g. 1–2 per week) rather than in bulk. |
| No placeholder or “coming soon” content | **PASS** | Automated test checks for placeholder text; deploy is blocked until owner fields are filled. |

## 2. Navigation and user experience

| Requirement | Status | Evidence / action |
|---|---|---|
| Clear main navigation | **PASS** | Header menu, category chips, breadcrumbs, footer links on every page. |
| Working internal links | **PASS** | 3,600+ internal links/assets checked automatically: 0 broken. |
| Search | **PASS** | On-site search tested (results, no results, HTML escaping). |
| Mobile-friendly | **PASS** | Tested at 375 px: no horizontal overflow, working mobile menu. |
| Custom 404 page | **PASS** | Includes search and links to key pages. |
| HTML sitemap | **PASS** | `/sitemap/` lists all pages and articles. |
| No intrusive pop-ups or interstitials | **PASS** | Only a small, non-blocking consent panel when optional cookies are enabled. |

## 3. Technical functionality

| Requirement | Status | Evidence / action |
|---|---|---|
| Site loads reliably over HTTPS | **NOT VERIFIED** | GitHub Pages / Cloudflare Pages provide HTTPS; confirm after deployment and custom-domain setup (tick *Enforce HTTPS*). |
| Fast performance | **PASS** | Lighthouse (local, mobile emulation): Performance 99–100, CLS 0, TBT 0 ms on home, article, category, policy and contact pages. Re-test after going live. |
| Valid structured data | **PASS** | All JSON-LD parses; TechArticle, BreadcrumbList, FAQPage, WebSite. Validate live with Google’s Rich Results Test. |
| No JavaScript errors | **PASS** | Browser test suite recorded no errors. |
| Contact form works | **NOT VERIFIED** | Client-side validation built; delivery requires your Web3Forms key – send a test message after setup. |

## 4. Trust and transparency

| Requirement | Status | Evidence / action |
|---|---|---|
| About page explaining purpose | **PASS** | `/about/` |
| Real owner identity | **NEEDS ACTION** | Enter owner name and country (Settings › Website settings). Deploy is blocked until done. |
| Contact method | **NEEDS ACTION** | Add Web3Forms key and/or public email. |
| Author information | **NEEDS ACTION (recommended)** | Add editor’s real name and truthful bio in Settings › Author profile. |
| Editorial and corrections policies | **PASS** | `/editorial-policy/`, `/corrections-policy/`, including AI-use disclosure. |
| Disclaimer and terms | **PASS** | `/disclaimer/`, `/terms/` |
| Accessibility statement | **PASS** | `/accessibility/` |
| Independence / non-affiliation stated | **PASS** | Footer and Disclaimer. |

## 5. Privacy and consent

| Requirement | Status | Evidence / action |
|---|---|---|
| Privacy policy mentioning Google, cookies and opt-out | **PASS** | Includes the third-party vendor/Google cookie disclosure, Ads Settings and aboutads.info/youronlinechoices links, data rights for UK/EEA/US/Canada/Australia. |
| Cookie policy | **PASS** | Lists essential storage, GA4 and AdSense cookies. |
| Consent before optional cookies | **PASS** | Consent Mode v2 defaults to *denied*; banner with equal-weight Accept/Reject/Customise; choice persisted and re-openable from footer (tested). |
| Google-certified CMP for EEA/UK/Swiss ad traffic | **NEEDS ACTION** | Required by Google when serving ads to those users. In AdSense › **Privacy & messaging**, create and publish the **European regulations** message (Google’s own certified CMP), then set *Consent provider = Google certified CMP* in Admin. |
| US state privacy (optional message) | **NOT VERIFIED** | AdSense Privacy & messaging also offers a US state regulations message – consider enabling it. |
| Legal review | **NOT VERIFIED** | Policies are a strong general template, not legal advice; review for your jurisdiction/business type. |

## 6. Search engine accessibility

| Requirement | Status | Evidence / action |
|---|---|---|
| robots.txt allows crawling | **PASS** | Allows all except `/admin/` and `/search/`; lists sitemap. |
| XML sitemap | **PASS** | 45 URLs, all verified to exist; excludes noindex pages. |
| Unique titles and descriptions | **PASS** | Automated test: no duplicates across 58 pages. |
| Canonical URLs, Open Graph, one H1 per page | **PASS** | Automated test. |
| Search Console verification & sitemap submission | **NEEDS ACTION** | See DEPLOYMENT.md. |
| Pages indexed by Google | **NOT VERIFIED** | Check Search Console › Pages a few weeks after launch. Many publishers wait until key pages are indexed before applying. |

## 7. Content policy compliance

| Requirement | Status | Evidence / action |
|---|---|---|
| No prohibited content (adult, violent, dangerous, hacking/cracking, piracy, misleading claims) | **PASS** | Topics are mainstream IT troubleshooting. Security articles are defensive; no instructions for unauthorised access. Piracy explicitly discouraged. |
| No copyright infringement | **PASS** | All artwork generated for this project; fonts under SIL Open Font Licence; no third-party images. |
| No deceptive elements | **PASS** | No fake download buttons, fake reviews, fake scarcity or misleading structured data. |

## 8. AdSense integration readiness

| Requirement | Status | Evidence / action |
|---|---|---|
| Configurable publisher ID | **PASS** | Admin › Settings › Google AdSense; build fails if the ID format is invalid (tested). |
| Site-wide AdSense script / Auto ads | **PASS** | Injected in `<head>` only when enabled with a valid ID; site-verification meta tag added (tested with a simulated ID). |
| Optional manual ad units | **PASS** | Two in-article positions, labelled “Advertisement”, separated from content, only rendered when slot IDs exist. |
| ads.txt | **PASS** | Generated automatically from the publisher ID (`google.com, pub-…, DIRECT, f08c47fec0942fa0`); before that it contains only comments. |
| Ads don’t interfere with navigation | **PASS** | No ads in header, menus, near buttons or as overlays; reserved space prevents layout shift. |
| No fake IDs or approval claims | **PASS** | No publisher ID shipped; site never claims approval. |
| Real ads not active yet | **PASS** | `adsense.enabled = false` by default. |
| Own domain for AdSense | **NEEDS ACTION** | AdSense accepts domains only, not `*.github.io` subdomains. Buy a domain and connect it before applying. |

## 9. Remaining publication requirements (owner)

1. Read and approve all 30 articles (and edit anything you would phrase differently).
2. Buy a domain and connect it (DEPLOYMENT.md › Step 6).
3. Fill in owner name, country, contact method and author details.
4. Deploy, test the contact form, and confirm HTTPS.
5. Verify the site in Google Search Console and submit the sitemap.
6. Optionally add GA4.
7. Keep publishing quality guides; wait until the site is indexed.
8. Apply for AdSense yourself with the domain.

## Setting up AdSense (after you create your account)

1. In AdSense: **Sites › New site**, enter your domain.
2. Copy your publisher ID (`ca-pub-` + 16 digits). Admin › **Settings › Google AdSense**: paste the ID, tick **Enable AdSense**, save. The AdSense code, the `google-adsense-account` meta tag and `ads.txt` are added automatically within ~3 minutes.
3. Back in AdSense, choose the **AdSense code snippet** or **ads.txt** verification method and click **Verify**, then **Request review**.
4. **Privacy & messaging:** create and publish the **European regulations** message for your site. Then set **Consent provider** to *Google certified CMP* in Admin.
5. After approval: enable **Auto ads** in AdSense (and optionally create display ad units and paste their slot IDs in Admin).
6. Never click your own ads, ask others to click them, or place ads where they could be mistaken for navigation or download buttons.
