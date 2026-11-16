# Domain Model & Bounded Context

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines the lean information model for the personal portfolio website **rezisaktiva** — **not** a full DDD domain model / bounded context map for a transaction system.

---

# Overview

The R1 product is a **public read-only site** (Hybrid lean). There are no business aggregates, multi-user workflows, or SaaS-style bounded contexts.

What exists is only a **content & surface model** that supports clarity + soft inbound. DDD bounded contexts = **deliberate N/A** for R1.

System shape decision: **Static-first (SSG) + content in repo** (ADR-015).

---

# Purpose

* Explain “what exists in the site world” without forcing DDD
* Serve as the content structure reference for Engineering (MD/MDX or equivalent)
* Preserve the trace: why there is no enterprise context map

---

# Scope

## In Scope

* Lean content entities (page, locale, work item, contact channel)
* Boundaries: what is **not** the site’s product domain

## Out of Scope

* Aggregate roots, domain events, context maps across microservices
* User/account, order, subscription models
* Relational database schema

---

# Domain Overview (lean)

| Concept | Meaning in R1 | Notes |
| ------- | ------------- | ----- |
| **Page** | Home (including About section), Workflow, Work index (per locale) | Surface IA; About is not a Page (ADR-040); Workflow Must R1 via ADR-035 / ADR-042; Work index via ADR-020 |
| **Locale** | `id` \| `en` | Path prefix; equivalent copy meaning |
| **Identity claim** | Product builder positioning (+ fullstack + AI edge) | Home first viewport |
| **Work item** | Catalog card: name · outcome · optional proof link | Work index; not case detail |
| **Contact channel** | Global modal (ADR-019), not a Page; primary Email + optional lightweight form; LinkedIn/GitHub satellites | No backend form/WA/IG in R1 |
| **Site chrome** | Nav, switcher, footer, theme toggle (ADR-021) | Global; footer on all routes including Home (ADR-041) |
| **Quick Info overlay** | Glanceable drawer (bio, Services, Tools, Works, Email, Links) | Not a Page — M13, ADR-022 |

There is no “Customer”, “Order”, “Session user”, or “Workspace”.

---

# Bounded Contexts / Modules

**N/A (DDD).** There is no bounded context mapping.

Practical mapping to product modules (already in `02-product/feature-modules.md`):

| Module | Lean domain concept |
| ------ | ------------------- |
| M1 Home | Identity claim + lede, soft direction (ADR-032 / ADR-037) |
| M2 About | Narrative + Now + lead/artwork (Home section, ADR-040); no `#proof` |
| M14 Workflow | How-I-work (principles, Human/AI pipeline, ADR Vault — ADR-042) |
| M3 Contact | Contact channel (modal overlay) |
| M4 Work teaser | Retired (ADR-032) |
| M5 Language | Locale |
| M6 Chrome | Site chrome (including theme toggle, ADR-021) |
| M7 Meta | Share/meta per Page×Locale |
| M9 Work index | Work catalog Page + Work item (Must R1, override ADR-020) |
| M10 Project sheet | Bottom overlay (Must R1, ADR-027) + Page `/projects/[slug]` (Must R2, ADR-044) |
| M13 Quick Info | Quick Info overlay (Must R1, ADR-022) |

---

# Context Map

**N/A** — one public surface; there is no anti-corruption between business systems. Satellites (GitHub/LinkedIn) = outbound links, not integrated contexts.

---

# Domain Boundary Rules

1. **Public read-only** — visitors do not write state to the site domain.
2. **Authoring outside the product** — Rezi edits content in the repo / deploy tools; that is an engineering process, not an in-app domain.
3. **Project sheet (M10 overlay)** = Must R1 (ADR-027). **Case page** `/[locale]/projects/[slug]` = Must R2 (**ADR-044**) — not `/work/[slug]`. Work index (M9) remains a Page.
4. **Sensitive material** → `private/` or outside the repo (ADR-003), not a product entity.
5. Adding transaction aggregates / user accounts → ADR + Product scope revision.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| DDD bounded context | Deliberate N/A for R1 |
| Model used | Lean content / surface model |
| System shape | Static-first SSG + content in repo (ADR-015) |

---

# Success Criteria

1. It is clear there is no transaction/SaaS domain
2. Lean content concepts are enough for Engineering handoff
3. Aligned with ADR-010–014 and ADR-015

---

# Related Documents

* `README.md`
* `application-layer.md`
* `database-strategy.md`
* `../02-product/feature-modules.md`
* `../04-ux/information-architecture.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
