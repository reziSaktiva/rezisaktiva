# AVAILABLE TICKETS

Open work only. Completed ticket history lives in `tickets/`.

## Current Focus

**S-002** Monolith redesign migration ([`specs/S-002.md`](specs/S-002.md), ADR-052, ADR-053). T-075 and T-077 are done (ADR-054). Next: **T-076** (Boss Rezi dashboard checks), then **T-078**. Ticket details: [`tickets/s002-monolith-redesign.md`](tickets/s002-monolith-redesign.md). Earlier history: [`tickets/r2.md`](tickets/r2.md).

## Open Tickets

| Ticket | Title | Branch | Blocked by |
| ------ | ----- | ------ | ---------- |
| **T-076** | Preview safety and performance baseline | dashboard | — |
| **T-078** | Design foundation: tokens, fonts, global layer | `redesign/monolith` | — |
| **T-079** | Chrome and motion system | `redesign/monolith` | T-078 |
| **T-080** | Home | `redesign/monolith` | Built with placeholder copy (T-080.4 closed by ADR-054); Preview review T-080.6, copy swap T-084.2 |
| **T-081** | Work index and case pages | `redesign/monolith` | Built with placeholder copy (glass bar done); Preview review T-081.5, copy swap T-084.3 |
| **T-082** | Workflow page | `redesign/monolith` | Built with placeholder copy; Preview review, copy swap T-084.4 |
| **T-083** | Contact page | `redesign/monolith` | Built with placeholder copy (PR #103); Preview review T-083.5, copy swap T-084.5 |
| **T-084** | Approved copy, ID and EN, per surface | `redesign/monolith` | Runs last, before T-086; recruiter-eye voice; Boss Rezi approval per block |
| **T-085** | Quality gates, cleanup, SEO | `redesign/monolith` | Agent part done; Boss Rezi: reduced-motion pass (T-085.2), Preview Lighthouse (T-085.3), real devices (T-085.4), page review (T-085.7) |
| **T-086** | Cutover | `main` ← `redesign/monolith` | T-085, Boss Rezi approval |

## Queue Rules

- This file lists unfinished work only.
- Do not reuse task IDs.
- Keep completed work in the ticket files and git history.
- `PROJECT_STATE.md` keeps only the short snapshot and active focus.
