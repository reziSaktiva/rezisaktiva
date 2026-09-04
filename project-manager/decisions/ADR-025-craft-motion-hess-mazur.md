# Decision ADR-025

### Title

Craft pass Hess/Mazur — ritme, tipe, interaksi, dan gerak (bukan palet)

### Status

Accepted

### Date

2026-08-24

### Decision

1. **Naikkan kadar craft R1** dengan meniru ritme layout, tipe oversized, interaksi rest/active, dan transisi dari [karolinahess.com](https://karolinahess.com/about) serta [mazurbartek.com](https://mazurbartek.com/) — **bukan** palet cream/terracotta, bukan spectacle Framer, bukan playground tanpa bukti karya.
2. **About tetap halaman sendiri** (`/[locale]/about`, modul M2). Usul memindahkan seluruh isi ke Home lalu menghapus Proses Kerja **tidak dilanjut**. Copy T-021.3 **tidak ditulis ulang**; teks panjang diakali di rest: judul/nomor besar terlihat; body muncul lewat hover (desktop/keyboard) atau klik (mobile).
3. **Warna, tema `rezisaktiva`, elevasi 3D chrome, Contact modal, dan Quick Info dipertahankan.** Chrome 3D (`--elev-3d`, pill nav, tombol) tidak diubah di pass ini kecuali regresi.
4. **Fondasi gerak situs (sekali, semua halaman):**
   - Smooth-scroll inertia (Lenis, window scroll; AppShell `height="auto"`). **Pause** saat Contact modal atau Quick Info terbuka. **Off** jika `prefers-reduced-motion`. Bukan `scroll-behavior: smooth` native. Tanpa parallax berat (batas ADR-017 tetap).
   - Transisi halaman mengikuti ritme karolinahess.com (snapshot CSS, bukan View Transitions API — Next App Router sering timeout DOM update): halaman lama naik + scale 0.5 selama 1s; halaman baru masuk dari bawah 0.4s setelah delay 0.4s; easing `cubic-bezier(0.65, 0, 0.43, 1)`. Warna celah = `--color-background-body` tema, bukan palet Hess. Reduced-motion = ganti halaman instan. Chrome tetap (nav tidak ikut scale).
5. **Contact menyatu footer** di semua rute: pita terakhir (heading dari copy yang sudah dikunci + tombol 3D yang membuka **modal Contact yang ada**) + baris legal/satelit. Section `#contact-cta` terpisah di tengah/akhir halaman dihapus. Tombol Kontak di header tetap (ADR-019).
6. **Home & Work tetap menaruh bukti di depan.** Urutan Home J1/J2 + teaser tidak digeser oleh 4 langkah proses penuh. Hover tile/CTA diperkuat; h1/section title ditarik ke ritme display yang lebih besar (token/`clamp`, bukan hex).
7. Astryx tidak punya Lenis atau transisi halaman — lapisan custom diizinkan. Transisi halaman memakai token `--duration-page-*` / `--ease-page-transition` (bukan `--duration-medium`). Scroll-reveal yang sudah ada (`home-motion.tsx`) tetap.

Ini **perluasan material vs ADR-017** (kadar craft + dua teknik baru: inertia scroll dan page overlay), bukan selip ke T-021/T-024.

### Reason

- Boss Rezi mengunci acuan gerak/layout Hess + Mazur setelah diskusi About “terlalu tipis”; solusinya craft + interaksi, bukan menghapus halaman atau menulis ulang copy.
- ADR-017 sudah menaikkan motion sebagai identitas, tetapi belum mengizinkan Lenis/page wipe secara eksplisit; jejak formal dibutuhkan sebelum kode.
- Urutan **clarity → presence → craft** (ADR-006) tetap: bukti karya di Home/Work tidak dikorbankan; palet dan pesan product builder tidak diganti.

### Alternatives Considered

- Pindah seluruh About ke Home dan hapus rute Proses Kerja — ditolak; menabrak job Home (J1/J2) dan J4 sebagai deepen opsional.
- Tulis ulang / potong copy T-021 supaya “muat” di rest — ditolak; panjang diakali lewat rest/active.
- Tiru palet Hess atau spectacle Framer — ditolak; tema `rezisaktiva` + batas clarity ADR-017.
- Hanya `scroll-behavior: smooth` CSS — ditolak; bukan ritme inersia yang diacu dari Mazur.
- Selip ke T-021/T-024 tanpa ADR — ditolak; perubahan material vs ADR-017.

### Impact

- `product-discovery/06-engineering/design-tokens.md` §Motion — tambah Lenis + page overlay + pause overlay + reduced-motion.
- `product-discovery/04-ux/key-screen-patterns.md` — About rest/active; footer = pita Contact; Home tanpa section CTA terpisah.
- `product-discovery/01-business/competitor-analysis.md` — selaraskan “implementasi craft” Hess/Mazur (bukan hanya arah seni mockup).
- ADR-017 — tetap berlaku untuk batas clarity; teknik baru merujuk ADR ini.
- Task **T-025** di `project-manager/tasks/v03-development-r1.md`.

### Update — 2026-09-04 (ADR-029)

Pola yang **tetap**: About sebagai halaman sendiri, rest/active, pita Contact, Lenis, reduced-motion, bukti karya di Home/Work. Bahasa visual yang **tidak lagi wajib**: palet lama, chrome 3D kuning, transisi halaman wajib meniru ritme Hess 1s/0.4s — nasib konkret dikunci di **T-038.3**. Identitas visual baru = [ADR-029](ADR-029-visual-identity-gothic-blood.md).
