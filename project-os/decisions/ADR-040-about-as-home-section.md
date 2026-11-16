# Decision ADR-040

### Title

About is not a page; section `#about` on Home

### Status

Accepted

### Date

2026-09-07

### Decision

1. **About no longer a route.** Chip nav **Tentang / About** remains and points to `/{locale}#about`. `/[locale]/about` permanent redirect to `/{locale}#about`.
2. **Home** = hero (h1 + lede + wallpaper, ADR-038) **then** About section (Now, greeting, lead, artwork + caption — ADR-039). Single `h1` on Home hero; About title = `h2`.
3. **AI proof section (`#proof`) removed.** T-021.2 copy not shown in UI. About as section has no own footer. **Update (ADR-041):** Contact strip in Home layout, after hero + `#about`.
4. **Workflow and Work index** remain pages. JSON-LD: Home = `WebPage` (not `ProfilePage`). `Person.url` = Home. Sitemap without `/about` URL.

This **overrides** About as own page (ADR-025 / ADR-035) and Home hero-only (ADR-032) for About content.

### Reason

- Boss Rezi (2026-09-07): remove proof + contact on About, move About hero to Home, keep About in navbar, About = section not page.

### Alternatives Considered

- Keep `/about` without proof — rejected; Boss Rezi wanted not a page.
- Remove About chip — rejected; stays in nav.
- Move AI proof to Home — rejected; proof removed.

### Impact / Follow-up

- Code: `home-page.tsx`, `about-page.tsx` (`AboutSection`), `lib/nav.ts`, `next.config.ts` redirect, sitemap/`SITE_META`. Task **T-052**.
- Docs: IA, nav, key screens, ADR-032/035 notes.