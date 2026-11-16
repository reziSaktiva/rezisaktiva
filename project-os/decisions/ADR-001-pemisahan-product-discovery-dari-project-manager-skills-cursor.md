# Decision ADR-001

### Title

Separate `product-discovery/` from `project-os/` and place skills in `.cursor/skills/`

### Status

Accepted

### Date

2026-08-06

### Decision

1. Product knowledge (what is being built) lives in `product-discovery/` (phases 01-06).
2. Project operating work (rules, status, ADRs, tasks, logs) lives in `project-os/`.
3. This project is **Cursor-first**: process skills live only in `.cursor/skills/`. Do not create `.claude/` or `CLAUDE.md`.
4. Secrets are protected with `.cursorignore`.

### Reason

- Separating the product SoT from the process SoT reduces duplication and status conflicts.
- Separating the product SoT from the process SoT is a clear pattern that agents can follow easily.
- Boss Rezi works on this project in Cursor; the native project skill location is `.cursor/skills/`.

### Alternatives Considered

- Put every document in one `docs/` folder - rejected because it mixes SoTs.
- Put skills in a non-Cursor location - rejected because the main tool is Cursor.
