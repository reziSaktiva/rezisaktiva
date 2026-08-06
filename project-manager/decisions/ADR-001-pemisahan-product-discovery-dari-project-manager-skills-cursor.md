# Decision ADR-001

### Title

Pemisahan `product-discovery/` dari `project-manager/` dan penempatan skills di `.cursor/skills/`

### Status

Accepted

### Date

2026-08-06

### Decision

1. Pengetahuan produk (apa yang dibangun) tinggal di `product-discovery/` (fase 01–06).
2. Cara kerja project (aturan, status, ADR, task, log) tinggal di `project-manager/`.
3. Project ini **Cursor-first**: process skills berada di `.cursor/skills/` saja. Tidak membuat `.claude/` atau `CLAUDE.md`.
4. Proteksi secret memakai `.cursorignore`.

### Reason

- Memisahkan SoT produk vs proses mengurangi duplikasi dan konflik status.
- Memisahkan SoT produk vs proses adalah pola yang jelas dan mudah diikuti agent.
- Boss Rezi mengerjakan project ini di Cursor; lokasi skill native project adalah `.cursor/skills/`.

### Alternatives Considered

- Menyatukan semua dokumen di satu folder `docs/` — ditolak karena campur SoT.
- Menempatkan skills di lokasi non-Cursor — ditolak karena tool utama adalah Cursor.
