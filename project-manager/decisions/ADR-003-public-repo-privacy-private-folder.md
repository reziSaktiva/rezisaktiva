# Decision ADR-003

### Title

Repo publik dengan `product-discovery/` terbuka dan folder `private/` untuk materi sensitif

### Status

Accepted

### Date

2026-08-06

### Decision

1. Repository GitHub **public** — project boleh dilihat banyak orang.
2. `product-discovery/` **tetap di-track** (tidak di `.gitignore`) — dokumen discovery yang rapi adalah bagian dari kredibilitas product builder.
3. Materi sensitif disimpan di folder lokal `private/` yang di-ignore Git (`/private/*`, kecuali `private/README.md`).
4. Secret teknis (`.env`, credentials, pem) tetap di `.gitignore` / `.cursorignore`.
5. Jangan menaruh data pribadi sensitif di dokumen publik (`product-discovery/`, `project-manager/`).

### Reason

- Portofolio & proses berpikir yang terdokumentasi memperkuat brand jika repo terbuka.
- Meng-ignore seluruh `product-discovery/` mengorbankan backup publik dan transparansi tanpa manfaat privasi yang proporsional.
- Pemisahan `private/` memberi tempat aman untuk draft/data sensitif tanpa membuat dua repo.

### Alternatives Considered

- Ignore seluruh `product-discovery/` — ditolak; Boss Rezi memilih usulan publik + privasi selektif.
- Dua repo (public vs private) — ditolak sementara karena lebih kompleks untuk fase discovery.
- Repo private — ditolak karena tujuan ingin project dapat dilihat banyak orang.
