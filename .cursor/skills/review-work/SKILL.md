---
name: review-work
description: >-
  Walks Boss Rezi through UI just completed so he can accept it. Detects the
  scope from the session, the git diff against main, and the ticket, then
  shows one screen at a time in the browser and asks Approve, Change, Skip, or
  Explain. Docs, tickets, ADRs, and backend are out of scope. Use when Boss
  Rezi asks to review, accept, or walk through the UI. This is his acceptance
  step, not automated QA.
---

# Review Work

Boss Rezi's acceptance pass for **UI only**. It asks whether the screen matches what he wanted. Basis: ADR-050 and ADR-024.

Automated checks and the standards review inside `wave-work` are separate. They do not replace this walkthrough, and this walkthrough does not replace them.

## Scope

- **In scope:** a screen, component, layout, overlay, or flow a visitor sees. The evidence is the running page.
- **Out of scope:** docs, specs, ADRs, tickets, backend, data, config, and CI. Do not ask Boss Rezi to approve those here. List them in the final report as reviewed by him separately.
- `design-mockups/` is an archive. Do not open it as the thing to approve. Production code and the live screen are the evidence.

## Boundaries

- Read-only until step 5. No file edits, commits, or status changes while items are being reviewed.
- Do not invent evidence. Show the real screen. If the browser is unavailable, say so and give the URL. Do not treat a description as approval.
- Approval here is acceptance of the UI. It does not by itself mark a ticket done. Ticket updates follow `project-os-navigator`.
- Do not show secrets.

## Steps

1. **Detect the scope** from the session, from `git status` and `git diff main...HEAD` (plus unstaged `git diff` when the work is not committed), and from the ticket checkboxes. Keep UI changes only. If there are none, say so in one line and stop. If the sources disagree, ask once with `AskQuestion`, recommended scope first.
2. **Build the list.** One item per screen or flow. Order by risk: flows that submit or change data, then layout, then polish. Cap at about 7 items. Say the scope and the count in one line. For each item, one sentence on what Boss Rezi is judging. If that sentence cannot be written, the item is not ready.
3. **Show the screen before asking.** Open the route in the Cursor browser. Use the running dev server, or start `pnpm dev` when none is running. Go to the locale and state under review, check the console, and leave the browser on that screen. Say what to look at, such as the gap under the field or the selected chip outline. If both locales changed, show the locale Boss Rezi is using and name the sibling route.
4. **Ask one item at a time** with `AskQuestion`. The question stands alone: "Item N/M, title", the screen, and the one thing to judge. Options are **Approve**, **Change**, **Skip**, and **Explain simply**. Explain simply gives a shorter plain version, then asks the same question again. It is not an answer. On Change, record Boss Rezi's comment word for word. Do not argue with a rejection. If he cannot see the item, stop and fix what is on screen before asking again.
5. **Close.** Show one table: item, result, comment. Then ask whether to fix the collected changes now. If yes, do them in one pass under the UI rules, then show only the changed items again. Commit and push only when Boss Rezi asks.
6. **Report** with `.cursor/skills/work-report-simple/SKILL.md`: what was reviewed, what was approved, what changed, what was skipped and is therefore unverified, and the non-UI work left for Boss Rezi.

## Quality bar

- One decision per question, and the screen is open first.
- Skipped means unverified, not approved.
- Prefer fewer, sharper items.
