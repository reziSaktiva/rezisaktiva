# Authentication Strategy

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There is no product authentication for R1. This file remains as a trace record — aligned with ADR-011 / ADR-015 / ADR-016.

This document is **intentionally filled as N/A** so the engineering decision is recorded.

---

# Overview

The **rezisaktiva** site is a **public read-only** portfolio. There is no visitor login, in-app OAuth, product server session, or RBAC (ADR-011).

Cookie/local storage for **locale preference** (after using the switcher) is **not** authentication — it only affects the `/` redirect (ADR-014).

Access to the Vercel / GitHub dashboard is an **owner process**, outside product auth.

---

# Purpose

* State R1 auth strategy = N/A at the engineering layer
* Prevent adding Auth.js / IdP “because the template folder exists”
* Align with `../05-architecture/auth-architecture.md`

---

# Auth Strategy Decision

**N/A** — there is no product auth strategy for R1.

| Mechanism | R1 Status |
| --------- | --------- |
| Visitor login / signup | No |
| OAuth / social login | No |
| Auth.js / NextAuth / Clerk / etc. | Not used |
| Product JWT / session store | No |
| Middleware auth-gated routes | No |
| Locale preference cookie/local storage | Not auth |
| Draft preview protection | Not R1 Must |

---

# Providers

**N/A** — there is no product identity provider.

---

# Session Management

**N/A** for product user sessions.

Locale preference: lightweight client storage; not an auth session.

---

# Security Considerations

Even without product auth, these still apply:

* Do not commit secrets to the public repo (ADR-003 / `.cursorignore`)
* Do not bundle `private/` to the client
* TLS via Vercel for site transport
* Dependency & security headers → `dx-tooling` / CI (document to follow)

Adding product auth (paid preview, client area, CMS editor) requires a **new ADR** + changing this document status from N/A.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 product auth | N/A |
| Aligned with | ADR-011, ADR-015, `auth-architecture.md` |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. It is clear there is no auth library/provider in R1
2. Locale preference is not classified as auth
3. Bootstrap does not install Auth.js “by default”

---

# Related Documents

* `README.md` — this phase documentation
* `../05-architecture/auth-architecture.md`
* `../02-product/roles-permissions.md`
* `../../project-os/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
