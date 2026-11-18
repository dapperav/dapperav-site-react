# 03 · Editorial restraint (quiet, photo-led)

Static mockup. Not on the live site. Open `index.html` through a local server rooted at the repo
(it links `../../design-system/tokens.css` and `components.css`), e.g. `python -m http.server 5500` from
the repo root, then `http://127.0.0.1:5500/mockups/03-editorial-restraint/`.
Screenshots: `shots/desktop.png` (1440 wide, full page), `shots/mobile.png` (390 wide, full page).

## Concept in three sentences

*Dapper* means well dressed, so the page is tailored the way Mark's installs are: level lines, hidden
wiring, every photograph labeled with whose it is. Real photographs hang at uneven sizes on a 12-column grid
like prints in an architecture monograph, with warm paper, one brown ink and gold only on the action.
Businesses come first (six offerings, then a survey picker), homes second, and the one person who does all of
it is in the hero, in his tailored jacket.

## Body font swap (stated as required)

This concept keeps Fraunces for display and overrides `--font-body` to **Geist** in `styles.css`, because
`stitch-design-taste` bans Inter. The brand system itself still specifies Inter. It also overrides
`--font-display` to `'Fraunces'` (the family name Google Fonts serves) so the inspector stops reporting a
fallback; the rendered face is identical.

## What is on the page

Header (wordmark, four links, phone, one action) → hero ("Tailored / AV and IT", portrait, courthouse place
photo) → "One person, start to finish" with four facts spelled out (eighteen years AV, five years managed IT,
IT director by day, reply within one business day) → six business offerings from `src/data/industries.ts`,
each linking to its live `/business/...` page → homes with the real "from" prices from `src/data/site.ts` →
how a job goes (five steps) → **live element**: pick your kind of space (7 `.pill` radios) and see what the
survey checks (lists taken from each industry's `costDrivers`), works without JavaScript via CSS `:has()` →
About Mark → the two real Google reviews (verbatim excerpts, "an[d]" bracketed) → closing sentence + action →
footer across the Brazos railway bridge photo.

Real photos used: `mark-portrait.jpg`, `mark-avatar.jpg`, `fireplace-mount.jpg`, `hifi-rack.jpg`.
`dealership-display.jpg` is **not used** (Mark dislikes it; removed after the coordinator's correction).
Found photos, each captioned "Not our photo/work" with creator and licence on the page: Fort Bend County
Courthouse (Adavyd, CC BY-SA 4.0), Brazos River south of Sugar Land (Ken Lund, CC BY-SA 2.0), old railway
bridge over the Brazos (Adavyd, CC BY-SA 4.0), cable closet (sampsyo, CC BY 2.0), NERSC rack (Derrick Coetzee, CC0).
Images in `img/` are resized copies of `mockups/assets/`.

## Skills loaded, and what each changed

| Skill | What it changed here |
|---|---|
| `minimalist-ui` (lead) | Warm monochrome with one accent, macro whitespace between sections, editorial serif + clean sans, scroll-entry fades with IntersectionObserver, reduced-motion gating. Its 1px-border cards and "rounded-full not for primary buttons" were overruled (see conflicts). |
| `design-taste-frontend` | Ran `draw.mjs` (sector architecture, `--keep palette,type`): chose **uneven-photographs** from three dealt directions (seed 1088193524). Hero blueprint "stepped title, two photographs", business rows hanging from an axis, steps down a diagonal, plain-sentence close, name across the last photograph all come from the sheet. Ran `lint.mjs` (0 fail) and `inspect.mjs` three rounds: fixed a shadow FAIL, a 4-line headline at 390, a 5-line quote, 13 font sizes (now 9 incl. button and wordmark), mixed-face run-in headings, and a hidden phone CTA. Final: 0 FAIL, 2 WARN (below). |
| `design-taste-frontend-v1` | Dials set by brief (variance 6, motion 4, density 3), `min-h` via `svh`, grid over flex math, no 3 equal cards. |
| `design-taste-frontend-v2-experimental` | Zero em dashes in copy, one label per intent ("Book a free site survey" everywhere), quotes trimmed to three-ish lines, no eyebrows, no scroll cue, no Step 1/2/3 labels. Its "Fraunces banned" rule was overruled by the brand. |
| `stitch-design-taste` | Inter swapped for Geist; wrote `DESIGN.md` in this folder in its format. |
| `design` | Loaded; it is an Apple/SwiftUI skill (Liquid Glass, SF Symbols). Only its UX-writing principle (plain, specific copy) applied; nothing else fits a static web page. |
| `ui-ux-pro-max` | Applied its priority table (contrast, 44px targets, CLS: every image has width/height). Did not run its search script. |
| `impeccable` | Treated as Persuade mode with a pinned brand ("the brief wins"); redesign-replaces approach. Did not run its `impeccable context` launcher (no PRODUCT.md for this mock). |
| `redesign-existing-projects` | Audit list drove: font swap first, sentence-case headings, semantic landmarks, skip link, `text-wrap: balance/pretty`, no dead links (all go to real dapperav.com pages or tel/mailto). |
| `superdesign:superdesign` | Loaded; its CLI needs sign-in and spends credits on cloud drafts, so I did not run it. Nothing from it is in the page. |
| `anthropic-skills:emil-design-eng` | Strong ease-out curve, nothing from scale(0), press 0.97 from components, hover gated behind `(hover: hover) and (pointer: fine)`. |
| `motion-ui-patterns` | One loud element per surface, 8pt spacing, 150 to 250ms UI motion (panel swap 220ms, menu 180ms). |
| `anthropic-skills:animate` | Gate per motion: headline reveal (rare, first impression), section entrances (occasional), panel swap (state indication). Transform/opacity only. |
| `anthropic-skills:find-animation-opportunities` | Rejected: header nav, pills (colour-only change), prices, footer. Kept: masked headline, entrances, survey panel, phone menu origin top-right. |
| `anthropic-skills:animation-performance` | No layout properties animated, no `transition: all`, no animated CSS variables per frame, no `will-change` sprinkled. |
| `anthropic-skills:mobile-native` | `viewport-fit=cover` + safe-area padding, `svh` hero, tap highlight off, `touch-action: manipulation`, `user-select: none` on controls only, theme-color. |
| `accessibility` | Skip link, landmarks, one h1, labelled sections, real radio inputs in a fieldset/legend, `aria-live` on the survey result, alt text on every meaningful image, gold focus ring in the footer (`.on-dark`). |
| `tailwind-design-system` | No Tailwind in a static mock; applied its token hierarchy (brand → semantic → component) by referencing semantic tokens only, never raw hex, in `styles.css`. |
| `anthropic-skills:break-ui` (QA) | Checked: no horizontal scroll at 390 and 1440 (scrollWidth measured equal to viewport), longest titles ("Digital signage and menu boards") wrap to two lines, phone number never wraps, page reads fully if `main.js` fails (reveal hiding only starts once the observer exists). Not run: 200% zoom, RTL, worst-case data toggle (content is fixed copy). |

## Skills excluded (contradict this concept)

`high-end-visual-design`, `anthropic-skills:apple-design`, `glass-dashboard-ui` (depth, glass, shadows
contradict the no-ornament restraint), `industrial-brutalist-ui` (raw terminal style), `gpt-taste` (heavy pinned
scroll animation contradicts restraint).

## Skills unavailable

- `imagegen-frontend-web`, `imagegen-frontend-mobile`, `image-to-code`: not loaded. Image tools exist in this
  environment (Canva, Adobe, IMG.LY connectors) but the brand bans AI images presented as Mark's work and this
  concept is built on real photography, so generation would add nothing honest. Said plainly: I chose not to use them.
- `superdesign` CLI: needs authentication and credits (see above).

## Conflicts resolved (hard rules and tokens win)

- `minimalist-ui` wants 1px #EAEAEA borders and 4 to 6px button radii; the brand components are fully round and the taste inspector bans hairlines. Brand + taste win: tone steps instead of lines, buttons untouched.
- `design-taste-frontend-v2` bans Fraunces; the brand specifies it. Brand wins.
- Taste inspector WARN `palette-cream`: the paper and cream are the logo-verified brand colours. Kept.
- Taste inspector WARN `no-footage`: no honest clip of Mark's work exists; stock footage would break the "no stock presented as his work" rule. Kept without video.
- Direction blueprint "about: pinned title, portraits pass" assumes several people; there is one. Built as a plain portrait-and-text section instead.

## Known weaknesses

- Only three real job photos exist after dropping the dealership shot, and **all three are homes**. The business section therefore carries two found photos (labeled "not our work") and text. Real photos of a restaurant, office or rack Mark did would lift this page more than any design change.
- The hero's small photo is a found picture of the Richmond courthouse (credited). Honest, but it is a place, not his work; Mark may read it as filler.
- The business section is long text on a quiet ground; at 1440 the left four columns stay empty for several screens by design.
- `mark-avatar.jpg` is a crop of the hero portrait, so the face appears twice.
- No dark mode (the brand is a paper design); not tested on a real phone, only headless Chrome at 390px.
- Booking goes to `https://dapperav.com/quote` (with `?space=` from the picker); whether the live form reads that parameter is unverified.
- `.taste-skill/` holds the dealt direction sheet and inspector screenshots; safe to delete.
