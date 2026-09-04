# Decision ADR-021

### Title

Dark mode toggle UI naik jadi Must R1 (override `design-tokens.md` + baseline Product)

### Status

Accepted

### Date

2026-08-16

### Decision

1. **Toggle dark/light di chrome naik status dari Should/Later menjadi Must R1.** Ini override eksplisit `product-discovery/06-engineering/design-tokens.md` (baris "Toggle dark mode di UI = Should / Later — bukan Must R1" dan tabel Tema: "Toggle di chrome | Should / Later — bukan blocker exit R1") serta baseline Product yang belum memasukkan toggle ke Must Have (`feature-priority.md`, `mvp-definition.md`, `release-roadmap.md`).
2. **Default ship tetap light** (`<Theme mode="light">`). Toggle tidak mengubah default; dark hanya aktif setelah user memilih, dan preferensi disimpan (pola mockup: `localStorage`). `prefers-color-scheme` tetap Could — tidak mengganti default light tanpa keputusan terpisah.
3. **Penempatan chrome mengikuti mockup + ADR-020:** toggle selalu terlihat di luar hamburger (bersama tombol Contact). Ini menutup inkonsistensi internal: `navigation-patterns.md` Mobile Considerations sudah mengasumsikan "toggle tema" ada di chrome sejak override ADR-020, padahal token/priority masih menandainya Should/Later.
4. **Fondasi token dark yang sudah ada tidak berubah** — Astryx `Theme` + prop `mode` (`'light' | 'dark' | 'system'`) tetap sumber resolusi. ADR ini hanya mengunci **kontrol UI** sebagai syarat exit R1, bukan merancang ulang sistem token.
5. Implementasi komponen toggle di kode produksi (belum ada di `site-header.tsx` saat keputusan ini) menyusul sebagai task terpisah — ADR ini mengunci keputusan scope, bukan implementasi.

### Reason

- Toggle sudah dibangun penuh dan disetujui di mockup lintas sesi (`design-mockups/shared.js`, semua halaman) — menandainya Should/Later membuat dokumentasi tertinggal dari permukaan yang sudah disetujui Boss Rezi.
- `navigation-patterns.md` (override ADR-020) sudah mewajibkan toggle tema selalu terlihat di luar hamburger; tanpa ADR ini, chrome Must dan token/priority saling bertentangan.
- Menaikkan toggle (bukan memaksa dark sebagai default) menjaga clarity light-first (UX1) sambil memberi kontrol yang sudah ada di mockup.

### Alternatives Considered

- Tetap Should/Later — toggle ada di mockup tapi bukan syarat exit R1 (selaras `design-tokens.md` lama) — **ditolak** oleh Boss Rezi setelah audit mockup vs docs.
- Dark sebagai default ship (ganti light) — tidak dipilih; default light tetap.
- Ikuti `prefers-color-scheme` sebagai Must (tanpa toggle eksplisit) — tidak dipilih; kontrol UI di chrome yang dikunci, system preference tetap Could.

### Impact / Follow-up

- `product-discovery/06-engineering/design-tokens.md` — Toggle di chrome → Must R1; tabel Tema + ringkasan kontrak disesuaikan (cite ADR ini).
- `product-discovery/02-product/feature-modules.md` — M6 (Site Chrome) tambah bullet toggle tema (ADR-021).
- `product-discovery/02-product/mvp-definition.md` / `feature-priority.md` / `release-roadmap.md` — Must Have / R1 Must tambah Theme toggle (cite ADR-021).
- `product-discovery/04-ux/navigation-patterns.md` — Mobile Considerations: "toggle tema" direferensikan ke ADR-021 (bukan lagi asumsi tanpa prioritas).
- `product-discovery/04-ux/ux-principles.md` / `key-screen-patterns.md` — catatan singkat: toggle tidak mengubah default light-ship.
- `project-manager/tasks/v03-development-r1.md` — subtask implementasi komponen toggle di chrome (site-header); hapus "Dark mode toggle UI (Should/Later)" dari daftar yang tidak masuk backlog R1.

### Update — 2026-08-16

Task ID resmi untuk implementasi: **T-013.4** (`v03-development-r1.md`, di bawah parent T-013 Site chrome R1).

### Update — 2026-09-03 (ADR-028)

Mekanisme token berganti: class `dark` di `<html>` + cookie `rz-theme`, bukan `<Theme mode>` Astryx. Lihat [ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md). Keputusan produk default light **diganti** update 2026-09-04.

### Update — 2026-09-04 (T-038.2 / ADR-029)

1. **Default ship = dark.** Arah seni gothic-blood dikerjakan sebagai tema gelap. Poin 2 (light-first) **tidak lagi berlaku** selama hold di bawah.
2. **Light mode di-hold, bukan dihapus.** Token/CSS light yang ada di-comment (arsip) di **T-039** supaya tidak hilang; jangan invert palet baru. Skin light gothic (vellum/naskah) **bukan** scope v15 — task terpisah saat hold dicabut.
3. **Toggle disembunyikan di chrome** selama hold. File `theme-toggle.tsx` + cookie `rz-theme` + anti-flash **tetap**. Jangan uninstall. Saat light dihidupkan lagi, toggle kembali Must di luar hamburger (poin 1 & 3 asli).
4. Selama hold: jangan render palet krem light lama ke pengunjung (cookie `light` tidak boleh menampilkan tema lama). `prefers-color-scheme` tetap Could.
