# Monorepo / Repo Setup

> Status: **Draft (T-006.1)** — disepakati bersama Boss Rezi (2026-08-11). Kunci formal Baseline Engineering + ADR di **T-006.10**.

Dokumen ini mendefinisikan bentuk repo aplikasi untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai **single-app di repo yang sama** (bukan monorepo workspace, bukan repo app terpisah).

* Framework: **Next.js** (App Router), **static-first SSG** — selaras ADR-015
* Package manager: **pnpm**
* Satu `package.json` di **root** repo
* Docs discovery (`product-discovery/`, `project-manager/`) tetap di repo yang sama (ADR-003)

Tidak ada Turborepo / pnpm workspace multi-package untuk R1.

---

# Tujuan

* Mengunci bentuk repo sebelum bootstrap
* Menjaga proporsi: situs kecil + docs, tanpa scaffolding monorepo berlebih
* Memisahkan jelas: konten situs vs dokumen discovery vs private

---

# Repo Structure

```text
rezisaktiva/
├── app/                    # Next.js App Router (halaman /id|/en, …)
├── content/                # SoT konten portofolio (MD/MDX atau setara)
├── public/                 # aset statis
├── product-discovery/      # SoT produk (docs)
├── project-manager/        # SoT cara kerja (docs)
├── private/                # sensitif (ADR-003); bukan runtime app
├── package.json            # satu app Next
├── pnpm-lock.yaml
├── next.config.ts
├── tsconfig.json
├── AGENTS.md
└── …
```

| Area | Peran |
| ---- | ----- |
| `app/` | UI & routing locale |
| `content/` | Konten yang di-build ke halaman (bukan SoT di DB) |
| `product-discovery/` | Keputusan produk — bukan runtime |
| `project-manager/` | Status/task/ADR — bukan runtime |
| `private/` | Dilindungi; tidak di-bundle ke situs publik |

Nama folder implementasi boleh disesuaikan saat bootstrap selama kontrak di atas dihormati.

---

# Package / Workspace Config

| Aspek | Keputusan R1 |
| ----- | ------------ |
| Bentuk | **Single package** (bukan monorepo) |
| Lokasi manifest | Root `package.json` |
| Package manager | **pnpm** |
| Workspace packages | Tidak |
| Framework | **Next.js** (App Router) |
| Render default | **SSG** — halaman digenerate saat build |
| `output: 'export'` | **Tidak wajib** — di Vercel, SSG + Middleware edge untuk redirect `/` lebih cocok (lihat `deployment-infrastructure.md`) |
| Node | LTS yang didukung Next saat bootstrap |

Script minimal yang diharapkan saat bootstrap: `dev`, `build`, `start` (atau setara preview), `lint`.

---

# TypeScript Configuration

* TypeScript **wajib** untuk app Next
* `strict: true` sebagai default
* Path alias sederhana (mis. `@/`) untuk `app/` / modul lokal — tanpa path lintas-package (tidak ada package internal)

Detail `tsconfig` dikunci saat bootstrap; dokumen ini hanya mengunci **ada TS strict + single project**.

---

# Import Rules

| Boleh | Tidak |
| ----- | ----- |
| Import antar modul di app (`@/…`) | Import runtime dari `product-discovery/` atau `project-manager/` |
| Baca `content/` saat build (SSG) | Menganggap docs discovery sebagai CMS runtime |
| Import dari `public/` via path URL | Bundle isi `private/` ke client |

Docs dan app **co-located di git**, bukan co-imported di runtime.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Bentuk repo | Single-app di repo ini (opsi A) |
| Framework | Next.js App Router, static-first |
| Package manager | pnpm |
| Monorepo / multi-package | Tidak untuk R1 |
| Repo app terpisah | Tidak |
| Kunci formal ADR | T-006.10 (Baseline Engineering) |

---

# Success Criteria

1. Satu orang memahami: di mana app, di mana konten, di mana docs
2. Tidak ada asumsi Turborepo/workspace tanpa ADR baru
3. Bootstrap tidak mencampur SoT discovery ke bundle situs

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `deployment-infrastructure.md` — Vercel + build/deploy
* `../05-architecture/application-layer.md` — kontrak SSG
* `../../project-manager/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
