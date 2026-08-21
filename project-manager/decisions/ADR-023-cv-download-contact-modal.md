# Decision ADR-023

### Title

Tambahan M3 Contact — tautan unduh CV/Portofolio (PDF)

### Status

Accepted

### Date

2026-08-21

### Decision

1. **Contact modal (M3, ADR-019) menambah satu tautan unduh CV/Portofolio** (file PDF nyata, `public/Resume_rezi_updated_agustus_2026.pdf`), ditempatkan di kolom kanan modal — setelah blok Sosial, sebelum availability line.
2. **Bukan halaman/route baru** — tetap di dalam Contact modal yang sudah ada; tidak menambah path di site map (selaras UX3 Lean surface, sama seperti M13/ADR-022).
3. **Bukan pengganti jalur mana pun** — email tetap jalur inbound primer (ADR-014/ADR-019); tautan CV bersifat suplemen bukti/kredibilitas, bukan form atau CTA inbound baru.
4. Copy dikunci lewat diskusi (T-021.4, 2026-08-21): label section `CV / Portofolio` (ID) / `CV / Portfolio` (EN); tautan `Unduh CV` (ID) / `Download CV` (EN). Terbuka di tab baru.
5. Ditemukan **bug kontras terpisah** saat pengerjaan T-021.4: beberapa teks Contact modal (`Mari`, availability line, `Detail Kontak`, `Sosial`) tak terbaca di light mode karena komponen `Text`/`Heading` Astryx menimpa warna lewat token tema (`--color-text-primary`) dengan specificity CSS yang dinaikkan sengaja, padahal panel modal ini didesain theme-independent (selalu dark-ink, lihat komentar `.ct-panel` di `app/globals.css`). Diperbaiki di file yang sama commit ini — bukan bagian dari keputusan produk, dicatat di sini karena ditemukan dalam sesi kerja yang sama.

### Reason

- Boss Rezi memerlukan jalur cepat bagi pengunjung Contact modal untuk mengunduh CV/Portofolio langsung, tanpa keluar dari overlay atau menunggu email balasan.
- `feature-modules.md` M3 sebelumnya hanya mencantumkan email + tautan satelit + availability line — fitur ini di luar draf awal, perlu dikunci sebagai keputusan formal sebelum masuk baseline (`ask-before-assuming.mdc`).
- Menempatkannya di Contact modal (bukan Quick Info/M13) dikonfirmasi eksplisit oleh Boss Rezi — Quick Info tetap glanceable context (bio/services/tools/works/email/links), bukan tempat unduhan dokumen.

### Alternatives Considered

- Taruh di Quick Info (M13) — tidak dipilih; Boss Rezi memilih Contact modal saja.
- Buat halaman `/cv` atau `/resume` tersendiri — ditolak; melanggar UX3 Lean surface, tidak perlu route baru untuk satu tautan unduhan.
- Taruh di footer global (M6) — tidak dibahas/tidak dipilih; scope diminta khusus di Contact modal.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` — M3 Contact, baris "Isi inti" tambah tautan unduh CV/Portofolio (cite ADR-023).
- `content/contact.ts` — `CV_FILE_HREF` + `cvLabel`/`cvDownload` (ID/EN).
- `app/[locale]/_components/contact-modal.tsx` — blok baru (label-caps + HStack ikon+link) setelah Sosial.
- `app/[locale]/_components/overlay-icons.tsx` — `DownloadIcon` baru.
- `app/globals.css` — style `.ct-cv-row`/`.ct-cv-link`; fix kontras `!important` pada `.ct-title-lead`, `.ct-title .ct-accent`, `.ct-label`, `.ct-label-caps`, `.ct-email-link`, `.ct-socials a`, `.ct-availability-text` (baru).
- `project-manager/tasks/v10-page-copy.md` — T-021.4 ditandai selesai dengan catatan fitur ini + fix kontras.
