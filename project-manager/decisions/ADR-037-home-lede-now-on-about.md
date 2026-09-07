# Decision ADR-037

### Title

Now pindah ke About; Home = lede di atas h1, kluster tidak menutup wallpaper

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Status pekerjaan (Now)** tidak lagi di Home. Tempat kerja tetap di **About** (kicker + baris tautan, `#now`) dan Quick Info. Home tidak menduplikasi blok Now.
2. **Home hero** = deskripsi (lede) **di atas** `h1`, lalu klaim wrapping (ADR-036). Lede = copy dikunci Boss Rezi (adaptabilitas / AI agents). `h1` lebih besar dari lede.
3. **Layout:** satu kluster kiri-bawah, lebar terbatas, `justify-end`. Veil lebih kuat di zona teks; bagian atas/kanan wallpaper lebih terbuka.

Ini **override** ADR-032 poin Home = klaim + Now.

### Reason

- Boss Rezi (2026-09-07): pindahkan currently work ke About; tambah deskripsi di atas h1; h1 lebih besar; teks mudah dibaca tanpa menghalangi wallpaper.

### Alternatives Considered

- Now tetap di Home di bawah klaim — ditolak.
- Lede di bawah h1 — ditolak; Boss Rezi minta di atas.
- Teks full-width + veil merata — ditolak; menutup wallpaper.

### Impact / Follow-up

- Kode: `home-page.tsx`, `content/home.ts`, `about-page.tsx`, veil/CSS hero. Task **T-047**.
- Docs: IA, M1/M2, key screens, flows, ADR-032 catatan.
