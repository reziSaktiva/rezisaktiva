# Product Scope

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document defines the boundaries and product domains for the personal portfolio website **rezisaktiva**.

---

# Overview

**rezisaktiva** is a public portfolio site that functions as **one digital home** for Rezi Saktiva's product-builder identity: clear story, credible proof, and a soft contact path.

R1 surface structure: **Hybrid lean** — three pages: **Home** (hero + About section `#about`, ADR-040), **Workflow** (`/workflow`, ADR-035 / ADR-042), and **Work index** (`/projects`). Home = top h1, lower-floor lede, footer ribbon (ADR-038 / ADR-041). Now is in About. **Contact** = global modal (ADR-019). **Quick Info** (ADR-022) and **theme toggle** (ADR-021) live in chrome. **Project sheet (M10)** = bottom overlay when a Work index tile is clicked (ADR-027). **R2:** case pages at `/[locale]/projects/[slug]` from links in the sheet (**ADR-044**).

Not a service shop, not a blog/media property, not an app with user accounts.

---

# Product Principles

1. **Clarity first** — visitors understand who / proof / next step in one short visit (ADR-006).
2. **Primary brand** — soft CTA for opportunity/project; no hard sell or public pricing (ADR-002, ADR-008).
3. **One home** — site = source of truth; GitHub/LinkedIn = satellites.
4. **Hybrid lean** — enough pages for evaluation; do not overbuild Work/case in MVP.
5. **Gradual magnet** — short case/process enters the roadmap after the clarity frame, not as a first-ship blocker.
6. **Bilingual geo-aware** — default ID in Indonesia, EN outside; switcher is always available (UX/Engineering details).
7. **Proportional** — content and features are enough for the dual north star; avoid craft spectacle or heavy CMS early.

---

# Core Product Domains

| Domain | What it covers | Role in MVP |
| ------ | -------------- | ----------- |
| **Identity & positioning** | Product builder + fullstack + AI edge claim on the surface | Core — Home |
| **Narrative / About** | Personal story (Now, lead, artwork) | Core — `#about` section on Home (ADR-040) |
| **Workflow** | Way of working: principles, Human vs AI pipeline, ADR Vault (ADR-042) | Core — Workflow |
| **Work presence** | Work index (`/projects`, M9) + **project sheet overlay (M10, ADR-027)** | Core — index + sheet |
| **Soft contact** | Clear, non-aggressive contact path via global modal (ADR-019) | Core — Contact modal |
| **Language** | Bilingual geo-aware experience + switcher | Core across pages |

---

# Supporting Domains

| Domain | What it covers | Notes |
| ------ | -------------- | ----- |
| **Site chrome** | Nav, footer (all routes — ADR-041), soft availability (“open to…”) | Supports presence |
| **Satellite links** | GitHub, LinkedIn, etc. as outbound links | Complements the site, does not replace it |
| **Shareable basics** | Lightweight meta/SEO so URL is worthy as a destination | Tool details in Engineering |
| **Lightweight magnet (post-frame)** | Short case/process, Work/detail pages | Supporting → rises after MVP clarity |

---

# Product Boundaries

**Inside the product (R1 Hybrid lean):**

* Lean public site: Home (including `#about`), Workflow (`/workflow`, M14), Work index (`/projects`, M9); `/about` only redirects
* Home = top h1, lower-floor lede (not Now, not work teaser — ADR-032 / ADR-038)
* Global Contact modal (ADR-019) + Quick Info overlay (ADR-022) — not separate pages
* Dark/light theme toggle in chrome (ADR-021)
* Soft contact CTA (email and/or direct link; no pricing)
* Bilingual geo-aware + language switcher
* Owner-curated content (not UGC, not marketplace)

**Outside product boundaries (general):**

* User authentication / member area
* Public CMS or admin panel as product
* E-commerce, checkout, pricing packages
* Blog/media as core business
* Collaboration app, client dashboard, or SaaS
* Social distribution engine as a site feature

---

# Out of Scope (MVP)

For the Hybrid lean MVP, **not included yet**:

* **Case detail** page `/projects/[slug]` — **R2 (ADR-044)**; not a replacement for M10 overlay
* Blog / writing hub
* Backend contact form, booking calendar, or CRM
* Web playground/experiments as the main stage
* Dark-pattern lead magnet, aggressive popup, rate card
* Multi-author, comments, or community on the site
* Heavy analytics / invasive personalization (principle: lightweight & privacy-aware)

Case detail and advanced form are covered in `mvp-definition.md` (Should/Could) and the next roadmap.

---

# Success Criteria

Scope is moving in the right direction if:

1. Founders/POs can do basic evaluation through Home + About + Workflow + Work index + Contact modal without assembling the story from GitHub/CV
2. Homepage answers who / concise proof / next step (aligned with dual north star)
3. Work feels present (catalog + M10 sheet); per-work magnet URL = R2 ADR-044
4. Soft contact path is clear (modal, ADR-019); no pricing or hard sell
5. Boundaries in this document are consistent with ADR-002, ADR-006, ADR-007, ADR-010, and overrides ADR-019/020/021/022/032/035/040/041/042

---

# Related Documents

* `README.md` — documentation for this phase
* `mvp-definition.md` — MVP contents
* `feature-modules.md` — modules/pages
* `../01-business/product-vision.md` — vision & positioning
* `../01-business/business-model.md` — destination + gradual magnet
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md` — surface-structure decision
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md` — Contact becomes global modal
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md` — Work index Must R1
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md` — theme toggle Must R1
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md` — Quick Info panel Must R1
* `../../project-os/decisions/ADR-040-about-as-home-section.md` — About = Home section
* `../../project-os/decisions/ADR-041-home-with-footer.md` — footer ribbon on Home
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md` — Workflow contents
* `../../project-os/PROJECT_STATE.md` — project status
* `../../project-os/DECISIONS.md` — ADR index
