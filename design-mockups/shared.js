// Shared interaction — mockup rezisaktiva

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (light default per baseline; dark tersimpan di localStorage bila dipilih user)
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      try { localStorage.setItem('rz-theme', next); } catch (e) {}
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  // Word-by-word reveal (any element flagged [data-word-reveal])
  document.querySelectorAll('[data-word-reveal]').forEach((headline) => {
    const words = headline.querySelectorAll('.word');
    words.forEach((w, i) => {
      setTimeout(() => w.classList.add('is-visible'), 150 + i * 90);
    });
  });

  // Cursor glow follow (desktop only)
  const glow = document.querySelector('.cursor-glow');
  if (glow && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));
  }

  // Custom cursor ring — lerp menyusul kursor, membesar di atas link/tombol
  const ring = document.querySelector('.cursor-ring');
  if (ring && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
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

  // Section index rail — highlight dot aktif sesuai section yang terlihat
  const railDots = document.querySelectorAll('.rail-dot');
  if (railDots.length) {
    const sections = Array.from(railDots).map((d) => document.getElementById(d.dataset.rail)).filter(Boolean);
    const railIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          railDots.forEach((d) => d.classList.toggle('is-active', d.dataset.rail === entry.target.id));
        }
      });
    }, { threshold: 0.5 });
    sections.forEach((s) => railIo.observe(s));
  }

  // Magnetic buttons — subtle pull toward cursor
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });

  // Tilt cards
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(700px) rotateX(0) rotateY(0)'; });
  });
});
