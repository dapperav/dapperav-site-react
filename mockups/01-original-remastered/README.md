# 01 · Original, remastered

Mark's original homepage, the look he called "solid": espresso, cream and gold, Fraunces over Inter, liquid glass,
pinstripe on the dark sections, groove arcs on the light ones, the spinning roundel nav, the bottom dock with the logo
in the middle, record-sleeve photos. It keeps that identity and fixes what was weak: commercial work leads, every
button, pill and field comes from the shared components, the record stays a small accent, and motion only happens on
load, on scroll into view, or when you act.

Files: `index.html`, `styles.css`, `main.js`, screenshots in `shots/desktop.png` (1440 wide) and `shots/mobile.png`
(390 wide). Open `index.html` straight from disk; it needs no build.

## What changed from the original

| Original | Remastered |
|---|---|
| Roundel spins forever (12s loop) | One spin-up on load, then it turns only while the page scrolls (CSS scroll timeline), and stops when you stop |
| Nav pill opened by animating `grid-template-columns` (layout every frame) | The glass pill opens from the disc with `clip-path`; links fade and slide with `transform`/`opacity` |
| Quote button jumped to the corner on scroll | Pendant under the disc at the top; a separate "Book a free site survey" button fades in bottom-right once scrolled |
| Nine button/pill sizes, gradient sheen | `.btn` / `.pill` from `components.css` only; no sheen |
| Residential grid with prices, business as a strip | Business panel first (six business pages as a list), homes second as one smaller card, no prices |
| Eyebrow labels with gold dots above every heading | Removed; headings carry themselves |
| `.glass` with backdrop blur on every card | Real blur only on the nav, the dock and the hero card; cards on flat paper use a frosted fill with no blur |
| Three record sleeves including the dealership photo | Two sleeves (fireplace, hi-fi); the dealership photo is out at Mark's request |
| "18+ years" in the copy | "18 years" written small in a facts list, never as a big number |
| No interactive survey element | "Pick your kind of space" `.pill` radio chips show what the survey checks for that space |

## Skills loaded and what each changed

All loaded with the Skill tool in this session.

- **redesign-existing-projects**: set the method (scan the Astro original, diagnose, upgrade in place rather than replace).
  Its audit drove: sentence-case headings, `text-wrap: balance`, tinted shadows, hover and press states, a skip link,
  semantic landmarks, and replacing three equal cards with an asymmetric business panel. Its "use Geist instead of
  Inter" advice was overruled by the brand.
- **high-end-visual-design**: the double-bezel (outer tray plus inner glass core) on the hero survey card, the picker
  panel and the lead review; the button-in-button arrow on the hero's primary button (inside `.btn`, no restyle);
  custom easing everywhere; blur kept to fixed elements. Its bans on Inter and its film-grain overlay were overruled
  (brand font; impeccable bans `feTurbulence` grain).
- **impeccable**: ran `impeccable context` (no PRODUCT.md or DESIGN.md at the repo root it reads, so it treated the
  incumbent code as authority; I could not run `init` because I may only write in this folder). Applied its craft floor:
  no eyebrows, no section numbers except the four steps (the order matters there), one authored motion moment,
  themed `::selection` and focus rings, display size capped at 6rem, tracking at -0.03em. Polish, typeset and layout
  passes shaped the hero title split, the 65-character measure and spacing (more above headings than below).
  Ran `impeccable detect` at the end (results under Known weaknesses).
- **gpt-taste** (structure only): no meta labels, an H1 that never runs past two lines at display size,
  `overflow-x: clip` on the page, a clear attention → interest → desire → action order inside the original's own
  section order. Its GSAP mandate and Inter ban were not followed (see below).
- **ui-ux-pro-max**: ran its design-system search. Its palette and font picks (green/orange, Calistoga) were ignored in
  favour of the tokens; kept its funnel advice (a call to action per stage), its "avoid hidden reviews / no map"
  warning (reviews are shown in full, service area is listed), 44px targets and the 375–1440 check.
- **glass-dashboard-ui** (navbar guidance): floating, inset glass pill with a bright 1px edge and blur, content visible
  underneath; `prefers-reduced-transparency` and no-`backdrop-filter` fallbacks to solid cream.
- **design** (Apple design umbrella) and **anthropic-skills:apple-design**: translucent material for chrome only,
  lit top edge (inset highlight), size-specific tracking, `prefers-reduced-transparency` and `prefers-contrast` handling,
  "respond on press" (`:active` scale from the components).
- **anthropic-skills:emil-design-eng**: strong ease-out curves, nothing from `scale(0)`, a short blur cross-fade
  when the picker swaps lists so the two lists never read as one, hover gated to fine pointers.
- **motion-ui-patterns**: 150–250ms UI motion, one loud element per surface, state in the URL (`?space=office`
  survives reload and sharing), 44px minimum targets.
- **anthropic-skills:animate**: frequency gate on every animation (nav and press: frequent, so short and subtle;
  hero entrance and sleeve disc: once per visit, allowed to be slower). CSS transitions only, no library.
- **anthropic-skills:find-animation-opportunities**: kept three moments (hero load, discs sliding out of the sleeves,
  picker swap). Rejected: a marquee for the brands (perpetual motion), scroll-scrubbed text, staggering every section.
- **anthropic-skills:animation-performance**: only `transform`, `opacity`, `clip-path` and a small `filter: blur`
  animate; the nav no longer animates layout; the scroll listener became an `IntersectionObserver` on a sentinel.
- **anthropic-skills:mobile-native**: `viewport-fit=cover` with safe-area padding on the dock, tap highlight removed,
  `touch-action: manipulation`, `user-select: none` on controls only, `100svh` hero, 12px dock labels (were 10.4px),
  hover styles gated to `(hover: hover) and (pointer: fine)`.
- **accessibility**: skip link, one H1, labelled landmarks, the picker as a real `fieldset`/`legend` radio group with an
  `aria-live` result, stars with a text label, alt text on every photo, decorative logos `alt=""`, focus rings
  brown on light and gold on dark, reduced-motion fallbacks for every animation.
- **tailwind-design-system** (token discipline, not Tailwind itself): no raw hex in the page CSS; every concept token
  in the local `:root` is a `color-mix()` of a brand token.
- **anthropic-skills:break-ui**: QA pass at 320, 390, 1024 and 1440 wide (no horizontal scroll at any). It found the
  brand list starting a wrapped line with a dot on phones (dots now only at 900px and up) and the review stars
  rendering three stars instead of five (fixed). The longest picker list and the longest business row hold at 320px.
- **imagegen-frontend-web**: loaded, not used. See below.

## Skills excluded (they contradict this concept)

- `design-taste-frontend`, `design-taste-frontend-v1`, `design-taste-frontend-v2-experimental`: ban glass, shadows,
  cards and the ornament that is the original's identity.
- `minimalist-ui`: flat and quiet; the original is materials and texture.
- `industrial-brutalist-ui`: raw terminal look, the opposite direction.
- `stitch-design-taste`: bans Inter, which the brand keeps.

## Skills unavailable

- **superdesign:superdesign**: its CLI preflight (`npx @superdesign/cli`) was blocked by the session's permission
  classifier, and it also needs a Superdesign login. Not used.
- **imagegen-frontend-web**, **imagegen-frontend-mobile**, **image-to-code**: there is no built-in image generator in
  this session; the only generators are third-party connectors (Canva, IMG.LY CoDesign, Adobe) that need sign-in or
  credits. Generated concept comps would also risk being mistaken for job photos. I loaded imagegen-frontend-web to
  check its requirements, and did not load the other two.

## Conflicts where the hard rules or tokens won

- Inter is banned by high-end-visual-design and gpt-taste; the brand keeps Inter.
- gpt-taste mandates GSAP; animate says use the cheapest tool. Everything here is CSS plus one small script, most of it the picker data.
- impeccable wants card radii of 12–16px; the token is 24px (`--radius-card`).
- impeccable distrusts glass and `repeating-linear-gradient` stripes; the brief pins both (the pinstripe is the suit
  cloth). Blur is limited to the nav, the dock and the hero card.

## Facts used (all from the brief or `src/data`)

18 years installing AV, 5 years running managed IT, IT director by day, Richmond TX, reply within one business day,
free 30–45 minute site survey, (972) 824-1303, contact@dapperav.com, Mon–Fri 8am–6pm. Both Google reviews quoted
word for word. No insurance, licence, access control, statistics or client names. Survey checklists are the cost
drivers from `src/data/industries.ts`; the home list is written from the FAQ copy in `src/data/site.ts`.

## Known weaknesses

- Only two real photos, both homes, on a commercial-first page. The page needs one good commercial install photo.
- `impeccable detect` flagged: the pinstripe (kept on purpose), the gold label in the hero's groove ring as a
  "radial halo", brown-tinted shadows on dark panels as "glow", and one brown-on-roast contrast hit I believe comes
  from the glass dock being measured against the page background. It also reported cramped padding and a flat type
  scale, which look like it did not load `../../design-system/tokens.css`; the screenshots show neither.
- The scroll-linked roundel rotation needs `animation-timeline` (Chrome, Edge and recent Safari). Elsewhere the disc
  simply sits still after its spin-up.
- Mobile touch behaviour (dock, sleeves, tap feedback) is checked in emulation only, not on a real phone.
- Links point at the live dapperav.com pages; `/quote/` is not pre-filled from the picker choice.
