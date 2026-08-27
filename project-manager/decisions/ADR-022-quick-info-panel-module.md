# Decision ADR-022

### Title

Modul baru M13 — Quick Info panel (overlay global, Must R1)

### Status

Accepted

### Date

2026-08-16

### Decision

1. **Modul baru M13 — Quick Info panel** masuk katalog produk sebagai **Must R1**. Ini overlay global, bukan halaman/route baru: tab vertikal di tepi kanan membuka drawer berisi bio, Services, Tools, Works index, Email, dan Links.
2. **Tampil di semua halaman R1** (Home, About/Proses Kerja, Work index) **kecuali Work case detail** (M10 / `work-case.html`). Saat M10 hidup di R2, pengecualian ini tetap berlaku kecuali keputusan terpisah mengubahnya.
3. **Bukan route baru** — tidak menambah path di site map. Overlay tidak melanggar **UX3 Lean surface** (jangan menambah *halaman* untuk “melayani” hiring); permukaan rute tetap Hybrid lean yang sudah di-override ADR-019/ADR-020 (Home · About · Work index + Contact sebagai modal).
4. **Tidak menggantikan Contact (ADR-019) atau footer satelit (M6):**
   - **Contact modal** tetap jalur inbound (form email/message + Contact details sebelum Socials).
   - **Footer** tetap rumah satelit LinkedIn/GitHub dan hygiene.
   - **Quick Info** adalah glanceable identity/context (siapa, apa yang dikerjakan, tools, indeks karya, email/links sebagai *rujukan cepat*). Jangan menaruh form Contact di dalam drawer; Email/Links di Quick Info bersifat tautan/rujukan, bukan duplikasi modal inbound.
5. Pola interaksi mengikuti mockup yang sudah disetujui (referensi karolinahess.com, tercatat di sesi 2026-08-14): tab tepi kanan → drawer dari kanan; overlay custom (Astryx tidak punya Drawer generik — ADR-018 tetap; bukan alasan pindah shadcn). Copy di dalam panel masih boleh placeholder sampai task konten.
6. Implementasi komponen overlay di kode produksi (belum ada saat keputusan ini) menyusul sebagai task terpisah — ADR ini mengunci keputusan modul & batas terhadap Contact/footer, bukan implementasi.

### Reason

- Panel sudah dibangun penuh di mockup lintas beberapa sesi (`design-mockups/shared.js` `mountQuickInfo()`, semua halaman kecuali `work-case.html`) dan disetujui Boss Rezi, tetapi **belum pernah** masuk ADR atau baseline `product-discovery/` — dokumentasi tertinggal dari permukaan yang sudah hidup.
- Memformalkan sebagai modul (M13) mencegah Quick Info “nyelip” sebagai dekorasi chrome (M6) atau sebagai halaman baru yang akan bentrok UX3.
- Batas eksplisit vs Contact modal dan footer menghindari tiga permukaan yang mengklaim peran inbound yang sama.

### Alternatives Considered

- Tidak memformalkan — biarkan hanya di mockup sampai R2 — **ditolak**; Boss Rezi memilih formalisasi sebagai modul baru setelah audit mockup vs docs.
- Masukkan ke M6 (Site Chrome) sebagai bullet chrome saja, tanpa ID modul baru — tidak dipilih; Quick Info punya konten sendiri (bio/services/tools/works) yang bukan navigasi/footer.
- Jadikan halaman/route `/info` atau sejenisnya — ditolak; itu akan melanggar UX3 Lean surface.
- Gabungkan dengan Contact modal (satu overlay untuk inbound + bio/services) — tidak dipilih; Contact tetap jalur inbound (ADR-019); Quick Info tetap glanceable context.
- Tampilkan juga di Work case detail — ditolak; mockup secara konsisten mengecualikan `work-case.html`.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` — tambah **M13 — Quick Info panel** (Core/Supporting) + update diagram Module Relationships; M2 boleh catat label lokal About secara terpisah (ADR-020).
- `product-discovery/02-product/mvp-definition.md` / `feature-priority.md` / `release-roadmap.md` — Must Have / R1 Must tambah M13 (cite ADR-022).
- `product-discovery/04-ux/navigation-patterns.md` — Secondary Navigation: baris Quick info panel (global overlay, semua halaman kecuali Work case).
- `product-discovery/04-ux/information-architecture.md` — Content Hierarchy (lintas halaman/chrome): baris Quick info overlay.
- `product-discovery/04-ux/key-screen-patterns.md` — S0 Chrome: blok Quick info panel.
- `product-discovery/04-ux/ux-principles.md` — catatan: overlay tidak dianggap halaman baru (selaras UX3).
- `project-manager/tasks/v03-development-r1.md` — task implementasi M13 (konten placeholder → copy nyata + komponen overlay, exclude Work case).

### Update — 2026-08-16

Task ID resmi untuk implementasi: **T-020** (`v03-development-r1.md`), subtask T-020.1 (konten) + T-020.2 (komponen overlay).

### Update — 2026-08-26 (ADR-027)

Pengecualian “Work case detail” di keputusan asli merujuk **halaman** `work-case.html` / `/work/[slug]`. M10 R1 = **overlay sheet**, bukan halaman itu. Quick Info **tetap tampil di Work index**. Jangan unmount Quick Info karena M10. Saat sheet terbuka, tutup Quick Info sementara (pola Contact), lalu tab tetap ada.
