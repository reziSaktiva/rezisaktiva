# Background Jobs

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada job/async produk untuk R1. File tetap ada sebagai jejak — lihat ADR-015.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat.

---

# Overview

Situs **rezisaktiva** R1 bersifat statis publik. Tidak ada antrian, worker, cron produk, email transactional server-side, atau pipeline async yang menjadi bagian arsitektur aplikasi.

Build/CI di hosting (generate SSG) adalah **proses engineering**, bukan background job domain produk.

---

# Scope

## In Scope (dokumen ini)

* Menyatakan N/A sadar untuk job produk R1

## Out of Scope

* Desain queue (SQS, Bull, dll.)
* Retry/idempotency untuk workflow bisnis

---

# Job Types

**N/A** — tidak ada job tipe produk.

| Yang mirip “job” | Klasifikasi |
| ---------------- | ----------- |
| CI build / SSG generate | Engineering pipeline (T-006) |
| Deploy | Engineering |
| Newsletter / drip | Out of product scope R1 |

---

# Retry Strategy

**N/A.**

---

# Future Considerations

Jika form kontak berbackend, sync CMS, atau notifikasi masuk Must:

* ADR baru + isi ulang dokumen ini
* Jangan menambah worker “karena template ada”

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Background jobs R1 | N/A |
| Bentuk sistem | Static-first SSG (ADR-015) |

---

# Related Documents

* `README.md`
* `application-layer.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
