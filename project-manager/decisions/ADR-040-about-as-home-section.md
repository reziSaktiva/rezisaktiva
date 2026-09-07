# Decision ADR-040

### Title

About bukan halaman; section `#about` di Home

### Status

Accepted

### Date

2026-09-07

### Decision

1. **About tidak lagi route.** Chip nav **Tentang / About** tetap ada dan mengarah ke `/{locale}#about`. `/[locale]/about` redirect permanen ke `/{locale}#about`.
2. **Home** = hero (h1 + lede + wallpaper, ADR-038) **lalu** section About (Now, sapaan, lead, karya seni + caption — ADR-039). Satu `h1` di hero Home; judul About = `h2`.
3. **Section bukti AI (`#proof`) dicabut.** Copy T-021.2 tidak tampil di UI. About sebagai section tidak punya footer sendiri. **Update (ADR-041):** pita Contact di layout Home, setelah hero + `#about`.
4. **Workflow dan Work index** tetap halaman. JSON-LD: Home = `WebPage` (bukan `ProfilePage`). `Person.url` = Home. Sitemap tanpa URL `/about`.

Ini **override** About sebagai halaman sendiri (ADR-025 / ADR-035) dan Home hero-only (ADR-032) untuk isi About.

### Reason

- Boss Rezi (2026-09-07): hapus proof + contact di About, pindahkan hero About ke Home, pertahankan About di navbar, About = section bukan halaman.

### Alternatives Considered

- Tetap `/about` tanpa proof — ditolak; Boss Rezi minta bukan halaman.
- Chip About dihapus — ditolak; tetap di nav.
- Pindahkan bukti AI ke Home — ditolak; proof dihapus.

### Impact / Follow-up

- Kode: `home-page.tsx`, `about-page.tsx` (`AboutSection`), `lib/nav.ts`, `next.config.ts` redirect, sitemap/`SITE_META`. Task **T-052**.
- Docs: IA, nav, key screens, ADR-032/035 catatan.
