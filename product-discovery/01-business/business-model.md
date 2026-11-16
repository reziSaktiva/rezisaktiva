# Business Model

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document explains how the **rezisaktiva** portfolio website creates and captures value — as a **brand asset**, not a SaaS business or service shop on the site.

---

# Overview

Site value model: **primary brand**; **job opportunity** and **client/project** paths are secondary with soft CTA (ADR-002).

The site does not sell products or service packages on the surface. Its value: one digital home that helps founders/POs (and secondary audiences) understand who Rezi is, see proof, and contact with confidence.

**Growth (locked):** Destination + lightweight magnet (option B / ADR-007) — official home + short case/process on the site; not a big blog and not social hustle as the MVP engine.

---

# Value Creation

The site creates value by:

1. **Consolidating identity** — product builder + fullstack + AI edge in one story (not LinkedIn/GitHub/CV fragments)
2. **Speeding evaluation** — founders/POs answer “fit or not?” faster (aligned with ADR-004)
3. **Building brand equity** — long-term recognition & recall (“Rezi = product builder…”)
4. **Opening a natural door** — soft path to collaboration, opportunity, or project without hard sell
5. **Lightweight magnet** — short case/process worth reading & sharing, strengthening narrative without becoming media

Value for Rezi: brand asset + qualified inbound.  
Value for visitors: fit clarity + proof + contact.

---

# Customer Segments

“Customer” here = people who get value from visiting / interacting with the site (not product buyers).

---

## Primary Segment

**Founder / product owner** in digital product/tech, focused on SEA — two equal archetypes (early founder/indie + company/startup PO). See `target-market.md` + ADR-005.

They “pay” with attention and (if fit) outreach — not with prices on the site.

---

## Secondary Segments

| Segment | Value they take | Value returned to Rezi |
| ------- | --------------- | ---------------------- |
| Hiring manager / tech lead | Role-fit signal (soft) | Job opportunity inbound |
| Potential project client | Work + way of working before hire | Client/project inbound |
| Peer / community | Craft appreciation; share | Recognition & brand spread |
| Founder/PO outside SEA | Same evaluation, via bilingual | Secondary opportunity |

---

# Revenue Model

**There is no direct revenue from the site** in the v0.1 direction.

| Path | Relationship to site | Notes |
| ---- | -------------------- | ----- |
| **Brand equity** | Primary | Intangible asset; long-term foundation |
| **Job opportunity** | Secondary, soft | Happens outside the site (chat, interview); site triggers evaluation |
| **Client / project** | Secondary, soft | Engagement negotiated outside the site; not checkout |
| **Product / store / SaaS on site** | Out of scope | See vision — not the site's core business |
| **Public pricing on site** | No | Details → `pricing-strategy.md` (likely N/A for the site) |

Real monetization (salary, project fee) is a **qualified side effect** of brand + soft inbound — not a sales funnel on the page.

---

# Pricing Philosophy

For the **site** itself: **no prices are displayed**.

- No service packages, public rate card, or “buy now”
- Value is emphasized through story, proof, and soft contact CTA
- If fee/salary discussion ever happens, it happens **after** human evaluation — outside the portfolio page

Engagement pricing philosophy (project/job), if relevant → `pricing-strategy.md` (may be N/A for this phase).

---

# Customer Value Proposition

For founders / POs looking for a builder:

| Promise | Proof on the site |
| ------- | ----------------- |
| Quickly understand who Rezi is | Clarity-first (ADR-006) |
| Trust he can bring ideas → live | Product builder story + case/process |
| Technical credibility | Fullstack foundation |
| Current relevance | AI as edge (honest, not pure specialist) |
| Easy next step | Soft contact CTA; bilingual SEA-aware |

Not a promise: “hire designer,” “AI agency,” or “fixed-price packages on the website.”

---

# Cost Considerations

Costs to maintain this model (not product COGS):

| Type | Example | Notes |
| ---- | ------- | ----- |
| **Time** | Writing case/process, updating work, maintaining narrative | Main cost; lightweight magnet needs update rhythm |
| **Hosting / domain / tool** | Domain, hosting, lightweight analytics | Must be proportional; do not over-engineer in discovery |
| **Opportunity cost** | Time not used for other projects | MVP: clarity + soft presence first; craft gradually |
| **Active distribution** | Social/community hustle | **Not** an MVP cost (not option C); can follow later |

Principle: invest enough to keep the brand home alive; avoid costs that only serve spectacle or heavy funnels.

---

# Growth Strategy

**Locked: Destination + lightweight magnet (B / ADR-007).**

| Layer | Meaning | MVP? |
| ----- | ------- | ---- |
| **Destination** | One official URL; people are directed here from CV, chat, GitHub, etc. | Yes — core |
| **Lightweight magnet** | Short case study / process on the site; worth reading & sharing | Yes — gradual after the clarity frame |
| **Active distribution** (C) | Systematic SEA social/community posting | Not yet — optional later |
| **Ship-in-public as engine** (D) | Build in public as the main growth loop | No — risks shifting founder/PO evaluation focus |

Implications:

* The site must be worthy as the “main link”
* Magnet content supports the narrative (ADR-004), not blog volume
* Growth is measured by brand recall + qualified inbound, not vanity traffic alone → `success-metrics.md`

---

# Business Principles

1. **Brand first** — do not sacrifice identity clarity for aggressive CTA
2. **Soft inbound** — job/client welcome; site is not a sales page
3. **One home** — GitHub/LinkedIn satellites; site is the main stage
4. **Clarity → presence → craft** — UX/content investment order (ADR-006)
5. **Magnet without media empire** — short case/process; not blog as business
6. **Honest claims** — AI edge on top of product/engineering foundation; no overclaiming
7. **SEA-aware, open door** — bilingual; focused ICP without closing off outside SEA

---

# Assumptions

* Founders/POs will click one URL if trusted as the source of truth
* Soft CTA is enough to trigger relevant outreach (without public pricing)
* Short case/process builds more trust than a tech-stack list
* Rezi has enough time to maintain destination + lightweight magnet sustainably
* Active distribution is not required yet to validate the early brand direction
* Direct site monetization is not needed for the “business model” to work

---

# Success Criteria

The business model is moving in the right direction if:

1. The site feels like a **brand asset**, not a service shop or CV online alone
2. Job/client inbound appears as a **qualified side effect**, without hard sell
3. Lightweight magnet (case/process) exists and supports founder/PO evaluation
4. Time/money costs stay proportional; MVP does not get stuck on craft or distribution
5. Content/CTA decisions can be traced to the principles in this document + ADR-002 / ADR-007

Quantitative metrics → `success-metrics.md`.

---

# Related Documents

* `README.md` — documentation for this phase
* `product-vision.md` — site vision and value model
* `problem-statement.md` — problem chain being answered
* `target-market.md` — segments & ICP
* `competitor-analysis.md` — references & differentiation
* `pricing-strategy.md` — pricing (may be N/A for the site)
* `success-metrics.md` — KPIs
* `../../project-os/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md` — material decision
* `../../project-os/decisions/ADR-002-portfolio-vision-positioning-audience-language.md` — primary brand
* `../../project-os/PROJECT_STATE.md` — project status
* `../../project-os/DECISIONS.md` — ADR index
