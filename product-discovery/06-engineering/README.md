# 06 — Engineering Planning

Documentation in this folder focuses on the **Engineering Planning** phase for the personal portfolio website **rezisaktiva**.

---

# Purpose

* Lock technical decisions before application repo bootstrap.
* Prepare references for monorepo/single-app shape, deploy, auth, DX, and tokens.

---

# Scope

This folder only covers engineering planning aspects.

The following topics are not covered here:

- Product feature implementation
- Final portfolio content

---

# Documents

* `monorepo-setup.md` — repo / workspace structure.
* `deployment-infrastructure.md` — deploy platform.
* `auth-strategy.md` — implementation auth strategy.
* `database-orm.md` — ORM / data access.
* `cicd-pipeline.md` — CI/CD.
* `environment-management.md` — env & secrets.
* `dx-tooling.md` — lint, format, test.
* `dependency-strategy.md` — dependency strategy.
* `design-tokens.md` — design tokens.
* `code-discipline.md` — daily playbook: spacing, styling layers, Server/Client, SSG (ADR-015/028).
* `../README.md` — Product Discovery phase documentation.
* `../../project-os/PROJECT_OVERVIEW.md` — project summary.
* `../../project-os/PROJECT_RULES.md` — project rules.
* `../../project-os/PROJECT_STATE.md` — status and progress.
* `../../project-os/DECISIONS.md` — important decisions (ADRs).

---

# Workflow

1. Start from repo (`monorepo-setup.md`) and deploy decisions.
2. Complete auth, data, CI/CD, env, DX, dependency.
3. Fill `design-tokens.md` after the design direction is clear (may be iterative).

---

# Expected Output

**Engineering Baseline v1.0 has been established** (ADR-016, 2026-08-11). All documents in this folder are filled and agreed upon, including `auth-strategy.md` / `database-orm.md` as N/A.

Phase reference: Next.js single-app + pnpm; Vercel; CI Actions lint/typecheck; ESLint/Prettier; shadcn/ui + Tailwind CSS v4 (dark default, light hold via `html.dark` — **ADR-028** / **ADR-021** update T-038.2; ADR-018 superseded).

Next step (historical phase): **Repository & Bootstrap**, then Development. Active phase status is in `PROJECT_STATE.md`.

---

# Exit Criteria

The following criteria **have been met** for Baseline v1.0:

* All documents above are filled (not TBD).
* Material decisions are recorded in `DECISIONS.md` (ADR-016, etc.).
* Boss Rezi approved this phase baseline.

---

# Decision Rules

* The Engineering Planning phase is complete — historical sequence: **Repository & Bootstrap**, then Development. Active phase is in `PROJECT_STATE.md`.
* Material changes after the baseline → new ADR + revision of impacted documents.
* Phase status/progress is recorded only in `PROJECT_STATE.md`, not in this README.

---

# Related Documents

* `../README.md`
* `../../project-os/README.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
