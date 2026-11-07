# ByteWise IT Tips

A complete, production-ready technology education and troubleshooting website, built to be fast, trustworthy and ready for a Google AdSense application.

- **30 original articles** across 10 categories (Windows, hardware, networking, Microsoft 365, cybersecurity, Android, software, IT tutorials, AI tools, buying guides), each with step-by-step instructions, FAQs, checked official sources and internal links.
- **All essential pages:** Home, About, Contact, Privacy Policy, Terms, Cookie Policy, Disclaimer, Editorial Policy, Corrections Policy, All Articles, Categories, Search, custom 404, HTML sitemap, Author profile, Accessibility statement.
- **Admin panel** at `/admin/` (Sveltia CMS) for creating, editing, scheduling and previewing articles, uploading images, editing pages, menus, categories, SEO fields and advertising settings – no coding needed.
- **SEO:** unique titles and descriptions, canonical URLs, XML sitemap, robots.txt, Open Graph/Twitter cards, Article + Breadcrumb + FAQ + WebSite structured data, RSS/Atom feed.
- **AdSense-ready:** publisher-ID setting, Auto ads script, optional labelled manual ad units, generated `ads.txt`, Google Consent Mode v2 and a consent banner, plus support for Google's certified CMP. Nothing ad-related loads until you enter a real ID.
- **Fast & accessible:** static HTML, ~21 KB CSS, ~6 KB JS, self-hosted fonts, dark mode, keyboard navigation, WCAG-minded colour contrast. Lighthouse 99–100 on indexable pages in local testing.

## Technology

| Part | Choice | Why |
|---|---|---|
| Site generator | [Eleventy 3](https://www.11ty.dev/) (Node.js) | Plain HTML output: fast, secure, cheap to host |
| Content | Markdown + JSON in Git | Portable, versioned, easy backups |
| Admin panel | [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (open source) | Browser-based editing with GitHub sign-in; no database or server |
| Hosting | GitHub Pages (free) – Cloudflare Pages also supported | HTTPS, CDN, zero cost |
| Deployment | GitHub Actions | Auto-deploy on every save + daily rebuild for scheduled posts |
| Contact form | Web3Forms (free) | Email delivery without a server |

## Quick start (local)

```bash
npm ci
npm run dev            # http://localhost:8080 – drafts and future posts visible
npm run build          # production build into _site/
npm test               # automated checks on _site/
npm run check          # publication readiness (blocks deploy until owner info is filled in)
```

Node.js 20 or newer is required (22 recommended).

## Going live

Follow **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** – about 30 minutes, no coding.

## Documentation

| Document | Contents |
|---|---|
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Free hosting, domain, GitHub Pages / Cloudflare Pages, backups |
| [docs/ADMIN-MANUAL.md](docs/ADMIN-MANUAL.md) | Using the admin panel day to day |
| [docs/ADSENSE-READINESS.md](docs/ADSENSE-READINESS.md) | AdSense audit checklist (PASS / NEEDS ACTION / NOT VERIFIED) and setup steps |
| [docs/TEST-REPORT.md](docs/TEST-REPORT.md) | What was tested and the results |
| [docs/SECURITY-PERFORMANCE.md](docs/SECURITY-PERFORMANCE.md) | Security model and performance report |

## Project structure

```
src/
  articles/          30 articles (Markdown). Front matter = SEO fields, FAQ, sources
  pages/             About, legal and policy pages
  _data/             site.json (settings), navigation.json, author.json, categories.js
  _settings/         categories.json (edited in admin)
  _includes/         layouts and partials (header, footer, consent, ad slots, schema)
  assets/            CSS, JS, fonts, original SVG/JPG artwork
  admin/             admin panel + config.yml
scripts/             publish-check, automated tests, artwork generator
.github/workflows/   build & deploy pipeline
docs/                manuals and reports
```

## Important

- AdSense approval is decided by Google. This project prepares the site; it cannot guarantee approval.
- AdSense only accepts sites on a domain you own (for example `yourdomain.com`), not free subdomains such as `*.github.io`. See DEPLOYMENT.md.
- The articles were drafted with AI assistance and checked against official documentation. Before publishing, the owner should read and approve them (see the Editorial Policy).
