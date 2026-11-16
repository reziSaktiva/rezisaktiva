## Decision ADR-051

### Title

Skip Vercel builds for documentation-only changes

### Status

Accepted

### Date

2026-11-16

### Decision

1. `vercel.json` sets `ignoreCommand` to `bash scripts/vercel-ignore-build.sh`.
2. Vercel cancels the build when every changed path is documentation: `project-os/`, `product-discovery/`, `design-mockups/`, `.cursor/`, `private/`, `.github/`, `AGENTS.md`, or `README.md`.
3. Any other path still builds. That includes `app/`, `components/`, `content/`, `lib/`, `public/`, `proxy.ts`, dependency files, and `vercel.json`.
4. The command exits 0 to cancel and 1 to build. A missing parent commit builds.

### Reason

- Documentation commits do not change the live site. Building them spends a production deploy without a visitor-facing change.
- The rule lives in the repo so Preview and Production use the same check.

### Alternatives Considered

- Dashboard-only Ignored Build Step — rejected because the rule would not travel with the branch.
- Skip every `*.md` file — rejected because `content/` and future site files must still deploy.
- Leave every merge on a full Vercel build — rejected because Boss Rezi asked for a docs-only skip before merging this pull request.

### Impact / Follow-up

- `vercel.json`
- `scripts/vercel-ignore-build.sh`
- `product-discovery/06-engineering/cicd-pipeline.md`
