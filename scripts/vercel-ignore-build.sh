#!/usr/bin/env bash
# Vercel ignoreCommand (ADR-051).
# Exit 0 cancels the build. Exit 1 continues it.
# https://vercel.com/docs/project-configuration/vercel-json#ignorecommand

if ! git rev-parse --verify HEAD^ >/dev/null 2>&1; then
  echo "No parent commit. Building."
  exit 1
fi

# Build when any changed path sits outside the documentation trees.
if git diff --quiet HEAD^ HEAD -- . \
  ':!project-os' \
  ':!product-discovery' \
  ':!design-mockups' \
  ':!.cursor' \
  ':!private' \
  ':!.github' \
  ':!AGENTS.md' \
  ':!README.md'
then
  echo "Documentation-only change. Skipping build."
  exit 0
fi

echo "Site or deploy config changed. Building."
exit 1
