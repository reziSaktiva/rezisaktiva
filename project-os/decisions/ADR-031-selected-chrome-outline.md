# Decision ADR-031

### Title

Selected chrome: blood outline + accent text (replaces ADR-030 splatter)

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Selected marker** (desktop page nav, locale ID/EN, visible hamburger items) = **1px blood token border** + **accent red text**. Not wine 3D blob, not organic shape, not splatter onto page.
2. **Viewport blood splatter removed.** `BloodSplatterLayer` canvas overlay no longer mounted. ADR-030 **superseded**.
3. **Hover** on unselected items = accent color only, no fill and no blob. Sliding pill indicator on nav/locale/hamburger **hidden**.
4. **Tokens:** border `--color-accent`; text `--color-text-accent`. Not `--chrome-pill-*` / `--elev-3d` for selected. Clarity (UX1) stands: nav labels readable, no splatter overlay on first viewport.

### Reason

- Boss Rezi locked (2026-09-07): remove blood splatter on selected nav and selected language; selected shape (wine/blood) becomes plain red border with red font.
- Unbounded splatter (ADR-030) conflicted with page scan and stacked on Home wallpaper. Outline on label is enough as active marker.

### Alternatives Considered

- Keep 3D blob without splatter — rejected; wine/blood shape also replaced.
- Outline on desktop nav only; locale keeps blob — rejected; selected language follows.
- Red fill inside pill — rejected; plain border requested, no fill.

### Impact / Follow-up

- Implementation: `globals.css` (`.site-nav-item` / `.site-locale-switch-item` / `.site-mobile-nav-item` `[data-selected]`), `layout.tsx` (remove layer), delete `blood-splatter-layer.tsx`.
- ADR-030 status **Superseded**.
- ADR-029 points 1 & 4: splatter no longer selected exception.
- T-038.3 / T-040.2 / T-040.6 notes in [`tickets/r1.md`](../tickets/r1.md).