# User Journey

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document maps the visitor journey for the **rezisaktiva** portfolio website — focused on R1 Clarity plus a thin secondary path.

---

# Overview

**Journey scope decision:** primary R1 (Home → About / Workflow / Work index → Contact) as the axis; hiring managers & prospective clients get a thin secondary path on the same surfaces. The R2 magnet journey (case detail) is recorded as later, not a Must for this map.

> **Update (2026-08-15/16, ADR-019/ADR-020/ADR-021/ADR-022):** Work index (M9) was promoted to Must R1 — included in the surface set. Contact is final as a global modal (ADR-019), not a page. Theme toggle (ADR-021) and Quick Info overlay (ADR-022) complete the chrome across all stages.
>
> **Update (2026-09-07, ADR-032 / ADR-035):** Home teaser retired. Work presence = Work index + sheet.
>
> **Update (2026-09-08, ADR-040 / ADR-042):** About = `#about` section on Home (without `#proof`). Workflow = five decision-driven blocks, not offers/accordion.

---

# Purpose

* Map current-state (without a digital home) vs target-state R1
* Show the emotion curve and opportunities (non-solution)
* Bridge to UX flows without adding product scope

---

# Scope

## In Scope

* Journey lens & stages
* Current-state map (fragmented)
* Target-state R1 primary + secondary branch
* Emotion curve & opportunity areas

## Out of Scope

* Wireframe / UI solutioning
* Full R2/R3 journey detail
* Content owner CMS journey

---

# Journey Lens

| Lens | Choice |
| ---- | ------ |
| **Primary actor** | P1 & P2 (equal) |
| **Secondary actor** | P3, P4 (thin) |
| **Horizon** | One short visit → soft next step |
| **Surface set** | Home, About, Workflow, Work index, Contact modal, language switcher, theme toggle, Quick Info overlay |
| **North stars** | Clarity (NS-1) + quality inbound (NS-2) |

---

# Current-State Journey Map

Without an owned site (today):

| Stage | What happens | Emotion | Pain |
| ----- | ------------ | ------- | ---- |
| **Trigger** | Hear the name / see GitHub / receive CV | Neutral–curious | Weak visibility |
| **Find** | Search LinkedIn/GitHub/chat history | Mild frustration | Scattered proof |
| **Assemble** | Assemble the story from repo + CV | Confused | Wrong “developer” frame |
| **Judge** | Hard to answer product builder fit | Doubtful | Slow fit judgment |
| **Act** | Awkward chat / no contact | Hesitant | Contact friction |
| **Share** | Hard to point one URL to the team | Reluctant to align | No destination |

---

# Target-State Journey Map (R1)

### Primary path (P1 / P2)

| Stage | Target experience | Surface | Jobs |
| ----- | ----------------- | ------- | ---- |
| **Arrive** | Positioning is immediately readable | Home (above fold) | J1 |
| **Orient** | Understand product builder → fullstack → honest AI edge | Home | J1, E2 |
| **Evidence** | Who in About (`#about`); way of working in Workflow (ADR-042); work in Work index (sheet M10) | Home `#about`, Workflow, Work | J2, J4 |
| **Deepen** (optional) | Personal narrative & way of working | About, Workflow | J4, E4 |
| **Language** (if needed) | Switcher anytime | Global chrome | J7 |
| **Decide** | Enough trust for next step | — | E1, E3 |
| **Act** | Soft CTA (email / links) via Contact modal | Contact (overlay, ADR-019) | J3 |
| **Share** (optional) | URL suitable to send to team | Meta + clarity | SJ1 |

### Thin secondary branch

| Actor | Divergence from primary | Stays the same |
| ----- | ----------------------- | -------------- |
| **P3 Hiring** | After Orient/Evidence, leans more toward About + GitHub satellite; may not go to Contact | Product builder positioning on Home |
| **P4 Client** | After Evidence, quickly to Contact; not looking for pricing | Soft path; no hard sell |

### Later (not R1 Must map)

After the R2 magnet: **Case** stage between Evidence and Decide (J6) — does not block the journey above.

---

# Emotion Curve

| Stage | Current | Target R1 |
| ----- | ------- | --------- |
| Arrive | Neutral | Confident curiosity |
| Assemble / Orient | Frustration ↑ | Clarity ↑ |
| Judge / Evidence | Doubt | Trust rises gradually |
| Act | Hesitant / skip | Calm next step |
| After | Story forgotten | Recall “product builder” (NS-1) |

Critical point: **Orient → Evidence**. If this fails, Act rarely happens (NS-2 weakens).

---

# Opportunity Areas (Non-Solution)

Opportunities for UX (not UI specifications):

1. **First-screen clarity** — answer “who & for whom” without long scrolling
2. **Proportional proof** — AI claim in About + way of working in Workflow + work in Work index beats a stack list; do not duplicate tech bingo
3. **About as risk-reducer** — especially for P2
4. **Contact as soft landing** — reduce awkwardness; do not make it a sales desk
5. **Secondary signals without rebrand** — P3 gets signals without turning Home into a CV
6. **i18n comfort** — default + switcher as part of the journey, not an afterthought
7. **Shareability** — one URL that makes sense for SC6

Anti-opportunity (do not pursue in R1): mandatory case catalog, pricing, auth, blog as evaluation requirement.

---

# Expected Output

An R1 journey map + thin secondary path aligned with scenarios and Product Baseline.

---

# Exit Criteria

* Current vs target is clear
* Thin P3/P4 branch documented
* Non-solution opportunity ready to hand off to `04-ux/`

---

# Related Documents

* `README.md`
* `user-scenarios.md`
* `pain-points.md`
* `insights.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
