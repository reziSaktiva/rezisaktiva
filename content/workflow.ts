import type { Locale } from "@/lib/locale";

/**
 * Copy halaman Workflow / How I Work (ADR-042).
 * Mengganti blok offers / approach / values / accordion T-021.3 di rute ini.
 */

export type WorkflowCompareMode = "chaos" | "driven";

export type WorkflowPrincipleTag =
  | "STRATEGY"
  | "SCOPE"
  | "DOCUMENTATION"
  | "ARCHITECTURE"
  | "TRUTH";

export type WorkflowAdrStatus = "Accepted" | "Superseded";

export interface WorkflowComparePoint {
  title: string;
  body: string;
}

export interface WorkflowComparePane {
  label: string;
  kicker: string;
  points: readonly WorkflowComparePoint[];
}

export interface WorkflowPrinciple {
  tag: WorkflowPrincipleTag;
  title: string;
  body: string;
}

export interface WorkflowRole {
  label: string;
  body: string;
}

export interface WorkflowPipelineStep {
  num: string;
  title: string;
  human: WorkflowRole;
  ai: WorkflowRole;
}

export interface WorkflowAdrSample {
  id: string;
  file: string;
  title: string;
  status: WorkflowAdrStatus;
  context: string;
  decision: string;
  alternatives: readonly string[];
}

export interface WorkflowCopy {
  kicker: string;
  headline: readonly [string, string];
  lede: string;
  compare: Record<WorkflowCompareMode, WorkflowComparePane>;
  principlesKicker: string;
  principlesTitle: string;
  principles: readonly WorkflowPrinciple[];
  pipelineKicker: string;
  pipelineTitle: string;
  pipelineNote: string;
  steps: readonly WorkflowPipelineStep[];
  vaultKicker: string;
  vaultTitle: string;
  vaultNote: string;
  vaultContextLabel: string;
  vaultDecisionLabel: string;
  vaultAlternativesLabel: string;
  vaultAcceptedHint: string;
  vaultSupersededHint: string;
  adrs: readonly WorkflowAdrSample[];
  closeKicker: string;
  closeTitle: string;
  closeBody: string;
}

export const WORKFLOW_COPY: Record<Locale, WorkflowCopy> = {
  id: {
    kicker: "How I Work",
    headline: ["AI mengeksekusi kodenya.", "Saya yang mengunci keputusannya."],
    lede: "Saya membangun produk dari arsitektur yang dikunci di dokumen—bukan dari vibe coding yang hilang begitu chat berganti. Kepemimpinan dan keputusan tetap di tangan saya; AI mengeksekusi secara paralel.",
    compare: {
      chaos: {
        label: "The Chat Chaos",
        kicker: "Tanpa baseline",
        points: [
          {
            title: "Scope merayap tanpa kunci",
            body: "Fitur bertambah di tengah chat. Tidak ada MoSCoW, tidak ada MVP yang jujur—hanya daftar yang terus memanjang.",
          },
          {
            title: "Keputusan tenggelam di memori",
            body: "Alasan dipilih atau ditolak ikut hilang saat thread diganti. Tidak ada Decision, Reason, Alternatives.",
          },
          {
            title: "Visual acak, tanpa sumber kebenaran",
            body: "Mockup, Figma, dan chat saling menimpa. Yang live tidak pernah jadi acuan iterasi berikutnya.",
          },
          {
            title: "Tanpa ADR, tanpa jejak",
            body: "Rencana lama dihapus diam-diam. Agent berikutnya mengulang debat yang seharusnya sudah selesai.",
          },
        ],
      },
      driven: {
        label: "The Decision-Driven Way",
        kicker: "Cara saya",
        points: [
          {
            title: "Dokumen dikunci dulu",
            body: "Bisnis, UX, dan arsitektur jadi baseline sebelum kode. Perubahan material lewat ADR baru—bukan “ubah di chat”.",
          },
          {
            title: "ADR terstruktur",
            body: "Setiap keputusan penting mencatat Decision, Reason, dan Alternatives. Rencana lama di-supersede, bukan dihapus.",
          },
          {
            title: "AI paralel, manusia memimpin",
            body: "Saya membedah masalah, merancang, dan mereview. Subagent mengeksekusi task secara paralel di bawah kendali itu.",
          },
          {
            title: "Kebenaran = yang live",
            body: "Setelah rilis, kode produksi menjadi acuan visual dan fungsional. Iterasi berikutnya berangkat dari yang dipakai, plus data.",
          },
        ],
      },
    },
    principlesKicker: "Operating system",
    principlesTitle: "Lima prinsip yang tidak saya kompromikan",
    principles: [
      {
        tag: "STRATEGY",
        title: "Dulu yang dibangun, baru yang dikerjakan",
        body: "Produk dan proses dipisah. “Apa yang dibuat” dikunci dulu sebagai baseline—bisnis, UX, arsitektur. Kode mengikuti dokumen yang sudah dikunci, bukan sebaliknya.",
      },
      {
        tag: "SCOPE",
        title: "Scope kecil yang jujur, bukan yang lengkap",
        body: "MVP adalah permukaan paling ramping yang masih menyampaikan cerita (MoSCoW / Hybrid lean). Perubahan scope dibuat lewat ADR baru, bukan sekadar “ubah di chat”.",
      },
      {
        tag: "DOCUMENTATION",
        title: "Keputusan tertulis, alternatif ikut tercatat",
        body: "Setiap keputusan material mencakup Decision, Reason, dan Alternatives. Rencana lama di-supersede agar jejaknya tetap bisa dibaca, bukan dihapus.",
      },
      {
        tag: "ARCHITECTURE",
        title: "Kamu lead, AI orkestra",
        body: "Saya membedah masalah, merancang arsitektur, dan mereview. Subagent AI mengeksekusi task secara paralel. AI mempercepat; tanggung jawab tetap di manusia.",
      },
      {
        tag: "TRUTH",
        title: "Setelah live, sumber kebenaran bergeser",
        body: "Kode produksi adalah acuan visual dan fungsional—bukan Figma atau mockup tua. Iterasi berikutnya berangkat dari yang live, plus data pemakaian.",
      },
    ],
    pipelineKicker: "Pipeline",
    pipelineTitle: "Discover → Design → Build → Ship",
    pipelineNote:
      "Empat langkah yang sama di setiap proyek. Yang berubah hanya skala—pembagian peran manusia dan AI tetap eksplisit.",
    steps: [
      {
        num: "01",
        title: "Discover",
        human: {
          label: "My Role — Human Lead",
          body: "Membedah masalah, mengunci scope, dan menolak yang tidak perlu masuk baseline.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Menyintesis riset pasar, alternatif, dan sinyal yang sudah ada—siap ditinjau, bukan langsung dipercaya.",
        },
      },
      {
        num: "02",
        title: "Design",
        human: {
          label: "My Role — Human Lead",
          body: "Arsitektur UX, alur sistem, dan kontrak antar permukaan. Arah produk tidak didelegasikan.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Boilerplate komponen UI dan variasi layout dari sistem yang sudah dikunci—bukan desain dari nol.",
        },
      },
      {
        num: "03",
        title: "Build",
        human: {
          label: "My Role — Human Lead",
          body: "Kontrak API, batas modul, dan review PR. Tidak ada yang masuk produksi tanpa kendali mutu langsung.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Subagent paralel menulis kode dan unit test sesuai task yang sudah dipecah—bukan one-shot seluruh repo.",
        },
      },
      {
        num: "04",
        title: "Ship",
        human: {
          label: "My Role — Human Lead",
          body: "Persetujuan rilis akhir dan pembaruan ADR. Keputusan yang baru muncul saat ship tetap ditulis.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Checklist deploy dan sinkron dokumen ke keadaan live—jejak tetap mengikuti kode yang dipakai.",
        },
      },
    ],
    vaultKicker: "Proof",
    vaultTitle: "ADR Vault",
    vaultNote:
      "Bukan dekorasi. Tiga rekaman nyata dari project ini—status, konteks, keputusan, dan alternatif yang ditolak. Rencana lama di-supersede, bukan dihapus.",
    vaultContextLabel: "Context",
    vaultDecisionLabel: "Decision",
    vaultAlternativesLabel: "Alternatives considered",
    vaultAcceptedHint: "Keputusan aktif. Perubahan berikutnya butuh ADR baru.",
    vaultSupersededHint:
      "Diganti ADR yang lebih baru. Jejak tetap dibaca, tidak dihapus.",
    adrs: [
      {
        id: "ADR-001",
        file: "ADR-001-product-process-separation.md",
        title: "Product–Process Separation",
        status: "Accepted",
        context:
          "Pengetahuan produk dan cara kerja project mudah campur dalam satu folder docs. Agent lalu menuliskan status ke dokumen yang seharusnya stabil.",
        decision:
          "SoT produk tinggal di product-discovery/. Cara kerja (aturan, task, ADR) tinggal di project-manager/. Skills hanya di .cursor/skills/.",
        alternatives: [
          "Menyatukan semua dokumen di satu folder docs/",
          "Menempatkan skills di lokasi non-Cursor",
        ],
      },
      {
        id: "ADR-012",
        file: "ADR-012-product-baseline-v1.md",
        title: "Scope Locking via MoSCoW",
        status: "Accepted",
        context:
          "Tanpa baseline produk, fase berikutnya bisa menggeser MVP atau memasukkan katalog case penuh ke rilis pertama.",
        decision:
          "Product Baseline v1.0 dikunci: surface Hybrid lean, prioritas MoSCoW, urutan R1 Clarity → R2 magnet ringan → R3. Perubahan material wajib ADR baru.",
        alternatives: [
          "Menunda baseline sampai wireframe UX siap",
          "Mengunci Hybrid penuh (case wajib di MVP)",
          "Baseline tanpa mengunci urutan R2",
        ],
      },
      {
        id: "ADR-024",
        file: "ADR-024-production-code-visual-sot.md",
        title: "Production Code as Truth",
        status: "Accepted",
        context:
          "Mockup HTML dan kode produksi hidup berdampingan. Menyelaraskan keduanya menahan iterasi dan mengunci stack prototyping yang sudah ditinggalkan.",
        decision:
          "design-mockups/ diarsipkan. Sumber kebenaran visual = kode produksi plus arahan yang dikunci. Iterasi desain langsung di Next.js.",
        alternatives: [
          "Mockup HTML tetap SoT; ubah HTML dulu baru kode",
          "Deprecate hanya untuk satu halaman",
          "Pindah SoT visual ke Figma",
        ],
      },
    ],
    closeKicker: "Working together",
    closeTitle: "Keputusan yang tidak ditulis, tidak pernah terjadi.",
    closeBody:
      "Kalau kita kerja bersama, arah produk tidak tinggal di thread. Pita di bawah ini membuka percakapan yang sama—email tetap jalur utamanya.",
  },
  en: {
    kicker: "How I Work",
    headline: ["AI Executes the Code.", "I Drive the Decisions."],
    lede: "I build products from architecture locked in writing—not from vibe coding that vanishes the moment the chat moves on. Leadership and architectural calls stay with me; AI executes in parallel.",
    compare: {
      chaos: {
        label: "The Chat Chaos",
        kicker: "No baseline",
        points: [
          {
            title: "Scope creeps with no lock",
            body: "Features pile up mid-thread. No MoSCoW, no honest MVP—just a list that never stops growing.",
          },
          {
            title: "Decisions sink into chat memory",
            body: "Why something was chosen or rejected disappears when the thread does. No Decision, Reason, or Alternatives.",
          },
          {
            title: "Visuals drift with no source of truth",
            body: "Mockups, Figma, and chat overwrite each other. What shipped never becomes the next iteration’s benchmark.",
          },
          {
            title: "No ADRs, no trail",
            body: "Old plans get deleted quietly. The next agent re-litigates calls that should already be closed.",
          },
        ],
      },
      driven: {
        label: "The Decision-Driven Way",
        kicker: "How I work",
        points: [
          {
            title: "Documents lock first",
            body: "Business, UX, and architecture become baseline before code. Material change goes through a new ADR—not “just tweak it in chat.”",
          },
          {
            title: "Structured ADRs",
            body: "Every material call records Decision, Reason, and Alternatives. Old plans are superseded, not erased.",
          },
          {
            title: "Parallel AI, human lead",
            body: "I break down the problem, design, and review. Subagents execute tasks in parallel under that control.",
          },
          {
            title: "Truth is what is live",
            body: "After release, production code is the visual and functional benchmark. The next pass starts from what people actually use, plus data.",
          },
        ],
      },
    },
    principlesKicker: "Operating system",
    principlesTitle: "Five principles I will not compromise",
    principles: [
      {
        tag: "STRATEGY",
        title: "What we build, then how we build it",
        body: "Product and process stay separate. “What gets made” locks first as baseline—business, UX, architecture. Code follows the locked documents, not the other way around.",
      },
      {
        tag: "SCOPE",
        title: "Honest small scope, not a complete one",
        body: "MVP is the thinnest surface that still tells the story (MoSCoW / Hybrid lean). Scope changes go through a new ADR, not a casual “change it in chat.”",
      },
      {
        tag: "DOCUMENTATION",
        title: "Written decisions, alternatives included",
        body: "Every material decision covers Decision, Reason, and Alternatives. Old plans are superseded so the trail stays readable—they are not deleted.",
      },
      {
        tag: "ARCHITECTURE",
        title: "You lead, AI orchestrates",
        body: "I dissect the problem, design the architecture, and review. AI subagents execute tasks in parallel. AI accelerates; accountability stays human.",
      },
      {
        tag: "TRUTH",
        title: "After live, truth shifts to what ships",
        body: "Production code is the visual and functional benchmark—not Figma or an old mockup. The next iteration starts from what is live, plus usage data.",
      },
    ],
    pipelineKicker: "Pipeline",
    pipelineTitle: "Discover → Design → Build → Ship",
    pipelineNote:
      "The same four steps on every project. Only the scale changes—the human / AI split stays explicit.",
    steps: [
      {
        num: "01",
        title: "Discover",
        human: {
          label: "My Role — Human Lead",
          body: "Break down the problem, lock scope, and refuse what does not belong in the baseline.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Synthesize market research, alternatives, and existing signals—ready for review, not blind trust.",
        },
      },
      {
        num: "02",
        title: "Design",
        human: {
          label: "My Role — Human Lead",
          body: "UX architecture, system flow, and contracts between surfaces. Product direction is not delegated.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "UI component boilerplate and layout variants from the locked system—not design from a blank canvas.",
        },
      },
      {
        num: "03",
        title: "Build",
        human: {
          label: "My Role — Human Lead",
          body: "API contracts, module boundaries, and PR review. Nothing reaches production without direct quality control.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Parallel subagents write code and unit tests against split tasks—not a one-shot of the whole repo.",
        },
      },
      {
        num: "04",
        title: "Ship",
        human: {
          label: "My Role — Human Lead",
          body: "Final release approval and ADR updates. Calls that surface at ship time still get written down.",
        },
        ai: {
          label: "AI Role — Orchestration",
          body: "Deployment checklist and docs synced to the live state—the trail follows the code people actually use.",
        },
      },
    ],
    vaultKicker: "Proof",
    vaultTitle: "ADR Vault",
    vaultNote:
      "Not decoration. Three real records from this project—status, context, decision, and rejected alternatives. Old plans are superseded, not deleted.",
    vaultContextLabel: "Context",
    vaultDecisionLabel: "Decision",
    vaultAlternativesLabel: "Alternatives considered",
    vaultAcceptedHint: "Active decision. The next change needs a new ADR.",
    vaultSupersededHint:
      "Replaced by a newer ADR. The trail stays readable; it is not deleted.",
    adrs: [
      {
        id: "ADR-001",
        file: "ADR-001-product-process-separation.md",
        title: "Product–Process Separation",
        status: "Accepted",
        context:
          "Product knowledge and project process were easy to mix in one docs folder. Agents then wrote living status into documents that should stay stable.",
        decision:
          "Product SoT lives in product-discovery/. Process (rules, tasks, ADRs) lives in project-manager/. Skills live only in .cursor/skills/.",
        alternatives: [
          "Merge everything into a single docs/ folder",
          "Place skills in a non-Cursor location",
        ],
      },
      {
        id: "ADR-012",
        file: "ADR-012-product-baseline-v1.md",
        title: "Scope Locking via MoSCoW",
        status: "Accepted",
        context:
          "Without a product baseline, later phases could slide the MVP or pull a full case catalog into the first release.",
        decision:
          "Product Baseline v1.0 is locked: Hybrid lean surface, MoSCoW priority, R1 Clarity → R2 light magnet → R3. Material change requires a new ADR.",
        alternatives: [
          "Wait for UX wireframes before locking baseline",
          "Lock full Hybrid (case studies required in MVP)",
          "Baseline without locking the R2 sequence",
        ],
      },
      {
        id: "ADR-024",
        file: "ADR-024-production-code-visual-sot.md",
        title: "Production Code as Truth",
        status: "Accepted",
        context:
          "HTML mockups and production code were living side by side. Keeping them in sync stalled iteration and froze a prototyping stack already left behind.",
        decision:
          "design-mockups/ is archived. Visual source of truth = production code plus locked direction. Design iteration happens in Next.js.",
        alternatives: [
          "Keep HTML mockups as SoT; change HTML first, then code",
          "Deprecate mockups for one page only",
          "Move visual SoT to Figma",
        ],
      },
    ],
    closeKicker: "Working together",
    closeTitle: "A decision that is not written never happened.",
    closeBody:
      "If we work together, product direction does not stay in a thread. The band below opens the same conversation—email remains the primary path.",
  },
};
