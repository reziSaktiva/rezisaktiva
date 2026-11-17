## Decision ADR-052

### Title

Adopt the Monolith editorial design as the single public design

### Status

Accepted

### Date

2026-11-17

### Decision

1. **One design.** The public site moves to the **Monolith** editorial direction explored in `design-mockups/` (v5): monochrome ink / paper / cream bands; Archivo wordmark, Barlow Condensed display, Inter body; oversized type; grayscale imagery; a light WebGL contour-field hero and a dark footer variant; a masthead nav plus a quiet dock that appears on scroll-up; pinned and sticky scroll sections; Lenis smooth scrolling; curtain page transitions; hover-blur project cards. **No second design and no visitor-selectable design or theme.**
2. **Supersedes the gothic / blood identity.** [ADR-029](ADR-029-visual-identity-gothic-blood.md) and [ADR-031](ADR-031-selected-chrome-outline.md) become **Superseded by ADR-052**. They stay in force on production **until cutover** ([ADR-053](ADR-053-redesign-migration-integration-branch.md)). ADR-030 was already superseded.
3. **Working reference until cutover.** `design-mockups/` (v5: `home`, `workflow`, `work`, `work-case`, `contact`) is the visual and interaction reference for the migration. This temporarily amends [ADR-024](ADR-024-production-code-visual-sot.md). It is a reference, not a pixel contract: tokens, spacing and components may adapt to shadcn/ui + Tailwind v4. At cutover production code becomes the source of truth again and the mockups return to archive.
4. **Stack unchanged.** Next.js, shadcn/ui + Tailwind CSS v4 ([ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md)), SSG + `content/` ([ADR-015](ADR-015-architecture-baseline-v1-static-first.md)). Motion and Lenis are already dependencies and remain the motion foundation. The contour field is a small custom WebGL component, loaded on the client only, with a static fallback. No new animation or 3D library.
5. **Contact becomes a page.** `/[locale]/contact` replaces the Contact modal (this replaces the "Contact = Dialog" line in ADR-029 point 2). Delivery stays as [ADR-047](ADR-047-contact-form-resend.md): Resend through a Route Handler, pages stay SSG, mailto fallback. Only the presentation changes. Needs its own ticket and redirects or links updated everywhere the modal opened.
6. **Copy is not locked by this ADR.** The mockup copy is a proposal. Production copy in `content/` stays until Boss Rezi approves new copy per surface. The bilingual rule stays: ID and EN for public copy (ADR-049). Project facts must still come from `content/data/projects.json` and the resume ([ADR-045](ADR-045-anonymous-descriptive-work-cases.md), [ADR-046](ADR-046-case-deeper-than-sheet.md)).
7. **Surfaces the mockup does not settle.** Each is locked by Boss Rezi in its own ticket **before** code, in the Q&A-per-surface style of ADR-029 point 3:
   - Quick Info panel (mockup omits it)
   - bottom project sheet vs a direct case page ([ADR-027](ADR-027-work-project-bottom-sheet-m10.md) and [ADR-044](ADR-044-r2-hybrid-case-pages.md); the mockup links tiles straight to the case)
   - light / dark toggle ([ADR-021](ADR-021-dark-mode-toggle-must-r1.md); the new design uses fixed light and dark bands)
   - Home information architecture ([ADR-032](ADR-032-home-single-section.md), [ADR-037](ADR-037-home-lede-now-on-about.md), [ADR-038](ADR-038-home-hero-two-line-workflow-link.md), [ADR-041](ADR-041-home-with-footer.md)) and `#about` ([ADR-040](ADR-040-about-as-home-section.md))
   - Workflow structure ([ADR-042](ADR-042-workflow-decision-driven-page.md))
   - which projects are public, and imagery (no photography exists; the portrait with the "This is not me" caption can stay)
8. **Quality gates before cutover.**
   - First-viewport clarity stays binding (UX1, ADR-002).
   - `prefers-reduced-motion` is honored everywhere; touch devices keep native scrolling.
   - The WebGL field has a non-WebGL fallback and does not block first paint.
   - Core Web Vitals and Lighthouse are no worse than the current production baseline; capture that baseline first.
   - Keyboard, focus and screen-reader behavior hold for the masthead, dock, accordions and form.
   - Mobile (≤760 px) and tablet are verified, not assumed.
9. **Production is not disturbed while this happens.** See ADR-053.

### Reason

- Boss Rezi reviewed the mockups and chose to move to the new design only (2026-11-17), after weighing and rejecting a permanent two-design option.
- The two directions differ in structure, navigation, motion and copy, so they are two sites, not two themes. Supporting both doubles maintenance, QA and accessibility work for little visitor benefit.
- A portfolio should present one coherent identity. Offering a choice blurs it.
- Lenis, Motion, Tailwind v4 and shadcn/ui are already in the repo, so the migration is a re-skin and re-composition, not a stack change.

### Alternatives Considered

- Keep production and offer the new design as a visitor-selectable theme — rejected: doubles components, CSS (about 4.4k lines in `app/globals.css`), copy and tests; most visitors never switch; weakens the brand.
- Keep the gothic identity and iterate it further — rejected by Boss Rezi after reviewing the mockups.
- Ship the new design behind a feature flag or hidden route inside `main` — rejected in ADR-053.
- Rewrite copy and design together in one pass — rejected: copy touches locked content and the ID / EN requirement, so it is approved surface by surface.

### Impact / Follow-up

- Mark ADR-029 and ADR-031 as superseded in `DECISIONS.md` (done with this ADR; effective at cutover).
- Update `.cursor/rules/ui-ux-mockup-check.mdc`, the `AGENTS.md` UI/UX row, `project-os/DEVELOPER_WORKFLOW.md` and `design-mockups/README.md` so agents treat the v5 mockups as the migration reference until cutover (needs its own ticket; the current rule still calls the folder a deprecated archive).
- Open tickets per surface (chrome and motion foundation, Home, Work and case, Workflow, Contact page, copy, QA and cutover) and update `PROJECT_STATE.md` and `AVAILABLE_TICKETS.md` when they exist.
- Revisit the Contact-related lines in `PROJECT_STATE.md` ("Not a `/contact` route") when the Contact ticket is created.
