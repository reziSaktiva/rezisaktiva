# User Journey

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan journey pengunjung website portofolio **rezisaktiva** — fokus R1 Clarity plus jalur sekunder tipis.

---

# Overview

**Keputusan scope journey:** R1 primer (Home → About/teaser → Contact) sebagai poros; hiring manager & calon klien mendapat jalur sekunder tipis pada permukaan yang sama. Journey R2 magnet (case) dicatat sebagai later, bukan Must peta ini.

---

# Purpose

* Memetakan current-state (tanpa rumah digital) vs target-state R1
* Menunjukkan emotion curve dan opportunity (non-solution)
* Menjadi jembatan ke UX flows tanpa menambah scope produk

---

# Scope

## In Scope

* Journey lens & stages
* Current-state map (fragmented)
* Target-state R1 primer + cabang sekunder
* Emotion curve & opportunity areas

## Out of Scope

* Wireframe / UI solutioning
* Journey R2/R3 detail penuh
* Journey pemilik konten CMS

---

# Journey Lens

| Lens | Pilihan |
| ---- | ------- |
| **Primary actor** | P1 & P2 (setara) |
| **Secondary actor** | P3, P4 (tipis) |
| **Horizon** | Satu kunjungan singkat → soft next step |
| **Surface set** | Home, About, Contact, work teaser di Home, language switcher |
| **North stars** | Clarity (NS-1) + inbound berkualitas (NS-2) |

---

# Current-State Journey Map

Tanpa situs milik sendiri (hari ini):

| Stage | Yang terjadi | Emotion | Pain |
| ----- | ------------ | ------- | ---- |
| **Trigger** | Dengar nama / lihat GitHub / terima CV | Netral–penasaran | Visibility lemah |
| **Find** | Cari di LinkedIn/GitHub/chat history | Frustrasi ringan | Bukti tersebar |
| **Assemble** | Rakit cerita sendiri dari repo + CV | Bingung | Wrong frame “developer” |
| **Judge** | Sulit jawab fit product builder | Ragu | Slow fit judgment |
| **Act** | Chat awkward / tidak kontak | Hesitant | Contact friction |
| **Share** | Sulit tunjuk satu URL ke tim | Malas align | Tidak ada destination |

---

# Target-State Journey Map (R1)

### Jalur primer (P1 / P2)

| Stage | Pengalaman target | Surface | Jobs |
| ----- | ----------------- | ------- | ---- |
| **Arrive** | Positioning langsung terbaca | Home (above fold) | J1 |
| **Orient** | Paham product builder → fullstack → AI edge jujur | Home | J1, E2 |
| **Evidence** | 1–3 teaser outcome; opsi ke About | Home teaser / About | J2, J4 |
| **Deepen** (opsional) | Narasi & cara kerja | About | J4, E4 |
| **Language** (bila perlu) | Switcher kapan saja | Global chrome | J7 |
| **Decide** | Cukup percaya untuk next step | — | E1, E3 |
| **Act** | Soft CTA (email / tautan) | Contact | J3 |
| **Share** (opsional) | URL layak dikirim ke tim | Meta + clarity | S1 |

### Cabang sekunder tipis

| Actor | Divergensi dari primer | Tetap sama |
| ----- | ---------------------- | ---------- |
| **P3 Hiring** | Setelah Orient/Evidence, lebih ke About + satelit GitHub; boleh tidak ke Contact | Positioning product builder di Home |
| **P4 Klien** | Setelah Evidence, cepat ke Contact; tidak mencari pricing | Soft path; no hard sell |

### Later (bukan peta R1 Must)

Setelah R2 magnet: stage **Case** antara Evidence dan Decide (J6) — tidak memblokir journey di atas.

---

# Emotion Curve

| Stage | Current | Target R1 |
| ----- | ------- | --------- |
| Arrive | Netral | Confident curiosity |
| Assemble / Orient | Frustrasi ↑ | Clarity ↑ |
| Judge / Evidence | Ragu | Trust naik bertahap |
| Act | Hesitant / skip | Calm next step |
| After | Cerita terlupakan | Recall “product builder” (NS-1) |

Titik kritis: **Orient → Evidence**. Jika gagal di sini, Act jarang terjadi (NS-2 lemah).

---

# Opportunity Areas (Non-Solution)

Peluang untuk UX (bukan spesifikasi UI):

1. **First-screen clarity** — jawaban “siapa & untuk siapa” tanpa scroll panjang
2. **Bukti proporsional** — teaser outcome mengalahkan list stack
3. **About sebagai risk-reducer** — terutama untuk P2
4. **Contact sebagai soft landing** — kurangi awkward; jangan sales desk
5. **Secondary signals without rebrand** — P3 dapat sinyal tanpa mengubah Home jadi CV
6. **i18n comfort** — default + switcher sebagai bagian journey, bukan afterthought
7. **Shareability** — satu URL yang masuk akal untuk SC6

Anti-opportunity (jangan dikejar di R1): case catalog wajib, pricing, auth, blog sebagai syarat evaluasi.

---

# Expected Output

Peta journey R1 + sekunder tipis yang selaras skenario dan Product Baseline.

---

# Exit Criteria

* Current vs target jelas
* Cabang P3/P4 tipis terdokumentasi
* Opportunity non-solution siap diwariskan ke `04-ux/`

---

# Related Documents

* `README.md`
* `user-scenarios.md`
* `pain-points.md`
* `insights.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
