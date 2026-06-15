---
name: SSR SEO pages pattern
description: How public pages get SEO meta/schema, and why they look blank in dev preview
---

# SSR SEO pages

All public, indexable pages are registered in `server/seo-routes.ts` via the `PAGE_SEO` map (keyed by exact path). `registerSEORoutes` adds an `app.get(route)` for each key that returns `index.html` with server-injected `<title>`, meta, OG/Twitter, canonical, and JSON-LD schema. `buildSitemap()` iterates `PAGE_SEO` keys, so adding a route there automatically puts it in `/sitemap.xml` (priority/changefreq come from `SITEMAP_META`, default 0.9/weekly).

To add a new indexable page/section: add its entry to `PAGE_SEO` (and optionally `SITEMAP_META`), then build the React page + register the wouter route in `client/src/App.tsx`. Shared content (e.g. blog posts) lives in `shared/` so both the server (SEO/sitemap) and client (rendering) import the same source — keeps meta and on-page content in sync.

**Why blank in dev:** the SSR routes serve raw `index.html` without Vite's React plugin transform, so the dev preview throws `@vitejs/plugin-react can't detect preamble` and renders a **blank white page for every SSR route** (homepage, profession pages, blog — all of them). This is a pre-existing dev-only quirk, NOT a bug in your page. Production serves the built `index.html`, which works. To verify SSR pages, `curl localhost:5000/<route>` and check the injected `<title>`/schema, and confirm `npm run build` passes — do not rely on the dev screenshot.

**Soft-404s:** for dynamic slug routes, add a fallback `app.get("/section/:slug")` AFTER the known-route loop that returns HTTP 404 + `<meta name="robots" content="noindex">`, so unknown URLs aren't soft-404 indexed.
