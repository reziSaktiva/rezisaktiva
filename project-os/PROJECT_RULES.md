# PROJECT RULES

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-09-03 |

---

# Purpose

This document contains the rules, principles, and standards to follow during planning and development of the **rezisaktiva** project.

---

# Scope

This document governs:

* Core development principles.
* Document classification and governance.
* AI assistant collaboration rules.
* Decision recording rules.
* The overall project workflow.

This document does **not** govern:

* Status, progress, or the active phase — see `PROJECT_STATE.md`.
* Detailed technical or business decisions — see `DECISIONS.md`.
* Detailed scope for each discovery phase — see the `README.md` in each `../product-discovery/` folder.

---

# Core Principles

* Documentation First
* Business First
* User-Centered Design
* AI Friendly Development
* Simplicity over Premature Optimization
* Maintainability over Complexity

Specific architecture rules are locked in `../product-discovery/05-architecture/` plus ADR-015 (Architecture Baseline v1.0) and ADR-016 (Engineering Baseline v1.0, single-app). Material changes require a new ADR.

---

# Documentation Governance

## Documentation Rules

* Every important decision must be documented.
* Documentation is always the main reference before implementation.
* Documentation must be updated when requirements, architecture, or workflow change.
* Avoid duplicate or conflicting documentation.

## Document Type Classification

**Static Reference**

Documents for structure, purpose, and rules. They must not contain status, progress percentages, or active phase details that change over time.

Only change them when there is a **structural** change, and record the change in the relevant ticket / `AVAILABLE_TICKETS.md`.

Includes:

* Semua `README.md`
* `PROJECT_OVERVIEW.md`
* `ARCHITECTURE_OVERVIEW.md`
* `PROJECT_RULES.md`
* `DEVELOPER_WORKFLOW.md`
* `.cursor/skills/*/SKILL.md`
* `.cursor/rules/*.mdc`
* Baseline documents in `product-discovery/` (after they are established)

**Living Document**

Updated during each relevant work session.

* `PROJECT_STATE.md`
* `AVAILABLE_TICKETS.md` + `tickets/`

Backlog ID convention (details in `AVAILABLE_TICKETS.md`):

* Parent: `T-XXX` (global, never reused)
* Subtask: `T-XXX.N` (example: `T-001.1`; never reused after use)
* Work references (Focus, Snapshot, ticket, Impact in CONVERSATIONS) mention the subtask code when they touch a checklist

**Append-Only / Frozen Archive**

Only add new entries at the top; do not rewrite history — **unless Boss Rezi explicitly instructs it** (example: retrofitting subtask codes into history).

* `DECISIONS.md` (indeks) + `decisions/ADR-*.md`
* `CONVERSATIONS.md`
* `BRAINSTORM.md`

`COMPLETE_TASK.md` is a frozen historical archive (ADR-049). AI **must not** read the full file, translate it, or add entries unless Boss Rezi explicitly instructs legacy changelog work.

---

# AI Collaboration Rules

* Follow `.cursor/skills/project-os-navigator/SKILL.md` at the start of any session that needs project context.
* Check task completeness and reference documents first (for UI: existing production code, not HTML mockups). **Ask Boss Rezi only when urgent** (gap, wrong document, or something outside the plan) — not as a ritual, and not for uncertainty that can be resolved by reading. Do not assume, invent, or quietly continue on unplanned work. `.cursor/rules/ask-before-assuming.mdc` + `.cursor/skills/proactive-clarification/SKILL.md` (how to ask when asking is required).
* After work is complete, report with `.cursor/skills/work-report-simple/SKILL.md`.
* Run a broad documentation audit **only when explicitly requested**: `.cursor/skills/docs-consistency-audit/SKILL.md` (report-only; do not trigger automatically).
* Code implementation follows the `Active Conversation Mode` in `PROJECT_STATE.md` (for example: R1 code is allowed when Active Mode = Development), unless Boss Rezi explicitly asks for work outside that mode.
* Do not silently fix documentation inconsistencies — mention them to the user first.
* **UI/UX tasks must follow `.cursor/rules/ui-ux-mockup-check.mdc`** — the visual reference is production code + Boss Rezi's direction (**ADR-024**). `design-mockups/` is an archive, not a contract. Verify against implementation + locked direction, not against HTML mockups. Designs that conflict with the UX baseline / two unlocked valid interpretations = urgent, ask Boss Rezi first.
* **New work in `app/` must follow `.cursor/rules/code-discipline.mdc`** — spacing (`gap`/`padding`), styling layers (shadcn + Tailwind v4), Server vs Client, SSG. Source of Truth: `../product-discovery/06-engineering/code-discipline.md`. UI convention: `.cursor/rules/shadcn.mdc`.

---

# Decision Recording (ADR)

Material decisions are recorded as:

1. A new `decisions/ADR-NNN-slug.md` file
2. One index row at the top of the `DECISIONS.md` table

Format ADR: Title / Status / Date / Decision / Reason / Alternatives Considered.

---

# Workflow Overview

```text
Product Discovery (01→06)
        ↓
Repository & Bootstrap
        ↓
Development
```

---

# Related Documents

* `README.md`
* `PROJECT_STATE.md`
* `DECISIONS.md`
* `../AGENTS.md`
