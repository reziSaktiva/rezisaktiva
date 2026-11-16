# Decision ADR-021

### Title

Dark mode toggle UI becomes Must R1 (override `design-tokens.md` + Product baseline)

### Status

Accepted

### Date

2026-08-16

### Decision

1. **Dark/light toggle in chrome moves from Should/Later to Must R1.** This explicitly overrides `product-discovery/06-engineering/design-tokens.md` (line "Dark mode toggle in UI = Should / Later - not Must R1" and Theme table: "Toggle in chrome | Should / Later - not an R1 exit blocker") and the Product baseline that did not yet include the toggle in Must Have (`feature-priority.md`, `mvp-definition.md`, `release-roadmap.md`).
2. **Default ship remains light** (`<Theme mode="light">`). The toggle does not change the default; dark activates only after the user chooses it, and preference is saved (mockup pattern: `localStorage`). `prefers-color-scheme` remains Could - it does not replace the light default without a separate decision.
3. **Chrome placement follows the mockup + ADR-020:** toggle is always visible outside the hamburger (with the Contact button). This closes an internal inconsistency: `navigation-patterns.md` Mobile Considerations already assumed a "theme toggle" existed in chrome after ADR-020 override, while tokens/priority still marked it Should/Later.
4. **Existing dark token foundation does not change** - Astryx `Theme` + `mode` prop (`'light' | 'dark' | 'system'`) remains the source of resolution. This ADR only locks the **UI control** as an R1 exit requirement, not a token system redesign.
5. Production code implementation of the toggle component (not yet in `site-header.tsx` at the time of decision) follows as a separate task - this ADR locks scope, not implementation.

### Reason

- The toggle was fully built and approved in cross-session mockups (`design-mockups/shared.js`, all pages) - marking it Should/Later left documentation behind the surface Boss Rezi had already approved.
- `navigation-patterns.md` (ADR-020 override) already required the theme toggle to always be visible outside the hamburger; without this ADR, chrome Must and token/priority contradicted each other.
- Promoting the toggle (not forcing dark as default) preserves light-first clarity (UX1) while giving the control already present in the mockup.

### Alternatives Considered

- Keep Should/Later - toggle exists in mockup but is not an R1 exit requirement (aligned with old `design-tokens.md`) - **rejected** by Boss Rezi after mockup vs docs audit.
- Dark as default ship (replace light) - not chosen; default light remains.
- Follow `prefers-color-scheme` as Must (without explicit toggle) - not chosen; the chrome UI control is what is locked, system preference remains Could.

### Impact / Follow-up

- `product-discovery/06-engineering/design-tokens.md` - Chrome toggle -> Must R1; Theme table + contract summary adjusted (cite this ADR).
- `product-discovery/02-product/feature-modules.md` - M6 (Site Chrome) adds theme toggle bullet (ADR-021).
- `product-discovery/02-product/mvp-definition.md` / `feature-priority.md` / `release-roadmap.md` - Must Have / R1 Must adds Theme toggle (cite ADR-021).
- `product-discovery/04-ux/navigation-patterns.md` - Mobile Considerations: "theme toggle" referenced to ADR-021 (not an unprioritized assumption anymore).
- `product-discovery/04-ux/ux-principles.md` / `key-screen-patterns.md` - short note: toggle does not change light-ship default.
- `project-os/tickets/r1.md` - implementation subtask for toggle component in chrome (site-header); remove "Dark mode toggle UI (Should/Later)" from the not-in-R1 backlog.

### Update - 2026-08-16

Official implementation task ID: **T-013.4** (`v03-development-r1.md`, under parent T-013 Site chrome R1).

### Update - 2026-09-03 (ADR-028)

Token mechanism changed: class `dark` on `<html>` + cookie `rz-theme`, not Astryx `<Theme mode>`. See [ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md). The product decision default light is **replaced** by the 2026-09-04 update.

### Update - 2026-09-04 (T-038.2 / ADR-029)

1. **Default ship = dark.** The gothic-blood art direction is implemented as a dark theme. Point 2 (light-first) **no longer applies** during the hold below.
2. **Light mode is on hold, not deleted.** Existing light tokens/CSS are commented (archive) in **T-039** so they are not lost; do not invert the new palette. Gothic light skin (vellum/manuscript) is **not** v15 scope - separate task when the hold is lifted.
3. **Toggle is hidden in chrome** during the hold. `theme-toggle.tsx` + cookie `rz-theme` + anti-flash **remain**. When light is enabled again, the toggle returns as Must outside the hamburger (original points 1 & 3).
4. During the hold: do not render the old cream light palette to visitors (cookie `light` must not show the old theme). `prefers-color-scheme` remains Could.
