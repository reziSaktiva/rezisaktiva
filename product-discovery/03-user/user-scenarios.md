# User Scenarios

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document describes concrete usage scenarios for visitors to the **rezisaktiva** portfolio website.

---

# Overview

Scenarios focus on **R1 Clarity** (primary) plus a **thin secondary path** for hiring managers and prospective clients. They are not R2 case-detail scenarios as a Must.

---

# Purpose

* Test whether the Hybrid lean surfaces solve Must jobs
* Provide ready-to-use narratives for journey maps & UX flows
* Keep the secondary path thin

---

# Scope

## In Scope

* Scenario format + core scenarios P1–P4
* R1 happy path and secondary variations

## Out of Scope

* Formal usability test script
* CMS/auth scenarios
* Blog/social engine scenarios

---

# Scenario Format

Each scenario includes: ID, persona, trigger, concise steps, related job, success outcome, failure mode.

---

# Core Scenarios

### SC1 — Founder evaluates fit quickly (P1, primary)

* **Trigger:** Gets a rezisaktiva link from peer / bio / chat
* **Steps:** Open Home → read positioning → skim About (`#about`) if needed → Work index/sheet if work proof is needed → Contact (**Email primary**; LinkedIn/GitHub satellite if needed)
* **Jobs:** J1, J2, J3
* **Success:** Can say “Rezi = product builder…”; soft outreach sent or URL saved
* **Failure:** Home feels like a tech-stack list; no clear contact path

### SC2 — PO evaluates collaboration (P2, primary)

* **Trigger:** Looking for a builder for a roadmap initiative; opens site from referral/search
* **Steps:** Home clarity → About (`#about`, way of thinking) → Workflow and/or Work index → Contact (**Email primary**)
* **Jobs:** J1, J2, J4, J3
* **Success:** Enough professional + product thinking signal; soft outreach
* **Failure:** Tone is too empty-indie; About does not add trust

### SC3 — Switch language then continue evaluation (P1/P2)

* **Trigger:** Default language feels less fitting
* **Steps:** Use switcher → continue SC1/SC2
* **Jobs:** J7 (+ J1–J3)
* **Success:** Evaluation continues without language bounce
* **Failure:** Switcher missing / ID–EN copy has unequal meaning

### SC4 — Hiring manager checks signals (P3, thin secondary)

* **Trigger:** Screening a candidate / potential collaboration; opens portfolio URL
* **Steps:** Home positioning → About → follow satellite proof links (GitHub) if needed → decide continue/skip
* **Jobs:** J5, J1
* **Success:** Enough signal for next hiring step **without** the site becoming an ATS CV
* **Failure:** No technical signal at all; or brand shifts to “developer for hire” only

### SC5 — Prospective client soft outreach (P4, thin secondary)

* **Trigger:** Needs help on a limited project; quick evaluation
* **Steps:** Home / Work index → Contact (**Email primary**, without looking for pricing)
* **Jobs:** J3, J2
* **Success:** Outreach sent; expectation: discuss first, not checkout
* **Failure:** Looking for pricing page and frustrated — accepted as a non-goal (ADR-008); Contact copy must steer toward conversation

### SC6 — Share one URL to team (P1/P2, social)

* **Trigger:** Wants to align with cofounder/team before contact
* **Steps:** Open site → share URL → colleague runs a short SC1/SC2
* **Jobs:** SJ1, J1
* **Success:** Colleague understands positioning from the same URL
* **Failure:** Page is not share-worthy (weak meta/clarity)

### SC7 — (Later) Read a short case (not R1 Must)

* **Trigger:** After the framework is live; wants process detail
* **Jobs:** J6
* **Note:** Deferred to R2 magnet; in R1 presence = Work index + sheet (not Home teaser)

---

# Expected Output

A scenario set that closes Must R1 jobs and the thin secondary path.

---

# Exit Criteria

* Primary SC (SC1–SC3) + secondary (SC4–SC5) documented
* SC7 explicitly Later
* Failure modes lock UX anti-patterns

---

# Related Documents

* `README.md`
* `jobs-to-be-done.md`
* `user-journey.md`
* `user-personas.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-013-user-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
