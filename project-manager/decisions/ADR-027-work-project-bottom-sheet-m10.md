# Decision ADR-027

### Title

M10 Must R1 = sheet konteks proyek dari bawah (bukan route case, bukan lompat langsung ke live/repo)

### Status

Accepted

### Date

2026-08-26

### Decision

1. **M10** masuk **Must R1** sebagai **overlay dari bawah** — bukan halaman `/[locale]/work/[slug]`. Pola overlay sama dengan Quick Info (bukan route); arah masuk dari **bawah**.
2. **Klik tile di Work index dan teaser Home** membuka sheet itu — **bukan** navigasi langsung ke website live atau repo GitHub. Tautan **“Semua proyek”** di Home tetap ke `/[locale]/projects` (katalog).
3. Isi sheet (slot wajib, bilingual ID/EN, copy dikunci Boss Rezi — AI tidak mengarang):
   - **Images / live preview** — urutan: embed iframe situs live (bukan GitHub) bila URL ada dan situs mengizinkan framing; jika tidak, galeri gambar; jika keduanya tidak ada, seksi media kosong
   - **Services**
   - **Location or company** & **year**
   - **Description**
4. Tautan live/repo (jika ada, `WorkItem.href` R1) boleh tampil **di dalam sheet** sebagai aksi sekunder, bukan target klik tile.
5. **Komponen:** coba **Astryx `BottomSheet`** dulu (`purpose='info'`, `height`/`snapPoints` sesuai isi, `label` a11y). Jika tema/craft `rezisaktiva` tidak cukup, **fallback overlay custom** dari bawah (pola `quick-info.tsx` + lock Lenis). Bukan pindah ke shadcn (ADR-026).
6. Implementasi = **T-026** di `tasks/v03-development-r1.md`. **Dikerjakan sebelum exit R1 (`T-018`)** — tidak ditunda ke R2. **T-018** menunggu T-021.1–T-021.7 **dan** T-026.
7. Halaman case penuh `/work/[slug]` **bukan** R1; bila nanti dibutuhkan, ADR terpisah (boleh R2+).

Ini **override** ADR-020 (M10 tetap R2) dan ADR-010 (tanpa magnet detail di MVP) **hanya** untuk bentuk overlay ini — bukan untuk route case study.

### Reason

- Boss Rezi ingin pengunjung paham proyek apa dan bagaimana dikerjakan **sebelum** meninggalkan situs, dan ingin pekerjaan itu **sebelum rencana exit R1**, bukan setelah T-018.
- Overlay menjaga **UX3** (bukan menambah halaman). Arah bawah cocok dengan `BottomSheet` Astryx.

### Alternatives Considered

- Route `/work/[slug]` sebagai M10 — ditolak untuk R1.
- Tetap klik tile → URL eksternal — ditolak; tidak memberi konteks in-site.
- Tunda T-026 sampai setelah T-018 / R2 — **ditolak 2026-08-26**; Boss Rezi mengunci pengerjaan sebelum exit R1.
- shadcn `Sheet` `side="bottom"` — ditolak untuk sekarang (ADR-026).

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md`, `feature-priority.md`, `mvp-definition.md`, `release-roadmap.md`, `product-scope.md`
- `04-ux/information-architecture.md`, `key-screen-patterns.md`, `navigation-patterns.md`, `user-flows.md`, `ux-principles.md`
- `05-architecture/application-layer.md`, `domain-model.md`
- Task **T-026** di `tasks/v03-development-r1.md`; **T-018** menunggu T-026
- Copy sheet: **T-026.1** (bukan T-021 / v10)

### Update — 2026-08-26 (urutan)

Draf awal ADR ini menempatkan T-026 setelah T-018. **Dibatalkan** hari yang sama: Must R1, sebelum T-018.

### Update — 2026-09-01 (teaser Home)

Tile teaser di Home **juga** membuka sheet M10 (sama dengan Work index). Katalog tetap lewat tautan “Semua proyek” → `/[locale]/projects`. Bukan route case.

### Update — 2026-09-01 (preview live di sheet)

Seksi media: **iframe situs live** dulu (URL http(s) non-GitHub). Framing ditolak / timeout → **galeri**. Tanpa galeri → **kosong**. Tautan Live/Repo tetap sekunder di body.
