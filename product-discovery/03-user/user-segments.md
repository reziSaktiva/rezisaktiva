# User Segments

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document maps visitor segments for the personal portfolio website **rezisaktiva**.

---

# Overview

Segments are derived from the hybrid ICP in `target-market.md` (ADR-005): two equal primary segments (early founder / indie builder and product owner), plus secondary segments served without shifting the brand message.

These are **site visitor** segments, not application roles (auth/RBAC N/A — ADR-011).

---

# Purpose

* Separate who is optimized for vs who remains welcome
* Provide input for personas, goals, JTBD, and journey
* Preserve the dual north star: clarity for primary + quality inbound (including a thin secondary path)

---

# Scope

## In Scope

* Primary & secondary visitor segments
* Content & journey optimization priority
* Visit intent per segment

## Out of Scope

* Mass demographic / consumer social segmentation
* Enterprise procurement buyer persona
* System roles / permission matrix

---

# Segment Overview

| Segment | Priority | Core intent |
| ------- | -------- | ----------- |
| S1 Early founder / indie builder (SEA) | Primary (equal S2) | Find a builder who can take an idea → live |
| S2 Product owner in a company / startup (SEA) | Primary (equal S1) | Find a builder for an outcome-oriented initiative / feature |
| S3 Hiring manager / tech lead | Secondary | Assess fit for a role / team collaboration |
| S4 Prospective project client / freelance | Secondary | Assess fit for a limited engagement |
| S5 Peer / community builder | Secondary | Appreciate craft & recognition |
| S6 Founder / PO outside SEA | Secondary geo | Same evaluation; different language/geo context |

---

# Primary Segments

### S1 — Early founder / indie builder (SEA)

* **Who:** Has an idea or early product; small / solo team; limited resources
* **Domain context:** Digital product / tech (SaaS, app, platform, tools)
* **What they seek:** End-to-end execution proof; product thinking; natural contact
* **Visit success:** Understand who Rezi is quickly; confident enough for soft outreach
* **Bounce risk:** Feels like a tech stack list / developer CV without outcomes

### S2 — Product owner in a company / startup (SEA)

* **Who:** Already has a product or roadmap; needs a builder for a feature / rebuild / initiative
* **Domain context:** Same — digital product / tech
* **What they seek:** Shipping & collaboration credibility; product thinking signal; smooth communication
* **Visit success:** Sees relevant proof + way of working; feels safe reaching out
* **Bounce risk:** Too much “indie hustle” without professional collaboration signals

Both primary segments are **equal** — there is no “single main persona”. The message layer is the same: product builder → fullstack → AI edge; evaluation emphases may differ.

---

# Secondary Segments

| Segment | Role toward site | How served |
| ------- | ---------------- | ---------- |
| **S3 Hiring manager / tech lead** | Evaluate role / collaboration opportunity | Fullstack signal + way of working in About section + Workflow; message remains product builder |
| **S4 Prospective project client** | Evaluate hire per engagement | Soft Contact path; no pricing / hard sell (ADR-008) |
| **S5 Peer / community** | Long-term recognition | Craft & narrative clarity; not a CTA driver |
| **S6 Founder/PO outside SEA** | Same evaluation, different geo | Bilingual geo-aware; not the main content optimization focus |

---

# Segment Prioritization

| Priority | Segment | Implication |
| -------- | ------- | ----------- |
| Pri-0 — main optimization (primary) | S1, S2 | Copy, proof, and R1 journey are designed for them |
| Pri-1 — served thinly (secondary) | S3, S4 | Secondary journey: find signals & contact without rebrand |
| Pri-2 — passively supported | S5, S6 | Do not optimize as KPI; do not sacrifice completely |

**Not target optimization segments:** pure design-agency shoppers, pure AI specialists without product/engineering foundation, aggressive-priced vendor funnel, mass consumer social.

---

# Expected Output

A segment map aligned with ADR-005 and ready to translate into personas + journey.

---

# Exit Criteria

* Primary vs secondary is clear
* Equal dual primary documented
* Pri-0 / Pri-1 / Pri-2 priorities agreed

---

# Related Documents

* `README.md`
* `user-personas.md`
* `discovery-plan.md`
* `../01-business/target-market.md`
* `../../project-os/decisions/ADR-005-target-market-icp-sea-tech.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
