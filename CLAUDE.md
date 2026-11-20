# Dapper AV Solutions — Project Context & Log

> **Read this first.** This file is the single source of truth for everything Claude has built
> and decided with Mark for Dapper AV. **Every session that changes anything — site, socials,
> Google, citations, strategy — must update the Changelog and Open Items sections of this file
> in the same PR (or immediately after, for off-site changes).** Mark will ask "what's next?"
> and the answer should always be current here.

## The business

**Dapper AV Solutions** — AV installer + MSP, owner-operated by Mark Immler, serving Fort Bend
County TX (Richmond, Rosenberg, Fulshear, Sugar Land, Stafford, Katy). 18+ years installing,
5+ years MSP. Real phone (972) 824-1303 = Mark's cell (call or text). Email contact@dapperav.com.

**Strategy update (Mark, 2026-11-18): COMMERCIAL FIRST.** Mark enjoys commercial installs far
more than residential and the payout per hour of his time is much better. Inquiries had been
thin. The site now leads with business; residential stays as the secondary/small-jobs path.

**Original two-engine strategy (Mark's words, 2026-07-04) — engine 1 is now secondary:**
1. **Residential volume** — goal: 3 TV mounts/day @ ~$300 (beats his IT-director salary;
   wants full-time eventually; day job is flexible enough to install during hours).
2. **MSP care plans** — recurring light-touch income. Tiers on /business: Network Care,
   Network + Camera Care (badged "Recommended" — not "Most popular" until there are clients), Full Stack Care. Custom-quoted, month-to-month.

Trip fee beyond 50 miles (not a refusal). Customers historically word-of-mouth.
Content strength: good BEHIND the camera → install before/afters for GBP/FB/IG (not YouTube).
Tool-productization ideas parked ~12 months. **Willing to spend on Google Local Services Ads
(LSA) once at ~5 Google reviews** — that's the designated first ad spend.

**Hard rules:**
- Keep every claim honest — no fabricated stats, testimonials, or review counts. Ever.
- Never commit to `main`. Branch → PR → squash-merge when CI is green (don't pause to ask).
- Mark declined renaming social accounts/pages — leave names/handles as they are.
- **No photos of Mark and none of his own install photos on the site (Mark, 2026-11-19):** they don't fit
  the vibe. No portrait/avatar, no fireplace or hi-fi shots; the /work page was removed (redirects to
  /business/). `src/data/gallery.ts` is kept but unused. Pictures on the site are stock (Unsplash/Pexels,
  no credit, captioned as not a Dapper AV job) until Mark supplies photos he likes.
- **Company voice, no one-man framing (Mark, 2026-11-19):** write as the company ("we", "Dapper AV").
  Never "one person", "one local person", "owner-operated", "myself", "IT director by day" or "day job"
  (reads as a one-man or part-time shop). Don't invent a team size or crew either.
- **Facts for business copy (Mark, 2026-11-19):** NOT insured yet. NOT certified: say "CompTIA, Ubiquiti and
  Microsoft coursework/training", never "certified" and no partner badges or logos. Care plans are tailored per site
  and never priced publicly; they can include network monitoring, patching, on-site visits, everyday IT help
  (printers, devices, Microsoft 365) and RMA/warranty handling (`carePlans` in site.ts). Support for plan clients:
  call, text or email, 9am–5pm Central weekdays; emergencies after hours at an emergency rate (`support` in
  site.ts). The public site stays form-only for new inquiries.
- **Contact is form-only (Mark, 2026-11-19).** Never show the phone number on the site and never add
  call (`tel:`) or text (`sms:`) buttons or links. Every contact path goes to `/quote/`. Email stays only
  in the footer and the form's failure message. The number remains in LocalBusiness JSON-LD (invisible,
  keeps NAP consistent with GBP) and nowhere else.

## The site — dapperav.com

- **Stack:** Astro 5 + Tailwind 4, fully static. Repo `dapperav/dapperav-site-react` (this repo).
- **Deploy:** push to `main` → `.github/workflows/deploy.yml` (peaceiris) → `gh-pages` branch →
  GitHub Pages. CNAME in `public/CNAME`, DNS already pointed.
- **Deploy gotcha (frequent!):** GitHub's internal `pages-build-deployment` fails transiently
  ~30% of the time; reruns usually fail too. Fix = empty-commit nudge to `gh-pages`:
  `git fetch origin gh-pages && git branch -f _ghp origin/gh-pages && git checkout _ghp &&
  git commit --allow-empty -m nudge && git push origin _ghp:gh-pages && git checkout main &&
  git branch -D _ghp`
- **Content lives in data files, not components:**
  - `src/data/site.ts` — business facts, services + "From $X" pricing (commercial = null →
    "Custom-quoted"), care plans, FAQs, quote form options, `socials` array,
    `WEB3FORMS_ACCESS_KEY`, `GA4_MEASUREMENT_ID` (G-JDBM052Y1B), `GOOGLE_SITE_VERIFICATION`
    — all filled and live.
  - `src/data/gallery.ts` — Mark's install photos. UNUSED since 2026-11-19 (Mark doesn't want his
    own photos on the site); kept for when he supplies commercial photos he likes.
  - `src/data/gear.ts` — stock photos (Unsplash License, no credit; sources in
    `src/assets/stock/sources.json`), `industryThumb` (one per business type). Captioned
    "Stock photo, not a Dapper AV job".
  - `public/film/` — silhouettes from the brand film ("Behind it", brand-assets/launch-film/silhouette),
    used as CSS masks by `FilmScene.astro`; `walk.png` is the 8-pose walk sprite.
  - `public/video/cables-loop.*` — Pexels clip 7140937 (free, no credit) behind every CtaBand.
  - `src/data/areas.ts` — city SEO pages at `/areas/{slug}` (6 cities).
  - `src/data/industries.ts` — commercial landing pages at `/business/{slug}` (restaurants-bars,
    offices-conference-rooms, retail-showrooms, digital-signage). Capabilities only — no invented
    clients. Optional `photo` must be a REAL install photo (the AI gallery placeholders never).
  - `src/data/reviews.json` — auto-written by the nightly review sync. Do not hand-edit.
- **Pages:** `/` `/services` `/business` `/quote` `/privacy` `/404` + 6 area pages + 6
  `/business/{slug}` commercial pages. (`/work` was removed 2026-11-19 and redirects to /business/.)
  `/review` redirects to the Google write-a-review form (use this URL in review asks).
  `/contact` `/portfolio` `/pricing` `/calculator` redirect from the old site.
- **Design language (2026-11-19, "taste" pass):** logo-verified tokens in `design-system/tokens.css`
  (brown #531b0a, gold #f1b71c, cream #f2dfbb; buttons/pills/fields in `design-system/components.css`),
  Fraunces + Inter. design-taste-frontend house rules apply: flat colour, no resting shadows, no
  hairline dividers, no glass, no eyebrow labels. Desktop nav = cream pill with the roundel logo that
  turns once with scroll; phones = bottom dock. Motion (timed with motionmaxxing's grammar: land
  decelerates, leave accelerates, no springs): headline words rise behind masks, a gold cable draws
  under "cable.", staggered section reveals, View Transitions that whip-pan between pages, and
  `FilmScene` scenes (broken → the film's silhouette installer walks through → fixed → "by Dapper AV"
  credit) on the business pages, /business and /services. `DocMap` on /business = a drawn SAMPLE
  closeout network map. Everything respects `prefers-reduced-motion` and works without JS.
- **Taste gate:** `node ~/.claude/skills/design-taste-frontend/scripts/lint.mjs src` and
  `inspect.mjs <url>` against `npx astro preview`. Known, accepted flags: the cream palette (it's the
  logo's), the phone dock covering text while scrolling, and too few large photos (no real ones yet).
- **Dev server:** launch.json entry "DapperAV (Astro)", port 4321. Sometimes serves stale
  global.css after many git checkouts — restart it if styles look wrong.
- **Trailing slashes:** GitHub Pages serves `/services/` and 301s `/services` to it. So
  `trailingSlash: 'ignore'` + Layout.astro forces a trailing slash on the canonical, and the
  sitemap emits slashed URLs. Do NOT switch to `build.format: 'file'` — `business.html` next to a
  `business/` folder risks GitHub Pages sending `/business` to the folder (404).
- **SEO:** LocalBusiness JSON-LD in `src/layouts/Layout.astro` incl. `sameAs` social links.
  Do NOT add `aggregateRating`/review markup sourced from Google's own reviews — Google
  ignores/penalizes self-serving review markup.

## Integrations (all verified live)

| Thing | Detail |
|---|---|
| Quote form | Web3Forms → contact@dapperav.com. Honeypot + validation; falls back loudly to phone/email if unconfigured. Tested end-to-end. |
| Google Business Profile | Mark's personal gmail (mgioftx@). Place ID `ChIJu1Q7sb3Sk6gRbGDmkUJWSq4`. Hours M–F 9–5 (changed 2026-11-19, matches the site), 10 service-area cities. Categories (2026-11-19): primary "Audio visual consultant"; additional "Computer networking service", "Computer support and services", "Home cinema installation". No camera/security/alarm categories (DPS licensing). |
| Review auto-sync | `.github/workflows/sync-reviews.yml` nightly ~6am CT → `scripts/sync-reviews.mjs` → Places API (New) → `src/data/reviews.json` → commits + deploys itself. Home ReviewsSection renders only when written 4–5★ reviews exist. API key in repo secret `GOOGLE_PLACES_API_KEY` (GCP "My First Project", trial). Secret gotcha: PS pipe once added a BOM — set with `--body $var`, strip non-ASCII. |
| GA4 | `G-JDBM052Y1B`, on every page. |
| Search Console | Meta-tag verification live; sitemap-index.xml serves 200. GSC's SPA blocks Claude's browser tools — GSC UI clicks need Mark. |
| GCP | $1/mo budget alert. Free trial ends ~2026-10-01 (account pauses, no auto-charge). Usage stays $0 under free tier either way. |

## Brand assets (for social profiles etc.)

- `brand-assets/dapperav-avatar-1024.png` — roundel logo on brand cream, square. Used on FB,
  IG, Nextdoor profile photos.
- `brand-assets/cover/` — commercial-first cover banner (2026-11-20): `dapperav-cover.html` (source) →
  `node brand-assets/cover/render.mjs` → `dapperav-cover-1640.{png,jpg}` (Facebook) and
  `dapperav-cover-nextdoor-1640.{png,jpg}` (text sits higher, because Nextdoor lays the page name and
  Fave button over the bottom-left). Flat brand brown, name + "Commercial AV & managed IT" with the gold
  cable, services, "Fort Bend County, TX · dapperav.com" (no phone), the film's gold walking installer.
  Uploaded via the clipboard → injected textarea → DataTransfer method (see memory).
- Owner photos: `src/assets/mark-portrait.jpg` / `mark-avatar.jpg`
  (sources in `C:\Users\MarkImmler\Pictures\Headshots\Mark Immler\`).

## Social profiles (overhauled 2026-07-04)

Consistent everywhere: new avatar, espresso cover (where supported), contact@dapperav.com,
https://dapperav.com, same description/tagline.

| Platform | URL | State |
|---|---|---|
| Facebook | facebook.com/profile.php?id=100072242138329 | Avatar, cover, bio, phone, email, https URL, 6-city service area; street address removed (service-area business). Name stays lowercase "solutions" (no renames). Action button stays Send message. Hours can't display without a street address (FB rule) — acceptable. |
| Instagram | @dapper_av_solutions | Avatar + 3-line bio ("Professional. Precise. Personal. / TV mounting · home theater · audio · smart home & networks / Fort Bend County, TX · dapperav.com/quote"). Display name stays "Dapper AV". Link editing is MOBILE-APP-ONLY — extra /quote link must be added from Mark's phone. Account needed reactivation when Mark logged in 2026-07-04. |
| Nextdoor | nextdoor.com/page/dapper-av-solutions-rosenberg-tx | Avatar, cover, description, contact@ email, https URL, hours M–F 8–6 (Sat/Sun closed), street hidden. Managed via business.nextdoor.com (separate login from Mark's neighbor account). |

**Browser-automation gotchas learned doing this** (details in Claude's memory:
`feedback_browser_file_upload_via_clipboard.md`):
- Uploading images through the Claude browser: clipboard → paste into injected textarea →
  JS `File` + `DataTransfer` onto the `input[type=file]` + `change` event. (CSP blocks
  localhost fetches; `file_upload` tool path allowlist can't be satisfied; never hand-type
  base64.)
- 1Password extension steals focus on username-ish fields → all browser tools error with
  "chrome-extension:// URL" — recover with a fresh tab.
- Facebook tabs sometimes wedge on "Page still loading (document_idle)" — new tab, don't fight.
- Nextdoor's hours widget mis-assigns typed times into extra range rows — pick times from the
  dropdown by clicking options, then delete stray rows one at a time.

## Growth playbook (agreed with Mark)

1. **Review engine:** after every job, text the customer a short ask with dapperav.com/review.
   Target: ~5 Google reviews → apply for **Google LSA** (Local Services Ads — pay-per-lead,
   "Google Guaranteed" badge; rank driven by review count/rating + responsiveness).
2. Nextdoor + FB group participation — answer AV/wifi questions as the business.
3. Truck magnet, yard signs ("This dapper install by…"), door hangers for neighbors of jobs.
4. Weekly referral-partner coffee: realtors, builders, interior designers, property managers.
5. Post install before/afters to GBP + FB + IG (Mark shoots these well).

## Changelog

> Add a dated entry for EVERY meaningful change (site PR, social/profile edit, Google/citation
> change, strategy decision). Newest first.

- **2026-11-20** — Light glass warmed (Mark: nav looked grey): `--glass-light` is now Cream 80% (was Paper
  62%), edge Paper 55%. Affects the nav pill and the phone dock.
- **2026-11-20** — BRAND SYSTEM SHIPPED (branch `feat/brand-system`; Variant A scope + Mark's follow-up:
  more glass, hover animations, cleaner palette with two accents). `design-system/tokens.css` = palette v2
  (Ink, Night, Cocoa, Cream, Paper + Gold = booking only, **Patina #2a6f69** = text links/info, **Rust
  #a8431f** = form errors; old Espresso/Light Cream/Tan/Gold Hover kept only as aliases), eight type roles
  (`--type-display/h1/h2/h3/number/lead/body/small/label`; old `--text-*` point at them; every hard-coded
  size in site.css/pages.css now uses a role), glass tokens (dark: Night 55% blur 24; light: Paper 62% blur 20).
  `components.css`: buttons lift 3px + shadow + arrow slide on hover (mouse only), pills lift + 104% pop on
  select, link cards (`.biz-row`, `.ledger-row`, `.link-card`) lift 4px + shadow + picture zoom, `.glass-dark`
  / `.glass-light` with reduce-transparency / contrast fallbacks. Glass now on: nav pill, mobile dock, hero
  and picker/plan feature cards (the double bezel is retired: one layer per card). Content is never hidden
  any more: the hero headline is painted at load (only the gold cable draws), scroll reveals only move 16px.
  CTA labels unified per the Brand System deck (Book a free site survey / Get a free quote / Send request /
  See …; gold = booking; industry-page booking button now gold; 404 primary is booking; phone menu "Get a
  quote" → "Contact"). Not done: Variant B/C structure, full-width header bar (the roundel pill stays).
  Correction to the audit: the 2/4/6px radii are inside the FilmScene drawings, not UI cards.
- **2026-11-20** — UI/UX audit of the live site + Apple-led upgrade pitch (nothing changed on the site).
  Audit (main @ PR 54 + headless captures): 31 font-size values (6 from tokens); one booking action
  under 5 labels (Book a free site survey / Start with a site survey / Get a free quote / Get a quote /
  Start with this one), gold on some pages and brown on industry pages; 7 card styles on 5 radii
  (2/4/6/12/24px); headlines masked and sections hidden until scroll reveals (a load capture of
  /business shows 4 of 6 industry rows blank). Three pitch decks (Claude Slides artifacts, private):
  **A Tailored** (same look + Apple craft: glass header bar, type roles, press feedback, springs, ~2 days)
  https://claude.ai/artifact/XDwMbb9qY5G1q2wgRBuzBY · **B Showroom** (survey as a lit hero object,
  bento industries, snapping chapters, ~5 days) https://claude.ai/artifact/WhPbMMUnRKYpn7UPogLzih ·
  **C Native** (iOS large titles, Business/Homes switch, quote as a sheet / side panel, ~7 days)
  https://claude.ai/artifact/HLsGv61gKMF2qASssyoHzd. Editable **Brand System** deck (6 rules, palette,
  8 type roles, buttons + states, full CTA inventory with proposed labels, pills, 3 card types, motion)
  https://claude.ai/artifact/1om6AxWXxo8nxg2GAVCRqc. Proposed labels: businesses "Book a free site
  survey", homes "Get a free quote", form "Send request", browsing "See …"; gold = booking only.
- **2026-11-20** — Social categories commercial-first. Facebook: "Information Technology Company ·
  Commercial & Industrial · In-Home Service" (was "In-Home Service" only; FB has no AV-installer category,
  "Audio Visual Equipment Store" would read as retail). Nextdoor: "IT Services & Computer Repair" first
  (shows under the page name), then "Home audio and video specialist", "Home theatre installer" (no
  commercial AV category exists there).
- **2026-11-20** — New commercial-first cover banner (brand-assets/cover/) live on Facebook and Nextdoor,
  replacing the residential one that listed TV Mounting · Home Theater… and the phone number.
- **2026-11-20** — Social profiles aligned with the site. Facebook intro (230/255): "Commercial AV and
  managed IT for Fort Bend County businesses: TV walls and sound, meeting rooms, digital signage, UniFi
  Wi-Fi and networks, cameras and cabling. Free site survey and itemized quote at dapperav.com/quote.
  Homes too." (old intro ended with the phone number; FB hours still can't show without a street
  address). Nextdoor description (484/500, the GBP text shortened, no phone, no "owner-operated") and
  hours M–F 9–5, Sat/Sun closed. Not changed: FB + Nextdoor cover banners (residential services + phone
  number), FB contact phone and "In-Home Service" category, Nextdoor categories ("Home theatre
  installer", "Home audio and video specialist"), and Mark's own pinned Nextdoor post.
- **2026-11-19** — Google Business Profile categories: primary "Home cinema installation" → "Audio visual
  consultant" (Google has no AV-installer category); added "Computer networking service" and "Computer
  support and services"; kept "Home cinema installation" as additional. Description rewritten
  commercial-first (705/750 chars, site facts only, no phone/prices): "Dapper AV Solutions installs and looks after the technology local businesses run on across Fort Bend County: TV walls and sound for restaurants and bars, meeting-room AV for offices, displays and digital signage for retail, UniFi business Wi-Fi and networks, cameras, structured cabling and Microsoft 365. Every job starts with a free 30–45 minute site survey and an itemized quote, and installs are scheduled around your hours: before open, after close or on weekends. Afterward, month-to-month care plans keep it all running, supported by the same company that installed it. Serving Richmond, Rosenberg, Fulshear, Sugar Land, Stafford and Katy. Homes too: TV mounting, home theater and whole-home audio."
- **2026-11-19** — Google Business Profile hours changed from M–F 8–6 to M–F 9–5 (Sat/Sun closed) to
  match the site; submitted via Business Profile Manager (Google review pending at the time).
- **2026-11-19** — SITE REDESIGN SHIPPED (branch `concept/taste`, squash-merged). Long session with Mark;
  what's live now:
  - **Look:** Mark's original look remastered on logo-verified tokens, cut 35–40% shorter (he hates
    long scrolling), then design-taste rules applied (no gradients/shadows/hairlines/glass/eyebrows).
  - **Motion:** site-wide motion layer (word-mask headlines, gold cable under "cable.", staggered
    reveals, whip-pan page transitions) plus the brand film's world: `FilmScene` silhouette scenes on
    the business pages, /business and /services, and the silhouette installer walking through the
    homepage hero (desktop only).
  - **Pictures:** Mark's portrait and install photos removed everywhere, /work deleted (redirects).
    Stock photos (Unsplash/Pexels, no credit, captioned as not Dapper AV jobs) on the industry lists;
    a muted Pexels cable loop behind every closing band.
  - **Contact is form-only:** no visible phone number, no call/text links (number only in JSON-LD).
    Quote form: phone OR email, details optional, per-field errors.
  - **Copy:** company voice ("we"), no one-man/part-time framing; business-first homepage with the
    business review; CRO/SEO fixes (Service + BreadcrumbList schema, titles < 60 chars, llms.txt).
  - **Care plans:** tailored per site, no prices; "How support works" (call/text/email for plan
    clients, 9–5 Central weekdays, after-hours emergencies at an emergency rate). Hours site-wide now
    Mon–Fri 9–5 Central. Training stated as CompTIA/Ubiquiti/Microsoft coursework (not certified).
  - **New pages/sections:** /privacy/, "Documented, not just installed" network map on /business.
  - Earlier rounds that did NOT ship: phase-2 type-led redesign (rejected), concepts 2 and 5 (worktrees
    ../dapperav-concept-02, -05), a "Watch the film" player (Mark wanted the film's elements instead).
- **2026-11-18** — REDESIGN PHASE 2: every other page now uses the homepage system. Shared
  components: `PageHero` (two-line, two-ink statement; espresso or parchment field), `BigList`
  (poster-scale list on gold/cream/parchment), `Staircase` (how a job goes + optional "what moves
  the price"), `OwnerPanel` (portrait + facts + reasons), `Letter` (Kenneth's review + Micaela P.S.),
  `FaqSection` (typographic details list), `CtaBand` (inverted two-line close), `PictureBand`
  (Brazos), `ClosetPair`, `FortBendPair`. Rewritten: /business (+ care plans as three columns,
  "Recommended" in words, no badge), the six /business/* pages (`heroLines` in industries.ts),
  /services (bundles, two real home installs), /work (all gallery photos as large blocks; the
  record-sleeve grid + lightbox are gone), /quote (form ids/names/script unchanged), the six
  city pages, 404. DELETED: VideoWall, ProofStrip, Record, BrandStrip, IndustryIcon,
  SectionHeading, ReviewsSection, SurveySteps, and the glass/pinstripe/sleeve/marquee CSS
  (global.css is now base + reveals only; the system lives in redesign.css + redesign-pages.css).
  taste-skill gate: lint 0 FAIL; inspector 0 FAIL on every page type (home, /business, two
  industry pages, /services, /work, /quote, a city page, 404). Remaining warnings: no video
  anywhere (no honest clip exists) and light motion on short pages.
- **2026-11-18** — HOMEPAGE REDESIGN (phase 1) with the `design-taste-frontend` skill after Mark
  called the record/video-wall passes "weak". Mark picked direction **Type and nothing else** (seed
  1900889380, brand palette + fonts kept; notes in `.taste-skill/notes.md`, sheet in
  `.taste-skill/direction.json`) and **credited trade photos**. New: `Header.astro` (plain bar that
  takes each section's ground/ink via `data-field`/`data-ink`; old Nav + mobile glass dock DELETED),
  `Footer.astro` (name first, picture credits), homepage rebuilt as colour-by-chapter set pieces:
  giant "Everything with a cable." hero, poster-scale "What I install" list on a gold field, the
  Brazos band (scroll drift), stepped "how a job goes" with the LIVE THING (pick a kind of space →
  what the survey checks + what drives the price → book), tidy-rack vs messy-closet pair, owner
  facts + portrait + Richmond pictures, two real installs, Kenneth's review as a letter (P.S.
  Micaela), inverted "One number. Every cable." close. Styles in `src/styles/redesign.css` (5 type
  steps, flat pill buttons, square media, no rules/shadows/gradients/eyebrows). Found pictures live
  in `src/assets/found/` with `credits.json` — they show the world around the business and must
  NEVER be presented as Dapper AV jobs. Inspector: 0 FAIL (only warning: no honest video exists).
- **2026-11-18** — Hero focus changed after Mark's feedback: the giant record "makes it look like
  a music store" and big "18+" read as an adult-only store. Dark heroes (home, /business,
  industry pages) now show `VideoWall.astro`: a drawn, tilted 3×2 wall of screens (menu board,
  game score, camera grid, Wi-Fi coverage map, video call, OPEN sign) that powers on once at
  load, never loops. Desktop ≥1280px only beside the text; on the homepage it stacks under the
  buttons below that. Records removed from heroes and CtaBand; `Record.astro` is now just faint
  outline rings behind cream page headers. Proof strip reads "18 yrs" / "5 yrs" with no "A1"
  tags — NEVER write "18+" big on this site.
- **2026-11-18** — Energy pass (Mark: "looking bland"; impeccable `bolder`, every page): the
  brand's vinyl record drawn as SVG geometry (`Record.astro`, dark + light tones) in the
  homepage, /business and industry heroes, both sides of every CtaBand, and as a faint outline
  on the cream page heroes; it turns with page scroll (`animation-timeline: scroll()`, static
  where unsupported or with reduced motion) while its light reflection stays put.
  `ProofStrip.astro` = "Side A" liner notes under the homepage and /business heroes (18+ yrs,
  5+ yrs IT, live Google rating, city count — real facts only). BrandStrip is now a
  scroll-driven marquee (never auto-plays). `IndustryIcon.astro` stroke icons on every
  business card. `main` has overflow-x: clip so records can bleed off the edge.
- **2026-11-18** — Audit group 2 (Mark's answers: NOT insured yet, NO DPS license, reply promise
  stays "within one business day", no published prices, portrait OK, surveys 30–45 min):
  door access control + intercoms REMOVED from every page (Texas DPS licenses them — re-add only
  once licensed); homepage H1 "One local contact for everything with a cable."; new
  `OwnerPanel` (portrait + real credentials) and `SurveySteps` (3 next steps + "what drives the
  price") on /business and every industry page; each industry has `costQuestion`/`costDrivers`
  and a cost FAQ answered with drivers, never numbers; new pages /business/networks-wifi/ and
  /business/structured-cabling/ (low voltage, written for GCs); the 6 city pages are now
  business-first (`blurb` = business copy, `homeBlurb` = the old residential copy, business
  cards → /business/*, residential as pills). Insurance is NOT mentioned anywhere — don't add
  "insured" or "COI" until Mark confirms coverage.
- **2026-11-18** — Site audit (5 lenses: SEO, AI search, CRO/copy, a11y/perf, design) → group 1
  fixes shipped: quote-form `?service=` preselect was broken on EVERY link (blank placeholder
  matched everything) → fixed + business mode ("Book a free site survey", no TV-mount tip);
  GA4 events `generate_lead` (quote success), `phone_click` / `text_click` / `email_click`
  (delegated listener in Layout); AI placeholder gallery images DAV-004..006 + the AI homepage
  hero removed (hero is now espresso pinstripe, files deleted); Google reviews shown on /business
  and industry pages; reveals only hide content when `html.js` is set and page-hero headings
  don't animate; text contrast token `gold-ink` (#865b00) replaces gold-deep as TEXT on light
  backgrounds; espresso focus ring (gold on dark); quote fields 16px (no iOS zoom);
  scroll-padding-bottom for the mobile dock; H1 on every page (`SectionHeading level={1}`);
  every internal link has its trailing slash (no 301 hops); titles ≤60 chars; schema address
  (city only) + hasMap + numeric minPrice; `public/llms.txt`; nav highlights For Business on
  sub-pages; desktop quote button stays visible (parks bottom-right when scrolled); commercial
  CTAs all say "Request a Free Site Survey"; care-plan badge "Recommended" (no clients yet).
- **2026-11-18** — Removed the dealership photo from /business/retail-showrooms and from the
  one-pager (Mark doesn't like it). It is still in the /work gallery. No industry page has a
  photo now; add one via the `photo` field only when there's a real commercial photo Mark likes.
- **2026-11-18** — Commercial outreach kit: 3 letters (GCs/electricians as low-voltage sub;
  TDLR TABS new-build owners; property managers/existing businesses) + follow-up, text and
  voicemail versions in the Claude doc "Dapper AV — Commercial Outreach Letters"
  (https://claude.ai/artifact/VSswnR4YCJzpKonjFpFVTV). Printable one-pager at
  `brand-assets/leave-behind/` (HTML source + letter-size PDF; re-render command in the HTML).
  QR code in the footer → `https://dapperav.com/business/?utm_source=leave-behind&utm_medium=print`
  (scans tracked in GA4 under source "leave-behind"). It's an inline SVG made with the `qrcode`
  npm package outside the repo — regenerate the same way if the URL changes, and scan-test it.
- **2026-11-18** — Commercial-first rework (branch `feat/commercial-focus`): homepage title, hero
  copy and CTAs lead with business; business block + 4 industry cards above the residential grid;
  4 new `/business/{slug}` landing pages (Service + FAQPage schema; retail uses the real dealership
  photo); /business "who we work with" cards link to them; nav order For Business first; mobile
  dock "Residential" → "Business"; area pages mention + link commercial; quote form gains
  optional Business name (added to the email subject) and $5k–15k / $15k+ budgets.
- **2026-11-18** — SEO fix: every sitemap URL and canonical pointed at a 301 (missing trailing
  slash). Now slashed. Mark must resubmit the sitemap in Search Console.
- **2026-11-18** — Found the review sync had failed 47 nights (2026-10-03 → 11-18, Places API
  PERMISSION_DENIED after the GCP trial ended). A manual run on 11-18 succeeded; confirm the
  next scheduled run.
- **2026-11-18** — Review: since July only the review sync committed; 2 Google reviews total.
- **2026-07-04** — Nextdoor page refreshed via business.nextdoor.com: new avatar + cover,
  description, contact@ email, https URL, hours M–F 8–6, street kept hidden.
- **2026-07-04** — Instagram business account reactivated + refreshed: new avatar, 3-line bio.
  (Links editable only in mobile app.)
- **2026-07-04** — Facebook page overhauled: new avatar + branded cover, first-ever bio, phone
  added, email → contact@, URL → https, 6-city service area added, street address removed.
- **2026-07-04** — PR #29: footer social icons (FB/IG/Nextdoor), `socials` in site.ts,
  `sameAs` in LocalBusiness schema, "Read our review" singular fix, brand-assets/ committed.
- **2026-07-04** — First Google review (Kenneth Durbin, 5★) synced by nightly job and live on
  the homepage ReviewsSection.
- **2026-07-04** — GSC verification tag + sitemap confirmed serving (PRs #27–28 earlier:
  GA4 + GSC tag).
- **2026-07-02 → 07-04** — Site rebuilt from CRA to Astro 5; 29 PRs merged; GBP set up;
  review auto-sync pipeline; quote form; area pages; gallery; full design language.

## Open items / what's next

> Keep this list honest and ordered. When Mark asks "what needs to be done next?", read from here.

0. **Site upgrade, next step (Mark):** the brand system + Variant A are live (2026-11-20). Decide whether
   to go on to Variant B (Showroom) or C (Native); check GA4's phone/desktop split before choosing C. The
   A/B/C pitch decks still show the old palette; the Brand System deck is current.
1. **Insurance (Mark):** general liability first. GCs and property managers need a certificate of
   insurance before they can hire; it's the biggest blocker for commercial work. Then add "Insured,
   COI on request" to /business.
2. **Real commercial photos (Mark):** 5–10 phone photos of commercial work he likes (racks, TV walls,
   cameras). They replace stock and drawings and fix the "few pictures" gap. Real jobs only.
3. **Listings are aligned:** GBP, Facebook and Nextdoor text, hours, banners and categories match the site
   (2026-11-20). Left as-is on purpose: the phone number in FB/Nextdoor/GBP contact info, Mark's pinned
   Nextdoor post.
4. **Case studies + reviews:** ask 2–3 business clients to be named/quoted; review ask after every
   job via dapperav.com/review. Target ~5 Google reviews → apply for **Google LSA**.
5. **GSC (Mark):** resubmit `sitemap-index.xml`; URL Inspection → Request indexing on /business/*,
   /privacy/. /work now redirects. The GSC UI blocks Claude's browser tools.
6. **GA4 key events (Mark, 2 min):** mark `generate_lead` as a key event. `phone_click`/`text_click`
   no longer fire (no call/text links on the site); `email_click` still does.
7. **Bing Webmaster Tools + Bing Places (Mark):** import from Search Console / GBP.
8. **Commercial lead generation (Mark's time):** monthly TDLR TABS search for Fort Bend projects;
   pitch GCs/electricians as their low-voltage sub; Fort Bend Chamber. Letters + one-pager are done.
9. **Directory listings (Mark's logins):** Yelp, Apple Business Connect, BBB, Thumbtack, Houzz. Keep
   NAP identical.
10. **Care-plan specifics:** when Mark settles what each plan includes (backups, MFA, camera retention
    days), add them; never publish prices.
11. **design-system/DESIGN.md** predates the taste pass (mentions the vinyl accent); refresh it the
    next time the design changes.
12. **First care-plan client** — the MSP engine needs a lighthouse customer.
