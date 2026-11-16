# Dependency Strategy

> Status: **Baseline v1.1** — established with Boss Rezi (2026-08-11; styling **ADR-028** / T-037.4). Material changes after this require a new ADR.

This document defines the dependency strategy for the **rezisaktiva** portfolio website.

---

# Overview

R1 = **single app** + **pnpm** (already locked in `monorepo-setup.md`).

* Lockfile is **required** to be committed
* Version ranges in `package.json`: **caret (`^`)**
* Lightweight automatic updates via **Dependabot** (Renovate may be an equivalent alternative)
* Bun was considered as package manager and **not chosen** (stay on pnpm)

---

# Purpose

* Reproducible install locally, in CI, and on Vercel
* Security patches do not depend on manual memory alone
* Prevent dependency sprawl beyond the needs of the lean site

---

# Versioning

| Aspect | R1 Decision |
| ------ | ----------- |
| Default range | **`^`** (semver compatible) |
| Exact pin | Only for a specific bug/compatibility issue (record the reason in the PR) |
| `engines` | Node LTS supported by Next during bootstrap (optional in `package.json`) |
| Package manager | **pnpm** — declare via `packageManager` field if using Corepack |

Major framework upgrades (Next, React, shadcn/Tailwind) = separate PR + Vercel Preview check.

---

# Lockfile

| File | Rule |
| ---- | ---- |
| `pnpm-lock.yaml` | **Required committed** |
| `package-lock.json` / `yarn.lock` / `bun.lock*` | **No** — one package manager only |
| Install in CI/Vercel | Respect lockfile (`pnpm install --frozen-lockfile` in Actions when available) |

Do not regenerate the lockfile without reviewing the dependency diff.

---

# Dependency Placement

One `package.json` at the **root** (not a monorepo workspace).

| Type | Example | Notes |
| ---- | ------- | ----- |
| `dependencies` | `next`, `react`, `react-dom`, `motion`, `lenis`, shadcn primitives (Radix/`vaul` through source `components/ui`) | Runtime / production bundle |
| `devDependencies` | `typescript`, `eslint`, `prettier`, `tailwindcss`, `@tailwindcss/postcss`, `shadcn`, types | Build, lint, format, component CLI |
| Complex peer / optional | Avoid unless forced by a library | Lean site |

Do not add a library “because of a template” (auth, ORM, global state) — aligned with auth/DB N/A.

Preference: few, intentional dependencies; prefer platform APIs (Next/Vercel) before adding a new library.

**One styling system (ADR-028, 2026-09-01):** shadcn/ui + Tailwind CSS v4 replaces Astryx + StyleX (ADR-018 superseded). Not coexistence, not hybrid. Packages `@astryxdesign/*` and `@stylexjs/stylex` were removed in T-037.

**ADR-026 (historical):** the timing rule “do not switch mid-R1” remains valid as a trace; post-T-018 evaluation was completed via ADR-028.

---

# Update Policy

| Path | R1 Policy |
| ---- | --------- |
| **Dependabot** (default) | Enable for the `npm`/`pnpm` ecosystem + GitHub Actions when relevant |
| Frequency | Weekly or grouped patch/minor; major = manual review |
| Security advisories | Prioritize security PRs |
| Renovate | Equivalent alternative if preferred later — do not run both at once |
| Manual update | Still allowed for large Next/React/Tailwind updates |

After merging an update: ensure CI is green + Vercel Preview OK.

Bun is **not** part of the R1 update strategy; reopening the package manager requires updating `monorepo-setup.md` + ADR if material.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Package manager | **pnpm** (kept; Bun rejected for R1) |
| Lockfile | `pnpm-lock.yaml` committed |
| Version range | `^` |
| Auto-update | **Dependabot** (Renovate alternative) |
| Exact pin default | No |
| Engineering Baseline | ADR-016 |
| Styling/component library | **shadcn/ui + Tailwind CSS v4** — **ADR-028** (ADR-018 superseded) |

---

# Success Criteria

1. Clone + `pnpm install` produce the same tree (lockfile)
2. There is a security patch path without waiting to “remember to update”
3. No duplicate lockfile or Bun-as-R1-installer assumption

---

# Related Documents

* `README.md` — this phase documentation
* `monorepo-setup.md` — repo shape & pnpm
* `cicd-pipeline.md` — install in Actions
* `dx-tooling.md` — ESLint / Prettier as devDeps
* `deployment-infrastructure.md` — install on Vercel
* `../../project-os/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
