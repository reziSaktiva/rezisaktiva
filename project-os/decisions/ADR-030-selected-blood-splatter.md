# Decision ADR-030

### Title

Selected chrome: blood splatter flowing across the page (T-038.1 exception)

### Status

Superseded (ADR-031)

### Date

2026-09-04

### Decision

1. **Selected markers** (page nav, locale switcher, visible hamburger items) use **horror splatter language**, not only static 3D blobs. When active item changes: splatter. While that item is `data-selected`: blood **flows unbounded across the viewport** — may cover page content under the overlay.
2. **This is a narrow exception to ADR-029 / T-038.1.** Bans on medical gore, NSFW, mall-goth, and random chaos on other surfaces **remain**. What opens: splash / spray / drip for **selected chrome only**. 3D blobs on labels still read as “wound” (nav text stays readable, vellum on wine).
3. **Technique:** `pointer-events: none` 2D canvas overlay, `--color-accent` / `--color-accent-muted` tokens, Motion `useReducedMotion`. No new particle library, no full WebGL. Contact / Quick Info / project sheet / cursor ring overlays stay above blood layer. `prefers-reduced-motion: reduce` = no splatter; selected returns to static blob.
4. **Clarity (UX1):** first-viewport claim may get splatter (locked chat: unbounded). Chrome text (wordmark, nav labels, ID/EN) stays contrasting. Job IA unchanged.

### Reason

- Boss Rezi locked (2026-09-04): selected = animated blood splatter that can flow; *full splatter* option; bound = **unbounded across page** while item selected.
- ADR-029 intentionally rejected splatter so the site would not become a horror gallery. This exception is explicit, localized, documented — not removing gothic-blood identity.

### Alternatives Considered

- Viscous stain only inside label — rejected; Boss Rezi wanted full splatter.
- Short splatter then settle — rejected.
- Splatter only on chrome / drip to hero — rejected; locked unbounded.
- Particle library / WebGL — rejected; ADR-028/029: Motion + canvas/CSS.

### Impact / Follow-up

- Implementation: **T-040.6** (`blood-splatter-layer.tsx`, `globals.css`).
- Update T-038.1 / T-038.3 notes in [`tickets/r1.md`](../tickets/r1.md).
- ADR-029 points 1 & 4: splatter still forbidden **except** selected chrome per this ADR.
- **2026-09-07:** replaced by [ADR-031](ADR-031-selected-chrome-outline.md) — selected = outline + accent text; splatter removed.