# Deployment guide – free hosting

Time needed: about 30 minutes. Cost: **£0/$0** for hosting. A domain name (needed for AdSense) costs roughly $10–15 per year.

---

## The free setup we chose

| Need | Free service |
|---|---|
| Code storage, version history, backups | GitHub (free account) |
| Hosting with HTTPS and global CDN | GitHub Pages |
| Automatic building/deployment | GitHub Actions |
| Admin panel login | GitHub sign-in |
| Contact form email delivery | Web3Forms (free tier) |
| Analytics (optional) | Google Analytics 4 |
| Search indexing | Google Search Console |

### Why you will eventually need your own domain

Google AdSense now only lets you add **domains you own** (e.g. `bytewiseittips.com`) to your account. Free subdomains like `yourname.github.io`, `*.pages.dev` or `*.netlify.app` cannot be added as AdSense sites. You can launch for free on `github.io` today, build traffic and get indexed, then attach a domain later – the site is built so that this is a single setting.

Inexpensive registrars include Cloudflare Registrar (sold at cost), Porkbun and Namecheap. A `.com` is the safest choice for an international audience.

---

## Step 1 – Create a GitHub account and repository

1. Sign up at https://github.com (free).
2. Click **New repository**.
3. **Repository name:** `YOUR-USERNAME.github.io` (exactly your username followed by `.github.io`). This makes the site appear at `https://YOUR-USERNAME.github.io/` at the root – required because the site uses root-relative links.
   - If you will use your own domain from the start, any repository name works.
4. Choose **Public** (required for free GitHub Pages) and click **Create repository**.

## Step 2 – Upload the project

Easiest (no software): on the new repository page click **uploading an existing file**, then drag in **the contents** of the unzipped `bytewise-it-tips` folder (not the folder itself; include the hidden `.github` folder – on Windows enable *View › Show › Hidden items*; on macOS press Cmd+Shift+. in Finder). Commit to `main`.

Alternative with Git:

```bash
cd bytewise-it-tips
git init -b main
git add .
git commit -m "Initial site"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

## Step 3 – Turn on GitHub Pages

1. Repository **Settings › Pages**.
2. Under **Build and deployment › Source**, choose **GitHub Actions**.

## Step 4 – Fill in the required settings

The deployment is intentionally **blocked** until real owner information exists, so no placeholder text is ever published. Edit `src/_data/site.json` in GitHub (click the file › pencil icon), or use the admin panel after Step 5:

```json
"url": "https://YOUR-USERNAME.github.io",
"owner": { "name": "Your name or business name", "country": "United Kingdom", "contactEmail": "" },
"contact": { "web3formsAccessKey": "paste-key-here" }
```

- Get a free contact-form key at https://web3forms.com (enter the email address where you want messages delivered; the key is safe to be public).
- Optionally add a public `contactEmail`.

Also edit `src/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR-USERNAME/YOUR-USERNAME.github.io
site_url: https://YOUR-USERNAME.github.io
display_url: https://YOUR-USERNAME.github.io
```

Commit. Open the **Actions** tab – the “Build and deploy” workflow runs (2–3 minutes). Green tick = live at `https://YOUR-USERNAME.github.io/`. A red cross means a check failed; open the run to read the plain-English message (usually a missing setting).

## Step 5 – Sign in to the admin panel

1. Go to `https://YOUR-USERNAME.github.io/admin/`.
2. Click **Sign In with Token** (the dialog links to GitHub with the right permissions pre-selected).
3. Create a token at GitHub › **Settings › Developer settings › Personal access tokens › Fine-grained tokens › Generate new token**:
   - *Repository access:* Only select repositories › your site repository.
   - *Permissions › Repository permissions:* **Contents: Read and write** (Metadata read-only is added automatically).
   - Set an expiry (e.g. 90 days) and copy the token.
4. Paste it into the admin login. The token stays in your browser only. Never share it.

(Advanced: Sveltia CMS also supports a one-click GitHub OAuth login via a free Cloudflare Worker – see the Sveltia CMS documentation.)

## Step 6 – Connect your own domain (when ready)

1. Buy a domain.
2. GitHub repository **Settings › Pages › Custom domain**: enter `www.yourdomain.com` and save.
3. At your registrar’s DNS settings add:
   - `CNAME` record: `www` → `YOUR-USERNAME.github.io`
   - `A` records for the bare domain (`@`) pointing to GitHub Pages’ IP addresses, listed in GitHub’s documentation “Managing a custom domain for your GitHub Pages site”.
4. Wait for DNS to update (minutes to hours), then tick **Enforce HTTPS**.
5. Update `url` in `site.json` and `site_url`/`display_url` in `config.yml` to `https://www.yourdomain.com`.
6. In GitHub **Settings › Pages**, verify the domain (recommended, prevents takeover).

## Alternative: Cloudflare Pages (also free)

Cloudflare Pages adds the security headers in `src/_headers` and works well with Cloudflare Registrar.

1. Push the project to GitHub (any repository name).
2. Cloudflare dashboard › **Workers & Pages › Create › Pages › Connect to Git**, select the repository.
3. Build command: `npm run check && npm run build` · Output directory: `_site` · Environment variable: `NODE_VERSION = 22`.
4. Scheduled publishing: create a **Deploy hook** in Cloudflare Pages, then add a GitHub Actions cron job that calls it daily (or simply re-save any file on the day).
5. Delete `.github/workflows/deploy.yml` if you don’t use GitHub Pages.

## Google Search Console

1. https://search.google.com/search-console › **Add property**.
2. For a domain you own, choose **Domain** and verify with a DNS TXT record (best). Otherwise choose **URL prefix**, pick **HTML tag**, and paste only the `content` value into Admin › Settings › Google Search Console.
3. Submit `https://yourdomain/sitemap.xml` under **Sitemaps**.

## Google Analytics 4 (optional)

Create a GA4 property and web data stream for your domain, then paste the Measurement ID (`G-…`) into Admin › Settings › Google Analytics 4. The consent banner appears automatically, and analytics only runs after consent.

## Backups and recovery

- **Every change is a Git commit.** GitHub keeps the full history; any file can be restored from the **History** view.
- **Download a full backup** anytime: repository › **Code › Download ZIP**. Do this monthly and store it following the 3-2-1 rule (e.g. one copy on your PC, one on an external drive, one in cloud storage).
- **Restore a previous version of the whole site:** in GitHub, open the commit history, choose a known-good commit, and use **Revert** (or `git revert <commit>`). The site redeploys automatically.
- **Disaster recovery:** create a new repository, upload the backup ZIP, repeat Steps 3–5. The site is fully rebuilt from source in minutes – no database to restore.
- Uploaded images live in `src/assets/img/uploads/` and are included in every backup.

## Updating dependencies

Monthly or quarterly: run `npm outdated`, then `npm update`, `npm run build` and `npm test` locally before pushing. The admin panel script is pinned to a specific Sveltia CMS version in `src/admin/index.njk`; update the version number there when you want new admin features.
