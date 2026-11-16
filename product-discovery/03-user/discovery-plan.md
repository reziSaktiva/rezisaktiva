# Discovery Plan

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document plans how User Discovery for the personal portfolio website **rezisaktiva** is run and bounded.

---

# Overview

User Discovery in this phase is **assumption-led**: a synthesis from the Business Baseline (ADR-002, ADR-004, ADR-005, ADR-009) and Product Baseline (ADR-010–012), validated by Boss Rezi. It also includes an **optional lightweight research plan** that does not block User Baseline v1.0.

It is not mandatory formal research (interviews/surveys as the baseline gate).

---

# Purpose

* Establish the objectives, questions, assumptions, sources, and methods for user discovery.
* Keep evidence honest: what is assumed vs what will be validated later.
* Connect user outputs to UX (the next phase) without shifting the Hybrid lean scope.

---

# Scope

## In Scope

* Inventory of assumptions about primary and secondary visitors
* Synthesis of segments, personas, goals, pains, JTBD, scenarios, journey (R1 + thin secondary)
* Optional lightweight validation plan after baseline
* Confidence level and evidence rules

## Out of Scope

* Mandatory interviews/surveys before locking the baseline
* Production analytics / full quantitative instrumentation (later in Engineering)
* Research for audiences outside the ICP locked by ADR-005
* Product scope redesign (already locked by ADR-010–012)

---

# Discovery Objectives

1. Deepen (not replace) the dual founder/PO ICP from `target-market.md`
2. Explain visitor jobs and friction when evaluating Rezi as a product builder
3. Map the R1 Clarity journey (Home `#about` / Workflow / Work index → Contact) plus a thin secondary path
4. Produce insights that are actionable for UX without adding new Must MVP scope
5. Record high-risk assumptions and optional lightweight validation methods

---

# Discovery Questions

| # | Question | Used in |
| - | -------- | ------- |
| Q1 | Who arrives, and what is their intent in the first 1–3 minutes? | segments, personas, goals |
| Q2 | What must they understand to feel “this is relevant to me”? | goals, JTBD, journey |
| Q3 | Where do evaluation and contact friction happen today (without an owned site)? | pain-points, current-state journey |
| Q4 | Which jobs must R1 serve vs which can wait for the R2 magnet? | JTBD priority, scenarios |
| Q5 | What do hiring managers / prospective clients need without shifting the brand message? | secondary journey |
| Q6 | Which assumptions are riskiest if wrong? | assumption inventory, open questions |

---

# Assumption Inventory

| ID | Assumption | Risk if wrong | Mitigation |
| -- | ---------- | ------------- | ---------- |
| A1 | Two primary archetypes are equal (early founder & PO) and read the same message layer | Message becomes too “indie” or too “corporate” | Neutral product-builder copy; outcome teaser, not a single tone |
| A2 | A short visit is enough for clarity if Home + About section + Workflow + Work index + Contact are coherent | Visitors remain confused without case detail | Presence = Work index + sheet; Workflow = way of working; Home teaser retired (ADR-032 / ADR-020 / ADR-035 / ADR-040). Case magnet in R2 (not an R1 blocker). |
| A3 | Soft CTA (email/links) is enough for quality inbound in R1 | Opportunities are lost because of form/booking friction | Could Have form/calendar in product; validate after live |
| A4 | Hiring manager / project client can be served by secondary signals on the same surfaces | They bounce because it is “not a developer CV” | Thin secondary journey: fullstack signal + way of working without rebrand |
| A5 | Bilingual geo-aware behavior reduces SEA vs non-SEA alienation | Wrong default language → bounce | Details in UX/Engineering; switcher always available (ADR-002) |
| A6 | Short peer/chat validation after live is enough to improve copy | ICP assumptions are materially off | Lightweight research plan below; new ADR if ICP changes |

---

# Discovery Sources

| Source | Role | Notes |
| ------ | ---- | ----- |
| `01-business/` Baseline v1.0 | Primary source for audience and problem assumptions | ADR-002, 004, 005, 009 |
| `02-product/` Baseline v1.0 | Boundary for relevant surfaces and journeys | Hybrid lean; R1–R3 |
| Boss Rezi’s experience | Framing and priority validation | Decision owner |
| Public satellites (GitHub, LinkedIn, CV) | Evidence of current-state friction | Not the main stage |
| Peer / short chats (optional) | Validate copy and clarity after draft/live | Does not block baseline |
| Lightweight analytics (later) | Behavioral direction, not persona SoT | Privacy-aware; Engineering phase |

---

# Discovery Method

**Locked method: Assumption-led + lightweight research plan (option B).**

1. **Desk synthesis** — derive segments/personas/goals/pains/JTBD/scenarios/journey from business+product baselines.
2. **Boss Rezi review** — lock User Baseline v1.0 through an ADR.
3. **Optional lightweight research (does not block baseline):**
   - 3–5 short conversations with founders/POs / peers in the SEA network
   - Ask them to open the draft/live site (or a description of the R1 surfaces) and answer: “Who is Rezi? Good for what? Would you contact him?”
   - Record copy / proof / CTA mismatches; revise documents or UX copy if material → ADR if changing ICP/core journey
4. **Not done in this phase:** mass surveys, formal usability lab, paid panel.

---

# Evidence Rules

* User Baseline may be locked from **documented assumptions + Boss Rezi validation**.
* Claims like “users always / never...” without a source → mark as an assumption (A#).
* Optional research findings that conflict with the locked ICP → escalate to ADR, do not silently replace it.
* Insights for UX must reference jobs/pains that exist in this phase’s documents.

---

# Confidence Level

| Area | Confidence | Reason |
| ---- | ---------- | ------ |
| Primary ICP & segments | High | Locked by ADR-005 + `target-market.md` |
| Core goals & pains (evaluation chain) | High | Aligned with ADR-004 / problem-statement |
| Primary R1 journey | Medium-high | Derived from Hybrid lean; not live-tested yet |
| Secondary needs (hiring / clients) | Medium | Served thinly; not the main optimization |
| Soft CTA enough vs form/booking | Medium | Assumption A3; validate after R1 live |
| Persona emotional details | Medium | Synthesis; lightweight research can sharpen |

---

# Quality Criteria for Insights

An insight is suitable for `insights.md` if it:

1. Explains visitor behavior or decisions (not speculative design preference)
2. Connects to the dual north star (clarity and/or quality inbound)
3. Does not push features outside the Product Baseline without marking “post-R1 / ADR”
4. Can be translated into a UX question (hierarchy, copy, CTA, proof)

---

# Discovery Risks

| Risk | Impact | Response |
| ---- | ------ | -------- |
| Overfitting to one archetype | Alienates the other equal archetype | Keep the dual primary equal (ADR-005) |
| Filling the gap with mandatory R1 cases | Scope creep vs ADR-010 | Teaser only; cases in R2 |
| Delaying baseline while waiting for interviews | Discovery stalls | Research is explicitly optional and non-blocking |
| Secondary journey shifts the brand to “CV hire” | NS-1 weakens | Message remains product builder; secondary signal in proof layer |

---

# Expected Output

* All `03-user/` documents are filled in and cross-referenced
* Assumptions with IDs (A1–A6) and open questions are documented
* Optional lightweight research plan is written (not required before baseline)
* User Baseline v1.0 + ADR

---

# Success Criteria

1. Boss Rezi approves the assumption-led method + optional lightweight research
2. R1 journey + thin secondary path are reflected in scenarios/journey/insights
3. No new Must contradicts ADR-010–012
4. UX phase can start from insights without guessing the ICP again

---

# Exit Criteria

* Documents for this phase are filled in (not TBD)
* User Baseline ADR Accepted
* Material open questions are recorded (not hidden)

---

# Related Documents

* `README.md` — documentation for this phase
* `user-segments.md` / `user-personas.md` — who the visitors are
* `insights.md` — synthesis & assumption review
* `../01-business/target-market.md` — business ICP
* `../02-product/mvp-definition.md` — R1 surfaces
* `../../project-os/decisions/ADR-013-user-baseline-v1.md` — User phase lock
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
