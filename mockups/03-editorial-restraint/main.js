// Progressive enhancement only: the page reads fully without this file.

// Section entrances: stagger the parts of each section once, as it enters.
const reveal = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready'); // hide only once something will reveal it
  const seen = new Map(); // parent -> count, for the stagger index
  reveal.forEach((el) => {
    const parent = el.parentElement;
    const i = seen.get(parent) || 0;
    seen.set(parent, i + 1);
    el.style.setProperty('--i', Math.min(i, 5));
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  reveal.forEach((el) => io.observe(el));
} else {
  reveal.forEach((el) => el.classList.add('is-in'));
}

// Survey picker: CSS :has() already swaps the panel; this keeps the booking link in step.
const cta = document.getElementById('survey-cta');
document.querySelectorAll('input[name="space"]').forEach((r) =>
  r.addEventListener('change', () => {
    cta.href = 'https://dapperav.com/quote?space=' + encodeURIComponent(r.value);
  })
);

// Phone menu: close after choosing a link.
const menu = document.querySelector('.menu');
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.removeAttribute('open')));
