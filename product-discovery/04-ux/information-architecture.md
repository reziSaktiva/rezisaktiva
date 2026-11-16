# Information Architecture

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-10). Material changes after this require a new ADR.

This document establishes the information structure & pages for the **rezisaktiva** portfolio website for R1 Clarity.

---

# Overview

R1 IA = **three content pages** (Home, Workflow, Work index) + **About as a section on Home** (`#about`, ADR-040) + **Contact, Quick Info, and project sheet as global overlays** (not pages/routes) + **locale path prefix** `/id` and `/en`. Hiring & clients use the same tree (thin secondary path). Home has **no** work teaser or credibility line (ADR-032). About = personal narrative on Home; way of working = `/workflow` (ADR-035).

> **Update (2026-08-26, ADR-027; 2026-09-14, ADR-044):** M10 Must R1 = bottom overlay sheet. Work index tile opens sheet. R2 case page = `/[id/en]/projects/[slug]` from a link in the sheet.

---

# Purpose

* Lock the site map and page inventory before flows & screen patterns
* Align Hybrid lean (ADR-010) with bilingual paths (UX decision 2026-08-10)
* Become the stable URL reference for Architecture / Engineering

---

# Site Map

Locale as **path param** `[id/en]` — value ∈ `{ id, en }` (not query string).

```text
/                         → redirect to default locale (geo / preference)
└── /[id/en]/
    ├── /[id/en]/           → Home (hero + About section `#about`)
    ├── /[id/en]/about      → redirect to `/[id/en]#about` (ADR-040)
    ├── /[id/en]/workflow   → Workflow / Proses Kerja (ADR-035)
    └── /[id/en]/projects   → Work index (M9, Must R1 — ADR-020)
        └── /[id/en]/projects/[slug] → Work case (R2, ADR-044)

Global overlays (not routes, displayed above any page):
    • Contact modal      → opened from Contact button in chrome (ADR-019)
    • Quick Info drawer  → opened from right-edge tab (M13, ADR-022)
    • Project sheet      → opened from Work index tile (M10, ADR-027; from bottom)
```

Concrete examples: `/id/`, `/id#about`, `/id/workflow`, `/en/projects`, `/en/projects/cook-it-real-good`. There is **no** separate `/contact` route — Contact is always a modal (final, ADR-019). `/about` only redirects. There is **no** `/work/[slug]`.

---

# Content Hierarchy

### Cross-page (chrome)

1. Brand identity (name / mark)
2. Primary nav: **name** (Home link, display font) + job beside it (not a link, ADR-034) · **Tentang / About** (`#about` on Home, ADR-040) · **Proses Kerja / How I Work** (`/workflow`, ADR-035) · **Proyek / Projects** (M9, path `/projects`, ADR-020) as chips; Contact as a modal-opening button (ADR-019), not a link. **No Home chip.**
3. Language switcher (Dropdown Menu ID/EN) → sibling URL path
4. Theme toggle (dark/light) in chrome — Must R1 (**ADR-021**); default ship **dark**, light hold, toggle hidden during hold (T-038.2, 2026-09-04)
5. **Quick info panel (M13)** — overlay (right-edge tab → drawer); not a new route (**ADR-022**)
6. **Project sheet (M10)** — bottom overlay from Work index tile; not a new route (**ADR-027**)
7. Footer: short identity · Contact ribbon · LinkedIn/GitHub satellites · light legal — all routes including Home (ADR-041).
8. Mobile (<1024px): page nav (Tentang / Proses Kerja / Proyek, without Home — ADR-034 / ADR-035) + Dropdown Menu switcher behind hamburger (full-width nav items; compact switcher); Contact-button + theme toggle always visible (ADR-020 override; toggle = ADR-021). 320px floor; visual reference is **production code** (ADR-024; `design-mockups/` archive)

### Home (content order)

1. **Hero / first viewport** — two-line display `h1` at the top (line 1 top-left, line 2 bottom-right, ADR-038); lede (description + Workflow link) on the **lower floor** (ADR-038) **without portrait**. Wallpaper opens in the center; fades when scrolling to `#about`, returns in the hero. Not a work tile.
2. **About** — `#about` section (ADR-040): greeting, Now (between title and lead), lead, artwork + caption. Not a separate page. No `#proof`.
3. **Contact footer ribbon** — after `#about` (ADR-041): heading + modal CTA + legal + satellites.
4. **Soft direction** — to Workflow via lede/chrome; Contact via chrome + footer ribbon.

**Not on Home:** credibility line; work teaser. Way of working = Workflow. Work = Work index.

### Workflow

Chrome label: **Proses Kerja** (`id`) / **How I Work** (`en`) — ADR-035; route `/[id/en]/workflow`. Content follows **ADR-042**.

1. Hero — two-line claim + lede + Chaos vs Decision-Driven tabs
2. Five work principles
3. Pipeline Discover → Design → Build → Ship (Human Lead vs AI)
4. ADR Vault (real samples)
5. Soft direction to Contact through the footer ribbon (not a Contact section)

### Contact (global modal, ADR-019 — not a page/route)

1. Soft invitation + context for when it is relevant
2. **Primary:** Email (mailto or clear address); short form (email + message) in modal **delivers** to inbox (**ADR-047**); `mailto:` fallback
3. **Satellites:** LinkedIn, GitHub
4. Availability line (if not on Home)
5. **Not in R1:** calendar, WA, Instagram, pricing

---

# Page Inventory

Same notation as Site Map: `[id/en]` = locale path param ∈ `{ id, en }` (equivalent to `/{locale}/` in nav/flow docs when written that way).

| Route (pattern) | Name | Module | R1 |
| --------------- | ---- | ------ | -- |
| `/[id/en]/` | Home (including About section `#about`) | M1 + M2 | Must |
| `/[id/en]/about` | Redirect to `/[id/en]#about` | — | Redirect (ADR-040) |
| `/[id/en]/workflow` | Workflow (chrome label: Proses Kerja / How I Work) | M14 | **Must R1** (ADR-035) |
| `/[id/en]/projects` | Work index (catalog) | M9 | **Must R1** (ADR-020) |
| Global chrome | Nav + switcher + theme toggle; Contact footer ribbon on all routes including Home (ADR-041) | M5, M6 | Must (toggle: ADR-021) |
| Global overlay | Contact modal (not path, final — ADR-019) | M3 | Must |
| Global overlay | Quick info panel (not path) | M13 | Must (ADR-022) |
| Global overlay | Project context sheet (not path) | M10 | Must (ADR-027); from bottom; Work index tile |
| `/[id/en]/projects/[slug]` | Work case as page | M10 (page) | **Must R2** (ADR-044) |

---

# Entry Points

| Entry | Expected behavior |
| ----- | ----------------- |
| Bare domain URL `/` | Redirect to `/id/...` or `/en/...` according to the default rules below |
| Direct locale link (e.g. `/id#about`, `/en/projects`) | **Open as-is** — do not rewrite to another locale even if a preference cookie exists |
| Switcher | Move to the same sibling locale path (Home↔Home including hash `#about`, Workflow↔Workflow, Work index↔Work index, case↔case) |
| Share URL | Prefer locale-bearing URLs so recipients see the same language (SC6) |
| GitHub/LinkedIn satellites (outbound) | Allowed; Contact & Home remain the main destination |

### Default language rules (UX)

Applies to choosing locale when **entering without locale in the URL** (especially redirect from `/`). Does **not** override paths that already contain `/id/` or `/en/`.

1. **Geo Indonesia** → default `id`
2. **Geo outside Indonesia** → default `en`
3. **Unknown geo / detection failed** → fallback to browser `Accept-Language`; if no ID signal → `en`
4. **After user uses switcher** → save preference (cookie/local; Eng detail); on the next visit to `/` (or URL without locale), honor that preference **above** geo/browser
5. **VPN / edge case** — switcher always fixes the wrong default in one tap (OQ5 accepted at UX layer); explicit URLs remain honored

---

# Share & Meta Hygiene (R1 acceptance)

Destination hygiene is a product Must (SC6 / M7). UX acceptance before Engineering:

1. Every R1 page (`Home`, `Workflow`, `Work index`) has a unique **title** and **meta description** per locale (`id` / `en`), with equivalent meaning
2. Basic **Open Graph** (title, description, canonical locale URL) so the URL is share-worthy in chat/team contexts
3. Shared URLs are **locale-bearing** (example `/id#about`); bare `/` is only an entry redirect — not the recommended share URL
4. Canonical per locale; do not rely on cookies to determine the language of a directly opened link
5. Tooling detail (meta generator, sitemap) → Engineering; the contract above must be met in R1

---

# Content readiness (do not ship empty)

Before R1 is considered live-ready:

1. **Home** — hero positioning is filled (lede + claim) + About section (Now + lead)
2. **Contact** — **Email primary** must be visible and working (`mailto:` or clear address); modal form delivers through Resend (**ADR-047**); LinkedIn & GitHub satellites only if URLs are valid
3. **About** — section on Home (not a page); personal narrative (not Lorem placeholder)
4. **Workflow** — hero + principles + Human/AI pipeline + ADR Vault (ADR-042)
5. Do not ship Home without a positioning claim **or** Contact without Email — both close J2/J3
6. Dead external satellite links → do not show them (hide item) until URL is fixed

---

# Success Criteria

* Three-content-page R1 site map (Home including `#about`, Workflow, Work index) + locale mirror; Contact & Quick Info global overlays (not new content destinations)
* Home hierarchy wins clarity in the first viewport; who in About (`#about`); way of working in Workflow (ADR-042); work in Work index (ADR-032, ADR-035, ADR-040)
* Contact Email = primary; LinkedIn/GitHub satellites; no WA/IG
* Shareable and consistent path prefix for both languages
* Meta/share acceptance above is met (title/description/OG per locale)
* No separate IA for P3/P4
* Content readiness: do not ship without Home claim + Contact Email

---

# Decision Rules

* Adding a new R1 content route → ADR + Product update if needed
* Changing locale scheme (remove path prefix) → new ADR
* Promoting Work index into Must inventory → ADR-020. Overlay M10 Must R1 → **ADR-027**. Case page `/projects/[slug]` → **ADR-044**.
* Contact as modal (not route) → final via ADR-019; T-016 done, do not add `/contact` route without a new ADR

---

# Current Status

| Item | Status |
| ---- | ------ |
| Information Architecture | **Baseline v1.0** (this document) |
| Locale URL | Path prefix `/id` & `/en` |
| Soft CTA Contact | Email primary; LinkedIn/GitHub satellites; no WA/IG |
| Home evidence | Lede + claim on Home; Now + narrative in `#about`; way of working in Workflow (ADR-042); work in Work index (ADR-032, ADR-035, ADR-037, ADR-040) |
| Meta / content readiness | R1 acceptance in this document |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `user-flows.md`
* `navigation-patterns.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-033-home-without-footer.md` (superseded ADR-041)
* `../../project-os/decisions/ADR-041-home-with-footer.md`
* `../../project-os/decisions/ADR-034-chrome-name-home-chip.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-038-home-hero-two-line-workflow-link.md`
* `../../project-os/decisions/ADR-037-home-lede-now-on-about.md`
* `../../project-os/decisions/ADR-039-about-hero-artwork-lead.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
