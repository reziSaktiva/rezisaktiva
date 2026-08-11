# DX Tooling

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan tooling developer experience untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai stack DX yang familiar dan selaras ekosistem Next:

* **Lint:** ESLint (`eslint-config-next` + TypeScript)
* **Format:** Prettier
* **Quality gate:** GitHub Actions (lint + typecheck) — sudah dikunci di `cicd-pipeline.md`
* **Pre-commit hooks:** **Tidak** untuk R1
* **Test runner:** **Belum wajib** R1

Biome ditimbang dan **tidak dipilih** (familiaritas + rule Next + ekosistem plugin).

---

# Tujuan

* Menjaga kualitas kode tanpa setup berlebih untuk solo + agent
* Satu jalur jelas: format lokal → lint/typecheck di CI → deploy Vercel
* Menghindari drift format antar mesin tanpa memaksa husky

---

# Lint & Format

| Tool | Peran R1 |
| ---- | -------- |
| **ESLint** | Lint JS/TS/React; basis `eslint-config-next` |
| **Prettier** | Format (indent, quotes, trailing comma, dll.) |
| Integrasi | Matikan aturan format bentrok di ESLint (eslint-config-prettier) agar Prettier pemilik format |

### Konvensi bootstrap (detail dikunci saat scaffold)

* Satu config ESLint flat (atau setara yang didukung Next saat bootstrap)
* Satu `.prettierrc` / `prettier.config` di root
* Script `package.json`: `lint`, `format` / `format:check`, `typecheck`
* Editor: format-on-save via Prettier disarankan; bukan syarat CI

### Yang tidak dipakai R1

* Biome sebagai pengganti ESLint/Prettier
* ESLint-only tanpa Prettier (risiko format tidak konsisten)

---

# Pre-commit Hooks

**Tidak ada** husky / lint-staged / Lefthook untuk R1.

| Alasan | Catatan |
| ------ | ------- |
| CI sudah gate | PR wajib hijau lint + typecheck (`cicd-pipeline.md`) |
| Overhead | Hook menambah friction untuk agent & commit docs-only |
| Nanti | Boleh ditambah jika drift format lokal menjadi masalah nyata |

Disiplin lokal: jalankan `pnpm lint` / `pnpm format` sebelum PR bila mengubah app code.

---

# Test Runner

**Belum wajib** untuk R1.

| Jenis | Status R1 |
| ----- | --------- |
| Unit (Vitest/Jest) | Could / Later — tambah saat ada logic yang layak diuji |
| E2E (Playwright) | Could / Later — terutama locale redirect & jalur Contact |
| Visual regression | Tidak Must R1 |

CI sudah menyiapkan slot “test bila ada” — menambahkan runner tidak mengubah model pipeline B.

---

# Workspace Scripts

Script yang diharapkan di root `package.json` saat bootstrap:

| Script | Wajib R1 | Peran |
| ------ | -------- | ----- |
| `dev` | Ya | Next dev server |
| `build` | Ya | Production build |
| `start` | Ya | Serve build (atau setara) |
| `lint` | Ya | ESLint |
| `typecheck` | Ya | `tsc --noEmit` (atau setara) |
| `format` / `format:check` | Ya | Prettier write / check |
| `test` | Bila ada | Hanya setelah runner ditambah |

Package manager: **pnpm** (lihat `monorepo-setup.md`, `dependency-strategy.md`).

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Lint + format | **ESLint + Prettier** |
| Biome | Tidak untuk R1 |
| Pre-commit | Tidak (CI saja) |
| Test runner | Belum wajib |
| Baseline Engineering | ADR-016 |

---

# Success Criteria

1. PR app code tanpa lint/typecheck hijau tidak ideal untuk merge
2. Format konsisten lewat Prettier tanpa bentrok ESLint
3. Bootstrap tidak memasang husky/Vitest “default” tanpa kebutuhan

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `cicd-pipeline.md` — quality gate Actions
* `monorepo-setup.md` — pnpm / Next / scripts
* `dependency-strategy.md` — lockfile & updates
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
