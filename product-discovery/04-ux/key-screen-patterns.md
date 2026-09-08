# Key Screen Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan pola layar kunci (blok konten & hierarki) untuk R1 — **bukan** wireframe piksel atau design token final.

---

# Overview

Lima+ permukaan R1: **Chrome** (S0), **Home**, **About**, **Workflow**, **Contact** (modal), **Work index + project sheet** (S4, ADR-027). Pola mendukung F1–F7 dan prinsip UX1–UX7.

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
| S2 About | `/[id/en]#about` (section Home) | J4, E4 |
| S2b Workflow | `/[id/en]/workflow` | J4, E4 |
| S3 Contact | Modal global (bukan route, final — ADR-019) | J3 |
| S4 Work index + project sheet | `/[id/en]/projects` + overlay M10 (ADR-027) | J2 |

---

# Pattern Notes

### S0 — Chrome

**Blok:** nama (tautan Home, font display) + pekerjaan di samping (bukan tautan, ADR-034) · primary nav **tanpa Home** (Tentang / About, Proses Kerja / How I Work, Proyek / Projects — ADR-035) · language switcher · **theme toggle (ADR-021)** · **Quick info panel (ADR-022)** · (opsional) availability tipis di header/footer.

**Theme toggle (ADR-021):** kontrol dark/light di chrome saat **kedua** tema hidup. Update 2026-09-04 / T-038.2: default ship **dark**; light di-hold; toggle **disembunyikan** sampai hold dicabut. Di mobile, Contact tetap di luar hamburger.

**Quick info panel (ADR-022):** overlay global (tab tepi kanan → drawer: bio, Services, Tools, Works index, Email, Links). Bukan route baru. Tampil di semua halaman R1 **termasuk Work index**; sheet M10 (ADR-027) overlay terpisah — jangan sembunyikan Quick Info karena sheet. Bukan pengganti Contact modal atau footer satelit.

**Aturan:** Contact selalu reachable dalam satu ketukan; **nav + switcher selalu visible di desktop**; di mobile (<1024px) nav halaman + switcher boleh di hamburger (ADR-020).

**Footer = pita Contact (ADR-025, ADR-041):** pita terakhir di **Home** (setelah `#about`), **Workflow**, dan **Work index** — heading besar dari copy yang sudah dikunci + tombol yang membuka **modal Contact yang ada** (bukan form baru) + baris legal + satelit LinkedIn/GitHub. Tombol Kontak di header tetap.

---

### S1 — Home

**Above the fold (wajib menang):**

1. Klaim positioning: **product builder** — `h1` dua baris display di atas (baris 1 kiri-atas, baris 2 kanan-bawah, ADR-038; **tanpa potret**)
2. Lede sempit di **lantai bawah** first viewport, tautan ke `/workflow`; wallpaper hero terbaca di tengah. Wallpaper memudar saat scroll ke `#about`, kembali saat scroll ke hero
3. Satu arah soft (ke Workflow atau Contact) — tidak memaksa form; Contact di Home = tombol chrome + modal + pita footer setelah About (ADR-041)

**Home = hero + section About (ADR-040).** Hero 100svh. Now di `#about`. Tidak ada credibility line atau work teaser.

**Tanpa potret di hero Home.** Karya seni di S2 `#about`. Jangan mengisi kekosongan hero dengan cutout wajah, blob, atau stock Unsplash.

**Contact di Home (ADR-041):** tidak ada section Contact di tengah halaman. Pita footer `#contact-cta` setelah `#about`. Arah Contact = tombol chrome + modal + pita.

**Anti-pattern:** hero yang hanya nama tanpa klaim; dual CTA agresif (“Hire me” + pricing); menumpuk katalog karya di Home.

---

### S2 — About

**Label chrome:** ID **"Tentang"** / EN **"About"** (ADR-035). Target: `/[id/en]#about` di Home (ADR-040). Bukan route. Cara kerja **bukan** di sini (S2b).

**Pola rest / active (ADR-025):** **tidak** di section About (ADR-039) dan **tidak** di Workflow (ADR-042). Lead = satu paragraf selalu terlihat.

**Blok berurutan:**

1. Section `#about` — **Now** (`#now`) + judul display (`h2`, clamp sama Home) + **karya seni viewport** + caption “This is not me”; lead penuh. **Tanpa** badge availability. **Tanpa** `#proof`.
2. Soft CTA Contact lewat chrome (tombol header / modal) dan pita footer di layout Home (ADR-041), bukan section di dalam About

**Anti-pattern:** CV kronologis sebagai satu-satunya bentuk; essay tanpa scanability; menumpuk pipeline proses di About.

### S2b — Workflow

**Label chrome:** ID **"Proses Kerja"** / EN **"How I Work"** (ADR-035). Route `/[id/en]/workflow`. Isi **ADR-042** (supersede copy T-021.3 di rute ini).

**Interaksi:** tab perbandingan Chaos vs Decision-Driven (`AnimatePresence`); kartu prinsip hover + `whileInView`; pipeline selalu terbaca (Human Lead vs AI); vault klik sampel ADR. **Bukan** rest/active accordion. Reduced-motion dihormati.

**Kulit:** kanvas token (tanpa wallpaper bitmap). Latar hidup = **debu katedral** mote individual `position: fixed` (wallpaper). Setiap mote punya glow lembut, starburst aperture 4 arah, dan flare anamorphic horizontal (optik kamera, bukan stiker bintang). Gerbang tracery dan bunga filigree **dicabut** (**T-054.1–T-054.3** ✅, dikunci ulang chat 2026-09-08; optik mote 2026-09-08). Reduced-motion / overlay lock = frame diam. Verifikasi penuh = **T-054.4**.

**Blok berurutan:**

1. Hero — klaim dua baris + lede + tab *Chat Chaos* / *Decision-Driven Way*
2. Lima prinsip — bento/kartu (Doc-First, Honest MVP, Decision Logs, Human Lead + AI, Production Truth)
3. Pipeline Discover → Design → Build → Ship — peran manusia vs AI di setiap langkah
4. ADR Vault — tiga sampel nyata (ADR-001 / ADR-012 / ADR-024): Status, Context, Decision, Alternatives
5. Penutup ringkas; soft CTA Contact **bukan** section terpisah — pita footer (S0)

**Anti-pattern:** framing “developer for hire” yang menggeser brand; CTA Contact duplikat di atas footer; ADR fiktif yang tidak ada di `decisions/`.

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

**Work index (`/projects`):** katalog tile (M9). **Klik tile** membuka **project sheet dari bawah** (M10, ADR-027) — live preview (iframe) atau galeri, services, location or company, year, description. Live/repo tautan hanya di dalam sheet. Home **tidak** punya teaser karya (ADR-032).

**Komponen:** shadcn `Drawer` dari bawah (T-035, ADR-028), lebar penuh, di-skin `.ps-*`. Astryx `BottomSheet` dicoba dulu (T-026.2) lalu diganti overlay custom karena tidak ada prop lebar penuh; overlay custom itu diganti `Drawer` saat migrasi. Bukan `/work/[slug]` di R1.

---

# Responsive Considerations

* **Desktop (≥1024px):** hierarki vertikal jelas; nav horizontal; Work index tile dalam grid.
* **Mobile (<1024px):** first viewport tetap memuat klaim inti tanpa mengandalkan hover; Work index stack vertikal; Contact Email tetap paling menonjol di modal.
* **Ponsel sempit (komposisi chrome produksi, 2026-08-20):** lantai **320px**; acuan **375px**. Hero dua baris display (ADR-038) **muat tanpa clip atau overflow-x**. Header chrome satu baris. Work index tile boleh stack. Modal Contact **muat di viewport** (scroll di dalam kartu bila perlu). Tab Quick info tidak menabrak judul hero. Acuan visual = kode produksi (ADR-024); `design-mockups/` arsip.
* **Locale:** layout blok sama di `id` dan `en`; beda hanya salinan.
* Panjang salinan ID/EN boleh beda, **makna setara**.
* Acuan visual: **kode produksi** (`app/`, token `app/globals.css`, shadcn + Tailwind — ADR-024 / ADR-028). `design-mockups/` arsip port R1, bukan keputusan desain terbaru.

---

# Success Criteria

* S1 first viewport lulus uji “siapa & untuk siapa” tanpa scroll panjang
* S1 = hero + `#about`; narasi di S2; cara kerja di S2b (ADR-042); karya di S4 (ADR-032, ADR-035, ADR-040). Tanpa `#proof`.
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
* `../../project-manager/decisions/ADR-032-home-single-section.md`
* `../../project-manager/decisions/ADR-033-home-without-footer.md` (superseded ADR-041)
* `../../project-manager/decisions/ADR-041-home-with-footer.md`
* `../../project-manager/decisions/ADR-035-about-workflow-split.md`
* `../../project-manager/decisions/ADR-038-home-hero-two-line-workflow-link.md`
* `../../project-manager/decisions/ADR-039-about-hero-artwork-lead.md`
* `../../project-manager/decisions/ADR-040-about-as-home-section.md`
* `../../project-manager/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
