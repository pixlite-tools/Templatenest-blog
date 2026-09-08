import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Currently deployed to GitHub Pages as a project site, hence the base path.
  // Moving to a custom domain / Cloudflare Pages / Netlify at the root later?
  // Set site to that domain and delete the `base` line.
  site: "https://pixlite-tools.github.io",
  base: "/Templatenest-blog",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
