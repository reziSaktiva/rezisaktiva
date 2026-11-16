# Real-time Strategy

> Status: **N/A (Baseline v1.0)** — established with Boss Rezi (2026-08-11). There is no product realtime for R1. This file remains as a trace record — see ADR-015.

This document is **intentionally filled as N/A** so the decision is recorded.

---

# Overview

The R1 portfolio does not need WebSocket, SSE, presence, live collaboration, or push updates to visitors. Content changes through a **new deploy**, not through a realtime channel.

---

# Scope

## In Scope

* State the deliberate N/A

## Out of Scope

* Realtime vendor selection (Pusher, Ably, etc.)
* Protocol design

---

# Approach

**N/A** — there is no realtime channel.

The only “live” interactions are client-side browser interactions (navigation, language switcher) — not server realtime architecture.

---

# Future Considerations

An experimental playground or live demo as the main stage = outside the MVP (product out of scope). If it is ever needed:

* New ADR + revision of this document
* Do not assume realtime by default

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| R1 realtime | N/A |
| System shape | Static-first SSG (ADR-015) |

---

# Related Documents

* `README.md`
* `application-layer.md`
* `../02-product/mvp-definition.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
