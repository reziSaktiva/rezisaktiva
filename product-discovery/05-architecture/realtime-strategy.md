# Real-time Strategy

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada realtime produk untuk R1. File tetap ada sebagai jejak — lihat ADR-015.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat.

---

# Overview

Portofolio R1 tidak membutuhkan WebSocket, SSE, presence, live collab, atau update push ke pengunjung. Konten berubah lewat **deploy baru**, bukan channel realtime.

---

# Scope

## In Scope

* Menyatakan N/A sadar

## Out of Scope

* Pemilihan vendor realtime (Pusher, Ably, dll.)
* Protocol design

---

# Approach

**N/A** — tidak ada channel realtime.

Interaksi “live” yang ada hanya di sisi klien browser (navigasi, switcher bahasa) — bukan arsitektur realtime server.

---

# Future Considerations

Playground eksperimen atau live demo sebagai panggung utama = di luar MVP (product out of scope). Bila suatu saat dibutuhkan:

* ADR baru + revisi dokumen ini
* Jangan mengasumsikan realtime default

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Realtime R1 | N/A |
| Bentuk sistem | Static-first SSG (ADR-015) |

---

# Related Documents

* `README.md`
* `application-layer.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
