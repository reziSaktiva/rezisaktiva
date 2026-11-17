# Lane brief extras

Read this only when the brief points here. Do not paste it into the brief.

## UI

When the lane changes a screen, layout, or overlay:

- Follow `.cursor/rules/shadcn.mdc`, `.cursor/rules/code-discipline.mdc`, and `.cursor/rules/ui-ux-mockup-check.mdc`.
- Production code in `app/` and tokens in `app/globals.css` are the visual source. `design-mockups/` is an archive, except as the S-002 redesign reference until cutover (ADR-052); never pixel-exact.
- Verify the changed flow in the browser on the affected locale route, including the empty or error state the ticket names.

## Motion

When the lane changes animation, read `.cursor/skills/motion/SKILL.md` and `.cursor/rules/motion.mdc`. Respect `prefers-reduced-motion`.

## Tests

This app uses Vitest (`pnpm test`). Reject a test that:

- fails on a refactor that does not change behavior
- asserts a value the test just set, or a mock that returns its own answer

A useful test fails when the public behavior changes.
