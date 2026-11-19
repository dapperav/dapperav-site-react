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
  - `src/data/gallery.ts` — add photo = import + 5-field entry; optional `pos:'top'` crop anchor;
    DAV-00N catalog numbers render from array index.
  - `src/data/areas.ts` — city SEO pages at `/areas/{slug}` (6 cities).
  - `src/data/industries.ts` — commercial landing pages at `/business/{slug}` (restaurants-bars,
    offices-conference-rooms, retail-showrooms, digital-signage). Capabilities only — no invented
    clients. Optional `photo` must be a REAL install photo (the AI gallery placeholders never).
  - `src/data/reviews.json` — auto-written by the nightly review sync. Do not hand-edit.
- **Pages:** `/` `/services` `/business` `/work` `/quote` `/404` + 6 area pages + 4
  `/business/{slug}` commercial pages.
  `/review` redirects to the Google write-a-review form (use this URL in review asks).
  `/contact` `/portfolio` `/pricing` `/calculator` redirect from the old site.
- **Design language** ("dapper suit × vinyl records"): espresso `#3b1005`, cream `#f7f0e0`,
  gold `#f0b010`; Fraunces + Inter; `.glass`/`.glass-dark` panels; pill buttons; pinstripe
  texture on dark sections; `.grooves` corner arcs on light; desktop nav = spinning roundel
  disc; mobile = bottom dock with 76px spinning logo (center = Home); gallery cards = record
  sleeves; page cross-fades via CSS `@view-transition`. All motion respects
  `prefers-reduced-motion`.
- **CSS gotcha:** `.glass` etc. are UN-layered and beat layered Tailwind utilities regardless
  of specificity — override glass with un-layered rules (see `.glass[aria-pressed='true']`).
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
| Google Business Profile | Mark's personal gmail (mgioftx@). Place ID `ChIJu1Q7sb3Sk6gRbGDmkUJWSq4`. Hours M–F 8–6, 10 service-area cities. |
| Review auto-sync | `.github/workflows/sync-reviews.yml` nightly ~6am CT → `scripts/sync-reviews.mjs` → Places API (New) → `src/data/reviews.json` → commits + deploys itself. Home ReviewsSection renders only when written 4–5★ reviews exist. API key in repo secret `GOOGLE_PLACES_API_KEY` (GCP "My First Project", trial). Secret gotcha: PS pipe once added a BOM — set with `--body $var`, strip non-ASCII. |
| GA4 | `G-JDBM052Y1B`, on every page. |
| Search Console | Meta-tag verification live; sitemap-index.xml serves 200. GSC's SPA blocks Claude's browser tools — GSC UI clicks need Mark. |
| GCP | $1/mo budget alert. Free trial ends ~2026-10-01 (account pauses, no auto-charge). Usage stays $0 under free tier either way. |

## Brand assets (for social profiles etc.)

- `brand-assets/dapperav-avatar-1024.png` — roundel logo on brand cream, square. Used on FB,
  IG, Nextdoor profile photos.
- `brand-assets/dapperav-cover-1640.png` — 1640×624 espresso banner (pinstripes, groove arcs,
  gold-ringed logo, tagline, services, contact line). Used as FB + Nextdoor cover.
- Regenerate: the banner was rendered from an HTML file styled like the site and captured with
  headless Chrome (`--headless --screenshot --force-device-scale-factor=2 --window-size=820,312`).
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

1. **Mark's own install photos** would beat every found picture (racks, TV walls, cameras,
   before/after). Add them to `src/data/gallery.ts` (real jobs only) and swap them into
   `PictureBand` / `ClosetPair` slots. Re-run the taste-skill gate after any page change
   (`lint.mjs src` + `inspect.mjs` against `npx astro preview`).
2. **GSC:** Mark clicks **Verify** in Search Console + submits `sitemap-index.xml` (re-submit
   after the 2026-11-18 trailing-slash fix; URL Inspection → Request indexing on the 4 new
   `/business/*` pages). The GSC UI blocks Claude's browser tools.
3. **Commercial licensing (ask Mark):** /business advertises door access control. Texas Occ. Code
   ch. 1702 (DPS Private Security) licenses access-control/alarm companies; CCTV coverage was not
   confirmed. If licensed, put the license # on the site (wins trust). Also get a COI ready —
   GCs and property managers ask for one. A dedicated business-cameras page is held until this
   is answered.
4. **Commercial lead generation (Mark's time):** monthly TDLR TABS search (public registry of
   Texas commercial builds ≥$50k) for Fort Bend projects → contact owner/GC early; pitch
   electricians and GCs as their low-voltage sub; Fort Bend Chamber; county/city vendor
   registration. Letters + one-pager are DONE (see changelog) — Mark sends 5–10/week.
5. **Commercial proof:** real photos + a written case study for every commercial job (the dealership is the only real commercial photo; Mark doesn't want it featured). Update GBP categories/services/posts toward commercial (needs Mark's login).
6. **GA4 key events (Mark, 2 min):** GA4 Admin → Events → mark `generate_lead`, `phone_click`,
   `text_click` as key events (they appear after the first real one fires). Then check DebugView.
7. **Bing Webmaster Tools (Mark):** import from Search Console + submit sitemap — Bing barely
   indexes the site, and ChatGPT/Copilot search through Bing.
8. **Insurance + licensing (Mark):** get general liability insurance (GCs and property managers
   ask for a COI first), then add "Insured · COI on request" to the business pages. DPS license
   if door access/intercom work is wanted back on the site. Residential smart locks / video
   doorbells are still listed under Smart Home — check whether DPS licensing applies there too.
   Audit group 3 (Mark's logins): BBB / Thumbtack / Houzz / Fort Bend Chamber listings.
9. **Analytics check:** Mark (or Claude with his login) pulls GA4 + GSC for the last 90 days to
   tell "no traffic" from "traffic not converting"; send a test through the quote form.
10. **Bing Places:** Mark signs into a Microsoft account → import listing from GBP (~2 min).
   Claude can drive the browser once signed in.
11. **Yelp + Apple Business Connect:** create/claim listings (need Mark's account sign-ins).
   Keep NAP identical: Dapper AV Solutions, (972) 824-1303, https://dapperav.com, contact@.
12. **Instagram:** add second link (dapperav.com/quote) from the phone app. Optional.
13. **Facebook nice-to-haves:** add IG as a social link in About (1Password blocked it);
   consider a vanity username later (counts as a rename — ask Mark first).
14. **Reviews:** work toward ~5 Google reviews (review-ask text after every job) → then apply
   for **LSA**.
15. **Photos:** add real install photos (AI placeholders DAV-004..006 were REMOVED 2026-11-18)
   (whole-home audio, UniFi racks). First testimonial/case study when a customer agrees.
16. **First care-plan client** — the MSP engine needs a lighthouse customer.
