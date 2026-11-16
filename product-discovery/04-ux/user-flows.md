# User Flows

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-10). Material changes after this require a new ADR.

This document defines user flows for the **rezisaktiva** portfolio website for R1 Clarity (+ thin secondary branch).

---

# Overview

Flows are translated from scenarios SC1–SC6 and the R1 journey + R2 magnet. Focus: short evaluation → soft next step. Not CMS or auth.

> **Update (2026-08-26, ADR-027; 2026-09-14, ADR-044):** F7 = open **project sheet** from Work index tile. From sheet: link to case page `/projects/[slug]`. Path `/work/[slug]` is not used.

---

# Purpose

* Connect User Discovery to screen patterns & navigation
* Become “happy path” acceptance before implementation
* Keep secondary path without a new navigation tree

---

# Flow Inventory

| ID | Name | Persona | Priority |
| -- | ---- | ------- | -------- |
| F1 | Quick fit evaluation (founder) | P1 | Primary |
| F2 | Collaboration evaluation (PO) | P2 | Primary |
| F3 | Switch language then continue | P1/P2 | Primary (cross-cutting) |
| F4 | Check hiring signal | P3 | Thin secondary |
| F5 | Client soft outreach | P4 | Thin secondary |
| F6 | Share URL to team | P1/P2 | Primary social |
| F7 | Open project sheet | P1/P2 | Primary (M10 overlay, ADR-027) |
| F8 | Open case page | P1/P2 | Primary R2 (`/projects/[slug]`, ADR-044) |

---

# Primary Flows

### F1 — Quick fit evaluation (SC1)

1. Enter via URL (default locale or locale-bearing link)
2. **Home** — read first viewport (lede + claim)
3. Optional: scroll **About** (`#about` — Now + who + lead/artwork) or open **Workflow** (principles / pipeline / ADR Vault, ADR-042) or **Work index** (`/projects`, M9) if more detail is needed
4. On Work index: click tile → **project sheet** (F7); from sheet may go to **case page** (F8, ADR-044); live/repo only from inside sheet/case
5. Open **Contact modal** (button in chrome, ADR-019) → send Email **or** save URL / continue to satellites if needed
6. Success: understands “Rezi = product builder…”; soft next step happens or URL is saved

**Failure modes:** Home = stack list; Contact hidden; no clear Email.

---

### F2 — Collaboration evaluation (SC2)

1. Enter Home (clarity)
2. Go to **About** (`#about`) — Now + who Rezi is + lead/artwork; continue to **Workflow** (ADR-042) if way of working / collaboration is needed
3. Continue checking **Work index** (tile opens sheet, F7)
4. **Contact modal** — Email primary (ADR-019)
5. Success: enough professional + product thinking signal for soft outreach

**Failure modes:** About does not add trust; tone too empty or too “dev for hire”.

---

### F3 — Switch language (SC3)

1. User feels the default language is less fitting
2. Use **language switcher** in chrome
3. Land on sibling path (`/id/...` ↔ `/en/...`) for the same page
4. Continue F1 or F2 without searching for the URL again
5. Success: evaluation continues; copy meaning is equivalent

**Failure modes:** switcher missing; always redirects to Home; copy is not equivalent.

---

### F6 — Share to team (SC6)

1. User copies a locale-bearing URL (recommended)
2. Colleague opens the same URL
3. Colleague runs a short F1/F2
4. Success: one destination is enough to align

---

### F7 — Open project sheet (ADR-027)

1. User is on **Work index** (`/[locale]/projects`)
2. Clicks **work tile** (not live/repo URL)
3. **Bottom sheet** opens: live preview (iframe) or gallery, services, location or company, year, description
4. Optional: **case page** link (ADR-044) or live/repo **inside sheet** (new tab for external); close sheet (Escape / scrim / close control)
5. Success: understands what the project is and how it was worked on without leaving the site first

**Failure modes:** tile exits directly to GitHub/live or directly to `[slug]` (skipping sheet); sheet empty/invented; Quick Info disappears from Work index.

### F8 — Open case page (ADR-044)

1. User is in M10 sheet **or** opens URL `/[locale]/projects/[slug]` directly
2. SSG case page (not automatic sheet)
3. Locale switcher → sibling same slug
4. Success: URL is share-worthy; can return to index via chrome/link

**Failure modes:** 404 for visible work; page for `hiddenIds`; invented copy.

---

# Secondary Flows

### F4 — Hiring signal (SC4)

1. Home positioning → About (`#about`, who); Workflow (way of working, ADR-042)
2. Follow GitHub (satellite) if technical proof is needed
3. Decide continue/skip **without** turning the site into an ATS CV
4. Success: enough signal; brand remains product builder

### F5 — Client soft (SC5)

1. Home / About / Workflow / Work index → Contact modal
2. Email (without looking for pricing)
3. Success: outreach sent; discussion expectation
4. Accepted failure: looking for pricing — Contact copy steers toward conversation (ADR-008)

---

# Out of Scope Flows (R1)

* Calendar booking
* WA chat / Instagram DM as Contact path
* Login, CMS, account personalization

---

# Success Criteria

* F1–F3, F6, **F7** (project sheet), and **F8** (case page, ADR-044) documented as primary
* F4–F5 thin on the same surfaces
* Case path = `/projects/[slug]`; `/work/[slug]` is not a route
* Failure modes lock anti-patterns in key screens

---

# Current Status

| Item | Status |
| ---- | ------ |
| User Flows | **Baseline v1.0** (this document) |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `navigation-patterns.md`
* `key-screen-patterns.md`
* `../03-user/user-scenarios.md`
* `../03-user/user-journey.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
