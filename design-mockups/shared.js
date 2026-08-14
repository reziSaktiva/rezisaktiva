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
    'theme.aria': 'Ganti tema terang/gelap',
    'rail.home': 'Home',
    'rail.bukti': 'Bukti',
    'rail.karya': 'Karya',
    'rail.contact': 'Contact',
    'home.kicker': 'Product builder',
    'home.h1':
      '<span class="word hero-line">Membangun</span>\n' +
      '<span class="word hero-line hero-line-2">produk.</span>',
    'home.sub': 'Dari ide hingga live.',
    'home.lead':
      'Fullstack sebagai fondasi, AI sebagai edge yang jujur — bukan klaim kosong.',
    'home.available': 'available for select projects',
    'home.cta.talk': 'Mulai percakapan',
    'home.cta.work': 'Lihat karya',
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
    'home.contact.link': 'Ke halaman Contact',
    'page.process': 'Proses Kerja',
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
    'contact.lead':
      'Terbuka untuk percakapan soal produk, kolaborasi, atau peluang kerja sama yang cocok. Tidak ada form panjang — cukup mulai dari email.',
    'contact.email.note': 'Cara paling langsung menjangkau saya',
    'contact.availability': 'Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.',
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
    'work.cta.link': 'Ke halaman Contact',
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
    'theme.aria': 'Toggle light/dark theme',
    'rail.home': 'Home',
    'rail.bukti': 'Proof',
    'rail.karya': 'Work',
    'rail.contact': 'Contact',
    'home.kicker': 'Product builder',
    'home.h1':
      '<span class="word hero-line">Building</span>\n' +
      '<span class="word hero-line hero-line-2">products.</span>',
    'home.sub': 'From idea to live.',
    'home.lead':
      'Fullstack as the foundation, AI as an honest edge — not an empty claim.',
    'home.available': 'available for select projects',
    'home.cta.talk': 'Start a conversation',
    'home.cta.work': 'See work',
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
    'home.contact.link': 'Go to Contact',
    'page.process': 'My Process',
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
    'contact.lead':
      'Open to conversations about product, collaboration, or a partnership that fits. No long form — start with email.',
    'contact.email.note': 'The most direct way to reach me',
    'contact.availability': 'Open to selected projects in the coming months.',
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
    'work.cta.link': 'Go to Contact',
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

  const page = document.documentElement.dataset.page;
  const titleKey = page ? 'title.' + page : null;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  document.querySelectorAll('[data-locale]').forEach((btn) => {
    const active = btn.getAttribute('data-locale') === locale;
    btn.classList.toggle('bg-brand', active);
    btn.classList.toggle('text-on-brand', active);
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

function initPillGroups() {
  const groups = document.querySelectorAll('[data-pill-group]');
  const controllers = [];

  groups.forEach((container) => {
    const items = Array.from(container.querySelectorAll(':scope > a, :scope > button'));
    if (!items.length) return;

    container.classList.add('relative');

    const pill = document.createElement('span');
    pill.setAttribute('aria-hidden', 'true');
    pill.className = 'pill-indicator rounded-lg sm:rounded-2xl bg-brand';
    container.insertBefore(pill, container.firstChild);
    items.forEach((item) => item.classList.add('relative', 'z-[1]'));

    const getActiveItem = () => items.find((item) => item.classList.contains('bg-brand')) || null;

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
    });

    container.addEventListener('mouseleave', () => {
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

document.addEventListener('DOMContentLoaded', () => {
  mountQuickInfo();

  let locale = 'id';
  try {
    const stored = localStorage.getItem('rz-locale');
    if (stored === 'en' || stored === 'id') locale = stored;
  } catch { }
  applyLocale(locale);

  const pillGroups = initPillGroups();

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
