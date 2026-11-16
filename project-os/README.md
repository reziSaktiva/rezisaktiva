# Project OS

This folder is the **Project Operating System (Project OS)** for **rezisaktiva** (a personal portfolio website).

This folder documents **how the project is run**: the collaboration process between the developer and AI assistants, project rules, status and progress, important decisions, change history, and discussion or brainstorming logs.

Documentation about **the product being built** (business, product, user, UX, architecture, engineering) does **not** live here. It lives in `../product-discovery/`.

> **Source of Truth:**
> * `project-os/` — how this project is run (process, rules, decisions, status).
> * `../product-discovery/` — what is being built (product knowledge).

---

# Purpose

* Serve as the central documentation hub for the project workflow.
* Record every important decision and its rationale (ADR).
* Track project status, milestones, and progress.
* Preserve change history and important cross-session conversation logs.
* Make collaboration between Boss Rezi and AI assistants easier.
* Keep documentation and implementation synchronized.

---

# Scope

`project-os/` includes:

* Project rules and working principles.
* Project summaries and overview.
* Current status, milestones, and progress.
* Important decisions (ADRs), including rationale and alternatives.
* Documentation and implementation change history.
* Discussion logs and idea bank from AI-assisted work sessions.

`project-os/` does **not** include:

* Detailed business, product, user, UX, architecture, or engineering documentation — see `../product-discovery/README.md`.
* Code implementation.

---

# Folder Structure

```text
rezisaktiva/
├── project-os/          → workflow, decisions, status (this folder)
│   ├── README.md
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE_OVERVIEW.md
│   ├── PROJECT_RULES.md
│   ├── PROJECT_STATE.md      → read the "Snapshot" section first
│   ├── AVAILABLE_TICKETS.md  → open-work index
│   ├── R1_COMPLETE.md        → frozen R1 summary (not living status)
│   ├── tickets/              → discovery / bootstrap / r1 / r2 (not vXX)
│   ├── DECISIONS.md          → ADR index
│   ├── decisions/            → one file per ADR
│   ├── DEVELOPER_WORKFLOW.md
│   ├── COMPLETE_TASK.md      → frozen historical archive; ⚠️ AI must not read unless instructed
│   ├── CONVERSATIONS.md
│   └── BRAINSTORM.md
└── product-discovery/        → product knowledge (business through engineering)
```

---

# Core Documents

| File | Description |
| ---- | ----------- |
| `PROJECT_OVERVIEW.md` | Project overview |
| `PROJECT_RULES.md` | Rules, principles, and document classification |
| `PROJECT_STATE.md` | Living status (Snapshot at the top) |
| `AVAILABLE_TICKETS.md` + `tickets/` | Backlog (phases: discovery, bootstrap, r1, r2) |
| `R1_COMPLETE.md` | Frozen R1 Hybrid lean summary (exit T-018) |
| `DECISIONS.md` + `decisions/` | ADR |
| `COMPLETE_TASK.md` | Frozen historical archive; no new entries unless Boss Rezi explicitly asks |
| `CONVERSATIONS.md` | Important discussion log |
| `BRAINSTORM.md` | Idea bank |

---

# Working Principles

* Documentation First
* Business First
* UX Driven
* AI Friendly
* Maintainability over Complexity

Convention: **code implementation follows documentation, not the other way around.**

---

# Related Documents

* `../product-discovery/README.md`
* `../AGENTS.md`
* `../.cursor/skills/project-os-navigator/SKILL.md`
