# Roles & Permissions

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-07). Roles & permissions tidak relevan untuk website portofolio publik **rezisaktiva** tanpa area login / multi-user. File tidak dihapus — lihat ADR-011 / ADR-012.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat (bukan dokumen yang terlupa).

---

# Overview

Situs **rezisaktiva** adalah portofolio publik Hybrid lean (Home / About / Work index / Contact modal). Tidak ada autentikasi pengunjung, area member, peran admin di dalam produk, atau matriks hak akses antar user.

Oleh karena itu **tidak ada model roles & permissions** untuk produk situs pada arah v0.1 / R1–R3 inti.

Akses yang ada bersifat sederhana:

* **Publik** — semua halaman produk dapat dibaca siapa saja
* **Pemilik konten (Rezi)** — mengedit/deploy di luar “produk” situs (repo / hosting); itu proses authoring, bukan role in-app

---

# Current Status

| Aspek | Status |
| ----- | ------ |
| Login / auth pengunjung | Tidak ada |
| Role (admin, editor, viewer, dll.) | Tidak berlaku |
| Permission matrix | Tidak berlaku |
| Area private di situs | Tidak (materi sensitif → `private/` di repo, ADR-003 — bukan fitur produk) |
| Dokumen ini | **N/A — keputusan sadar** |

---

# Roles

Tidak ada role produk yang didefinisikan.

| “Aktor” di dunia nyata | Hubungan ke situs |
| ---------------------- | ----------------- |
| Pengunjung (founder/PO, sekunder, peer) | Baca konten publik saja |
| Rezi (pemilik) | Kurasi konten & rilis di luar model permission in-app |

---

# Ringkasan Hak Akses per Role

**N/A** — tidak ada matriks role × permission.

Implikasi untuk fase berikutnya:

* UX tidak merancang screen login / RBAC
* Architecture/Engineering tidak perlu authz in-app untuk MVP (kecuali keputusan baru + ADR)

---

# Mapping ke Personas

Persona audiens (`03-user/`, nanti) = **pembaca publik**, bukan role dengan privilege berbeda.

Tidak ada mapping persona → permission level.

---

# Future Considerations

Jika suatu saat muncul kebutuhan (mis. draft preview terlindungi, CMS dengan editor, area klien):

* Ubah status dokumen ini dari N/A menjadi model role nyata
* ADR baru + dampak ke scope/MVP/architecture
* Jangan mengasumsikan auth “karena template folder ada”

Sampai itu terjadi: **situs = read-only publik**.

---

# Decision Rules

* Menambah auth/RBAC ke Must MVP → bertentangan N/A ini; butuh ADR + revisi scope.
* Menghapus file ini → ditolak; jejak keputusan hilang (sama pola ADR-008).
* Secret / materi non-publik → `private/` atau di luar repo, bukan role di situs (ADR-003).

---

# Success Criteria

Dokumen roles & permissions dianggap selesai (N/A) jika:

1. Jelas bahwa **tidak ada RBAC/auth produk** dan itu disengaja
2. File tetap ada sebagai jejak (bukan TBD kosong)
3. Selaras Hybrid lean / product-scope (tanpa area member)
4. Subtask **T-002.7** bisa dicentang sebagai **N/A completed**

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk (tanpa auth/member)
* `mvp-definition.md` — out of scope CMS/auth
* `../../project-manager/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-manager/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md` — pola N/A serupa
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
