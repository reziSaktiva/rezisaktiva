# Decision ADR-014

### Title

UX Baseline v1.0: lock `04-ux/` (locale path + soft Contact with Email primary)

### Status

Accepted

### Date

2026-08-10

### Decision

1. **UX Baseline v1.0 is established** for all documents in `product-discovery/04-ux/`.
2. Package locked with this baseline:
   - **Principles** = UX1-UX7 in `ux-principles.md` (clarity first; lean surface; soft path; language as journey)
   - **IA** = three R1 pages (Home / About / Contact) + Work teaser on Home; **locale path prefix** `/[id/en]/...`; geo default (ID in Indonesia, EN outside) + browser-language fallback + switcher always available; preference after switch **only** for redirect `/` / URL without locale (do not rewrite locale-prefixed paths)
   - **Flows** = F1-F3, F6 primary; F4-F5 thin secondary; F7 case = Later R2
   - **Navigation** = lean chrome Home · About · Contact + switcher **always visible** (desktop & mobile R1; no hamburger); satellite footer is not a Contact replacement
   - **Key screens** = S0-S3 block patterns (not final visual tokens)
   - **Soft CTA Contact** = **Email primary**; **LinkedIn & GitHub** satellites; **no** WA / Instagram / form / calendar in R1
3. No Must changes to Product Baseline (ADR-010-012) or User Baseline (ADR-013); the language URL decision fills the gap deferred in ADR-002.
4. Material changes to the UX baseline after this -> **new ADR** + revision to affected documents.

### Reason

- All `04-ux/` documents have been filled and agreed (T-004.1); UX phase exit criteria are met.
- Path prefix was chosen so URLs are shareable by language (SC6) and the switcher has a clear sibling path.
- Lean Contact (Email + LinkedIn/GitHub) preserves soft inbound without non-essential social-channel noise for founder/PO evaluation.

### Alternatives Considered

- Locale without prefix (cookie only) - rejected; URLs are less shareable by language.
- Query `?lang=` - rejected; weak for share/SEO destination.
- Defer the full URL scheme to Engineering without a UX lock - rejected; IA/flows need a path contract.
- Add WA/IG to Contact R1 soft CTA - rejected (Boss Rezi option A); keeps one calm primary.
- UX Baseline v1.0 as above - accepted.

### Update - 2026-09-07 (ADR-019 / ADR-020 / ADR-027 / ADR-032 / ADR-033 / ADR-034 / ADR-035)

Live IA = three content destinations (Home including `#about`, Workflow, Work index) + overlays Contact / Quick Info / project sheet. Home teaser retired. Chip nav without Home; About vs Workflow split. F7 = project sheet Must (not Later). Mobile nav hamburger <1024px. Contact footer ribbon on all routes including Home (ADR-041). `04-ux/` documents have been amended.
