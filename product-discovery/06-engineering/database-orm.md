# Database & ORM

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There is no product database/ORM for R1. This file remains as a trace record — aligned with ADR-015 / ADR-016 / `database-strategy.md`.

This document is **intentionally filled as N/A** so the engineering decision is recorded.

---

# Overview

The **rezisaktiva** R1 website = **static-first SSG + content in repo**. There is no Postgres/MySQL/SQLite/Turso as the SoT, no Prisma/Drizzle/Kysely, and no application schema migration.

Content SoT: files in `content/` (or equivalent) — locked in `monorepo-setup.md`.

---

# Purpose

* State R1 DB & ORM = N/A at the engineering layer
* Prevent adding Prisma/Supabase “because the template folder exists”
* Align with `../05-architecture/database-strategy.md`

---

# Database & ORM Decision

**N/A** — there is no product database & ORM for R1.

| Aspect | R1 Status |
| ------ | --------- |
| Product database | No |
| ORM / query builder | No |
| Connection pooling / serverless DB | No |
| Schema migration | No |
| Content SoT | Files in repo |
| Session/user store | No (auth N/A) |

---

# Access Architecture

**N/A** for runtime DB access.

Content access = read filesystem during **build** (SSG). There is no DB client in the browser or product server.

---

# Migration Strategy

**N/A** — content evolution = commit + deploy (Vercel).

If a DB is later needed (form, CMS, member area):

* New ADR + change this document status from N/A
* Impact to Architecture (`database-strategy.md`) and Product scope

---

# Local Development

No local DB. `pnpm dev` is enough for the app + content files.

There is no Docker Postgres, DB seed, or `.env` `DATABASE_URL` for R1.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 DB / ORM | N/A |
| Aligned with | ADR-015, `database-strategy.md` |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. It is clear there is no ORM/DB dependency in R1
2. Bootstrap does not install Prisma/Drizzle “by default”
3. Handoff: content = files, not tables

---

# Related Documents

* `README.md` — this phase documentation
* `monorepo-setup.md` — `content/` as SoT
* `../05-architecture/database-strategy.md`
* `../05-architecture/domain-model.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
