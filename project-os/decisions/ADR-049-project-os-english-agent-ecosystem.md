# Decision ADR-049

### Title

Project OS English agent ecosystem

### Status

Accepted

### Date

2026-11-16

### Decision

1. Rename the former Project Manager folder to `project-os/`. This amends ADR-001's operating-system folder name while keeping `product-discovery/` as the product Source of Truth and `.cursor/skills/` as the only project skill location.
2. Replace `TASKS.md` plus the old `tasks/` phase folders with `AVAILABLE_TICKETS.md` and `tickets/`. `AVAILABLE_TICKETS.md` lists unfinished work only; `tickets/` keeps both open and closed ticket history.
3. Keep task IDs `T-001` through `T-059` unchanged. The next new task ID is `T-060`; `T-059` remains the open Contact to Resend product ticket.
4. Add `specs/` for multi-session programs. This English Project OS program is `S-001`; one-session work does not require a spec.
5. Add a short `context/` pointer layer in a later ticket. It must index existing sources, not duplicate product baselines.
6. Move the project AI ecosystem to English: agent door, process skills, always-on rules, living Project OS docs, ADRs, product-discovery docs, ticket archives, and developer-facing source comments. Public site locale content in `content/` stays bilingual.
7. Keep `design-mockups/` as an archive under ADR-024. It is not revived as a visual Source of Truth.
8. Freeze `COMPLETE_TASK.md`. It receives an English banner only; historical entries are not translated.
9. Faithful translation may update old documents in place as an append-only exception to the normal "do not rewrite history" rule. Meaning, IDs, dates, statuses, and links must stay intact.

### Reason

- The current operating-system docs and agent instructions are split between Indonesian process prose and English-facing implementation work. A single English agent ecosystem reduces handoff friction across future sessions.
- `project-os/` describes more than management now: status, tickets, ADRs, specs, context, and agent workflow. `project-os/` is the clearer name.
- A ticket queue with open items only is easier for agents to navigate than a mixed backlog index plus phase folder.
- Freezing the historical changelog avoids spending time translating thousands of lines whose operational value has moved to tickets and git history.

### Alternatives Considered

- Keep `project-os/` and only translate prose — rejected because the folder name would keep teaching agents the old model.
- Translate `COMPLETE_TASK.md` fully — rejected because it is long historical archive and agents already must not read it routinely.
- Copy Postific's complete process model — rejected because this portfolio does not need Postific-specific product rituals, named subagents, wave plans, Bun, or staging ladders.
- Move skills to `.claude/` — rejected; rezisaktiva stays Cursor-first and project skills remain in `.cursor/skills/`.

### Impact / Follow-up

- `project-os/specs/S-001.md`
- `project-os/tickets/s001-project-os-english.md`
- `project-os/AVAILABLE_TICKETS.md`
- `AGENTS.md`
- `.cursor/skills/`, `.cursor/rules/`
- `product-discovery/`
- `project-os/decisions/` and `project-os/DECISIONS.md`
- Source comments and developer-facing strings outside `content/` and `design-mockups/`
