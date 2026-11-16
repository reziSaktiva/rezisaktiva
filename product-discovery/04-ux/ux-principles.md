# UX Principles

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-10). Material changes after this require a new ADR.

This document establishes UX principles for the personal portfolio website **rezisaktiva**.

---

# Overview

R1 UX serves **clarity in a short visit** and a **soft inbound path** — not a work catalog, not a sales funnel. The principles below bind IA, flows, navigation, and screen patterns.

---

# Purpose

* Become the UX decision filter before visual/tokens (06) and implementation
* Keep alignment with ADR-002, ADR-010–013
* Prevent anti-patterns: stack-list Home, hard sell, dual brand, over-chrome

---

# Core Principles

| ID | Principle | Implication |
| -- | --------- | ----------- |
| **UX1** | **Clarity first** | First viewport answers “who & for whom”; does not defer positioning below the fold |
| **UX2** | **One brand, two emphases** | Founder & PO use the same surfaces; different needs are served through About / Workflow / Work index, not separate Home modes |
| **UX3** | **Lean surface** | Home (including About section), Workflow, Work index as *pages*; About is not a route (ADR-040). Do not add pages to “serve” hiring. Overlays (Contact modal ADR-019, Quick info ADR-022) are **not** new pages |
| **UX4** | **Presence + magnet URL** | Work proof = Work index + sheet M10; share magnet = `/projects/[slug]` (**ADR-044**); Home teaser retired ADR-032 |
| **UX5** | **Soft path** | Contact first-class (modal, ADR-019); Email primary; LinkedIn & GitHub satellites; no pricing, WA/IG in R1; short form optional (not mandatory requirement) |
| **UX6** | **Language is journey** | Geo-default + path prefix `/id` & `/en` + switcher always available; ID/EN meaning equivalent |
| **UX7** | **Curation > completeness** | A few sharp proofs are better than imitating GitHub layout |

---

# Content Principles

1. **Message hierarchy:** product builder → fullstack as proof → AI as honest edge.
2. **Short copy:** enough for quick evaluation; About deepens, not a long essay.
3. **Actionable work:** Work index tile opens sheet M10; live/repo inside sheet. Home has **no** teaser and **no** credibility line (ADR-032 / ADR-040).
4. **Calm Contact:** soft invitation + context for when relevant; expectation = conversation, not checkout.
5. **Availability (Should):** one optional soft sentence; not hard “hire me now”.
6. **Secondary thin:** hiring/clients find signals on the same surfaces — no job board / pricing.

---

# Interaction Principles

1. **Navigation + switcher always visible on desktop**; on mobile (<1024px), page nav + switcher may be in hamburger (ADR-020). Contact is not buried. **Theme toggle:** Must in chrome **when light is live**; during T-038.2 hold (ADR-021 update 2026-09-04), toggle is **hidden**, default ship **dark**.
2. **Language switcher** changes locale with shareable URL path; user preference (after switch) only affects `/` redirect / URLs without locale — it does not rewrite directly opened `/id/...` or `/en/...` paths.
3. **Primary CTA in Contact** = start email; satellites do not visually compete with Email.
4. **No dead end:** from Home there is always a clear path to About and Contact.
5. **Share hygiene:** stable meta & locale URLs so SC6 (share to team) succeeds.
6. **Motion (Could):** only if it reinforces hierarchy; do not sacrifice clarity.
7. **Quick info (M13)** is a glanceable overlay — not a destination/route. It does not replace Contact inbound (ADR-019) and is not counted as a new page (aligned with UX3, ADR-022).

---

# Accessibility Principles

1. Logical heading hierarchy per page.
2. Reasonable text/background contrast; visible keyboard focus on nav, switcher, Contact links.
3. Adequate touch targets on mobile (nav inside hamburger, switcher, Contact, theme toggle). Chrome outside hamburger (theme + Contact) must remain easy to tap at 320px width.
4. Descriptive link text (avoid “click here”); Email/mailto keyboard accessible.
5. Document language (`lang`) follows active locale (`id` / `en`).

Final token/visual detail remains in the Engineering / design execution phase — not in this document.

---

# Success Criteria

* ICP reviewer understands positioning from the Home first viewport (aligned with I1, NS-1).
* Soft CTA Email is clear; LinkedIn/GitHub satellites do not obscure the primary.
* Switcher + locale path allow evaluation to continue without language bounce (J7, SC3).
* No separate surface for P3/P4; no WA/IG as R1 Contact CTA.
* These principles are sufficient acceptance for IA, flows, nav, and key screens.

---

# Decision Rules

* Quick info overlay is **not** a “new page” (UX3) — **ADR-022**; do not make it route `/info`.
* Project sheet overlay is **not** a “new page” (UX3) — **ADR-027**; tile must not skip sheet.
* Case page `/[locale]/projects/[slug]` = UX3 exception for R2 magnet — **ADR-044**. Not `/work/[slug]`. Do not remove sheet.
* Theme toggle Must R1 via **ADR-021**; default ship **dark** + light hold (update 2026-09-04 / T-038.2). Lifting hold / enabling light again = decision + ADR update.
* Promoting form/calendar/WA/IG to Contact Must → Boss Rezi decision + ADR if material.
* Changing language scheme from path prefix → new ADR.
* Material changes to principles after UX Baseline → new ADR.

---

# Current Status

| Item | Status |
| ---- | ------ |
| UX Principles | **Baseline v1.0** (this document) |
| UX Baseline | **v1.0** — ADR-014 |

---

# Related Documents

* `README.md`
* `information-architecture.md`
* `user-flows.md`
* `navigation-patterns.md`
* `key-screen-patterns.md`
* `../03-user/insights.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
