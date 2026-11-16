# S-001 Tickets — Project OS English Agent Ecosystem

This file tracks the multi-session work approved in ADR-049. Public site locale copy in `content/` stays bilingual, `design-mockups/` stays archive, and project skills stay in `.cursor/skills/`.

---

## T-060 — ADR-049, S-001, and S-001 ticket file

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** approved plan `/Users/rezisaktiva/.cursor/plans/project_os_english_71caa6f7.plan.md`, `AGENTS.md`, `project-os/PROJECT_STATE.md`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| New docs in English | Editing the approved plan file |
| Existing IDs `T-001` through `T-059` | Reusing old task IDs |
| `T-059` remains open product work | Starting T-063+ early |
| `COMPLETE_TASK.md` freeze only | Full changelog translation |

### Subtasks

- [x] **T-060.1** — Write ADR-049 as Accepted from the approved plan.
- [x] **T-060.2** — Create `specs/S-001.md`.
- [x] **T-060.3** — Create this S-001 ticket file covering T-061 through T-074.
- [x] **T-060.4** — Update the language rule pointer in `AGENTS.md` only.

---

## T-061 — Rename Project Manager to Project OS

* **Status:** ✅ Done
* **Domain:** Documentation / Repository hygiene
* **Read first:** ADR-049, `specs/S-001.md`, `AGENTS.md`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| `product-discovery/` as product Source of Truth | Translating prose in this ticket |
| `.cursor/skills/` as the skills home | Creating `.claude/` |
| `design-mockups/` as archive | Reviving mockups as visual contract |
| IDs and filenames unless required by the rename | Starting T-063+ |

### Subtasks

- [x] **T-061.1** — `git mv project-manager project-os`.
- [x] **T-061.2** — Ensure `specs/`, `tickets/`, `context/`, and `AVAILABLE_TICKETS.md` exist.
- [x] **T-061.3** — Repoint every old Project Manager path in the repo.
- [x] **T-061.4** — Leave prose translation for later tickets.

---

## T-062 — Ticket queue, phase files, freeze changelog

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `specs/S-001.md`, `PROJECT_STATE.md`, old queue index, old phase folder

### Contract

| Keep | Forbidden |
| ---- | --------- |
| `T-059` as open product ticket | Closing or re-scoping T-059 |
| `AVAILABLE_TICKETS.md` lists unfinished work only | Keeping the old queue index after pointers are updated |
| Historical phase checklists in `tickets/` | Translating the archives now |
| English freeze banner on `COMPLETE_TASK.md` | Full changelog translation |

### Subtasks

- [x] **T-062.1** — Move phase checklists to `tickets/discovery.md`, `tickets/bootstrap.md`, `tickets/r1.md`, and `tickets/r2.md`.
- [x] **T-062.2** — Make `AVAILABLE_TICKETS.md` list `T-059` plus open S-001 tickets.
- [x] **T-062.3** — Remove the old queue index once pointers are updated.
- [x] **T-062.4** — Freeze `COMPLETE_TASK.md` with an English banner.
- [x] **T-062.5** — Update `PROJECT_STATE` Snapshot for the program without inventing product status changes.

---

## T-063 — English context pointer layer

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `specs/S-001.md`, `project-os/PROJECT_STATE.md`, `project-os/PROJECT_RULES.md`, `product-discovery/README.md`

### Subtasks

- [x] **T-063.1** — Write `context/README.md`.
- [x] **T-063.2** — Write `context/ctx-project.md`.
- [x] **T-063.3** — Write `context/ctx-product.md`.
- [x] **T-063.4** — Write `context/ctx-architecture.md`.
- [x] **T-063.5** — Write `context/ctx-development.md`.
- [x] **T-063.6** — Write `context/ctx-design.md`.

---

## T-064 — English skills, rules, and AGENTS door

* **Status:** ✅ Done
* **Domain:** Documentation / Agent workflow
* **Read first:** ADR-049, `AGENTS.md`, `.cursor/skills/`, `.cursor/rules/`

### Subtasks

- [x] **T-064.1** — Rewrite `AGENTS.md` as a concise English door.
- [x] **T-064.2** — Rewrite `.cursor/skills/project-os-navigator/SKILL.md`.
- [x] **T-064.3** — Rewrite `.cursor/skills/proactive-clarification/SKILL.md`.
- [x] **T-064.4** — Rewrite `.cursor/skills/work-report-simple/SKILL.md`.
- [x] **T-064.5** — Rewrite `.cursor/skills/docs-consistency-audit/SKILL.md`.
- [x] **T-064.6** — Rewrite the always-on rules in `.cursor/rules/`.

---

## T-065 — Translate living Project OS documents

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `project-os/PROJECT_STATE.md`, `project-os/PROJECT_RULES.md`

### Subtasks

- [x] **T-065.1** — Translate `project-os/README.md`.
- [x] **T-065.2** — Translate `project-os/PROJECT_RULES.md`.
- [x] **T-065.3** — Translate `project-os/PROJECT_OVERVIEW.md`.
- [x] **T-065.4** — Translate `project-os/ARCHITECTURE_OVERVIEW.md`.
- [x] **T-065.5** — Translate `project-os/DEVELOPER_WORKFLOW.md`.
- [x] **T-065.6** — Translate `project-os/PROJECT_STATE.md` without changing facts.
- [x] **T-065.7** — Translate `project-os/AVAILABLE_TICKETS.md`.
- [x] **T-065.8** — Add `project-os/specs/README.md` and translate `project-os/specs/S-001.md` if needed.

---

## T-066 — Translate product-discovery 01 and 02

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `product-discovery/README.md`

### Subtasks

- [x] **T-066.1** — Translate `product-discovery/01-business/`.
- [x] **T-066.2** — Translate `product-discovery/02-product/`.

---

## T-067 — Translate product-discovery 03 and 04

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `product-discovery/README.md`

### Subtasks

- [x] **T-067.1** — Translate `product-discovery/03-user/`.
- [x] **T-067.2** — Translate `product-discovery/04-ux/`.

---

## T-068 — Translate product-discovery 05, 06, and README

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `product-discovery/README.md`

### Subtasks

- [x] **T-068.1** — Translate `product-discovery/05-architecture/`.
- [x] **T-068.2** — Translate `product-discovery/06-engineering/`.
- [x] **T-068.3** — Translate `product-discovery/README.md`.

---

## T-069 — Translate ADR-001 through ADR-024

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `project-os/DECISIONS.md`

### Subtasks

- [x] **T-069.1** — Translate ADR-001 through ADR-024.
- [x] **T-069.2** — Translate their `DECISIONS.md` index rows.

---

## T-070 — Translate ADR-025 through ADR-048

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `project-os/DECISIONS.md`

### Subtasks

- [x] **T-070.1** — Translate ADR-025 through ADR-048.
- [x] **T-070.2** — Translate the remaining `DECISIONS.md` index rows.

---

## T-071 — Translate discovery, bootstrap, and R2 ticket archives

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `project-os/tickets/discovery.md`, `project-os/tickets/bootstrap.md`, `project-os/tickets/r2.md`

### Subtasks

- [x] **T-071.1** — Translate `tickets/discovery.md`.
- [x] **T-071.2** — Translate `tickets/bootstrap.md`.
- [x] **T-071.3** — Translate `tickets/r2.md`.

---

## T-072 — Translate R1 ticket archive

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** ADR-049, `project-os/tickets/r1.md`

### Subtasks

- [x] **T-072.1** — Translate `tickets/r1.md`.

---

## T-073 — Translate source comments and developer-facing strings

* **Status:** ✅ Done
* **Domain:** Engineering / Documentation
* **Read first:** ADR-049, `.cursor/rules/code-discipline.mdc`

### Subtasks

- [x] **T-073.1** — Inventory Indonesian outside `content/` and `design-mockups/`.
- [x] **T-073.2** — Translate comments and developer-facing strings.
- [x] **T-073.3** — Stop and ask if a string might be rendered product locale copy.

### Notes (2026-11-16)

- Translated developer comments/strings in `app/`, `lib/`, `proxy.ts`, and file-header comments in `content/*.ts` (locale copy objects unchanged).
- `design-mockups/` and `content/` locale strings left untouched.
- Resend inbox subject remains Indonesian via `CONTACT_EMAIL_SUBJECT` (`Pesan dari situs rezisaktiva`) for operational sorting; covered by unit test.

---

## T-074 — Consistency close and pointer fixes

* **Status:** ✅ Done
* **Domain:** Documentation / QA
* **Read first:** ADR-049, `project-os/AVAILABLE_TICKETS.md`, `project-os/specs/S-001.md`

### Subtasks

- [x] **T-074.1** — Confirm no old Project Manager paths remain.
- [x] **T-074.2** — Confirm no Indonesian remains in agent docs and skills.
- [x] **T-074.3** — Fix stale pointers collected during translation tickets.
- [x] **T-074.4** — Confirm `T-059` still matches Contact to Resend work.

### Notes

- Living docs no longer point at `project-manager/` as the active folder. Remaining mentions are historical: frozen `COMPLETE_TASK.md`, ADR-001 filename slug, and this ticket’s rename checklist.
- Agent docs / process skills / always-on rules scanned clean of Indonesian prose.
- Fixed `PROJECT_STATE.md` Snapshot (was still pointing Project OS next work at T-063). Added English language banners on `CONVERSATIONS.md` and `BRAINSTORM.md` (past entries unchanged). Removed T-072 helper artifacts (`.r1-*`, `.translation-*`).
- **T-059** still open in `tickets/r2.md` for Contact → Resend (T-059.2, T-059.5). Open queue is T-059 only.
- **PR #85 review follow-up:** finished remaining English gaps (`README.md`, `content/README.md`, `R1_COMPLETE.md`, baseline README, `PROJECT_RULES` leftover, `COMPLETE_TASK` AI warning header, `.prettierignore` comment); fixed ADR-049 decision #2 wording (`TASKS.md` → tickets); restored Indonesian Resend subject as `CONTACT_EMAIL_SUBJECT` with a unit test.
