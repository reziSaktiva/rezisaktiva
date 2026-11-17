# Decision ADR-022

### Title

New module M13 - Quick Info panel (global overlay, Must R1)

### Status

Accepted

Superseded by [ADR-054](ADR-054-s002-surface-decisions.md) (2026-11-17, at cutover): Quick Info panel retired.

### Date

2026-08-16

### Decision

1. **New module M13 - Quick Info panel** enters the product catalog as **Must R1**. It is a global overlay, not a new page/route: a vertical right-edge tab opens a drawer containing bio, Services, Tools, Works index, Email, and Links.
2. **Shown on all R1 pages** (Home, About/Proses Kerja, Work index) **except Work case detail** (M10 / `work-case.html`). When M10 goes live in R2, this exception still applies unless a separate decision changes it.
3. **Not a new route** - it adds no path to the site map. The overlay does not violate **UX3 Lean surface** (do not add a *page* just to "serve" hiring); route surface remains the Hybrid lean shape already overridden by ADR-019/ADR-020 (Home · About · Work index + Contact as modal).
4. **Does not replace Contact (ADR-019) or satellite footer (M6):**
   - **Contact modal** remains the inbound path (email/message form + Contact details before Socials).
   - **Footer** remains the home for LinkedIn/GitHub satellites and hygiene.
   - **Quick Info** is glanceable identity/context (who, what is done, tools, work index, email/links as *quick references*). Do not put the Contact form in the drawer; Email/Links in Quick Info are links/references, not a duplicate inbound modal.
5. Interaction pattern follows the approved mockup (karolinahess.com reference, recorded in 2026-08-14 session): right-edge tab -> drawer from the right; custom overlay (Astryx has no generic Drawer - ADR-018 still; not a reason to move to shadcn). Panel copy may remain placeholder until content task.
6. Production implementation of the overlay component (not yet present at decision time) follows as a separate task - this ADR locks the module decision and boundaries against Contact/footer, not implementation.

### Reason

- The panel was fully built in mockups across several sessions (`design-mockups/shared.js` `mountQuickInfo()`, all pages except `work-case.html`) and approved by Boss Rezi, but had **never** entered an ADR or `product-discovery/` baseline - documentation was behind the live surface.
- Formalizing it as a module (M13) prevents Quick Info from sneaking in as chrome decoration (M6) or as a new page that would conflict with UX3.
- Explicit boundaries vs Contact modal and footer prevent three surfaces from claiming the same inbound role.

### Alternatives Considered

- Do not formalize - leave it only in mockups until R2 - **rejected**; Boss Rezi chose to formalize it as a new module after mockup vs docs audit.
- Put it into M6 (Site Chrome) as a chrome bullet only, without a new module ID - not chosen; Quick Info has its own content (bio/services/tools/works) that is not navigation/footer.
- Make it a page/route such as `/info` - rejected; that would violate UX3 Lean surface.
- Merge it with Contact modal (one overlay for inbound + bio/services) - not chosen; Contact remains the inbound path (ADR-019); Quick Info remains glanceable context.
- Show it on Work case detail too - rejected; the mockup consistently excludes `work-case.html`.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` - add **M13 - Quick Info panel** (Core/Supporting) + update Module Relationships diagram; M2 may separately note the local About label (ADR-020).
- `product-discovery/02-product/mvp-definition.md` / `feature-priority.md` / `release-roadmap.md` - Must Have / R1 Must adds M13 (cite ADR-022).
- `product-discovery/04-ux/navigation-patterns.md` - Secondary Navigation: Quick info panel row (global overlay, all pages except Work case).
- `product-discovery/04-ux/information-architecture.md` - Content Hierarchy (cross-page/chrome): Quick info overlay row.
- `product-discovery/04-ux/key-screen-patterns.md` - S0 Chrome: Quick info panel block.
- `product-discovery/04-ux/ux-principles.md` - note: overlay is not considered a new page (aligned with UX3).
- `project-os/tickets/r1.md` - M13 implementation task (placeholder content -> real copy + overlay component, exclude Work case).

### Update - 2026-08-16

Official implementation task ID: **T-020** (`v03-development-r1.md`), subtasks T-020.1 (content) + T-020.2 (overlay component).

### Update - 2026-08-26 (ADR-027)

The original "Work case detail" exception refers to a **page** `work-case.html` / `/work/[slug]`. M10 R1 = **overlay sheet**, not that page. Quick Info **still appears on the Work index**. Do not unmount Quick Info because of M10. When the sheet is open, temporarily close Quick Info (same pattern as Contact), then keep the tab present.

### Update - 2026-09-03 (ADR-028)

Quick Info overlay primitive = shadcn `Sheet` `side="right"` (T-035), skinned to the same shape. Point 5 ("custom overlay / not a reason to move to shadcn") is an R1 trail (ADR-018/026); post-exit migration = [ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md).

### Update - 2026-09-07 (ADR-035)

Shown on all R1 pages including **Workflow** (`/workflow`) and Home `#about`. Route surface = Home (including About section) · Workflow · Work index + Contact modal.
