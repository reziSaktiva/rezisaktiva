# DEVELOPER WORKFLOW

> Static Reference — general workflow. Active phase/progress lives in `PROJECT_STATE.md`, not here.

## Implementation Workflow

1. Read the Snapshot in `PROJECT_STATE.md`.
2. Check `AVAILABLE_TICKETS.md` → open **only** one phase file in `project-os/tickets/` (`discovery.md` / `bootstrap.md` / `r1.md` / `r2.md`).
3. Check task completeness **and** related production code (`app/`) before touching UI/UX (`.cursor/rules/ui-ux-mockup-check.mdc`, ADR-024). `design-mockups/` is an archive. Ask Boss Rezi only if there is a gap, baseline conflict, or something outside the plan (`.cursor/rules/ask-before-assuming.mdc`).
4. Implement according to the `product-discovery/` baseline + shadcn/Tailwind (`.cursor/rules/shadcn.mdc`, ADR-028) + code discipline (`.cursor/rules/code-discipline.mdc`).
5. Record material decisions as ADRs if they are not documented yet.
6. Update `AVAILABLE_TICKETS.md` / `PROJECT_STATE.md` / the relevant ticket (mention the subtask code when relevant). `COMPLETE_TASK.md` is frozen (ADR-049).
7. Report with the `work-report-simple` skill.

## Previous Phase Workflows (Historical)

* **Product Discovery** — fill/revise documents in `product-discovery/` by folders 01–06, record ADRs, update queue/state. Completed (see `tickets/discovery.md`).
* **Repository & Bootstrap** — scaffold the repo, tooling, and dependency baseline. Completed (see `tickets/bootstrap.md`).
* **Development R1** — implement Must Hybrid lean through T-018 exit. Completed (see `tickets/r1.md`).

## Related Documents

* `PROJECT_RULES.md`
* `../AGENTS.md`
* `../.cursor/skills/project-os-navigator/SKILL.md`
