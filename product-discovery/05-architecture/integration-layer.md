# Integration Layer

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines lean external integrations for the **rezisaktiva** portfolio website.

---

# Overview

R1 has **almost no runtime integrations**. There is no payment, CRM, auth provider, or business API. Integrations = links & browser protocols plus optional edge/analytics services that do not become the product SoT.

---

# Purpose

* List integrations allowed in R1
* Keep Contact soft: form sends via Resend (ADR-047); `mailto:` fallback; no CRM/calendar
* Hand vendor details to Engineering when needed

---

# External Services / Integrations

| Integration | Type | R1 | Notes |
| ----------- | ---- | -- | ----- |
| **Email (mailto)** | Client protocol | Must | Primary visual + fallback (ADR-014 / ADR-047) |
| **LinkedIn** | Outbound link | Must (satellite) | Not OAuth |
| **GitHub** | Outbound link | Must (satellite) | Technical proof; satellite |
| **Geo / locale redirect** | Edge or hosting | Foundation Must | ADR-014 UX rules; vendor in Eng |
| **Work proof (repo/live)** | Outbound link | Should | From M10 sheet, not Home teaser (ADR-032) |
| **Light analytics** | Optional third party | Could | Privacy-aware; not persona SoT |
| **Resend** | Transactional email API | Must (Validation, ADR-047) | Modal form → Route Handler; server key |
| Client-side modal form | UI overlay | Must (ADR-019) | Submit sends via Resend (ADR-047) |
| Heavy backend form / calendar | — | Out | Calendar remains Could; Resend form is not CRM |
| CMS / headless | — | Out | Option C rejected |
| WA / Instagram API | — | Out R1 | ADR-014 |
| Auth provider | — | Out | ADR-011 |
| CMS / headless | — | Out | Option C rejected |
| WA / Instagram API | — | Out R1 | ADR-014 |
| Auth provider | — | Out | ADR-011 |

---

# Anti-Corruption / Adapter Notes

* There is no anti-corruption layer to business systems — there is no transaction domain.
* Satellites = **href** only; do not copy the GitHub feed to Home as the narrative SoT (deliberate curation, UX7).
* If mailto fails on a device without an email client → Contact copy still shows a clear address (UX).

---

# Error Handling Strategy

| Case | Response |
| ---- | -------- |
| Mailto unavailable | Email address is visible & copyable |
| Resend / Handler fails | Form shows failure; `mailto:` + copy remain |
| Satellite/sheet link broken | Do not show the item until the URL is fixed (content readiness) |
| Geo detection fails | Fallback `Accept-Language` → then `en` if there is no ID signal (ADR-014) |
| Analytics fails/is blocked | Site remains fully functional without analytics |

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 integrations | Mailto + satellites + locale redirect (+ optional analytics) |
| Contact form | Resend + Route Handler (ADR-047); not CMS |
| Backend form / calendar | No calendar; Resend form is not CRM |
| CMS | No |

---

# Success Criteria

1. Integration inventory aligns with soft CTA & i18n
2. Does not require a **product** API server (Contact Resend = infrastructure exception, ADR-047)
3. Engineering has a clear list of what may be wired

---

# Related Documents

* `README.md`
* `application-layer.md`
* `auth-architecture.md`
* `../04-ux/information-architecture.md`
* `../03-user/insights.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
