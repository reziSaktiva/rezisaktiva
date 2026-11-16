# Pain Points

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document deepens visitor pain points (and the current state without a digital home) related to evaluating **rezisaktiva** as a product builder.

---

# Overview

Pains follow the **visibility → narrative → evaluation & contact** chain (ADR-004). The focus is on audience friction when judging fit — not a generic list of internet complaints.

---

# Purpose

* Connect the business problem to concrete user experience
* Prioritize pains that R1 must ease
* Provide input for opportunity areas in the journey (without solving UI here)

---

# Scope

## In Scope

* Severity framework
* Core pain themes + inventory
* Pain mapping by persona

## Out of Scope

* Wireframe solution / final copy (→ UX)
* Detailed hosting infrastructure / technical SEO pains
* Pains only relevant to multi-user SaaS products

---

# Pain Point Framework

| Dimension | Scale | Meaning |
| --------- | ----- | ------- |
| **Severity** | High / Med / Low | How much it blocks evaluation & contact |
| **Frequency** | Often / Sometimes / Rare | How often it appears in the ICP context |
| **R1 relevance** | Must ease / Later / Out | Whether Hybrid lean must ease it |

---

# Core Pain Themes

1. **Fragmented proof** — proof scattered across GitHub, CV, chat
2. **Wrong default frame** — read as “developer” instead of product builder
3. **Slow fit judgment** — hard to answer “is he right for my idea/initiative?” quickly
4. **Contact friction** — unclear how / when to reach out without awkwardness
5. **Tone mismatch risk** — too generic global, too narrowly local, or too indie vs corporate
6. **Secondary evaluator gap** — hiring/clients struggle to find signals without an ATS CV / pricing (lower priority)

---

# Pain Points Inventory

| ID | Pain | Who | Severity | Freq | R1 |
| -- | ---- | --- | -------- | ---- | --- |
| PP1 | No single URL that strings together story + proof + contact | P1–P4, Rezi | High | Often | Must ease |
| PP2 | Must assemble the narrative from repo/CV alone | P1, P2 | High | Often | Must ease |
| PP3 | Positioning is not immediately readable on the surface | P1, P2 | High | Often | Must ease |
| PP4 | Work outcomes are not visible without digging | P1, P2 | High | Often | Must ease (Work index + sheet) |
| PP5 | AI / stack claimed without honest context → distrust | P1, P2 | Med | Sometimes | Must ease (Honest AI edge) |
| PP6 | Do not know which contact channel feels “safe” / soft | P1, P2, P4 | High | Often | Must ease |
| PP7 | Default language feels wrong for the geo context | P1, P2, S6 | Med | Sometimes | Must ease (foundation) |
| PP8 | Collaboration / professionalism signal is weak for PO | P2 | Med | Sometimes | Must ease (About) |
| PP9 | Hiring struggles to see technical+product fit without a long CV | P3 | Med | Sometimes | Should (thin) |
| PP10 | No pricing → uncertainty for project clients | P4 | Low–Med | Sometimes | Out (ADR-008); soft path only |
| PP11 | Case detail missing in R1 → feeling of “not enough proof” | P1, P2 | Med | Sometimes | Later (R2 magnet) |

---

# Severity Summary

* **Must ease in R1:** PP1–PP4, PP6; PP5/PP7/PP8 as part of clarity
* **Temporarily accepted / R2:** PP11 (Work index/sheet first; cases later)
* **Consciously not solved on the site:** PP10 (pricing N/A by design)
* **Secondary thin:** PP9

---

# Pain Points by Persona

| Persona | Dominant pain |
| ------- | ------------- |
| **P1** | PP2, PP3, PP4, PP6 — needs speed & ownership signal |
| **P2** | PP2, PP3, PP8, PP6 — needs collaboration credibility |
| **P3** | PP9, PP3 — needs signals without rebrand to CV |
| **P4** | PP6, PP4, PP10 — contact + proof; pricing remains out |

---

# Expected Output

A pain inventory connected to the problem chain and R1 priority.

---

# Exit Criteria

* Core themes + pain IDs documented
* R1 / Later / Out mapping clear
* Aligned with ADR-004 without adding new product Musts

---

# Related Documents

* `README.md`
* `user-goals.md`
* `jobs-to-be-done.md`
* `user-journey.md`
* `../01-business/problem-statement.md`
* `../../project-os/decisions/ADR-004-problem-statement-dual-chain.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
