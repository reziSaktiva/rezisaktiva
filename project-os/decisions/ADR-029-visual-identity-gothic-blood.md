# Decision ADR-029

### Title

R1 visual identity migration to absurdism, surrealism, Gothic Art, dark and blood (visual skin; IA/copy unchanged)

### Status

Superseded by [ADR-052](ADR-052-monolith-editorial-design.md) (2026-11-17). Stays in force on production until cutover ([ADR-053](ADR-053-redesign-migration-integration-branch.md)).

### Date

2026-09-04

### Decision

1. **Production visual identity is replaced.** New art direction = **absurdism**, **surrealism**, **Gothic Art**, **dark and blood**. Operational reading locked **T-038.1** (table in v15): deadpan refusal of SaaS tropes; one quiet surreal juxtaposition; gothic as structure (cathedral/manuscript), not sticker; blood = one wine/clot accent — not mall-goth, medical gore, NSFW, random chaos. **Horror splatter not used** (ADR-030 superseded by [ADR-031](ADR-031-selected-chrome-outline.md): selected = blood outline). This replaces the visual skin currently in code (cream canvas, yellow chip `--chip-bg`, 3D elevation `--elev-3d`, Hess/Mazur chrome language) — not product replacement, not new pages.
2. **Visual skin only.** **Unchanged:** T-021 copy, IA and screen patterns (`04-ux/`), overlay behavior (Contact = Dialog, Quick Info from right, bottom project sheet, hamburger &lt;1024px), shadcn/ui + Tailwind v4 stack (ADR-028), SSG + `content/` (ADR-015), Motion + Lenis as motion foundation (no new library), visual SoT = production code + locked chat direction (ADR-024). **Changes:** palette, type, mood, chrome skin, and *visual* motion language (not job/flows).
3. **Working method = Q&A per surface, then code.** No big-bang restyle. Order: lock art direction → tokens → chrome → overlays → pages → system motion + docs. Each component cluster discussed in chat first, locked, then implemented. Inventory and gates in [`tickets/r1.md`](../tickets/r1.md) (**T-038** … **T-043**).
4. **Clarity still binding (UX1).** Gothic/surreal atmosphere **frames** first-viewport claims, does not hide them. SEA founder/PO ICP and “product builder” recall north star unchanged. No cliché mall-goth, no random chaos that breaks scan. Selected chrome = outline + accent text ([ADR-031](ADR-031-selected-chrome-outline.md)); splatter not used on any surface.
5. **ADR-028 point 2 “not a redesign” no longer applies to visual shape.** Stack, primitives, and theme-mechanism contract (class `dark`, cookie `rz-theme`, anti-flash) **remain** ADR-028. Cream + yellow + 3D `rezisaktiva` palette is **not** contract anymore.
6. **Default ship = dark; light on hold.** Locked **T-038.2**: new identity built dark. Light **not deleted** — old tokens commented in T-039 (archive). Chrome toggle **hidden** during hold (component + cookie remain). Not permanent dark-only. Mechanism detail: update [ADR-021](ADR-021-dark-mode-toggle-must-r1.md) 2026-09-04.
7. **T-031 metadata queued** until new tokens exist (**T-039**). Icons, share card, and `themeColor` must follow new art direction, not old palette.

### Reason

- Boss Rezi locked art direction (absurdism / surrealism / Gothic Art / dark and blood) and “visual skin only” boundary (2026-09-04). Same-day full-theme brainstorm requested mood validation before code; mood is now sufficient for ADR.
- ADR-028 intentionally froze visual shape so Astryx → shadcn migration would not become a stealth redesign. Stack migration **finished** (T-037). Redesign is now a separate product decision, not slipped into R1 polish.
- Q&A per surface prevents big-bang hard to review and keeps Documentation First: chat locks enter task/ADR follow-up before pixels spread.
- UX1 + ADR-002 stand: this site is home for product-builder evaluation, not a horror gallery. Darker art direction must still pass first-viewport clarity.

### Alternatives Considered

- Keep cream + yellow palette; only raise motion — rejected; Boss Rezi asked for whole-site theme change.
- Rewrite copy and/or IA at same time — rejected; locked “visual skin only”.
- Big-bang restyle all pages in one PR without Q&A — rejected; requested method = Q&A per component.
- Change stack (remove shadcn, full WebGL, new theme library) — rejected; ADR-028 stands for component system.
- Dark-only with no light trail — rejected; Boss Rezi asked to hold/comment light, not delete.
- Light-first still (old ADR-021) — rejected for this pass; ship dark.
- Toggle still visible, light = old cream palette — rejected; conflicts with new identity.

### Impact / Follow-up

- Backlog: [`tickets/r1.md`](../tickets/r1.md) (**T-038** … **T-043**).
- ADR-028: stack stands; point 2 “visual shape unchanged” **replaced** by this ADR. Brief update in ADR-028 file.
- ADR-025: UX patterns that remained then (About as own page, rest/active, Contact strip, Lenis, reduced-motion). **Later:** About = Home section (ADR-040); Workflow rest/active removed (ADR-042). 3D chrome + old palette visual language **no longer** required.
- ADR-006 / Hess–Mazur refs: still valid as layout *rhythm* already UX pattern; **not** palette or yellow chrome reference.
- ADR-021: updated 2026-09-04 (dark-first + light hold + hidden toggle).
- `product-discovery/06-engineering/design-tokens.md` + `app/globals.css` in **T-039**. `.cursor/rules/shadcn.mdc` / `code-discipline.mdc` (yellow pill mentions) in **T-043**.
- `04-ux/` unchanged except visual notes that conflict (yellow pill as contract) — T-043 follow-up, not IA rewrite.
- **T-031** ⏸️ until T-039 (icon/OG/`themeColor` assets).