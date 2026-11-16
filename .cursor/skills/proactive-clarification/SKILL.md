---
name: proactive-clarification
description: >-
  How to ask Boss Rezi when an urgent condition exists: a gap, wrong document,
  or unplanned decision. Not for ritual questions before every task. Use with
  the ask-before-assuming rule.
---

# Proactive Clarification

First check the task, production code when UI is involved, and referenced docs. If they are complete and aligned with the plan: **work**, do not ask.

Ask only when the situation is **urgent** under `.cursor/rules/ask-before-assuming.mdc`. This skill defines **how** to ask; it does not make questions a default opening step.

---

## Core Principle

**Check first. Ask only when urgent.** This applies to every task type, but asking is not the default first move.

Urgent:

- **Gap** — something is incomplete, inconsistent, or missing between the task, code, docs, or decisions.
- **Wrong document** — a typo or stale document would steer the work toward the wrong plan.
- **Unplanned** — something required to continue is not covered by the task, ADR, or baseline, including two valid interpretations that have not been locked.

Not urgent; do not ask:

- A decision is already in an ADR, `DECISIONS.md`, the task's **Read first** field, or production code.
- Execution detail does not change the plan.
- Uncertainty can be resolved by reading docs, code, or CLI output.

Do not assume your way through an urgent condition. Do not invent missing answers. Do not silently choose between unplanned options.

---

## When To Ask

Only ask for the urgent conditions above. If a decision fork is already locked in the baseline, use the baseline and do not re-ask.

Examples that do **not** need a question because the plan already exists: Next.js framework choice, iterating from the existing Home page in `app/`, locked ID/EN locale behavior.

Examples that **do** require a question: a task references a missing code file, design direction conflicts with an accepted ADR, or requested scope needs a new page/behavior that is not in any task or baseline.

---

## How To Ask

### 1. Identify The Urgent Issue

- What is missing, wrong, or outside the plan?
- How does it affect the output?
- What are the best relevant options?

### 2. Present The Best Options

Offer at most 4–5 curated options, each with brief context. Use `AskQuestion` when available.

**Format:**

```
I am stopping because this is outside the plan / there is a gap:

**[What is missing or conflicting]**

Options:
- **[Option A]** — [why it is attractive, when it fits]
- **[Option B]** — [why it is attractive, when it fits]
- **[Option C]** — [why it is attractive, when it fits]
```

### 3. One Topic Per Question

Do not stack unrelated questions. Ask the most blocking question first.

---

## Option Quality

- **Relevant** — fits the project phase and portfolio scale.
- **Best in class** — proven and actively used.
- **Curated** — excludes outdated or irrelevant choices.
- **Contextual** — includes one useful sentence about why each option matters.

---

## After Boss Rezi Answers

1. Confirm the selected direction in one sentence.
2. If the decision is material, record an ADR according to `PROJECT_RULES.md`; do not ask the ritual question "do we need an ADR?"
3. Continue execution.

---

## Critical Rules

- Do not skip the question when there is a real gap, wrong document, or unplanned decision.
- Do not ask ritual or trivial questions that do not change the plan.
- Do not list outdated or irrelevant options.
- If Boss Rezi says "up to you," choose the best option with a reason, confirm it, then proceed.
