# 05 — Architecture

Documentation in this folder focuses on the **Architecture** phase for the personal portfolio website **rezisaktiva**.

---

# Purpose

* Define a conceptual architecture that fits the portfolio’s complexity.
* Document domain, data, auth, and integration decisions when relevant.
* Keep architecture decisions as the baseline before coding.

---

# Scope

This folder only covers architecture aspects.

The following topics are not covered here:

- Code implementation
- DX tooling details (covered in 06)
- Final visual design

---

# Documents

* `domain-model.md` — domain / bounded context when relevant.
* `database-strategy.md` — data/storage strategy.
* `application-layer.md` — application layer.
* `integration-layer.md` — external integrations.
* `background-jobs.md` — jobs/async when relevant.
* `realtime-strategy.md` — realtime when relevant.
* `auth-architecture.md` — auth architecture if there is a private area.
* `../README.md` — Product Discovery phase documentation.
* `../../project-os/PROJECT_OVERVIEW.md` — project summary.
* `../../project-os/PROJECT_RULES.md` — project rules.
* `../../project-os/PROJECT_STATE.md` — status and progress.
* `../../project-os/DECISIONS.md` — important decisions (ADRs).

---

# Workflow

1. Review inputs from the Product, User, and UX baselines.
2. Fill documents according to the chosen complexity (many may be N/A for a static site).
3. Record material decisions as ADRs.

---

# Expected Output

**Architecture Baseline v1.0 has been established** (ADR-015, 2026-08-11). All documents in this folder are filled and agreed upon, including N/A files as trace records.

Phase reference: **static-first SSG + content in repo**; lean content model; DB/jobs/realtime/auth = deliberate N/A.

Next step (historical phase): continue to **Phase 6 — Engineering Planning** in `../06-engineering/`. Active phase status is in `PROJECT_STATE.md`.

---

# Exit Criteria

The following criteria **have been met** for Baseline v1.0:

* All documents above are filled (not TBD).
* Material decisions are recorded in `DECISIONS.md` (ADR-015, etc.).
* Boss Rezi approved this phase baseline.

---

# Decision Rules

* The Architecture Baseline is locked — do not use this README as the active phase pointer; follow `PROJECT_STATE.md`.
* Material changes after the baseline → new ADR + revision of impacted documents.
* Phase status/progress is recorded only in `PROJECT_STATE.md`, not in this README.

---

# Related Documents

* `../README.md`
* `../../project-os/README.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
