# Key Screen Patterns

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-10). Material changes after this require a new ADR.

This document defines key screen patterns (content blocks & hierarchy) for R1 — **not** pixel wireframes or final design tokens.

---

# Overview

Five+ R1 surfaces plus **S5 R2 case page (ADR-044)**: **Chrome** (S0), **Home**, **About**, **Workflow**, **Contact** (modal), **Work index + project sheet** (S4), **Work case** (S5). Patterns support F1–F8.

---

# Purpose

* Provide a block blueprint for later copy & implementation
* Lock first-viewport hierarchy and soft Contact
* Defer visual craft to the next phase without leaving UX acceptance empty

---

# Screen Inventory

| Screen | Route | Main jobs |
| ------ | ----- | --------- |
| S0 Chrome | Global | J7, F1–F7 navigation |
| S1 Home | `/[id/en]/` | J1, J2, (J7) |
| S2 About | `/[id/en]#about` (Home section) | J4, E4 |
| S2b Workflow | `/[id/en]/workflow` | J4, E4 |
| S3 Contact | Global modal (not route, final — ADR-019) | J3 |
| S4 Work index + project sheet | `/[id/en]/projects` + M10 overlay (ADR-027) | J2 |
| S5 Work case | `/[id/en]/projects/[slug]` (ADR-044) | J2, share magnet |

---

# Pattern Notes

### S0 — Chrome

**Blocks:** name (Home link, display font) + job beside it (not a link, ADR-034) · primary nav **without Home** (Tentang / About, Proses Kerja / How I Work, Proyek / Projects — ADR-035) · language switcher · **theme toggle (ADR-021)** · **Quick info panel (ADR-022)** · (optional) thin availability in header/footer.

**Theme toggle (ADR-021):** dark/light control in chrome when **both** themes are live. Update 2026-09-04 / T-038.2: default ship **dark**; light is on hold; toggle is **hidden** until hold is lifted. On mobile, Contact remains outside the hamburger.

**Quick info panel (ADR-022):** global overlay (right-edge tab → drawer: bio, Services, Tools, Works index, Email, Links). Not a new route. Shown on all R1 pages **including Work index**; sheet M10 (ADR-027) is a separate overlay — do not hide Quick Info because of the sheet. Not a replacement for Contact modal or footer satellites.

**Rule:** Contact is always reachable in one tap; **nav + switcher always visible on desktop**; on mobile (<1024px), page nav + switcher may be in hamburger (ADR-020).

**Footer = Contact ribbon (ADR-025, ADR-041):** final ribbon on **Home** (after `#about`), **Workflow**, and **Work index** — large heading from locked copy + button that opens the **existing Contact modal** (not a new form) + legal row + LinkedIn/GitHub satellites. Header Contact button stays.

---

### S1 — Home

**Above the fold (must win):**

1. Positioning claim: **product builder** — two-line display `h1` at the top (line 1 top-left, line 2 bottom-right, ADR-038; **without portrait**)
2. Narrow lede on the **lower floor** of the first viewport, link to `/workflow`; hero wallpaper readable in the center. Wallpaper fades when scrolling to `#about`, returns when scrolling back to hero
3. One soft direction (to Workflow or Contact) — no forced form; Contact on Home = chrome button + modal + footer ribbon after About (ADR-041)

**Home = hero + About section (ADR-040).** Hero 100svh. Now in `#about`. No credibility line or work teaser.

**No portrait in Home hero.** Artwork is in S2 `#about`. Do not fill hero emptiness with a face cutout, blob, or stock Unsplash.

**Contact on Home (ADR-041):** no Contact section in the middle of the page. Footer ribbon `#contact-cta` after `#about`. Contact path = chrome button + modal + ribbon.

**Anti-pattern:** hero that is only a name without a claim; aggressive dual CTA (“Hire me” + pricing); stacking work catalog on Home.

---

### S2 — About

**Chrome label:** ID **"Tentang"** / EN **"About"** (ADR-035). Target: `/[id/en]#about` on Home (ADR-040). Not a route. Way of working is **not** here (S2b).

**Rest / active pattern (ADR-025):** **not** in About section (ADR-039) and **not** in Workflow (ADR-042). Lead = one paragraph always visible.

**Blocks in order:**

1. Section `#about` — display title (`h2`, same clamp as Home) + **Now** (`#now`, between title and lead) + full lead + **viewport artwork** + caption “This is not me”. **No** availability badge. **No** `#proof`.
2. Soft Contact CTA through chrome (header button / modal) and footer ribbon in Home layout (ADR-041), not a section inside About

**Anti-pattern:** chronological CV as the only form; essay without scanability; stacking process pipeline in About.

### S2b — Workflow

**Chrome label:** ID **"Proses Kerja"** / EN **"How I Work"** (ADR-035). Route `/[id/en]/workflow`. Content follows **ADR-042** (supersedes T-021.3 copy on this route).

**Interaction:** Chaos vs Decision-Driven comparison tabs (`AnimatePresence`); principle cards hover + `whileInView`; pipeline always readable (Human Lead vs AI); vault click opens ADR samples. **Not** rest/active accordion. Reduced-motion respected.

**Skin:** token canvas (no bitmap wallpaper). Living background = **cathedral dust** individual `position: fixed` motes (wallpaper). Each mote has a soft glow, 4-direction aperture starburst, and horizontal anamorphic flare (camera optics, not star stickers). Tracery gates and filigree flowers **removed** (**T-054.1–T-054.3** ✅, relocked in chat 2026-09-08; mote optics 2026-09-08). Reduced-motion / overlay lock = still frame. Full verification = **T-054.4**.

**Blocks in order:**

1. Hero — two-line claim + lede + *Chat Chaos* / *Decision-Driven Way* tabs
2. Five principles — bento/cards (Doc-First, Honest MVP, Decision Logs, Human Lead + AI, Production Truth)
3. Pipeline Discover → Design → Build → Ship — human vs AI roles in each step
4. ADR Vault — three real samples (ADR-001 / ADR-012 / ADR-024): Status, Context, Decision, Alternatives
5. Concise close; soft Contact CTA **not** a separate section — footer ribbon (S0)

**Anti-pattern:** “developer for hire” framing that shifts the brand; duplicate Contact CTA above footer; fictional ADRs that do not exist in `decisions/`.

---

### S3 — Contact

> **Final (2026-08-15, ADR-019):** Contact = global Dialog/Modal, **not** a separate page/route — T-016 decision is complete. Email + message form is allowed inside the modal. The rest below still applies.

**Blocks in order:**

1. Title + soft copy (when it is relevant to reach out; discussion expectation)
2. **Primary — Email** (visual & first order; mailto or address + copy) — *short form (email + message) per ADR-019 **delivers** to inbox (**ADR-047**); remains before Socials block*
3. **Satellites** — LinkedIn, GitHub (equal to each other, below Email)
4. Availability line if not already on Home
5. No calendar, pricing, WA, Instagram (form is exempt from this ban per ADR-019)

**Anti-pattern:** social icon row equal to Email; Contact *only* in footer without modal/Email primary; hard sell; Contact without tappable/visitable Email. Footer ribbon that **opens the same modal** (ADR-025) is not a replacement for primary Email inside the modal.

---

### S4 — Work index + project sheet

**Work index (`/projects`):** tile catalog (M9). **Click tile** opens **project sheet from bottom** (M10, ADR-027). From sheet: case page link `/projects/[slug]` (**ADR-044**) plus secondary Live (not Repo). Home has **no** work teaser (ADR-032).

**Sheet component:** shadcn `Drawer` from bottom (T-035, ADR-028), full width, skinned `.ps-*`. **Case page:** Next SSG route, Server Component — not a replacement for Drawer. Content deeper than sheet: period, stack, work points from CV / locked copy (**ADR-046**).

### S5 — Case page (R2)

**Route:** `/[locale]/projects/[slug]`. Content: sheet meta + depth (period, stack, sections); not merely repeating overlay skim. Projects chip active. Not `/work/[slug]`.

---

# Responsive Considerations

* **Desktop (≥1024px):** clear vertical hierarchy; horizontal nav; Work index tiles in grid.
* **Mobile (<1024px):** first viewport still contains the core claim without relying on hover; Work index stacks vertically; Contact Email remains most prominent in modal.
* **Narrow phones (production chrome composition, 2026-08-20):** **320px** floor; **375px** reference. Two-line display hero (ADR-038) **fits without clip or overflow-x**. Header chrome one row. Work index tiles may stack. Contact modal **fits in viewport** (scroll inside card if needed). Quick info tab does not collide with hero title. Visual reference = production code (ADR-024); `design-mockups/` archive.
* **Locale:** block layout same in `id` and `en`; only copy differs.
* ID/EN copy length may differ, with **equivalent meaning**.
* Visual reference: **production code** (`app/`, tokens in `app/globals.css`, shadcn + Tailwind — ADR-024 / ADR-028). `design-mockups/` is an R1 port archive, not the latest design decision.

---

# Success Criteria

* S1 first viewport passes the “who & for whom” test without long scrolling
* S1 = hero + `#about`; narrative in S2; way of working in S2b (ADR-042); work in S4; magnet URL in S5 (ADR-044). No `#proof`.
* S3 Email clear as primary; satellites limited to LinkedIn + GitHub
* S0 enables F3 (language switch) from every screen
* Meta/share & content readiness in `information-architecture.md` met before live
* Patterns are enough for Architecture/Engineering handoff without mandatory wireframes

---

# Decision Rules

* Changing Contact primary from Email → Boss Rezi decision + ADR update if material
* Adding form/WA/IG blocks to S3 R1 → rejected unless new ADR. Existing form **delivers** messages (**ADR-047**); calendar/WA/IG remain rejected.
* Visual detail (type, color, motion) → 06-engineering / design execution; do not lock here

---

# Current Status

| Item | Status |
| ---- | ------ |
| Key Screen Patterns | **Baseline v1.0** (this document) |
| Soft CTA | Email primary; LinkedIn/GitHub satellites; no WA/IG |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `user-flows.md`
* `navigation-patterns.md`
* `../03-user/insights.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-os/decisions/ADR-025-craft-motion-hess-mazur.md`
* `../../project-os/decisions/ADR-027-work-project-bottom-sheet-m10.md`
* `../../project-os/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-os/decisions/ADR-032-home-single-section.md`
* `../../project-os/decisions/ADR-033-home-without-footer.md` (superseded ADR-041)
* `../../project-os/decisions/ADR-041-home-with-footer.md`
* `../../project-os/decisions/ADR-035-about-workflow-split.md`
* `../../project-os/decisions/ADR-038-home-hero-two-line-workflow-link.md`
* `../../project-os/decisions/ADR-039-about-hero-artwork-lead.md`
* `../../project-os/decisions/ADR-040-about-as-home-section.md`
* `../../project-os/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-os/decisions/ADR-046-case-deeper-than-sheet.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
