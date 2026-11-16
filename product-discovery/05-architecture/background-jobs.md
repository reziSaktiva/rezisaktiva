# Background Jobs

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There are no product jobs/async flows for R1. This file remains as a trace record — see ADR-015.

This document is **intentionally filled as N/A** so the decision is recorded.

---

# Overview

The **rezisaktiva** R1 site is public and static. There is no queue, worker, product cron, server-side transactional email, or async pipeline that is part of the application architecture.

Hosting Build/CI (SSG generation) is an **engineering process**, not a product-domain background job.

---

# Scope

## In Scope (this document)

* State the deliberate N/A for R1 product jobs

## Out of Scope

* Queue design (SQS, Bull, etc.)
* Retry/idempotency for business workflows

---

# Job Types

**N/A** — there are no product job types.

| “Job-like” item | Classification |
| --------------- | -------------- |
| CI build / SSG generation | Engineering pipeline (T-006) |
| Deploy | Engineering |
| Newsletter / drip | Out of R1 product scope |

---

# Retry Strategy

**N/A.**

---

# Future Considerations

If a backend contact form, CMS sync, or notifications become Must:

* New ADR + refill this document
* Do not add a worker “because the template exists”

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 background jobs | N/A |
| System shape | Static-first SSG (ADR-015) |

---

# Related Documents

* `README.md`
* `application-layer.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
