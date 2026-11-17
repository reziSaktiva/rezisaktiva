/* design-mockups v4 — chrome, smooth scroll, WebGL "contour field" background, scroll/pointer engine.
   Vanilla, no build step. Respects prefers-reduced-motion. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  var page = document.body.dataset.page || "home";
  var EMAIL = "rezisaktiva08@gmail.com";

  /* ---------- chrome ---------- */
  var links = [["home.html", "Home", "home"], ["workflow.html", "Workflow", "workflow"], ["work.html", "Work", "work"], ["contact.html", "Contact", "contact"]];
  function navLink(l) {
    var cur = page === l[2] || (page === "case" && l[2] === "work");
    return '<a href="' + l[0] + '" data-t="' + l[1] + '"' + (cur ? ' aria-current="page"' : "") + "><span>" + l[1] + "</span></a>";
  }
  var navHtml = links.map(navLink).join("");

  var header =
    '<header class="site-header">' +
    '<a class="brand wordmark" href="home.html" aria-label="Rezi Saktiva — home">Rezi</a>' +
    '<div class="meta"><span>Bandung, Indonesia</span><i>/</i><span id="clock">--:--:--</span></div>' +
    '<nav class="nav" aria-label="Primary">' + navHtml + "</nav>" +
    '<button class="menu-btn" aria-expanded="false" aria-controls="sheet">Menu</button></header>' +
    '<div class="dock" aria-hidden="true"><a class="dock__brand wordmark" href="home.html" tabindex="-1">Rezi</a>' +
    '<nav class="dock__nav nav">' + navHtml + '</nav><button class="menu-btn dock__menu" tabindex="-1">Menu</button></div>' +
    '<div class="sheet" id="sheet" aria-hidden="true"><button class="close">Close</button>' +
    '<a href="home.html">Home</a><a href="workflow.html">Workflow</a><a href="work.html">Work</a><a href="contact.html">Contact</a></div>';

  var footer =
    '<footer class="foot" id="contact">' +
    '<canvas class="field" data-field="dark" aria-hidden="true"></canvas>' +
    '<div class="foot__top"><div><p class="small" style="color:rgba(248,248,248,.5)">Next</p>' +
    '<h2 class="display h-lg" data-lines style="margin-top:14px">Tell me what<br>you’re building.</h2></div>' +
    '<a class="mag" href="' + (page === "contact" ? "#form" : "contact.html") + '" data-cursor="Hi"><span>Write<br>to me</span></a></div>' +
    '<div class="foot__cols"><div class="foot__info"><span class="small" style="color:rgba(248,248,248,.5)">Direct line</span>' +
    '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a><span>Bandung, Indonesia</span>" +
    '<span class="small" style="color:rgba(248,248,248,.5);margin-top:10px">Elsewhere</span>' +
    '<a href="https://github.com/reziSaktiva" target="_blank" rel="noopener">GitHub ↗</a>' +
    '<a href="https://www.linkedin.com/in/rezi-saktiva-bb89a12a1/" target="_blank" rel="noopener">LinkedIn ↗</a></div>' +
    '<nav class="foot__nav" aria-label="Footer"><a href="home.html">Home</a><a href="workflow.html">Workflow</a><a href="work.html">Work</a><a href="contact.html">Contact</a></nav></div>' +
    '<div class="foot__word wordmark" aria-hidden="true">Rezi</div>' +
    '<div class="foot__legal"><span>© 2026 Rezi Saktiva · Currently at Insvire Technologies</span><span>Mockup v4</span></div></footer>';

  var h = $("#chrome-header"); if (h) h.outerHTML = header;
  var hdr = $(".site-header");
  if (page === "case") hdr.classList.add("on-dark");
  if (page === "contact") hdr.classList.add("on-dark", "compact");
  if (page === "work") {
    hdr.style.display = "none"; $(".dock").style.display = "none";
    document.body.insertAdjacentHTML("afterbegin", '<div class="wbar"><a class="wbar__brand wordmark" href="home.html">Rezi</a><nav class="wbar__nav nav" aria-label="Primary">' + navHtml + '</nav><div class="wbar__end"><a class="pill wbar__cta" href="contact.html" data-t="Contact"><span>Write to me →</span></a><button class="menu-btn wbar__menu">Menu</button></div></div>');
  }
  var f = $("#chrome-footer"); if (f) f.outerHTML = footer;
  document.body.insertAdjacentHTML("beforeend", '<div class="curtain" aria-hidden="true"><b class="wordmark"></b></div>' + (fine ? '<div class="cursor"><span></span></div>' : ""));

  /* ---------- clock (Bandung / WIB) ---------- */
  var clock = $("#clock");
  function tick() { if (clock) clock.textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta", hour12: false }); }
  tick(); setInterval(tick, 1000);

  /* ---------- mobile sheet ---------- */
  var sheet = $("#sheet");
  function setSheet(o) { sheet.classList.toggle("open", o); sheet.setAttribute("aria-hidden", String(!o)); document.body.style.overflow = o ? "hidden" : ""; }
  $$(".menu-btn").forEach(function (b) { b.addEventListener("click", function () { setSheet(true); }); });
  $(".close", sheet).addEventListener("click", function () { setSheet(false); });

  /* ---------- contact form (mockup: validates, shows a sent state) ---------- */
  var cf = $("#cform");
  if (cf) {
    cf.addEventListener("submit", function (e) {
      e.preventDefault();
      $$("[required]", cf).forEach(function (i) { i.closest(".fld").classList.toggle("bad", !i.checkValidity()); });
      var bad = $(":invalid", cf);
      if (bad) { bad.focus(); return; }
      cf.classList.add("sent"); $(".cf__ok", cf).focus();
    });
    $$("input, textarea, select", cf).forEach(function (i) { i.addEventListener("input", function () { i.closest(".fld").classList.remove("bad"); }); });
  }

  /* ---------- curtain page transitions ---------- */
  var curtain = $(".curtain"), curtainWord = $("b", curtain);
  function resetCurtain() { curtain.style.transition = "none"; curtain.classList.remove("cover", "leave"); void curtain.offsetWidth; curtain.style.transition = ""; }
  try {
    if (sessionStorage.getItem("tr") === "1") {
      sessionStorage.removeItem("tr");
      curtain.style.transition = "none"; curtain.classList.add("cover"); void curtain.offsetWidth; curtain.style.transition = "";
      requestAnimationFrame(function () { curtain.classList.add("leave"); setTimeout(resetCurtain, 900); });
    }
  } catch (e) {}
  window.addEventListener("pageshow", function (e) { if (e.persisted) resetCurtain(); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    var href = a.getAttribute("href");
    if (!/^[\w-]+\.html(#.*)?$/.test(href) || reduce) return;
    e.preventDefault(); setSheet(false);
    curtainWord.textContent = (a.dataset.t || a.textContent.trim().split("\n")[0] || "Rezi").slice(0, 14);
    curtain.classList.add("cover");
    setTimeout(function () { try { sessionStorage.setItem("tr", "1"); } catch (x) {} location.href = href; }, 850);
  });

  /* ---------- smooth scroll (lerped wheel scrolling, native fallbacks) ---------- */
  var ss = { t: scrollY, c: scrollY, last: scrollY, on: fine && !reduce };
  if (ss.on) {
    root.style.scrollBehavior = "auto";
    addEventListener("wheel", function (e) {
      if (e.ctrlKey || sheet.classList.contains("open") || e.target.closest("textarea")) return;
      e.preventDefault();
      var dy = e.deltaMode === 1 ? e.deltaY * 34 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
      ss.t = clamp(ss.t + dy, 0, root.scrollHeight - innerHeight);
    }, { passive: false });
  }

  /* ---------- split text ---------- */
  $$("[data-lines]").forEach(function (el) {
    var parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map(function (p, i) { return '<span class="ln" style="--i:' + i + '"><i>' + p + "</i></span>"; }).join("");
    el.setAttribute("aria-label", el.textContent);
  });
  $$("[data-scrub]").forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(function (w) { return '<span class="w">' + w + "</span>"; }).join(" ");
    el._w = $$(".w", el);
  });

  /* ---------- reveal ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  $$("[data-lines], .fade").forEach(function (el) { if (!el.hasAttribute("data-hero-lines") && !el.hasAttribute("data-now")) io.observe(el); });
  setTimeout(function () { $$("[data-hero-lines], [data-now]").forEach(function (el) { el.classList.add("in"); }); }, 250);

  /* ---------- pinned scrubbed sections ---------- */
  var pins = $$("[data-pin]").map(function (el) {
    return { el: el, words: $$(".pin__word", el), roles: $$(".pin__role", el), ticks: $$(".pin__ticks span", el), count: $(".pin__count", el), bar: $(".pin__bar", el), idx: -1 };
  });

  /* ---------- hero ---------- */
  var hero = $("[data-hero]"), heroBlur = $(".hero__blur"), heroLines = $(".hero__lines");

  /* ---------- work page ---------- */
  var prev = $(".preview");
  if (prev) {
    var pimg = $("img", prev), tx = 0, ty = 0, cx = 0, cy = 0;
    $$("[data-preview]").forEach(function (row) {
      row.addEventListener("mouseenter", function () { pimg.src = row.dataset.preview; prev.classList.add("on"); });
      row.addEventListener("mouseleave", function () { prev.classList.remove("on"); });
      row.addEventListener("mousemove", function (e) { tx = e.clientX + 50; ty = e.clientY; });
    });
    prev._step = function () { cx = lerp(cx, tx, 0.14); cy = lerp(cy, ty, 0.14); prev.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)"; };
  }
  $$("[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("[data-filter]").forEach(function (x) { x.classList.toggle("on", x === b); });
      var v = b.dataset.filter;
      $$(".wl__row").forEach(function (r) { r.classList.toggle("hide", v !== "all" && r.dataset.year.indexOf(v) === -1); });
    });
  });

  /* ---------- accordions ---------- */
  $$(".adr__item").forEach(function (it) {
    var b = $(".adr__btn", it);
    if (it.hasAttribute("data-open")) { it.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    b.addEventListener("click", function () {
      var o = !it.classList.contains("open");
      $$(".adr__item", it.parentNode).forEach(function (x) { x.classList.remove("open"); $(".adr__btn", x).setAttribute("aria-expanded", "false"); });
      it.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o));
    });
  });

  /* ---------- case body highlight ---------- */
  var lis = $$(".cbody li");
  if (lis.length) {
    var lio = new IntersectionObserver(function (es) { es.forEach(function (en) { en.target.classList.toggle("on", en.isIntersecting); }); }, { rootMargin: "-38% 0px -38% 0px" });
    lis.forEach(function (l) { lio.observe(l); });
  }

  /* ---------- cursor + magnetic ---------- */
  var mouse = { x: 0.5, y: 0.5, px: 0, py: 0, in: 0 };
  if (fine && !reduce) {
    root.classList.add("has-cursor");
    var cur = $(".cursor"), cl = $("span", cur), mx = 0, my = 0, px = 0, py = 0;
    addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY; cur.classList.add("show");
      var t = e.target.closest ? e.target.closest("[data-cursor]") : null;
      var l = e.target.closest ? e.target.closest("a, button, [data-preview], .adr__btn") : null;
      cur.classList.toggle("big", !!t);
      cur.classList.toggle("link", !t && !!l);
      if (t) cl.textContent = t.dataset.cursor;
    });
    document.addEventListener("mouseleave", function () { cur.classList.remove("show"); });
    cur._step = function () { px = lerp(px, mx, 0.22); py = lerp(py, my, 0.22); cur.style.transform = "translate(" + px + "px," + py + "px)"; };
    $$(".mag").forEach(function (m) {
      var s = $("span", m);
      m.addEventListener("mousemove", function (e) {
        var r = m.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        m.style.transform = "translate(" + dx * 0.35 + "px," + dy * 0.35 + "px)"; s.style.transform = "translate(" + dx * 0.15 + "px," + dy * 0.15 + "px)";
      });
      m.addEventListener("mouseleave", function () { m.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)"; m.style.transform = ""; s.style.transform = ""; setTimeout(function () { m.style.transition = ""; }, 600); });
    });
  }
  addEventListener("mousemove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });

  /* ---------- WebGL contour field (hero + footer background) ---------- */
  var VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  var FS = "precision highp float;uniform vec2 R;uniform float T;uniform vec2 M;uniform float A;uniform float D;uniform float S;" +
    "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}" +
    "float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}" +
    "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+7.1;a*=.5;}return v;}" +
    "void main(){vec2 uv=gl_FragCoord.xy/R;float asp=R.x/R.y;vec2 p=vec2(uv.x*asp,uv.y);float t=T*.05;" +
    "vec2 q=vec2(fbm(p*1.5+t),fbm(p*1.5-t+3.));" +
    "float ht=fbm(p*1.6+q*1.4+vec2(t,-t)+S*.15);" +
    "vec2 m=vec2(M.x*asp,M.y);float d=distance(p,m);float mask=smoothstep(.30,.0,d)*A;" +
    "ht+=mask*.045*sin(d*26.-T*1.2);" +
    "float L=15.;float f=fract(ht*L);float dl=abs(f-.5);" +
    "float sharp=1.-smoothstep(.015,.05,dl);float soft=1.-smoothstep(.0,.5,dl);" +
    "float li=mix(soft*.07,sharp*.9,mask);" +
    "float tone=.80+.17*fbm(p*.7+q*.9);" +
    "vec3 lc=vec3(tone)-li*vec3(.72);" +
    "vec3 dc=vec3(.012+.03*fbm(p*.9+q))+li*vec3(.55);" +
    "vec3 c=mix(lc,dc,D);" +
    "c+=(h(gl_FragCoord.xy+fract(T))-.5)*.05;" +
    "gl_FragColor=vec4(c,1.);}";
  var fields = $$("canvas.field").map(function (cv) {
    var gl = cv.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) { cv.style.background = cv.dataset.field === "dark" ? "#050505" : "#e9eaea"; return null; }
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var u = {}; ["R", "T", "M", "A", "D", "S"].forEach(function (k) { u[k] = gl.getUniformLocation(pr, k); });
    var o = { cv: cv, gl: gl, u: u, vis: true, a: 0, mx: 0.5, my: 0.5, dark: cv.dataset.field === "dark" ? 1 : 0 };
    function size() { var d = Math.min(devicePixelRatio || 1, 1.5), r = cv.getBoundingClientRect(); cv.width = Math.max(2, r.width * d * 0.75); cv.height = Math.max(2, r.height * d * 0.75); gl.viewport(0, 0, cv.width, cv.height); }
    size(); addEventListener("resize", size);
    new IntersectionObserver(function (es) { o.vis = es[0].isIntersecting; }).observe(cv);
    return o;
  }).filter(Boolean);
  var t0 = performance.now();
  function drawFields() {
    var tt = reduce ? 40 : (performance.now() - t0) / 1000;
    fields.forEach(function (o) {
      if (!o.vis) return;
      var r = o.cv.getBoundingClientRect(), inside = mouse.x >= r.left && mouse.x <= r.right && mouse.y >= r.top && mouse.y <= r.bottom;
      var tx = clamp((mouse.x - r.left) / r.width, 0, 1), ty = clamp(1 - (mouse.y - r.top) / r.height, 0, 1);
      o.mx = lerp(o.mx, tx, 0.09); o.my = lerp(o.my, ty, 0.09); o.a = lerp(o.a, inside ? 1 : 0, 0.06);
      var gl = o.gl;
      gl.uniform2f(o.u.R, o.cv.width, o.cv.height); gl.uniform1f(o.u.T, tt); gl.uniform2f(o.u.M, o.mx, o.my);
      gl.uniform1f(o.u.A, o.a); gl.uniform1f(o.u.D, o.dark); gl.uniform1f(o.u.S, scrollY / innerHeight);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    });
  }

  /* ---------- dock (shows on scroll up, like a quiet second nav) ---------- */
  var dock = $(".dock"), lastDockY = 0;

  /* ---------- marquee ---------- */
  var marq = $(".marq__t"), mxPos = 0, lastY = scrollY, vel = 0;

  /* ---------- main loop ---------- */
  var par = $$("[data-par]"), clipImgs = $$(".clip"), scrubs = $$("[data-scrub]");
  function frame() {
    var vh = innerHeight;
    /* smooth scroll step */
    if (ss.on) {
      if (Math.abs(scrollY - ss.last) > 1.5) { ss.t = ss.c = scrollY; }
      var now = performance.now(), dt = Math.min(0.1, (now - (ss.n || now)) / 1000); ss.n = now;
      ss.c = lerp(ss.c, ss.t, 1 - Math.exp(-7.5 * dt));
      if (Math.abs(ss.c - ss.t) < 0.2) ss.c = ss.t;
      if (Math.abs(ss.c - scrollY) > 0.05) scrollTo(0, ss.c);
      ss.last = scrollY;
    }
    var y = scrollY;
    vel = lerp(vel, y - lastY, 0.12); lastY = y;

    /* dock visibility */
    var dy = y - lastDockY;
    if (Math.abs(dy) > 4) { dock.classList.toggle("show", dy < 0 && y > vh * 0.6); lastDockY = y; }
    if (y < vh * 0.5) dock.classList.remove("show");

    if (!reduce) {
      if (hero) {
        var hp = clamp(y / (vh * 0.9), 0, 1);
        heroBlur.style.setProperty("--b", (hp * 18).toFixed(1));
        heroLines.style.transform = "translate3d(0," + (-50 + hp * -30) + "%,0)"; heroLines.style.opacity = 1 - hp * 1.3;
      }
      clipImgs.forEach(function (c) {
        var im = c.firstElementChild; if (!im || im.tagName !== "IMG") return;
        var r = c.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return;
        if (!c.classList.contains("in") && r.top < vh * 0.9) c.classList.add("in");
        var t = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
        im.style.transform = "translate3d(0," + (-t * r.height * 0.085) + "px,0)";
      });
      par.forEach(function (el) {
        var r = el.getBoundingClientRect(), base = r.top - (el._y || 0);
        var t = (base + r.height / 2 - vh / 2) / vh; el._y = -t * (+el.dataset.par) * vh;
        el.style.transform = "translate3d(0," + el._y + "px,0)";
      });
      if (marq) { mxPos -= 0.7 + Math.abs(vel) * 0.35; var half = marq.scrollWidth / 2; if (-mxPos >= half) mxPos += half; marq.style.transform = "translate3d(" + mxPos + "px,0,0) skewX(" + clamp(-vel * 0.12, -8, 8) + "deg)"; }
    } else {
      $$(".clip").forEach(function (c) { c.classList.add("in"); });
    }

    scrubs.forEach(function (el) {
      var r = el.getBoundingClientRect(), p = clamp((vh * 0.82 - r.top) / (vh * 0.5 + r.height * 0.6), 0, 1), n = Math.round(p * el._w.length);
      el._w.forEach(function (w, i) { w.classList.toggle("on", i < n); });
    });

    pins.forEach(function (p) {
      var r = p.el.getBoundingClientRect(), t = clamp(-r.top / (r.height - vh), 0, 1), n = p.words.length, i = Math.min(n - 1, Math.floor(t * n));
      p.bar.style.setProperty("--p", t);
      if (i !== p.idx) {
        p.idx = i;
        p.words.forEach(function (w, k) { w.classList.toggle("on", k === i); w.classList.toggle("past", k < i); });
        p.roles.forEach(function (rl) { rl.classList.toggle("on", +rl.dataset.step === i); });
        p.ticks.forEach(function (tk, k) { tk.classList.toggle("on", k <= i); });
        if (p.count) p.count.textContent = "0" + (i + 1) + " / 0" + n;
      }
    });

    drawFields();
    if (typeof cur !== "undefined" && cur && cur._step) cur._step();
    if (prev && prev._step) prev._step();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
