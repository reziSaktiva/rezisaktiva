# Decision ADR-026

### Title

Stay on Astryx until R1 exit; shadcn migration evaluation only after T-018

### Status

Accepted

### Date

2026-08-26

### Decision

1. **ADR-018 remains in force** for R1: component system + tokens = Astryx (`@astryxdesign/core` + `rezisaktiva` theme). Do not uninstall Astryx, do not install shadcn/Tailwind in parallel during R1.
2. **No hybrid** Astryx + shadcn (one styling system — ADR-018 rationale).
3. **shadcn migration evaluation** (or stay on Astryx if beta closes gaps, e.g. sheet from left/right edges) **only after R1 exit (`T-018`)**. Not work mid T-021 copy / R1 polish.
4. Overlays Astryx does not ship as primitives (Quick Info from the right) **stay custom overlays** as today until post-R1 evaluation.

### Reason

- Boss Rezi locked timing: frustration with Astryx limits (still beta, BottomSheet only from bottom, no left/right Drawer like shadcn) is acknowledged, but switching stack mid-R1 delays T-021 and T-018 and risks visual regression (ADR-024).
- Astryx beta may still add primitives; waiting one release cycle after clarity framework is live is cheaper than migrating twice.
- R1 site is lean; migration remains feasible later, not a reason to start now.

### Alternatives Considered

- Migrate to shadcn now — rejected; pausing R1 too costly vs remaining copy/exit.
- Hybrid Astryx + shadcn `Sheet` for Quick Info / project sheet — rejected; two token/convention sets.
- Remove Astryx without replacement (plain Tailwind) — not chosen; post-R1 evaluation compares shadcn vs updated Astryx.

### Impact / Follow-up

- `product-discovery/06-engineering/dependency-strategy.md` — note: shadcn evaluation is not R1.
- Task **T-026** (project sheet, Must R1, ADR-027) stays on Astryx (`BottomSheet` or custom overlay) — not a reason to migrate shadcn.
- Post-T-018 stack evaluation = new ADR if moving (supersedes ADR-018).

### Update — 2026-09-01

Post-T-018 evaluation complete: move to shadcn/ui + Tailwind CSS v4. Migration decision = **[ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md)**. This ADR’s timing (do not switch mid-R1) remains valid as history.