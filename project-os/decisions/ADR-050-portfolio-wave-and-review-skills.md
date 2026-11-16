## Decision ADR-050

### Title

Portfolio-shaped wave and review skills

### Status

Accepted

### Date

2026-11-16

### Decision

1. Add three process skills under `.cursor/skills/`: `wave-plan`, `wave-work`, and `review-work`. They are explicit skills. Ordinary one-ticket work still follows `project-os-navigator`.
2. Fit those skills to this portfolio. Use Boss Rezi, `T-XXX` / `T-XXX.N`, `AskQuestion`, pnpm, and `main`. Do not import Postific's staging ladder, Bun, Prisma, shared database, named reviewer agents, or design-artifact review.
3. This portfolio has no `Depends` or `Mode` field. `wave-plan` infers blockers from ticket text and classifies a subtask as HITL when it needs Boss Rezi's secrets, DNS, copy lock, or a manual production check.
4. Keep `proactive-clarification` as ask-only-when-urgent. Do not replace it with Postific's ask-before-every-task version. Absorb only recommendation-first wording and the rule that readable facts are not questions.
5. Keep `docs-consistency-audit` as the portfolio audit. Do not replace its file map, terminology, or report-first rule with Postific's product map.
6. Commit, push, pull request, merge to `main`, production deploy, DNS, and secrets stay one-way doors. A wave runs them only when Boss Rezi approved that gate in the wave or asks again in the execution session.

### Reason

- Boss Rezi asked for Postific's wave, review, clarification, and docs-audit skills after the Project OS update, with the requirement that they fit this project.
- ADR-049 rejected copying Postific's full process model, including its staging ladder and named agents. A smaller wave flow is useful for a batch of ready portfolio tickets without taking that model.
- The clarification and docs-audit skills already match this repo's ticket files, English Project OS, and ask-only-when-urgent rule. Replacing them would undo that fit.

### Alternatives Considered

- Copy the Postific skills verbatim — rejected because the names, branches, package manager, ticket fields, and design-artifact step do not exist here.
- Leave wave planning out, per the ADR-049 alternative — rejected because Boss Rezi explicitly asked for a fitted wave flow.
- Replace `proactive-clarification` with Postific's ask-first skill — rejected because this project already locked ask-only-when-urgent.

### Impact / Follow-up

- `.cursor/skills/wave-plan/`, `.cursor/skills/wave-work/`, `.cursor/skills/review-work/`
- `.cursor/skills/proactive-clarification/SKILL.md`
- `.cursor/skills/docs-consistency-audit/SKILL.md`
- `AGENTS.md`, `PROJECT_RULES.md`, `project-os-navigator`
