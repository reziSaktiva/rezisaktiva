# Decision ADR-027

### Title

M10 Must R1 = bottom project context sheet (not case route, not direct jump to live/repo)

### Status

Accepted

### Date

2026-08-26

### Decision

1. **M10** enters **Must R1** as a **bottom overlay** — not page `/[locale]/work/[slug]`. Same overlay pattern as Quick Info (not a route); entry from **below**.
2. **Click tile on Work index** opens that sheet — **not** direct navigation to live site or GitHub repo.
3. Sheet content (required slots, bilingual ID/EN, Boss Rezi–locked copy — AI does not invent):
   - **Images / live preview** — order: embed live site iframe (not GitHub) when URL exists and site allows framing; if not, image gallery; if neither, empty media section
   - **Services**
   - **Location or company** & **year**
   - **Description**
4. **Live** link (site, not GitHub) may appear **inside the sheet** and on the case page as secondary action. **Repo link not shown** on sheet or case page (locked chat 2026-09-15). `gitHref` may remain in JSON, without UI.
5. **Component:** try **Astryx `BottomSheet`** first (`purpose='info'`, `height`/`snapPoints` per content, a11y `label`). If `rezisaktiva` theme/craft is insufficient, **custom bottom overlay** fallback (`quick-info.tsx` pattern + Lenis lock). Not shadcn yet (ADR-026).
6. Implementation = **T-026** in `tickets/r1.md`. **Done before R1 exit (`T-018`)** — not deferred to R2. **T-018** waits for T-021.1–T-021.7 **and** T-026.
7. Full case page `/work/[slug]` is **not** R1; if needed later, separate ADR (may be R2+).

This **overrides** ADR-020 (M10 stayed R2) and ADR-010 (no detail magnet in MVP) **only** for this overlay shape — not for case-study route.

### Reason

- Boss Rezi wants visitors to understand what a project is and how it was built **before** leaving the site, and wants that work **before the planned R1 exit**, not after T-018.
- Overlay keeps **UX3** (no new page). Bottom entry fits Astryx `BottomSheet`.

### Alternatives Considered

- Route `/work/[slug]` as M10 — rejected for R1.
- Keep tile → external URL — rejected; no in-site context.
- Defer T-026 until after T-018 / R2 — **rejected 2026-08-26**; Boss Rezi locked work before R1 exit.
- shadcn `Sheet` `side="bottom"` — rejected for now (ADR-026).

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md`, `feature-priority.md`, `mvp-definition.md`, `release-roadmap.md`, `product-scope.md`
- `04-ux/information-architecture.md`, `key-screen-patterns.md`, `navigation-patterns.md`, `user-flows.md`, `ux-principles.md`
- `05-architecture/application-layer.md`, `domain-model.md`
- Task **T-026** in `tickets/r1.md`; **T-018** waits for T-026
- Sheet copy: **T-026.1** (not T-021 / v10)

### Update — 2026-08-26 (order)

Early ADR draft placed T-026 after T-018. **Reversed** same day: Must R1, before T-018.

### Update — 2026-09-07 (ADR-032)

Home teaser **removed**. M10 sheet only from Work index tile. Home no longer has “All projects” link.

### Update — 2026-09-01 (live preview in sheet)

Media section: **live site iframe** first (non-GitHub http(s) URL). Framing refused / timeout → **gallery**. No gallery → **empty**. Live link (not Repo) secondary in body.

### Update — 2026-09-15 (no Repo link)

Sheet and case page **do not** show Repo action. Live remains if URL is not GitHub.

### Update — 2026-09-03 (ADR-028)

M10 sheet primitive = shadcn bottom `Drawer` (T-035), full width, skinned `.ps-*`. Point 5 (“try Astryx BottomSheet / no shadcn yet”) is R1 history (ADR-026); T-026.2 already used custom overlay fallback, then T-035 replaced with Drawer. Product decision (bottom overlay, not `/work/[slug]`) **stands**. See [ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md).

### Update — 2026-09-14 (ADR-044)

**R2** case page = `/[locale]/projects/[slug]` (hybrid). Tile **still** opens sheet. Case page **does not** replace M10. Historical name `/work/[slug]` is not used as route.