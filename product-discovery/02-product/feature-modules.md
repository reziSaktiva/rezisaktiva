# Feature Modules

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document maps modules/features/pages for the **rezisaktiva** portfolio website in the Product phase — not UX wireframes and not the Engineering stack.

---

# Overview

Modules follow Hybrid lean: **three pages** (Home, Workflow, Work index) + **About as section `#about` on Home** (ADR-040) + **Contact, Quick Info, and project sheet as overlays** + **cross-page layers** (language, chrome, theme). Home = hero + `#about` + footer ribbon (ADR-038 / ADR-040 / ADR-041). Now = About. Way of working = M14 `/workflow` (ADR-035; content ADR-042). M10 in R1 = overlay (ADR-027). **R2** adds case pages at `/[locale]/projects/[slug]` without removing the sheet (**ADR-044**).

> **Override note (2026-08-15, ADR-020; 2026-08-26, ADR-027; 2026-09-14, ADR-044):** M9 (Work index) is Must R1. **M10** = bottom sheet overlay (Must R1, T-026). Case pages **R2** = `/[locale]/projects/[slug]` (hybrid; tiles still open sheet).
>
> **Update (2026-08-16):** M6 includes theme toggle Must R1 (**ADR-021**). New module **M13 — Quick Info panel** (**ADR-022**) — global overlay, not a page.
>
> **Update (2026-08-21):** M3 previously planned CV/Portfolio download links in the modal (**ADR-023**). **Update (2026-09-14, ADR-043):** that decision was **revoked** — no public CV download.
>
> **Update (2026-09-08, ADR-040 / ADR-042):** M2 = Home section, not a page. `/about` redirects. `#proof` revoked. `/workflow` content = five decision-driven blocks.

---

# Core Product Modules

## M1 — Home (Identity & Destination)

**Goal:** First impression + clarity: who Rezi is, next step.

**Core contents:**

* Hero / positioning claim (top h1; lower-floor lede; Workflow link in lede)
* Soft direction to About and Contact (chrome + footer ribbon after `#about` — ADR-041)

**Not:** Now (that is M2 About, ADR-037), full catalog, blog feed, pricing, credibility line, work teaser (ADR-032 — who in M2; way of working in M14; work in M9). `#proof` revoked by ADR-040.

---

## M2 — About (Narrative)

**Goal:** Deepen the story of who Rezi is so founders/POs trust collaboration fit.

**Chrome label:** ID **"Tentang"** / EN **"About"** (ADR-035). Chip points to `/{locale}#about` on Home; `/[locale]/about` redirects (ADR-040). Module ID remains M2.

**Core contents:**

* Greeting (`h2`)
* **Now** — current work status (kicker + company link, ADR-037); between title and lead
* One-paragraph personal lead (ADR-039)
* Viewport artwork + caption “This is not me”
* Experience context (inside lead, not chronological CV)

**Not:** `#proof` / AI proof claim as section (ADR-040); way of working (that is **M14 Workflow**, ADR-042).

---

## M3 — Contact (Soft Path)

**Goal:** Open qualified inbound without hard sell.

**Core contents:**

* Soft invitation + context for when contact is relevant
* Primary path: email and/or direct link
* Short modal form **delivers** message to inbox (Resend, **ADR-047**)
* Satellite links (LinkedIn, GitHub, etc.)
* Optional: availability line

**Not (MVP):** mandatory calendar, CRM, rate card, public CV/Portfolio download link (**ADR-043**; ADR-023 superseded). Form without backend (fake “Sent”) was **revoked** by ADR-047.

---

## M4 — Work Teaser (retired)

**Status:** **Retired** (ADR-032, 2026-09-07). No longer a Home section.

Work proof presence = **M9 Work index** + **M10 project sheet**. M4 ID is not reused.

---

## M5 — Language (Bilingual Geo-Aware)

**Goal:** SEA relevance + open door outside SEA (ADR-002).

**Core contents:**

* Default language by geo (ID in Indonesia, EN outside)
* Language switcher always available
* Core content available in both languages (equivalent meaning)

**Details:** geo detection, URL (`/id` vs cookie), fallback — UX / Engineering phase.

---

## M6 — Site Chrome & Satellites

**Goal:** Navigation and brand-home presence.

**Core contents:**

* Nav: Tentang / About, Proses Kerja / How I Work, Proyek (M9) + switcher; Contact = modal-opening button (ADR-019), not link; no Home chip (ADR-034 / ADR-035)
* **Theme toggle (dark/light)** in chrome — Must R1 (**ADR-021**) **when both themes are live**; update 2026-09-04: default ship dark, light hold, toggle hidden; on mobile Contact remains outside hamburger
* Footer: short identity, satellites, lightweight legal, Contact ribbon on all routes including Home (ADR-041)
* Consistent soft availability in chrome (optional)
* Mobile (<1024px): page nav + switcher behind hamburger; Contact-button + theme toggle remain always visible (override ADR-020; toggle = ADR-021)

Quick Info (M13) is **not** part of M6 — it is its own content overlay (same pattern as M9 — Must R1 but not Core Module M1–M6).

---

# Supporting Modules

| Module | Role | When |
| ------ | ---- | ---- |
| **M7 — Destination meta** | Basic title/description/OG so links are worth sharing | MVP (Should/Must hygiene) |
| **M8 — Contact form / booking** | Modal form → Resend (**ADR-047**). Booking/calendar remains outside | Form = **Must** (Validation); calendar = Could |
| **M9 — Work index** | Work listing page | **Must R1** (override ADR-020, 2026-08-15) |
| **M10 — Case / process detail** | **R1:** bottom overlay (live preview/gallery, services, location or company, year, description); tile opens sheet; Live secondary, no Repo. **R2 (ADR-044):** “baca selengkapnya” link to `/[locale]/projects/[slug]`; sheet **stays** | **Must R1** overlay (ADR-027); **Must R2** case page (ADR-044, T-056) |
| **M11 — Writing / notes** | Short process writing | Future — not core MVP vision |
| **M12 — Experiments / playground** | Craft satellite | Future — do not make it the main stage |
| **M13 — Quick Info panel** | Global overlay: right-edge tab → drawer (bio, Services, Tools, Works index, Email, Links — quick links/references, not inbound form); not route; visible on all R1 pages including Work index (M10 sheet is separate overlay; Quick Info is not hidden); not a replacement for Contact modal (ADR-019) or footer satellites (M6) | **Must R1** (ADR-022; clarification vs M10 overlay: ADR-027) |
| **M14 — Workflow** | Way-of-working page: hero + comparison tabs, five principles, Human vs AI pipeline, ADR Vault. Route `/[locale]/workflow`. Chrome label Proses Kerja / How I Work | **Must R1** (ADR-035, content **ADR-042**) |

---

# Module Relationships

```text
M5 Language ─── wraps ───► M1 Home, M2 About, M14 Workflow, M3 Contact, M6 Chrome, M9 Work index
                              │
                              └── soft CTA ► M3 Contact

M6 Chrome ── includes ► Theme toggle (ADR-021)
M13 Quick Info ── overlay (not route) ──► all R1 pages (Quick Info remains on Work index; M10 sheet overlay is separate)

M9 Work index (Must R1, ADR-020) ──► M10 project sheet overlay (Must R1, ADR-027)
                              └──► case page `/projects/[slug]` (Must R2, ADR-044) — from link in sheet
```

* M1 is the destination door (lede + claim); M2 deepens who + Now + lead/artwork; M14 deepens way of working; M3 closes the soft path.
* M4 retired (ADR-032); work proof = M9 + M10; magnet URL = case page (ADR-044).
* M9 Must R1 (ADR-020); M10 overlay Must R1 (ADR-027); page `/[locale]/projects/[slug]` = **R2 (ADR-044)** — not `/work/[slug]`.
* M13 glanceable overlay — does not replace M3 or M6 footer (ADR-022).

---

# Module Design Principles

1. **One job per module** — Home = clarity; About = personal narrative; Workflow = way of working; Contact = path.
2. **Strict curation** — a few strong teasers > long list.
3. **Soft by default** — Contact does not become a sales page.
4. **Language as a layer** — not an afterthought; core content is dual.
5. **Hybrid R2 magnet** — M10 R1 = sheet; case page = `/projects/[slug]` from sheet link (**ADR-044**). Do not remove the sheet.
6. **Satellites stay satellites** — GitHub/LinkedIn support, not replace M1–M3.
7. **Interaction details in UX** — this document does not lock wireframes or UI components.

---

# Success Criteria

Modules are sufficiently defined if:

1. Every MVP Must Have can map to M1–M7 + M9 + M10 + M13 + M14
2. M9 Must R1 (ADR-020); M10 overlay Must R1 (ADR-027); M13 overlay Must R1 (ADR-022)
3. No module conflicts with primary brand / no-pricing
4. Ready to split into MoSCoW in `feature-priority.md` and releases in `release-roadmap.md`

---

# Related Documents

* `README.md` — documentation for this phase
* `product-scope.md` — product boundaries
* `mvp-definition.md` — Must/Should/Could
* `feature-priority.md` — priority (next)
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-023-cv-download-contact-modal.md` — superseded ADR-043
* `../../project-os/decisions/ADR-043-no-public-cv-download.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-041-home-with-footer.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/decisions/ADR-044-r2-hybrid-case-pages.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
