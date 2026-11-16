# Decision ADR-023

### Title

M3 Contact addition - CV/Portfolio download link (PDF)

### Status

Superseded (ADR-043 - no public CV download)

### Date

2026-08-21

### Decision

1. **Contact modal (M3, ADR-019) adds one CV/Portfolio download link** (real PDF file), placed in the modal's right column - after the Socials block, before the availability line.
2. **Not a new page/route** - stays inside the existing Contact modal; adds no path to the site map (aligned with UX3 Lean surface, same as M13/ADR-022).
3. **Not a replacement for any path** - email remains the primary inbound path (ADR-014/ADR-019); the CV link is supplementary proof/credibility, not a form or new inbound CTA.
4. Copy locked through discussion (T-021.4, 2026-08-21): section label `CV / Portofolio` (ID) / `CV / Portfolio` (EN); link `Unduh CV` (ID) / `Download CV` (EN). Opens in a new tab.
5. A **separate contrast bug** was found during T-021.4 work: some Contact modal text (`Mari`, availability line, `Detail Kontak`, `Sosial`) was unreadable in light mode because Astryx `Text`/`Heading` components overrode color through theme token (`--color-text-primary`) with intentionally increased CSS specificity, while this modal panel is designed to be theme-independent (always dark-ink, see `.ct-panel` comment in `app/globals.css`). Fixed in a separate commit - not part of the product decision, recorded here because it was found in the same work session. **This fix remains used/not reverted** even though implementation of items 1-4 is deferred (see Update).

### Reason

- Boss Rezi needs a fast path for Contact modal visitors to download the CV/Portfolio directly, without leaving the overlay or waiting for an email reply.
- `feature-modules.md` M3 previously listed only email + satellite links + availability line - this feature is outside the initial draft and must be locked as a formal decision before entering the baseline (`ask-before-assuming.mdc`).
- Placing it in the Contact modal (not Quick Info/M13) was explicitly confirmed by Boss Rezi - Quick Info remains glanceable context (bio/services/tools/works/email/links), not the place for document downloads.

### Alternatives Considered

- Put it in Quick Info (M13) - not chosen; Boss Rezi chose Contact modal only.
- Create a separate `/cv` or `/resume` page - rejected; violates UX3 Lean surface, no need for a route for one download link.
- Put it in the global footer (M6) - not discussed/not chosen; requested scope was specifically the Contact modal.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` - M3 Contact, "Core content" row notes CV/Portfolio download link (cite ADR-023) as an **accepted but not yet implemented** decision.
- Code implementation (component, content, icon, style) - separate task **T-023** (`project-os/tickets/r1.md`), deferred pending the prerequisite in Update.

### Update - 2026-08-21

During implementation PR code review (T-021.4), a gap was found: the available CV file (`Resume_rezi_updated_agustus_2026.pdf`) is **entirely in Indonesian**, while the same link would also appear in the EN locale - potentially misaligned with the project's ID/EN meaning parity principle. Boss Rezi decided: **defer implementation** until an English CV version is ready (source not yet decided - translated draft from `private/Resume_rezi_updated_agustus_2026.md` or a separate file from Boss Rezi).

Implementation code (`ContactModal` component, `content/contact.ts` CV field, `DownloadIcon`, `.ct-cv-*` styles, PDF file) was **reverted** from PR T-021.4 so that PR only shipped the contrast fix + locked copy that was certain. The placement decision (items 1-4 above) **remains valid** for when implementation resumes - recorded as new task **T-023** (Deferred, waiting for English CV asset).

### Update - 2026-09-14

**Superseded by [ADR-043](ADR-043-no-public-cv-download.md).** Boss Rezi cancelled public CV download (misuse risk). **T-023** Cancelled. Modal contrast fix remains.
