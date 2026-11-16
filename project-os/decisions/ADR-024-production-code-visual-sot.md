# Decision ADR-024

### Title

Production code (Astryx) replaces HTML mockups as the visual source of truth

### Status

Accepted

### Date

2026-08-21

### Decision

1. **HTML mockups in `design-mockups/` are deprecated as a design reference.** That folder is an **archive** of the R1 port (Tailwind CDN + static HTML). It is not a binding visual contract for new UI/UX work. Do not align code to mockups, do not require new mockups before code, and do not treat mockups as "more correct" than the implementation.
2. **Visual source of truth going forward = production code** (`app/`, built `rezisaktiva` theme, Astryx components per ADR-018) **+ Boss Rezi's chat instructions**. Design iteration happens directly in Next.js. HTML mockup files are **not** updated to "follow" new changes.
3. **Screen patterns / IA / UX principles** in `product-discovery/04-ux/` remain the baseline (ADR-014 + overrides ADR-019...ADR-023). Only the **pixel/visual contract** changes: previously HTML mockups; now code. Existing canvas/accent tokens remain in the built theme (historical source: `shared.css`); new token changes are locked in code theme, not in mockups.
4. **First work** under this rule: About page design improvement. Other pages are not required to "return to the mockup"; later visual changes also start from code.
5. Agent rule `.cursor/rules/ui-ux-mockup-check.mdc` (filename retained) **is inverted in content**: study the existing implementation, follow design direction in chat/task, verify against code + direction - not against the HTML archive.

### Reason

- All existing R1 design in mockups has been ported to code (T-013...T-017, T-019, T-020, T-022). Keeping two canvases (HTML Tailwind vs Next/Astryx) forces double synchronization and slows iteration.
- Mockups use Tailwind CDN; production uses Astryx (ADR-018). Copying mockups as visual SoT locks the prototyping stack that has been left behind.
- Boss Rezi wants to improve About without first changing the HTML archive.

### Alternatives Considered

- HTML mockups remain global SoT; every design change updates HTML first, then code - rejected; R1 port is complete.
- Deprecate only for About; other pages stay mockup-first - rejected; Boss Rezi chose global deprecation.
- Move visual SoT to Figma - rejected for now; iterate directly in code + chat.
- Delete `design-mockups/` - not done; archive remains useful as R1 history, not a living reference.

### Update - 2026-09-03 (ADR-028)

The visual SoT decision (production code + Boss Rezi direction; `design-mockups/` archive) **remains**. Component/token mechanism changes to shadcn/ui + Tailwind CSS v4 - not Astryx (ADR-018 superseded). Living reference = `app/` + `app/globals.css` tokens + already-skinned primitives.
