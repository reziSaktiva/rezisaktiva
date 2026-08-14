// Shared interaction — mockup rezisaktiva

const COPY = {
  id: {
    'title.home': 'rezisaktiva — Home',
    'title.about': 'rezisaktiva — Proses Kerja',
    'title.contact': 'rezisaktiva — Contact',
    'nav.process': 'Proses Kerja',
    'nav.work': 'Karya',
    'nav.contact': 'Contact',
    'theme.aria': 'Ganti tema terang/gelap',
    'rail.home': 'Home',
    'rail.bukti': 'Bukti',
    'rail.karya': 'Karya',
    'rail.contact': 'Contact',
    'home.h1':
      '<span class="word">Membangun</span><br class="hidden lg:block" />\n' +
      '<span class="word">produk,</span> <span class="word">dari</span>\n' +
      '<span class="word text-accent">ide</span><br class="hidden lg:block" />\n' +
      '<span class="word text-accent">hingga</span> <span class="word text-accent">live.</span>',
    'home.lead':
      'Fullstack sebagai fondasi, AI sebagai edge yang jujur — bukan klaim kosong. Satu rumah untuk melihat cara saya berpikir dan berkarya.',
    'home.available': 'Rezi — <span class="text-accent">available</span> for select projects',
    'home.cta.talk': 'Mulai percakapan',
    'home.cta.work': 'Lihat karya',
    'home.photo.note': 'Foto stand-in — ganti dengan foto pribadi (potret 4:5, treatment duotone otomatis)',
    'home.bukti.label': '(02) Bukti',
    'home.bukti.body':
      '<span class="text-fg">~6 tahun</span> membangun software fullstack — kini memakai AI sebagai cara kerja, bukan sekadar kata kunci.',
    'home.work.label': '(03) Karya Terpilih',
    'home.work.title': 'Beberapa hal yang sudah dibangun',
    'home.work.all': 'Lihat semua →',
    'home.work.name': 'Nama Project',
    'home.work.outcome': 'Peran / outcome singkat, satu kalimat.',
    'home.work.swipe': '← geser untuk lihat lebih banyak →',
    'home.contact.label': '(04) Contact',
    'home.contact.title': 'Mari mengobrol.',
    'home.contact.body':
      'Terbuka untuk percakapan soal produk, peluang kerja sama, atau sekadar bertukar ide.',
    'home.contact.link': 'Ke halaman Contact',
    'page.process': 'Proses Kerja',
    'about.h1':
      '<span class="word">Saya</span> <span class="word">membangun</span> <span class="word">produk</span> <span class="word">dari</span> <span class="word text-accent">nol</span> <span class="word text-accent">hingga</span> <span class="word text-accent">live.</span>',
    'about.lead1':
      'Saya mulai dari ide kasar, lalu ikut memikirkan produknya, membangun sistemnya, dan mengantarnya sampai dipakai orang sungguhan.',
    'about.lead2':
      'Bukan sekadar mengeksekusi spesifikasi — saya ikut duduk di pertanyaan "apakah ini yang seharusnya dibangun", lalu memastikan jawabannya jadi kode yang jalan.',
    'about.fullstack.h2': 'Fullstack sebagai fondasi',
    'about.fullstack.body':
      'Sekitar enam tahun terakhir dihabiskan di seluruh lapisan produk digital — dari desain data, API, hingga interface yang dipakai pengguna akhir. Fondasi ini yang membuat saya nyaman bicara trade-off, bukan hanya "bisa coding".',
    'about.chip.shipping': 'Shipping ke Production',
    'about.ai.h2': 'AI sebagai edge, bukan klaim',
    'about.ai.body':
      'AI sekarang bagian dari cara saya bekerja — mempercepat eksplorasi, menajamkan keputusan, membantu ship lebih rapi. Saya jujur soal batasannya: AI mempercepat proses, bukan pengganti fondasi engineering dan product thinking yang sudah dibangun.',
    'section.process': 'Proses Kerja',
    'about.process.h2': 'Bagaimana saya menggerakkan sebuah project',
    'about.step1': 'Pahami masalah dan konteks nyata dulu — siapa yang pakai, kenapa penting — sebelum menyentuh kode.',
    'about.step2': 'Susun alur produk dan keputusan teknis yang bisa dipertanggungjawabkan — bukan asal pilih stack yang lagi tren.',
    'about.step3': 'Eksekusi cepat dan iteratif; AI dipakai sebagai akselerator, bukan pengganti keputusan.',
    'about.step4': 'Rilis ke pemakaian nyata, lalu perbaiki berdasarkan yang benar-benar terjadi — bukan asumsi di atas kertas.',
    'about.process.note':
      'Efektivitasnya sederhana: siklus pendek dari ide ke sesuatu yang bisa dicoba, supaya keputusan berikutnya dibuat berdasarkan bukti, bukan tebakan.',
    'about.cta.q': 'Tertarik mengobrol lebih jauh?',
    'about.cta.link': 'Hubungi saya',
    'contact.h1':
      '<span class="word">Ada</span> <span class="word">ide,</span> <span class="word">peluang,</span> <span class="word">atau</span> <span class="word text-accent">sekadar</span> <span class="word text-accent">ingin</span> <span class="word text-accent">ngobrol?</span>',
    'contact.lead':
      'Terbuka untuk percakapan soal produk, kolaborasi, atau peluang kerja sama yang cocok. Tidak ada form panjang — cukup mulai dari email.',
    'contact.email.note': 'Cara paling langsung menjangkau saya',
    'contact.availability': 'Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.',
  },
  en: {
    'title.home': 'rezisaktiva — Home',
    'title.about': 'rezisaktiva — My Process',
    'title.contact': 'rezisaktiva — Contact',
    'nav.process': 'My Process',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'theme.aria': 'Toggle light/dark theme',
    'rail.home': 'Home',
    'rail.bukti': 'Proof',
    'rail.karya': 'Work',
    'rail.contact': 'Contact',
    'home.h1':
      '<span class="word">Building</span><br class="hidden lg:block" />\n' +
      '<span class="word">products,</span> <span class="word">from</span>\n' +
      '<span class="word text-accent">idea</span><br class="hidden lg:block" />\n' +
      '<span class="word text-accent">to</span> <span class="word text-accent">live.</span>',
    'home.lead':
      'Fullstack as the foundation, AI as an honest edge — not an empty claim. One home to see how I think and ship.',
    'home.available': 'Rezi — <span class="text-accent">available</span> for select projects',
    'home.cta.talk': 'Start a conversation',
    'home.cta.work': 'See work',
    'home.photo.note': 'Stand-in photo — replace with a personal portrait (4:5, automatic duotone)',
    'home.bukti.label': '(02) Proof',
    'home.bukti.body':
      '<span class="text-fg">~6 years</span> building fullstack software — now using AI as a way of working, not just a keyword.',
    'home.work.label': '(03) Selected work',
    'home.work.title': 'A few things already shipped',
    'home.work.all': 'See all →',
    'home.work.name': 'Project name',
    'home.work.outcome': 'Role / outcome in one sentence.',
    'home.work.swipe': '← swipe to see more →',
    'home.contact.label': '(04) Contact',
    'home.contact.title': "Let's talk.",
    'home.contact.body':
      'Open to conversations about product, collaboration, or a fit that makes sense.',
    'home.contact.link': 'Go to Contact',
    'page.process': 'My Process',
    'about.h1':
      '<span class="word">I</span> <span class="word">build</span> <span class="word">products</span> <span class="word">from</span> <span class="word text-accent">zero</span> <span class="word text-accent">to</span> <span class="word text-accent">live.</span>',
    'about.lead1':
      'I start from a rough idea, then help shape the product, build the system, and take it all the way to real use.',
    'about.lead2':
      'Not just executing a spec — I sit with the question "is this what should be built", then make the answer into working code.',
    'about.fullstack.h2': 'Fullstack as the foundation',
    'about.fullstack.body':
      'The last six years or so have been spent across the whole digital product stack — from data design and APIs to the interface people actually use. That foundation is why I can talk trade-offs, not only "I can code".',
    'about.chip.shipping': 'Shipping to production',
    'about.ai.h2': 'AI as an edge, not a claim',
    'about.ai.body':
      'AI is now part of how I work — faster exploration, sharper decisions, cleaner shipping. I am honest about the limit: AI speeds the process; it does not replace the engineering and product thinking already built.',
    'section.process': 'My Process',
    'about.process.h2': 'How I move a project forward',
    'about.step1': 'Understand the real problem and context first — who uses it, why it matters — before touching code.',
    'about.step2': 'Shape the product flow and technical choices that can be defended — not picking a stack because it is trendy.',
    'about.step3': 'Execute fast and iteratively; AI is an accelerator, not a substitute for decisions.',
    'about.step4': 'Release into real use, then improve from what actually happens — not assumptions on paper.',
    'about.process.note':
      'The effectiveness is simple: a short cycle from idea to something tryable, so the next decision is based on evidence, not guesswork.',
    'about.cta.q': 'Want to talk further?',
    'about.cta.link': 'Get in touch',
    'contact.h1':
      '<span class="word">An</span> <span class="word">idea,</span> <span class="word">an</span> <span class="word">opportunity,</span> <span class="word">or</span> <span class="word text-accent">just</span> <span class="word text-accent">want</span> <span class="word text-accent">to talk?</span>',
    'contact.lead':
      'Open to conversations about product, collaboration, or a partnership that fits. No long form — start with email.',
    'contact.email.note': 'The most direct way to reach me',
    'contact.availability': 'Open to selected projects in the coming months.',
  },
};

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
    btn.classList.toggle('font-medium', active);
    btn.classList.toggle('text-fg', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  try {
    localStorage.setItem('rz-locale', locale);
  } catch (e) {}

  runWordReveal();
}

document.addEventListener('DOMContentLoaded', () => {
  let locale = 'id';
  try {
    const stored = localStorage.getItem('rz-locale');
    if (stored === 'en' || stored === 'id') locale = stored;
  } catch (e) {}
  applyLocale(locale);
  document.querySelectorAll('[data-locale]').forEach((btn) => {
    btn.addEventListener('click', () => applyLocale(btn.getAttribute('data-locale')));
  });

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      try {
        localStorage.setItem('rz-theme', next);
      } catch (e) {}
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
