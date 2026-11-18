/* Mockup 05 — scroll choreography.
   The page is complete without this file. Everything below is enhancement:
   - non-motion behaviour (menu, survey announcement, form) always runs;
   - GSAP choreography runs only with prefers-reduced-motion: no-preference,
     plays once per scroll position (scrub) and never loops. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ── Menu (always) ─────────────────────────────────────────────────────── */
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.lastChild.textContent = open ? ' Close' : ' Menu';
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 200);
    }
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  /* ── Form (mockup: not connected) ──────────────────────────────────────── */
  const form = $('[data-form]');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = $('[data-form-status]');
    const missing = $$('[required]', form).find((f) => !f.value.trim());
    if (missing) {
      missing.setAttribute('aria-invalid', 'true');
      status.textContent = `Please add ${missing.labels[0].textContent.toLowerCase()} so I can reply.`;
      missing.focus();
      return;
    }
    $$('[aria-invalid]', form).forEach((f) => f.removeAttribute('aria-invalid'));
    status.textContent = 'This is a design mockup, so nothing was sent. On the live site this books your survey.';
  });

  /* ── Motion (GSAP) ─────────────────────────────────────────────────────── */
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger) return; // CDN blocked: page stays static and complete
  gsap.registerPlugin(ScrollTrigger);

  // Nav turns more opaque once the hero is gone (state, not decoration)
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'bottom top+=80',
    endTrigger: 'html',
    end: 'bottom bottom',
    toggleClass: { targets: '[data-nav]', className: 'is-solid' },
  });

  // Survey: a 200ms settle on the newly shown list (feedback, occasional use)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  $$('.survey input[name="space"]').forEach((input) =>
    input.addEventListener('change', () => {
      if (reduce.matches) return;
      const items = $$(`[data-panel="${input.value}"] li, [data-panel="${input.value}"] .survey__label`);
      gsap.fromTo(items, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22, stagger: 0.03, ease: 'power3.out', overwrite: true });
    })
  );

  const mm = gsap.matchMedia();
  mm.add(
    { motion: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 64rem)' },
    (ctx) => {
      const { motion, wide } = ctx.conditions;
      if (!motion) return;

      // Reading-progress hairline in the nav
      gsap.to('[data-progress]', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });

      /* ATTENTION — the headline rises out of its own line box, once, on load */
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
      intro
        .from('.hero .line__inner', { yPercent: 105, duration: 1.1, stagger: 0.09 })
        .from('[data-hero-copy] > *', { y: 24, opacity: 0, duration: 0.9, stagger: 0.08 }, '-=0.75')
        .fromTo('[data-hero-photo]',
          { clipPath: 'inset(18% 0% 0% 0% round 30px)', y: 40, opacity: 0 },
          { clipPath: 'inset(0% 0% 0% 0% round 30px)', y: 0, opacity: 1, duration: 1.2, clearProps: 'clipPath' },
          '-=0.8');

      // The photo drifts slower than the page as you leave the hero (depth, not loop)
      gsap.fromTo('[data-hero-photo] img', { scale: 1.12, yPercent: -4 }, {
        scale: 1.02,
        yPercent: 4,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      /* INTEREST — tiles arrive as a short cascade when the grid enters */
      const tiles = $$('[data-tile]');
      gsap.set(tiles, { y: 48, opacity: 0, scale: 0.97 });
      ScrollTrigger.batch(tiles, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out', stagger: 0.07, clearProps: 'transform' }),
      });

      /* DESIRE — each step card recedes as the next one slides over it */
      const cards = $$('[data-stack]');
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.timeline({
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top+=120', scrub: true },
        })
          .to(card, { scale: 0.94, ease: 'none' }, 0)
          .to($('.stack__shade', card), { opacity: 0.18, ease: 'none' }, 0);
      });

      // Owner statement: words brighten in reading order as it scrolls through
      const scrub = $('[data-scrub]');
      if (scrub && !scrub.dataset.split) {
        scrub.dataset.split = '1';
        scrub.innerHTML = scrub.textContent
          .trim()
          .split(/\s+/)
          .map((w) => `<span class="w">${w}</span>`)
          .join(' ');
      }
      gsap.fromTo('[data-scrub] .w', { opacity: 0.18 }, {
        opacity: 1,
        ease: 'none',
        stagger: 0.05,
        scrollTrigger: { trigger: '[data-scrub]', start: 'top 82%', end: 'bottom 50%', scrub: true },
      });

      /* Real work — photos grow into place, then dim slightly on the way out */
      $$('[data-work]').forEach((item) => {
        const frame = $('.work__frame', item);
        gsap.fromTo(frame, { scale: 0.86, opacity: 0.4 }, {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'top bottom', end: 'top 55%', scrub: true },
        });
        if (wide) {
          gsap.to(frame, {
            opacity: 0.55,
            ease: 'none',
            scrollTrigger: { trigger: item, start: 'bottom 30%', end: 'bottom top', scrub: true },
          });
        }
      });

      // Reviews rise in as a pair
      gsap.from('[data-review]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.reviews__grid', start: 'top 85%', once: true },
      });

      /* ACTION — the closing headline lands from a touch larger */
      gsap.from('[data-book-title]', {
        scale: 1.08,
        opacity: 0,
        transformOrigin: '0% 50%',
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.book', start: 'top 75%', once: true },
      });

      return () => {
        // Leaving the motion condition (e.g. user turns on reduced motion): restore the static page
        if (scrub) scrub.textContent = scrub.textContent;
        if (scrub) delete scrub.dataset.split;
        gsap.set('[data-tile], [data-review], [data-book-title], [data-scrub] .w', { clearProps: 'all' });
      };
    }
  );

  // Fonts and lazy images change heights; re-measure once they settle
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
