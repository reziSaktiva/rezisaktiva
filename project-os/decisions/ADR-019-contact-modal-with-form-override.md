# Decision ADR-019

### Title

Contact as global Dialog/Modal + email/message form (partial override of ADR-014)

### Status

Accepted

### Date

2026-08-15

### Decision

1. **Contact changes from a standalone page to a global Dialog/Modal** that can be opened from Contact buttons/links in nav and CTAs on any page (Home, Workflow/About, Work, Work case) - not navigation to `/[locale]/contact`.
2. A **short form (email + message) is allowed** inside the modal, as an explicit override of ADR-014's point "Soft CTA Contact = Email primary; LinkedIn & GitHub satellites; **no** WA / Instagram / **form** / calendar in R1".
3. **Hierarchy remains partly preserved**: the "Contact details" block (Email + copy) is still shown as the main identity before the "Socials" block (LinkedIn, GitHub) - not a row of social icons equal to Email like anti-pattern S3, even though both appear in the modal.
4. **Still forbidden:** calendar booking, WhatsApp, Instagram, and pricing in Contact - this part of ADR-014 does not change.
5. Custom cursor interaction (`cursor-ring`) changes shape into an **X** when the cursor is over the scrim area (outside the dialog card) while the modal is open - a new pattern, not conflicting with any baseline.
6. `design-mockups/contact.html` is **deleted**; the mockup reference for later Contact implementation moves to the modal component in `shared.js`/`shared.css` (called from all pages).

### Reason

- Boss Rezi gave a design reference (dialog with form) and explicitly requested that the form remain even though it conflicts with ADR-014, after being told about the conflict.
- A global modal is more consistent with the "<=1 tap" Contact path from any page (aligned with `navigation-patterns.md`) than a separate page.

### Alternatives Considered

- Modal without form, Email remains the only primary (fully aligned with ADR-014) - offered as Recommended, **rejected** by Boss Rezi.
- Hybrid (form below large Email) - not chosen; Boss Rezi chose to follow the reference screenshot directly.
- Keep a separate `/[locale]/contact` page without modal - rejected; Boss Rezi wanted the dialog pattern from the reference.

### Impact / Follow-up

- `product-discovery/04-ux/key-screen-patterns.md` (S3) needs to be marked as **partially overridden** by this ADR (form allowed; the rest of S3 still applies).
- Form copy (label, placeholder, success message) is still mockup placeholder, like other copy notes in `design-mockups/`.

### Update - 2026-08-16

**Modal-only confirmed final** - there is no `/[locale]/contact` route as fallback/SEO. Affected documents aligned to this decision: `information-architecture.md`, `key-screen-patterns.md`, `05-architecture/application-layer.md`, `05-architecture/domain-model.md`, `05-architecture/integration-layer.md`, `04-ux/ux-principles.md`, `04-ux/user-flows.md`, `03-user/user-journey.md`, `v03-development-r1.md` T-016.

### Update - 2026-09-07 (ADR-035)

Surfaces that open the modal: Home (including `#about`), **Workflow** (`/workflow`), Work index. Chrome label About = Tentang / About (`#about`); Proses Kerja / How I Work is attached to `/workflow`.

### Update - 2026-09-15 (ADR-047)

The modal form **sends email** via Resend (Route Handler). Modal, Email-before-Socials hierarchy, and calendar/WA/IG ban **do not change**. `mailto:` + copy remain fallback.
