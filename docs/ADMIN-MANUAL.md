# Administrator manual

Everything here is done in the browser at **`https://your-site/admin/`**. No programming is needed. Every save creates a version in GitHub and the site updates automatically about 2–3 minutes later.

---

## First-time setup checklist

Open **Settings › Website settings** and complete:

| Field | Required? | Notes |
|---|---|---|
| Website address | **Yes** | e.g. `https://www.yourdomain.com` (no trailing slash) |
| Owner / operator name | **Yes** | Shown on About, Privacy Policy and Terms |
| Country | **Yes** | Used in legal pages |
| Web3Forms access key **or** public contact email | **Yes (one of them)** | Makes the contact page work |
| Social profiles | Optional | Shown in the footer only when filled in |
| Search Console code | Optional | HTML-tag verification value |
| GA4 Measurement ID | Optional | Turns on analytics + consent banner |
| AdSense | Later | Only after Google gives you a publisher ID |

Then **Settings › Author profile**: add the editor’s real name and a short, **truthful** bio (only qualifications and experience you actually have). This is optional but strongly recommended for reader trust.

Until the required fields are filled, deployments stop with a clear message – this guarantees no “setup required” placeholders are ever published.

## Writing a new article

1. **Articles › New Article.**
2. Fill in:
   - **Title** – clear and specific, ideally 50–65 characters (“How to Fix … in Windows 11”).
   - **Meta description** – 120–160 characters summarising what the reader will learn. Must be unique.
   - **Publication date** – today, or a future date to schedule.
   - **Category**.
   - **Keywords** – a few terms readers might search; used by on-site search and related articles.
   - **Related article slugs** – pick 2–3 related guides.
   - **FAQ** – 2–4 genuine questions with short answers (these also become FAQ structured data).
   - **Sources** – the official pages you checked (Microsoft Learn, vendor help pages, NCSC, CISA…). Only list sources you actually read.
   - **Body** – the article. Use headings (`##`) for main steps – they build the table of contents automatically.
3. Leave **Draft** ticked while writing. Use the **preview pane** to see formatting.
4. When ready, untick **Draft** and **Save/Publish**.

### Formatting tips (Markdown)

```
## Step 1: Main heading         (appears in the table of contents)
### Sub-heading
**bold**, *italic*, `inline code`
- bullet list
1. numbered list
> A note or warning (shown as a highlighted box)
[link text](/articles/another-article-slug/)
```

Code/commands: put three back-ticks on the line before and after the command – readers get a **Copy** button automatically.

Tables: use the table button in the rich-text editor or Markdown table syntax.

### Quality rules (protects your AdSense application)

- Write for people: solve a real problem completely.
- Verify every technical step against official documentation.
- Never invent tests, reviews, statistics, quotes or personal experience.
- Link to 1–3 related ByteWise guides.
- If you use AI tools, treat output as a draft: fact-check and rewrite it before publishing (see the Editorial Policy).
- Avoid publishing many thin or near-duplicate pages – quality beats quantity.

## Scheduling

Set the **Publication date** in the future and untick **Draft**. The article stays hidden until that date; the site rebuilds daily at about 05:17 UTC and publishes it automatically. To publish immediately, change the date to today.

## Drafts and preview

- Ticked **Draft** = never published, even if the date has passed.
- The editor’s preview pane shows the content. To see a full site preview including drafts, run `npm run dev` on a computer (developer option).

## Images

- **Featured image** (optional): upload in the article form. If empty, the category illustration is used (original artwork, no licensing issues).
- Uploaded images are automatically converted to WebP and resized for speed.
- Always fill **Image alt text** – a short description for screen-reader users.
- Only upload images you created or are licensed to use. Screenshots of software you took yourself are fine.

## Editing pages

**Pages** contains About, Privacy Policy, Terms, Cookie Policy, Disclaimer, Editorial Policy, Corrections Policy, Accessibility, Contact and Author. Some contain small template tags such as `{% if site.owner.name %}` – edit the text around them but leave tags intact. Update the **Last updated** date when you change a policy.

> Have legal pages reviewed by a qualified professional for your jurisdiction if your circumstances are unusual (e.g. you run a registered company or collect more data). The provided pages are a solid general starting point, not legal advice.

## Categories and menus

- **Settings › Categories:** rename, re-colour or add categories. Don’t change the *slug* of a category that already has articles (it changes URLs).
- **Settings › Menus:** edit the top menu and footer links.

## Analytics

After adding a GA4 ID, review traffic at https://analytics.google.com (Reports › Engagement › Pages and screens). Search performance (queries, clicks, indexing problems) is in Google Search Console. Check Search Console’s **Pages** report monthly for errors.

## Advertising (after AdSense approval steps)

See **ADSENSE-READINESS.md › Setting up AdSense**. In short:

1. Add your site in AdSense; paste the publisher ID (`ca-pub-…`) into **Settings › Google AdSense** and tick **Enable**. This adds the AdSense code and `ads.txt` automatically.
2. In AdSense, publish the **European regulations message** (Privacy & messaging) and set **Consent provider** to *Google certified CMP*.
3. Turn Auto ads on/off inside your AdSense account. Optional manual units: create *Display* ad units in AdSense and paste their slot IDs.

Never click your own ads or ask anyone to click them.

## Corrections

When a reader reports an error: verify it, fix the article, set **Last meaningful update**, and for significant errors add a short note at the end, e.g. *“Correction (12 March 2027): Step 4 previously gave the wrong menu path.”*

## Routine maintenance

| How often | Task |
|---|---|
| Weekly | Answer contact messages; check Search Console for errors |
| Monthly | Download a backup ZIP from GitHub; review the oldest 3–5 guides for accuracy |
| Quarterly | Update dependencies (developer task); renew your GitHub token before it expires |
| Yearly | Review legal pages; renew domain |

## Troubleshooting

| Problem | Fix |
|---|---|
| Change not visible | Wait 3 minutes, hard-refresh (Ctrl+F5). Check the **Actions** tab in GitHub for a red cross and read the message. |
| Deployment failed “Publication blocked” | Fill in the missing settings listed in the error. |
| Admin login fails | Token expired or lacks *Contents: Read and write* for this repository – create a new one. Check `backend.repo` in `src/admin/config.yml`. |
| Build error after editing an article | Usually a malformed date or a missing required field; open the failed Action log, fix the article in admin. |
| Contact form says it couldn’t send | Check the Web3Forms key and that your Web3Forms email is verified. |
