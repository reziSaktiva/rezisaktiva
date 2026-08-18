# v10 — Page copy R1 (semua teks)

File task **tersendiri** (bukan v0.3). Nomor v01–v06 tetap untuk urutan rilis yang sudah direncanakan (Product Discovery → Bootstrap → Development R1 → …). Copy tidak menempati slot v04–v06.

Isi: **semua teks** yang dibaca user di R1: judul, body, label tombol, form, footer, Quick Info, meta — ID dan EN.

Bukan task layout/Astryx. Implementasi halaman tetap di [`v03-development-r1.md`](v03-development-r1.md) (T-014 … T-020). Copy yang dikunci di sini dipakai subtask konten di sana (`T-014.1`, `T-015.1`, …) dan meta `T-017.1`.

Placeholder di mockup (`design-mockups/shared.js` `COPY`) **bukan** copy final. Boleh jadi titik awal diskusi.

---

## Cara mengerjakan (wajib)

Pekerjaan ini **diskusi dengan Boss Rezi**, bukan AI mengarang sendiri lalu “selesai”.

1. Satu subtask (satu permukaan) per putaran diskusi — jangan dump semua halaman sekaligus.
2. AI menyiapkan slot teks (dari mockup + task) dan pertanyaan yang membantu memutuskan kata. Boss Rezi yang mengunci wording, klaim, dan nada.
3. Mockup / baseline product dipakai sebagai **acuan pesan** (product builder, fullstack, AI edge jujur, CTA soft). Kalimat final hanya yang sudah disetujui di diskusi.
4. Paritas **makna** ID/EN, bukan terjemahan kaku kata-per-kata.
5. Setelah dikunci: tulis ke `content/` (kontrak folder: `content/README.md`). Baru boleh dianggap input untuk task UI.
6. Jangan mengisi teks Work case / detail (M10, `work-case.html`) — itu R2.

**Baca dulu (semua subtask):** `product-discovery/02-product/feature-modules.md`, `01-business/product-vision.md` (klaim yang boleh/tidak), ADR-002, ADR-010, ADR-019, ADR-020, ADR-022, `design-mockups/` halaman terkait + `shared.js` `COPY`.

---

## T-021 — Kunci copy R1 (diskusi)

* **Status:** ⏳ Todo
* **Domain:** Product / Content
* **Output:** copy terkunci per permukaan, ID+EN, di `content/`
* **Urutan usulan:** Home (T-021.2) dulu — selaras fokus T-014 — lalu chrome bersama, About, Contact, Work index, Quick Info, meta.

### Subtasks

- [ ] **T-021.1** — Chrome bersama: brand `rezisaktiva`; nav Home / Proses Kerja / Karya (atau revisi); tombol Contact; ID/EN; aria menu & tema; footer identitas + label LinkedIn/GitHub; URL satelit. Slot mockup: `nav.*`, `theme.aria`, footer. Dipakai chrome T-013 (sebagian sudah di `lib/nav.ts` — boleh dikunci ulang di sini).
- [ ] **T-021.2** — Home: `h1` (judul), bukti/credibility, blok karya terpilih (label, judul seksi, CTA “lihat semua”), 1–3 item teaser (nama · peran/outcome), seksi contact (label, judul, body, CTA). Slot: `home.*`. Item teaser selaras daftar T-021.5.
- [ ] **T-021.3** — About / Proses Kerja: `h1`, lead, fullstack, AI, chip, “yang bisa saya bantu”, approach, values, langkah proses, note, CTA. Slot: `about.*`, `section.process`.
- [ ] **T-021.4** — Contact modal: judul, lead, email + note, availability, label form (email/pesan/placeholder/submit/sent), detail kontak, salin email, sosial, tutup. Slot: `contact.*` (bukan route `/contact`). Email nyata + URL LinkedIn/GitHub. Dipakai T-016.1.
- [ ] **T-021.5** — Work index: `h1`, lead, label tile (preview / tautan bukti — **tanpa** copy halaman case M10), CTA bawah, daftar karya kurasi (nama, outcome, tautan repo/live). Slot: `work.h1`, `work.lead`, `work.preview`, `work.proof` (arti R1: tautan keluar atau placeholder, bukan “baca cerita” ke M10 kecuali Boss Rezi mengunci sebaliknya), `work.cta.*`. Dipakai T-019.1 + teaser Home.
- [ ] **T-021.6** — Quick Info: tab, judul, bio, Services, Tools, Works index (rujukan ke daftar T-021.5), Email, Links, tutup. Slot: `qi.*`. Bukan form Contact. Dipakai T-020.1.
- [ ] **T-021.7** — Meta destinasi: `title` + `description` per permukaan R1 (Home, About, Work index) per locale; Contact = modal jadi tidak punya title halaman. Dipakai T-017.1. Slot mockup: `title.home`, `title.about`, `title.work`.

---

## Di luar file ini

- Copy Work case (`case.*`) — R2 / T-019 catatan M10
- String murni UI library Astryx yang tidak tampil sebagai copy brand
- Implementasi komponen (T-014.2, T-015.2, …)
