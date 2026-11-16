# Design Tokens

> Status: **Baseline v1.2** — locked with Boss Rezi (2026-08-11; ADR-018 2026-08-13 superseded; UI toggle Must R1 via **ADR-021**, 2026-08-16; **ADR-028** / T-037.4, 2026-09-03; default ship dark + light hold **T-038.2** / ADR-029, 2026-09-04). Visual values **may iterate**; the current token contract = **shadcn/ui + Tailwind CSS v4** (`:root` / `.dark` in `app/globals.css`), **dark default**, light commented until the hold is lifted. Material structure/theme changes need a new ADR.

This document defines the token system and implementation mapping for the **rezisaktiva** portfolio site.

---

# Overview

R1 uses **shadcn/ui + Tailwind CSS v4** (**ADR-028**, replacing Astryx / ADR-018):

* **Tokens** in `app/globals.css`: the **shipped dark** palette + the light block **commented out** (hold T-038.2); `@theme inline` maps `--color-background` and related names to shadcn variables
* **Light** = tokens **on hold** (comment/archive) — not a shipped theme
* **Dark** = ship default: the **`dark`** class on `<html>` + `data-theme` (not `prefers-color-scheme` as the token source; `@custom-variant dark` binds to the class)
* **Dark-mode toggle in the UI** = Must R1 (**ADR-021**) **when light is live**; during the hold = **hidden** (component + cookie remain)
* Shipped palette = gothic-blood (ADR-029). Old cream/yellow palettes are not the contract. Not default shadcn zinc/slate. Not `astryx theme` / a built `theme/` file.

Aligned with UX: clarity first, lean surface, motion only when it strengthens hierarchy (UX1, UX3, Interaction §6).

Hex/font values below are an **initial direction**, not a rigid brand kit.

---

# Goals

* One token contract before UI bootstrap
* Avoid hardcoded colors scattered across components
* Prepare dark without forcing dual-theme polish in the MVP
* Respect a11y contrast (see `04-ux/ux-principles.md`)

---

# Typography

| Token | R1 direction | Notes |
| ----- | ------------ | ----- |
| `--font-display` | **Texturina** (OFL, Google Fonts via `next/font`) — blackletter/textura | Hero / h1 / section titles only. Not chrome. Not Pirata One |
| `--font-sans` / `--font-heading` | **Instrument Sans** (OFL) — grotesque | Body, nav, form, small titles. Not Inter/Roboto/Arial |
| `--font-mono` | Optional, thin | Only if About has a code snippet — not Must |

Type scale (direction):

| Step | Use |
| ---- | --- |
| `text-xs`–`sm` | Meta, footer, caption |
| `text-base` | Body |
| `text-lg`–`xl` | Subhead / supporting |
| `text-2xl`–`4xl` (+ display) | Heading / hero brand |

Final sizes + `line-height` lock at implementation; heading hierarchy stays logical per page (UX a11y).

---

# Color — Brand

Ship direction (T-039.1 / ADR-029): **cold black canvas + vellum + one wine accent**. Light = comment archive, not a living column.

| Token | Light (hold / archive) | Dark (ship) | Role |
| ----- | ---------------------- | ----------- | ---- |
| `--color-brand` / strong text | `#14181f` | `#E8E4DC` | Heading, brand |
| `--color-accent` | `#4c7a73` (archived teal) | `#6B1C23` wine | Selected outline (ADR-031), button hover |
| `--color-accent-muted` | archive | `#8A242E` | Blood hover, scrollbar thumb |
| `--chip-bg` / `--chip-fg` | `#fde047` / ink (archive) | `#141418` / vellum | Group tray when present; **not** yellow as identity |
| `--chrome-pill-*` | archive | wine / vellum | Leftover splatter tokens (ADR-030 superseded); live selected = outline |

Pick **one** accent; do not rainbow LinkedIn/GitHub satellites vs Email (Email stays the visual primary — ADR-014).

---

# Color — Neutral

| Token | Light | Dark (prepared) | Role |
| ----- | ----- | --------------- | ---- |
| `--color-bg` | `#edeae1` (archive) | `#0B0B0D` | Page background |
| `--color-bg-elevated` | archive | `#141418` | Section / leftover chrome tray |
| `--color-fg` | `#14181f` (archive) | `#E8E4DC` vellum | Primary text |
| `--color-fg-muted` | archive | `#8F8A82` | Meta |
| `--color-border` | archive | `#2C2C32` | Hairline |
| Native scrollbar (T-025.9 / T-043.2) | archive (old chip thumb) | Track `--color-background-muted`, thumb `--color-accent-muted`, hover `--color-focus` | Do not hide (T-025.8); same in Contact/QI/sheet overlays |

---

# Color — Feedback

R1 almost has no inline form/error UI. Minimal tokens:

| Token | Role |
| ----- | ---- |
| `--color-focus` | Keyboard focus ring — mix `--color-accent-muted` + vellum (T-043.2); not pure wine on the dark canvas |
| `--color-danger` | Reserve; rarely used in R1 |
| `--color-success` | Reserve; rarely used in R1 |

Do not build a full feedback design system before UI needs it.

---

# Spacing, Radius, Elevation

| Domain | R1 decision |
| ------ | ----------- |
| Spacing | 4px token scale in `globals.css` (`--spacing-*`) + Tailwind `gap-*`; consistent section rhythm |
| Radius | Medium for chips/controls when needed; **avoid** card-heavy layouts and `rounded-full` pill clusters in the hero |
| Elevation | Pages/cards: minimal shadow; hierarchy through type and space, not glow. **Not** a yellow 3D chip as identity. `--elev-3d` may remain in CSS; selected chrome **does not** use it (ADR-031). **Selected nav/switcher/hamburger:** 1px `--color-accent` border + `--color-text-accent` text. **Chrome buttons** (header/footer Contact, hamburger): flat (T-038.3 / T-040.1 / T-040.5). |
| Layout | First viewport = one composition (brand, headline, supporting, CTA, visual) — aligned with key screens. **Floor viewport 320px**; mobile chrome one row. Composition detail = production code (ADR-024) + `04-ux/key-screen-patterns.md` / `navigation-patterns.md` |

Visual anti-patterns: dashboard clutter, badge overlays on the hero, excessive card grids.

---

# Theme (Light / Dark)

| Aspect | R1 |
| ------ | --- |
| Default ship | **Dark** (T-038.2 / ADR-021 update 2026-09-04) |
| Dark tokens | **Yes** — `.dark` class on `<html>` (`html.dark`); gothic-blood palette lives here (T-039) |
| Light tokens | **Hold** — comment/archive, do not delete |
| Strategy | `ThemeModeProvider` + cookie `rz-theme`; during hold, ship forces dark. Do not use `next-themes` as the default |
| Chrome toggle | **Must R1** when light is live (**ADR-021**); **hidden** during hold |
| `prefers-color-scheme` | Could; do not replace the dark-hold default without Boss Rezi's decision |

UI toggle is Must when light is live (ADR-021). **Dark as ship default** is locked by T-038.2. Re-enabling light (gothic skin, not invert) = a task + ADR update, not a silent slip in v15.

---

# Motion

> Updated **ADR-017** (2026-08-12): motion rises to a **part of the R1 visual identity**, not merely minimal Could — with clarity still the top priority.
>
> Updated **ADR-025** (2026-08-24): craft level rises (Hess/Mazur: rhythm + motion, not palette). Lenis + page transition allowed as a custom layer. Page-transition rhythm uses dedicated tokens (`--duration-page-exit` / `--duration-page-enter` / `--delay-page-enter`) — not `--duration-medium`.
>
> Updated **T-043.1** (2026-09-08): page transition = hard cut + stutter frame (T-038.3). Not Hess scale 1s, not RGB/VHS, not the View Transitions API. Short duration (UX1). `--ease-page-transition` remains for sheet overlays.

| Level | R1 |
| ----- | --- |
| Must | No motion that sacrifices first-viewport clarity (UX1) |
| Signature | Motion is part of identity: scroll-triggered reveal, cursor-aware micro-interaction, fine easing/timing in the hero, CTA/tile hover, locale-switch transition — motion-technique inspiration from p5aholic.me (not its playground structure). **Plus (ADR-025 / ADR-042 / T-043.1):** smooth-scroll inertia (Lenis, window scroll; not native `scroll-behavior: smooth`); page transition hard cut + stutter frame (exit ~0.2s, enter ~0.16s, steps — not Hess scale). Rest/active accordion patterns are **not** Workflow/About surfaces anymore. **T-043.2 / 2026-09-15:** desktop fine-pointer = `cursor-ring` (grows on hover; overlay scrim = X icon, ADR-019); touch / `prefers-reduced-motion` = system cursor. Bloody-knife cursor removed. |
| Pause | Lenis **stops** when the Contact modal (`html.ct-lock`) or Quick Info (`html.qi-lock`) is open, so overlays do not drift with inertia |
| Reduced motion | `prefers-reduced-motion: reduce` → Lenis off; instant page change (no overlay); existing playables still honor the same media query |
| Do not | Heavy parallax, noise loops, motion that sacrifices clarity, motion that replaces the message instead of reinforcing it; transition overlays that stay `pointer-events: auto` after finishing |

Respect `prefers-reduced-motion`. Identity motion = the `motion` package (`motion/react`). Lenis + page stutter stay custom CSS/hooks — not the Motion domain, not the View Transitions API.

---

# Implementation mapping

```text
app/globals.css
  :root (light) + .dark (dark) + @theme inline + @custom-variant dark
        ↓
html.dark + data-theme (cookie rz-theme, ThemeModeProvider)
        ↓
shadcn (components/ui) + Tailwind utilities (token-backed)
        ↓
scoped className + craft CSS (.home-* .ct-* .qi-* .ps-* .page-vt-*)
```

| Layer | Contents |
| ----- | -------- |
| Token source of truth | `app/globals.css` (`--background`, `--foreground`, `--spacing-*`, `--size-element-*`, `--chip-*` elevated, `--color-*` craft, `--rz-scrollbar-*`) — **ADR-024** / **ADR-028** / **ADR-029**. Ship canvas/accent = gothic-blood (T-039), not cream/yellow mockup palettes. Light hold = comment archive in the same file. |
| Components | shadcn in `components/ui/` + surfaces in `app/[locale]/_components/` — no hardcoded hex/px |
| Local override | token-backed Tailwind utilities + scoped `className`. **Not** StyleX. Inline `style={{}}` or random hex/px in JSX are forbidden. Playbook: `code-discipline.md` |
| MD/MDX content | Does not store brand hex; styling through components |
| Brand customization | edit tokens in `globals.css` (light/dark pair). Not `pnpm theme:build` |
| Agent docs | `.cursor/rules/shadcn.mdc` + `.cursor/rules/code-discipline.mdc` |
| Figma / design file | Optional Later — these docs are enough for R1 bootstrap |

Shipped hex values lock in `globals.css` (gothic-blood). Cream/yellow mockup palettes = hold archive, not the contract. Later token changes happen in that file, not in mockups.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Styling | **shadcn/ui + Tailwind CSS v4** — replaces Astryx + StyleX (**ADR-028**; ADR-018 superseded) |
| Theme | Tokens in `app/globals.css` (`:root` / `.dark`); ship palette = gothic-blood (**ADR-029**). Cream + yellow pill **not** the contract |
| Default theme | **Dark** (T-038.2 / ADR-021 update 2026-09-04); light on hold |
| Dark | Class `html.dark` + cookie `rz-theme`; UI toggle = **Must R1 (ADR-021) when light is live**; during hold the toggle is hidden |
| Visual values | Canvas + accent in `globals.css` (living SoT = production code, ADR-024) |
| Motion | Part of visual identity (ADR-017), hierarchy-first; `motion/react` + Lenis + page overlay (ADR-025) |
| Native scrollbar | `--rz-scrollbar-*` in `app/globals.css`, not `--color-*` on `:root` |
| Component override | Tailwind tokens + scoped className; StyleX unused — `code-discipline.md` |
| Engineering baseline | ADR-016; styling: ADR-018 superseded by **ADR-028** |

---

# Success Criteria

1. Components do not scatter untokenized hex
2. Dark default is clear; adding light does not force a token rewrite (light = hold)
3. Visuals support clarity and soft Contact — not a generic purple template

---

# Related Documents

* `README.md` — this phase's documentation
* `../04-ux/ux-principles.md` — clarity, a11y, motion
* `../04-ux/key-screen-patterns.md` — S0–S3 blocks
* `monorepo-setup.md` — App Router / structure
* `dx-tooling.md` — lint/format (not tokens)
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-016-engineering-baseline-v1.md`
* `../../project-os/decisions/ADR-018-astryx-replaces-tailwind-r1.md` — superseded
* `../../project-os/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-os/decisions/ADR-029-visual-identity-gothic-blood.md`
* `../../project-os/decisions/ADR-017-motion-as-identity-r1.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/decisions/ADR-025-craft-motion-hess-mazur.md`
* `.cursor/rules/shadcn.mdc` — AI conventions when writing shadcn + Tailwind UI
* `code-discipline.md` — spacing, styling layers, Server/Client, SSG
* `.cursor/rules/code-discipline.mdc` — required agent summary
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
