# Visual baseline T-032.1

Reference for **T-037.6**. Not an HTML mockup. Source: production code at `http://localhost:3000` (locale `en`), cookie `rz-theme`, `prefers-reduced-motion: reduce`. Captured 2026-09-01.

## Viewport

| Filename key | Size |
| ------------ | ---- |
| `320` | 320 × 720 |
| `desktop` | 1440 × 900 |

Pages = `fullPage`. Overlays (Contact, Quick Info, project sheet) = viewport only.

## Files

Pattern: `{light\|dark}-{320\|desktop}-{home\|about\|work\|contact\|quick-info\|project-sheet}.png`

Project sheet = first tile on `/en/projects` (Social Media Management Platform).

Overlay capture waits for `#ct-panel`, `#qi-panel`, `.ps-panel` (not `.ct-wrap.is-open` / `.qi-wrap.is-open` / `.ps-wrap.is-open` — shadcn primitives from T-035).

Computed tokens: [`computed-tokens.json`](computed-tokens.json). Summary also in `COMPLETE_TASK.md` (2026-09-01 T-032.1 entry).

## Re-run capture

The dev server must be running. Playwright is not a repo dependency:

```bash
PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs BASE_URL=http://localhost:3000 node capture.mjs
```

Default `PLAYWRIGHT_MODULE` points at a temporary install `/tmp/pw-t032` (override as needed).
