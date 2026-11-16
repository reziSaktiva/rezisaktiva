# Decision ADR-020

### Title

Work index (M9) becomes Must R1 + mobile nav uses hamburger (partial override of ADR-010/ADR-012, override of navigation-patterns.md)

### Status

Accepted

### Date

2026-08-15

### Decision

1. **M9 - Work index** (`/[locale]/work`, work catalog) moves from **Post-MVP/Won't** to **Must R1**, following the mockup (`design-mockups/work.html`). This partially overrides **ADR-010** points 3-4 ("Work in the MVP = teaser section on Home... Work page = gradual magnet after the clarity frame") and **ADR-012** (Product Baseline v1.0, locked MoSCoW).
2. **M10 - Case/process detail** (detail page per work, `work-case.html`) **remains Post-MVP / R2** - it does not move to Must R1. Nav "Karya" points to the index page (M9), not to a case detail. It may be accelerated if content is ready (already recorded as an option in `feature-modules.md`/`future-roadmap.md`), but it is not an R1 exit requirement.
3. **Primary nav R1 follows the full mockup**: Home · About (local label "Proses Kerja"/"Process") · Karya/Work as normal nav links; **Contact is not a nav link** - it is a button that opens the Contact modal (aligned with ADR-019), not navigation to a page.
4. **Mobile nav (<1024px) uses a hamburger menu** - explicit override of `navigation-patterns.md` "Mobile Considerations" (which previously required primary nav & switcher to always be visible without hamburger). Behind the hamburger: page nav (Home/About/Karya) + language switcher. Still outside the hamburger (always visible): Contact button + theme toggle.
5. The "<= 1 tap to Contact" acceptance (`navigation-patterns.md` Success Criteria) remains satisfied because the Contact button never moves into the hamburger.

### Reason

- Boss Rezi explicitly chose to follow the full mockup (including Karya nav + mobile hamburger) after being told the consequences for ADR-010/ADR-012 and `navigation-patterns.md`.
- Limiting the scope increase to M9 (index), not M10 (case detail), keeps the expansion proportional and avoids moving all of R2 into R1.
- Contact remains <=1 tap (outside the hamburger), so the core navigation acceptance is not violated even though the mobile pattern changes.

### Alternatives Considered

- Keep lean nav Home · About · Contact-button without Karya, always-visible nav without hamburger (fully aligned with baseline) - offered as Recommended at first, **rejected** by Boss Rezi.
- Show "Karya" in nav but point it to an anchor/scroll to the work teaser on Home (no new `/work` page) - offered, **rejected**; Boss Rezi chose a real route.
- Move both M9 **and** M10 to Must R1 at once (100% mockup including `work-case.html`) - not chosen; scope was limited to M9 only according to Boss Rezi's explicit request ("tambahkan route /[locale]/work").

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` - M9 status -> Must R1 (override ADR-020); M10 remains Post-MVP.
- `product-discovery/02-product/feature-priority.md` - M9 moves from **Won't Have** to **Must Have**.
- `product-discovery/02-product/mvp-definition.md` - Must Have adds "Work index (M9)"; Out of Scope adjusted (only "detail case study" remains out, not the entire Work page).
- `product-discovery/02-product/release-roadmap.md` - R1 Must adds M9; R2 keeps M10 (+ M9 removed from R2 list because it is already done in R1).
- `product-discovery/04-ux/information-architecture.md` - site map adds `/[id/en]/work` as Must; Page Inventory M9 -> R1 Must.
- `product-discovery/04-ux/navigation-patterns.md` - Mobile Considerations marked as partially overridden by this ADR (hamburger <1024px allowed; the rest still applies where not conflicting).
- `project-os/tickets/r1.md` - T-013.1 revised (nav items + hamburger breakpoint); new task **T-019 - Work index R1 (M9)** added for `/[locale]/work` page (outside chrome T-013).
- Work index content & detailed design (copy, work curation) follows in separate task T-019 - this ADR only locks scope & nav decision, not page content.

### Update - 2026-09-01 (chrome label)

M9 nav label: ID **Proyek** / EN **Projects**. Catalog path: `/[locale]/projects`. `/[locale]/work` permanently redirects to `/projects`. About remains Proses Kerja / How I Work.

### Update - 2026-09-07 (ADR-034)

Chip nav **does not** include Home. Header name = Home link; job text next to the name is not a link.

### Update - 2026-09-07 (ADR-035)

Chrome label About = **Tentang / About** (`/{locale}#about`, ADR-040). **Proses Kerja / How I Work** moves to route `/[locale]/workflow` (M14). Chip nav = Tentang / About · Proses Kerja / How I Work · Proyek / Projects.
