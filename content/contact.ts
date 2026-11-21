import type { Locale } from "@/lib/locale";
import email from "./data/email.json";
import links from "./data/links.json";

/**
 * Contact page copy (T-083, ADR-052 point 5). Email and links come from
 * `content/data/email.json` + `content/data/links.json`.
 * Placeholder copy from `design-mockups/contact.html` until T-084.5 locks it.
 * No hours or availability claims (T-083 contract).
 */

export const CONTACT_EMAIL = email.address;

export type ContactLink = {
  id: string;
  href: string;
  label: string;
};

export const CONTACT_LINKS: readonly ContactLink[] = links;

/** "What do you need?" options. The server accepts only these ids. */
export const CONTACT_NEED_IDS = ["product", "build", "ai", "other"] as const;
export type ContactNeedId = (typeof CONTACT_NEED_IDS)[number];

export interface ContactFieldCopy {
  label: string;
  placeholder: string;
  error?: string;
}

export interface ContactCopy {
  title: readonly string[];
  intro: readonly string[];
  portraitAlt: string;
  basedInLabel: string;
  basedIn: readonly string[];
  emailLabel: string;
  elsewhereLabel: string;
  nowLabel: string;
  formTitle: readonly string[];
  formIntro: readonly string[];
  optional: string;
  name: ContactFieldCopy;
  email: ContactFieldCopy;
  company: ContactFieldCopy;
  need: ContactFieldCopy;
  needs: Record<ContactNeedId, string>;
  details: ContactFieldCopy;
  submit: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  failed: string;
  failedFallback: string;
}

export const CONTACT_COPY: Record<Locale, ContactCopy> = {
  id: {
    title: ["Mari bicara", "langsung."],
    intro: [
      "Kalau kamu sedang memulai sesuatu, menimbang sebuah ide, atau butuh pendapat kedua soal cara membangunnya, tulis ke saya. Beberapa baris jujur soal apa yang ingin kamu capai sudah cukup.",
      "Saya membalas lewat email. Saya akan bilang terus terang apakah saya orang yang tepat, apa yang akan saya kerjakan dulu, dan apa yang akan saya tinggalkan.",
    ],
    portraitAlt: "Foto hitam-putih Rezi, mata ditutup coretan hitam",
    basedInLabel: "Berbasis di",
    basedIn: ["Bandung,", "Indonesia"],
    emailLabel: "Email",
    elsewhereLabel: "Di tempat lain",
    nowLabel: "Sekarang",
    formTitle: ["Ceritakan", "proyeknya"],
    formIntro: [
      "Makin banyak yang saya tahu soal tujuan, orang yang memakainya, dan apa yang menghalangi, makin cepat saya bisa memberi masukan yang berguna.",
      "Tidak ada yang perlu rapi. Catatan kasar pun cukup.",
    ],
    optional: "(opsional)",
    name: {
      label: "Nama lengkap",
      placeholder: "Tulis nama lengkap kamu*",
      error: "Tolong tulis nama kamu.",
    },
    email: {
      label: "Alamat email",
      placeholder: "Tulis alamat email kamu*",
      error: "Saya butuh email yang valid untuk membalas.",
    },
    company: {
      label: "Perusahaan atau situs",
      placeholder: "Di mana kamu bekerja, atau di mana proyeknya berada?",
    },
    need: {
      label: "Apa yang kamu butuhkan?",
      placeholder: "Pilih yang kamu butuhkan*",
      error: "Pilih yang paling mendekati.",
    },
    needs: {
      product: "Produk dan scope",
      build: "Pembangunan fullstack",
      ai: "AI dan orkestrasi",
      other: "Hal lain",
    },
    details: {
      label: "Detail proyek",
      placeholder: "Apa yang kamu bangun, dan apa yang menghalangi?*",
      error: "Satu atau dua baris sudah cukup.",
    },
    submit: "Kirim pesan",
    sending: "Mengirim…",
    sentTitle: "Diterima.",
    sentBody: "Terima kasih. Saya akan membalas lewat email.",
    failed: "Pesan tidak terkirim. Coba lagi, atau tulis langsung ke",
    failedFallback: "email saya",
  },
  en: {
    title: ["Let’s talk", "directly."],
    intro: [
      "If you’re starting something new, weighing up an idea, or want a second opinion on how to build it, write to me. A few honest lines about what you’re trying to do is plenty.",
      "I reply by email. I’ll tell you plainly whether I’m the right person for it, what I’d do first, and what I’d leave out.",
    ],
    portraitAlt: "Black-and-white photo of Rezi with eyes redacted",
    basedInLabel: "Based in",
    basedIn: ["Bandung,", "Indonesia"],
    emailLabel: "Email",
    elsewhereLabel: "Elsewhere",
    nowLabel: "Right now",
    formTitle: ["Tell me about", "the project"],
    formIntro: [
      "The more I know about the goal, the people using it and what’s in the way, the sooner I can say something useful.",
      "Nothing here needs to be polished. Rough notes are fine.",
    ],
    optional: "(optional)",
    name: {
      label: "Full name",
      placeholder: "Enter your full name*",
      error: "Please tell me your name.",
    },
    email: {
      label: "Email address",
      placeholder: "Enter your email address*",
      error: "I need a valid email to reply to.",
    },
    company: {
      label: "Company or website",
      placeholder: "Where do you work, or where does it live?",
    },
    need: {
      label: "What do you need?",
      placeholder: "Select what you need*",
      error: "Pick the closest fit.",
    },
    needs: {
      product: "Product and scope",
      build: "Fullstack build",
      ai: "AI and orchestration",
      other: "Something else",
    },
    details: {
      label: "Project details",
      placeholder: "What are you building, and what’s getting in the way?*",
      error: "A line or two is enough.",
    },
    submit: "Send message",
    sending: "Sending…",
    sentTitle: "Got it.",
    sentBody: "Thanks. I’ll reply by email.",
    failed: "The message was not sent. Try again, or write straight to",
    failedFallback: "my email",
  },
};
