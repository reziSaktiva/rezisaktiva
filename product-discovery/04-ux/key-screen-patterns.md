# Key Screen Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan pola layar kunci (blok konten & hierarki) untuk R1 — **bukan** wireframe piksel atau design token final.

---

# Overview

Empat “layar” R1: **Home**, **About** (label chrome: Proses Kerja / Process), **Contact**, plus **Chrome** (nav + switcher + footer + theme toggle + Quick info overlay) yang konsisten. Pola mendukung F1–F6 dan prinsip UX1–UX7.

---

# Purpose

* Memberi blueprint blok untuk copy & implementasi nanti
* Mengunci hierarki first viewport dan Contact soft
* Menunda craft visual ke fase berikutnya tanpa mengosongkan acceptance UX

---

# Screen Inventory

| Screen | Route | Jobs utama |
| ------ | ----- | ---------- |
| S0 Chrome | Global | J7, navigasi F1–F6 |
| S1 Home | `/[id/en]/` | J1, J2, (J7) |
| S2 About | `/[id/en]/about` | J4, E4 |
| S3 Contact | Modal global (bukan route, final — ADR-019) | J3 |

---

# Pattern Notes

### S0 — Chrome

**Blok:** brand · primary nav (About = label lokal **Proses Kerja** / **Process**, ADR-020) · language switcher · **theme toggle (ADR-021)** · **Quick info panel (ADR-022)** · (opsional) availability tipis di header/footer.

**Theme toggle (ADR-021):** kontrol dark/light di chrome; Must R1. Default ship tetap light — toggle tidak mengubah default. Di mobile (<1024px) tetap terlihat di luar hamburger (bersama Contact).

**Quick info panel (ADR-022):** overlay global (tab tepi kanan → drawer: bio, Services, Tools, Works index, Email, Links). Bukan route baru. Tampil di semua halaman R1 kecuali Work case detail. Bukan pengganti Contact modal atau footer satelit.

**Aturan:** Contact selalu reachable dalam satu ketukan; **nav + switcher selalu visible di desktop**; di mobile (<1024px) nav halaman + switcher boleh di hamburger (ADR-020). Footer memuat LinkedIn & GitHub sebagai satelit, bukan WA/IG.

---

### S1 — Home

**Above the fold (wajib menang):**

1. Klaim positioning: **product builder**
2. Satu baris pendukung: fullstack sebagai bukti + AI sebagai edge (jujur, tidak overclaim)
3. Satu arah soft (ke About atau Contact) — tidak memaksa form

**Di bawah fold / lanjut scroll:**

4. **Credibility line (bukti non-kartu)** — satu klaim singkat pengalaman/outcome (bukan grid, bukan list stack); mendukung hero
5. **Work teaser (bukti karya)** — 1–3 kartu: nama · peran/outcome · tautan bukti opsional; **satu-satunya** blok karya di Home
6. Penguat arah ke About / Contact
7. Availability line (Should, opsional)

**Bedakan blok:** credibility line ≠ teaser. Jangan isi keduanya dengan daftar project/stack yang sama.

**Anti-pattern:** hero yang hanya nama tanpa klaim; grid teaser berlebihan; dual CTA agresif (“Hire me” + pricing); duplikasi credibility + teaser sebagai tech bingo.

---

### S2 — About

**Label chrome:** ID **"Proses Kerja"** / EN **"Process"** (ADR-020). Route tetap `/[id/en]/about`; nama modul tetap M2 About.

**Blok berurutan:**

1. Narasi product builder (ide → live)
2. Konteks fullstack / pengalaman
3. AI edge — jujur batasannya
4. Cara kerja / apa yang dicari (tinggi, singkat)
5. Soft CTA teks ke Contact

**Anti-pattern:** CV kronologis sebagai satu-satunya bentuk; essay tanpa scanability; framing “developer for hire” yang menggeser brand.

---

### S3 — Contact

> **Final (2026-08-15, ADR-019):** Contact = Dialog/Modal global, **bukan** halaman/route terpisah — keputusan T-016 sudah selesai. Form email + message diizinkan di dalam modal. Sisanya di bawah ini tetap berlaku.

**Blok berurutan:**

1. Judul + salinan soft (kapan relevan menghubungi; ekspektasi diskusi)
2. **Primer — Email** (visual & urutan pertama; mailto atau alamat + copy) — *boleh disertai form singkat (email + message) per ADR-019, tetap tampil sebelum blok Socials*
3. **Satelit** — LinkedIn, GitHub (setingkat satu sama lain, di bawah Email)
4. Availability line bila belum di Home
5. Tanpa calendar, harga, WA, Instagram (form dikecualikan dari larangan ini per ADR-019)

**Anti-pattern:** deretan ikon sosial setara Email; Contact hanya footer; hard sell; Contact tanpa Email yang bisa diketuk/dikunjungi.

---

# Responsive Considerations

* **Desktop (≥1024px):** hierarki vertikal jelas; nav horizontal; teaser 1–3 dalam satu baris atau stack rapi.
* **Mobile (<1024px):** first viewport tetap memuat klaim inti tanpa mengandalkan hover; teaser stack vertikal; Contact Email tetap paling menonjol di modal.
* **Ponsel sempit (kontrak mockup, 2026-08-20):** lantai **320px**; acuan **375px**. Hero dua baris (mis. “Membangun” / “produk.”) **muat tanpa clip atau overflow-x**. Header chrome satu baris. Work teaser: judul + tautan “lihat semua” boleh **stack** (bukan dipaksa satu baris); tile featured **lebih tinggi** daripada strip 16:8. Modal Contact **muat di viewport** (scroll di dalam kartu bila perlu). Tab Quick info tidak menabrak judul hero.
* **Locale:** layout blok sama di `id` dan `en`; beda hanya salinan.
* Panjang salinan ID/EN boleh beda, **makna setara**.
* Acuan visual: **kode produksi** (`app/`, tema `rezisaktiva`) — **ADR-024**. `design-mockups/` arsip port R1, bukan keputusan desain terbaru.

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
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
