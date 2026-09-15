# Decision ADR-046

### Title

Halaman case `/projects/[slug]` lebih dalam dari sheet; fakta dari CV + copy yang dikunci

### Status

Accepted

### Date

2026-09-15

### Decision

1. **Sheet M10 tetap skim** (layanan, lokasi, tahun, deskripsi singkat, media, live/repo sekunder) — **ADR-027**.
2. **Halaman case** memakai ulang meta sheet **plus** kedalaman yang tidak muat di overlay: periode, stack, dan poin kerja terstruktur.
3. **Sumber fakta case** = `private/Resume_rezi_updated_agustus_2026.md` dan copy yang dikunci Boss Rezi di chat. **AI tidak mengarang** metrik, merek, atau stack di luar itu.
4. Karya deskriptif tanpa merek (**ADR-045**) tetap tanpa live/repo/slug merek di case, meski CV memuat URL asli.
5. Kunci T-056.2 “isi case = slot sheet saja” **diganti** oleh keputusan ini. ADR-044 poin 7 (narasi jika copy dikunci) tetap; copy kedalaman sekarang dikunci lewat CV + chat.
6. Implementasi = **T-058**.

Ini **bukan** supersede ADR-044 untuk rute/hibrid. Overlay tidak dicabut.

### Reason

- Boss Rezi: halaman slug harus memberi lebih banyak informasi daripada sheet, untuk seluruh karya.
- Sheet adalah overlay; magnet URL layak memuat stack dan poin dari CV.

### Alternatives Considered

- Memanjangkan deskripsi sheet sampai paritas CV — ditolak; overlay bukan tempat case penuh.
- Narasi bebas di case tanpa CV — ditolak; AI tidak mengarang (ADR-044).

### Impact / Follow-up

- `content/data/projects.json` — field `case` (periode, stack, sections)
- `app/[locale]/_components/work-case-page.tsx`
- `product-discovery/04-ux/key-screen-patterns.md` S5
- `tasks/r2.md` **T-058**; indeks `DECISIONS.md`
