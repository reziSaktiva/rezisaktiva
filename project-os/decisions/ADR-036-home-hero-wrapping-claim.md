# Decision ADR-036

### Title

Home h1 = wrapping sentence (not short two-line display)

### Status

Superseded (wrapping shape — ADR-038). ID h1 copy changed again T-051 / ADR-038 (`yang mulus`).

### Date

2026-09-07

### Decision

1. **Home hero copy** replaced (not reopen T-021). Locked Boss Rezi:
   - EN: `I transform complex ideas into seamless digital products.`
   - ID: `Saya mengubah ide kompleks menjadi produk digital yang presisi dan mudah digunakan.`
2. **Type shape:** one **wrapping** block, left-aligned. Not two left/right lines (`home-hero-line-2` removed). Display scale smaller than giant two-word pattern so sentence fits without clip at 320px floor.
3. **Unchanged:** Home IA = one section (ADR-032); Now (kicker + prefix + Insvire); no footer strip (ADR-033); Home meta still `contactBody` (T-021.7).

This **overrides** T-021.2 copy (`Ceritamu` / `lewat produk.`) and “two-line claim” pattern in ADR-032 / `04-ux/` for Home hero.

### Reason

- Boss Rezi wanted full sentence claim; chose wrap over two display line breaks.

### Alternatives Considered

- Two display lines with meaning splits — rejected; Boss Rezi chose one wrap block.
- Keep ~10rem two-word clamp on full sentence — rejected; overflow/clip on mobile.

### Impact / Follow-up

- Code: `content/home.ts`, `HeroWords`, `.home-hero-line`. Task **T-046**.
- Docs: IA, key screens, ADR-032 note, T-042.1.
- **Update (ADR-038):** wrapping shape removed; two-line display + Workflow link on lede.
- **Update (T-051 / ADR-038):** ID h1 line 2 = `menjadi produk digital yang mulus.`