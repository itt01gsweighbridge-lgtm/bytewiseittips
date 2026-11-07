# Security and performance report

## Architecture: why it is secure by design

ByteWise IT Tips is a **static website**. The public site is plain HTML, CSS and a little JavaScript served from a CDN. There is:

- **no server-side code** to exploit (no PHP, no WordPress plugins, no database);
- **no visitor accounts or passwords** to steal;
- **no database** to inject into or leak;
- **no secrets** in the code (the Web3Forms key and AdSense/GA4 IDs are public identifiers by design).

This removes the most common causes of small-site compromises (outdated CMS plugins, SQL injection, brute-forced admin logins).

## Security controls

| Control | Implementation |
|---|---|
| HTTPS | Provided by GitHub Pages / Cloudflare Pages; enable *Enforce HTTPS* after adding a domain. HSTS header included for Cloudflare Pages/Netlify (`src/_headers`). |
| Administrator authentication | Admin panel uses GitHub authentication. Only GitHub accounts with write access to the repository can sign in. Use a fine-grained token limited to one repository with *Contents: read/write* and an expiry date, and enable two-factor authentication on GitHub. |
| Audit trail and rollback | Every change is a signed-in Git commit with author and timestamp; any change can be reverted. |
| Deployment safeguards | CI blocks publishing if owner information is missing, if the AdSense ID format is invalid, or if automated tests fail (broken links, missing metadata, placeholder text). |
| Input validation | Contact form: client-side length and format validation, honeypot spam field, server-side validation and spam filtering by Web3Forms. Search input is length-limited and all output is HTML-escaped (XSS test passed). |
| File uploads | Only via the authenticated admin panel; images are converted to WebP, resized and size-limited (4 MB). Uploads are stored in Git, not executed. |
| Third-party scripts | None by default. Google Analytics and AdSense load only when configured, and only with consent-aware defaults. Admin script is pinned to a specific version. |
| Security headers | `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, HSTS (Cloudflare Pages/Netlify). GitHub Pages does not allow custom headers. |
| Privacy | `/admin/` and `/search/` are excluded from indexing; no tracking without consent. |
| External links | Opened with `rel="noopener noreferrer"`. |
| Error logging | Build and deploy logs in GitHub Actions; browser errors visible in Search Console/GA4 reports. Static hosting has no runtime server errors to log. |
| Backups | Full history in Git plus monthly ZIP download (see DEPLOYMENT.md). Recovery = redeploy from any commit. |

### Recommendations for the owner

1. Turn on **two-factor authentication** for your GitHub, Google and AdSense accounts.
2. Use **expiring fine-grained tokens** for the admin panel; revoke them if a device is lost.
3. Don’t add collaborators you don’t trust – anyone with write access can change the site.
4. If you later move to Cloudflare Pages, the security headers in `src/_headers` apply automatically.

## Performance

| Item | Value |
|---|---|
| CSS | ~21 KB (single file, minified in production HTML) |
| JavaScript | ~6 KB main script, deferred; search (3 KB) and contact (2 KB) scripts load only on their pages |
| Fonts | Inter + JetBrains Mono, self-hosted variable WOFF2 (48 KB + 40 KB), `font-display: swap`, main font preloaded |
| Images | Original SVG illustrations (~4–6 KB each), 1200×630 social images as optimised JPEG (~45 KB) |
| HTML | Minified in production |
| Lazy loading | Below-the-fold card images use `loading="lazy"`; images in the first row and article hero load eagerly |
| Layout stability | Width/height on all images; ad slots reserve space → CLS 0 |
| Caching | CDN caching by host; long cache for `/assets/*` on Cloudflare Pages; cache-busting query strings on CSS/JS |
| Lighthouse (local) | Performance 99–100, TBT 0 ms, CLS 0, LCP 1.5–2.0 s under simulated mobile throttling |

Adding AdSense will add third-party scripts and reduce performance scores somewhat; this is normal. Auto ads settings in AdSense let you limit ad density.
