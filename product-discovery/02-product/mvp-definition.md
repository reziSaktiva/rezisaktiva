# MVP Definition

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document defines the MVP for the personal portfolio website **rezisaktiva**.

---

# Overview

MVP = **a clarity frame worthy of being the destination**: three pages — Home (hero + About section `#about`, ADR-040), Workflow (`/workflow`, ADR-035 / ADR-042), and Work index (`/projects`, override ADR-020); Home = top h1, lower-floor lede, footer ribbon (ADR-038 / ADR-041); Now in About; Contact as global modal (ADR-019) + Quick Info overlay (ADR-022) + theme toggle (ADR-021); soft CTA; and bilingual geo-aware.

Not MVP-perfect craft, not a full case catalog, not a social growth engine. Lightweight magnet (short case/process) is **planned soon after** this frame is live — not a first-ship blocker.

---

# MVP Goals

1. One official URL Rezi can point to as the home of his professional identity
2. Founders/POs understand: Rezi = product builder (fullstack + AI edge) in a short visit
3. Soft contact path is ready to use (without hard sell / pricing)
4. Enough presence (not an empty online CV) through About + Work index
5. Bilingual foundation is ready; geo-detection details are locked in UX/Engineering

Aligned with the dual north star: brand recall/clarity + qualified inbound path (`success-metrics.md`).

---

# Must Have

| Item | Description |
| ---- | ----------- |
| **Home** | Clear positioning (lede + claim) + About section `#about` + footer ribbon; direction to Workflow / Contact |
| **About** | Home section (not a page): greeting + Now + lead + artwork (ADR-040 / ADR-039). Chrome chip: Tentang / About (ADR-035). `/about` redirect. No `#proof` |
| **Workflow** | Way of working: principles, Human vs AI pipeline, ADR Vault (ADR-042). Chrome label: Proses Kerja / How I Work. Route `/[locale]/workflow` (ADR-035) |
| **Contact** | Soft CTA — global modal (ADR-019), not a separate page/route; email and/or direct link; form sends through Resend (**ADR-047**); no pricing |
| **Work index (M9)** | Work catalog page `/[locale]/projects` — Must R1 (ADR-020). Work-proof presence (M4 Home teaser retired, ADR-032) |
| **Project sheet (M10)** | Bottom overlay (not route); index tile opens sheet — **Must R1 (ADR-027)** |
| **Navigation** | Tentang / About · Proses Kerja / How I Work · Proyek (M9) as chips; Contact as modal-opening button (ADR-019) + language switcher; no Home chip (ADR-034); mobile <1024px uses hamburger (override ADR-020) |
| **Theme toggle** | Dark/light control in chrome — Must R1 (**ADR-021**) when light is live; T-038.2 hold = default dark, toggle hidden |
| **Quick Info panel (M13)** | Global overlay (right tab → drawer); **ADR-022** |
| **Bilingual geo-aware** | Default ID/EN by geo; switcher always available |
| **Basic chrome** | Footer ribbon on Home / Workflow / Work index (ADR-041), satellite links, soft availability signal (optional text); theme toggle = Must (ADR-021), not optional chrome |
| **Destination hygiene** | Stable URL, basic meta, site worth sharing as the main link |

---

# Should Have

| Item | Description |
| ---- | ----------- |
| **Availability line** | One soft sentence (“open to collaboration / opportunities”) on Home or Contact |
| **Message consistency** | ID/EN copy has equivalent meaning (not machine-dump) |
| **Actionable work** | Work index tile opens M10 sheet; live/repo inside sheet |
| **Basic accessibility** | Heading hierarchy, reasonable contrast, keyboard focus — details in UX |
| **Motion as visual identity** | Scroll-triggered reveal, subtle micro-interaction, hero easing — part of R1 identity with clarity-first limits (**ADR-017**), not merely minimal Could |

---

# Could Have

| Item | Description |
| ---- | ----------- |
| **Simple contact form** | If email/link feels insufficient; not an MVP requirement |
| **Calendar booking** | Only if Rezi wants it; remains soft, not a sales funnel |
| **1 short case/process** | Form locked by **ADR-044** (hybrid); execution **T-056** — not a floating Could |

---

# Out of Scope

* Case detail page `/work/[slug]` — historical route name **rejected**; R2 = `/[locale]/projects/[slug]` (**ADR-044**); M10 overlay remains Must R1
* Blog / writing hub / newsletter as core feature
* CMS, auth, dashboard, private area on the site
* Pricing, service packages, checkout
* WebGL playground as the main stage
* Social distribution automation / ship-in-public as MVP engine
* Heavy analytics or invasive personalization

---

# MVP Success Criteria

MVP is considered sufficient if:

1. ICP/peer reviewers can summarize the positioning after a short visit (NS-1)
2. Soft contact path is clear and feels natural (NS-2 path ready)
3. There is no dependency on case pages to “understand who Rezi is”
4. Hybrid lean scope (ADR-010) does not expand into a blog; Work index catalog (M9) is included through explicit ADR-020 exception
5. Ready to become the “main link” from CV, chat, and GitHub

---

# Decision Rules

* Adding a Work/detail case **page** → form is locked by **ADR-044** (`/projects/[slug]` + sheet). M10 overlay remains Must R1.
* Adding **pricing / hard CTA** → conflicts with ADR-002 / ADR-008; rejected unless a new ADR exists.
* Form/calendar enters Must Have only if Boss Rezi locks that need.
* Material MVP changes after Product Baseline → new ADR.
* Detailed module MoSCoW priority → `feature-priority.md` (T-002.4).

---

# Current Status

| Item | Status |
| ---- | ------ |
| Surface direction | **Hybrid lean (C)** — ADR-010, override ADR-019/020/021/022/027/032/034/035/040/041/042 (ADR-033 superseded ADR-041) |
| MVP definition | **Baseline v1.0** (this document) |
| Product Baseline | **v1.0** — ADR-012 |
| Work index (M9) in MVP | Yes — Must R1 (override ADR-020) |
| Workflow (M14) in MVP | Yes — Must R1 (ADR-035); route `/workflow` |
| Case detail (M10) in MVP | Overlay sheet Must R1 (ADR-027); page `/projects/[slug]` = R2 **ADR-044** |
| Contact | Global modal, not page (ADR-019) |
| Quick Info (M13) | Yes — Must R1 (ADR-022) |
| Theme toggle | Yes — Must R1 (ADR-021), default ship **dark** (light hold, T-038.2) |

---

# Related Documents

* `README.md` — documentation for this phase
* `product-scope.md` — product boundaries
* `feature-modules.md` — modules
* `../01-business/success-metrics.md` — dual north star
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-017-motion-as-identity-r1.md` — motion as visual identity
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-041-home-with-footer.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
