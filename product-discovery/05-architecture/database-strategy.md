# Database Strategy

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada database produk untuk R1. File tetap ada sebagai jejak — lihat ADR-015.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat (bukan dokumen yang terlupa).

---

# Overview

Website **rezisaktiva** R1 = **Static-first (SSG) + konten di repo**. Tidak ada Postgres/MySQL/SQLite sebagai SoT konten, tidak ada ORM produk, tidak ada migrasi schema aplikasi.

SoT konten: **file di repository** (Markdown/MDX atau setara — dikunci di Engineering).

---

# Purpose

* Mencatat bahwa ketiadaan DB adalah **keputusan sadar**, bukan kelalaian
* Mencegah “tambah database karena template folder ada”

---

# Keputusan Database Strategy

| Aspek | Keputusan R1 |
| ----- | ------------ |
| Database produk | **Tidak ada** |
| SoT konten | Repo (file) |
| CMS / headless | Tidak (opsi C ditolak) |
| User/session store | Tidak (auth N/A) |
| Analytics DB | Bukan SoT produk; bila ada tool pihak ketiga = opsional privacy-aware (Engineering) |

---

# Schema / Content Model

**N/A database schema.**  
Model konten lean ada di `domain-model.md` (Page, Locale, teaser, channel) — diwujudkan sebagai file/frontmatter, bukan tabel.

---

# Storage Strategy

| Data | Di mana |
| ---- | ------- |
| Salinan halaman ID/EN | Repo aplikasi (setelah bootstrap) |
| Teaser & meta | Repo |
| Secret / materi non-publik | `private/` atau di luar repo (ADR-003) |
| Preferensi locale browser | Cookie/local di klien — **bukan** DB; hanya untuk redirect `/` (ADR-014) |

---

# Migration Strategy

**N/A** — tidak ada migrasi DB. Evolusi konten = commit + deploy.

Jika nanti dibutuhkan DB (form, CMS, member):

* ADR baru + revisi dokumen ini dari N/A
* Jangan mengasumsikan DB “karena folder architecture ada”

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| DB R1 | N/A — konten di repo |
| Bentuk sistem | Static-first SSG (ADR-015) |

---

# Success Criteria

1. Jelas tidak ada DB produk di R1
2. File tetap sebagai jejak N/A
3. Handoff Engineering: ORM/DB = N/A kecuali ADR baru

---

# Related Documents

* `README.md`
* `domain-model.md`
* `application-layer.md`
* `../02-product/product-scope.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
