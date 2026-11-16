# Roles & Permissions

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-07). Roles & permissions are not relevant for the public **rezisaktiva** portfolio website without login / multi-user areas. The file is not deleted — see ADR-011 / ADR-012.

This document is **intentionally filled as N/A** so the decision is recorded (not a forgotten document).

---

# Overview

The **rezisaktiva** site is a public Hybrid lean portfolio (Home including About section, Workflow, Work index, Contact modal). There is no visitor authentication, member area, in-product admin role, or permission matrix between users.

Therefore there is **no roles & permissions model** for the site product in the v0.1 / core R1–R3 direction.

Existing access is simple:

* **Public** — all product pages can be read by anyone
* **Content owner (Rezi)** — edits/deploys outside the site “product” (repo / hosting); that is an authoring process, not an in-app role

---

# Current Status

| Aspect | Status |
| ------ | ------ |
| Visitor login / auth | None |
| Role (admin, editor, viewer, etc.) | Not applicable |
| Permission matrix | Not applicable |
| Private area on site | No (sensitive material → `private/` in repo, ADR-003 — not a product feature) |
| This document | **N/A — intentional decision** |

---

# Roles

No product role is defined.

| Real-world “actor” | Relationship to the site |
| ------------------ | ------------------------ |
| Visitor (founder/PO, secondary, peer) | Reads public content only |
| Rezi (owner) | Curates content & releases outside the in-app permission model |

---

# Access Rights Summary per Role

**N/A** — there is no role × permission matrix.

Implications for the next phase:

* UX does not design login / RBAC screens
* Architecture/Engineering does not need in-app authz for MVP (unless a new decision + ADR changes that)

---

# Mapping to Personas

Audience personas (`03-user/`, later) = **public readers**, not roles with different privileges.

There is no persona → permission-level mapping.

---

# Future Considerations

If a need appears later (for example protected draft preview, CMS with editors, client area):

* Change this document status from N/A to a real role model
* New ADR + impact on scope/MVP/architecture
* Do not assume auth “because the template folder exists”

Until then: **site = public read-only**.

---

# Decision Rules

* Adding auth/RBAC to Must MVP → conflicts with this N/A; requires ADR + scope revision.
* Deleting this file → rejected; the decision trace is lost (same pattern as ADR-008).
* Secret / non-public material → `private/` or outside the repo, not a role on the site (ADR-003).

---

# Success Criteria

The roles & permissions document is considered complete (N/A) if:

1. It is clear that **there is no product RBAC/auth** and that this is intentional
2. The file stays as a trace (not empty TBD)
3. Aligned with Hybrid lean / product-scope (no member area)
4. Subtask **T-002.7** can be checked as **N/A completed**

---

# Related Documents

* `README.md` — documentation for this phase
* `product-scope.md` — product boundaries (no auth/member)
* `mvp-definition.md` — CMS/auth out of scope
* `../../project-os/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-os/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md` — similar N/A pattern
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
