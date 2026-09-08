# Decision ADR-039

### Title

About hero: lead penuh, tanpa availability, karya seni viewport + caption

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Badge availability dihapus** dari hero About. Sinyal availability tetap di Contact modal (copy Contact tidak berubah).
2. **Lead selalu terlihat** sebagai satu paragraf. Pola rest/active (carousel expand) **tidak dipakai** di hero About. Rest/active Workflow **dicabut ADR-042**.
3. **Copy lead dikunci** (mengganti dua blok T-021.3 `lead1`/`lead2`):
   - EN: *Rather than just typing lines of code… every feature I build.*
   - ID: *Fokus saya bukan sekadar menulis baris kode… setiap fitur yang saya bangun.*
4. **Gambar hero** = karya seni lokal `public/media/about-hero.jpg` (bukan Unsplash, bukan foto Rezi). Tinggi mengikuti viewport pengguna; rasio mengikuti aset (saat ini 634×1024); `object-fit: contain`. Caption di bawah, locale-invariant: **This is not me**, plus panah ke gambar. `Person.image` JSON-LD **tetap tidak diisi**.
5. **Skala h1 About** mengikuti clamp h1 Home (ADR-038 / T-049): desktop `clamp(2.75rem, 9.25vw, 6.75rem)`; mobile `clamp(1.85rem, 8.7vw, 2.75rem)`.

Ini **override** ketersediaan badge + rest/active lead di About (ADR-025 / key screens S2) dan “satu-satunya foto diri R1” (IA About).

### Reason

- Boss Rezi mengunci lima poin di chat (2026-09-07) saat Q&A **T-042.2**.
- Caption “This is not me” membuat aset itu justaposisi gothic, bukan klaim identitas wajah.

### Alternatives Considered

- Tetap rest/active dua paragraf T-021.3 — ditolak; Boss Rezi minta satu deskripsi penuh.
- Frame 4:5 + grayscale Unsplash — ditolak; aset baru + ukuran viewport.
- Isi `Person.image` dengan karya seni — ditolak; Google: jangan markup gambar yang bukan orangnya.

### Impact / Follow-up

- Kode: `content/about.ts`, `about-page.tsx`, `app/globals.css`, `public/media/about-hero.jpg`. Task **T-042.2**.
- Docs: IA / key screens / ADR-035 daftar blok hero.
