// Central place for site-wide config. Edit the values below once and they
// propagate everywhere (header, footer, CTAs, meta tags).

export const SITE_TITLE = "TemplateNest";
export const SITE_TAGLINE = "Templates that make your work — and your desk — feel put-together.";
export const SITE_DESCRIPTION =
  "TemplateNest is a home for thoughtfully designed Notion, Canva, and PowerPoint templates, plus honest advice on choosing and using them.";

// TODO: replace with your real storefront URLs before launch.
export const ETSY_URL = "https://www.etsy.com/shop/TemplateNest";
export const PAYHIP_URL = "https://payhip.com/TemplateNest";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/shop/", label: "Shop" },
  { href: "/about/", label: "About" },
];

export const SOCIALS = [
  { label: "Etsy", href: ETSY_URL },
  { label: "Payhip", href: PAYHIP_URL },
];

// Astro's BASE_URL already accounts for the `base` option in astro.config.mjs
// (e.g. "/" when deployed at a domain root, "/repo-name/" on GitHub Pages
// project sites). Use `url()` for every internal link/asset path so the site
// keeps working under either setup without edits elsewhere.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "") + "/";
  const clean = path.replace(/^\/+/, "");
  return clean ? `${base}${clean}` : base;
}
