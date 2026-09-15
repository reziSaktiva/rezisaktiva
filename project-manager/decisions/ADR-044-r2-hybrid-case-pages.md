# Decision ADR-044

### Title

R2 magnet = hibrid: sheet M10 tetap; halaman case shareable di `/[locale]/projects/[slug]`

### Status

Accepted

### Date

2026-09-14

### Decision

1. **R2 mengaktifkan magnet ringan ADR-007** sebagai **halaman case**, tanpa mencabut overlay M10.
2. **Klik tile di Work index** tetap membuka **project sheet dari bawah** (**ADR-027**). Bukan navigasi langsung ke halaman case, live, atau repo.
3. **Di dalam sheet** ada tautan primer in-site **“baca selengkapnya”** (salinan ID/EN dikunci di task copy) ke **`/[locale]/projects/[slug]`**. **Live** (situs, bukan GitHub) boleh sekunder di sheet dan halaman case. **Repo tidak ditampilkan** (update ADR-027, 2026-09-15).
4. **URL case adalah magnet:** bisa dibuka langsung, dishare, dan di-switch locale ke sibling path. Tidak membuka sheet otomatis.
5. **Slug** = string stabil kebab-case di `content/data/projects.json` (bukan id numerik). Karya di `hiddenIds` **tidak** punya rute publik.
6. **Bentuk:** SSG + `generateStaticParams` (locale × slug terlihat) — **ADR-015**. `page.tsx` tetap Server Component. Konten di repo; **bukan** CMS.
7. **Isi halaman** boleh memakai ulang slot sheet (media, services, location/company, year, description) plus blok narasi/proses singkat jika Boss Rezi mengunci copy. **AI tidak mengarang** fakta atau cerita case.
8. **Chrome:** chip Proyek/Projects = aktif di index **dan** di halaman case. Pita footer Contact tetap (ADR-041). Quick Info tetap (ADR-022).
9. **Bukan R2:** blog, CMS, auth, pricing, cabut sheet, route `/work/[slug]` (index produksi sudah `/projects`; `/work` tetap redirect ke `/projects`).
10. **Exit R2:** ≥1 halaman case live dengan copy terkunci + tautan dari sheet + URL shareable. Implementasi = **T-056**.

Ini **bukan** supersede ADR-027. Overlay tetap skim; halaman = pendalaman yang punya URL.

### Reason

- Roadmap R2 fork “halaman case atau pendalaman sheet” dikunci Boss Rezi sebagai **hibrid** (2026-09-14).
- Sheet sudah memenuhi konteks in-site tanpa keluar tab; magnet ADR-007 butuh **URL per karya** (sheet bukan destinasi share).
- Path mengikuti IA (`/projects/[slug]`), selaras index **ADR-020**, bukan nama historis `/work/[slug]`.

### Alternatives Considered

- Halaman case saja (tile langsung ke `[slug]`, sheet dicabut) — ditolak; membuang pola F7 yang sudah hidup.
- Pendalaman sheet saja (tanpa rute) — ditolak; tidak shareable, tidak memenuhi magnet URL.
- Satu karya unggulan sebagai halaman, sisanya sheet-only — ditolak sebagai default R2; katalog terlihat boleh punya rute; kedalaman copy boleh bertahap.
- Path `/work/[slug]` — ditolak; index sudah `/projects`.

### Impact / Follow-up

- `product-discovery/02-product/` — modules, priority, MVP, scope, roadmap
- `product-discovery/04-ux/` — IA, nav, flows, pola layar, prinsip
- `product-discovery/05-architecture/` — domain-model, application-layer
- [ADR-027](ADR-027-work-project-bottom-sheet-m10.md) — catatan R2; overlay tetap
- Task **T-056** di `tasks/r2.md`
- Kode: jangan mulai sebelum copy/slug **T-056.2** dikunci Boss Rezi
