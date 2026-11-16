# Success Metrics

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07): **dual north star** (brand recall + qualified inbound). Material changes after this require a new ADR.

This document defines how to measure success for the personal portfolio website **rezisaktiva** — as a brand asset with soft inbound, not a SaaS product or sales funnel.

---

# Overview

Success is measured by **two equal north stars** (dual):

| North star | Core question | Not |
| ---------- | ------------- | --- |
| **Brand recall / clarity** | After a short visit, can people summarize: “Rezi = product builder (fullstack + AI edge)”? | Vanity craft / award chase |
| **Qualified inbound** | Does relevant outreach appear (collaboration / opportunity / project) without hard sell? | DM volume / random leads |

Traffic, engagement, and analytics tooling are **health checks** — the site is alive and being used — not the definition of success.

Aligned with: Success Definition in the vision (`product-vision.md`), “not vanity traffic” growth (`business-model.md` / ADR-007), primary brand + soft CTA (ADR-002).

---

# Measurement Principles

1. **Dual, not singular** — brand and inbound are equally important; do not sacrifice one for the other.
2. **Quality > volume** — one fitting outreach is worth more than many irrelevant contacts.
3. **Direction first, hard numbers later** — before the site is live and has a baseline, focus on directional signals + leading indicators; strict numeric targets are added after real data exists.
4. **Lightweight analytics** — measure what is needed to learn; proportional to time/money cost (`business-model.md`).
5. **Privacy-aware** — do not force heavy tracking for a dashboard; tool details are decided in Engineering.
6. **Vanity ignored as KPI** — raw pageviews, bounce rate as a “score,” social followers, Awwwards — not north stars.
7. **Inbound measured outside the site funnel** — soft CTA triggers it; quality is assessed from chat/email context (not checkout conversion rate).
8. **Sensitive numbers** — personal details (outreach names, opportunity amount) do not go into public discovery docs; summarize here, put details in `private/` or outside the repo if needed (ADR-003).

---

# Dual North Star — Detail

## NS-1 — Brand recall / clarity

**Definition of success:** visitors (ideally founder/PO ICP) understand the positioning after a short visit.

| Signal | Measurement method (practical) | Notes |
| ------ | ------------------------------ | ----- |
| Spontaneous recall | Feedback from friends/peers/ICP: “What is Rezi?” after seeing the site | Qualitative; 3–5 relevant people is enough in the early phase |
| Clarity self-check | Rezi + reviewer: do Home (who + About section) + Workflow (way of working) + Work index (work) answer the next step in ~1 visit | Short checklist, not heavy survey |
| Message consistency | Site message aligns with the way Rezi speaks outside (chat, interview) | Aligned with the vision Success Definition |

**Leading (before much traffic):** clarity structure is alive (who, proof, soft CTA); bilingual geo-aware language follows ADR-002 (UX/Engineering details).

## NS-2 — Qualified inbound

**Definition of success:** relevant contact appears with collaboration, job opportunity, or client/project intent — without aggressive CTA.

| Signal | Measurement method (practical) | Notes |
| ------ | ------------------------------ | ----- |
| Relevant outreach | Count contacts clearly related to builder / role / project evaluation | Not empty “hi” or spam |
| Source | Where they came from (site URL, CV→site, GitHub→site, shared magnet) | Proves the site as destination |
| Soft path | Contact happens through the provided path (without hard sell / public pricing) | Aligned with ADR-008 |

**Quality (lightweight rubric):** relevant to ICP or valid secondary audience; has context (project/role); not volume for volume's sake.

---

# Phase 1 — Validation

**Goal:** prove the brand + soft inbound direction before pursuing growth.

| Metric / signal | Directional target | Proof |
| --------------- | ------------------ | ----- |
| Clarity frame | Homepage (+ core) answers who / proof / contact | Internal review + 1–2 ICP/peer |
| Mini recall | ≥ most short reviewers can summarize positioning | Short feedback notes |
| Soft CTA alive | There is a clear, non-aggressive contact path | UX/content checklist |
| Inbound (optional early) | 0 required; if any, record quality | Personal log (can be `private/`) |
| Health | Site online, URL worthy as “main link” | Smoke check |

**Validation Exit:** the dual north star feels plausible in practice (clarity proven; inbound path ready) — outreach volume is not yet required.

---

# Phase 2 — Traction

**Goal:** dual star starts to “move” after the destination + early lightweight magnet exist.

| Metric / signal | Directional target | Proof |
| --------------- | ------------------ | ----- |
| Brand recall | Repeated feedback from ICP/secondary audiences consistent with positioning | Notes / periodic retrospective |
| Qualified inbound | Relevant outreach appears (low frequency is OK) | Quality log, not vanity count |
| Lightweight magnet | ≥1 short case/process live that supports founder/PO evaluation | Content on site |
| Health | Traffic/engagement stable enough to learn (not a vanity target) | Lightweight analytics |

**Traction Exit:** there is proof that the site is used as an evaluation reference **and** at least begins to trigger relevant inbound (even if rare).

---

# Phase 3 — Growth

**Goal:** strengthen the long-term brand asset without changing the model (not media empire / social hustle as primary engine).

| Metric / signal | Directional target | Proof |
| --------------- | ------------------ | ----- |
| Brand equity | Recall “Rezi = product builder…” becomes more natural in relevant contexts | Qualitative observation + inbound pattern |
| Sustainable inbound | Rhythm of qualified outreach that does not depend on hard sell | Periodic log |
| Magnet | Proportional update rhythm for case/process (not blog volume) | Lightweight calendar / content changelog |
| Active distribution (optional) | Only if decided later (not MVP growth requirement) | New ADR if it becomes strategy |

Strict numeric targets (for example “N inquiries / month”) are **added here after** Traction data exists — do not fill speculatively in Baseline v1.0.

---

# Product Health Metrics

Supporting indicators — **not** north stars:

| Area | Example | Usage |
| ---- | ------- | ----- |
| Availability | Uptime, correct URL, reasonable performance | Ensure destination can be trusted |
| Lightweight usage | Visits, key pages read | Learn behavior; beware vanity |
| Content | Case/process updated vs stale | Keep lightweight magnet alive |
| Language | Switcher / geo-default works | Aligned with bilingual ADR-002 |
| CTA path | Contact clicks/reach (if measured) | Soft-path diagnostic, not success score |

Concrete analytics tooling → Engineering phase; principle: lightweight & privacy-aware.

---

# Success Definition

The portfolio is **moving in the right direction** if:

1. **NS-1** — after a short visit, relevant people can summarize the product builder positioning (fullstack + AI edge)
2. **NS-2** — qualified soft inbound appears or is clearly possible without hard sell / public pricing
3. Health metrics show the site is worthy as a destination, without becoming the main KPI
4. Content/CTA decisions remain traceable to the vision, business model, and related ADRs

The portfolio is **not** considered successful just because traffic is high, craft is spectacular, or many contacts are irrelevant.

---

# Current Status

| Item | Status |
| ---- | ------ |
| North star | **Dual** — brand recall + qualified inbound (Baseline v1.0 / ADR-009) |
| Hard numbers / quota | Not yet — wait for live + Traction baseline |
| Analytics tool | Not selected yet (Engineering) |
| Business Baseline v1.0 | **Established** (2026-08-07) — ADR-009 |
| Measurement expectation | Pre-Validation until the site is live — not project status; see `PROJECT_STATE.md` for active phase |

---

# Future Considerations

* Add numeric targets after Traction data exists
* Choose analytics (privacy-first) in Engineering
* Re-evaluate the dual star if the site's value model changes (requires ADR)
* Active distribution / ship-in-public as growth engine — only with explicit decision (currently not MVP)
* Internal dashboard in `private/` if inbound logs are too sensitive for public repo

---

# Decision Rules

* Changing the **north star** or measurement philosophy → new ADR + revision of this document.
* Adding a vanity metric as a core KPI → rejected unless an ADR changes the business model.
* Sensitive numbers (opportunity details) → not in public discovery.
* Do not lock speculative numeric targets before the site has a real baseline.
* Phase progress status is recorded in `PROJECT_STATE.md`, not in the phase README.

---

# Related Documents

* `README.md` — documentation for this phase
* `product-vision.md` — qualitative Success Definition
* `problem-statement.md` — criteria for the problem being answered
* `target-market.md` — ICP & out-of-scope KPI audiences
* `competitor-analysis.md` — clarity → presence → craft (not award KPI)
* `business-model.md` — destination + magnet growth; anti-vanity
* `pricing-strategy.md` — N/A; no pricing funnel
* `../../project-os/decisions/ADR-002-portfolio-vision-positioning-audience-language.md`
* `../../project-os/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
* `../../project-os/decisions/ADR-009-business-baseline-v1-dual-north-star.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
