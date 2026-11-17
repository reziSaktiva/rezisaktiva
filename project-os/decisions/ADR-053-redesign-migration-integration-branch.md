## Decision ADR-053

### Title

Redesign migration: integration branch, Vercel Preview, single cutover

### Status

Accepted (2026-11-17). Boss Rezi confirmed the branch name `redesign/monolith`; the stable preview domain stays optional (T-076.3).

### Date

2026-11-17

### Decision

1. **`main` stays production.** No redesign code merges to `main` before cutover. Documentation, ADR and `design-mockups/` commits may still land on `main`: [ADR-051](ADR-051-skip-docs-only-vercel-builds.md) skips the build for them.
2. **One long-lived integration branch**, working name `redesign/monolith`, cut from `main`. Work lands on it through short-lived branches and **one pull request per surface or ticket**, following the Q&A-per-surface method of ADR-029 point 3 (kept by [ADR-052](ADR-052-monolith-editorial-design.md)). Review is per surface; **release is not**.
3. **Vercel Preview is the staging.** Every pull request and push to the integration branch gets a Preview deployment, and `ci.yml` (lint, typecheck, build) already runs on pull requests of any base. There is no separate staging project or environment, consistent with `product-discovery/06-engineering/deployment-infrastructure.md`. Optional: assign a stable domain such as `next.rezisaktiva.space` to the integration branch in Vercel, so reviews always use the same URL.
4. **Preview safety.**
   - Previews must not index (check the Vercel default `noindex` on Preview and `app/robots.ts`).
   - The Contact Route Handler must not send real mail from Preview unless a test inbox is set in Preview-scoped env vars; otherwise the mailto fallback shows.
   - Canonical URL and sitemap stay `https://www.rezisaktiva.space` ([ADR-048](ADR-048-canonical-www-not-vercel.md)).
5. **Drift control.** Production fixes go to `main` first. Merge `main` into the integration branch at least weekly and before each wave.
6. **Cutover.**
   1. All surfaces are locked in tickets and the ADR-052 quality gates pass on the integration branch Preview.
   2. Tag `main` as `v1-gothic-final`.
   3. One pull request `redesign/monolith` → `main`, merged after Boss Rezi's explicit approval.
   4. Run a smoke checklist on production: home, workflow, work, a case, contact (real send), both locales, robots and sitemap, share card.
   5. Rollback is the Vercel previous-deployment rollback (documented in `deployment-infrastructure.md`), followed by a revert of the merge.
7. **After cutover.** Delete the integration branch, return `design-mockups/` to archive, make production code the visual source of truth again (ADR-024), and mark ADR-029 and ADR-031 historical.

### Reason

- The redesign replaces the whole look, navigation and Contact surface. A single cutover avoids a public site that mixes old and new designs.
- Per-surface review on the branch keeps the "no big-bang restyle" intent of ADR-029 without per-surface releases.
- Preview deployments and CI already exist, so no new infrastructure is needed.
- Keeping `main` untouched protects production and keeps hotfixes simple.

### Alternatives Considered

- Feature flag or route group for the new design inside `main` — rejected: both designs share `app/globals.css` (about 4.4k lines) and components, so styles and bundle size leak; a flag adds permanent dead code and two designs to patch for every production fix.
- Separate staging Vercel project or domain — rejected: duplicates env vars and domain setup; Preview is already the quality gate.
- Merge each surface to `main` as it is finished — rejected: the live site would mix two identities and ship inconsistent navigation.
- New repository or fork — rejected: splits history, CI and content, and makes the final merge harder.

### Impact / Follow-up

- Branch `redesign/monolith` is created and pushed (2026-11-17). Whether to attach a branch domain is decided in T-076.3.
- Check in the Vercel dashboard: production branch is `main`, Preview env vars for Resend, Preview `noindex`.
- Capture a performance and Core Web Vitals baseline on production before cutover (ADR-052 point 8).
- `product-discovery/06-engineering/deployment-infrastructure.md` and `project-os/DEVELOPER_WORKFLOW.md` gain a short "redesign branch" note (T-075.4).
- Wave planning for the migration uses the `wave-plan` and `wave-work` skills (ADR-050) using the S-002 tickets (T-075 to T-086).
- **Branch rules (2026-11-17):** GitHub rulesets require a pull request and passing checks on `main` and `redesign/monolith`; no direct pushes, force pushes, or deletions; the admin bypass is pull-request only (T-075.8). This makes the rules in point 2 enforceable, not just agreed.
