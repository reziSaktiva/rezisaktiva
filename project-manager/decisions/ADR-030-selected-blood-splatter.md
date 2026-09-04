# Decision ADR-030

### Title

Selected chrome: blood splatter yang mengalir ke seluruh halaman (pengecualian T-038.1)

### Status

Accepted

### Date

2026-09-04

### Decision

1. **Penanda selected (nav halaman, locale switcher, item hamburger yang terlihat) memakai bahasa splatter horror**, bukan hanya bercak 3D diam. Saat item aktif berganti: percikan. Selama item itu `data-selected`: darah **mengalir tanpa batas viewport** — boleh menutupi isi halaman di bawah overlay.
2. **Ini pengecualian sempit terhadap ADR-029 / T-038.1.** Larangan gore medis, NSFW, mall-goth, dan chaos acak di permukaan lain **tetap**. Yang dibuka hanya: percik / semprot / tetes untuk **selected chrome**. Bercak 3D di label tetap sebagai “luka” (teks nav tetap terbaca, vellum di wine).
3. **Teknik:** canvas 2D overlay `pointer-events: none`, token `--color-accent` / `--color-accent-muted`, Motion `useReducedMotion`. Bukan library partikel baru, bukan WebGL penuh. Overlay Contact / Quick Info / project sheet / cursor ring tetap di atas lapisan darah. `prefers-reduced-motion: reduce` = tanpa percikan; selected kembali ke bercak diam.
4. **Clarity (UX1):** klaim first viewport boleh kena percikan (dikunci chat: unbounded). Teks chrome (wordmark, label nav, ID/EN) tetap kontras. Job IA tidak berubah.

### Reason

- Boss Rezi mengunci (2026-09-04): selected = animasi blood splatter yang dapat mengalir; opsi *full splatter*; batas = **tanpa batas halaman** selama item selected.
- ADR-029 sengaja menolak splatter agar situs tidak jadi gallery horror. Pengecualian ini eksplisit, terlokalisasi, dan terdokumentasi — bukan cabut identitas gothic-blood.

### Alternatives Considered

- Noda viscous hanya di dalam label — ditolak; Boss Rezi minta splatter penuh.
- Percikan singkat lalu mengendap — ditolak.
- Percikan hanya di chrome / drip ke hero saja — ditolak; dikunci unbounded.
- Library partikel / WebGL — ditolak; ADR-028/029: Motion + canvas/CSS.

### Impact / Follow-up

- Implementasi: **T-040.6** (`blood-splatter-layer.tsx`, `globals.css`).
- Update catatan T-038.1 / T-038.3 di [`tasks/v15-visual-identity.md`](../tasks/v15-visual-identity.md).
- ADR-029 poin 1 & 4: splatter tetap dilarang **kecuali** selected chrome per ADR ini.
