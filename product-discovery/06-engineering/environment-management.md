# Environment Management

> Status: **Draft (T-006.6)** — disepakati bersama Boss Rezi (2026-08-11). Kunci formal Baseline Engineering + ADR di **T-006.10**.

Dokumen ini mendefinisikan pengelolaan environment & secrets untuk website portofolio **rezisaktiva**.

---

# Overview

R1 adalah situs **publik static-first** tanpa DB/auth produk. Environment sengaja **tipis**:

* Tier: Local / Preview / Production (selaras Vercel)
* Secret produk: **minimal atau kosong**
* Konfigurasi publik (URL situs, flag analytics opsional) boleh `NEXT_PUBLIC_*` bila diperlukan

---

# Tujuan

* Mencegah sprawl `.env` dan secret yang tidak perlu
* Menyelaraskan tempat menyimpan nilai: lokal vs Vercel vs GitHub Actions
* Melindungi repo publik (ADR-003)

---

# Environment Tiers

| Tier | Di mana nilai disetel | Peran |
| ---- | -------------------- | ----- |
| **Local** | `.env.local` (gitignored) | `pnpm dev` |
| **Preview** | Vercel project → Preview | Deployment PR |
| **Production** | Vercel project → Production | Situs publik |

Tidak ada staging terpisah wajib (lihat `deployment-infrastructure.md`).

GitHub Actions R1 untuk lint/typecheck **tidak membutuhkan** secret produk; cukup checkout + install.

---

# Secret Management

| Jenis | Aturan R1 |
| ----- | --------- |
| Secret di git | **Dilarang** (termasuk di `private/` jika tidak sengaja untuk runtime — runtime tidak membaca `private/`) |
| Secret deploy | Hanya di **Vercel** (bila ada) |
| Secret CI | Tidak wajib untuk pipeline B |
| Rotasi | Bila suatu saat ada API key analytics/dll., rotate di dashboard vendor + Vercel |

Tidak ada vault eksternal (Doppler, AWS SM) untuk R1.

---

# File Strategy

| File | Di repo? | Isi |
| ---- | -------- | --- |
| `.env.local` | Tidak (gitignore) | Nilai lokal pengembang |
| `.env.example` | Ya | Nama variabel + komentar; **tanpa** nilai rahasia |
| `.env` / `.env.production` committed | Tidak | Hindari commit env berisi nilai nyata |
| Vercel dashboard | N/A | Sumber kebenaran Preview/Production |

Dokumentasikan variabel di `.env.example` agar bootstrap jelas tanpa membocorkan secret.

---

# Katalog Environment Variables

R1 diharapkan **sangat pendek**. Contoh yang wajar (dikunci detail nama saat bootstrap):

| Variabel | Wajib R1 | Tier | Catatan |
| -------- | -------- | ---- | ------- |
| `NEXT_PUBLIC_SITE_URL` | Should | Semua | Canonical URL untuk meta/OG/sitemap |
| Analytics key (`NEXT_PUBLIC_*` atau server) | Could | Preview/Prod | Hanya jika analytics diaktifkan; privacy-aware |
| `DATABASE_URL` | Tidak | — | N/A |
| Auth secrets (`AUTH_*`, `NEXTAUTH_*`) | Tidak | — | N/A |
| `VERCEL_*` | Otomatis | Vercel | Disediakan platform; jangan diduplikasi di git |

Tambah variabel baru hanya jika fitur membutuhkannya; update `.env.example` + dokumen ini (atau ADR bila material).

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Tier | Local / Preview / Production |
| Secret store R1 | Vercel (+ `.env.local` lokal) |
| Vault eksternal | Tidak |
| Env untuk DB/auth | Tidak ada |
| CI secrets | Tidak wajib (pipeline B) |
| Kunci formal ADR | T-006.10 |

---

# Success Criteria

1. Repo publik tidak mengandung secret
2. Seseorang baru bisa jalan lokal dari `.env.example` + docs
3. Tidak ada asumsi `DATABASE_URL` / auth secret di R1

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `deployment-infrastructure.md` — Vercel tiers
* `cicd-pipeline.md` — CI tanpa secret produk
* `database-orm.md` — N/A
* `auth-strategy.md` — N/A
* `../../project-manager/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
