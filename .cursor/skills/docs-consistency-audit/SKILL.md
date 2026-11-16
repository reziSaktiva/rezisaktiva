---
name: docs-consistency-audit
description: >-
  Full documentation audit for conflicts, drift, or inconsistencies across
  product-discovery, project-os, AGENTS.md, skills, and rules. Use only when Boss
  Rezi explicitly asks for a docs audit, cross-check, or consistency check. Scope
  comes from the requested area or topic.
---

# Docs Consistency Audit

This skill is for deliberate, thorough audits. It is not a routine end-of-task checklist. It catches drift that ordinary "update docs after work" habits can miss: ADR amendments not reflected in baselines, status counts that desync across files, or documents that still describe replaced patterns such as mockups as a visual contract after ADR-024.

**Work mode: report first, then ask.** Do not fix anything silently during this audit, including objectively obvious issues. Report findings first and make edits only after Boss Rezi confirms.

---

## Step 0 — Resolve Scope From The Request

Interpret Boss Rezi's request as one of these scopes:

| Argumen | Artinya |
| -------- | ------- |
| Argument | Meaning |
| -------- | ------- |
| `project-os` | `PROJECT_STATE.md`, `AVAILABLE_TICKETS.md`, `tickets/*.md`, `specs/*.md`, `context/*.md`, `DECISIONS.md`, `decisions/ADR-*.md`, and static Project OS references (`PROJECT_RULES.md`, `PROJECT_OVERVIEW.md`, `ARCHITECTURE_OVERVIEW.md`, `DEVELOPER_WORKFLOW.md`, `README.md`) |
| `product-discovery` | All `product-discovery/**/*.md` |
| `agent` | `AGENTS.md`, `.cursor/skills/*/SKILL.md`, `.cursor/rules/*.mdc` |
| Combination (`product-discovery+agent`, etc.) | Union of the named areas |
| `all` | Union of all areas above |
| Free-form topic or feature name (`Quick Info`, `Contact modal`, `project sheet`) | Topic-based scope; see Step 0b |
| Empty / no argument | Do not guess; ask Boss Rezi which area or topic to audit |

Always exclude `project-os/COMPLETE_TASK.md` unless Boss Rezi explicitly names it. It is a frozen historical archive under ADR-049.

Do not treat `design-mockups/` as a visual Source of Truth. Include it only if Boss Rezi explicitly names it, and audit it as an archive: check whether other docs still incorrectly treat it as a design contract.

### Step 0b — Topic-Based Scope

If the request names a topic or feature instead of a standard area:

1. Search the topic keyword and clear synonyms across:
   - `project-os/AVAILABLE_TICKETS.md` + `project-os/tickets/`
   - `project-os/specs/` and `project-os/context/`
   - `project-os/DECISIONS.md` + `project-os/decisions/`
   - `project-os/PROJECT_STATE.md`
   - `product-discovery/`
   - `AGENTS.md`, `.cursor/skills/`, `.cursor/rules/`
2. Collect matching files as the proposed scope.
3. If the results are too broad or suspiciously sparse, confirm the scope with Boss Rezi before continuing.

---

## Step 1 — Read Every Document In Scope

Unlike the token-saving cascade in `project-os-navigator`, this audit requires reading each resolved file in full. The purpose is broad consistency checking, not quick lookup.

For large scopes such as `all` or full `product-discovery`, use careful batching. If subagents are available and Boss Rezi or the environment permits them, they may explore sub-areas, but the final classification and judgment stay with the main agent.

---

## Step 2 — Check Categories

Check documents in scope for:

1. **Status/progress drift** — the same task or subtask has conflicting status in `AVAILABLE_TICKETS.md`, `tickets/*.md`, or `PROJECT_STATE.md`.
2. **Count/index drift** — status counts, open/closed breakdowns, or subtask counts do not match the actual ticket files.
3. **ADR amendment not reflected** — a newer ADR amends an older decision but affected baselines, tickets, skills, or rules still describe the old version.
4. **Terminology drift** — different terms for the same concept: Boss Rezi, P1–P4, S1–S6, M1–M14, chrome, Quick Info, project sheet, locale ID/EN, or R1 routes.
5. **Dead or stale references** — links or mentions to deleted, moved, or replaced files, sections, components, or patterns.
6. **Source of Truth violation** — static references contain living status such as active phase, current focus, blockers, known issues, status icons, or progress percentages.
7. **Unclear contradiction** — two documents conflict and no accepted Source of Truth clearly wins.

---

## Step 3 — Classify Findings

Every finding is one of two classes:

### A. Mechanical / Objective

There is one clearly correct answer based on established Source of Truth, such as `AGENTS.md` or an accepted ADR.

Report it with a concrete proposed fix, then wait for confirmation before editing.

### B. Substantive / Ambiguous

Two documents conflict and there is no clear accepted Source of Truth, such as an old baseline versus an undocumented verbal direction, or two ADRs that overlap without explicit amendment.

Do not assume which side wins. Present both sides and ask Boss Rezi. This class can require a new ADR.

---

## Step 4 — Report Format

Present findings grouped by category. Each finding should include:

- **Files involved** — relative paths
- **Conflict or drift** — short quote or summary
- **Class** — A. Mechanical / B. Ambiguous
- **Proposal** — concrete fix for class A; decision question for class B

If there are no findings, say that clearly. Do not invent findings.

---

## Step 5 — Follow-Up After Reporting

1. For class A findings, ask whether to fix the mechanical findings now, either individually or as a batch.
2. For class B findings, ask first and wait for a decision. If the decision changes a baseline or architecture, follow the planning-change ADR flow in `project-os-navigator`.
3. Record executed fixes in the relevant ticket or `AVAILABLE_TICKETS.md` when status changes.
4. If a fix touches status or counts in `AVAILABLE_TICKETS.md` or `PROJECT_STATE.md`, update all related places together.

---

## Critical Rules

- Do not trigger this skill automatically during normal work.
- Do not read `project-os/COMPLETE_TASK.md` unless Boss Rezi explicitly names it.
- Do not fix anything before reporting and getting confirmation.
- For class B findings, do not guess which side is correct just because one document is newer.
- If a topic-based scope looks incomplete or excessive, confirm the file list before the full audit.
- Align with `ask-before-assuming`: ask Boss Rezi only for real gaps, wrong documents, or unplanned decisions.
