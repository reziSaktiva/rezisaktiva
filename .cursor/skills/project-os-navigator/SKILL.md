---
name: project-os-navigator
description: >-
  Project OS navigator for the rezisaktiva portfolio. Guides agents through the
  documentation cascade, governance rules, and behavior for discussion,
  brainstorming, new work, planning changes, and bugs. Use at the start of each
  project work session or whenever Project OS context is needed.
---

# Project OS Navigator — rezisaktiva

This skill defines how agents work in the **rezisaktiva** portfolio project.

## First Step: Load Context By Cascade

Do not read every `project-os/` document for every prompt. Escalate gradually.

**Level 1 — Status, progress, and general questions**

- Read only the **Snapshot** at the top of `project-os/PROJECT_STATE.md` unless more detail is needed.
- For task or plan questions, read `project-os/AVAILABLE_TICKETS.md`.
- For a specific ADR, open only the relevant `project-os/decisions/ADR-XXX-*.md` after checking the index in `DECISIONS.md`.

**Level 2 — Real task work** (new work, planning change, bug):

1. `project-os/PROJECT_STATE.md` — Snapshot first, then more detail only if needed.
2. `project-os/AVAILABLE_TICKETS.md` — find the parent or subtask ID (`T-XXX` / `T-XXX.N`).
3. `project-os/tickets/` — open only the one ticket file or section that contains the task, then follow its **Read first** field.
4. `project-os/PROJECT_RULES.md` — only when document governance is involved.
5. Relevant ADRs.
6. `project-os/PROJECT_OVERVIEW.md` — only if broader orientation is needed.

If the work has no task or subtask ID, ask Boss Rezi whether it needs to be added to the ticket queue.

If the discussion touches a specific product domain, read the relevant files under:

- `product-discovery/01-business/`
- `product-discovery/02-product/`
- `product-discovery/03-user/`
- `product-discovery/04-ux/`
- `product-discovery/05-architecture/`
- `product-discovery/06-engineering/`

`product-discovery/` is the product Source of Truth and a sibling of `project-os/`.

### Proactive Consistency Check

Whenever you read a **Static Reference** document (README, overview, rules, skills, or baseline), check whether it contains content that belongs only in a **Living Document** (`PROJECT_STATE.md`) — status markers, progress percentages, active phase, current focus, or current blockers.

If you find that drift, do not ignore it. Treat it as urgent wrong-document context: ask Boss Rezi before fixing it.

---

## Behavior By Interaction Type

### 1. Discussion / Q&A

1. Align answers with the established baseline.
2. If there is a conflict with an earlier decision, cite the relevant ADR.
3. Do not suggest work outside the active scope in `Active Conversation Mode` unless Boss Rezi asks for it.
4. Record important insights in `project-os/CONVERSATIONS.md` when they affect future work.

**Format CONVERSATIONS.md:**

```
## [YYYY-MM-DD] — [Short Topic]
**Phase:** [active phase]
**Summary:** [2-3 sentences]
**Key Decision/Insight:** [if any]
**Impact:** [documents that need updates?]
```

Use English for new entries.

---

### 2. Brainstorming

1. Explore freely, but label what is speculative versus baseline-aligned.
2. Evaluate ideas against the baseline.
3. Save worthwhile ideas in `project-os/BRAINSTORM.md`.

**Format BRAINSTORM.md:**

```
## [YYYY-MM-DD] — [Brainstorm Topic]
**Phase:** [active phase]
**Context:** [...]
**Ideas:**
- ...
**Evaluation:** [aligned / conflicting / needs ADR / needs validation]
**Next Action:** [discard / save / create ADR / validate]
```

Use English for new entries.

---

### 3. New Work / Document Creation

1. Check `PROJECT_STATE.md` for the active phase and mode.
2. Read the relevant baseline before writing.
3. Check task completeness, referenced docs, and production code when UI is involved.
4. After finishing, update:
   - the relevant file or section in `project-os/tickets/` — check off subtask IDs (`T-XXX.N`) and parent status
   - `project-os/AVAILABLE_TICKETS.md` — remove completed work or update the open queue
   - `PROJECT_STATE.md` — only if phase, milestone, known issues, blockers, or focus changed
   - never append `COMPLETE_TASK.md` unless Boss Rezi explicitly asks for legacy changelog work

---

### 4. Planning Change / Decision Change

1. Identify impacted documents.
2. Evaluate whether a new ADR is required.

**ADR required for:** target audience, problem statement, vision/scope, MVP, architecture, tech stack, repository strategy, or any material change to a previously accepted decision.

3. Create `project-os/decisions/ADR-NNN-slug.md` and add the index row near the top of `project-os/DECISIONS.md`.
4. Update impacted docs, Snapshot if relevant, and the ticket queue.

**Format ADR:**

```
## Decision ADR-[NNN]

### Title
...
### Status
Accepted
### Date
YYYY-MM-DD
### Decision
...
### Reason
- ...
### Alternatives Considered
- ...
```

---

### 5. Bug / Documentation Inconsistency

1. Identify the conflict and Source of Truth.
2. If one correct answer is clear from accepted docs, fix the drift.
3. Record the fix in the relevant ticket or `AVAILABLE_TICKETS.md` when status changes.
4. If the needed decision is not documented, ask Boss Rezi and create an ADR if the decision is material.

---

## Context Rules

- Do not suggest code implementation outside the active phase unless Boss Rezi explicitly asks.
- Do not change a baseline decision without an ADR when the change is material.
- Do not create documents outside the active scope.
- Do not silently fix urgent gaps, wrong documents, or unplanned decisions; ask first.
- Do not ask ritual questions when the task, docs, and production code are complete and aligned.
- Do not copy task detail into `PROJECT_STATE.md`.
- Do not reuse task or subtask IDs (`T-XXX` / `T-XXX.N`).
- Official project skills live only in `.cursor/skills/`.
- Full docs audits with `docs-consistency-audit` run only when Boss Rezi explicitly asks.

---

## File Map

```
rezisaktiva/
├── project-os/               -> Operating system
│   ├── PROJECT_STATE.md      -> Snapshot first
│   ├── AVAILABLE_TICKETS.md  -> open queue
│   ├── tickets/              -> open and completed ticket history
│   ├── specs/                -> multi-session programs
│   ├── context/              -> short pointer layer
│   ├── DECISIONS.md + decisions/
│   ├── COMPLETE_TASK.md      -> frozen historical archive; do not read unless asked
│   ├── CONVERSATIONS.md
│   └── BRAINSTORM.md
├── product-discovery/        -> product Source of Truth
├── design-mockups/           -> archived HTML mockups, not visual Source of Truth
├── app/                      -> Next.js App Router code
├── AGENTS.md
├── .cursor/skills/           -> process skills + Motion library
└── .cursor/rules/            -> active rules
```

---

## Additional Resources

- `project-os/PROJECT_RULES.md`
- `product-discovery/README.md`
- `AGENTS.md`
