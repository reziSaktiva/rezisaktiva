# Decision ADR-045

### Title

Karya publik boleh memakai judul deskriptif tanpa merek produk/klien

### Status

Accepted

### Date

2026-09-15

### Decision

1. **Work index + sheet + halaman case** boleh menampilkan karya dengan **nama, slug, dan copy deskriptif** (kapabilitas), bukan merek produk atau klien.
2. **Perilaku permukaan sama** dengan karya bernama (**ADR-027** + **ADR-044**): tile → sheet; “baca selengkapnya” → `/[locale]/projects/[slug]`.
3. **Tidak boleh** di permukaan publik: nama merek, live/repo/slug yang menelanjangi identitas asli, atau galeri yang memuat wordmark.
4. **`hiddenIds`** tetap untuk karya yang belum siap publik sama sekali. Keluar dari `hiddenIds` = boleh punya rute case, dengan identitas deskriptif jika merek ditahan.
5. **Copy** dikunci Boss Rezi (judul + tulang fitur). AI tidak mengarang merek, metrik, atau stack di luar yang dikunci.
6. Contoh pertama: judul publik **backend platform sosial**, slug `backend-platform-sosial` (**T-057**). Karya lain (mis. tile anonim berikutnya) mengikuti pola yang sama setelah copy/aset dikunci.

Ini **bukan** supersede ADR-044. Hanya menambah pola identitas katalog.

### Reason

- Boss Rezi ingin bukti kerja (fitur sulit) tetap tampil, tanpa menyebut merek secara gamblang.
- Katalog bernama tetap default; pola deskriptif hanya jika merek ditahan.

### Alternatives Considered

- Seksi kapabilitas di About/Workflow, bukan tile — ditolak; Boss Rezi mengunci dua tile anonim di Work index.
- Sheet saja tanpa `/projects/[slug]` — ditolak; perilaku harus sama dengan karya bernama.
- Un-hide tile bermerek — ditolak; bertentangan dengan tujuan anonim.

### Impact / Follow-up

- `content/data/projects.json` — item publik deskriptif; `hiddenIds` hanya karya yang masih ditahan
- Tes rute/slug: nama merek tertahan tidak boleh jadi slug publik
- `tasks/r2.md` **T-057**; indeks `DECISIONS.md`
