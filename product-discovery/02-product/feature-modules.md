# Feature Modules

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan modul/fitur/halaman website portofolio **rezisaktiva** untuk fase Product — bukan wireframe UX dan bukan stack Engineering.

---

# Overview

Modul disusun mengikuti Hybrid lean: **Home, About, Work index** sebagai halaman inti + **teaser karya di Home** + **Contact & Quick Info sebagai overlay global** + **lintas-halaman** (bahasa, chrome, tema). Modul magnet detail (Work case, M10) dicatat sebagai supporting/future agar hubungan ke roadmap jelas tanpa memasukkannya ke Must Have MVP.

> **Catatan override (2026-08-15, ADR-020):** M9 (Work index) naik jadi Must R1 — nav chrome menyertakan link "Karya" ke `/[locale]/work`. M10 (case/process detail) tetap Post-MVP/R2.
>
> **Update (2026-08-16):** M6 menyertakan toggle tema Must R1 (**ADR-021**). Modul baru **M13 — Quick Info panel** (**ADR-022**) — overlay global, bukan halaman.

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

**Label chrome:** ID **"Proses Kerja"** / EN **"Process"** (ADR-020). Route tetap `/[locale]/about`; ID modul tetap M2.

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

**Catatan:** Ini modul konten di dalam M1, dipisah agar prioritas & roadmap jelas. Halaman katalog terpisah ada di M9 Work index (Must R1, override ADR-020) — M4 tetap section teaser di Home, bukan pengganti M9.

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

* Nav: Home, About (label lokal Proses Kerja / Process), Karya (M9, override ADR-020) + switcher; Contact = tombol pembuka modal (ADR-019), bukan link
* **Toggle tema (dark/light)** di chrome — Must R1 (**ADR-021**); default ship tetap light; di mobile tetap di luar hamburger
* Footer: identitas singkat, satelit, legal ringan bila perlu
* Konsistensi soft availability di chrome (opsional)
* Mobile (<1024px): nav halaman + switcher di balik hamburger; Contact-button + toggle tema tetap selalu terlihat (override ADR-020; toggle = ADR-021)

Quick Info (M13) **bukan** bagian M6 — overlay berkonten sendiri (ADR-022), didefinisikan di Supporting Modules di bawah (pola sama seperti M9 — Must R1 tapi bukan Core Module M1–M6).

---

# Supporting Modules

| Modul | Peran | Kapan |
| ----- | ----- | ----- |
| **M7 — Destination meta** | Title/description/OG dasar agar link layak dishare | MVP (Should/Must hygiene) |
| **M8 — Contact form / booking** | Alternatif jalur kontak | Could — bukan syarat MVP |
| **M9 — Work index** | Halaman daftar karya | **Must R1** (override ADR-020, 2026-08-15) |
| **M10 — Case / process detail** | Cerita singkat per karya (magnet ringan) | Post-MVP; boleh dipercepat jika konten siap |
| **M11 — Writing / notes** | Tulisan singkat proses | Future — bukan inti visi MVP |
| **M12 — Experiments / playground** | Satelit craft | Future — jangan jadi panggung utama |
| **M13 — Quick Info panel** | Overlay global: tab tepi kanan → drawer (bio, Services, Tools, Works index, Email, Links — tautan/rujukan cepat, bukan form inbound); bukan route; tampil di semua halaman R1 kecuali Work case detail (M10); bukan pengganti Contact modal (ADR-019) atau footer satelit (M6) | **Must R1** (ADR-022) |

---

# Module Relationships

```text
M5 Language ─── wraps ───► M1 Home, M2 About, M3 Contact, M6 Chrome, M9 Work index
                              │
                              ├── contains ► M4 Work Teaser
                              │
                              └── CTA soft ► M3 Contact

M6 Chrome ── includes ► Theme toggle (ADR-021)
M13 Quick Info ── overlay (bukan route) ──► semua halaman R1 kecuali M10

M9 Work index (Must R1, ADR-020) ──► Post-MVP: M10 Case detail
```

* M1 adalah pintu destination; M2 memperdalam trust; M3 menutup soft path.
* M4 memberi sinyal bukti di permukaan tanpa memblok ship.
* M9 Must R1 (ADR-020); M10 memperpanjang rantai narrative (ADR-004) di R2.
* M13 overlay glanceable — tidak menggantikan M3 atau footer M6 (ADR-022).

---

# Module Design Principles

1. **Satu pekerjaan per modul** — Home = clarity; About = narasi; Contact = path.
2. **Kurasi ketat** — teaser sedikit yang kuat > daftar panjang.
3. **Soft by default** — Contact tidak berubah jadi sales page.
4. **Bahasa sebagai lapisan** — bukan afterthought; konten inti dual.
5. **Magnet detail tidak mencemari MVP** — M10 (case/process detail) eksplisit post-kerangka; M9 (Work index) sendiri sudah naik Must R1 (override ADR-020).
6. **Satelit tetap satelit** — GitHub/LinkedIn mendukung, tidak menggantikan M1–M3.
7. **Detail interaksi di UX** — dokumen ini tidak mengunci wireframe atau komponen UI.

---

# Success Criteria

Modul dianggap cukup terdefinisi jika:

1. Setiap Must Have MVP bisa dipetakan ke M1–M7 + M9 + M13
2. M9 Must R1 (ADR-020); M10 tetap post-MVP; M13 overlay Must R1 (ADR-022)
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
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
