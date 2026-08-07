# Decision ADR-011

### Title

Roles & permissions: N/A untuk website portofolio publik (file tetap ada)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **`roles-permissions.md` berstatus N/A** — tidak ada model role/permission in-app untuk situs rezisaktiva pada v0.1.
2. **File tidak dihapus** — diisi sebagai keputusan sadar agar tidak terlihat “terlupa” (pola sama ADR-008).
3. Situs = konten publik read-only bagi pengunjung; tidak ada login, RBAC, atau area member sebagai fitur produk.
4. Authoring/deploy oleh pemilik dilakukan di luar model permission produk (repo/hosting). Materi sensitif tetap via `private/` (ADR-003), bukan role di situs.

### Reason

- Selaras Hybrid lean (ADR-010) dan product-scope: tidak ada auth/CMS/member di MVP.
- Subtask **T-002.7** (parent T-002) sudah mengizinkan N/A bila tidak relevan.
- Menghapus file menghilangkan jejak; N/A eksplisit lebih aman untuk sesi agent/manusia berikutnya.

### Alternatives Considered

- Hapus `roles-permissions.md` — ditolak; jejak keputusan hilang.
- Definisikan role Admin/Public formal meski tidak ada auth — ditolak; noise tanpa manfaat.
- N/A file (isi keputusan sadar) — diterima.
