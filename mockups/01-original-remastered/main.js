// 01 · Original, remastered — three small behaviours, no library.

// 1. Roundel nav: open at the top of the page, fold to the disc once you scroll.
//    An observer on a 1px sentinel replaces the original's scroll listener.
const nav = document.getElementById('site-nav');
const sentinel = document.querySelector('.hero-sentinel');
new IntersectionObserver(([entry]) => {
  const atTop = entry.isIntersecting || entry.boundingClientRect.top > 0;
  nav.classList.toggle('at-top', atTop);
  document.body.classList.toggle('is-scrolled', !atTop);
}).observe(sentinel);

// 2. Reveals: sleeves (the disc slides out) and the four steps. Once only.
const revealer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      revealer.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -12% 0px' }
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));

// 3. Survey picker: pick a kind of space, see what the survey checks.
//    Lists are the cost drivers from src/data/industries.ts (homes from the FAQ copy).
const spaces = {
  restaurant: {
    name: 'restaurant or bar',
    href: 'https://dapperav.com/business/restaurants-bars/',
    more: 'More on restaurants & bars',
    list: [
      'How many TVs, and how big',
      'Whether you need a video matrix so any source can go to any screen',
      'Wall types and how far cable has to run',
      'How many music zones, and whether the patio needs outdoor speakers',
      'How much network work the POS, cameras and guest Wi-Fi need',
    ],
  },
  office: {
    name: 'office or conference room',
    href: 'https://dapperav.com/business/offices-conference-rooms/',
    more: 'More on offices & conference rooms',
    list: [
      'Room size and how many people it seats',
      'Display size, and whether you need a video bar or ceiling microphones',
      'Teams or Zoom room licensing',
      'How many desks need cabling or Wi-Fi coverage',
      'Whether Microsoft 365 needs a fresh setup or a migration',
    ],
  },
  retail: {
    name: 'retail or showroom',
    href: 'https://dapperav.com/business/retail-showrooms/',
    more: 'More on retail & showrooms',
    list: [
      'How many displays, and whether they mount flush, recessed or standard',
      'Whether screens need scheduled content',
      'How many background-music zones',
      'Square footage the Wi-Fi has to cover',
      'How many cameras, and how many days of recording you want',
    ],
  },
  signage: {
    name: 'signage & menu boards',
    href: 'https://dapperav.com/business/digital-signage/',
    more: 'More on digital signage',
    list: [
      'How many screens and media players',
      'Indoor screens, or outdoor-rated and drive-thru displays',
      'The signage software subscription',
      'Whether new power and data runs are needed at each screen',
    ],
  },
  network: {
    name: 'Wi-Fi & network',
    href: 'https://dapperav.com/business/networks-wifi/',
    more: 'More on business Wi-Fi',
    list: [
      'Square footage, and what the walls are made of',
      'How many access points and switches it takes',
      'Firewall and network segmentation needs',
      'Whether cabling already reaches the access point locations',
      'Whether you want ongoing management under a care plan',
    ],
  },
  cabling: {
    name: 'new build cabling',
    href: 'https://dapperav.com/business/structured-cabling/',
    more: 'More on structured cabling',
    list: [
      'How many drops, and how far each run is',
      'Open framing, or finished walls and ceilings',
      'Rack, patch panel and cable management needs',
      'How many floors, and how the runs get between them',
      'How the work is phased around the build schedule',
    ],
  },
  home: {
    name: 'home',
    href: 'https://dapperav.com/services/',
    more: 'More on home services',
    list: [
      'The wall: drywall, brick, stone or tile',
      'TV size, and the right mount for it',
      'Whether power and cables can run inside the wall',
      'Where the soundbar, speakers and components go',
      'Wi-Fi coverage where you actually watch and listen',
    ],
  },
};

const out = document.getElementById('picker-out');
const nameEl = out.querySelector('[data-out="name"]');
const listEl = out.querySelector('[data-out="list"]');
const linkEl = out.querySelector('[data-out="link"]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let swapTimer;

function render(key) {
  const s = spaces[key];
  if (!s) return;
  nameEl.textContent = s.name;
  listEl.replaceChildren(...s.list.map((t) => Object.assign(document.createElement('li'), { textContent: t })));
  linkEl.href = s.href;
  linkEl.textContent = s.more;
}

function choose(key, animate = true) {
  clearTimeout(swapTimer);
  // State lives in the URL so a reload or a shared link keeps the choice.
  const url = new URL(location.href);
  url.searchParams.set('space', key);
  history.replaceState(null, '', url);
  if (!animate) return render(key);
  // Short blur-crossfade so the two lists never read as one; skipped when motion is reduced.
  out.classList.add('is-swapping');
  swapTimer = setTimeout(() => {
    render(key);
    out.classList.remove('is-swapping');
  }, reduce.matches ? 0 : 160);
}

document.querySelectorAll('input[name="space"]').forEach((input) => {
  input.addEventListener('change', () => choose(input.value));
});

const initial = new URLSearchParams(location.search).get('space');
if (initial && spaces[initial]) {
  const input = document.querySelector(`input[name="space"][value="${initial}"]`);
  if (input) input.checked = true;
  render(initial);
}
