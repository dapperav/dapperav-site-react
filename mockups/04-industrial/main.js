// Mockup 04: nav toggle, survey picker, and the scroll motion (GSAP, skipped under reduced motion).

// ── mobile nav ──
const toggle = document.querySelector('.nav__toggle');
const list = document.getElementById('nav-list');
const narrow = window.matchMedia('(max-width: 959px)');
function syncNav() {
  if (narrow.matches) {
    list.hidden = toggle.getAttribute('aria-expanded') !== 'true';
  } else {
    list.hidden = false;
    toggle.setAttribute('aria-expanded', 'false');
  }
}
toggle.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
  syncNav();
});
list.addEventListener('click', (e) => {
  if (e.target.closest('a') && narrow.matches) {
    toggle.setAttribute('aria-expanded', 'false');
    syncNav();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    syncNav();
    toggle.focus();
  }
});
narrow.addEventListener('change', syncNav);
syncNav();

// ── survey picker: what the free survey checks, per kind of space ──
const SURVEY = {
  restaurant: {
    name: 'Restaurant or bar',
    checks: [
      'Where each TV goes, and the sightline from every seat',
      'Which sources need to reach which screens',
      'Music zones: bar, dining room, patio, restrooms',
      'Where the POS, cameras and guest Wi-Fi connect, and keeping them apart',
      'Power and data at every screen location',
      'An install window before open or after close',
    ],
  },
  office: {
    name: 'Office',
    checks: [
      'Each meeting room: size, seating, and how people join Teams or Zoom',
      'Wi-Fi coverage from the desks to the break room',
      'The network closet: rack, cabling and labels',
      'Microsoft 365 users, licensing and email security',
      'What you want managed after install',
    ],
  },
  retail: {
    name: 'Retail or showroom',
    checks: [
      'Feature walls, and what is behind them',
      'Where displays can mount flush, with wiring hidden',
      'Music zones for the floor, the counter and the offices',
      'Camera views: register, entrances, stockroom',
      'Guest Wi-Fi kept apart from business systems',
    ],
  },
  signage: {
    name: 'Digital signage',
    checks: [
      'Every screen location and how far away people read it',
      'Where each player lives, and its power',
      'A wired or Wi-Fi connection for every player',
      'Who on your staff changes the menu, and how often',
      'Schedules: breakfast, lunch, dinner, and on/off with your hours',
    ],
  },
  wifi: {
    name: 'Business Wi-Fi',
    checks: [
      'Square footage, and what the walls are made of',
      'Where access points can go, and whether cable already reaches them',
      'Separate networks for POS, cameras, staff and guests',
      'The firewall and the internet gear already on site',
      'Whether you want it managed under a care plan',
    ],
  },
  cabling: {
    name: 'New build or remodel',
    checks: [
      'Construction stage: open walls for rough-in, or a finished-space retrofit',
      'Drop locations for data, Wi-Fi, cameras, TVs and speakers',
      'Rack location, power and ventilation',
      'The labeling scheme and the as-built set at closeout',
      'Schedule alongside your general contractor and electrician',
    ],
  },
  home: {
    name: 'Home',
    checks: [
      'TV size, and the wall: drywall, brick, stone or tile',
      'Running cables inside the wall, and an outlet behind the TV',
      'Speaker and soundbar placement',
      'Wi-Fi reach to every room that needs it',
    ],
  },
};

const checksEl = document.getElementById('checks');
const spaceEl = document.getElementById('sheet-space');
const tick =
  '<svg viewBox="0 0 20 20" aria-hidden="true"><rect class="box" x="1" y="1" width="18" height="18"/><path class="tick" d="M5 10.5l3.5 3.5L15 6.5"/></svg>';

function renderSurvey(key, animate) {
  const s = SURVEY[key];
  spaceEl.textContent = s.name;
  checksEl.classList.toggle('is-entering', animate);
  checksEl.innerHTML = s.checks.map((c) => `<li>${tick}<span>${c}</span></li>`).join('');
  if (!animate) return;
  // stagger 40ms per row; transitions (not keyframes) so rapid re-picks retarget cleanly
  [...checksEl.children].forEach((li, i) => {
    li.style.transitionDelay = `${i * 40}ms`;
    li.querySelector('.tick').style.transitionDelay = `${120 + i * 40}ms`;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => checksEl.classList.remove('is-entering')));
}
document.querySelectorAll('input[name="space"]').forEach((r) =>
  r.addEventListener('change', () => renderSurvey(r.value, true)),
);
renderSurvey(document.querySelector('input[name="space"]:checked').value, false);

// ── scroll motion ──
window.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || !window.ScrollTrigger) return; // content is fully visible without it
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // 1. the dimension line draws out from its labels on load
    gsap.from('.dim__line', { scaleX: 0, duration: 0.9, ease: 'expo.out', delay: 0.2, stagger: 0.08 });

    // 2. each section rule is drawn as it scrolls in
    gsap.utils.toArray('.rule').forEach((el) =>
      gsap.from(el, {
        scaleX: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }),
    );

    // 3. patch-panel ports come in as a wave, once
    gsap.from('.port', {
      opacity: 0,
      y: 16,
      duration: 0.45,
      ease: 'power3.out',
      stagger: { each: 0.06, grid: 'auto', from: 'start' },
      scrollTrigger: { trigger: '.panel', start: 'top 80%', once: true },
    });
  });

  // 4. the cable run fills as you read the steps (scrubbed), and each node lights when reached
  const steps = gsap.utils.toArray('.step');
  mm.add(
    {
      wide: '(min-width: 960px) and (prefers-reduced-motion: no-preference)',
      narrow: '(max-width: 959px) and (prefers-reduced-motion: no-preference)',
    },
    (ctx) => {
      const prop = ctx.conditions.wide ? 'scaleX' : 'scaleY';
      gsap.fromTo(
        '.steps__fill',
        { [prop]: 0 },
        {
          [prop]: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.stepsbox', start: 'top 75%', end: 'bottom 55%', scrub: 0.4 },
        },
      );
      steps.forEach((step) =>
        ScrollTrigger.create({ trigger: step, start: 'top 70%', toggleClass: 'is-reached' }),
      );
    },
  );
  mm.add('(prefers-reduced-motion: reduce)', () => {
    steps.forEach((s) => s.classList.add('is-reached'));
  });
});
