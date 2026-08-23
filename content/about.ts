import type { Locale } from "@/lib/locale";

/**
 * Copy About / Proses Kerja. Dikunci T-021.3 (2026-08-20) lewat diskusi —
 * menonjolkan cara kerja spesifik Rezi: orkestrasi tim AI subagent dengan
 * pipeline discovery → arsitektur → build → ship, keputusan terdokumentasi
 * via ADR. ID = teks final dari Boss Rezi; EN = adaptasi makna, bukan
 * terjemahan kata-per-kata.
 */

export interface AboutOffer {
  num: string;
  title: string;
  body: string;
}

export interface AboutStep {
  num: string;
  title: string;
  body: string;
}

export interface AboutCopy {
  h1: readonly string[];
  lead1: string;
  lead2: string;
  availability: string;
  availabilityBadge: string;
  portraitAlt: string;
  helpTitle: string;
  offers: readonly AboutOffer[];
  approachLabel: string;
  approachBody: string;
  valuesLabel: string;
  values: readonly string[];
  processTitle: string;
  processNote: string;
  steps: readonly AboutStep[];
  ctaQuestion: string;
  ctaLink: string;
}

export const ABOUT_PORTRAIT_SRC =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  id: {
    h1: ["Halo,", "saya", "Rezi."],
    lead1:
      "Saya tidak menghabiskan waktu untuk sekadar mengetik baris kode. Fokus utama saya adalah arsitektur sistem dan efisiensi eksekusi—memanfaatkan alat modern untuk merakit ide Anda menjadi produk live secepat mungkin, tanpa mengorbankan kualitas.",
    lead2:
      "Berbekal 6+ tahun pengalaman fullstack, kini saya mengorkestrasi pipeline AI subagent dari discovery hingga deployment. Lensa komersial yang saya miliki memastikan saya tidak cuma tahu cara build, tapi paham kelayakan dan nilai strategis di balik setiap fitur.",
    availability:
      "Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.",
    availabilityBadge: "Terbuka untuk proyek baru",
    portraitAlt: "Placeholder — ganti dengan foto pribadi Rezi",
    helpTitle: "Yang bisa saya bantu",
    offers: [
      {
        num: "01",
        title: "Product",
        body: "Saya tidak menunggu brief sempurna. Saya membantu membedah masalah untuk menentukan apa yang benar-benar perlu dibangun—lalu merancang alurnya hingga siap meluncur ke pasar.",
      },
      {
        num: "02",
        title: "Fullstack",
        body: "6+ tahun menangani data, API, hingga interface memberi saya intuisi atas setiap trade-off teknis. Setiap keputusan arsitektur lahir dari kebutuhan riil, bukan sekadar mengikuti tren.",
      },
      {
        num: "03",
        title: "AI & Orchestration",
        body: "Saya mengorkestrasi ekosistem AI subagent untuk mempercepat eksekusi. Namun arah produk dan arsitektur tetap berada di tangan saya—terdokumentasi rapi via ADR, bukan tenggelam di chat history.",
      },
    ],
    approachLabel: "Approach",
    approachBody:
      "Saya telah beralih dari menulis kode manual ke mengorkestrasi sistem. Peran saya adalah membedah masalah, merancang arsitektur, dan memecah tasks—yang kemudian dieksekusi oleh tim AI subagent. Saya juga melibatkan AI sejak tahap ideasi untuk menguji dan mempertajam logika, tetapi arah serta keputusan akhir tetap sepenuhnya di tangan saya.",
    valuesLabel: "Values",
    values: [
      "\u201cBelum live, belum selesai.\u201d Fokus saya adalah hasil akhir yang berfungsi di lingkungan produksi dan memberi nilai nyata.",
      "\u201cKeputusan didokumentasikan, bukan diingat.\u201d Setiap pilihan arsitektur dicatat secara terstruktur (ADR) demi keberlanjutan sistem.",
      "\u201cAI mempercepat, saya bertanggung jawab.\u201d AI adalah pendorong efisiensi, tetapi kualitas dan integritas produk tetap 100% kepemilikan saya.",
    ],
    processTitle: "Bagaimana saya menggerakkan sebuah project",
    processNote:
      "Menerjemahkan ide mentah menjadi produk yang siap digunakan, dieksekusi melalui orkestrasi tim AI subagent. Setiap keputusan arsitektur penting terdokumentasi dengan jelas—memastikan proses berjalan terstruktur dan tanpa kompromi pada kualitas.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Saya menggali akar masalah bersama stakeholder untuk merumuskan konsep awal. Sebelum dieksekusi, ide tersebut saya uji dan validasi bersama AI—memastikan solusinya kuat secara logika, bukan sekadar asumsi di atas kertas.",
      },
      {
        num: "02",
        title: "Design",
        body: "Saya merancang arsitektur sistem dan alur produk secara mandiri. Untuk detail visual, saya mengekstraksi referensi tren desain terbaik dibantu AI, lalu membreakdown seluruh rancangan menjadi tasks siap eksekusi bagi AI subagent.",
      },
      {
        num: "03",
        title: "Build",
        body: "Tim AI subagent—mulai dari backend, UI, hingga QA—bekerja secara paralel. Saya bertindak sebagai lead reviewer untuk setiap output. Tidak ada kode yang masuk ke produksi tanpa kendali mutu langsung dari saya.",
      },
      {
        num: "04",
        title: "Ship & Iterate",
        body: "Produk dirilis ke lingkungan live, lalu performanya dipantau berbasis data nyata. Setiap iterasi berikutnya didasarkan pada perilaku pengguna aktual, bukan sekadar tebakan.",
      },
    ],
    ctaQuestion: "Penasaran gimana detailnya?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["Hello,", "I'm", "Rezi."],
    lead1:
      "I don't spend my time just typing lines of code. My focus is system architecture and execution efficiency—using modern tools to turn your idea into a live product as fast as possible, without compromising quality.",
    lead2:
      "With 6+ years of fullstack experience, I now orchestrate an AI subagent pipeline from discovery to deployment. My commercial lens means I don't just know how to build—I understand the feasibility and strategic value behind every feature.",
    availability: "Open to selected projects in the coming months.",
    availabilityBadge: "Available for new projects",
    portraitAlt: "Placeholder — replace with Rezi’s photo",
    helpTitle: "I can help you with",
    offers: [
      {
        num: "01",
        title: "Product",
        body: "I don't wait for a perfect brief. I help dissect the problem to figure out what actually needs to be built—then design the flow all the way to market-ready.",
      },
      {
        num: "02",
        title: "Fullstack",
        body: "6+ years working across data, APIs, and interfaces gives me intuition for every technical trade-off. Every architecture decision comes from a real need, not just chasing trends.",
      },
      {
        num: "03",
        title: "AI & Orchestration",
        body: "I orchestrate an AI subagent ecosystem to accelerate execution. But product direction and architecture stay in my hands—documented properly via ADRs, not buried in chat history.",
      },
    ],
    approachLabel: "Approach",
    approachBody:
      "I've moved from writing code by hand to orchestrating systems. My role is to dissect the problem, design the architecture, and break it into tasks—then an AI subagent team executes them. I also bring AI in from the ideation stage to stress-test the logic, but the direction and final calls stay entirely mine.",
    valuesLabel: "Values",
    values: [
      "\u201cNot live, not done.\u201d My focus is the end result that actually works in production and delivers real value.",
      "\u201cDecisions are documented, not just remembered.\u201d Every architecture choice is logged in a structured way (ADR) for the system's long-term health.",
      "\u201cAI accelerates, I'm accountable.\u201d AI drives efficiency, but the product's quality and integrity are 100% my ownership.",
    ],
    processTitle: "How I move a project forward",
    processNote:
      "Turning a raw idea into something ready to use, executed through an orchestrated AI subagent team. Every key architecture decision is documented clearly—keeping the process structured with no compromise on quality.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "I dig into the real problem with stakeholders to shape the initial concept. Before execution, I stress-test and validate the idea with AI—making sure the solution holds up logically, not just on paper.",
      },
      {
        num: "02",
        title: "Design",
        body: "I design the system architecture and product flow myself. For visual details, I pull the best design trend references with AI's help, then break the whole plan into tasks ready for the AI subagent team to execute.",
      },
      {
        num: "03",
        title: "Build",
        body: "The AI subagent team—backend, UI, QA—works in parallel. I act as lead reviewer for every output. Nothing ships to production without direct quality control from me.",
      },
      {
        num: "04",
        title: "Ship & Iterate",
        body: "The product ships to live, then its performance gets tracked from real data. Every next iteration is based on actual user behavior, not guesswork.",
      },
    ],
    ctaQuestion: "Curious how it actually works?",
    ctaLink: "Get in touch",
  },
};
