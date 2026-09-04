# Key Screen Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan pola layar kunci (blok konten & hierarki) untuk R1 — **bukan** wireframe piksel atau design token final.

---

# Overview

Lima permukaan R1: **Chrome** (S0), **Home**, **About** (label chrome: Proses Kerja / How I Work), **Contact** (modal), **Work index + project sheet** (S4, ADR-027). Pola mendukung F1–F7 dan prinsip UX1–UX7.

---

# Purpose

* Memberi blueprint blok untuk copy & implementasi nanti
* Mengunci hierarki first viewport dan Contact soft
* Menunda craft visual ke fase berikutnya tanpa mengosongkan acceptance UX

---

# Screen Inventory

| Screen | Route | Jobs utama |
| ------ | ----- | ---------- |
| S0 Chrome | Global | J7, navigasi F1–F7 |
| S1 Home | `/[id/en]/` | J1, J2, (J7) |
| S2 About | `/[id/en]/about` | J4, E4 |
| S3 Contact | Modal global (bukan route, final — ADR-019) | J3 |
| S4 Work index + project sheet | `/[id/en]/projects` + overlay M10 (ADR-027) | J2 |

---

# Pattern Notes

### S0 — Chrome

**Blok:** brand · primary nav (About = label lokal **Proses Kerja** / **Process**, ADR-020) · language switcher · **theme toggle (ADR-021)** · **Quick info panel (ADR-022)** · (opsional) availability tipis di header/footer.

**Theme toggle (ADR-021):** kontrol dark/light di chrome saat **kedua** tema hidup. Update 2026-09-04 / T-038.2: default ship **dark**; light di-hold; toggle **disembunyikan** sampai hold dicabut. Di mobile, Contact tetap di luar hamburger.

**Quick info panel (ADR-022):** overlay global (tab tepi kanan → drawer: bio, Services, Tools, Works index, Email, Links). Bukan route baru. Tampil di semua halaman R1 **termasuk Work index**; sheet M10 (ADR-027) overlay terpisah — jangan sembunyikan Quick Info karena sheet. Bukan pengganti Contact modal atau footer satelit.

**Aturan:** Contact selalu reachable dalam satu ketukan; **nav + switcher selalu visible di desktop**; di mobile (<1024px) nav halaman + switcher boleh di hamburger (ADR-020).

**Footer = pita Contact (ADR-025):** satu pita terakhir di semua rute — heading besar dari copy yang sudah dikunci + tombol 3D yang membuka **modal Contact yang ada** (bukan form baru) + baris legal + satelit LinkedIn/GitHub. Bukan garis “halaman vs footer” yang terpisah. Tombol Kontak di header tetap.

---

### S1 — Home

**Above the fold (wajib menang):**

1. Klaim positioning: **product builder** (tipografi dua baris; **tanpa potret**)
2. **Now (status pekerjaan)** — di dalam hero, bawah klaim: kicker + “saat ini di” + nama perusahaan (tautan situs). Bukan item katalog karya; bukan pengganti foto
3. Satu arah soft (ke About atau Contact) — tidak memaksa form; Contact = chrome + pita footer

**Tanpa potret di Home.** Hero 100svh = klaim di atas + Now di bawah. Foto diri hanya di S2 About. Jangan mengisi kekosongan dengan cutout wajah, blob, atau stock Unsplash.

**Di bawah fold / lanjut scroll:**

4. **Credibility line (bukti non-kartu)** — satu klaim singkat pengalaman/outcome (bukan grid, bukan list stack); mendukung hero
5. **Work teaser (bukti karya)** — 1–3 kartu: nama · peran/outcome; klik membuka sheet (M10); **satu-satunya** blok karya di Home
6. Penguat arah ke About (bukan 4 langkah proses penuh sebelum teaser)
7. Availability line (Should, opsional)

**Contact di Home (ADR-025):** tidak ada section `#contact-cta` terpisah. Arah Contact = pita footer (S0) + tombol chrome. Hover tile teaser boleh diperkuat (scale/overlay).

**Bedakan blok:** credibility line ≠ teaser. Jangan isi keduanya dengan daftar project/stack yang sama.

**Anti-pattern:** hero yang hanya nama tanpa klaim; grid teaser berlebihan; dual CTA agresif (“Hire me” + pricing); duplikasi credibility + teaser sebagai tech bingo.

---

### S2 — About

**Label chrome:** ID **"Proses Kerja"** / EN **"How I Work"** (ADR-020 + kunci T-021.1). Route tetap `/[id/en]/about`; nama modul tetap M2 About. Halaman **tidak digabung ke Home** (ADR-025).

**Pola rest / active (ADR-025):** rest menampilkan judul/nomor/display; body copy T-021.3 muncul saat item aktif — hover + focus keyboard di desktop, **klik di mobile** (hover saja gagal di sentuh). Copy tidak dipotong dan tidak ditulis ulang.

**Blok berurutan:**

1. Hero — h1 display besar + **potret 4:5** (satu-satunya foto diri R1); lead: baris pertama terlihat, baris kedua on expand
2. Offers — kartu bernomor oversized + ikon; title selalu terlihat; `body` hanya saat aktif
3. Approach / Values — kicker + judul quote besar; kalimat penjelas hanya saat item aktif
4. Proses 4 langkah — baris satu-terbuka + watermark angka; rest = nomor + judul; active = paragraf `body`
5. Soft CTA Contact **bukan** section terpisah — pindah ke pita footer (S0)

**Anti-pattern:** CV kronologis sebagai satu-satunya bentuk; essay tanpa scanability; framing “developer for hire” yang menggeser brand; menumpuk seluruh body di rest.

---

### S3 — Contact

> **Final (2026-08-15, ADR-019):** Contact = Dialog/Modal global, **bukan** halaman/route terpisah — keputusan T-016 sudah selesai. Form email + message diizinkan di dalam modal. Sisanya di bawah ini tetap berlaku.

**Blok berurutan:**

1. Judul + salinan soft (kapan relevan menghubungi; ekspektasi diskusi)
2. **Primer — Email** (visual & urutan pertama; mailto atau alamat + copy) — *boleh disertai form singkat (email + message) per ADR-019, tetap tampil sebelum blok Socials*
3. **Satelit** — LinkedIn, GitHub (setingkat satu sama lain, di bawah Email)
4. Availability line bila belum di Home
5. Tanpa calendar, harga, WA, Instagram (form dikecualikan dari larangan ini per ADR-019)

**Anti-pattern:** deretan ikon sosial setara Email; Contact *hanya* di footer tanpa modal/Email primer; hard sell; Contact tanpa Email yang bisa diketuk/dikunjungi. Pita footer yang **membuka modal yang sama** (ADR-025) bukan pengganti Email primer di dalam modal.

---

### S4 — Work index + project sheet

**Work index (`/projects`):** katalog tile (M9). **Klik tile** (Work index **atau** teaser Home) membuka **project sheet dari bawah** (M10, ADR-027) — live preview (iframe) atau galeri, services, location or company, year, description. Live/repo tautan hanya di dalam sheet. Tautan “Semua proyek” di Home tetap ke index.

**Komponen:** shadcn `Drawer` dari bawah (T-035, ADR-028), lebar penuh, di-skin `.ps-*`. Astryx `BottomSheet` dicoba dulu (T-026.2) lalu diganti overlay custom karena tidak ada prop lebar penuh; overlay custom itu diganti `Drawer` saat migrasi. Bukan `/work/[slug]` di R1.

---

# Responsive Considerations

* **Desktop (≥1024px):** hierarki vertikal jelas; nav horizontal; teaser 1–3 dalam satu baris atau stack rapi.
* **Mobile (<1024px):** first viewport tetap memuat klaim inti tanpa mengandalkan hover; teaser stack vertikal; Contact Email tetap paling menonjol di modal.
* **Ponsel sempit (kontrak mockup, 2026-08-20):** lantai **320px**; acuan **375px**. Hero dua baris (mis. “Membangun” / “produk.”) **muat tanpa clip atau overflow-x**. Header chrome satu baris. Work teaser: judul + tautan “lihat semua” boleh **stack** (bukan dipaksa satu baris); tile featured **lebih tinggi** daripada strip 16:8. Modal Contact **muat di viewport** (scroll di dalam kartu bila perlu). Tab Quick info tidak menabrak judul hero.
* **Locale:** layout blok sama di `id` dan `en`; beda hanya salinan.
* Panjang salinan ID/EN boleh beda, **makna setara**.
* Acuan visual: **kode produksi** (`app/`, token `app/globals.css`, shadcn + Tailwind — ADR-024 / ADR-028). `design-mockups/` arsip port R1, bukan keputusan desain terbaru.

---

# Success Criteria

* S1 first viewport lulus uji “siapa & untuk siapa” tanpa scroll panjang
* S1 membedakan credibility line (non-kartu) vs work teaser (kartu karya); tidak duplikasi tech bingo
* S3 Email jelas sebagai primer; satelit terbatas LinkedIn + GitHub
* S0 memungkinkan F3 (ganti bahasa) dari setiap screen
* Meta/share & content readiness di `information-architecture.md` terpenuhi sebelum live
* Pola cukup untuk handoff Architecture/Engineering tanpa wireframe wajib

---

# Decision Rules

* Mengubah Contact primer dari Email → keputusan Boss Rezi + update ADR bila material
* Menambah blok form/WA/IG ke S3 R1 → ditolak kecuali ADR baru
* Detail visual (type, warna, motion) → 06-engineering / desain eksekusi; jangan mengunci di sini

---

# Current Status

| Item | Status |
| ---- | ------ |
| Key Screen Patterns | **Baseline v1.0** (dokumen ini) |
| Soft CTA | Email primer; LinkedIn/GitHub satelit; tanpa WA/IG |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `user-flows.md`
* `navigation-patterns.md`
* `../03-user/insights.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/decisions/ADR-025-craft-motion-hess-mazur.md`
* `../../project-manager/decisions/ADR-027-work-project-bottom-sheet-m10.md`
* `../../project-manager/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
