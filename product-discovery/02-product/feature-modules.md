# Feature Modules

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan modul/fitur/halaman website portofolio **rezisaktiva** untuk fase Product — bukan wireframe UX dan bukan stack Engineering.

---

# Overview

Modul disusun mengikuti Hybrid lean: **tiga halaman inti** + **teaser karya di Home** + **lintas-halaman** (bahasa, chrome). Modul magnet (Work/case) dicatat sebagai supporting/future agar hubungan ke roadmap jelas tanpa memasukkannya ke Must Have MVP.

---

# Core Product Modules

## M1 — Home (Identity & Destination)

**Tujuan:** First impression + clarity: siapa Rezi, bukti ringkas, next step.

**Isi inti:**

* Hero / klaim positioning (product builder + fullstack + AI edge)
* Bukti singkat (highlight pengalaman atau outcome)
* Section **Work teaser** (1–3 item)
* Soft arah ke About dan Contact

**Bukan:** katalog lengkap, blog feed, pricing.

---

## M2 — About (Narrative)

**Tujuan:** Memperdalam cerita agar founder/PO percaya fit kolaborasi.

**Isi inti:**

* Narasi product builder (ide → live)
* Fondasi fullstack (~konteks pengalaman)
* AI sebagai edge (jujur, bukan specialist murni)
* Apa yang dicari / cara kerja tingkat tinggi (tanpa essay panjang)

**Bukan:** CV kronologis penuh sebagai satu-satunya bentuk; itu boleh ringkas sebagai pendukung.

---

## M3 — Contact (Soft Path)

**Tujuan:** Membuka inbound berkualitas tanpa hard sell.

**Isi inti:**

* Ajakan soft + konteks kapan relevan menghubungi
* Jalur primer: email dan/atau tautan langsung
* Tautan satelit (LinkedIn, GitHub, dll.)
* Opsional: availability line

**Bukan (MVP):** form berbackend, CRM, calendar wajib, rate card.

---

## M4 — Work Teaser (Home section)

**Tujuan:** Presence bukti karya tanpa arsitektur case penuh.

**Isi inti:**

* Kartu singkat: nama, peran/outcome, tautan eksternal bila ada
* Kurasi ketat (kualitas > jumlah)

**Catatan:** Ini modul konten di dalam M1, dipisah agar prioritas & roadmap jelas. Bukan halaman `/work` di MVP.

---

## M5 — Language (Bilingual Geo-Aware)

**Tujuan:** Relevan SEA + pintu terbuka luar SEA (ADR-002).

**Isi inti:**

* Default bahasa menurut geo (ID di Indonesia, EN di luar)
* Language switcher selalu tersedia
* Konten inti tersedia di kedua bahasa (makna setara)

**Detail:** deteksi geo, URL (`/id` vs cookie), fallback — fase UX / Engineering.

---

## M6 — Site Chrome & Satellites

**Tujuan:** Navigasi dan presence rumah brand.

**Isi inti:**

* Nav: Home, About, Contact + switcher
* Footer: identitas singkat, satelit, legal ringan bila perlu
* Konsistensi soft availability di chrome (opsional)

---

# Supporting Modules

| Modul | Peran | Kapan |
| ----- | ----- | ----- |
| **M7 — Destination meta** | Title/description/OG dasar agar link layak dishare | MVP (Should/Must hygiene) |
| **M8 — Contact form / booking** | Alternatif jalur kontak | Could — bukan syarat MVP |
| **M9 — Work index** | Halaman daftar karya | Post-MVP (magnet phase) |
| **M10 — Case / process detail** | Cerita singkat per karya (magnet ringan) | Post-MVP; boleh dipercepat jika konten siap |
| **M11 — Writing / notes** | Tulisan singkat proses | Future — bukan inti visi MVP |
| **M12 — Experiments / playground** | Satelit craft | Future — jangan jadi panggung utama |

---

# Module Relationships

```text
M5 Language ─── wraps ───► M1 Home, M2 About, M3 Contact, M6 Chrome
                              │
                              ├── contains ► M4 Work Teaser
                              │
                              └── CTA soft ► M3 Contact

Post-MVP: M4 ── expands to ──► M9 Work index ──► M10 Case detail
```

* M1 adalah pintu destination; M2 memperdalam trust; M3 menutup soft path.
* M4 memberi sinyal bukti di permukaan tanpa memblok ship.
* M9/M10 memperpanjang rantai narrative (ADR-004) saat magnet dinyalakan.

---

# Module Design Principles

1. **Satu pekerjaan per modul** — Home = clarity; About = narasi; Contact = path.
2. **Kurasi ketat** — teaser sedikit yang kuat > daftar panjang.
3. **Soft by default** — Contact tidak berubah jadi sales page.
4. **Bahasa sebagai lapisan** — bukan afterthought; konten inti dual.
5. **Magnet tidak mencemari MVP** — M9/M10 eksplisit post-kerangka.
6. **Satelit tetap satelit** — GitHub/LinkedIn mendukung, tidak menggantikan M1–M3.
7. **Detail interaksi di UX** — dokumen ini tidak mengunci wireframe atau komponen UI.

---

# Success Criteria

Modul dianggap cukup terdefinisi jika:

1. Setiap Must Have MVP bisa dipetakan ke M1–M6
2. Batas M9/M10 jelas sebagai post-MVP
3. Tidak ada modul yang bertentangan dengan brand primer / no-pricing
4. Siap dipecah ke MoSCoW di `feature-priority.md` dan rilis di `release-roadmap.md`

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `mvp-definition.md` — Must/Should/Could
* `feature-priority.md` — prioritas (berikutnya)
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
