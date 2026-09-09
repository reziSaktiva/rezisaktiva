# Decision ADR-038

### Title

Home h1 kembali dua baris display; lede punya tautan ke Workflow

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Bentuk h1 Home** = **dua baris display**: desktop baris 1 pojok kiri atas, baris 2 pojok kanan bawah (sejajar lede, tidak menutupi). Mobile: kedua baris di atas. Clamp **tetap** T-049 (`clamp(2.75rem, 9.25vw, 6.75rem)` desktop). Potongan baris dikunci:
   - EN: `I transform complex ideas` / `into seamless digital products.`
   - ID: `Saya mengubah ide kompleks` / `menjadi produk digital yang mulus.`
2. **Lede** di **lantai bawah** first viewport (T-050; posisi tidak diubah di T-051). Tautan ajakan ke `/[locale]/workflow`:
   - ID: `Lihat cara saya bekerja`
   - EN: `See how I work`
3. **Skala h1:** dua tingkat di bawah clamp raksasa awal — desktop `clamp(2.75rem, 9.25vw, 6.75rem)` (bukan `10.5rem`).
4. **Layout:** h1 dua baris di atas first viewport; lede di **lantai bawah** (justify-between). Veil atas + bawah; tengah wallpaper terbuka. Now tetap di About (ADR-037).

**Update (2026-09-07):** Lede di bawah h1, lalu kunci di **paling bawah** viewport (bukan menempel h1). Skala h1 −2 tingkat.

**Update (2026-09-07, T-051):** H1 kembali dua baris display kiri-atas / kanan-bawah; ukuran clamp tidak diubah. Copy ID baris 2 = `menjadi produk digital yang mulus.` (mengganti “presisi dan mudah digunakan”). EN tidak berubah. Ini **override** wording ID ADR-036 untuk h1.

Ini **override** bentuk wrapping ADR-036.

### Reason

- Boss Rezi minta reverse ke dua baris display besar, plus tautan cara kerja di deskripsi.

### Alternatives Considered

- Tetap wrapping ADR-036 — ditolak.
- Pakai label nav “Proses Kerja” / “How I Work” sebagai teks tautan — ditolak; Boss Rezi minta ajakan “lihat cara saya bekerja”.

### Impact / Follow-up

- Kode: `content/home.ts`, `HeroWords`, `.home-hero-line-2`, lede `NextLink`. Task **T-048**, **T-049**, **T-050**, **T-051**.
- Docs: IA / key screens / T-042.1; catatan ADR-036.
