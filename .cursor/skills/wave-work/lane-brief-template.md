# Lane brief

One brief per lane. Pointers, not copies. Delete any line that does not apply.

## Goal

One sentence: what exists when the lane is done.

## Scope

- Subtask: `T-XXX.N` in `project-os/tickets/...`, open items only.
- Spec and ADRs: path only, when the ticket names them.
- May change: paths. Other lanes do not change: paths.

## Constraints

- Branch cut from the integration branch. In a new worktree, run `pnpm install` first. Do not skip hooks.
- Do not merge to `main`, edit secrets, or change DNS. Hand questions that belong to Boss Rezi back.
- Do not re-read a file already read or just edited. Trim command output to failures.
- Commit only when the wave block preapproved commit.

## Definition of done

- [ ] The open subtask acceptance is met, and the repo rules that apply are respected.
- [ ] `pnpm typecheck` passes for this lane. Lint and tests run once on the integration branch after the last merge.
- [ ] Visual work was checked in the browser on the affected route.
- [ ] Ticket text was not marked done for a check that still needs Boss Rezi.

## Only if it applies

Add one line, not the content. The lane reads [`lane-brief-extras.md`](lane-brief-extras.md) for UI, motion, or tests.

## Lane report

At most 10 lines: commit or diff summary, checks and results, open findings.
