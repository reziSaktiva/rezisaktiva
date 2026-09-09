# Decision ADR-036

### Title

Home h1 = kalimat wrapping (bukan dua baris display pendek)

### Status

Superseded (bentuk wrapping — ADR-038). Copy ID h1 diubah lagi T-051 / ADR-038 (`yang mulus`).

### Date

2026-09-07

### Decision

1. **Copy hero Home** diganti (bukan reopen T-021). Dikunci Boss Rezi:
   - EN: `I transform complex ideas into seamless digital products.`
   - ID: `Saya mengubah ide kompleks menjadi produk digital yang presisi dan mudah digunakan.`
2. **Bentuk tipe:** satu blok yang **wrap**, rata kiri. Bukan dua baris kiri/kanan (`home-hero-line-2` dicabut). Skala display lebih kecil dari pola dua-kata raksasa supaya kalimat muat tanpa clip di lantai 320px.
3. **Tidak berubah:** IA Home = satu section (ADR-032); Now (kicker + prefiks + Insvire); tanpa pita footer (ADR-033); meta Home tetap `contactBody` (T-021.7).

Ini **override** copy T-021.2 (`Ceritamu` / `lewat produk.`) dan pola “klaim dua baris” di ADR-032 / `04-ux/` untuk hero Home.

### Reason

- Boss Rezi minta klaim kalimat penuh; memilih wrap daripada potong dua baris display.

### Alternatives Considered

- Dua baris display dengan potongan arti — ditolak; Boss Rezi pilih satu blok wrap.
- Tetap ukuran clamp dua-kata (~10rem) pada kalimat penuh — ditolak; overflow/clip di mobile.

### Impact / Follow-up

- Kode: `content/home.ts`, `HeroWords`, `.home-hero-line`. Task **T-046**.
- Docs: IA, key screens, ADR-032 catatan, T-042.1.
- **Update (ADR-038):** bentuk wrapping dicabut; dua baris display + tautan Workflow di lede.
- **Update (T-051 / ADR-038):** copy ID h1 baris 2 = `menjadi produk digital yang mulus.`
