# Product Discovery

Product Discovery is the phase for understanding **what will be built, why it should be built, and how the solution creates value** in the context of the personal portfolio website **rezisaktiva**.

This phase has **no code implementation**. The entire focus is research, planning, documentation, and decision-making so the development process can move faster and minimize major changes later.

---

# Objectives

The main objectives of Product Discovery are:

* Understand the portfolio goals and positioning.
* Define the audience to reach.
* Define the website scope (pages, content, interactions).
* Set MVP priorities.
* Design the user experience (UX).
* Define the appropriate architecture when needed.
* Document technical decisions before implementation.
* Provide documentation as the implementation reference.

---

# Workflow

```text
Business
    ↓
Product
    ↓
User
    ↓
UX
    ↓
Architecture
    ↓
Engineering
```

Each stage must be completed before moving to the next one.

---

# Folder Structure

```text
product-discovery/
├── README.md
├── 01-business/
├── 02-product/
├── 03-user/
├── 04-ux/
├── 05-architecture/
└── 06-engineering/
```

---

# Discovery Stages

## 01 — Business

Focuses on the goals, positioning, and direction of the portfolio as a “product”.

## 02 — Product

Focuses on defining the website scope, MVP, and feature/page priorities.

## 03 — User

Focuses on who visits/uses the portfolio.

## 04 — UX

Focuses on information architecture, navigation, and screen patterns.

## 05 — Architecture

Focuses on the conceptual system architecture, according to the chosen complexity.

## 06 — Engineering

Focuses on technical decisions before implementation begins.

---

# Documentation Rules

* Every important decision is recorded in `../project-os/PROJECT_STATE.md` and `../project-os/DECISIONS.md` as needed.
* Avoid code implementation before the main documentation is complete.
* All changes go through clear discussion and decisions.
* Documentation becomes the Source of Truth before implementation begins.
* Phase READMEs **do not** contain ✅/⏳/progress % status — that belongs in `PROJECT_STATE.md`.

---

# Exit Criteria

The Product Discovery phase is considered complete when:

* Business Baseline v1.0 is established (see ADR-009).
* Product Baseline v1.0 is established (see ADR-012).
* User Baseline v1.0 is established (see ADR-013).
* UX Baseline v1.0 is established (see ADR-014).
* Architecture Baseline v1.0 is established (see ADR-015).
* Engineering Planning Baseline v1.0 is established (see ADR-016).
* Important decisions are recorded in `DECISIONS.md`.
* Documentation is ready to serve as the implementation reference.

Active phase completion status is in `PROJECT_STATE.md` (not in this README).

---

# Next Phase

After the Exit Criteria are met, the project’s historical sequence is: **Repository & Bootstrap**, then **Development**. Active phase status is in `PROJECT_STATE.md` (not in this README).

---

# Related Documents

* `../project-os/README.md`
* `../project-os/PROJECT_OVERVIEW.md`
* `../project-os/PROJECT_RULES.md`
* `../project-os/PROJECT_STATE.md`
* `../project-os/DECISIONS.md`
