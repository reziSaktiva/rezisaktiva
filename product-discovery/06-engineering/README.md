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

Setelah seluruh dokumen pada folder ini selesai diisi dan disepakati, phase ini siap ditetapkan sebagai Baseline v1.0 (via ADR).

---

# Exit Criteria

* Seluruh dokumen di atas sudah diisi (bukan TBD).
* Keputusan material sudah tercatat di `DECISIONS.md` bila diperlukan.
* Boss Rezi menyetujui baseline fase ini.

---

# Decision Rules

* Jangan mengisi fase berikutnya sebelum exit criteria fase ini terpenuhi (kecuali eksplisit diminta).
* Perubahan material setelah baseline → ADR baru.
* Status/progress fase hanya dicatat di `PROJECT_STATE.md`, bukan di README ini.

---

# Related Documents

* `../README.md`
* `../../project-manager/README.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
