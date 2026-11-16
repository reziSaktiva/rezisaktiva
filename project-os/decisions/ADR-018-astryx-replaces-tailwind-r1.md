# Decision ADR-018

### Title

Astryx (component library + StyleX + theme CSS) replaces Tailwind CSS + CSS variables as the R1 styling/token system

### Status

Superseded (ADR-028, 2026-09-01)

### Date

2026-08-13

### Decision

R1 uses **Astryx** (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`) as the component system + visual token source, **replacing** the Tailwind CSS + CSS custom properties contract previously locked in `design-tokens.md` (T-009, ADR-016).

* Tailwind (`tailwindcss`, `@tailwindcss/postcss`) is **uninstalled**; `postcss.config.mjs` is removed.
* Global CSS (`app/globals.css`) loads `@astryxdesign/core/reset.css` + `@astryxdesign/core/astryx.css` + `@astryxdesign/theme-neutral/theme.css`.
* Root layout (`app/layout.tsx`) wraps the subtree with `<Theme theme={neutralTheme} mode="light">` - light remains default per baseline; dark is activated via the `mode` prop, not a manual `.dark` class.
* Initial theme: `@astryxdesign/theme-neutral` (muted minimal). Brand/accent color customization (ink `#0B1220` + teal `#0F766E`) follows later via `astryx theme`/`astryx theme add`, **not** direct `--color-*` overrides in `:root`.
* Astryx AI agent docs are generated into the **project rule** `.cursor/rules/xds.mdc` (`alwaysApply: true`) - not `AGENTS.md` (core project navigation document, must not be overwritten) and not a global user rule.
* The `astryx` script is added to `package.json` for reliable CLI invocation (`node node_modules/@astryxdesign/cli/clients/cli/bin/astryx.mjs`).

### Reason

* Boss Rezi wants R1 UI components built on a ready-made AI-friendly design system (Astryx: 155 components, structured CLI docs, MCP server) - not hardcoded components from scratch on pure Tailwind utilities.
* Astryx is intentionally designed so AI coding agents do not "guess" props/patterns (an issue explicitly called out in its docs: models have a 0% pass rate answering convention questions without docs) - matching this project's AI-agent-heavy workflow (see `AGENTS.md`, `project-os-navigator` skill).
* React 19 (Astryx peer dependency) is already satisfied by the existing stack (`react@19.2.8`).
* A "coexist with Tailwind via bridge" option (`tailwind-theme.css`) exists in Astryx docs, but Boss Rezi chose a **full replacement** to avoid two styling token/contract sources running in parallel (aligned with `dependency-strategy.md`: few, intentional dependencies - not stacked styling layers).

### Impact

* `product-discovery/06-engineering/design-tokens.md` - the "Tailwind CSS + CSS variables" contract (Decision Log) is updated to Astryx + StyleX + theme CSS; old color/font tokens (`--color-brand`, etc. in `:root`) become directional references, not the active implementation source.
* `product-discovery/06-engineering/dependency-strategy.md` - new dependencies (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`) are recorded as intentional exceptions to the "few dependencies" principle; Tailwind is removed from devDependencies.
* `app/globals.css`, `app/layout.tsx`, `app/page.tsx` - migration to Astryx (see details above).
* `.cursor/rules/xds.mdc` - new rule (Astryx agent docs, auto-generated + frontmatter added manually).
* Does not change `ux-principles.md` / Core Principles (UX1-UX7) - Astryx still obeys clarity-first; it only changes *how* tokens/components are implemented.
* StyleX bundler plugin (for advanced customization via `xstyle` prop) is **not** set up yet in `next.config.ts` - R1 component baseline still uses Astryx components without `xstyle` overrides; add it when needed (separate task, see notes in `dependency-strategy.md`).

### Alternatives Considered

* **Coexist (Astryx + Tailwind bridge)** - rejected; adds CSS layer complexity (`@layer` ordering) for marginal benefit on a site as lean as R1.
* **Stay with pure Tailwind + CSS variables (no component library)** - rejected; Boss Rezi wants AI agents to have ready-made component "rails" that reduce inconsistent/out-of-convention UI risk.

### Update - 2026-09-01

**Superseded by [ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md).** After R1 exit (`T-018`), the UI stack moved to shadcn/ui + Tailwind CSS v4. This ADR remains the historical R1 decision trail, not the active styling contract.
