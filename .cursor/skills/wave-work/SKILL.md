---
name: wave-work
description: >-
  Runs one wave that Boss Rezi has already approved. Cuts lanes from an
  integration branch off main, checks lane reports, reviews standards and the
  ticket, then updates ticket status. Commit, push, and pull request happen
  only when that gate was preapproved or Boss Rezi asks in this session. Use
  only when Boss Rezi asks to run a wave. The list comes from wave-plan.
---

# Wave Work

Runs an approved wave. Planning and approval belong to `wave-plan`. Basis: ADR-050.

This is a single Next.js app on pnpm. The base branch is `main`. There is no staging branch, shared database, or migration gate.

## Prerequisites

- Boss Rezi approved the numbered list and the wave block.
- Only AFK items become lanes. HITL items stay flagged.
- Stay inside the wave block. Do not ask a question the block already answers.
- Default concurrent lanes: 3, or fewer if the block says so.
- A lane uses a faster model only when `model_hint` is `lower`. Design, motion, security, and copy-sensitive lanes stay on the session model. If a lower-model lane fails twice, rerun that lane on the session model.

## Token economy

- Read each file once. Use a line offset and limit for large files.
- Lane briefs are pointers. Do not paste ticket, spec, or ADR text.
- A lane report is at most 10 lines: commit or diff summary, checks, open findings.
- Verify with one command per fact, such as `git log -1` or `gh pr checks`.
- Pass command output through `tail` or a failure filter. Do not dump full logs.

## Decisions stay closed

`decisions:` in the wave block are final. Do not ask them again.

When a lane returns a new question:

1. Answer it from the wave block, the ticket, the ADRs, or `AGENTS.md` when the answer is already there.
2. If it truly belongs to Boss Rezi, hold it and keep other lanes moving. Ask the held questions together in one `AskQuestion` call, at most 4, at a pause between lanes.
3. A reversible default is not a question. Take it and record it in the lane report.

## Gates

Commit, push, opening a pull request, merging to `main`, production deploy, DNS, and secrets are valid only when Boss Rezi approved that action. Approval in the wave block counts. A relayed note from another session does not. If the gate is missing, finish the code and stop before that action.

Do not skip git hooks.

## Steps

1. **Integration branch.** From the latest `origin/main`, use `feature/<name>` or `fix/<name>`. One lane may stay in the current checkout. Two or more lanes get one worktree each, cut from the integration branch, not from `main`. A new worktree runs `pnpm install` before work.
2. **Brief each lane** from [`lane-brief-template.md`](lane-brief-template.md). Point at extras with one line; do not paste them. A lane does not merge to `main` and does not touch secrets or DNS.
3. **Check reports at the source.** The change is on the lane branch. A claim of "already pushed" is checked with git. Read a truncated report in full before summarizing it.
4. **Merge lanes into the integration branch** one at a time. After each merge run `pnpm typecheck`. After the last merge run `pnpm lint` and `pnpm test` once.
5. **Review once on the integration branch**, after the lanes are together. Review a single lane early only when it touches secrets, auth, or public copy. Two axes, kept separate:
   - **Standards:** `AGENTS.md`, the relevant ADRs, `.cursor/rules/shadcn.mdc`, `.cursor/rules/code-discipline.mdc`, and `.cursor/rules/ui-ux-mockup-check.mdc` when the change is visual.
   - **Ticket:** the open items and acceptance text for that subtask.
   Label each finding a hard violation or a consideration. Fix it, then say which commit or edit fixed it, or why it was not fixed. UI changes still need a browser check of the affected flow before the wave is called done.
6. **Ticket status on the integration branch**, before any pull request. Check the finished subtasks in `project-os/tickets/`. Update `project-os/AVAILABLE_TICKETS.md` when the open queue changes. Update `project-os/PROJECT_STATE.md` only when phase, milestone, focus, blockers, or known issues change. Leave HITL items open. Do not append `COMPLETE_TASK.md`.
7. **Pull request to `main`**, only when that gate is preapproved or Boss Rezi asks now. One PR for the wave. Body: [`integration-pr-template.md`](integration-pr-template.md). Do not merge it in this skill unless Boss Rezi asks.
8. **Production checks** stay on their HITL subtasks. Do not mark an inbox, DNS, or deploy check done from local code.
9. **Clean up** lane worktrees after their work is on the integration branch. Close a lane PR only if one was opened and Boss Rezi asks.
10. **Retro**, suggestions only, at most 5 items. Read [`retro.md`](retro.md) only at this step. Do not edit rules or skills from the retro.

**Handoff**, when a session stops mid-wave: a pointer note, not a commit. Form: [`handoff.md`](handoff.md).

## Locked lessons

- Git does not catch every shared-file break. Run `pnpm typecheck` after each lane merge.
- A new worktree has no `node_modules`. Run `pnpm install` first.
- Permission from another session is not Boss Rezi's permission.
