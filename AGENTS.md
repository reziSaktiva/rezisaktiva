# AGENTS.md - rezisaktiva

Entry point for agents working in this Cursor workspace. Read this file first, then follow the pointers instead of treating this document as the product Source of Truth.

## Source Of Truth

| Area | Location |
| ---- | -------- |
| Status, phase, milestone, issues | `project-os/PROJECT_STATE.md` |
| Open tickets | `project-os/AVAILABLE_TICKETS.md` + `project-os/tickets/` |
| Project workflow and governance | `project-os/PROJECT_RULES.md` |
| Decisions | `project-os/DECISIONS.md` + `project-os/decisions/` |
| Product and engineering baselines | `product-discovery/` |
| Architecture overview | `project-os/ARCHITECTURE_OVERVIEW.md` |
| Developer workflow | `project-os/DEVELOPER_WORKFLOW.md` |
| UI/UX visual truth | Production code (`app/`, shadcn + Tailwind, tokens in `app/globals.css`) + Boss Rezi's current instructions, not `design-mockups/` |

## Start Here

1. Read the **Snapshot** at the top of `project-os/PROJECT_STATE.md`.
2. For task work, read `project-os/AVAILABLE_TICKETS.md`, then only the relevant ticket section in `project-os/tickets/`.
3. Follow `.cursor/skills/project-os-navigator/SKILL.md`.
4. Check that the task, referenced docs, and production code are complete and consistent before acting. Ask Boss Rezi only for urgent gaps, wrong documents, or unplanned decisions; use `.cursor/skills/proactive-clarification/SKILL.md` for the question format.
5. For UI work, also follow `.cursor/rules/ui-ux-mockup-check.mdc`, `.cursor/rules/shadcn.mdc`, and `.cursor/rules/code-discipline.mdc`.
6. After finishing work, report with `.cursor/skills/work-report-simple/SKILL.md`.

## Language Rule

ADR-049 sets the project language contract:

- Address the user as **Boss Rezi** when needed.
- Project documents, process skills, agent rules, and developer-facing comments move to English.
- Public site locale copy in `content/` stays bilingual.
- `design-mockups/` stays an archive, not a visual contract.
- `COMPLETE_TASK.md` is a frozen historical archive. Do not read, translate, or append it unless Boss Rezi explicitly asks for legacy changelog work.

## Skills

Project skills live only in `.cursor/skills/`.

```
.cursor/skills/
├── project-os-navigator/     -> Project OS navigation and behavior
├── proactive-clarification/  -> How to ask when an urgent gap exists
├── work-report-simple/       -> Plain-language completion report
├── docs-consistency-audit/   -> Explicit docs audits only
├── wave-plan/                -> Prepare an approved batch of ready tickets
├── wave-work/                -> Run a wave Boss Rezi already approved
├── review-work/              -> UI acceptance walkthrough when Boss Rezi asks
└── motion/                   -> Motion skill library, not a process skill
```

This project is Cursor-first. Do not create or rely on `.claude/` or `CLAUDE.md`.

## Always-On Rules

```
.cursor/rules/
├── no-ai-attribution-git.mdc -> no AI/tool attribution in commits, branches, or PRs
├── shadcn.mdc                -> shadcn/ui + Tailwind v4 conventions
├── code-discipline.mdc       -> spacing, styling layers, Server/Client, SSG
├── ui-ux-mockup-check.mdc    -> production code is the visual source of truth
├── redesign-branch-flow.mdc  -> S-002 redesign: branch from and open PRs into redesign/monolith, never main
├── ask-before-assuming.mdc   -> ask only for urgent gaps, wrong docs, or unplanned work
└── motion.mdc                -> use the Motion skill for animation changes
```

## Hard Rules

- Boss Rezi owns final decisions.
- Documentation First: read the relevant baseline before code or prose changes.
- Implementation follows `Active Conversation Mode` in `project-os/PROJECT_STATE.md` unless Boss Rezi explicitly asks otherwise.
- Status and progress belong in `PROJECT_STATE.md`, `AVAILABLE_TICKETS.md`, and ticket files, not static references.
- Use parent IDs `T-XXX` and subtask IDs `T-XXX.N`; do not reuse IDs.
- Keep secrets protected by `.cursorignore`.
- S-002 redesign code never goes to `main`: branch `redesign/t-0XX-name` from `redesign/monolith` and open the PR with `gh pr create --base redesign/monolith` (`.cursor/rules/redesign-branch-flow.mdc`).

## After Changes

1. Update the relevant ticket file in `project-os/tickets/` and `project-os/AVAILABLE_TICKETS.md` when status changes.
2. Update `PROJECT_STATE.md` only when phase, milestone, focus, blockers, or known issues change.
3. Do not append `COMPLETE_TASK.md`; record new work in the ticket, `AVAILABLE_TICKETS.md`, and git history.
4. Add or update an ADR for material decisions.
5. Keep the final report short and plain.

## Related

- `project-os/README.md`
- `product-discovery/README.md`
- `.cursor/skills/project-os-navigator/SKILL.md`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
