# Decision ADR-010

### Title

MVP surface: Hybrid lean (Home + About + Contact; Work teaser di Home)

### Status

Accepted

### Date

2026-08-07

### Decision

1. Struktur permukaan MVP **rezisaktiva** = **Hybrid lean (opsi C)**.
2. Halaman inti MVP: **Home**, **About**, **Contact**.
3. Karya pada MVP = **section teaser di Home** (bukan katalog Work + detail case).
4. Halaman Work / case–proses singkat = **magnet bertahap setelah kerangka clarity** (selaras ADR-007), bukan Must Have ship pertama.
5. Soft CTA kontak tanpa pricing; mekanisme form/calendar bukan syarat MVP (boleh Could).

### Reason

- Selaras clarity → presence → craft (ADR-006): ship kerangka evaluasi dulu.
- Magnet ringan tetap ada di model growth (ADR-007) tetapi tidak memblok destination.
- About + Contact sebagai halaman menjaga path evaluasi & inbound tanpa single-page yang sulit dishare per konteks.
- Menghindari overbuild multi-page penuh + case wajib (opsi D) sebelum konten case siap.

### Alternatives Considered

- **A Multi-page klasik** (Home / Work / About / Contact + detail case) — ditunda; lebih berat untuk MVP clarity.
- **B Single-page scroll** — ditolak sebagai default; lemah untuk share konteks About/Contact/Work dan mudah jadi CV panjang.
- **D Hybrid penuh** (multi-page + ≥1 case wajib di MVP) — ditunda; cocok jika case sudah siap, bukan default.
- **C Hybrid lean** — diterima.
