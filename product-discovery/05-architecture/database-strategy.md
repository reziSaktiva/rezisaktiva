# Database Strategy

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There is no product database for R1. This file remains as a trace record — see ADR-015.

This document is **intentionally filled as N/A** so the decision is recorded (not a forgotten document).

---

# Overview

The **rezisaktiva** R1 website = **Static-first (SSG) + content in repo**. There is no Postgres/MySQL/SQLite as the content SoT, no product ORM, and no application schema migration.

Content SoT: **files in the repository** (Markdown/MDX or equivalent — locked in Engineering).

---

# Purpose

* Record that the absence of a DB is a **deliberate decision**, not an omission
* Prevent “add a database because the template folder exists”

---

# Database Strategy Decision

| Aspect | R1 Decision |
| ------ | ----------- |
| Product database | **None** |
| Content SoT | Repo (files) |
| CMS / headless | No (option C rejected) |
| User/session store | No (auth N/A) |
| Analytics DB | Not the product SoT; if present, a third-party tool = optional and privacy-aware (Engineering) |

---

# Schema / Content Model

**N/A database schema.**  
The lean content model is in `domain-model.md` (Page, Locale, work item, channel) — implemented as files/frontmatter, not tables.

---

# Storage Strategy

| Data | Where |
| ---- | ----- |
| ID/EN page copy | Application repo (after bootstrap) |
| Teaser & meta | Repo |
| Secrets / non-public material | `private/` or outside the repo (ADR-003) |
| Browser locale preference | Cookie/local storage on the client — **not** a DB; only for the `/` redirect (ADR-014) |

---

# Migration Strategy

**N/A** — there are no DB migrations. Content evolution = commit + deploy.

If a DB is later needed (form, CMS, member):

* New ADR + revise this document from N/A
* Do not assume a DB “because the architecture folder exists”

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 DB | N/A — content in repo |
| System shape | Static-first SSG (ADR-015) |

---

# Success Criteria

1. It is clear there is no product DB in R1
2. The file remains as an N/A trace record
3. Engineering handoff: ORM/DB = N/A unless a new ADR changes it

---

# Related Documents

* `README.md`
* `domain-model.md`
* `application-layer.md`
* `../02-product/product-scope.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
