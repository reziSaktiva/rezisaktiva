# Decision ADR-010

### Title

MVP surface: Hybrid lean (Home + About + Contact; Work teaser on Home)

### Status

Accepted

### Date

2026-08-07

### Decision

1. The **rezisaktiva** MVP surface structure = **Hybrid lean (option C)**.
2. MVP core pages: **Home**, **About**, **Contact**.
3. Work in the MVP = **teaser section on Home** (not a Work catalog + detailed case pages).
4. Work page / short case-process detail = **gradual magnet after the clarity frame** (aligned with ADR-007), not a Must Have for the first ship.
5. Soft contact CTA without pricing; form/calendar mechanism is not an MVP requirement (may be Could).

### Reason

- Aligned with clarity -> presence -> craft (ADR-006): ship the evaluation frame first.
- A light magnet remains in the growth model (ADR-007) but does not block the destination.
- About + Contact as pages preserve evaluation and inbound paths without a single-page site that is hard to share by context.
- Avoids overbuilding a full multi-page site + required case content (option D) before case content is ready.

### Update - 2026-09-07 (ADR-032)

The Work teaser is **no longer** a Home section. Home = hero lede + claim (ADR-037). Now is in About. AI proof is in About. Work = Work index + M10 sheet. M4 retired.

### Update - 2026-09-07 (ADR-035)

How I Work = `/[locale]/workflow` (M14). About chip remains.

### Update - 2026-09-08 (ADR-040 / ADR-042)

About is **not** a page: section `#about` on Home; `/about` redirects; no `#proof`. R1 pages = Home, Workflow, Work index. Workflow content = decision-driven (not offers/accordion).

### Alternatives Considered

- **A Classic multi-page** (Home / Work / About / Contact + detailed case pages) - deferred; heavier for MVP clarity.
- **B Single-page scroll** - rejected as the default; weak for sharing About/Contact/Work context and easily becomes a long CV.
- **D Full hybrid** (multi-page + >=1 required case in MVP) - deferred; suitable if cases are ready, not the default.
- **C Hybrid lean** - accepted.
