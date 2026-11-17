# CI/CD Pipeline

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines the CI/CD pipeline for the **rezisaktiva** portfolio website.

---

# Overview

R1 uses **option B**:

* **CI** = GitHub Actions (lint + typecheck; tests if any)
* **CD** = Vercel (Preview per PR, Production from the main branch). A documentation-only change skips the Vercel build (ADR-051).

There is no custom deploy from Actions to Vercel for R1 — Vercel remains the owner of the site build/deploy.

---

# Purpose

* Lightweight quality gate on PRs before merge
* Keep deploy simple (already locked in `deployment-infrastructure.md`)
* Fit a public repo + frequent changes (including via agent)

---

# Pipeline Overview

```text
[PR opened / updated]
    ├── GitHub Actions: lint + typecheck (+ tests if any)
    └── Vercel: Preview deployment

[Merge to main branch]
    └── Vercel: Production deployment
```

| Path | Tool | Trigger |
| ---- | ---- | ------- |
| CI | GitHub Actions | `pull_request` (and optional `push` to main) |
| Preview | Vercel | PR |
| Production | Vercel | push/merge to production branch |

---

# Continuous Integration

## R1 Workflow (minimal)

| Step | R1 Required | Notes |
| ---- | ----------- | ----- |
| Checkout | Yes | — |
| Setup pnpm + Node LTS | Yes | Aligned with `monorepo-setup.md` |
| `pnpm install` | Yes | Lockfile committed |
| Lint | Yes | ESLint (details in `dx-tooling.md`) |
| Typecheck | Yes | `tsc --noEmit` or equivalent script |
| Unit/e2e test | If present | Does not block the pipeline definition if no tests exist yet |
| `next build` in Actions | Not required | Production build is in Vercel; avoid old duplication unless needed later |

## Branch protection (recommended)

* Require green CI before merging to the main branch
* Vercel Preview may be used for visual review; it does not replace lint/typecheck

Lint/format tool details → `dx-tooling.md` (T-006.7).

---

# Continuous Deployment

| Environment | Who deploys | When |
| ----------- | ----------- | ---- |
| Preview | Vercel | Every PR that changes the site or deploy config. Documentation-only changes are skipped (ADR-051). |
| Production | Vercel | Merge/push to main when the site or deploy config changed. Documentation-only merges are skipped (ADR-051). |

* Rollback = Vercel dashboard (see `deployment-infrastructure.md`)
* No CD via `vercel deploy` from Actions for R1
* No required manual multi-stage promotion

**Redesign branch (S-002, ADR-053):** the Monolith redesign lives on the integration branch `redesign/monolith`. Vercel Preview of that branch is the staging; no new environment or Vercel project is created. Production stays on `main` until cutover (T-086). PRs go into `redesign/monolith`. Preview must be `noindex` and must not send real contact mail.

---

# Secrets & Environment

| CI Secret | Where |
| --------- | ----- |
| Built-in GitHub Actions token | Enough for public lint/typecheck |
| Vercel / domain secrets | Vercel dashboard — not in the R1 CI workflow |
| `DATABASE_URL` / auth secret | **None** (N/A) |

Variable catalog → `environment-management.md`.

Do not put product secrets in Actions logs or the public repo.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| CI/CD model | **B** — Actions (lint/typecheck) + Vercel deploy |
| Vercel-only (without Actions) | Not chosen |
| Full deploy from Actions | Not for R1 |
| Engineering Baseline | ADR-016 |
| Docs-only Vercel build | Skipped via `vercel.json` `ignoreCommand` (ADR-051) |

---

# Success Criteria

1. A PR without green lint/typecheck is not ideal to merge
2. Preview & Production still go through Vercel without duplicate CD scripts
3. Pipeline stays short and explainable in one diagram

---

# Related Documents

* `README.md` — this phase documentation
* `deployment-infrastructure.md` — Vercel Preview/Production
* `environment-management.md` — env & secrets
* `monorepo-setup.md` — pnpm / Next
* `dx-tooling.md` — ESLint + Prettier; CI without husky
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
