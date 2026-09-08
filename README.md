# TemplateNest

A content blog built with [Astro](https://astro.build) + Tailwind CSS, designed to drive traffic
to a Notion / Canva / PowerPoint template shop on **Etsy** and **Payhip**.

## Before you launch — replace the placeholders

Everything below is a placeholder and needs to be swapped for your real data before this goes live:

1. **Store links** — `src/consts.ts` has `ETSY_URL` and `PAYHIP_URL`. Replace both with your real
   shop URLs. They're used everywhere (header, footer, CTAs) from this one file.
2. **Site URL** — `astro.config.mjs`'s `site`/`base` fields and `public/robots.txt`'s `Sitemap`
   line currently point at the live GitHub Pages URL (see "Deploying" below). If you move to a
   custom domain or Cloudflare/Netlify at the root, update `site` to that domain and **delete the
   `base` line** in `astro.config.mjs` — then run a find-and-replace for
   `https://pixlite-tools.github.io/Templatenest-blog` across the repo.
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

**This site is currently live on GitHub Pages**, deployed automatically by
`.github/workflows/deploy.yml` on every push to `main`:

> https://pixlite-tools.github.io/Templatenest-blog/

No manual steps needed — push to `main` and the workflow builds and redeploys the site. Because
it's a GitHub Pages *project* site (not a custom domain), `astro.config.mjs` sets
`base: "/Templatenest-blog"` so all internal links resolve correctly under that subpath (see the
`url()` helper in `src/consts.ts` — every internal `href`/asset path in the codebase goes through
it for this reason).

This is a static site (`astro build` outputs to `dist/`), so it also deploys for free to any other
static host if you'd rather move off GitHub Pages later:

- **Cloudflare Pages**: connect the GitHub repo, build command `npm run build`, output directory
  `dist`. Set a custom domain and delete the `base` line in `astro.config.mjs` (see above).
- **Netlify**: same build command/output directory.

No backend, database, or server is required — it's all pre-rendered HTML.

## SEO already wired up

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter card tags
  (`src/layouts/BaseLayout.astro`).
- Auto-generated sitemap (`@astrojs/sitemap`) at `/sitemap-index.xml`.
- RSS feed at `/rss.xml`.
- `robots.txt` in `public/`.

Once you set a real domain in `astro.config.mjs`, submit the sitemap URL to Google Search Console
and Bing Webmaster Tools to start getting indexed.
