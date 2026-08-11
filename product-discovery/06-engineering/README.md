# 06 — Engineering Planning

Dokumentasi pada folder ini berfokus pada fase **Engineering Planning** untuk website portofolio pribadi **rezisaktiva**.

---

# Purpose

* Mengunci keputusan teknis sebelum bootstrap repo aplikasi.
* Menyiapkan acuan monorepo/single-app, deploy, auth, DX, dan tokens.

---

# Scope

Folder ini hanya membahas aspek engineering planning.

Topik berikut tidak dibahas di sini:

- Implementasi fitur produk
- Isi konten portofolio final

---

# Documents

* `monorepo-setup.md` — struktur repo / workspace.
* `deployment-infrastructure.md` — platform deploy.
* `auth-strategy.md` — strategi auth implementasi.
* `database-orm.md` — ORM / akses data.
* `cicd-pipeline.md` — CI/CD.
* `environment-management.md` — env & secrets.
* `dx-tooling.md` — lint, format, test.
* `dependency-strategy.md` — strategi dependency.
* `design-tokens.md` — design tokens.
* `../README.md` — dokumentasi fase Product Discovery.
* `../../project-manager/PROJECT_OVERVIEW.md` — ringkasan project.
* `../../project-manager/PROJECT_RULES.md` — aturan project.
* `../../project-manager/PROJECT_STATE.md` — status dan progress.
* `../../project-manager/DECISIONS.md` — keputusan penting (ADR).

---

# Workflow

1. Mulai dari keputusan repo (`monorepo-setup.md`) dan deploy.
2. Lengkapi auth, data, CI/CD, env, DX, dependency.
3. Isi `design-tokens.md` setelah arah desain jelas (boleh iteratif).

---

# Expected Output

**Engineering Baseline v1.0 sudah ditetapkan** (ADR-016, 2026-08-11). Seluruh dokumen di folder ini terisi dan disepakati (termasuk `auth-strategy.md` / `database-orm.md` sebagai N/A).

Acuan fase: Next.js single-app + pnpm; Vercel; CI Actions lint/typecheck; ESLint/Prettier; Tailwind + CSS vars (light default, dark fondasi A+).

Langkah berikutnya: **Repository & Bootstrap** (inisialisasi stack sesuai baseline ini). Status fase aktif ada di `PROJECT_STATE.md`.

---

# Exit Criteria

Kriteria berikut **sudah terpenuhi** untuk Baseline v1.0:

* Seluruh dokumen di atas sudah diisi (bukan TBD).
* Keputusan material tercatat di `DECISIONS.md` (ADR-016, dll.).
* Boss Rezi menyetujui baseline fase ini.

---

# Decision Rules

* Fase Engineering Planning selesai — lanjut **Repository & Bootstrap** sesuai baseline ini.
* Perubahan material setelah baseline → ADR baru + revisi dokumen terdampak.
* Status/progress fase hanya dicatat di `PROJECT_STATE.md`, bukan di README ini.

---

# Related Documents

* `../README.md`
* `../../project-manager/README.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
