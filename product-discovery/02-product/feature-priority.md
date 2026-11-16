# Feature Priority

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document defines feature/module priorities for the **rezisaktiva** portfolio website using the MoSCoW framework for the **MVP release (clarity frame)**.

---

# Overview

Priority follows the investment order **clarity → presence → craft** (ADR-006) and the **Hybrid lean** structure (ADR-010):

* **Must** = without this, the destination is not worthy of founder/PO evaluation
* **Should** = strengthens clarity/presence without blocking ship
* **Could** = added value if capacity/content allows
* **Won't (current release)** = full magnet, media, sales, or heavy system — scheduled later or rejected for product direction

Module IDs refer to `feature-modules.md` (M1–M14).

---

# Priority Framework

**MoSCoW** for the Hybrid lean MVP release (not the entire product lifetime).

| Bucket | Meaning for rezisaktiva |
| ------ | ----------------------- |
| **Must Have** | Required so the dual north star path is alive (clarity + soft inbound ready) |
| **Should Have** | Aim for the same release; may follow as a fast patch if time blocks |
| **Could Have** | Nice-to-have; do not delay Must items for this |
| **Won't Have (current)** | Intentionally outside MVP release; goes to release/future roadmap |

Material changes to bucket placement after Product Baseline → new ADR.

---

## Must Have

| ID | Item | Short reason |
| -- | ---- | ------------ |
| M1 | Home (identity + destination) | Clarity door: lede / claim / next step (ADR-032 / ADR-037) |
| M2 | About (narrative, Home section) | Who Rezi is — Now + lead + artwork (ADR-040); not `#proof` |
| M14 | Workflow | Way of working (principles, Human/AI pipeline, ADR Vault — ADR-042) |
| M3 | Contact (soft path) | Inbound path without hard sell / pricing |
| M5 | Language (bilingual geo-aware + switcher) | ADR-002; relevant SEA + open door |
| M6 | Site chrome & satellites | Lean nav + footer + satellite links + **theme toggle (ADR-021)** |
| M7 | Destination meta (basic title/description/OG) | URL worthy as “main link” |
| M9 | Work index (work catalog) | **Moved from Won't → Must** (override ADR-020, 2026-08-15); nav "Karya" needs a real destination |
| M10 | Project context sheet **and** R2 case page | **Must R1** overlay (ADR-027). **Must R2** `/[locale]/projects/[slug]` from sheet link (**ADR-044**); not `/work/[slug]` |
| M13 | Quick Info panel | Glanceable global overlay — **Must R1 (ADR-022)**; not route |

M4 Work teaser **retired** (ADR-032) — not Must; work presence = M9 + M10; magnet URL = ADR-044.

---

## Should Have

| ID / item | Description | Short reason |
| --------- | ----------- | ------------ |
| Soft availability line | One sentence open to collaboration/opportunity | Strengthens soft presence |
| ID/EN meaning parity | Equivalent copy, not machine dump | Credible bilingual experience |
| **Actionable work** | Tile → M10 sheet; from sheet → case page; live/repo inside sheet/case | ADR-027 / ADR-032 / **ADR-044** |
| Basic accessibility | Headings, contrast, keyboard focus | Clarity also means usable |
| Motion as visual identity | Scroll-triggered reveal, subtle micro-interaction, hero easing (**ADR-017**) | Up from minimal Could; still bound by clarity-first, not a new page module |

Should = quality of Must, not new page modules.

---

## Could Have

| ID / item | Description | Notes |
| --------- | ----------- | ----- |
| M8 | Contact form / lightweight booking | Only if email/link feels insufficient |
| Early magnet | Other form (now locked by **ADR-044**: hybrid sheet + `/projects/[slug]`) | No longer “overlay only” |

---

## Won't Have (Current Release)

For the **MVP release** (clarity frame), intentionally **not** included:

| ID / item | Description | When considered |
| --------- | ----------- | --------------- |
| M10 page `/work/[slug]` | Historical route name | **Rejected** — use `/projects/[slug]` (ADR-044) |
| M11 | Writing / notes hub | Future — not the core MVP vision |
| M12 | Experiments / playground as stage | Future craft satellite |
| — | Pricing, packages, checkout | Rejected product direction (ADR-008) |
| — | CMS/auth/dashboard/member area | Outside MVP product boundary |
| — | Blog/newsletter as engine | Future; not MVP growth |
| — | Heavy analytics / invasive personalization | Engineering: lightweight & privacy-aware |
| — | Social distribution automation | Not the MVP engine (ADR-007) |

---

# Feature Priorities

Suggested work order (content + surface), still within one MVP release:

| Order | Focus | Module |
| ----- | ----- | ------ |
| 1 | Surface clarity | M1 Home (+ claim & next step) |
| 2 | Soft path | M3 Contact |
| 3 | Narrative | M2 About |
| 4 | Lean proof presence | M9 Work index (M4 retired, ADR-032) |
| 5 | Cross-page | M5 Language + M6 Chrome (including theme toggle, ADR-021) + M13 Quick Info (ADR-022) |
| 6 | Destination hygiene | M7 Meta |
| 7 | Should polish | Availability, ID/EN parity, basic a11y |
| 8 | Project context | M10 overlay sheet (ADR-027) |
| 9 | Could (optional) | M8 / case route later |

Release schedule details → `release-roadmap.md` (T-002.5).

---

# Prioritization Principles

1. **Clarity before craft** — do not delay Home/About/Contact for animation or perfect cases.
2. **Primary brand** — items that push hard sell / pricing = Won't (product direction).
3. **Hybrid magnet** — M10 sheet Must R1 (ADR-027); case page `/projects/[slug]` Must R2 (**ADR-044**).
4. **Should ≠ Must** — complete Must ship is more important than perfect polish.
5. **Could does not steal capacity** — form/early case only if Must+Should (including identity motion, ADR-017) are safe.
6. **Aligned with dual north star** — priorities that do not help recall or soft inbound path should be questioned.
7. **One module source** — M1–M14 IDs come from `feature-modules.md` (M4 retired); do not invent parallel modules here.

---

# Review Process

* Baseline v1.0 is locked (ADR-012); material MoSCoW changes → ADR + update `mvp-definition.md` / roadmap.
* Move a Won't item → Must/Should only with written reason + MVP impact (and ADR if material).
* Interaction/wireframe details are not decided in this document (UX phase).

---

# Success Criteria

Priority is sufficient if:

1. Every Must Have in `mvp-definition.md` maps to a Must row here
2. M10 **overlay** Must R1 (ADR-027); case page `/projects/[slug]` Must R2 (**ADR-044**); M9 Must (ADR-020); M13 Must (ADR-022); theme toggle Must in M6 (ADR-021)
3. Work order can be used directly by `release-roadmap.md`
4. No Must item conflicts with no-pricing / soft CTA

---

# Related Documents

* `README.md` — documentation for this phase
* `product-scope.md` — product boundaries
* `mvp-definition.md` — MVP definition
* `feature-modules.md` — M1–M14 module catalog (M4 retired)
* `release-roadmap.md` — release schedule (next)
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-017-motion-as-identity-r1.md` — motion as visual identity
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
