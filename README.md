# TemplateNest

A content blog built with [Astro](https://astro.build) + Tailwind CSS, designed to drive traffic
to a Notion / Canva / PowerPoint template shop on **Etsy** and **Payhip**.

## Before you launch — replace the placeholders

Everything below is a placeholder and needs to be swapped for your real data before this goes live:

1. **Store links** — `src/consts.ts` has `ETSY_URL` and `PAYHIP_URL`. Replace both with your real
   shop URLs. They're used everywhere (header, footer, CTAs) from this one file.
2. **Site URL** — `astro.config.mjs`'s `site` field and `public/robots.txt`'s `Sitemap` line both
   use `https://templatenest.example.com`. Replace with your real domain once you have one (needed
   for the sitemap and RSS feed to generate correct absolute URLs).
3. **Shop page products** — `src/pages/shop.astro` has a `products` array of example listings
   (name, price, blurb). These are illustrative placeholders, not real products — replace them
   with your actual Etsy/Payhip catalog, or wire this page up to pull live listings via the Etsy
   and Payhip APIs if you want it to stay in sync automatically.
4. **Brand name** — "TemplateNest" appears in `src/consts.ts` (`SITE_TITLE`, `SITE_TAGLINE`,
   `SITE_DESCRIPTION`) and in `src/components/Mark.astro` (the wordmark + "N" monogram). Change the
   name there and it flows through the whole site.

## Adding a blog post

Add a new Markdown file to `src/content/blog/`, e.g. `my-new-post.md`:

```markdown
---
title: "Your Post Title"
description: "One or two sentences — this becomes the meta description and card preview."
pubDate: 2026-09-01
category: "Notion" # one of: Notion, Canva, Planning, Design, Guide, Comparison
tags: ["notion", "productivity"]
featured: false
---

Your content here, in Markdown.
```

It'll automatically show up on the homepage, `/blog/`, and the RSS feed — no other file needs
touching.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying

This is a static site (`astro build` outputs to `dist/`) and deploys for free to any static host:

- **Cloudflare Pages**: connect the GitHub repo, build command `npm run build`, output directory
  `dist`.
- **Netlify**: same build command/output directory.
- **GitHub Pages**: use the official [`withastro/action`](https://github.com/withastro/action).

No backend, database, or server is required — it's all pre-rendered HTML.

## SEO already wired up

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter card tags
  (`src/layouts/BaseLayout.astro`).
- Auto-generated sitemap (`@astrojs/sitemap`) at `/sitemap-index.xml`.
- RSS feed at `/rss.xml`.
- `robots.txt` in `public/`.

Once you set a real domain in `astro.config.mjs`, submit the sitemap URL to Google Search Console
and Bing Webmaster Tools to start getting indexed.
