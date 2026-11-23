#!/usr/bin/env bash
# Vercel ignoreCommand (ADR-051).
# Exit 0 cancels the build. Exit 1 continues it.
# https://vercel.com/docs/project-configuration/vercel-json#ignorecommand
#
# Compare against the last commit Vercel deployed for this branch
# (`VERCEL_GIT_PREVIOUS_SHA`), not only `HEAD^`: a push of "code commit, then
# docs commit" must still build. Anything unknown builds (fail safe), so a
# brand-new docs-only branch builds once; later docs-only pushes skip.

BASE="${VERCEL_GIT_PREVIOUS_SHA:-}"

if [ -n "$BASE" ] && ! git cat-file -e "${BASE}^{commit}" 2>/dev/null; then
  # Shallow clone may not contain the last deployed commit.
  echo "Last deployed commit ${BASE} not in this clone. Building."
  exit 1
fi

if [ -z "$BASE" ]; then
  # First deploy of a branch: no earlier deploy to compare with, so `HEAD^`
  # could hide code pushed in earlier commits of the same push. Build.
  echo "No previous deployment for this branch. Building."
  exit 1
fi

# Build when any changed path sits outside the documentation trees.
if git diff --quiet "$BASE" HEAD -- . \
  ':!project-os' \
  ':!product-discovery' \
  ':!design-mockups' \
  ':!.cursor' \
  ':!private' \
  ':!.github' \
  ':!AGENTS.md' \
  ':!README.md'
then
  echo "Documentation-only change since ${BASE}. Skipping build."
  exit 0
fi

echo "Site or deploy config changed since ${BASE}. Building."
exit 1
