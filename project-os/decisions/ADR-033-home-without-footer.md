# Decision ADR-033

### Title

Home without Contact footer strip

### Status

Superseded (ADR-041)

### Date

2026-09-07

### Decision

1. **Home** (`/[locale]/`) **does not** render Contact footer strip (`footer#contact-cta` / `.site-footer`).
2. **About**, **Workflow**, and **Work index** still show that strip (heading + modal CTA + legal + LinkedIn/GitHub satellites) — ADR-025 stands for those routes. **Update (ADR-035):** Workflow = `/[locale]/workflow`.
3. Contact direction on Home = chrome button + modal (ADR-019) and Quick Info (ADR-022). Not a below-fold strip.
4. This **overrides** ADR-025 point 5 (“all routes”) and ADR-032 point 4 (“footer strip unchanged”) **for Home surface only**.

### Reason

- Boss Rezi locked (2026-09-07): remove Contact footer on Home. Home must not scroll to “Get in touch” strip.
- Aligns with Home = one section / first viewport (ADR-032 / ADR-037): lede + h1, no Now, no extra blocks.

### Alternatives Considered

- Remove footer on all routes — rejected; About and Projects still need Contact strip + legal/satellites.
- Hide Home footer with CSS only (`display: none`) — rejected; still in DOM, a11y, and page-transition clone.

### Impact / Follow-up

- Code: `SiteFooterSlot` in locale layout; `SiteFooter` not in Home SSG.
- Docs: `04-ux/` (IA, key screens, nav), M1, ADR-025 / ADR-032 notes. Task **T-044.6**.

### Update — 2026-09-07 (ADR-041)

Replaced: Home **renders** Contact footer strip again. `SiteFooterSlot` removed.