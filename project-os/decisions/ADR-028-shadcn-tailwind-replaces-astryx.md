# Decision ADR-028

### Title

shadcn/ui + Tailwind CSS v4 replaces Astryx as component and styling system (post-R1 exit)

### Status

Accepted

### Date

2026-09-01

### Decision

1. **Replace UI stack.** Active component + token system = **shadcn/ui** (source in repo, CLI) + **Tailwind CSS v4**. This **replaces** ADR-018. Astryx packages (`@astryxdesign/core`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`, `@stylexjs/stylex`) **uninstalled** at migration end. **No hybrid** in finished state (one styling system — same rationale as ADR-018/ADR-026). Dual-boot Astryx + shadcn allowed on **`main` after T-032** (staged PRs), until Astryx removal in T-037.
2. **Not a redesign.** Current production visual shape stays the contract (ADR-024): yellow pill chrome + 3D elevation, `rezisaktiva` palette, theme-independent dark-ink Contact card, Quick Info from right, bottom project sheet, Hess–Mazur type/motion rhythm (ADR-025). What changes = component primitives and how tokens resolve, not layout, copy, or palette. Reference = `app/` code **before** migration + locked direction — not `design-mockups/`, not default shadcn (zinc/slate).
3. **ADR-026 evaluation complete.** R1 exit (`T-018`) happened. Astryx limits that triggered evaluation (left/right Drawer, non–full-width BottomSheet, StyleX compiler not wired to Turbopack) closed with shadcn primitives (`Sheet`, `Drawer`, `Dialog`) + CSS/Tailwind, not waiting on Astryx beta.
4. **Motion: yes, use [Motion](https://motion.dev/)** (`pnpm add motion`, import `motion/react`). Replace identity motion that is hand-rolled today (`Reveal`, `WordReveal`, `HeroWords`, `Magnetic`, `useContainerReveal`) and overlay enter/exit. **Lenis remains** (scroll inertia, ADR-025 — not Motion’s domain). **Page transitions** keep CSS rhythm locked ADR-025 (not View Transitions API, not Framer spectacle). Chrome hover color/elevation stays CSS. `prefers-reduced-motion` still required.
5. **Dark / light unchanged as product** (ADR-021 stands):
   - Default ship = **light**
   - Chrome toggle = Must; `prefers-color-scheme` stays Could (must not become default)
   - Persistence = cookie + `localStorage` key `rz-theme`; Next `cookies()` **only** in `app/layout.tsx`; do not regress existing anti-flash
   - New implementation: **`dark`** class on `<html>` (not Astryx `Theme` `mode` prop); tokens in `:root` (light) and `.dark` (dark); Tailwind v4 `@custom-variant dark` binds to class, **not** OS media query
   - Do **not** install `next-themes` unless proven to use same SSR cookie without hydration flash — default = keep `lib/theme-mode.ts` + `ThemeModeProvider`
   - Yellow chip colors still computed from React mode (`useChipColorVars`), not CSS `light-dark()`
   - Contact modal stays **theme-independent** (dark-ink card)
6. **MCP required in project** (`.cursor/mcp.json`, committed):
   - Official **shadcn**: `pnpm dlx shadcn@latest mcp init --client cursor`
   - Official **Motion AI Kit**: `npx motion-ai` (project scope + Cursor; Motion-hosted MCP, no stale API token)
   - **Remove** `xds` server (Astryx) after Astryx unused
   - Do **not** install unofficial community Tailwind MCP — Tailwind conventions live in shadcn skill + v4 docs
7. **Locked shadcn config:** Next.js App Router, Tailwind v4, **Radix** base, RSC on, **lucide** for generated components; brand chrome icons stay `overlay-icons.tsx` (shapes do not follow default Lucide). Generated files in `components/ui/` + `lib/utils.ts` (`cn`). Page composition stays in `app/[locale]/_components/`.
8. **Components to add** = those with production counterparts, not full catalog. Forbidden to add Sidebar, Chart, Command palette, Sonner, Calendar just because templates exist.
9. **Docs & agent rules** move in closing task: `design-tokens.md`, `code-discipline.md`, `dependency-strategy.md`, `.cursor/rules/xds.mdc` replaced with shadcn rule, `AGENTS.md`, `ARCHITECTURE_OVERVIEW.md`. StyleX / T-013.4 **closed as gap** — not wired; that path removed with Astryx.
10. **Order vs T-031:** migration **T-032…T-037 prioritized**. T-031 queued after T-037 (both touch `app/layout.tsx` / head). Locked Boss Rezi 2026-09-01.

### Reason

- ADR-026 locked: shadcn evaluation only after T-018; T-018 finished 2026-08-31. Boss Rezi requested migration, not staying on Astryx.
- Astryx beta did not close gaps already felt in R1 (overlay direction, full-width sheet, StyleX + Turbopack). shadcn provides `Dialog` / `Sheet` / `Drawer` as primitives, source in repo, and MCP/CLI equally AI-friendly.
- One styling system in finished state avoids two token/convention sets (ADR-018 rejected coexistence).
- Motion is already part of identity (ADR-017/025) but implementation is custom IO/CSS; `motion` library is Boss Rezi’s SoT (motion.dev), tree-shakeable, with `useReducedMotion`.
- R1 theme contract (light default, toggle, cookie anti-flash) was expensive to polish; migration must not repeat 2026-08-16 flash bug.

### Alternatives Considered

- **Stay on Astryx** until full-width Drawer/sheet primitives exist — rejected; R1 already exited; StyleX/Turbopack gap has no wiring plan.
- **Hybrid Astryx + shadcn** in production — rejected (ADR-018/026).
- **Plain Tailwind without shadcn** — rejected; Boss Rezi still wants component relation + MCP, not utility-only.
- **`framer-motion` (legacy package) or GSAP** — rejected; SoT = [motion.dev](https://motion.dev/) package `motion`.
- **`next-themes` as theme source** — not chosen as default; flash/hydration risk vs locked SSR cookie ADR-021.
- **Community Tailwind MCP + paid shadcn.io** — rejected; not official SoT, adds unnecessary surface.

### Impact / Follow-up

- Backlog: [`tickets/r1.md`](../tickets/r1.md) (**T-032** … **T-037**).
- ADR-018 **superseded** by this ADR. ADR-021, ADR-017, ADR-025, ADR-019, ADR-022, ADR-024, ADR-027 **still apply** (product behavior); only component mechanism changes. **Visual shape** (palette/chrome) later replaced **[ADR-029](ADR-029-visual-identity-gothic-blood.md)** — shadcn + Tailwind stack in this ADR **stands**.
- At T-037: update `product-discovery/06-engineering/` (tokens, dependency, code-discipline, README), `ARCHITECTURE_OVERVIEW.md`, `AGENTS.md`, `.cursor/rules/`.
- StyleX compiler (T-013.4 / T-027 note) **not done** — gap closed by removing Astryx.

### Update — 2026-09-04 (ADR-021 / T-038.2)

Point 5 **“Default ship = light”** **no longer binding**. Default ship = **dark**; light on hold; toggle hidden during hold. Cookie `rz-theme` + `html.dark` remain.

### Update — 2026-09-04 (ADR-029)

Point 2 **“not a redesign / visual shape unchanged”** **no longer binding**. R1 visual identity migrates to absurdism / surrealism / Gothic Art / dark-blood (**ADR-029**). Stack decision (shadcn + Tailwind v4, Motion, `html.dark`, cookie `rz-theme`) **stands**.

### Update — 2026-09-02

Boss Rezi narrowed **PR #58 to T-032 only**. T-033…T-037 = separate PRs. Dual-boot allowed on `main` after T-032 merge; point 1 “work branch only” replaced. End state still non-hybrid (T-037).

### Update — 2026-09-01

Boss Rezi locked **priority:** T-032…T-037 above T-031. Point 10 above replaces “T-031 first” order.