## Decision ADR-054

### Title

S-002 surface decisions: Quick Info, project sheet, theme toggle, Home, Workflow, public projects

### Status

Accepted (2026-11-17). Boss Rezi locked these in T-077.1 to T-077.6, as required by [ADR-052](ADR-052-monolith-editorial-design.md) point 7. Production code changes only on `redesign/monolith` until cutover ([ADR-053](ADR-053-redesign-migration-integration-branch.md)); the superseded or amended ADRs stay in force on `main` until then.

### Date

2026-11-17

### Decision

1. **Quick Info panel is retired (T-077.1).** The Footer and the Contact page carry its facts (email, location, links). The Services and Tools lists lose their public place. Supersedes [ADR-022](ADR-022-quick-info-panel-module.md).
2. **Work tiles go straight to the case page (T-077.2).** The project bottom sheet is removed; the route stays `/[locale]/projects/[slug]`. Supersedes [ADR-027](ADR-027-work-project-bottom-sheet-m10.md); amends [ADR-044](ADR-044-r2-hybrid-case-pages.md) (the sheet part; the case route, no Repo link, and Live as a secondary link stay).
3. **Light/dark toggle is removed; single theme (T-077.3).** Confirms ADR-052 point 1. Supersedes [ADR-021](ADR-021-dark-mode-toggle-must-r1.md). The token structure in T-078.1 has no dark mode, and the `rz-theme` cookie, `ThemeModeProvider` and anti-flash script may be removed (T-078.4).
4. **Home IA (T-077.4):** hero, About, Work cards, footer. Method and ADR content live on Workflow only. The marquee and a method teaser on Home are not part of this decision. Amends [ADR-032](ADR-032-home-single-section.md) (the Work teaser returns) and [ADR-038](ADR-038-home-hero-two-line-workflow-link.md) (hero shape; hero and lede wording stays open for T-084.2). Effect on others: [ADR-037](ADR-037-home-lede-now-on-about.md) (Now on About) is untouched, and where the Now line sits is left to T-080/T-084; [ADR-040](ADR-040-about-as-home-section.md) (`#about` section) holds; [ADR-041](ADR-041-home-with-footer.md) (footer on every route) holds, with the footer restyled by T-079.
5. **Workflow structure (T-077.5):** use the mockup's section structure; keep the current Discover / Design / Build / Ship wording until copy approval (T-084.4). The mockup's "Five rules" against ADR-042's five principles stays open for T-084.4. Amends [ADR-042](ADR-042-workflow-decision-driven-page.md) (structure only: tabs to a two-pane compare, pipeline to a pinned method, vault to an accordion; ADR-035 and ADR-042 point 1 hold). Accordion entries must stay real ADR records.
6. **Public projects (T-077.6):** the current four in order 1, 2, 3, 7; Gamestalgia (6) stays hidden; screenshots only. No portrait for now (Home has none); revisit with the About copy in T-084.
   - **Open follow-up:** item 1 uses an Unsplash stock cover, which breaks "screenshots only". It must be replaced by a real screenshot (owner Boss Rezi, T-084 or T-081).

### Reason

- The mockup, ADR-052 point 1 (no visitor-selectable theme or side chrome) and the case page depth of ADR-046 make the sheet, the Quick Info drawer and the toggle redundant.
- Every Quick Info fact already has a home in the Footer and on Contact.
- Home shows Work proof again, while Workflow owns the method and the ADR log, so nothing is duplicated.
- Structure is decided now; wording stays a copy decision under ADR-052 point 6.

### Alternatives Considered

- Keep Quick Info restyled, or fold it into a Home or Workflow band: rejected, as it conflicts with the masthead and dock chrome.
- Keep the sheet as a skim layer on the Work index: rejected, because the case page already goes deeper.
- Keep the toggle dormant or as a feature: rejected by ADR-052 point 1.
- Full mockup Home (marquee, method, ADR log on Home): rejected, as it duplicates Workflow.
- Unhide Gamestalgia or show only three projects: rejected; the assets for Gamestalgia do not exist, and dropping item 1 loses the newest project.

### Impact / Follow-up

- Unblocks T-078.1 and T-078.4, T-079, T-080, T-081, T-082 and T-083.1.
- T-084: copy for Home hero and lede, Workflow wording (incl. "Five rules"), the portrait and About, and the item 1 cover.
- The ADR status in `DECISIONS.md` changes to "Superseded" or "Amended" (ADR-054, at cutover), following ADR-029 and ADR-031.
