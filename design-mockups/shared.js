// Shared interaction — mockup rezisaktiva

const COPY = {
  id: {
    'title.home': 'rezisaktiva — Home',
    'title.about': 'rezisaktiva — Proses Kerja',
    'title.contact': 'rezisaktiva — Contact',
    'nav.home': 'Home',
    'nav.process': 'Proses Kerja',
    'nav.work': 'Karya',
    'nav.contact': 'Contact',
    'nav.menu': 'Buka menu',
    'nav.menuClose': 'Tutup menu',
    'theme.aria': 'Ganti tema terang/gelap',
    'rail.home': 'Home',
    'rail.bukti': 'Bukti',
    'rail.karya': 'Karya',
    'rail.contact': 'Contact',
    'home.h1':
      '<span class="word hero-line">Membangun</span>\n' +
      '<span class="word hero-line hero-line-2">produk.</span>',
    'home.bukti.label': 'Bukti',
    'home.bukti.body':
      '<span class="text-fg">~6 tahun</span> membangun software fullstack — kini memakai AI sebagai cara kerja, bukan sekadar kata kunci.',
    'home.work.label': 'Karya terpilih',
    'home.work.title': 'Beberapa hal yang sudah dibangun',
    'home.work.all': 'Lihat semua →',
    'home.work.name': 'Nama Project',
    'home.work.outcome': 'Peran / outcome singkat, satu kalimat.',
    'home.contact.label': 'Contact',
    'home.contact.title': 'Mari mengobrol.',
    'home.contact.body':
      'Terbuka untuk percakapan soal produk, peluang kerja sama, atau sekadar bertukar ide.',
    'home.contact.link': 'Hubungi saya',
    'about.h1':
      '<span class="word">Halo,</span> <span class="word">saya</span> <span class="word">Rezi.</span>',
    'about.lead1':
      'Membangun produk dari ide sampai live — itu yang saya lakukan setiap hari.',
    'about.lead2':
      '~6 tahun di fullstack. Saya bantu founder dan PO membuat sesuatu yang benar-benar terpakai, bukan yang hanya terdengar bagus di slide.',
    'about.fullstack.h2': 'Fullstack sebagai fondasi',
    'about.fullstack.body':
      'Dari desain data, API, sampai interface yang dipakai orang. Satu fondasi supaya trade-off bisa dibicarakan, bukan hanya “bisa coding”.',
    'about.chip.shipping': 'Shipping ke Production',
    'about.ai.h2': 'AI sebagai edge, bukan klaim',
    'about.ai.body':
      'AI mempercepat kerja. Tidak mengganti keputusan.',
    'about.help.with': 'Yang bisa saya bantu',
    'about.offer1.title': 'Product',
    'about.offer1.body': 'Dari pertanyaan “apa yang seharusnya dibangun” sampai alur yang siap di-ship.',
    'about.offer2.title': 'Fullstack',
    'about.offer2.body': 'Data, API, interface. Satu orang yang bisa bicara trade-off di semua lapisan.',
    'about.offer3.title': 'AI',
    'about.offer3.body': 'Akselerator, bukan klaim. Mempercepat proses — fondasi engineering tetap di tangan.',
    'about.approach.label': 'Approach',
    'about.approach.body':
      'Selalu penasaran, selalu belajar, menikmati setiap langkahnya. Termasuk yang berantakan di tengah.',
    'about.values.label': 'Values',
    'about.value1': 'Yang belum live, belum selesai.',
    'about.value2': 'Desain yang baik adalah sistem keputusan — bukan slide yang cantik.',
    'about.value3': 'Siklus pendek mengalahkan spekulasi.',
    'section.process': 'Proses Kerja',
    'about.process.h2': 'Bagaimana saya menggerakkan sebuah project',
    'about.step1': 'Pahami masalah nyatanya dulu. Baru kode.',
    'about.step2': 'Alur produk dan pilihan teknis yang bisa dibela — bukan stack yang lagi tren.',
    'about.step3': 'Eksekusi cepat. AI mempercepat, tidak memutuskan.',
    'about.step4': 'Rilis, lalu perbaiki dari yang benar-benar terjadi.',
    'about.process.note':
      'Dari ide ke sesuatu yang bisa dicoba. Keputusan berikutnya dari bukti, bukan tebakan.',
    'about.cta.q': 'Tertarik mengobrol lebih jauh?',
    'about.cta.link': 'Hubungi saya',
    'contact.h1':
      '<span class="word page-line">Mari</span>\n' +
      '<span class="word page-line page-line-2">mengobrol.</span>',
    'contact.modal.h1': '<span>Mari</span> <span class="ct-accent">mengobrol.</span>',
    'contact.lead':
      'Terbuka untuk percakapan soal produk, kolaborasi, atau peluang kerja sama yang cocok.',
    'contact.email.note': 'Cara paling langsung menjangkau saya',
    'contact.availability': 'Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.',
    'contact.close': 'Tutup',
    'contact.form.emailLabel': 'Email kamu',
    'contact.form.emailPlaceholder': 'mail@mail.com',
    'contact.form.messageLabel': 'Pesan',
    'contact.form.messagePlaceholder': 'Ceritakan sedikit soal project kamu',
    'contact.form.submit': 'Kirim',
    'contact.form.sent': 'Terkirim',
    'contact.details.label': 'Detail kontak',
    'contact.copy.label': 'Salin email',
    'contact.copy.copied': 'Tersalin',
    'contact.socials.label': 'Sosial',
    'title.work': 'rezisaktiva — Karya',
    'page.work': 'Karya',
    'work.h1':
      '<span class="word page-line-compact">Seluruh</span>\n' +
      '<span class="word page-line-compact">hasil kerja.</span>',
    'work.lead':
      'Daftar karya yang sudah di-ship. Buka tile untuk cerita singkat prosesnya.',
    'work.preview': 'preview',
    'work.proof': 'Baca cerita →',
    'work.cta.q': 'Ingin membahas salah satu karya ini?',
    'work.cta.link': 'Hubungi saya',
    'case.back': '← Semua karya',
    'case.context': 'Konteks',
    'case.approach': 'Pendekatan',
    'case.result': 'Hasil',
    'case.external': 'Bukti eksternal (placeholder)',
    'case.prev': 'Sebelumnya',
    'case.next': 'Berikutnya',
    'qi.tab': 'Quick info',
    'qi.title': 'Quick info',
    'qi.bio':
      'Saya merancang pengalaman digital yang bersih. Berbasis di Indonesia. Bekerja worldwide. (contoh)',
    'qi.services': 'Services',
    'qi.tools': 'Tools',
    'qi.svc1': 'Product',
    'qi.svc2': 'Fullstack',
    'qi.svc3': 'AI',
    'qi.svc4': 'Interaction design',
    'qi.svc5': 'Strategy',
    'qi.svc6': 'Research',
    'qi.tool1': 'Next.js',
    'qi.tool2': 'TypeScript',
    'qi.tool3': 'Astryx',
    'qi.tool4': 'Figma',
    'qi.tool5': 'Postgres',
    'qi.tool6': 'Vercel',
    'qi.works': 'Works index',
    'qi.email': 'Email',
    'qi.links': 'Links',
    'qi.close': 'Tutup quick info',
  },
  en: {
    'title.home': 'rezisaktiva — Home',
    'title.about': 'rezisaktiva — My Process',
    'title.contact': 'rezisaktiva — Contact',
    'nav.home': 'Home',
    'nav.process': 'My Process',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.menuClose': 'Close menu',
    'theme.aria': 'Toggle light/dark theme',
    'rail.home': 'Home',
    'rail.bukti': 'Proof',
    'rail.karya': 'Work',
    'rail.contact': 'Contact',
    'home.h1':
      '<span class="word hero-line">Building</span>\n' +
      '<span class="word hero-line hero-line-2">products.</span>',
    'home.bukti.label': 'Proof',
    'home.bukti.body':
      '<span class="text-fg">~6 years</span> building fullstack software — now using AI as a way of working, not just a keyword.',
    'home.work.label': 'Selected work',
    'home.work.title': 'A few things already shipped',
    'home.work.all': 'See all →',
    'home.work.name': 'Project name',
    'home.work.outcome': 'Role / outcome in one sentence.',
    'home.contact.label': 'Contact',
    'home.contact.title': "Let's talk.",
    'home.contact.body':
      'Open to conversations about product, collaboration, or a fit that makes sense.',
    'home.contact.link': 'Get in touch',
    'about.h1':
      '<span class="word">Hello,</span> <span class="word">I\'m</span> <span class="word">Rezi.</span>',
    'about.lead1':
      'Building products from idea to live — that is the work, every day.',
    'about.lead2':
      '~6 years in fullstack. I help founders and POs ship something people actually use, not something that only sounds good on a slide.',
    'about.fullstack.h2': 'Fullstack as the foundation',
    'about.fullstack.body':
      'From data design and APIs to the interface people use. One foundation so trade-offs can be discussed, not only “I can code”.',
    'about.chip.shipping': 'Shipping to production',
    'about.ai.h2': 'AI as an edge, not a claim',
    'about.ai.body':
      'AI speeds the work. It does not replace the decision.',
    'about.help.with': 'I can help you with',
    'about.offer1.title': 'Product',
    'about.offer1.body': 'From the question “what should be built” to a flow that is ready to ship.',
    'about.offer2.title': 'Fullstack',
    'about.offer2.body': 'Data, API, interface. One person who can talk trade-offs across the stack.',
    'about.offer3.title': 'AI',
    'about.offer3.body': 'An accelerator, not a claim. Faster process — engineering still in human hands.',
    'about.approach.label': 'Approach',
    'about.approach.body':
      'Always curious, always learning, enjoying every step. Even the messy middle.',
    'about.values.label': 'Values',
    'about.value1': 'If it is not live, it is not done.',
    'about.value2': 'Good design is a system of decisions — not a pretty slide.',
    'about.value3': 'A short cycle beats speculation.',
    'section.process': 'My Process',
    'about.process.h2': 'How I move a project forward',
    'about.step1': 'Understand the real problem first. Then code.',
    'about.step2': 'Product flow and technical choices that can be defended — not a trendy stack.',
    'about.step3': 'Execute fast. AI accelerates; it does not decide.',
    'about.step4': 'Ship, then improve from what actually happens.',
    'about.process.note':
      'From idea to something tryable. The next decision comes from evidence, not guesswork.',
    'about.cta.q': 'Want to talk further?',
    'about.cta.link': 'Get in touch',
    'contact.h1':
      '<span class="word page-line">Let\'s</span>\n' +
      '<span class="word page-line page-line-2">talk.</span>',
    'contact.modal.h1': '<span>Let\'s</span> <span class="ct-accent">talk.</span>',
    'contact.lead':
      'Open to conversations about product, collaboration, or a partnership that fits.',
    'contact.email.note': 'The most direct way to reach me',
    'contact.availability': 'Open to selected projects in the coming months.',
    'contact.close': 'Close',
    'contact.form.emailLabel': 'Your email',
    'contact.form.emailPlaceholder': 'mail@mail.com',
    'contact.form.messageLabel': 'Message',
    'contact.form.messagePlaceholder': 'Tell me more about your project',
    'contact.form.submit': 'Submit',
    'contact.form.sent': 'Sent',
    'contact.details.label': 'Contact details',
    'contact.copy.label': 'Copy email',
    'contact.copy.copied': 'Copied',
    'contact.socials.label': 'Socials',
    'title.work': 'rezisaktiva — Work',
    'page.work': 'Work',
    'work.h1':
      '<span class="word page-line-compact">All</span>\n' +
      '<span class="word page-line-compact">shipped work.</span>',
    'work.lead':
      'Everything shipped so far. Open a tile for a short process story.',
    'work.preview': 'preview',
    'work.proof': 'Read story →',
    'work.cta.q': 'Want to talk about one of these?',
    'work.cta.link': 'Get in touch',
    'case.back': '← All work',
    'case.context': 'Context',
    'case.approach': 'Approach',
    'case.result': 'Outcome',
    'case.external': 'External proof (placeholder)',
    'case.prev': 'Previous',
    'case.next': 'Next',
    'qi.tab': 'Quick info',
    'qi.title': 'Quick info',
    'qi.bio':
      'I craft clean digital experiences. Based in Indonesia. Working worldwide. (sample copy)',
    'qi.services': 'Services',
    'qi.tools': 'Tools',
    'qi.svc1': 'Product',
    'qi.svc2': 'Fullstack',
    'qi.svc3': 'AI',
    'qi.svc4': 'Interaction design',
    'qi.svc5': 'Strategy',
    'qi.svc6': 'Research',
    'qi.tool1': 'Next.js',
    'qi.tool2': 'TypeScript',
    'qi.tool3': 'Astryx',
    'qi.tool4': 'Figma',
    'qi.tool5': 'Postgres',
    'qi.tool6': 'Vercel',
    'qi.works': 'Works index',
    'qi.email': 'Email',
    'qi.links': 'Links',
    'qi.close': 'Close quick info',
  },
};

const CASES = {
  id: [
    {
      id: '1',
      name: 'Nama Project 01',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
    {
      id: '2',
      name: 'Nama Project 02',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
    {
      id: '3',
      name: 'Nama Project 03',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
    {
      id: '4',
      name: 'Nama Project 04',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
    {
      id: '5',
      name: 'Nama Project 05',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
    {
      id: '6',
      name: 'Nama Project 06',
      outcome: 'Peran / outcome singkat, satu kalimat.',
      context: 'Masalah atau peluang yang jadi alasan project ini ada — placeholder sampai karya nyata diisi.',
      approach: 'Keputusan produk dan teknis yang diambil, plus di mana AI dipakai sebagai akselerator.',
      result: 'Apa yang live, siapa yang memakai, dan apa yang berubah.',
    },
  ],
  en: [
    {
      id: '1',
      name: 'Project name 01',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
    {
      id: '2',
      name: 'Project name 02',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
    {
      id: '3',
      name: 'Project name 03',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
    {
      id: '4',
      name: 'Project name 04',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
    {
      id: '5',
      name: 'Project name 05',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
    {
      id: '6',
      name: 'Project name 06',
      outcome: 'Role / outcome in one sentence.',
      context: 'The problem or opportunity that made this project exist — placeholder until real work is filled in.',
      approach: 'Product and technical choices, and where AI was used as an accelerator.',
      result: 'What shipped, who uses it, and what changed.',
    },
  ],
};

function casesFor(locale) {
  return CASES[locale] || CASES.id;
}

const CASE_IMAGES = {
  '1': 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop',
  '2': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  '3': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  '4': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  '5': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
  '6': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
};

function applyWorkIndex(locale) {
  const page = document.documentElement.dataset.page;
  if (page !== 'work' && page !== 'home') return;
  const list = casesFor(locale);
  document.querySelectorAll('[data-work-card]').forEach((card) => {
    const id = card.getAttribute('data-work-card');
    const item = list.find((c) => c.id === id);
    if (!item) return;
    const name = card.querySelector('[data-work-field="name"]');
    const outcome = card.querySelector('[data-work-field="outcome"]');
    const img = card.querySelector('[data-work-image]');
    if (name) name.textContent = item.name;
    if (outcome) outcome.textContent = item.outcome;
    if (img && CASE_IMAGES[id]) img.src = CASE_IMAGES[id];
  });
}

function applyCase(locale) {
  if (document.documentElement.dataset.page !== 'case') return;
  const list = casesFor(locale);
  const id = new URLSearchParams(window.location.search).get('p') || '1';
  const index = Math.max(0, list.findIndex((c) => c.id === id));
  const item = list[index] || list[0];
  document.querySelectorAll('[data-case]').forEach((el) => {
    const key = el.getAttribute('data-case');
    if (key && item[key] != null) el.textContent = item[key];
  });
  const caseImg = document.querySelector('[data-case-image]');
  if (caseImg && CASE_IMAGES[item.id]) caseImg.src = CASE_IMAGES[item.id];
  document.title = 'rezisaktiva — ' + item.name;
  const prev = list[index - 1];
  const next = list[index + 1];
  const prevA = document.querySelector('[data-case-prev]');
  const nextA = document.querySelector('[data-case-next]');
  if (prevA) {
    if (prev) {
      prevA.href = 'work-case.html?p=' + prev.id;
      prevA.hidden = false;
    } else {
      prevA.hidden = true;
    }
  }
  if (nextA) {
    if (next) {
      nextA.href = 'work-case.html?p=' + next.id;
      nextA.hidden = false;
    } else {
      nextA.hidden = true;
    }
  }
}

function runWordReveal() {
  document.querySelectorAll('[data-word-reveal]').forEach((headline) => {
    const words = headline.querySelectorAll('.word');
    words.forEach((w) => w.classList.remove('is-visible'));
    words.forEach((w, i) => {
      setTimeout(() => w.classList.add('is-visible'), 120 + i * 80);
    });
  });
}

function applyLocale(locale) {
  const dict = COPY[locale] || COPY.id;
  document.documentElement.lang = locale;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key && dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });

  const page = document.documentElement.dataset.page;
  const titleKey = page ? 'title.' + page : null;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  document.querySelectorAll('[data-locale]').forEach((btn) => {
    const active = btn.getAttribute('data-locale') === locale;
    btn.classList.toggle('bg-brand', active);
    btn.classList.toggle('text-on-brand', active);
    btn.toggleAttribute('data-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  try {
    localStorage.setItem('rz-locale', locale);
  } catch { }

  applyWorkIndex(locale);
  applyCase(locale);
  fillQuickInfoIndex(locale);
  runWordReveal();
}

function fillQuickInfoIndex(locale) {
  const listEl = document.querySelector('[data-qi-index]');
  if (!listEl) return;
  const list = casesFor(locale);
  listEl.innerHTML = list
    .map(
      (item) =>
        `<a href="work-case.html?p=${item.id}"><span>${item.name}</span><span class="qi-year">[2024]</span></a>`
    )
    .join('');
}

let qiLastFocus = null;

function setQuickInfoOpen(open) {
  const wrap = document.querySelector('.qi-wrap');
  const scrim = document.querySelector('.qi-scrim');
  const tab = document.querySelector('.qi-tab');
  if (!wrap || !scrim) return;
  const wasOpen = wrap.classList.contains('is-open');
  if (open === wasOpen) return;

  wrap.classList.toggle('is-open', open);
  scrim.classList.toggle('is-open', open);
  document.documentElement.classList.toggle('qi-lock', open);
  if (tab) {
    tab.setAttribute('aria-expanded', open ? 'true' : 'false');
    tab.setAttribute('tabindex', open ? '-1' : '0');
  }

  if (open) {
    qiLastFocus = document.activeElement;
    const close = wrap.querySelector('[data-qi-close]');
    if (close) close.focus();
  } else {
    const target = qiLastFocus && qiLastFocus.isConnected ? qiLastFocus : tab;
    if (target) target.focus();
    qiLastFocus = null;
  }
}

function trapQuickInfoFocus(e) {
  if (e.key !== 'Tab') return;
  const wrap = document.querySelector('.qi-wrap');
  if (!wrap || !wrap.classList.contains('is-open')) return;
  const panel = wrap.querySelector('.qi-panel');
  if (!panel) return;
  const focusable = panel.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function mountQuickInfo() {
  const page = document.documentElement.dataset.page;
  if (!page || page === 'case') return;
  if (document.querySelector('.qi-wrap')) return;

  const scrim = document.createElement('div');
  scrim.className = 'qi-scrim';
  scrim.setAttribute('data-qi-close', '');

  const wrap = document.createElement('div');
  wrap.className = 'qi-wrap';
  wrap.innerHTML = `
    <button type="button" class="qi-tab" aria-expanded="false" aria-controls="qi-panel">
      <span class="qi-tab-label" data-i18n="qi.tab">Quick info</span>
    </button>
    <aside id="qi-panel" class="qi-panel" role="dialog" aria-modal="true" aria-labelledby="qi-title">
      <div class="qi-header">
        <button type="button" class="qi-close" data-qi-close data-i18n-aria="qi.close" aria-label="Tutup quick info">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <h2 id="qi-title" class="qi-title" data-i18n="qi.title">Quick info</h2>
        <span></span>
      </div>
      <div class="qi-body">
      <p class="qi-bio" data-i18n="qi.bio"></p>
      <div class="qi-cols">
        <div>
          <p class="qi-label" data-i18n="qi.services">Services</p>
          <ul>
            <li data-i18n="qi.svc1">Product</li>
            <li data-i18n="qi.svc2">Fullstack</li>
            <li data-i18n="qi.svc3">AI</li>
            <li data-i18n="qi.svc4">Interaction design</li>
            <li data-i18n="qi.svc5">Strategy</li>
            <li data-i18n="qi.svc6">Research</li>
          </ul>
        </div>
        <div>
          <p class="qi-label" data-i18n="qi.tools">Tools</p>
          <ul>
            <li data-i18n="qi.tool1">Next.js</li>
            <li data-i18n="qi.tool2">TypeScript</li>
            <li data-i18n="qi.tool3">Astryx</li>
            <li data-i18n="qi.tool4">Figma</li>
            <li data-i18n="qi.tool5">Postgres</li>
            <li data-i18n="qi.tool6">Vercel</li>
          </ul>
        </div>
      </div>
      <p class="qi-label" data-i18n="qi.works">Works index</p>
      <div class="qi-index" data-qi-index></div>
      <p class="qi-label" data-i18n="qi.email">Email</p>
      <a class="qi-email cta-underline" href="mailto:hello@rezisaktiva.com">hello@rezisaktiva.com</a>
      <p class="qi-label" data-i18n="qi.links">Links</p>
      <div class="qi-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
      </div>
    </aside>
  `;

  document.body.append(scrim, wrap);

  wrap.querySelector('.qi-tab').addEventListener('click', () => setQuickInfoOpen(true));
  wrap.querySelector('[data-qi-close]').addEventListener('click', () => setQuickInfoOpen(false));
  scrim.addEventListener('click', () => setQuickInfoOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setQuickInfoOpen(false);
    trapQuickInfoFocus(e);
  });
}

let ctLastFocus = null;
let ctCopyResetTimer = null;
let ctSubmitResetTimer = null;

function setContactOpen(open) {
  const wrap = document.querySelector('.ct-wrap');
  const scrim = document.querySelector('.ct-scrim');
  if (!wrap || !scrim) return;
  const wasOpen = wrap.classList.contains('is-open');
  if (open === wasOpen) return;

  wrap.classList.toggle('is-open', open);
  scrim.classList.toggle('is-open', open);
  document.documentElement.classList.toggle('ct-lock', open);

  const ring = document.querySelector('.cursor-ring');
  if (!open && ring) ring.classList.remove('is-close');

  if (open) {
    ctLastFocus = document.activeElement;
    const panel = wrap.querySelector('.ct-panel');
    const firstField = panel && panel.querySelector('#ct-email');
    if (firstField) firstField.focus();
  } else {
    const target = ctLastFocus && ctLastFocus.isConnected ? ctLastFocus : null;
    if (target) target.focus();
    ctLastFocus = null;
  }
}

function trapContactFocus(e) {
  if (e.key !== 'Tab') return;
  const wrap = document.querySelector('.ct-wrap');
  if (!wrap || !wrap.classList.contains('is-open')) return;
  const panel = wrap.querySelector('.ct-panel');
  if (!panel) return;
  const focusable = panel.querySelectorAll(
    'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function mountContactModal() {
  if (document.querySelector('.ct-wrap')) return;

  const scrim = document.createElement('div');
  scrim.className = 'ct-scrim';
  scrim.setAttribute('data-ct-close', '');

  const wrap = document.createElement('div');
  wrap.className = 'ct-wrap';
  wrap.innerHTML = `
    <div id="ct-panel" class="ct-panel" role="dialog" aria-modal="true" aria-labelledby="ct-title">
      <button type="button" class="ct-close" data-ct-close data-i18n-aria="contact.close" aria-label="Tutup">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <div class="ct-grid">
        <div>
          <h2 id="ct-title" class="ct-title" data-i18n-html="contact.modal.h1">
            <span>Mari</span> <span class="ct-accent">mengobrol.</span>
          </h2>
          <form class="ct-form" data-ct-form novalidate>
            <label class="ct-label" for="ct-email" data-i18n="contact.form.emailLabel">Email kamu</label>
            <input id="ct-email" name="email" type="email" class="ct-input" data-i18n-placeholder="contact.form.emailPlaceholder" placeholder="mail@mail.com" required />
            <label class="ct-label" for="ct-message" data-i18n="contact.form.messageLabel">Pesan</label>
            <textarea id="ct-message" name="message" class="ct-textarea" data-i18n-placeholder="contact.form.messagePlaceholder" placeholder="Ceritakan sedikit soal project kamu" required></textarea>
            <button type="submit" class="ct-submit magnetic">
              <span data-ct-submit-label data-i18n="contact.form.submit">Kirim</span>
              <span class="ct-submit-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </button>
          </form>
        </div>
        <div>
          <p class="ct-label-caps" data-i18n="contact.details.label">Detail kontak</p>
          <div class="ct-email-row">
            <a class="ct-email-link" href="mailto:hello@rezisaktiva.com">hello@rezisaktiva.com</a>
            <button type="button" class="ct-copy" data-ct-copy data-i18n-aria="contact.copy.label" aria-label="Salin email">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
            </button>
          </div>
          <p class="ct-label-caps" data-i18n="contact.socials.label">Sosial</p>
          <div class="ct-socials">
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"/></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.61-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.34-1.1.62-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>
            </a>
          </div>
          <p class="ct-availability">
            <span class="avail-dot" aria-hidden="true"></span>
            <span data-i18n="contact.availability">Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.</span>
          </p>
        </div>
      </div>
    </div>
  `;

  document.body.append(scrim, wrap);

  wrap.querySelector('[data-ct-close]').addEventListener('click', () => setContactOpen(false));
  scrim.addEventListener('click', () => setContactOpen(false));

  const ring = document.querySelector('.cursor-ring');
  if (ring) {
    scrim.addEventListener('mouseenter', () => ring.classList.add('is-close'));
    scrim.addEventListener('mouseleave', () => ring.classList.remove('is-close'));
  }

  const copyBtn = wrap.querySelector('[data-ct-copy]');
  copyBtn.addEventListener('click', async () => {
    const email = wrap.querySelector('.ct-email-link').textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      /* Clipboard write failed (insecure context, permission denied, etc.) —
         don't show a false "copied" success state; just leave the button as-is. */
      return;
    }
    copyBtn.classList.add('is-copied');
    clearTimeout(ctCopyResetTimer);
    ctCopyResetTimer = setTimeout(() => copyBtn.classList.remove('is-copied'), 1600);
  });

  const form = wrap.querySelector('[data-ct-form]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // `novalidate` disables the browser's native validation UI so we control the styling,
    // but we still need to enforce it ourselves before pretending the submit succeeded.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const label = form.querySelector('[data-ct-submit-label]');
    if (!label) return;
    const locale = document.documentElement.lang === 'en' ? 'en' : 'id';
    const dict = COPY[locale] || COPY.id;
    const original = dict['contact.form.submit'];
    label.textContent = dict['contact.form.sent'];
    clearTimeout(ctSubmitResetTimer);
    ctSubmitResetTimer = setTimeout(() => {
      label.textContent = original;
    }, 2200);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setContactOpen(false);
    trapContactFocus(e);
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-contact-open]');
    if (trigger) {
      e.preventDefault();
      setContactOpen(true);
    }
  });
}

function initPillGroups() {
  const groups = document.querySelectorAll('[data-pill-group]');
  const controllers = [];

  groups.forEach((container) => {
    if (container.dataset.pillGroupReady) return;
    container.dataset.pillGroupReady = 'true';

    const items = Array.from(container.querySelectorAll(':scope > a, :scope > button'));
    if (!items.length) return;

    container.classList.add('relative');

    const pill = document.createElement('span');
    pill.setAttribute('aria-hidden', 'true');
    pill.className = 'pill-indicator rounded-lg sm:rounded-2xl bg-brand';
    container.insertBefore(pill, container.firstChild);
    items.forEach((item) => item.classList.add('relative', 'z-[1]'));

    // `data-active` is the source of truth for which item is highlighted; `bg-brand`/
    // `text-on-brand` stay in sync for no-JS graceful degradation, but must not be reused
    // as the active-state signal (a future style tweak on bg-brand could silently break it).
    const getActiveItem = () => items.find((item) => item.hasAttribute('data-active')) || null;

    function place(item, animate) {
      if (!item) {
        pill.style.opacity = '0';
        return;
      }
      if (!animate) pill.classList.add('pill-indicator--no-transition');
      const cRect = container.getBoundingClientRect();
      const iRect = item.getBoundingClientRect();
      pill.style.opacity = '1';
      pill.style.width = `${iRect.width}px`;
      pill.style.height = `${iRect.height}px`;
      pill.style.transform = `translate(${iRect.left - cRect.left}px, ${iRect.top - cRect.top}px)`;
      if (!animate) {
        requestAnimationFrame(() => pill.classList.remove('pill-indicator--no-transition'));
      }
    }

    function syncTextColor(hovered) {
      const active = getActiveItem();
      items.forEach((item) => {
        item.classList.toggle('text-on-brand', item === hovered || item === active);
      });
    }

    place(getActiveItem(), false);
    syncTextColor(null);

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        place(item, true);
        syncTextColor(item);
      });
      // Keyboard users tabbing through items get the same preview mouse users get on hover.
      item.addEventListener('focus', () => {
        place(item, true);
        syncTextColor(item);
      });
      item.addEventListener('blur', () => {
        place(getActiveItem(), true);
        syncTextColor(null);
      });
    });

    container.addEventListener('mouseleave', () => {
      if (container.contains(document.activeElement) && document.activeElement !== container) return;
      place(getActiveItem(), true);
      syncTextColor(null);
    });

    window.addEventListener('resize', () => place(getActiveItem(), false));

    controllers.push({
      refresh(animate) {
        place(getActiveItem(), animate !== false);
        syncTextColor(null);
      },
    });
  });

  return controllers;
}

function initMobileNav(pillGroups) {
  const header = document.querySelector('header.header-quiet');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (!header || !toggle) return;

  const labelFor = (open) => {
    const locale = document.documentElement.lang === 'en' ? 'en' : 'id';
    const dict = COPY[locale] || COPY.id;
    return open ? dict['nav.menuClose'] : dict['nav.menu'];
  };

  const setOpen = (open) => {
    header.classList.toggle('is-nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', labelFor(open));
    // The nav/locale pill groups live inside `.header-panel`, which is `display:none`
    // while the dropdown is closed — their indicator position was computed against a
    // zero-size rect at mount time. Recompute now that the panel is actually visible.
    if (open && pillGroups) {
      pillGroups.forEach((group) => group.refresh(false));
    }
  };

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!header.classList.contains('is-nav-open'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mountQuickInfo();
  mountContactModal();

  let locale = 'id';
  try {
    const stored = localStorage.getItem('rz-locale');
    if (stored === 'en' || stored === 'id') locale = stored;
  } catch { }
  applyLocale(locale);

  const pillGroups = initPillGroups();
  initMobileNav(pillGroups);

  document.querySelectorAll('[data-locale]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLocale(btn.getAttribute('data-locale'));
      pillGroups.forEach((group) => group.refresh(true));
    });
  });

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      try {
        localStorage.setItem('rz-theme', next);
      } catch { }
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));

  const glow = document.querySelector('.cursor-glow');
  if (glow && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));
  }

  const ring = document.querySelector('.cursor-ring');
  if (ring && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      ring.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const railDots = document.querySelectorAll('.rail-dot');
  if (railDots.length) {
    const sections = Array.from(railDots)
      .map((d) => document.getElementById(d.dataset.rail))
      .filter(Boolean);
    const railIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            railDots.forEach((d) => d.classList.toggle('is-active', d.dataset.rail === entry.target.id));
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => railIo.observe(s));
  }

  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateX(0) rotateY(0)';
    });
  });
});
