# CI/CD Pipeline

> Status: **Draft (T-006.5)** — disepakati bersama Boss Rezi (2026-08-11). Kunci formal Baseline Engineering + ADR di **T-006.10**.

Dokumen ini mendefinisikan pipeline CI/CD untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai **opsi B**:

* **CI** = GitHub Actions (lint + typecheck; test bila ada)
* **CD** = Vercel (Preview per PR, Production dari branch utama)

Tidak ada deploy custom dari Actions ke Vercel untuk R1 — Vercel tetap pemilik build/deploy situs.

---

# Tujuan

* Quality gate ringan di PR sebelum merge
* Deploy tetap sederhana (sudah dikunci di `deployment-infrastructure.md`)
* Cocok repo publik + perubahan sering (termasuk via agent)

---

# Pipeline Overview

```text
[PR dibuka / di-update]
    ├── GitHub Actions: lint + typecheck (+ test bila ada)
    └── Vercel: Preview deployment

[Merge ke branch utama]
    └── Vercel: Production deployment
```

| Jalur | Alat | Trigger |
| ----- | ---- | ------- |
| CI | GitHub Actions | `pull_request` (dan opsional `push` ke main) |
| Preview | Vercel | PR |
| Production | Vercel | push/merge ke branch produksi |

---

# Continuous Integration

## Workflow R1 (minimal)

| Step | Wajib R1 | Catatan |
| ---- | -------- | ------- |
| Checkout | Ya | — |
| Setup pnpm + Node LTS | Ya | Selaras `monorepo-setup.md` |
| `pnpm install` | Ya | Lockfile committed |
| Lint | Ya | ESLint (detail di `dx-tooling.md`) |
| Typecheck | Ya | `tsc --noEmit` atau script setara |
| Unit/e2e test | Bila ada | Tidak memblokir definisi pipeline jika belum ada test |
| `next build` di Actions | Tidak wajib | Build produksi di Vercel; hindari duplikasi lama kecuali dibutuhkan nanti |

## Branch protection (disarankan)

* Require CI hijau sebelum merge ke branch utama
* Vercel Preview boleh dipakai untuk review visual; tidak menggantikan lint/typecheck

Detail tool lint/format → `dx-tooling.md` (T-006.7).

---

# Continuous Deployment

| Lingkungan | Siapa yang deploy | Kapan |
| ---------- | ----------------- | ----- |
| Preview | Vercel | Setiap PR |
| Production | Vercel | Merge/push ke branch utama |

* Rollback = Vercel dashboard (lihat `deployment-infrastructure.md`)
* Tidak ada CD via `vercel deploy` dari Actions untuk R1
* Tidak ada promote manual multi-stage wajib

---

# Secrets & Environment

| Rahasia CI | Di mana |
| ---------- | ------- |
| Token GitHub Actions bawaan | Cukup untuk lint/typecheck publik |
| Secret Vercel / domain | Dashboard Vercel — bukan di workflow CI R1 |
| `DATABASE_URL` / auth secret | **Tidak ada** (N/A) |

Katalog variabel → `environment-management.md`.

Jangan menaruh secret produk di log Actions atau di repo publik.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Model CI/CD | **B** — Actions (lint/typecheck) + Vercel deploy |
| Vercel-only (tanpa Actions) | Tidak dipilih |
| Deploy penuh dari Actions | Tidak untuk R1 |
| Kunci formal ADR | T-006.10 |

---

# Success Criteria

1. PR tanpa lint/typecheck hijau tidak ideal untuk merge
2. Preview & Production tetap lewat Vercel tanpa skrip CD ganda
3. Pipeline tetap pendek dan bisa dijelaskan dalam satu diagram

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `deployment-infrastructure.md` — Vercel Preview/Production
* `environment-management.md` — env & secrets
* `monorepo-setup.md` — pnpm / Next
* `dx-tooling.md` — lint/format (menyusul)
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
