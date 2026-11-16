# Navigation Patterns

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-10). Material changes after this require a new ADR.

This document establishes navigation patterns for the **rezisaktiva** portfolio website.

---

# Overview

R1 navigation is **lean and always available**: content destinations + path-based language switcher. No mega-menu, no separate nav for hiring.

> **Override (2026-08-15, ADR-020; 2026-08-16, ADR-021 / ADR-022; label + path 2026-09-01):** this document is partially overridden. Nav includes **Proyek / Projects** (Work index, M9, path `/projects`); Contact is not a nav link but a modal button (ADR-019); mobile <1024px hamburger. Theme toggle is Must R1 (ADR-021). Quick info = secondary overlay (ADR-022). `/[locale]/work` permanently redirects to `/projects`.

---

# Purpose

* Ensure F1–F6 are not blocked by chrome
* Align M5 (Language) & M6 (Site chrome) with IA
* Provide mobile vs desktop acceptance without final visual tokens

---

# Primary Navigation

| Item | Target | Notes |
| ---- | ------ | ----- |
| Brand / name | `/[id/en]/` (Home) | Chrome name `REZI SAKTIVA` display font; only the name is a link. Chrome job `Web Engineer` beside it, not a link (ADR-034) |
| Home | `/[id/en]/` | **Not a chip** (ADR-034); destination = name in header |
| About | `/[id/en]#about` | Chrome label: **ID "Tentang"** / **EN "About"** (ADR-040; Home section) |
| Workflow | `/[id/en]/workflow` | Chrome label: **ID "Proses Kerja"** / **EN "How I Work"** (ADR-035; old About label) |
| Proyek / Projects (Work index, M9) | `/[id/en]/projects` | Path 2026-09-01; `/work` redirects |
| Contact | Modal-opening button (ADR-019) | **Not a nav link** (ADR-020 override); always visible outside hamburger, ≤1 tap from any page |
| Language switcher | Sibling locale path | Clear label `ID` / `EN` (or equivalent); always visible; one tap |

**Placement:** header/sticky top on desktop; same pattern on mobile (see below).

**State:** active page marked (aria-current / active style — Eng detail).

---

# Secondary Navigation

| Area | Content | Role |
| ---- | ------- | ---- |
| **In-page (Home)** | Soft direction through chrome (nav + Contact button) + footer ribbon after About | Strengthens next step without a Contact section in the middle of the page (ADR-041) |
| **Footer** | Short brand · Contact ribbon · **LinkedIn** · **GitHub** · light legal | Satellites & hygiene; **not** a replacement for primary Contact. Present on Home, Workflow, Work index (ADR-041) |
| **Work index tiles** | Open project sheet (M10) | Bottom overlay (ADR-027); case link inside sheet (**ADR-044**); Live secondary; no Repo |
| **Quick info panel (M13)** | Right-edge tab → drawer: bio, Services, Tools, Proyek/Projects, Email, Links | Global overlay (not route). Does not replace Contact modal (ADR-019) or footer satellites — **ADR-022** |
| **None** | Work nav separate from Proyek, Blog, Services as page, Pricing, WA, Instagram | Out of R1 scope |

Switcher is **not** secondary — it is part of primary chrome (UX6).

---

# Language Switching Pattern

1. User is on `/[id|en]/{page}` (locale-bearing path)
2. Activate switcher → navigate to sibling `/[en|id]/{page}` (same page)
3. If page does not exist in target locale (not expected in R1) → fallback to target locale Home
4. Preference after switch is saved (cookie/local — Eng) and **only** used on `/` redirects / URLs without locale — it does not rewrite directly opened locale paths
5. Content must be available in both locales with **equivalent meaning**

---

# Mobile Considerations

> **Override (ADR-020, 2026-08-15)** — the points below replace the “always visible without hamburger” rule for breakpoints <1024px.

* Breakpoint **<1024px**: page nav (Tentang / Proses Kerja / Proyek, without Home — ADR-034 / ADR-035) + language switcher enter the **hamburger menu** (panel, not a new page).
* **Still always visible outside hamburger** (never hidden): Contact button (modal opener, ADR-019). **Theme toggle (ADR-021):** Must outside hamburger **when light is live**; during T-038.2 hold, toggle is **not** shown. Default ship **dark**.
* ≥1024px (desktop): page nav, switcher, and Contact button always visible in header — no hamburger. Toggle only if the light hold has been lifted.
* Footer satellites (Contact ribbon) exist on Home / Workflow / Work index as complement, not Contact replacement (ADR-041).
* Adequate touch targets; switcher does not share a tap target with other nav.
* **Hamburger panel composition** (production chrome; T-040.4 skin): elevated panel (not yellow/accent tray); **page nav items full panel width**; selected = blood outline + accent text (ADR-031), not a small pill; **language switcher = compact Dropdown Menu** (ID/EN, not full-width stretched). Reference = code, not HTML mockup (ADR-024).
* **One-row chrome** on phones: brand left; hamburger + theme + Contact right. Does not wrap into two rows. Width floor **320px** (iPhone SE 1) must be tidy; **375px** (SE 2/3) is the main phone reference.
* Visual reference: **production code** (chrome in `app/[locale]/_components/`, built theme) — **ADR-024**. `design-mockups/` is archive; pixel/spacing no longer follows the HTML mockup.

---

# Success Criteria

* Contact can be reached in **≤ one tap** from any page (desktop & mobile) — button always outside hamburger
* Home / About / Workflow / Proyek ≤1 tap on desktop; on mobile (<1024px) may go through hamburger (1 tap to open menu + 1 tap item — ADR-020 override)
* Switcher **always visible** on desktop; on mobile enters hamburger with page nav (ADR-020 override) as compact Dropdown Menu, not full-width
* Hamburger panel: page items full-width; active page marked as a full bar
* Footer does not replace Contact’s role
* No nav item for non-R1 surfaces outside Proyek (M9, already added to R1 via ADR-020)

---

# Decision Rules

* Adding a primary nav item → review Product scope + ADR if material (Proyek/M9 already added via ADR-020)
* Moving Email only to footer without Contact page/modal → rejected (I4, ADR-010)

---

# Current Status

| Item | Status |
| ---- | ------ |
| Navigation Patterns | **Baseline v1.0** (this document) — partially overridden by ADR-020 (hamburger); ADR-021 toggle; ADR-022 Quick info; ADR-034 no Home chip; ADR-035 About vs Workflow; ADR-041 footer on all routes; live visual reference = code (ADR-024) |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `user-flows.md`
* `key-screen-patterns.md`
* `../02-product/feature-modules.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-033-home-without-footer.md` (superseded ADR-041)
* `../../project-os/decisions/ADR-041-home-with-footer.md`
* `../../project-os/decisions/ADR-034-chrome-name-home-chip.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
