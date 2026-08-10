# Key Screen Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan pola layar kunci (blok konten & hierarki) untuk R1 — **bukan** wireframe piksel atau design token final.

---

# Overview

Empat “layar” R1: **Home**, **About**, **Contact**, plus **Chrome** (nav + switcher + footer) yang konsisten. Pola mendukung F1–F6 dan prinsip UX1–UX7.

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
| S1 Home | `/{locale}/` | J1, J2, (J7) |
| S2 About | `/{locale}/about` | J4, E4 |
| S3 Contact | `/{locale}/contact` | J3 |

---

# Pattern Notes

### S0 — Chrome

**Blok:** brand · primary nav · language switcher · (opsional) availability tipis di header/footer.

**Aturan:** Contact selalu reachable; switcher selalu visible; footer memuat LinkedIn & GitHub sebagai satelit, bukan WA/IG.

---

### S1 — Home

**Above the fold (wajib menang):**

1. Klaim positioning: **product builder**
2. Satu baris pendukung: fullstack sebagai bukti + AI sebagai edge (jujur, tidak overclaim)
3. Satu arah soft (ke About atau Contact) — tidak memaksa form

**Di bawah fold / lanjut scroll:**

4. Bukti ringkas (bukan daftar stack panjang)
5. **Work teaser** — 1–3 kartu: nama · peran/outcome · tautan bukti opsional
6. Penguat arah ke About / Contact
7. Availability line (Should, opsional)

**Anti-pattern:** hero yang hanya nama tanpa klaim; grid teaser berlebihan; dual CTA agresif (“Hire me” + pricing).

---

### S2 — About

**Blok berurutan:**

1. Narasi product builder (ide → live)
2. Konteks fullstack / pengalaman
3. AI edge — jujur batasannya
4. Cara kerja / apa yang dicari (tinggi, singkat)
5. Soft CTA teks ke Contact

**Anti-pattern:** CV kronologis sebagai satu-satunya bentuk; essay tanpa scanability; framing “developer for hire” yang menggeser brand.

---

### S3 — Contact

**Blok berurutan:**

1. Judul + salinan soft (kapan relevan menghubungi; ekspektasi diskusi)
2. **Primer — Email** (visual & urutan pertama; mailto atau alamat + copy)
3. **Satelit** — LinkedIn, GitHub (setingkat satu sama lain, di bawah Email)
4. Availability line bila belum di Home
5. Tanpa form, calendar, harga, WA, Instagram

**Anti-pattern:** deretan ikon sosial setara Email; Contact hanya footer; hard sell.

---

# Responsive Considerations

* **Desktop:** hierarki vertikal jelas; nav horizontal; teaser 1–3 dalam satu baris atau stack rapi.
* **Mobile:** first viewport tetap memuat klaim inti tanpa mengandalkan hover; teaser stack vertikal; Contact Email tetap paling menonjol.
* **Locale:** layout blok sama di `id` dan `en`; beda hanya salinan.
* Panjang salinan ID/EN boleh beda, **makna setara**.

---

# Success Criteria

* S1 first viewport lulus uji “siapa & untuk siapa” tanpa scroll panjang
* S3 Email jelas sebagai primer; satelit terbatas LinkedIn + GitHub
* S0 memungkinkan F3 (ganti bahasa) dari setiap screen
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
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
