# Decision ADR-032

### Title

Home = one section (hero + Now); AI proof on About; work only on Work index

### Status

Accepted

Amended by [ADR-054](ADR-054-s002-surface-decisions.md) (2026-11-17, at cutover): the Work teaser returns on Home.

### Date

2026-09-07

### Decision

1. **Home** is **one section** only: hero lede + two-line display `h1` (ADR-038). **Now not on Home.** Not multi-block scroll. Hero wallpaper (if any) stays on this surface.
2. **AI proof claim** (T-021.2 “Bukti / Proof” copy) moves to **About** as **new section after hero**, before offers. Copy not rewritten.
3. **Work teaser on Home removed.** Catalog + M10 sheet remain on `/[locale]/projects`. No new “Selected projects” section on Work index — items that were teaser already exist in catalog.
4. **M4 (Work teaser as Home section) retired.** Work proof presence = **M9 + M10**. Contact modal + Quick Info **unchanged**. **Update (ADR-041):** Contact footer strip on Home (after `#about`); Workflow + Work index remain. **Update (ADR-035):** working style moves to `/workflow`; AI proof stays on About. **Update (ADR-037):** Now moves to About; Home = lede + h1.

This **overrides** Hybrid lean placing teaser + credibility line on Home (ADR-010, ADR-014 IA, ADR-027 Home teaser note). **Update (2026-09-08, ADR-040):** Home = hero + `#about` + footer strip (ADR-041). `#proof` removed. R1 pages = Home, Workflow, Work index.

### Reason

- Boss Rezi locked (2026-09-07): simpler site; Home not verbose. AI proof belongs on About; work belongs on Projects page.
- Work index already shows full catalog, including work previously curated as Home teaser.

### Alternatives Considered

- Move teaser layout above Work catalog — rejected; enough to remove from Home.
- Merge AI proof claim into existing About Approach/offers copy — rejected; new section after hero.
- Rewrite T-021 copy — rejected at T-044; **Home h1 later rewritten ADR-036**.

### Impact / Follow-up

- Code: `home-page.tsx` hero + `#about` (ADR-040); `#proof` removed; remove `home-work-teasers.tsx` / `home-work-all-link.tsx`; drop `homeTeaserIds` from `projects.json`.
- Docs: `04-ux/` (IA, key screens, flows, nav), `02-product/` (M1/M4/M9, MVP, scope), `03-user/user-journey.md`, `05-architecture/` (domain, application layer), ADR-010 / ADR-027 update notes.
- Task **T-044**. **T-042.1** follows Home hero-only (not restyle of proof/teaser blocks that no longer exist).