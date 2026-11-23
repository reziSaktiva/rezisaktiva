# AVAILABLE TICKETS

Open work only. Completed ticket history lives in `tickets/`.

## Current Focus

**S-002** Monolith redesign migration ([`specs/S-002.md`](specs/S-002.md), ADR-052, ADR-053). T-075 and T-077 are done (ADR-054). Surfaces T-076 and T-078 to T-083 are done (Preview walk 2026-11-23). T-085 quality gates are done (2026-11-23). T-084 copy blocks T-084.1 to T-084.6 are approved (2026-11-23). **T-086** cutover merged to production 2026-11-23 (PR #112). T-086.4 production smoke done (Contact real send confirmed, Workflow LCP +0.5 s accepted). Open: T-086.5 24 h watch, T-086.6 cleanup, T-084.7 Postific + social screenshots. Ticket details: [`tickets/s002-monolith-redesign.md`](tickets/s002-monolith-redesign.md). Earlier history: [`tickets/r2.md`](tickets/r2.md).

## Open Tickets

| Ticket | Title | Branch | Blocked by |
| ------ | ----- | ------ | ---------- |
| **T-084** | Approved copy, ID and EN, per surface | `redesign/monolith` | Copy done (T-084.1–.6); open: T-084.7 work images (Boss Rezi sends Postific + social-platform screenshots) |
| **T-086** | Cutover | `main` ← `redesign/monolith` | T-084, Boss Rezi approval |

## Queue Rules

- This file lists unfinished work only.
- Do not reuse task IDs.
- Keep completed work in the ticket files and git history.
- `PROJECT_STATE.md` keeps only the short snapshot and active focus.
