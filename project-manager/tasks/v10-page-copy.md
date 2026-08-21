# v10 — Page copy R1 (semua teks)

File task **tersendiri** (bukan v0.3). Nomor v01–v06 tetap untuk urutan rilis yang sudah direncanakan (Product Discovery → Bootstrap → Development R1 → …). Copy tidak menempati slot v04–v06.

Isi: **semua teks** yang dibaca user di R1: judul, body, label tombol, form, footer, Quick Info, meta — ID dan EN.

Bukan task layout/Astryx. Implementasi halaman tetap di [`v03-development-r1.md`](v03-development-r1.md) (T-013 … T-020). **Semua** kunci teks + tulis ke `content/` + pasang ke UI yang sudah ada hidup di **T-021** — tidak ada subtask copy di v03.

Placeholder di mockup (`design-mockups/shared.js` `COPY`) **bukan** copy final. Boleh jadi titik awal diskusi.

---

## Kontrak ke UI (hanya dicatat di sini)

- Layout/komponen v03 boleh paralel dengan T-021: mockup untuk struktur/spacing; teks di layar **sementara** dari mockup.
- Parent UI v03 **Done** saat layout/komponen selesai — tidak menunggu copy.
- Jangan mengarang string user-facing di task UI v03.
- **Selesai T-021.N** = wording terkunci **dan** tertulis di `content/` (plus pasang ke chrome/nav/footer/meta yang sudah ada). T-013 tetap Done; jangan daur ulang ID T-013.
- **T-018.1** (exit R1 di v03) baru boleh dijalankan setelah **T-021.1–T-021.7** ✅.

---

## Cara mengerjakan (wajib)

Pekerjaan ini **diskusi dengan Boss Rezi**, bukan AI mengarang sendiri lalu “selesai”.

1. Satu subtask (satu permukaan) per putaran diskusi — jangan dump semua halaman sekaligus.
2. AI menyiapkan slot teks (dari mockup + task) dan pertanyaan yang membantu memutuskan kata. Boss Rezi yang mengunci wording, klaim, dan nada.
3. Mockup / baseline product dipakai sebagai **acuan pesan** (product builder, fullstack, AI edge jujur, CTA soft). Kalimat final hanya yang sudah disetujui di diskusi.
4. Paritas **makna** ID/EN, bukan terjemahan kaku kata-per-kata.
5. Setelah dikunci: tulis ke `content/` dan pastikan UI yang sudah ada membacanya. **Layout UI boleh paralel** (teks sementara dari mockup). **T-021.1 termasuk menerapkan** label/URL ke `lib/nav.ts` + footer (T-013 tidak dibuka lagi).
6. Jangan mengisi teks Work case / detail (M10, `work-case.html`) — itu R2.

**Baca dulu (semua subtask):** `product-discovery/02-product/feature-modules.md`, `01-business/product-vision.md` (klaim yang boleh/tidak), ADR-002, ADR-010, ADR-019, ADR-020, ADR-022, `design-mockups/` halaman terkait + `shared.js` `COPY`.

---

## T-021 — Kunci copy R1 (diskusi)

* **Status:** ⏳ Todo
* **Domain:** Product / Content
* **Output:** copy terkunci per permukaan, ID+EN, di `content/`
* **Urutan usulan:** Home (T-021.2) dulu — selaras fokus T-014 — lalu chrome bersama, About, Contact, Work index, Quick Info, meta.

### Subtasks

- [x] **T-021.1** — Chrome bersama: brand `rezisaktiva`; nav Home / Proses Kerja / Karya (atau revisi); tombol Contact; ID/EN; aria menu & tema; footer identitas + label LinkedIn/GitHub; URL satelit. Slot mockup: `nav.*`, `theme.aria`, footer. **Selesai = terkunci di `content/` dan terpasang** di `lib/nav.ts` + `site-footer` (T-013 tetap Done; jangan daur ulang ID T-013).
  * ✅ **Selesai (2026-08-20):** Nav ID "Home / Proses Kerja / Karya" (tidak berubah); EN "Home / How I Work / Work" (dikunci — bukan "Process" lama, bukan literal "My Process" mockup). Tombol Contact "Kontak" (ID) / "Contact" (EN) — diterjemahkan, bukan literal mockup. Aria hamburger sekarang toggle sesuai state ("Buka menu"/"Tutup menu", "Open menu"/"Close menu") lewat `MENU_TOGGLE_LABEL` baru di `lib/nav.ts` (sebelumnya statis "Menu", tidak sesuai mockup `nav.menu`/`nav.menuClose`). Aria tema sudah sesuai mockup sejak sebelumnya (`theme-toggle.tsx`). Footer: URL LinkedIn nyata (`linkedin.com/in/rezi-saktiva-bb89a12a1`) + GitHub (`github.com/reziSaktiva`) — sebelumnya LinkedIn placeholder `#`; `site-footer.tsx` sekarang membaca `CONTACT_SOCIALS` dari `content/contact.ts` (satu sumber untuk footer + Contact modal), bukan hardcode terpisah.
- [ ] **T-021.2** — Home: `h1` (judul), bukti/credibility, blok karya terpilih (label, judul seksi, CTA “lihat semua”), 1–3 item teaser (nama · peran/outcome), seksi contact (label, judul, body, CTA). Slot: `home.*`. Item teaser selaras daftar T-021.5. Tulis ke `content/home.ts` (UI Home sudah terpasang di T-014).
  * ⏳ **Progres (2026-08-20):** `h1` ✅, Bukti ✅ (AI sebagai pengali skill, bukan pengganti), seksi karya (judul + CTA) ✅, blok Contact (judul/body/CTA) ✅ — semua terkunci & tertulis di `content/home.ts`. **Belum**: teaser (nama/outcome per karya) — menunggu daftar kurasi final T-021.5, bukan placeholder `Nama Project 0N`.
- [x] **T-021.3** — About / Proses Kerja: `h1`, lead, fullstack, AI, chip, “yang bisa saya bantu”, approach, values, langkah proses, note, CTA. Slot: `about.*`, `section.process`. Tulis ke `content/` (layout: T-015.2).
  * ✅ **Selesai (2026-08-20):** Copy ditulis ulang total (bukan salinan mockup lagi) — teks final dari Boss Rezi, menonjolkan cara kerja spesifik: orkestrasi tim AI subagent lewat pipeline discovery → arsitektur → build → ship, keputusan terdokumentasi via ADR (bukan klaim generik "AI accelerator"). Offer AI diganti judul "AI & Orchestration". EN = adaptasi makna, bukan terjemahan literal. Diverifikasi tampil benar di `/id/about` dan `/en/about`.
- [x] **T-021.4** — Contact modal: judul, lead, email + note, availability, label form (email/pesan/placeholder/submit/sent), detail kontak, salin email, sosial, tutup. Slot: `contact.*` (bukan route `/contact`). Email nyata + URL LinkedIn/GitHub. Tulis ke `content/` (layout: T-016.2).
  * ✅ **Selesai (2026-08-21):** Semua label/body form dikonfirmasi apa adanya dari draf mockup (titleLead/titleAccent, email/pesan, submit/sent, close, detailsLabel/copyLabel/copied, socialsLabel, availability) — dikunci lewat diskusi, bukan diubah. **Bug kontras ditemukan & diperbaiki**: beberapa teks (`Mari`, availability line, `Detail Kontak`, `Sosial`) tak terbaca di light mode karena `Text`/`Heading` Astryx menimpa warna lewat class ber-specificity tinggi (`--color-text-primary` token tema), padahal panel modal ini theme-independent (selalu dark-ink). Fix: tambah `className` dedicated (`ct-title-lead`, `ct-availability-text`) + `!important` pada rule warna `.ct-*` terkait di `app/globals.css` (lihat komentar di file). **Fitur unduh CV/Portofolio dipisah ke T-023** (⏸️ Deferred) — ditemukan gap saat code review: file CV yang ada sepenuhnya berbahasa Indonesia, sementara link yang sama akan tampil juga di locale EN; Boss Rezi memutuskan tunda sampai CV Inggris siap (ADR-023).
- [x] **T-021.5** — Work index: `h1`, lead, label tile (preview / tautan bukti — **tanpa** copy halaman case M10), CTA bawah, daftar karya kurasi (nama, outcome, tautan repo/live). Slot: `work.h1`, `work.lead`, `work.preview`, `work.proof` (arti R1: tautan keluar atau placeholder, bukan “baca cerita” ke M10 kecuali Boss Rezi mengunci sebaliknya), `work.cta.*`. Tulis ke `content/` (layout: T-019.2; teaser Home ikut T-021.2).
  * ✅ **Selesai (2026-08-20):** Daftar karya kurasi terkunci — 8 item dari `private/Resume_rezi_updated_agustus_2026.md` (SMC Migration & Personal Portfolio termasuk; Curious ditandai jujur sebagai dihentikan product owner, bukan gagal teknis). `content/work.ts` ditulis ulang + `WorkTile`/`WorkPage` diwire supaya tile Work index klik ke `item.href` (repo/live nyata) di tab baru; SMC Migration tanpa tautan (tidak ada URL publik). `h1`/`lead`/`work.cta.*` terkunci lewat diskusi: `h1` ID "Proyek / saya." — EN "My / Projects" (mixed-language dikunci eksplisit, bukan terjemahan literal); `lead` ID "Kumpulan proyek dari pengalaman fullstack saya, dengan beberapa proyek terbaru mengeksplorasi AI ecosystem yang saya kembangkan sendiri." (EN adaptasi makna); CTA "Ada yang mau dibahas?" + "Hubungi saya" (draf awal dikonfirmasi apa adanya).
- [ ] **T-021.6** — Quick Info: tab, judul, bio, Services, Tools, Works index (rujukan ke daftar T-021.5), Email, Links, tutup. Slot: `qi.*`. Bukan form Contact. Tulis ke `content/` (layout: T-020.2).
- [ ] **T-021.7** — Meta destinasi: `title` + `description` per permukaan R1 (Home, About, Work index) per locale; Contact = modal jadi tidak punya title halaman. Slot mockup: `title.home`, `title.about`, `title.work`. Tulis ke `content/` / metadata UI (OG/canonical tetap T-017.2).

---

## T-023 — Unduh CV/Portofolio di Contact modal (⏸️ Deferred)

* **Status:** ⏸️ Deferred — menunggu CV versi Inggris
* **Domain:** Product / Content
* **Keputusan penempatan:** [ADR-023](../decisions/ADR-023-cv-download-contact-modal.md) — Contact modal (bukan Quick Info, bukan route baru), setelah blok Sosial, sebelum availability line. Keputusan ini **tetap berlaku**; hanya eksekusi yang ditunda.
* **Alasan ditunda (2026-08-21):** File CV yang tersedia (`private/Resume_rezi_updated_agustus_2026.md` / PDF turunannya) sepenuhnya berbahasa Indonesia. Link unduh yang sama akan tampil juga di locale EN — berpotensi tidak sejalan dengan prinsip paritas makna ID/EN (§ Cara mengerjakan poin 4). Ditemukan saat code review PR T-021.4.
* **Prasyarat sebelum implementasi:**
  1. CV/Portofolio versi Inggris — **Boss Rezi menyiapkan sendiri** (dikonfirmasi 2026-08-21), bukan draf terjemahan AI. Belum ada filenya.
  2. Setelah CV EN siap: dua file per locale (`CV_FILE_HREF` jadi `Record<Locale, string>`, bukan satu string), tombol tetap satu di kolom kanan modal — mengikuti file sesuai locale aktif.
* **Referensi implementasi yang sempat dibuat (di-revert dari PR T-021.4, boleh dipakai ulang sebagai starting point):** `content/contact.ts` (`CV_FILE_HREF`, `cvLabel`/`cvDownload`), `contact-modal.tsx` (blok label-caps + `HStack` ikon+link setelah Sosial), `overlay-icons.tsx` (`DownloadIcon`), `app/globals.css` (`.ct-cv-row`/`.ct-cv-link`). Lihat commit revert di riwayat git branch `feat/contact-modal-cv-download` untuk kode aslinya.
* **Temuan review lain yang perlu diperhatikan saat implementasi ulang:** atribut `download` pada `<Link>` (supaya "Unduh"/"Download" benar-benar memicu unduhan, bukan cuma buka tab baru), `isExternalLink`/anotasi a11y untuk tab baru, dan pertimbangkan Icon jadi children `<Link>` (bukan sibling) supaya hover/focus menyatu.

---

## Di luar file ini

- Copy Work case (`case.*`) — R2 / T-019 catatan M10
- String murni UI library Astryx yang tidak tampil sebagai copy brand
- Implementasi komponen (T-014.2, T-015.2, …)
