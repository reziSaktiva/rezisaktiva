# Decision ADR-025

### Title

Craft pass Hess/Mazur — rhythm, type, interaction, and motion (not palette)

### Status

Accepted

### Date

2026-08-24

### Decision

1. **Raise R1 craft level** by mirroring layout rhythm, oversized type, rest/active interaction, and transitions from [karolinahess.com](https://karolinahess.com/about) and [mazurbartek.com](https://mazurbartek.com/) — **not** cream/terracotta palette, not Framer spectacle, not a playground without proof of work.
2. **About is section `#about` on Home** (ADR-040; overrides `/about` page). Working-style copy on Workflow **later superseded ADR-042**. About lead = one paragraph (ADR-039). Rest/active offers/values/process on Workflow **removed ADR-042**.
3. **Colors, `rezisaktiva` theme, 3D chrome elevation, Contact modal, and Quick Info are retained.** 3D chrome (`--elev-3d`, pill nav, buttons) is not changed in this pass except for regression fixes.
4. **Site motion foundation (once, all pages):**
   - Smooth-scroll inertia (Lenis, window scroll; AppShell `height="auto"`). **Pause** when Contact modal or Quick Info is open. **Off** if `prefers-reduced-motion`. Not native `scroll-behavior: smooth`. No heavy parallax (ADR-017 limits remain).
   - Page transitions follow karolinahess.com rhythm (CSS snapshot, not View Transitions API — Next App Router often times out DOM updates): old page rises + scale 0.5 for 1s; new page enters from below 0.4s after 0.4s delay; easing `cubic-bezier(0.65, 0, 0.43, 1)`. Gap color = theme `--color-background-body`, not Hess palette. Reduced-motion = instant page change. Chrome stays (nav does not scale).
5. **Contact unified with footer** on all routes: final strip (heading from locked copy + button opening the **existing Contact modal**) + legal/satellite row. Separate mid/end-page `#contact-cta` sections removed. Header Contact button remains (ADR-019). **Update (ADR-041):** Home renders this strip again (ADR-033 superseded).
6. **Home & Work put proof up front on the 2026-08-24 pass.** Home teaser **retired** ADR-032; `#proof` **removed** ADR-040. Tile/CTA hover strengthened; h1/section titles pulled toward larger display rhythm (token/`clamp`, not hex).
7. Astryx has no Lenis or page transitions — custom layer allowed. Page transitions use `--duration-page-*` / `--ease-page-transition` tokens (not `--duration-medium`). Existing scroll-reveal (`home-motion.tsx`) remains.

This is a **material extension vs ADR-017** (craft level + two new techniques: inertia scroll and page overlay), not a slip into T-021/T-024.

### Reason

- Boss Rezi locked Hess + Mazur motion/layout references after About felt “too thin”; the fix is craft + interaction, not removing pages or rewriting copy.
- ADR-017 already elevated motion as identity, but did not explicitly allow Lenis/page wipe; a formal trail was needed before code.
- **clarity → presence → craft** order (ADR-006) stands: work proof on Home/Work is not sacrificed; palette and product-builder message are not replaced.

### Alternatives Considered

- Move all of About to Home and drop Process route — rejected 2026-08-24. **Later ADR-040** moved About to Home **without** removing the Workflow route.
- Rewrite / trim T-021 copy to “fit” in rest — rejected; length handled via rest/active.
- Copy Hess palette or Framer spectacle — rejected; `rezisaktiva` theme + ADR-017 clarity limits.
- CSS `scroll-behavior: smooth` only — rejected; not the inertia rhythm referenced from Mazur.
- Slip into T-021/T-024 without ADR — rejected; material change vs ADR-017.

### Impact

- `product-discovery/06-engineering/design-tokens.md` §Motion — add Lenis + page overlay + overlay pause + reduced-motion.
- `product-discovery/04-ux/key-screen-patterns.md` — About rest/active; footer = Contact strip; Home without separate mid-page CTA.
- `product-discovery/01-business/competitor-analysis.md` — align Hess/Mazur “craft implementation” (not just mockup art direction).
- ADR-017 — still applies for clarity limits; new techniques reference this ADR.
- Task **T-025** in `project-os/tickets/r1.md`.

### Update — 2026-09-04 (ADR-029)

Patterns that **remained at that time**: About as its own page, rest/active, Contact strip, Lenis, reduced-motion. **Later:** About = Home section (ADR-040); Workflow rest/active removed (ADR-042). Visual language **no longer required**: old palette, yellow 3D chrome, mandatory Hess 1s/0.4s page transitions — concrete fate locked in **T-038.3**. New visual identity = [ADR-029](ADR-029-visual-identity-gothic-blood.md).

### Update — 2026-09-07 (ADR-032 / ADR-033 / ADR-035)

Rest/active for offers/values/process steps briefly lived on **Workflow** (`/workflow`), not About. About = personal narrative. Home teaser (point 6) **retired** (ADR-032). Contact strip on Home, Workflow, Work index (ADR-041; ADR-033 superseded).

### Update — 2026-09-08 (ADR-042)

`/workflow` surface replaced with decision-driven (hero + tab, five principles, Human vs AI pipeline, ADR Vault). Rest/active offers/values/process **no longer** used on Workflow. T-021.3 copy on that route superseded.

### Update — 2026-09-08 (T-043.1)

Production page transitions = **hard cut + stutter frame** (locked T-038.3). CSS snapshot remains (not View Transitions API). Old page: several discrete offset frames (`steps(1)`), then cut. New page: short stutter then still. No Hess scale, no RGB/VHS, no video clip. Reduced-motion = instant. Lenis + overlay pause (`ct-lock` / `qi-lock` / `ps-lock` / `page-vt-lock`) remain. Tokens: `--duration-page-exit` 0.2s · `--delay-page-enter` 0.2s · `--duration-page-enter` 0.16s. **Chat update 2026-09-08:** thin vintage film overlay (grain + vignette + luminance flicker) only during lock.