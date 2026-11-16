# DX Tooling

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines developer experience tooling for the **rezisaktiva** portfolio website.

---

# Overview

R1 uses a familiar DX stack aligned with the Next ecosystem:

* **Lint:** ESLint (`eslint-config-next` + TypeScript)
* **Format:** Prettier
* **Quality gate:** GitHub Actions (lint + typecheck) — already locked in `cicd-pipeline.md`
* **Pre-commit hooks:** **No** for R1
* **Test runner:** **Not required yet** for R1

Biome was considered and **not chosen** (familiarity + Next rules + plugin ecosystem).

---

# Purpose

* Maintain code quality without excessive setup for solo + agent work
* One clear path: local format → lint/typecheck in CI → Vercel deploy
* Avoid format drift across machines without forcing husky

---

# Lint & Format

| Tool | R1 Role |
| ---- | ------- |
| **ESLint** | Lint JS/TS/React; based on `eslint-config-next` |
| **Prettier** | Format (indent, quotes, trailing comma, etc.) |
| Integration | Disable conflicting format rules in ESLint (eslint-config-prettier) so Prettier owns format |

### Bootstrap conventions (details locked during scaffold)

* One flat ESLint config (or equivalent supported by Next during bootstrap)
* One `.prettierrc` / `prettier.config` in root
* `package.json` scripts: `lint`, `format` / `format:check`, `typecheck`
* Editor: format-on-save via Prettier is recommended; not a CI requirement

### Not used in R1

* Biome as a replacement for ESLint/Prettier
* ESLint-only without Prettier (risk of inconsistent format)

---

# Pre-commit Hooks

There is **no** husky / lint-staged / Lefthook for R1.

| Reason | Notes |
| ------ | ----- |
| CI already gates | PRs should be green on lint + typecheck (`cicd-pipeline.md`) |
| Overhead | Hooks add friction for agents & docs-only commits |
| Later | May be added if local format drift becomes a real problem |

Local discipline: run `pnpm lint` / `pnpm format` before PR when changing app code.

---

# Test Runner

**Not required yet** for R1.

| Type | R1 Status |
| ---- | --------- |
| Unit (Vitest/Jest) | Could / Later — add when there is logic worth testing |
| E2E (Playwright) | Could / Later — especially locale redirect & Contact path |
| Visual regression | Not R1 Must |

CI already has a “test if present” slot — adding a runner does not change pipeline model B.

---

# Workspace Scripts

Expected scripts in root `package.json` during bootstrap:

| Script | R1 Required | Role |
| ------ | ----------- | ---- |
| `dev` | Yes | Next dev server |
| `build` | Yes | Production build |
| `start` | Yes | Serve build (or equivalent) |
| `lint` | Yes | ESLint |
| `typecheck` | Yes | `tsc --noEmit` (or equivalent) |
| `format` / `format:check` | Yes | Prettier write / check |
| `test` | If present | Only after a runner is added |

Package manager: **pnpm** (see `monorepo-setup.md`, `dependency-strategy.md`).

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Lint + format | **ESLint + Prettier** |
| Biome | No for R1 |
| Pre-commit | No (CI only) |
| Test runner | Not required yet |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. App-code PRs without green lint/typecheck are not ideal to merge
2. Format is consistent through Prettier without ESLint conflict
3. Bootstrap does not install husky/Vitest “by default” without need

---

# Related Documents

* `README.md` — this phase documentation
* `cicd-pipeline.md` — Actions quality gate
* `monorepo-setup.md` — pnpm / Next / scripts
* `dependency-strategy.md` — lockfile & updates
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
