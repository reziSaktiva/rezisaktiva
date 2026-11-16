# Pricing Strategy

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-07). Pricing is not relevant as a strategy for the **rezisaktiva** portfolio website. Material changes after this require a new ADR.

This document is **intentionally filled as N/A** so the decision is recorded (not a forgotten document). The file is not deleted — see ADR-008.

---

# Overview

The **rezisaktiva** website is a **brand** asset with soft inbound (job/client). There is no product, service package, rate card, or checkout on the site.

Therefore there is **no pricing strategy for the site** in the Business Discovery / v0.1 direction.

---

# Current Status

| Aspect | Status |
| ------ | ------ |
| Pricing on the site | None / will not be displayed |
| Public service packages | Out of scope |
| Public rate card / fee | No |
| Direct site monetization | No (ADR-007) |
| This document | **N/A — intentional decision** |

Fee, salary, or engagement terms discussions — if they happen — are handled **after** human evaluation (chat/call), outside the portfolio page.

---

# Pricing Philosophy

For the **site**:

1. **Do not display pricing** — maintain the primary brand + soft CTA model
2. **Do not productize services on the page** — this is not a freelance landing page with packages
3. **Emphasize value through story & proof**, not numbers

For **engagement outside the site** (job/project): detailed philosophy and numbers **are not defined in this discovery** — outside the scope of the site-pricing document.

---

# Future Monetization

Not an active v0.1 plan. If it is considered later (for example templates, paid writing, or another offering), it requires:

* Vision / business model change (new ADR)
* Revision of this document from N/A into an actual strategy

Until that happens, the assumption remains: **site ≠ priced sales channel**.

---

# Assumptions

* Soft inbound is enough without public pricing
* Displaying prices would shift perception to “service/store” and weaken the primary brand
* Fee/salary is contextual per opportunity — not suitable as fixed portfolio content
* Keeping the N/A file is safer for decision traceability than deleting it

---

# Future Considerations

* If Boss Rezi wants to record a private fee range → `private/` (not this public document)
* If the site's value model changes to a productized offering → reopen this document + ADR
* `pricing-strategy.md` stays in the `01-business/` structure as a marker: “decided N/A”

---

# Success Criteria

The pricing document is considered complete (N/A) if:

1. It is clear that **there is no pricing on the site** and that this is intentional
2. There are no premature fee/salary numbers in the public discovery repo
3. References to ADR-002 / ADR-007 / ADR-008 are consistent
4. Subtask **T-001.6** for this file can be checked as **N/A completed**

---

# Decision Rules

* Do not add a rate card or pricing package to the site without an ADR that changes the value model
* Do not delete this file only because it is N/A — the decision trace matters for future sessions/agents
* Sensitive engagement numbers → `private/` or non-repo channel, not here

---

# Related Documents

* `README.md` — documentation for this phase
* `business-model.md` — value & revenue model (without site pricing)
* `product-vision.md` — primary brand; hard sell out of scope
* `../../project-os/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md` — material decision
* `../../project-os/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
* `../../project-os/decisions/ADR-002-portfolio-vision-positioning-audience-language.md`
* `../../project-os/PROJECT_STATE.md` — project status
* `../../project-os/DECISIONS.md` — ADR index
