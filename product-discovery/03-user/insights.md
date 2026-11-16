# Insights

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document synthesizes User Discovery insights for the **rezisaktiva** portfolio website.

---

# Overview

Insights are combined from assumption-led discovery (method B), aligned with the Business & Product Baselines. Optional lightweight research is recorded as a next step — it does not delay locking this phase.

---

# Purpose

* Close the User phase with actionable decisions
* Review assumptions (A1–A6)
* Hand clear implications to UX / Architecture

---

# Scope

## In Scope

* Key observations, insights, assumption review
* Product implications (without changing the locked baseline except through ADR)
* Open questions & decision gate

## Out of Scope

* UI/visual specification
* Engineering stack decisions
* Changing MVP surfaces without a new ADR

---

# Key Observations

1. The dual founder/PO ICP is already locked — the User phase deepens it, not replaces it.
2. The biggest friction today is **assembling the narrative** and **judging fit quickly**, not the absence of social accounts.
3. Hybrid lean (Home including About section / Workflow / Work index / Contact) is enough for Must R1 jobs if clarity & soft CTA are strong. **Update (ADR-032 / ADR-035 / ADR-040):** Home teaser retired; `#proof` removed; page destinations = Home, Workflow, Work index.
4. Hiring/clients need a path, but **not** a second brand.
5. Case detail is a desire (PP11/J6), not a clarity blocker — aligned with ADR-010 (R2).
6. Baseline evidence = assumptions + Boss Rezi validation; live journey confidence remains medium until draft/live + lightweight research.

---

# Insights

| ID | Insight | Consequence |
| -- | ------- | ----------- |
| I1 | **Clarity is the product of the first visit** — visitors pay with brief attention | UX must win Orient in the first viewport |
| I2 | **One message layer, two evaluation emphases** — P1 ↔ P2 ask different questions, same brand | Do not split Home into two modes; differentiate through About / Workflow / Work index (not Home teaser — ADR-032 / ADR-035) |
| I3 | **Work carries trust; cases deepen it** — forcing cases into R1 delays the destination | Presence = Work index + sheet M10 (Home teaser retired, ADR-032). Do not force case pages in R1. |
| I4 | **The soft path determines NS-2** — without calm Contact, clarity does not become inbound | Contact = first-class surface, not a footer afterthought |
| I5 | **Secondary success = signal, not conversion UI** — P3/P4 succeed if they find proof/contact | Do not add a job board / pricing to “serve” them |
| I6 | **Language is part of the journey, not cosmetic chrome** — J7 affects early bounce | Geo-default + switcher enter R1 UX acceptance |
| I7 | **Current-state pain = fragmented proof** — the site wins if it assembles the story | Conscious curation > imitating GitHub layout |

---

# Assumption Review

| ID | Baseline status | Notes |
| -- | --------------- | ----- |
| A1 Equal dual primary | Accepted (ADR-005) | Keep; monitor tone bias in copy |
| A2 Clarity without full cases | Accepted for R1 | Validate after teaser live; PP11 known |
| A3 Soft CTA enough | Provisional (channel locked) | **Email primary** (ADR-014); form/calendar remain Could; validate inbound after R1 |
| A4 Secondary thin enough | Accepted for this phase | If hiring becomes the main opportunity source → ADR |
| A5 Bilingual reduces alienation | Accepted direction (ADR-002) | Geo detection detail in UX/Eng |
| A6 Lightweight research after baseline | Planned | 3–5 chats; does not block ADR-013 |

---

# Product Implications

> **Note (2026-08-15/16):** The statement below reflects the state when User Baseline v1.0 was locked (2026-08-07). Since then, ADR-019/020/021/022 (Development phase) added new Musts (Contact modal, Work index, theme toggle, Quick Info) — those changes came from later UX/product decisions, not User phase findings, so they do not change conclusions I1–I7 above.
>
> **Note (2026-09-08):** ADR-040 makes About = Home section (without `#proof`); ADR-042 replaces Workflow content. Insights I1–I7 remain the User phase reference; live surfaces follow the latest ADR.

* **No Must changes** to ADR-010–012 from User findings (per 2026-08-07 baseline).
* Strengthen the emphasis: Home clarity, About as risk-reducer, Workflow as way of working, Work index + sheet as presence, Contact soft.
* Could Have (form/calendar) only if A3 proves weak after live.
* R2 magnet remains the answer for J6 — do not silently promote it to Must.

---

# Implications for Next Phases

## For UX Discovery

* Build IA & flows from SC1–SC5 and the target R1 journey
* Prioritize first-screen messaging, About / Workflow / Work index, soft Contact
* Design the secondary path without separate nav/IA for hiring
* Specify bilingual geo-aware behavior + switcher as acceptance
* Use opportunity areas in `user-journey.md` as the design question backlog

## For Architecture Discovery

* Public read-only site; no auth/RBAC (ADR-011)
* Needs i18n foundation and destination hygiene (meta, stable URL)
* Contact integration = mailto/link first; form only if decided later
* Privacy-aware lightweight analytics as support for A3 validation — not persona SoT

---

# Open Questions

| # | Question | When answered |
| - | -------- | ------------- |
| OQ1 | Is a 1–3 item teaser enough without cases for risk-averse P2? | **Partly closed (ADR-032):** Home teaser retired; presence = Work index + sheet M10. P2 validation remains a post-live observation |
| OQ2 | Which soft CTA is most natural (email vs LinkedIn vs both)? | **Closed (ADR-014)** — Email primary; LinkedIn & GitHub satellites; no WA/IG in R1 |
| OQ3 | How assertive should the availability line be without feeling salesy? | UX copy / content execution |
| OQ4 | Is hiring inbound large enough that the secondary path should be strengthened? | Post-R1 observation |
| OQ5 | Default-language rules in edge cases (VPN, browser language)? | **Closed at UX layer** (IA Entry Points); geo detection details → Engineering |

---

# Decision Gate

User Baseline v1.0 is **ready to lock** if Boss Rezi approves:

1. Assumption-led method + optional lightweight research
2. Primary R1 journey + thin secondary path
3. Insights I1–I7 as the UX reference
4. No new product Must from this phase

→ Locked through **ADR-013**.

---

# Expected Output

A synthesis that closes T-003 and opens T-004 (UX) without guessing the ICP again.

---

# Exit Criteria

* Insight & assumption review complete
* UX/Architecture implications written
* Open questions are not hidden
* User Baseline ADR Accepted

---

# Related Documents

* `README.md`
* `discovery-plan.md`
* `user-journey.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
