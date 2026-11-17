# Decision ADR-038

### Title

Home h1 back to two-line display; lede links to Workflow

### Status

Accepted

Amended by [ADR-054](ADR-054-s002-surface-decisions.md) (2026-11-17, at cutover): hero shape changes; wording open for T-084.2.

### Date

2026-09-07

### Decision

1. **Home h1 shape** = **two display lines**: desktop line 1 top-left corner, line 2 bottom-right aligned with lede, not overlapping). Mobile: both lines on top. Clamp **unchanged** T-049 (`clamp(2.75rem, 9.25vw, 6.75rem)` desktop). Line breaks locked:
   - EN: `I transform complex ideas` / `into seamless digital products.`
   - ID: `Saya mengubah ide kompleks` / `menjadi produk digital yang mulus.`
2. **Lede** on **bottom floor** of first viewport (T-050; position not changed in T-051). CTA link to `/[locale]/workflow`:
   - ID: `Lihat cara saya bekerja`
   - EN: `See how I work`
3. **h1 scale:** two steps below initial giant clamp — desktop `clamp(2.75rem, 9.25vw, 6.75rem)` (not `10.5rem`).
4. **Layout:** two-line h1 on top of first viewport; lede on **bottom floor** (`justify-between`). Top + bottom veil; middle wallpaper open. Now stays on About (ADR-037).

**Update (2026-09-07):** Lede below h1, then locked at **bottom** of viewport (not attached to h1). h1 scale −2 steps.

**Update (2026-09-07, T-051):** h1 back to top-left / bottom-right two-line display; clamp size unchanged. ID line 2 copy = `menjadi produk digital yang mulus.` (replaces “presisi dan mudah digunakan”). EN unchanged. This **overrides** ADR-036 ID h1 wording.

This **overrides** ADR-036 wrapping shape.

### Reason

- Boss Rezi wanted reverse to large two-line display, plus working-style link in description.

### Alternatives Considered

- Keep ADR-036 wrapping — rejected.
- Use nav labels “Proses Kerja” / “How I Work” as link text — rejected; Boss Rezi wanted “see how I work” CTA.

### Impact / Follow-up

- Code: `content/home.ts`, `HeroWords`, `.home-hero-line-2`, lede `NextLink`. Tasks **T-048**, **T-049**, **T-050**, **T-051**.
- Docs: IA / key screens / T-042.1; ADR-036 note.