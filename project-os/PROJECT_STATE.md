# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation — **T-059** 🟡 (ADR-047); **S-001** ✅ Project OS English (ADR-049); **T-058** ✅; **T-057** ✅; **T-056** ✅; R1 remains exited
* **Top Next Tasks:** **T-059.2** — Resend domain + Preview/local secrets (Production is already filled), then **T-059.5** inbox — [`AVAILABLE_TICKETS.md`](AVAILABLE_TICKETS.md) / [`tickets/r2.md`](tickets/r2.md)
* **Blocker:** None
* **Known Issues:** None (KI-001 / KI-002 closed: `rezisaktiva` theme = `shared.css` mockup)
* **Ticket queue:** [`AVAILABLE_TICKETS.md`](AVAILABLE_TICKETS.md) lists open work only. Ticket history lives in [`tickets/`](tickets/) (`discovery.md` / `bootstrap.md` / `r1.md` / `r2.md` / `s001-project-os-english.md`) + [`R1_COMPLETE.md`](R1_COMPLETE.md)
* Phase/mode details are in the sections below. Completed/ADR history: see `COMPLETE_TASK.md` (⚠️ AI must not read unless instructed) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-11-16 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 exited; **T-059** 🟡 (**ADR-047** Resend form); descriptive case titles **T-057** ✅ (**ADR-045**); case depth **T-058** ✅ (**ADR-046**); R2 magnet **T-056** ✅ (**ADR-044**) |
| Overall Progress | R1 T-001–T-055 closed; **T-023** ❌; **T-056** ✅; **T-057** ✅; **T-058** ✅; **T-059** 🟡 |
| Project Status | R1 exited — destination ready for evaluation; **v14** ✅; **v16** ✅ (Home hero-only); **v17** ✅ (About/Workflow); **v15** ✅; **v13** ✅ (T-031); **v19** ✅ (T-054); **v10** ✅ (**T-023** ❌) |

---

## Current Focus

* Product Discovery **completed** (baseline 01–06 + T-007 exit).
* Repository & Bootstrap **completed** (`tickets/bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean shipped in code: Home (hero + `#about`), Workflow, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, T-021 copy (`/workflow` content = ADR-042). Visual reference: production code (ADR-024).
* Active phase: **Validation**. **T-059** 🟡 (Contact Resend form, ADR-047). **S-001** ✅ (Project OS English agent ecosystem, ADR-049). **T-058** ✅. **T-057** ✅. **T-056** ✅. R1 polish **T-055** / **T-054** / **T-043** remain Done.
* **R1 Copy:** **T-021.1–T-021.7 ✅**. **T-046…T-051** ✅. **`/workflow` content superseded by ADR-042** (not T-021.3 offers/values/accordion). Home has no portrait. About photo is still an Unsplash placeholder (not an exit blocker).
* **Engineering notes:** StyleX/Turbopack gap (T-013.4) closed by removing Astryx. v14 release **T-037.7** ✅. **T-038…T-043** / **v15** ✅. **T-055** / **v20** ✅. **T-031** / **v13** ✅. **T-054** / **v19** ✅. No open R1 tasks.

---

## Active Conversation Mode

**Validation (T-059 Resend form 🟡; R2 magnet T-056 ✅; descriptive cases T-057 ✅; case depth T-058 ✅)**

Allowed:

* **T-059** Contact form → Resend (ADR-047): Route Handler, secrets, submit/failure UI; domain DNS Q&A if needed; **not** a `/contact` route
* Bugs / regressions on live R1–R2 surfaces (including `/[locale]/projects/[slug]` cases)
* **T-038…T-043** visual identity (skin only, ADR-029) — Q&A per surface, then code; **not** copy rewriting except **T-046…T-048** and **`/workflow` content (ADR-042)**; Home IA follows **ADR-032** + **ADR-037** + **ADR-038** (lede + two-line h1, Now in About) and **ADR-041** (footer ribbon on Home after `#about`); About vs Workflow follows **ADR-035**; Workflow surface follows **ADR-042**; Workflow living background = **T-054** (Cathedral Breath, follows docs; not MP4)
* R1 polish that does not add pages (a11y, parity); **T-055** navbar skin (Q&A then code; chrome job remains)
* **T-031** metadata **completed** (T-031.1–T-031.5 ✅; T-039 tokens already done)
* Update `AVAILABLE_TICKETS.md` / `PROJECT_STATE.md` / relevant ticket; `COMPLETE_TASK.md` frozen (ADR-049)

Not allowed (unless explicitly requested):

* Remove M10 sheet; make tiles link directly to live/repo; add `/work/[slug]`; CMS; blog; R3 without ADR
* Rewrite T-021 copy or change IA/overlay behavior without a new ADR (Home h1: **ADR-038**)
* Change the Product Discovery baseline without a new ADR (visual tokens = T-039 follows ADR-029)
* Install `xstyle` / StyleX compiler, or reinstall Astryx (T-013.4 gap is already closed)
* Add T-033…T-037 to PR #58 (that PR is T-032 only; v14 is already Done)
* Big-bang restyle without Q&A cluster (v15 gate)

---

## Known Issues

None open. KI-001 (theme toggle color) and KI-002 (light background) were closed on 2026-08-19 (at that time: built `rezisaktiva` theme mapped mockup `--c-*` to Astryx tokens). Live tokens are now in `app/globals.css` (ADR-028); chrome toggle/Contact use brand + accent hover.

---

## Recent Decisions (Summary)

Latest ADRs: **ADR-050** (fitted wave and UI review skills). **ADR-049** (Project OS English agent ecosystem; folder rename + tickets/specs/context; **S-001**). **ADR-048** (canonical `https://www.rezisaktiva.space`; not `vercel.app`). **ADR-047** (Contact form → Resend; **T-059**). **ADR-046** (case pages deeper than sheet; CV facts; **T-058**). **ADR-045** (public work may use descriptive titles without brand names; **T-057**). **ADR-044** (R2 hybrid sheet + `/projects/[slug]`; **T-056**). **ADR-043** (no public CV download; supersedes ADR-023; **T-023** ❌). **ADR-042** (Workflow page is decision-driven). **ADR-041** (footer ribbon on Home). **ADR-040** (About = Home section). **ADR-039** (About hero artwork + lead). **ADR-038** (two-line display h1 + Workflow link). **ADR-037** (Home lede + Now in About). **ADR-036** superseded (wrapping). **ADR-035** (personal About vs `/workflow`; Workflow content superseded by ADR-042). **ADR-034** (display name + job; chips not on Home). **ADR-033** superseded (no Home footer). **ADR-032** (Home = one section; AI proof in About; Home teaser removed). **ADR-031** (selected chrome = blood outline + accent text; ADR-030 superseded). **ADR-029** remains for gothic-blood identity. ADR-028 remains for the shadcn + Tailwind stack. Index: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `AVAILABLE_TICKETS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
