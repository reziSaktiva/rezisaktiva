# AVAILABLE TICKETS

Open work only. Completed ticket history lives in `tickets/`.

## Current Focus

**S-002** Monolith redesign migration ([`specs/S-002.md`](specs/S-002.md), ADR-052, ADR-053). Start with Wave A: **T-075** and **T-076**. Ticket details: [`tickets/s002-monolith-redesign.md`](tickets/s002-monolith-redesign.md). Earlier history: [`tickets/r2.md`](tickets/r2.md).

## Open Tickets

| Ticket | Title | Branch | Blocked by |
| ------ | ----- | ------ | ---------- |
| **T-075** | Docs and agent rules alignment | `main` | — |
| **T-076** | Preview safety and performance baseline | dashboard | — |
| **T-077** | Open surface decisions (Boss Rezi Q&A) | `main` | — |
| **T-078** | Design foundation: tokens, fonts, global layer | `redesign/monolith` | T-075, T-077.3 |
| **T-079** | Chrome and motion system | `redesign/monolith` | T-078, T-077.1, T-077.3 |
| **T-080** | Home | `redesign/monolith` | T-079, T-077.4, T-084.2 |
| **T-081** | Work index and case pages | `redesign/monolith` | T-079, T-077.2, T-077.6, T-084.3 |
| **T-082** | Workflow page | `redesign/monolith` | T-079, T-077.5, T-084.4 |
| **T-083** | Contact page | `redesign/monolith` | T-079, T-076.2, T-084.5 |
| **T-084** | Approved copy, ID and EN, per surface | `redesign/monolith` | Boss Rezi approval per block |
| **T-085** | Quality gates, cleanup, SEO | `redesign/monolith` | T-080 to T-083 |
| **T-086** | Cutover | `main` ← `redesign/monolith` | T-085, Boss Rezi approval |

## Queue Rules

- This file lists unfinished work only.
- Do not reuse task IDs.
- Keep completed work in the ticket files and git history.
- `PROJECT_STATE.md` keeps only the short snapshot and active focus.
