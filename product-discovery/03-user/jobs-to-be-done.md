# Jobs To Be Done

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document defines the jobs-to-be-done for visitors to the personal portfolio website **rezisaktiva**.

---

# Overview

JTBD here are the jobs someone wants to “finish” when evaluating Rezi through the site — functional, emotional, and social — with priority for the R1 Hybrid lean surfaces.

---

# Purpose

* State jobs in a format that can be tested in scenarios/journey
* Separate Must R1 jobs from jobs waiting for the R2 magnet
* Direct UX toward job progress, not decoration

---

# Scope

## In Scope

* JTBD format + core / emotional / social jobs
* Job priority for MVP (R1)

## Out of Scope

* The brand owner’s job as CMS operator (N/A R1)
* Growth/social posting job as the main engine
* “Compare vendor pricing” job

---

# JTBD Format

**When** [situation], **I want to** [motivation], **so I can** [outcome].

Each job has: ID, main persona, R1 priority (Must / Should / Later).

---

# Core Jobs

| ID | Job statement | Persona | R1 |
| -- | ------------- | ------- | --- |
| J1 | When I discover Rezi (referral/search/link), I want to understand who he is within minutes, so I can decide whether he is relevant to me | P1, P2 | Must |
| J2 | When I evaluate a builder for an idea/initiative, I want to see proof of shipping and way of thinking, so I can reduce outreach risk | P1, P2 | Must |
| J3 | When I am interested enough, I want a clear soft contact path, so I can start a conversation without awkward sales pressure | P1, P2, P4 | Must |
| J4 | When I need deeper context than Home, I want to read a coherent About narrative, so I can trust the product builder framing | P1, P2 | Must |
| J5 | When I am hiring / evaluating collaboration, I want to find fullstack + product signals without an ATS CV, so I can continue or skip the process | P3 | Should (thin) |
| J6 | When I want to see process/case detail, I want to read deeper work stories, so I can trust the craft & ownership | P1, P2 | Later (R2) |
| J7 | When the default language feels unfamiliar, I want to switch language easily, so I can continue evaluating comfortably | P1–P4, S6 | Must (foundation) |

---

# Emotional Jobs

| ID | Job | Notes |
| -- | --- | ----- |
| E1 | Feel like I am not “bothering” someone when reaching out | Soft CTA, optional availability line |
| E2 | Feel the evaluation is fair — not AI hype / empty stack | Honest AI edge; proportional proof |
| E3 | Feel Rezi is “for people like me” (SEA founder/PO) | Local relevance without closing doors |
| E4 | Reduce fear of a bad hire / wrong collaboration invite | Work index/sheet + About section |

---

# Social Jobs

| ID | Job | Notes |
| -- | --- | ----- |
| SJ1 | Can point one URL to a cofounder / team (“this is the person”) | Destination hygiene |
| SJ2 | Look professional when shared into a hiring chain | Clarity > gimmick |
| SJ3 | Peer recognition (optional) | Not an R1 CTA driver |

---

# Job Priority for MVP

| Priority | Jobs | Main surface |
| -------- | ---- | ------------ |
| **Must R1** | J1, J2, J3, J4, J7 + supporting E1–E4 | Home, About, Workflow, Work index, Contact modal, i18n |
| **Should thin** | J5 | About + satellite links |
| **Later R2** | J6 | Short case/process (magnet) |
| **Out** | Price comparison, app login, social feed as core job | — |

---

# Expected Output

A JTBD set aligned with the dual north star and Product Baseline.

---

# Exit Criteria

* Core/emotional/social jobs documented
* Must vs Later clear against ADR-010
* Ready to use in scenarios & journey

---

# Related Documents

* `README.md`
* `user-goals.md`
* `pain-points.md`
* `user-scenarios.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
