# Dependency Strategy

> Status: **Baseline v1.1** — ditetapkan bersama Boss Rezi (2026-08-11; styling **ADR-028** / T-037.4). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan strategi dependency untuk website portofolio **rezisaktiva**.

---

# Overview

R1 = **single-app** + **pnpm** (sudah dikunci di `monorepo-setup.md`).

* Lockfile **wajib** di-commit
* Range versi di `package.json`: **caret (`^`)**
* Update otomatis ringan via **Dependabot** (Renovate boleh sebagai alternatif setara)
* Bun ditimbang sebagai package manager dan **tidak dipilih** (tetap pnpm)

---

# Tujuan

* Install reproducible di lokal, CI, dan Vercel
* Patch keamanan tidak bergantung pada ingatan manual saja
* Mencegah sprawl dependency di luar kebutuhan situs lean

---

# Versioning

| Aspek | Keputusan R1 |
| ----- | ------------ |
| Range default | **`^`** (semver compatible) |
| Exact pin | Hanya jika ada bug/kompatibilitas spesifik (catat alasan di PR) |
| `engines` | Node LTS yang didukung Next saat bootstrap (opsional di `package.json`) |
| Package manager | **pnpm** — deklarasikan via `packageManager` field bila memakai Corepack |

Major upgrade framework (Next, React, shadcn/Tailwind) = PR terpisah + cek Preview Vercel.

---

# Lockfile

| File | Aturan |
| ---- | ------ |
| `pnpm-lock.yaml` | **Wajib committed** |
| `package-lock.json` / `yarn.lock` / `bun.lock*` | **Tidak** — satu package manager saja |
| Install di CI/Vercel | Hormati lockfile (`pnpm install --frozen-lockfile` di Actions bila tersedia) |

Jangan regenerate lockfile tanpa review diff dependency.

---

# Penempatan Dependency

Satu `package.json` di **root** (bukan monorepo workspace).

| Jenis | Contoh | Catatan |
| ----- | ------ | ------- |
| `dependencies` | `next`, `react`, `react-dom`, `motion`, `lenis`, primitf shadcn (Radix/`vaul` lewat source `components/ui`) | Runtime / bundle produksi |
| `devDependencies` | `typescript`, `eslint`, `prettier`, `tailwindcss`, `@tailwindcss/postcss`, `shadcn`, types | Build, lint, format, CLI komponen |
| Peer / optional rumit | Hindari kecuali library memaksa | Situs lean |

Jangan menambah library “karena template” (auth, ORM, state global) — selaras N/A di auth/DB.

Preferensi: dependency sedikit, intentional; prefer API platform (Next/Vercel) sebelum library baru.

**Satu sistem styling (ADR-028, 2026-09-01):** shadcn/ui + Tailwind CSS v4 menggantikan Astryx + StyleX (ADR-018 superseded). Bukan coexist, bukan hybrid. Paket `@astryxdesign/*` dan `@stylexjs/stylex` dicabut di T-037.

**ADR-026 (historis):** timing “jangan pindah di tengah R1” tetap valid sebagai jejak; evaluasi pasca-T-018 selesai via ADR-028.

---

# Update Policy

| Jalur | Kebijakan R1 |
| ----- | ------------ |
| **Dependabot** (default) | Aktifkan untuk `npm`/`pnpm` ecosystem + GitHub Actions bila relevan |
| Frekuensi | Mingguan atau grup patch/minor; major = review manual |
| Security advisories | Prioritaskan PR keamanan |
| Renovate | Alternatif setara jika lebih disukai nanti — jangan jalankan keduanya bersamaan |
| Update manual | Tetap boleh untuk Next/React/Tailwind besar |

Setelah merge update: pastikan CI hijau + Preview Vercel OK.

Bun **bukan** bagian strategi update R1; reopen package manager memerlukan update `monorepo-setup.md` + ADR bila material.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Package manager | **pnpm** (tetap; Bun ditolak untuk R1) |
| Lockfile | `pnpm-lock.yaml` committed |
| Version range | `^` |
| Auto-update | **Dependabot** (Renovate alternatif) |
| Exact pin default | Tidak |
| Baseline Engineering | ADR-016 |
| Styling/component library | **shadcn/ui + Tailwind CSS v4** — **ADR-028** (ADR-018 superseded) |

---

# Success Criteria

1. Clone + `pnpm install` menghasilkan tree yang sama (lockfile)
2. Ada jalur patch keamanan tanpa menunggu “ingat update”
3. Tidak ada lockfile ganda atau asumsi Bun sebagai installer R1

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `monorepo-setup.md` — bentuk repo & pnpm
* `cicd-pipeline.md` — install di Actions
* `dx-tooling.md` — ESLint / Prettier sebagai devDeps
* `deployment-infrastructure.md` — install di Vercel
* `../../project-manager/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
