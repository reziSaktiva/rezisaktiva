# Decision ADR-024

### Title

Kode produksi (Astryx) menggantikan mockup HTML sebagai sumber kebenaran visual

### Status

Accepted

### Date

2026-08-21

### Decision

1. **Mockup HTML di `design-mockups/` di-deprecate sebagai acuan desain.** Folder itu **arsip** port R1 (Tailwind CDN + HTML statis). Bukan kontrak visual yang mengikat untuk pekerjaan UI/UX baru. Jangan menyelaraskan kode ke mockup, jangan mewajibkan mockup baru sebelum kode, jangan menganggap mockup “lebih benar” daripada implementasi.
2. **Sumber kebenaran visual ke depan = kode produksi** (`app/`, tema built `rezisaktiva`, komponen Astryx per ADR-018) **+ arahan Boss Rezi di chat**. Iterasi desain langsung di Next.js. File mockup HTML **tidak** di-update agar “ikut” perubahan baru.
3. **Pola layar / IA / prinsip UX** di `product-discovery/04-ux/` tetap baseline (ADR-014 + override ADR-019…ADR-023). Yang berganti hanya **kontrak piksel/visual**: dulu mockup HTML; sekarang kode. Token kanvas/aksen yang sudah ada tetap di tema built (asal historis: `shared.css`); perubahan token baru dikunci di kode tema, bukan di mockup.
4. **Pekerjaan pertama** dengan aturan ini: perbaikan desain halaman About. Halaman lain tidak wajib “kembali ke mockup”; perubahan visual berikutnya juga berangkat dari kode.
5. Rule agent `.cursor/rules/ui-ux-mockup-check.mdc` (nama file dipertahankan) **dibalik isinya**: pelajari implementasi yang ada, ikuti arahan desain di chat/task, verifikasi terhadap kode + arahan — bukan terhadap HTML arsip.

### Reason

- Seluruh desain R1 yang ada di mockup sudah di-port ke kode (T-013…T-017, T-019, T-020, T-022). Menjaga dua kanvas (HTML Tailwind vs Next/Astryx) memaksa sinkronisasi ganda dan menahan iterasi.
- Mockup memakai Tailwind CDN; produksi memakai Astryx (ADR-018). Menyalin mockup sebagai SoT visual mengunci stack prototyping yang sudah ditinggalkan.
- Boss Rezi ingin memperbaiki About tanpa harus lebih dulu mengubah HTML arsip.

### Alternatives Considered

- Mockup HTML tetap SoT global; setiap perubahan desain update HTML dulu baru kode — ditolak; port R1 sudah selesai.
- Deprecate hanya untuk About; halaman lain tetap mockup-first — ditolak; Boss Rezi memilih deprecate global.
- Pindah SoT visual ke Figma — ditolak untuk sekarang; iterasi langsung di kode + chat.
- Hapus folder `design-mockups/` — tidak dilakukan; arsip tetap berguna sebagai jejak sejarah R1, bukan acuan hidup.
