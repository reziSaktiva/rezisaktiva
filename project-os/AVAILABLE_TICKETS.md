# AVAILABLE TICKETS

Open work only. Completed ticket history lives in `tickets/`.

## Current Focus

**S-002** Monolith redesign migration ([`specs/S-002.md`](specs/S-002.md), ADR-052, ADR-053). T-075 and T-077 are done (ADR-054). Surfaces T-076 and T-078 to T-083 are done (Preview walk 2026-11-23). Next: **T-085** Boss Rezi checks (reduced motion, Preview Lighthouse, real devices, page review), then **T-084** copy, then **T-086** cutover. Ticket details: [`tickets/s002-monolith-redesign.md`](tickets/s002-monolith-redesign.md). Earlier history: [`tickets/r2.md`](tickets/r2.md).

## Open Tickets

| Ticket | Title | Branch | Blocked by |
| ------ | ----- | ------ | ---------- |
| **T-084** | Approved copy, ID and EN, per surface | `redesign/monolith` | Runs last, before T-086; recruiter-eye voice; Boss Rezi approval per block |
| **T-085** | Quality gates, cleanup, SEO | `redesign/monolith` | Agent part done; Boss Rezi: reduced-motion pass (T-085.2), Preview Lighthouse (T-085.3), real devices (T-085.4), page review (T-085.7) |
| **T-086** | Cutover | `main` ← `redesign/monolith` | T-085, Boss Rezi approval |

## Queue Rules

- This file lists unfinished work only.
- Do not reuse task IDs.
- Keep completed work in the ticket files and git history.
- `PROJECT_STATE.md` keeps only the short snapshot and active focus.
