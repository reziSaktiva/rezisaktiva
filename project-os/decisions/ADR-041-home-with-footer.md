# Decision ADR-041

### Title

Home renders Contact footer strip

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Home** (`/[locale]/`) **renders** the same Contact footer strip (`footer#contact-cta` / `.site-footer`) as Workflow and Work index.
2. Strip remains heading + Contact modal CTA + legal + LinkedIn/GitHub satellites (ADR-025). Copy from `HOME_COPY` (T-021.2) — not invented.
3. About as `#about` section **does not** have its own footer; strip appears **after** hero + About, in locale layout.
4. This **supersedes ADR-033** (Home without strip). ADR-025 point 5 applies again to **all routes** including Home.

### Reason

- Boss Rezi (2026-09-07): add footer to Home.
- Home no longer one viewport (ADR-040): hero then `#about`, so Contact strip below fold no longer conflicts with first screen.

### Alternatives Considered

- Keep no footer on Home (ADR-033) — rejected; explicit request.
- Home-specific footer (legal only, no Contact strip) — rejected; one chrome pattern on all routes.

### Impact / Follow-up

- Code: remove `SiteFooterSlot`; `SiteFooter` always in locale layout. Task **T-053**.
- Docs: `04-ux/` (IA, key screens, nav), M1/M6, ADR-025 / ADR-032 / ADR-040 notes.