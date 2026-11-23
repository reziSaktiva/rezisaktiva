# S-002 Tickets — Monolith Redesign Migration

This file tracks the program approved in [ADR-052](../decisions/ADR-052-monolith-editorial-design.md) and [ADR-053](../decisions/ADR-053-redesign-migration-integration-branch.md). Spec: [`../specs/S-002.md`](../specs/S-002.md). Visual and interaction reference until cutover: `design-mockups/` (v5).

**Branch rule:** code tickets open pull requests into `redesign/monolith`. Documentation tickets (T-075, T-076 notes, ADR / ticket updates) may land on `main` and are merged into the branch afterwards.

**Copy rule:** a surface pull request does not merge until its copy subtask in T-084 is approved by Boss Rezi in ID and EN.

---

## T-075 — Docs and agent rules alignment

* **Status:** ✅ Done (2026-11-17)
* **Domain:** Documentation
* **Branch:** `main`
* **Read first:** ADR-052, ADR-053, `.cursor/rules/ui-ux-mockup-check.mdc`, `.cursor/rules/redesign-branch-flow.mdc`, `AGENTS.md`, `project-os/DEVELOPER_WORKFLOW.md`, `design-mockups/README.md`, `project-os/context/ctx-design.md`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| Production code stays the visual truth until cutover for anything not in S-002 | Telling agents the v5 mockups are pixel-exact contracts |
| `design-mockups/` v5 is the redesign reference until T-086 | Editing production code in this ticket |
| ADR-024 and ADR-052 point to each other | Deleting the old rule text without replacing its verification steps |

### Subtasks

- [x] **T-075.1** — Update `.cursor/rules/ui-ux-mockup-check.mdc`: during S-002, v5 mockups are the reference for redesign work; verification compares code against the mockup behavior and approved decisions; after cutover the original rule returns.
- [x] **T-075.2** — Update the `AGENTS.md` UI/UX row and `project-os/DEVELOPER_WORKFLOW.md` step 3 accordingly.
- [x] **T-075.3** — Update `design-mockups/README.md` and `project-os/context/ctx-design.md` (S-002, ADR-052, ADR-053).
- [x] **T-075.4** — Add a short "redesign branch" note to `product-discovery/06-engineering/deployment-infrastructure.md` and `cicd-pipeline.md` (Preview as staging, no new environment).
- [x] **T-075.5** — Check `.cursor/rules/` and `.cursor/skills/` for text that contradicts ADR-052 and list or fix each hit.
- [x] **T-075.6** — Add the always-on rule `.cursor/rules/redesign-branch-flow.mdc` (with the `.claude/rules/` pointer) and the `AGENTS.md` tree and Hard Rules lines: redesign branches start from `redesign/monolith`, are named `redesign/t-0XX-name`, and open PRs with `--base redesign/monolith`.
- [x] **T-075.7** — Add `.github/workflows/redesign-base-guard.yml`: fail any pull request into `main` from a `redesign/*` branch other than `redesign/monolith`.
- [x] **T-075.8** — GitHub rulesets set on 2026-11-17 (applied through the GitHub API with Boss Rezi's go-ahead): `main: PR required` (id 27440700) and `redesign/monolith: PR required` (id 27440702). Both: pull request required with 0 approvals, no deletion, no force push. Required checks: `lint-typecheck` on both, plus `guard` on `main`. Bypass: repository admin role, **pull request only** (no direct pushes). Direct pushes to either branch are now blocked, so docs-only changes and the `main` → `redesign/monolith` sync also go through pull requests. Review under Settings → Rules.

---

## T-076 — Preview safety and performance baseline

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Engineering / Operations
* **Branch:** none (Vercel dashboard, then notes in this ticket); optional `main` docs
* **Read first:** ADR-053 points 3–4, `product-discovery/06-engineering/deployment-infrastructure.md`, `environment-management.md`, ADR-047, ADR-048, `app/robots.ts`, `scripts/vercel-ignore-build.sh`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| Production env vars and domain unchanged | Sending real contact mail from Preview by accident |
| Canonical URL `https://www.rezisaktiva.space` | Indexing any Preview URL |
| `ignoreCommand` behavior (ADR-051) | Creating a separate staging project |

### Subtasks

- [x] **T-076.1** — Boss Rezi confirms in the Vercel dashboard: production branch is `main`; a Preview deployment exists for `redesign/monolith`; Preview responses are `noindex`. Record the result here. Agent check 2026-11-18: the branch alias `https://rezisaktiva-git-redesign-monolith-rezisaktivas-projects.vercel.app` exists, sends `x-robots-tag: noindex`, and sits behind Vercel SSO (302 to `vercel.com/sso-api`). Still open: Boss Rezi confirms the production branch is `main` in the dashboard. **Done 2026-11-23 (Boss Rezi, Preview walk):** Vercel Environments → Production tracks `main` (www.rezisaktiva.space attached); branch Preview is `noindex` behind Vercel login.
- [x] **T-076.2** — Decide the Preview Resend setup (test inbox in Preview-scoped env vars, or empty key so the mailto fallback shows). Record it; confirm it on the branch Preview later in T-083. **Decided 2026-11-18: empty key.** No `RESEND_*` variables in Preview scope, so the Preview form shows the mailto fallback and cannot send real mail. Production variables stay unchanged. Still open: Boss Rezi confirms in the Vercel dashboard that no Preview-scoped Resend key is set. **Done 2026-11-23 (Boss Rezi):** `RESEND_API_KEY` and `RESEND_FROM` are Production-only; no Preview-scoped Resend key.
- [x] **T-076.3** — Optional: assign a stable domain (for example `next.rezisaktiva.space`) to the branch in Vercel. Record the final review URL here. **Skipped 2026-11-18** (Boss Rezi). Review URL: `https://rezisaktiva-git-redesign-monolith-rezisaktivas-projects.vercel.app` (noindex, Vercel SSO).
- [x] **T-076.4** — Production baseline captured 2026-11-17 (lab only, Lighthouse 12; field data unavailable because the keyless PageSpeed API returned 429). Scores are Perf/A11y/BP/SEO, runs were parallel so TBT may be slightly inflated. See the table below.
- [x] **T-076.5** — Confirm the `ignoreCommand` still builds the branch when `app/` changes and skips docs-only commits. Local dry run 2026-11-17 passed (`app/` only: build, docs only: skip, docs plus `app/`: build; `vercel.json` points at `scripts/vercel-ignore-build.sh`). Still open: Boss Rezi confirms the same on a real Vercel deployment. **Done 2026-11-23 (Boss Rezi):** on real Vercel, docs-only merges (#102, #107) show "Canceled by Ignored Build Step" and code merges (#103, #105, #106) deploy.

**T-076.4 baseline, production `/en/...`, 2026-11-17, Lighthouse 12 lab (Perf/A11y/BP/SEO):**

| Page | Mobile | LCP | CLS | TBT | Desktop | LCP | CLS | TBT |
| ---- | ------ | --- | --- | --- | ------- | --- | --- | --- |
| Home | 51/100/100/100 | 4.2 s | 0.037 | 1650 ms | 85/96/100/100 | 1.4 s | 0 | 20 ms |
| Workflow | 61/100/100/100 | 3.5 s | 0.037 | 1800 ms | 80/100/100/100 | 0.9 s | 0 | 360 ms |
| Work index | 77/100/100/100 | 4.9 s | 0.036 | 90 ms | 96/96/100/100 | 1.2 s | 0 | 0 ms |
| Case (`/en/projects/minerank`) | 72/96/79/100 | 6.8 s | 0.036 | 20 ms | 89/96/78/100 | 1.9 s | 0 | 0 ms |

Weak spots: mobile TBT on Home and Workflow, mobile LCP on the case page, Best Practices 78 to 79 on the case page. Compare against these in T-085.3.

---

## T-077 — Open surface decisions (Boss Rezi Q&A)

* **Status:** ✅ Done (2026-11-17, ADR-054)
* **Domain:** Product / UX
* **Branch:** `main` (decisions recorded as ADRs or ticket notes)
* **Read first:** ADR-052 point 7, ADR-021, ADR-027, ADR-032, ADR-037, ADR-038, ADR-040, ADR-041, ADR-042, ADR-044, ADR-045, `product-discovery/04-ux/`, `design-mockups/`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| One decision per question, answered by Boss Rezi | Assuming the mockup's omissions are decisions |
| An ADR (or an ADR update) for each material change | Coding a surface before its decision is recorded |
| UX1 first-viewport clarity | Adding new product features while deciding |

### Subtasks

- [x] **T-077.1** — Quick Info panel: keep, move, or retire. Record the result.
- [x] **T-077.2** — Project bottom sheet versus a direct case page (ADR-027 / ADR-044): choose the tile behavior and what stays of the sheet.
- [x] **T-077.3** — Light / dark toggle (ADR-021): remove, keep hidden, or keep as a feature of the new design.
- [x] **T-077.4** — Home information architecture: what the hero, About and footer contain, and how it relates to ADR-032 / 037 / 038 / 040 / 041.
- [x] **T-077.5** — Workflow structure: which sections of the mockup replace ADR-042's five sections.
- [x] **T-077.6** — Public project list (current four, hidden items, order) and imagery plan (screenshots only, portrait with the "This is not me" caption, any new photography).
- [x] **T-077.7** — Record each outcome as an ADR or a dated note here, then unblock the matching surface tickets.

---

## T-078 — Design foundation: tokens, fonts, global layer

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Engineering / Design
* **Branch:** `redesign/monolith`
* **Blocked by:** T-075 (rules), T-077.3 (theme decision, for the token structure)
* **Read first:** ADR-052, ADR-028, `app/globals.css`, `app/fonts.ts`, `app/layout.tsx`, `.cursor/rules/shadcn.mdc`, `.cursor/rules/code-discipline.mdc`, `node_modules/next/dist/docs/` (fonts, CSS), `design-mockups/shared.css`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| shadcn/ui + Tailwind v4 (ADR-028) | A second styling system or CSS-in-JS |
| SSG and Server / Client split | Hard-coded colors outside tokens |
| Locale routing and existing route structure | Removing old identity CSS that still serves unmigrated surfaces |

### Subtasks

- [x] **T-078.1** — Map the mockup tokens (ink, paper, cream, mute, rules, gutter, easings, radii = sharp) to Tailwind v4 theme variables.
- [x] **T-078.2** — Load Archivo (wordmark, width 125, weight 900), Barlow Condensed and Inter through `next/font`; update `app/fonts.ts`.
- [x] **T-078.3** — Add the type scale and utilities (`wordmark`, `display`, `copy`, `big`, `small`) and the paper-grain band as documented classes.
- [x] **T-078.4** — Define the dark / light behavior per T-077.3 and keep the anti-flash script working or remove it.
- [x] **T-078.5** — Fence old identity styles so they can be deleted surface by surface (naming or file split); no visual change yet on migrated surfaces' neighbors.
- [x] **T-078.6** — Verify: lint, typecheck, build, Preview. Local checks passed 2026-11-17 (typecheck, lint, test, build, Home and `/en/workflow` in the browser). Still open: Boss Rezi confirms on the Preview, and Inter loading is not yet confirmed (Tailwind generates `monolith` utilities only once a component uses them). Wave check 2026-11-18 on a local production build of `redesign/monolith` (`ae62458`): typecheck, lint (0 errors; 2 warnings in the `design-mockups/shared.js` archive), test (87), build pass; Archivo, Barlow Condensed and **Inter are loaded and in use** on `/en`; no console errors. Still open: Boss Rezi confirms on the Preview. **Done 2026-11-23 (Boss Rezi, Preview):** Archivo, Barlow Condensed and Inter load; paper base, `theme-color` #f8f8f8; no console errors.

---

## T-079 — Chrome and motion system

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Engineering / Design
* **Branch:** `redesign/monolith`
* **Blocked by:** T-078; T-077.1 and T-077.3 for what the chrome contains
* **Read first:** ADR-052, ADR-017, `.cursor/rules/motion.mdc`, `.cursor/skills/motion/SKILL.md`, `design-mockups/shared.js`, `design-mockups/shared.css`, existing chrome in `app/[locale]/_components/`, `package.json` (`motion`, `lenis`)

### Contract

| Keep | Forbidden |
| ---- | --------- |
| Motion and Lenis as the only motion libraries | Adding GSAP, three.js, or similar |
| `prefers-reduced-motion` honored | Hijacking scroll on touch devices |
| First paint not blocked by WebGL | Custom cursor hiding the native cursor on touch or in overlays |
| Keyboard and screen-reader access to nav | Losing locale switch behavior |

### Subtasks

- [x] **T-079.1** — Masthead header (big wordmark, Bandung local time, nav) and the scroll-up dock; mobile sheet menu; locale switch placement.
- [x] **T-079.2** — Footer with the dark contour-field background, wordmark, links, and the "write to me" magnetic button.
- [x] **T-079.3** — `ContourField` WebGL component: client-only, lazy, pauses off-screen, reacts to the pointer, static fallback when WebGL or reduced motion applies.
- [x] **T-079.4** — Lenis smooth-scroll provider: wheel only on fine pointers, native fallback for touch, reduced motion, dialogs and anchors; works with sticky and pinned sections.
- [x] **T-079.5** — Reveal primitives with Motion: split-line reveal, scrubbed words, clip-path image reveal with parallax, pinned scrubbed section, marquee.
- [x] **T-079.6** — Curtain page transition between routes and the custom cursor (with labels), both opt-out for reduced motion and touch.
- [x] **T-079.7** — Verify on Preview: desktop, tablet, 390 px phone, keyboard only, reduced motion. Local checks 2026-11-17: typecheck, lint, test (87), build pass; Home and `/en/workflow` render on desktop and 375 px with no console errors; header, mobile sheet, curtain and footer exercised by the lanes. Not yet exercised: keyboard-only walk, reduced motion and touch in the browser, tablet width, Preview. Open for Boss Rezi's Preview check. **Done 2026-11-23 (Boss Rezi, Preview):** desktop masthead + scroll-up dock + smooth scroll and the 375px Menu sheet (ID) accepted; keyboard walked in the T-085.1 lane. Reduced motion moves to T-085.2 (OS setting, on Boss Rezi's phone).
  - Wave check 2026-11-18, local production build of `ae62458`:
    - **Desktop (1366 px), keyboard only: pass.** Tab order is skip link, wordmark, nav, Contact, ID/EN, then content and footer. Every stop shows a visible ring. The Contact dialog moves focus in, traps Tab, and Escape returns focus to Contact. The scroll-up dock shows on scroll up and is `aria-hidden` with `tabindex=-1` links. A keyboard route change to `/en/workflow` leaves no curtain over the page.
    - **Tablet (768 px): fail, cosmetic.** The header clock `.mh-clock` touches the first nav link (0 px gap; the clock's right edge equals About's left edge). No horizontal overflow.
    - **Phone (390 px, touch emulation): Lenis off, custom cursor off, no horizontal overflow.** **Mobile sheet keyboard check fails:** the sheet opens on Enter, but focus stays on the Menu trigger outside the sheet, Tab walks the page behind it (main is not hidden), and Escape does not close it. The cause is `onOpenAutoFocus={(event) => event.preventDefault()}` in `app/[locale]/_components/site-header.tsx`. Fix in T-079.8.
    - **Reduced motion: not exercised in the browser** (the pane cannot emulate `prefers-reduced-motion`). Code guards are present in `smooth-scroll.tsx`, `page-transition.tsx`, `contour-field.tsx`, `motion-runtime.tsx` (`reducedMotion="user"`) and the `reveal/` primitives. Boss Rezi checks this on the Preview with the OS setting.
- [x] **T-079.8** — Fix the T-079.7 findings: (1) the mobile sheet moves focus inside on open (drop or replace the prevented `onOpenAutoFocus`), traps Tab, and closes on Escape; (2) give `.mh-clock` a gap from the nav at 768 px. Recheck keyboard at 390 px and the header at 768 px. **Done 2026-11-18:** dropped the prevented `onOpenAutoFocus`, so focus lands on Close menu, Tab stays in the sheet, and Escape closes it. Added `onCloseAutoFocus`, which returns focus to the Menu button unless the Contact modal took it. Added `column-gap: 24px` on `.mh-masthead`. Rechecked in the browser: at 390 px the keyboard flow works, including Contact from the sheet; at 768 px the clock and nav have a 24 px gap with no overflow; desktop is unchanged. Typecheck, lint, test (87), and build pass. Code review follow-up (PR #100): the Menu button is now a `SheetTrigger`, so Radix sets the ARIA and the `aria-controls` id matches. Focus returns with `preventScroll`, so About from the sheet and closing from the dock no longer jump to the top. The gap is now the token `--spacing-masthead-gap` (`clamp(12px, 2vw, 24px)`), so `/en` and `/id` fit at 768 px with 15 px gaps.

---

## T-080 — Home

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Product / Engineering
* **Branch:** `redesign/monolith`
* **Blocked by:** T-079; T-077.4; T-084.2 (copy)
* **Read first:** ADR-052, `design-mockups/home.html`, current Home in `app/[locale]/page.tsx`, `content/home.ts`, `content/about.ts`, `content/work.ts`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| SSG, ID and EN | Copy that is not approved (T-084.2) |
| UX1 first-viewport clarity | Dropping the SEO `h1` |
| Project facts from `projects.json` | New claims in project cards |

### Subtasks

- [x] **T-080.1** — Hero: contour field, three-line statement, lede, scroll cue, blur on scroll. **Done 2026-11-18** (`home-hero.tsx`): three-line `h1` and scroll cue are a T-084.2 placeholder.
- [x] **T-080.2** — About section: portrait reveal, scrubbed lead, supporting copy, link to Workflow. **Done 2026-11-18**: keeps the current redacted photo and caption with the clip reveal (wave decision). The lead and supporting copy are the existing About text, split at the sentence.
- [x] **T-080.3** — Work section: sticky title under staggered cards, hover blur with description. **Done 2026-11-18** (`home-work.tsx`, shared `project-card.tsx`): cards 1, 2, 3, 7 link to case pages. The title and link labels are a T-084.2 placeholder.
- [x] **T-080.4** — Marquee, pinned method section, decision log accordion (data from `content/`). **Not built 2026-11-18:** ADR-054 point 4 keeps the marquee, method and decision log on Workflow only, not Home. Close or reword with Boss Rezi. **Closed 2026-11-21 by decision (Boss Rezi):** ADR-054 point 4 keeps the marquee, method and decision log on Workflow only; Home stays as approved.
- [x] **T-080.5** — Delete the old Home components and styles this replaces. **Done 2026-11-18:** removed `home-hero-wallpaper.tsx`, `status-dot.tsx`, the hero media, the unused `home-motion.tsx` exports, and the old Home/About rules in `app/legacy-identity.css`. `home-motion.tsx` stays because it is shared.
- [x] **T-080.6** — Verify against the mockup and the ADR-052 gates; Boss Rezi reviews the Preview. Wave 2026-11-18: local production build checked, with no console errors. Still open: Boss Rezi reviews the Preview. **Done 2026-11-23 (Boss Rezi, Preview):** Home accepted (placeholder copy).

---

## T-081 — Work index and case pages

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Product / Engineering
* **Branch:** `redesign/monolith`
* **Blocked by:** T-079; T-077.2, T-077.6; T-084.3 (copy)
* **Read first:** ADR-052, ADR-044, ADR-045, ADR-046, `design-mockups/work.html`, `design-mockups/work-case.html`, `app/[locale]/projects/`, `content/work.ts`, `content/work-case.ts`, `content/work-sheet.ts`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| `/[locale]/projects/[slug]` routes (or the route chosen in T-077.2) | Brand names for anonymous cases (ADR-045) |
| Hidden items stay without a public route (ADR-044) | Invented facts |
| `work.test.ts` passing | Breaking slugs without redirects |

### Subtasks

- [x] **T-081.1** — Work index: floating glass nav, sticky giant title, two-column card grid with hover blur and name. Wave 2026-11-18: index, sticky giant title and 2-column card grid done. **Still open: the floating glass nav** needs a header (chrome) change. **Done 2026-11-21:** floating frosted glass bar on the Work index only (brand, nav, Contact, ID/EN pill kept by Boss Rezi); masthead and dock hidden there; other pages unchanged.
- [x] **T-081.2** — Case page: parallax hero, meta row, sticky lede with highlighted points, stack chips, gallery with reveals, next-project link. **Done 2026-11-18.**
- [x] **T-081.3** — Apply the T-077.2 outcome (sheet kept, changed, or removed) and update routing, links, and metadata. **Done 2026-11-18:** the sheet is removed and tiles go straight to `/[locale]/projects/[slug]` (ADR-054 point 2). `content/work-sheet.ts` was folded into `work-case.ts`.
- [x] **T-081.4** — Update or add unit tests for the work catalog and slugs. **Done 2026-11-18:** work tests were updated and `pnpm test` passes.
- [x] **T-081.5** — Delete the replaced work components and styles; verify on Preview. Wave 2026-11-18: deletion done (sheet, tile, live-links components and old styles). Still open: Preview check. Preview walk 2026-11-23: Work accepted except one bug: images using `ClipReveal` (Work cards, About photo, case images) stayed hidden when the page opened already scrolled past them (reload, Back), because IntersectionObserver counts the clipped box as invisible. Fixed in `redesign/t-081-reveal-fix` (reveal from on-screen geometry). **Done 2026-11-23:** Boss Rezi saw the top cards show after a scrolled reload on the PR #108 Preview.

---

## T-082 — Workflow page

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Product / Engineering
* **Branch:** `redesign/monolith`
* **Blocked by:** T-079; T-077.5; T-084.4 (copy)
* **Read first:** ADR-052, ADR-042, `design-mockups/workflow.html`, `app/[locale]/workflow/`, `content/workflow.ts`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| The decision-driven message of the page | Unapproved copy |
| ADR samples stay real records | Invented ADRs |
| SSG, ID and EN | Dropping the Contact call to action |

### Subtasks

- [x] **T-082.1** — Page head and the two-pane compare section with hover expand. **Done 2026-11-18:** the pane titles are a T-084.4 placeholder.
- [x] **T-082.2** — Sticky stacking rule cards. **Done 2026-11-18:** the rule cards use the existing five principles ("Five rules" stays open for T-084.4).
- [x] **T-082.3** — Pinned method section (reuse the T-079.5 primitive) and the ADR accordion. **Done 2026-11-18:** the accordion holds the real ADR-001, ADR-012 and ADR-024.
- [x] **T-082.4** — Closing call to action pointing to the Contact page. **Done 2026-11-18:** the CTA opens the Contact modal until T-083 replaces it with the page.
- [x] **T-082.5** — Remove the old Workflow components and the old living background; verify on Preview. Wave 2026-11-18: removal done (old `workflow-*` components, cathedral background and its test). Still open: Preview check. **Done 2026-11-23 (Boss Rezi, Preview):** Workflow accepted.

---

## T-083 — Contact page

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Product / Engineering
* **Branch:** `redesign/monolith`
* **Blocked by:** T-079; T-076.2; T-084.5 (copy)
* **Read first:** ADR-052 point 5, ADR-047, ADR-019, `design-mockups/contact.html`, `app/[locale]/_components/contact-modal.tsx`, `app/api/`, `content/contact.ts`, `content/data/email.json`, `product-discovery/06-engineering/environment-management.md`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| Resend delivery through a Route Handler (ADR-047) | `NEXT_PUBLIC_` for the API key |
| Pages stay SSG | Claiming "sent" without a successful response |
| `mailto:` fallback visible | Collecting more data than the form fields |
| Honeypot and server validation | Publishing hours or availability that are not facts |

### Subtasks

- [x] **T-083.1** — `/[locale]/contact` page: sticky portrait, info panel (location, email, links, current workplace), form section. Done 2026-11-21 (PR #103): portrait reuses the About placeholder `about-hero.jpg` (wave decision).
- [x] **T-083.2** — Form fields and validation (name, email, optional company, need, details); inline errors; sending, success, and failure states wired to the existing Route Handler. Update the Route Handler only if the payload changes. Done 2026-11-21 (PR #103): payload changed, so `lib/contact-mail.ts` validates every field; shadcn `native-select` added.
- [x] **T-083.3** — Replace every place that opened the modal (nav, footer, Workflow CTA, cases) with links to the page; remove the modal and its provider. Done 2026-11-21 (PR #103): cases had no modal trigger. Legacy `.ct-*` CSS and `overlay-icons.tsx` are now unused; left for T-085.6.
- [x] **T-083.4** — Update metadata, sitemap and `robots`; add the amended contact line to ADR-047 and `PROJECT_STATE.md`. Done 2026-11-21: metadata, sitemap and `ContactPage` JSON-LD in PR #103; `robots.ts` needed no change; ADR-047 amendment and `PROJECT_STATE.md` in docs PR #104 to `main`.
- [x] **T-083.5** — Verify on Preview: real send through the Preview setup from T-076.2, missing-secret failure, ID and EN, mailto fallback. Note 2026-11-18: T-076.2 chose an empty Preview key, so the Preview shows only the missing-secret path and the mailto fallback; the real send moves to the T-086.4 production smoke check. **Done 2026-11-23 (Boss Rezi, Preview):** ID form on the Preview returns 503 without a key and shows the "tidak terkirim" note with the mailto link; values kept. EN checked locally earlier. Real send moves to T-086.4.

---

## T-084 — Approved copy, ID and EN, per surface

* **Status:** ⬜ Open
* **Domain:** Content
* **Branch:** `redesign/monolith` (files in `content/`)
* **Read first:** ADR-052 point 6, ADR-049 (language rule), `content/README.md`, the mockup page for the surface, the current `content/*.ts`, ADR-045, ADR-046
* **Order and voice (Boss Rezi, 2026-11-18):**
  - **Order:** this ticket runs last, after the other S-002 build and quality work and before cutover (T-086). Until then, surfaces ship with placeholder copy reused from the live `content/`, marked `T-084.x placeholder`.
  - **Voice:** write as a professional recruiter or HRD reviewer would want to read the site. Visitors should picture Boss Rezi's skill at building applications from the work itself: the problem, the scope Boss Rezi owned, the decisions (real ADRs), and results already in the CV facts. No self-praise or explaining the skill. The Contract's "no new claims" rule still applies.

### Contract

| Keep | Forbidden |
| ---- | --------- |
| Boss Rezi approves each block in EN and ID before it merges | Merging a surface with unapproved copy |
| Facts from `projects.json` and the resume | New claims (hours, availability, clients, numbers) |
| Bilingual public copy, English developer comments | Translating without Boss Rezi's review of tone |

### Subtasks

- [ ] **T-084.1** — Chrome and footer copy (nav labels, footer call to action, legal line).
- [ ] **T-084.2** — Home copy (hero lines, lede, About, work descriptions, method, decision log intro).
- [ ] **T-084.3** — Work index and case copy.
- [ ] **T-084.4** — Workflow copy.
- [ ] **T-084.5** — Contact copy (panel, form labels, errors, success).
- [ ] **T-084.6** — Site metadata copy (titles, descriptions, share card text) with T-085.

---

## T-085 — Quality gates, cleanup, SEO

* **Status:** ✅ Done (2026-11-23)
* **Domain:** Engineering / QA
* **Branch:** `redesign/monolith`
* **Blocked by:** T-080 to T-083
* **Read first:** ADR-052 point 8, T-076 baseline, `.cursor/skills/review-work/SKILL.md`, `product-discovery/06-engineering/`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| ADR-052 gates as pass / fail | Lowering a gate to pass |
| SEO and canonical rules (ADR-048) | Leaving unused gothic styles or components in the build |

### Subtasks

- [x] **T-085.1** — Accessibility pass: keyboard, focus order, labels, contrast, accordion and form semantics, screen-reader check of nav and dock. **Done 2026-11-21:** keyboard, focus, landmarks, headings, form and accordion semantics checked on all pages; contrast fixes (locale switcher, clock, Workflow labels, Contact placeholders); menu sheet `aria-modal` and 44px targets; pinned method readable by screen readers; contour field settles after 4.5 s (WCAG 2.2.2). Accepted exceptions (Boss Rezi): dim scroll-reveal words on About and case points before scrolling.
- [x] **T-085.2** — Reduced motion and touch: every effect has a fallback; no scroll hijack on touch. Wave 2026-11-21: code fixes (reveals, parallax and case points hydration-safe under reduced motion; touch navigation scrolls to top; Lenis paused under the sheet), a11y-motion lane commit `f3e4bc5`. **Done 2026-11-23 (Boss Rezi accepted the evidence):** local production build rendered in Chrome with `--force-prefers-reduced-motion`: no custom cursor or Lenis (`<html>` without `has-cursor`/`lenis`), title lines in place, About lead plain (0 dimmed words vs 34), every `ClipReveal` open, all 11 case points on, Workflow shows the static method list; curtain off by code (not exercised at runtime). Touch: Lenis wheel-only and cursor/magnetic off on coarse pointers (a11y-motion lane, `f3e4bc5`).
- [x] **T-085.3** — Performance: Lighthouse and Core Web Vitals on the Preview, compared with the T-076.4 baseline; fix or document any regression. **Closed 2026-11-23 by decision (Boss Rezi):** the Preview sits behind Vercel login, so a local lab run stands in. Lighthouse 12, local production build of `73d3e8f` (final code), sequential runs, Perf/A11y/BP/SEO mobile | desktop Perf, mobile LCP vs baseline: Home 80/96/100/100 | 99, LCP 5.0 s (baseline 4.2 s, **+0.8 s**), TBT 150 ms (was 1650); Workflow 81/100/100/100 | 99, LCP 5.1 s (3.5 s, **+1.6 s**), TBT 60 ms (was 1800); Work index 79/100/100/100 | 98, LCP 5.5 s (4.9 s, **+0.6 s**); Case minerank 79/96/100/100 | 98, LCP 5.6 s (6.8 s, −1.2 s), BP 79 → 100; Contact 80/100/100/100 | 99 (no baseline). Desktop LCP 1.0 to 1.2 s on every page. Perf, BP and SEO are at or above baseline everywhere; A11y 96 is the accepted scroll-reveal exception. **Documented regression:** mobile LCP on Home, Workflow and Work is 0.6 to 1.6 s slower in this lab run (local server, no CDN, so it may not hold in production). T-086.4 must confirm it with PageSpeed on the live site and fix it if it holds.
- [x] **T-085.4** — Responsive review at 390, 768, 1024, 1440 px on real devices where possible. Wave 2026-11-21: no horizontal overflow and no clipped layouts at 390, 768, 1024, 1440 px on all six pages (browser emulation). **Done 2026-11-23 (Boss Rezi):** every page checked on Boss Rezi's phone on the Preview (Home, Work, a case page, Workflow, Contact): scrolling, no overflow or clipping, Menu, links. iOS Simulator unavailable (needs full Xcode).
- [x] **T-085.5** — Metadata, icons, share card and `themeColor` for the new identity (replaces T-031 outputs); sitemap and robots; redirects for changed routes. **Done 2026-11-21:** icons, favicon and share card regenerated from the REZI wordmark (Archivo vendored with full OFL, rendered by headless Chrome); `themeColor` and manifest = paper `#f8f8f8`; sitemap includes `/contact`; no redirects needed (no public route removed). Share card text is a placeholder until T-084.6.
- [x] **T-085.6** — Delete dead gothic CSS, components, and the old living background; shrink `app/globals.css`; confirm no unused dependencies. **Done 2026-11-21:** `app/legacy-identity.css` deleted and the cutover map applied in `globals.css`; Instrument Sans and Texturina removed; 12 unused `components/ui` files, the unmounted cursor ring, `vaul`, `lib/brand-chrome.json` and the Texturina vendor font removed. Visible changes: footer text now Inter, native scrollbar, light select dropdown, ink overscroll canvas.
- [x] **T-085.7** — Full test, lint, typecheck, and build run; Boss Rezi reviews every page on the Preview. **Done 2026-11-23:** typecheck, lint, test (88) and build pass on `redesign/monolith` (73d3e8f); Boss Rezi reviewed every page on the Preview (walk on 2026-11-23 plus the phone pass, case page included).

---

## T-086 — Cutover

* **Status:** ⬜ Open
* **Domain:** Operations
* **Branch:** `main` ← `redesign/monolith`
* **Blocked by:** T-085; Boss Rezi's explicit approval
* **Read first:** ADR-053 point 6 and 7, `product-discovery/06-engineering/deployment-infrastructure.md`

### Contract

| Keep | Forbidden |
| ---- | --------- |
| One merge into `main`, after approval | Merging before every gate is green |
| A rollback path ready before the merge | Deleting the tag or the old deployment |

### Subtasks

- [ ] **T-086.1** — Merge `main` into the branch one last time; rerun CI and the Preview checks.
- [ ] **T-086.2** — Tag `main` as `v1-gothic-final`.
- [ ] **T-086.3** — Open one pull request `redesign/monolith` → `main`; Boss Rezi approves and merges.
- [ ] **T-086.4** — Production smoke checklist: Home, Workflow, Work, a case, Contact (real send), both locales, robots, sitemap, share card, cookies and locale redirect; PageSpeed (mobile and desktop) on the live site against the T-076.4 baseline (moved from T-085.3); confirm or fix the mobile LCP regression noted there (Home, Workflow, Work).
- [ ] **T-086.5** — Watch production for 24 hours; if broken, use the Vercel previous-deployment rollback and revert the merge.
- [ ] **T-086.6** — Delete the integration branch; return `design-mockups/` to archive; restore ADR-024 as the visual source of truth; mark ADR-029 and ADR-031 historical; update `PROJECT_STATE.md`, `AVAILABLE_TICKETS.md`, and close S-002.
