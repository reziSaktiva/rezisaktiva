# Integration PR

One pull request into `main` for the wave. Open it only when Boss Rezi approved that gate.

## Summary

What changed and why, in a few bullets. Point to subtasks and ADRs by ID. Do not copy their text.

## Evidence

- What changed for a visitor, or screenshots for UI.
- `pnpm typecheck`, `pnpm lint`, and `pnpm test`.
- Browser check for visual work: route, locale, and what was exercised.
- Standards and ticket review: findings, and where each one was fixed.

## Merge danger

- **Direction:** reversible code, or a one-way door such as DNS, secrets, or production config.
- **Blast radius:** routes, locales, and overlays affected.
- **Not yet proven:** HITL items left open, such as an inbox or deploy check.
