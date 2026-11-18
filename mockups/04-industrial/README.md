# 04 — Industrial: the trade itself

## Concept

The homepage reads like a contractor's drawing set: a cover sheet with a title block, a patch panel of the six business offerings, a work order for how a job goes, and an "as built" section pairing two of Mark's own photos with a closeout spec table. The language comes from structured cabling and AV work (keystone jacks, link lights, ruled spec tables, dimension lines, registration crosses), so Dapper AV comes across as an organized commercial contractor. It stays on-brand: espresso, gold and cream from `tokens.css`, Fraunces headlines and Inter body, with JetBrains Mono used only for labels, specs and measurements.

Files: `index.html`, `styles.css`, `main.js`, `shots/desktop.png` (1440 wide, full page), `shots/mobile.png` (390 wide, full page). Links `../../design-system/tokens.css` and `components.css`. Every button is `.btn` + a variant + optional size, every chip is `.pill`. There are no inputs, so no `.field` is used.

## Skills loaded, and what each changed

| Skill | What it changed |
|---|---|
| `industrial-brutalist-ui` (lead) | Picked the Swiss Industrial Print archetype (light substrate only, no dark/light mixing except the closing band). Gave the page its parts: 2px ruled grids drawn with `gap: 2px` over an ink background (the patch panel), registration crosses at both ends of every section rule, a monospace layer for specs, and `<dl>` semantics for the spec tables. |
| `design` | Mostly Apple/SwiftUI material; the only part that applied was its UX-writing guidance (controls name their action: "Book a free site survey", "Call (972) 824-1303"). |
| `gpt-taste` | Ultra-wide hero headline held to two lines, a gapless panel grid (6 cells in 3×2 or 2×3, no empty cell), image hover scale inside `overflow: hidden`, and the GSAP choice: a scrubbed ScrollTrigger cable run through the steps plus a grid-stagger reveal, all gated behind `gsap.matchMedia()` for reduced motion. |
| `ui-ux-pro-max` | Ran `--design-system` for a commercial-contractor page. Used its CTA-placement pattern (hero plus closing CTA), the GSAP "stagger list, grid: auto" preset for the panel, and its pre-delivery checklist. Ignored its slate/green palette and Outfit/Work Sans fonts (tokens win). |
| `impeccable` | Ran `impeccable context` (no PRODUCT.md, so the caller's brief stood in as product truth; I could not run its user interview from a subagent). Read `craft-floor.md` before building: no eyebrows above headings (metadata sits beside headings instead), monospace only for real specs, themed `::selection`, caret and scrollbar. Ran `impeccable detect` at the end and raised the review-quote line height after it flagged tight leading. |
| `redesign-existing-projects` | Audit points applied: `text-wrap: balance/pretty`, tabular figures on the mono layer, a skip link, `min-height` instead of `100vh`, a footer that isn't a link farm, and real copy everywhere. |
| `superdesign:superdesign` | The CLI preflight ran, but it reported "not authenticated". Its repo init would also write `.superdesign/` outside this folder, which the brief forbids. So I took its "design with your model" path and authored the page directly. No canvas draft was made. |
| `anthropic-skills:emil-design-eng` | Strong custom ease-out for entrances, nothing animates from `scale(0)`, hover gated behind `(hover: hover) and (pointer: fine)`, and transitions (not keyframes) for the checklist so rapid re-picks retarget. |
| `motion-ui-patterns` | One loud element per surface (one gold button per viewport), 44px minimum targets (nav links, footer links, pills), and a 150–260ms budget for interface motion. |
| `anthropic-skills:animate` | Gate results: the survey checklist animates (occasional; purpose is state indication), with rows staggered 40ms and tick marks drawing via `stroke-dashoffset`. Port hover is a colour change only. Nav open/close has no animation. |
| `anthropic-skills:find-animation-opportunities` | Limited motion to three moments: the dimension line drawing on load, section rules drawing in, and the scrubbed cable run. Rejected: animating the title block (data the reader reads), a marquee of service names (decoration), and any nav animation. |
| `anthropic-skills:animation-performance` | Everything animates `transform`, `opacity` or `stroke-dashoffset`. No `transition: all`. The fill uses `scaleX`/`scaleY`, not width or height. |
| `anthropic-skills:mobile-native` | `viewport-fit=cover` with safe-area padding, tap highlight removed, `touch-action: manipulation`, `user-select: none` on controls only, `theme-color`, and hover gating. |
| `accessibility` | Landmarks, a skip link, one `h1`, labelled sections, a native radio group inside the pills (fieldset + `aria-labelledby`), `aria-live` on the checklist, `aria-expanded` on the menu with Escape to close, alt text on every photo, and focus rings on the stretched-link ports. |
| `tailwind-design-system` | No Tailwind here (static HTML). Applied its token hierarchy: brand, then semantic, then component. Page CSS uses only semantic and component tokens; the one raw addition is the mono font stack. |
| `anthropic-skills:break-ui` (QA) | Lighter pass than the skill's full workflow, because nothing here renders user data. I checked 320, 390, 1024 and 1440 (scroll width matched viewport every time) and the longest checklist strings at 320. I did not build a demo/worst-case toggle: all the content is static copy. |
| `imagegen-frontend-web` | Loaded. I did not generate images. The session lists generation tools (Canva and CoDesign connectors, Superdesign), but they need sign-in or credits, and the brief allows only real photos on the page. |

## Skills excluded (per the brief)

- `minimalist-ui`, `anthropic-skills:apple-design`, `glass-dashboard-ui`, `high-end-visual-design`: they pull toward flat quiet minimalism or glass and depth. This concept is ruled, gridded and documentary.
- `design-taste-frontend`, `-v1`, `-v2-experimental`: they ban the monospace and visible rules this style depends on.
- `stitch-design-taste`: it bans Inter, and the brand keeps Inter.

## Skills unavailable

- `imagegen-frontend-mobile` and `image-to-code`: not loaded. Both depend on generated design images, and none were generated (see `imagegen-frontend-web` above).
- Superdesign's canvas: needs `superdesign login` (interactive), so no draft exists there.

## Where skills conflicted with the brand (brand won)

- Industrial-brutalist wants red accents, zero radius and heavy uppercase sans headlines. The brand keeps gold as the only accent, fully round buttons and pills, 24px radius on photos, and Fraunces in sentence case. Ruled spec tables and the panel stay square, because they are tables, not cards.
- Industrial-brutalist wants noise and halftone textures. The impeccable craft floor calls `feTurbulence` grain amateur, so there is none.
- gpt-taste bans Inter and data in the hero. Inter stays (brand). The hero title block holds only stated facts (free 30–45 minute survey, reply within one business day), not stats.
- gpt-taste's "no meta-labels" and impeccable's eyebrow ban against industrial's unit IDs: no "SECTION 01" labels and no eyebrows. The only numbers are "Step 1–4", where order carries meaning.
- `impeccable detect` flags the cream page background as a cliché. It is the logo-verified Paper token, so it stays.

## Fact check

No invented numbers. The only figures are 18 years installing AV, 5 years running managed IT, the 30–45 minute survey, one-business-day reply, the phone number, home prices from `src/data/site.ts` ($150 / $800 / $2,000), and the 2 real Google reviews, quoted verbatim with typos kept. Insurance, licensing and access control are never mentioned. The messy cable-closet photo is greyscaled, captioned "Reference photo, not a Dapper AV job" and credited (sampsyo, CC BY 2.0). The tidy NERSC rack photo is not used.

## Known weaknesses

- The screenshots were captured with `prefers-reduced-motion: reduce` so they show the final state. A full-page capture never scrolls, so ScrollTrigger reveals would otherwise show as hidden. The motion version was checked for JS errors (none) but not watched frame by frame or on a real phone.
- There are no commercial photos on the page. Mark asked for the dealership photo to be removed (2026-11-18), which leaves the two home photos (fireplace TV mount, hi-fi rack). That is thin for a commercial-first page. A real commercial install photo (a bar TV wall, a conference room, or a labeled rack he built) would help the hero and the "As built" section most.
- "As built" pairs the two photos with a text column ("Finished, not just installed" plus a three-row closeout spec table: mounting, cables, closeout) so the section doesn't look like a gap. That copy is my wording, based on the brand promise in `DESIGN.md` and `industries.ts`, and Mark should confirm it.
- The survey checklist text is my own wording, drawn from the install lists and cost drivers in `src/data/industries.ts`. Mark should confirm it matches what he actually checks on site.
- The "Book a free site survey" button links to the live `/quote` page. There is no form in this mockup.
- Long mono labels on the panel wrap to two lines at some widths, so the scope lines don't share a baseline across a row.
