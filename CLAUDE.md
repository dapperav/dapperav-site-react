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

**Two-engine strategy (Mark's words, 2026-07-04):**
1. **Residential volume** — goal: 3 TV mounts/day @ ~$300 (beats his IT-director salary;
   wants full-time eventually; day job is flexible enough to install during hours).
2. **MSP care plans** — recurring light-touch income. Tiers on /business: Network Care,
   Network + Camera Care (★ popular), Full Stack Care. Custom-quoted, month-to-month.

Trip fee beyond 50 miles (not a refusal). Customers historically word-of-mouth.
Content strength: good BEHIND the camera → install before/afters for GBP/FB/IG (not YouTube).
Tool-productization ideas parked ~12 months. **Willing to spend on Google Local Services Ads
(LSA) once at ~5 Google reviews** — that's the designated first ad spend.

**Hard rules:**
- Keep every claim honest — no fabricated stats, testimonials, or review counts. Ever.
- Never commit to `main`. Branch → PR → squash-merge when CI is green (don't pause to ask).
- Mark declined renaming social accounts/pages — leave names/handles as they are.

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
  - `src/data/reviews.json` — auto-written by the nightly review sync. Do not hand-edit.
- **Pages:** `/` `/services` `/business` `/work` `/quote` `/404` + 6 area pages.
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

1. **GSC:** Mark clicks **Verify** in Search Console + submits `sitemap-index.xml`
   (tag + sitemap already confirmed serving; the GSC UI blocks Claude's browser tools).
2. **Bing Places:** Mark signs into a Microsoft account → import listing from GBP (~2 min).
   Claude can drive the browser once signed in.
3. **Yelp + Apple Business Connect:** create/claim listings (need Mark's account sign-ins).
   Keep NAP identical: Dapper AV Solutions, (972) 824-1303, https://dapperav.com, contact@.
4. **Instagram:** add second link (dapperav.com/quote) from the phone app. Optional.
5. **Facebook nice-to-haves:** add IG as a social link in About (1Password blocked it);
   consider a vanity username later (counts as a rename — ask Mark first).
6. **Reviews:** work toward ~5 Google reviews (review-ask text after every job) → then apply
   for **LSA**.
7. **Photos:** replace AI-placeholder gallery entries DAV-004..006 with real install photos
   (whole-home audio, UniFi racks). First testimonial/case study when a customer agrees.
8. **First care-plan client** — the MSP engine needs a lighthouse customer.
