# Auth Architecture

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There is no product authentication for R1. This file remains as a trace record — aligned with ADR-011 / ADR-015.

This document is **intentionally filled as N/A** so the decision is recorded.

---

# Overview

The **rezisaktiva** site is a **public read-only** portfolio. There is no visitor login, server session, in-app OAuth, RBAC, or private area as a product feature (ADR-011).

Cookie/local storage for **locale preference** (after using the switcher) is **not** authentication — it only affects the `/` redirect (ADR-014).

---

# Scope

## In Scope

* State product auth as N/A
* Distinguish locale preference from auth

## Out of Scope

* IdP, JWT, session store, MFA
* Preview-gated drafts as an R1 Must

---

# Auth Approach

**N/A** — there is no product auth approach.

| Mechanism | Status |
| --------- | ------ |
| Visitor login | No |
| Authz / RBAC | No (ADR-011) |
| Locale preference cookie/local storage | Not auth |
| Repo / hosting dashboard access | Outside the product (owner process) |

---

# Session Strategy

**N/A** for product user sessions.

---

# Future Considerations

Protected draft preview, CMS editor, or client area:

* New ADR + change this document status from N/A
* Impact to Product scope / UX / Engineering
* Do not add auth “because the template folder exists”

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 product auth | N/A |
| Aligned with | ADR-011, ADR-015 |

---

# Success Criteria

1. It is clear there is no product auth/session
2. Locale preference is not classified as auth
3. Engineering: R1 auth-strategy = N/A unless a new ADR changes it

---

# Related Documents

* `README.md`
* `../02-product/roles-permissions.md`
* `../../project-os/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
