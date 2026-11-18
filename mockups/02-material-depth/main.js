/* Mockup 02 — material depth. Vanilla JS + GSAP (cdnjs). Every effect is
   decorative and degrades to a static page without JS or with reduced motion. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ── Menu: full-screen glass, staggered links, morphing button ── */
  const menuBtn = $('.nav__menu');
  const menu = $('#menu');
  const outside = [$('#main'), $('.footer')];
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    outside.forEach((el) => (el.inert = open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
    } else {
      menu.classList.remove('is-open');
      // exit is faster than enter; hide once the fade has finished
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduce.matches ? 0 : 280);
    }
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ── Scroll reveals: IntersectionObserver, never a scroll listener ── */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ── Light that follows the pointer across tiles (transform only) ── */
  $$('[data-light]').forEach((tile) => {
    const light = $('.tile__light', tile);
    const core = $('.tile__core', tile);
    let raf = 0;
    tile.addEventListener('pointermove', (e) => {
      if (!finePointer.matches || reduce.matches) return;
      const r = core.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { light.style.transform = `translate(${x}px, ${y}px)`; });
    });
  });

  /* ── Portrait: critically damped tilt toward the pointer ── */
  const tilt = $('[data-tilt]');
  if (tilt) {
    const shell = $('.portrait__shell', tilt);
    const glare = $('.portrait__glare', tilt);
    let tx = 0, ty = 0, x = 0, y = 0, running = false;
    const step = () => {
      // exponential approach = no overshoot (damping 1.0), settles in ~400ms
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      shell.style.transform = `rotateX(${(-y * 5).toFixed(3)}deg) rotateY(${(x * 6).toFixed(3)}deg)`;
      glare.style.transform = `translate(${(x * 30).toFixed(2)}%, ${(y * 30).toFixed(2)}%)`;
      if (Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001) requestAnimationFrame(step);
      else running = false;
    };
    const kick = () => { if (!running) { running = true; requestAnimationFrame(step); } };
    tilt.addEventListener('pointermove', (e) => {
      if (!finePointer.matches || reduce.matches) return;
      const r = tilt.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      kick();
    });
    tilt.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
  }

  /* ── Survey explorer: pick a space, see what the survey checks ── */
  // Checks come from the cost drivers in src/data/industries.ts; nothing invented.
  const spaces = {
    restaurant: {
      label: 'a restaurant or bar',
      checks: ['How many TVs, and how big', 'Whether any source needs to reach any screen (a video matrix)', 'Wall types and how far cable has to run', 'How many music zones, and whether the patio needs outdoor speakers', 'How much network work the POS, cameras and guest Wi-Fi need'],
      note: 'Work is scheduled before open or after close, so you open the next day with a finished room.',
    },
    office: {
      label: 'an office',
      checks: ['Room size and how many people it seats', 'Display size, and whether you need a video bar or ceiling microphones', 'Teams or Zoom room licensing', 'How many desks need cabling or Wi-Fi coverage', 'Whether Microsoft 365 needs a fresh setup or a migration'],
      note: 'AV and IT come from the same person, so the conference room and the network are planned together.',
    },
    retail: {
      label: 'a retail space or showroom',
      checks: ['How many displays, and whether they mount flush, recessed or standard', 'Whether screens need scheduled content', 'How many background-music zones', 'Square footage the Wi-Fi has to cover', 'How many cameras, and how many days of recording you want'],
      note: 'Cameras record locally, so there are no per-camera cloud fees.',
    },
    signage: {
      label: 'signage or menu boards',
      checks: ['How many screens and media players', 'Indoor screens, or outdoor-rated and drive-thru displays', 'The signage software subscription', 'Whether new power and data runs are needed at each screen'],
      note: 'Your staff gets templates and a walkthrough, so changing a price takes minutes.',
    },
    network: {
      label: 'business Wi-Fi or a network',
      checks: ['Square footage, and what the walls are made of', 'How many access points and switches it takes', 'Firewall and network segmentation needs', 'Whether cabling already reaches the access point locations', 'Whether you want ongoing management under a care plan'],
      note: 'Planned the way an IT department would plan it: documented, segmented and secured.',
    },
    cabling: {
      label: 'a new build or cabling job',
      checks: ['How many drops, and how far each run is', 'Open framing, or finished walls and ceilings', 'Rack, patch panel and cable management needs', 'How many floors, and how the runs get between them', 'How the work is phased around the build schedule'],
      note: 'Rough-in at framing, trim-out after paint, labels and documentation at closeout.',
    },
    home: {
      label: 'your home',
      checks: ['TV size and the wall it goes on: drywall, brick, stone or tile', 'Whether cables can run inside the wall', 'Whether an outlet is needed behind the TV', 'Soundbar, speakers or a full surround system', 'Wi-Fi coverage in the rooms you actually use'],
      note: 'TV mounting starts at $150. You get an itemized price before any work starts.',
    },
  };
  const check = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="m8 12.5 2.6 2.6L16 9.5"/></svg>';
  const panel = $('[data-panel]');
  const render = (key) => {
    const s = spaces[key];
    $('.explorer__kicker', panel).textContent = `On a survey for ${s.label} I check`;
    $('[data-checks]', panel).innerHTML = s.checks.map((c) => `<li>${check}<span>${c}</span></li>`).join('');
    $('[data-note]', panel).textContent = s.note;
  };
  render('restaurant');
  const pills = $$('[data-space]');
  let swapTimer = 0;
  pills.forEach((pill) => pill.addEventListener('click', () => {
    if (pill.getAttribute('aria-pressed') === 'true') return;
    pills.forEach((p) => p.setAttribute('aria-pressed', String(p === pill)));
    clearTimeout(swapTimer);
    if (reduce.matches) { render(pill.dataset.space); return; }
    panel.classList.add('is-swapping');
    swapTimer = setTimeout(() => { render(pill.dataset.space); panel.classList.remove('is-swapping'); }, 160);
  }));

  /* ── Booking form (mockup: validates, sends nothing) ── */
  const form = $('[data-form]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = $('[data-status]', form);
    const missing = $$('[required]', form).filter((f) => !f.value.trim());
    $$('[required]', form).forEach((f) => f.setAttribute('aria-invalid', String(missing.includes(f))));
    if (missing.length) {
      status.classList.add('is-error');
      status.textContent = `Please add your ${missing.map((f) => f.dataset.name).join(' and ')} so I can reach you.`;
      missing[0].focus();
      return;
    }
    status.classList.remove('is-error');
    status.textContent = 'Mockup only: nothing was sent. On the live site this reaches Mark, who replies within one business day.';
  });

  /* ── Hero survey pass: carry the chosen space into the booking form ── */
  const quick = $('[data-quick]');
  quick.addEventListener('submit', (e) => {
    e.preventDefault();
    $('#f-space').value = $('#q-space').value;
    $('#book').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth' });
    $('#f-name').focus({ preventScroll: true });
  });

  /* ── Split the statement into words for the scrubbed reveal ── */
  const statement = $('[data-scrub]');
  if (statement) {
    statement.setAttribute('aria-label', statement.textContent.trim());
    statement.innerHTML = statement.textContent.trim().split(/\s+/).map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
  }

  /* ── GSAP: scroll-scrubbed depth. Skipped entirely under reduced motion ── */
  const startGsap = () => {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add('has-gsap');
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // the hero photo opens toward you like a lid, then sits flat
      gsap.fromTo('[data-plate]', { rotateX: 16, scale: 0.9 }, {
        rotateX: 0, scale: 1, ease: 'none',
        scrollTrigger: { trigger: '.stage', start: 'top 92%', end: 'top 22%', scrub: 0.6 },
      });
      gsap.to('.statement .w', {
        opacity: 1, stagger: 0.12, ease: 'none',
        scrollTrigger: { trigger: '.statement', start: 'top 82%', end: 'bottom 48%', scrub: true },
      });
      $$('[data-shot]').forEach((shot) => {
        gsap.fromTo(shot, { scale: 0.88, y: 60 }, {
          scale: 1, y: 0, ease: 'none',
          scrollTrigger: { trigger: shot, start: 'top 98%', end: 'top 55%', scrub: 0.5 },
        });
      });
    });
  };
  if (document.readyState === 'complete') startGsap();
  else window.addEventListener('load', startGsap);
})();
