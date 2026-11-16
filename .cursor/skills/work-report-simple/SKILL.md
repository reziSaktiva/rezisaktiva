---
name: work-report-simple
description: >-
  Automatically explain completed work in plain, easy-to-understand language —
  like a subordinate briefing their boss. Use this skill after completing any
  task: creating documents, editing files, making changes, or finishing a work
  session. Produces a friendly summary covering what was done, why it matters,
  key outcomes, and next steps. Triggers when work is completed and a clear
  summary is needed.
---

# Work Report — Plain Language

After finishing any task, give Boss Rezi a short, easy-to-understand report. Keep it direct, useful, and proportional to the work.

---

## When To Use

Use automatically after:

- Creating or editing documents or files
- Completing a task
- Changing code, configuration, or project structure
- Ending a work session

---

## Report Format

### 1. Done By (required, first line)

For this project, use **"Main agent"** unless Boss Rezi explicitly asks for another label.

### 2. What Was Done

Use 2–4 simple sentences. Mention the outcome, not every mechanical step.

### 3. Main Points

Use short bullets only when there are multiple distinct points. The report should make sense without opening files.

### 4. Why It Matters

One or two sentences about the practical impact.

### 5. Next Work

Briefly name the next relevant task or say there is no immediate follow-up if that is true.

---

## Style Rules

- Reply in the language Boss Rezi is currently using.
- Avoid unexplained jargon.
- Keep the tone warm, professional, and direct.
- Keep length proportional to the work.
- Do not say "I used skill X."
- The "Done by" line is required when using the full report format, but keep the final chat concise if Boss Rezi requested a short report.

---

## Example Output

**Done by:** Main agent

**What was done:**
I prepared the portfolio project operating structure so future work has a clear place to live.

**Main points:**

- `product-discovery/` holds product baselines
- `project-os/` holds status, tickets, specs, and ADRs
- Cursor project skills live in `.cursor/skills/`

**Why it matters:**
Future decisions and implementation work can start from the right source instead of scattered notes.

**Next:**
Continue with the next open ticket in `project-os/AVAILABLE_TICKETS.md`.
