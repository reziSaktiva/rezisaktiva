# Release Roadmap

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document plans **product releases** for the **rezisaktiva** portfolio website — the order of value to ship, not a rigid calendar schedule and not engineering sprint details.

---

# Overview

Release strategy: **phased by clarity → presence → craft** (ADR-006), with **destination + lightweight magnet** growth (ADR-007).

* **R1 — MVP Clarity** = Hybrid lean Must (+ Should): Home (hero + `#about`, ADR-040) / Workflow (M14, ADR-035 / ADR-042) / Work index (M9) + **project sheet overlay (M10, ADR-027)** + Contact modal (ADR-019) + bilingual + meta + theme toggle (ADR-021) + Quick Info (M13, ADR-022)
* **R2 — Next magnet** = case pages `/[locale]/projects/[slug]` **and** M10 sheet remains (**ADR-044**); Work index has been live since R1
* **R3 — Presence & craft** = experience polish, selected Could items (motion, form if needed)

Exact dates are **not locked** in discovery; each release exits by the criteria below + dual north star (`success-metrics.md`).

---

# Roadmap Principles

1. **Milestone > speculative calendar** — ship when criteria are met, not because of a date.
2. **Clarity first** — R1 does not wait for full cases or craft spectacle.
3. **One destination** — every release keeps the official URL worthy as the main link.
4. **Magnet after frame** — R2 activates ADR-007 without shifting positioning.
5. **Soft CTA stays** — no release adds pricing / hard sell (ADR-008).
6. **Bilingual from R1** — language is not an afterthought (ADR-002).
7. **Proportional** — do not parallel-build R2/R3 before R1 is live & directionally validated.

---

# Release Strategy

| Aspect | Draft decision |
| ------ | -------------- |
| Model | Milestone releases (R1 → R2 → R3), not continuous feature dump without theme |
| Priority basis | `feature-priority.md` MoSCoW |
| Validation | Aligned with metric phases: Validation (R1) → Traction (R2) → Growth (R3+) |
| Content | R1 Must content ready before “R1 done”; R2 case can be written in parallel *after* R1 frame is clear |
| Tech/stack | Decided in Engineering; this roadmap does not lock framework/hosting |
| Hotfix | Bug/clarity blocker can patch outside release numbers without increasing scope |

---

# Planned Releases

## R1 — MVP Clarity (Hybrid lean)

**Goal:** Destination is worthy for founder/PO evaluation; soft inbound path is ready.

| Included | Modules / items |
| -------- | --------------- |
| Must | M1 Home, M2 About, M3 Contact (global modal, ADR-019), M5 Language, M6 Chrome (including **theme toggle, ADR-021**), M7 Meta, **M9 Work index** (ADR-020; M4 Home teaser retired ADR-032), **M10 project sheet overlay** (ADR-027), **M13 Quick Info** (ADR-022), **M14 Workflow** (ADR-035) |
| Should | Availability line, ID/EN parity, Work tile → sheet, basic a11y |
| Not | Route `/work/[slug]`, blog, CMS, pricing |

**Exit R1:**

1. Short reviewer can summarize: product builder + fullstack + AI edge (NS-1 direction)
2. Contact soft path is clear (NS-2 path ready)
3. Site is worthy as the main link (CV / chat / GitHub)
4. Scope remains Hybrid lean (ADR-010)

Aligned with **Phase 1 — Validation** in `success-metrics.md`.

---

## R2 — Lightweight magnet

**Goal:** Strengthen narrative & shareability with short case/process on the site.

| Included | Modules / items |
| -------- | --------------- |
| Core | **ADR-044** hybrid: tile → sheet; “baca selengkapnya” → `/[locale]/projects/[slug]` (SSG); M10 overlay remains |
| Optional | Gradual copy depth per work; per-work OG is not blocker |
| Not | Blog volume, newsletter machine, mandatory social distribution, removing sheet, path `/work/[slug]` |

**Exit R2:**

1. ≥1 live magnet supports founder/PO evaluation
2. Work index tile connects to sheet / detail (not only external links; Home teaser retired ADR-032)
3. Traction signals become possible (repeated recall + contextual inbound) — aligned with **Phase 2 — Traction**

Prerequisite: R1 exit has been met (or explicit Boss Rezi waiver).

---

## R3 — Presence & craft

**Goal:** Raise the feeling of a brand home and interaction quality without changing the value model.

| Included (choose by capacity) | Modules / items |
| ----------------------------- | --------------- |
| Curated Could | **Advanced** motion/craft (on top of R1 identity baseline, ADR-017 — not repeating R1 claim); M8 form/booking if soft path is weak |
| Polish | IA/UX refinement, performance, advanced a11y, visual consistency |
| Not required | M11 writing hub, M12 playground as main stage, social automation |

**Exit R3:**

1. Presence feels like a “brand home,” not just a sufficient lean frame
2. Craft strengthens the story — it does not obscure positioning
3. Ready for proportional content update rhythm (**Phase 3 — Growth** direction)

---

## Outside release numbers (note)

| Item | Placement |
| ---- | --------- |
| Discovery → Bootstrap → R1 implementation | Project process (`T-007`, Engineering) — not mandatory “product R0” here |
| M11 Writing, M12 Experiments, active distribution | `future-roadmap.md` |
| Pricing / CMS / member auth | Out of product direction (not release backlog) |

---

# Roadmap Review

* Baseline v1.0 locked (ADR-012); M9 R1 = ADR-020; M10 overlay R1 = **ADR-027**. R2 case pages = **ADR-044** (`/projects/[slug]`, hybrid).
* After live, review R1 exit before starting serious R2 build.
* Dates/week estimates may be added in Engineering planning — not required by this document.

---

# Success Criteria

Release roadmap is sufficient if:

1. R1–R3 have clear goals, module contents, and exits
2. Aligned with MoSCoW + ADR-006 / ADR-007 / ADR-010
3. Does not lock speculative dates or technical stack
4. `future-roadmap.md` holds opportunities outside R1–R3

---

# Decision Rules

* Adding Must items to R1 outside Hybrid lean → explicit decision + ADR if material.
* Skipping R2 forever conflicts with ADR-007 (magnet) — it can be deferred, not removed without ADR.
* Hard sell / pricing in any release → rejected (ADR-008).
* Sprint/ticket details → after Engineering baseline; this document remains the source of truth for value order.

---

# Related Documents

* `README.md` — documentation for this phase
* `mvp-definition.md` — MVP definition (R1)
* `feature-priority.md` — MoSCoW
* `feature-modules.md` — M1–M14 (M4 retired)
* `future-roadmap.md` — long-term opportunities
* `../01-business/success-metrics.md` — Validation / Traction / Growth
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
