# Decision ADR-044

### Title

R2 magnet = hybrid: M10 sheet remains; shareable case page at `/[locale]/projects/[slug]`

### Status

Accepted

### Date

2026-09-14

### Decision

1. **R2 activates light magnet ADR-007** as **case page**, without removing M10 overlay.
2. **Click tile on Work index** still opens **bottom project sheet** (**ADR-027**). Not direct navigation to case page, live, or repo.
3. **Inside sheet**, primary in-site **“read more”** link (ID/EN copy locked in copy task) to **`/[locale]/projects/[slug]`**. **Live** (site, not GitHub) may be secondary on sheet and case page. **Repo not shown** (ADR-027 update, 2026-09-15).
4. **Case URL is magnet:** direct open, shareable, locale switch to sibling path. Does not auto-open sheet.
5. **Slug** = stable kebab-case string in `content/data/projects.json` (not numeric id). Works in `hiddenIds` **have no** public route.
6. **Shape:** SSG + `generateStaticParams` (locale × visible slug) — **ADR-015**. `page.tsx` stays Server Component. Content in repo; **not** CMS.
7. **Page content** may reuse sheet slots (media, services, location/company, year, description) plus short narrative/process block if Boss Rezi locks copy. **AI does not invent** case facts or story.
8. **Chrome:** Proyek/Projects chip = active on index **and** case page. Contact footer strip remains (ADR-041). Quick Info remains (ADR-022).
9. **Not R2:** blog, CMS, auth, pricing, remove sheet, route `/work/[slug]` (production index already `/projects`; `/work` still redirects to `/projects`).
10. **R2 exit:** ≥1 live case page with locked copy + link from sheet + shareable URL. Implementation = **T-056**.

This **does not** supersede ADR-027. Overlay stays skim; page = deeper layer with URL.

### Reason

- R2 roadmap fork “case page or deeper sheet” locked Boss Rezi as **hybrid** (2026-09-14).
- Sheet already gives in-site context without new tab; ADR-007 magnet needs **URL per work** (sheet not share destination).
- Path follows IA (`/projects/[slug]`), aligned with index **ADR-020**, not historical `/work/[slug]` name.

### Alternatives Considered

- Case page only (tile straight to `[slug]`, sheet removed) — rejected; discards live F7 pattern.
- Sheet deepening only (no route) — rejected; not shareable, does not meet URL magnet.
- One flagship case page, rest sheet-only — rejected as default R2; visible catalog may have routes; copy depth may be phased.
- Path `/work/[slug]` — rejected; index already `/projects`.

### Impact / Follow-up

- `product-discovery/02-product/` — modules, priority, MVP, scope, roadmap
- `product-discovery/04-ux/` — IA, nav, flows, screen patterns, principles
- `product-discovery/05-architecture/` — domain-model, application-layer
- [ADR-027](ADR-027-work-project-bottom-sheet-m10.md) — R2 note; overlay stands
- Task **T-056** in `tickets/r2.md`
- Code: do not start before copy/slug **T-056.2** locked Boss Rezi