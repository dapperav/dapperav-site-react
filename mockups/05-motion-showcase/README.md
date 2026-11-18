# 05 · Motion showcase

**Concept.** The homepage is told as a choreographed scroll in four chapters: attention (a type-led hero with Mark himself, because the promise is one person), interest (a gapless tile grid of the six kinds of business plus homes), desire (the job's five steps as cards that stack and recede, then a "pick your space" survey explorer), and action (a dark closing chapter with the survey form). Motion explains order and depth and then stops: every animation runs once or is tied to the scroll position, and nothing loops. With JavaScript off or reduced motion on, the page is the finished static layout.

Files: `index.html`, `styles.css`, `motion.js` (GSAP 3.12.5 + ScrollTrigger from cdnjs). Shots: `shots/desktop.png` (1440 wide, full page) and `shots/mobile.png` (390 wide, full page). Both shots were taken with reduced motion forced, so they show the static end state.

## Photos

Only real photos: `mark-portrait.jpg` (hero), `mark-avatar.jpg` (inline in the owner headline), `fireplace-mount.jpg` and `hifi-rack.jpg` (home tile and the work section). `dealership-display.jpg` is not used (Mark doesn't like it). No found, stock or AI images.

## Skills loaded and how each changed the design

| Skill | What it changed here |
|---|---|
| `gpt-taste` (lead) | Gave the page its AIDA structure and the motion set: headline lines rising out of their own mask, the pinned/stacked step cards, the word-by-word scrub on the owner statement, photos scaling 0.86 to 1 as they enter, and an inline photo inside a headline. Also the 2-line headline rule (headlines were shortened to fit at 390), the gapless grid with `grid-auto-flow: dense`, `overflow-x: clip` on `main`, and no "SECTION 01" labels. |
| `design` | Mostly Apple-platform (SwiftUI) guidance. What carried over: depth through layered materials and restraint in how many glass layers are on screen (one: the nav). |
| `high-end-visual-design` | Chose "Editorial Luxury" (espresso, cream, variable serif, film grain) and "Asymmetrical Bento". Added the double-bezel frame on the hero portrait, the button-in-button arrow on the main call to action, the burger-to-X morph, the staggered menu reveal, and the rule that blur and grain live only on fixed layers. |
| `anthropic-skills:apple-design` | Press feedback on pointer-down (the components already do `scale(0.97)`), negative tracking on display type only, reduced-transparency fallback for the glass nav, and the "dim to focus" idea behind the receding step cards. |
| `anthropic-skills:emil-design-eng` | Frequency gate: no animation on the menu-heavy/keyboard paths beyond a 200ms fade; survey-list feedback kept to 220ms with a 30ms stagger; hover motion gated to `(hover: hover) and (pointer: fine)`; nothing scales from 0. |
| `glass-dashboard-ui` | Only its dark site-navbar variant: floating inset pill, blurred translucent fill, links at about 70% cream going to full on hover, collapse to a menu button below 64rem. |
| `ui-ux-pro-max` | Priority order for QA (contrast, 44px targets, no horizontal scroll, reduced motion). Its search script was not run. |
| `impeccable` | Ran `impeccable context` (no PRODUCT.md; incumbent design system treated as authority) and `impeccable detect`. The detector's contrast warnings led to declaring section background colours separately from their gradients; see weaknesses for the remaining flags. |
| `redesign-existing-projects` | Audit against the live site: replaced three equal feature cards with an asymmetric tile grid, sentence-case headings, `text-wrap: balance/pretty`, semantic landmarks, skip link, no dead `#` links except the mockup form. |
| `superdesign:superdesign` | Loaded. Its CLI preflight (`npx @superdesign/cli`) was blocked by the environment's permission classifier, so I followed its own fallback, authoring directly with my own model. No canvas or drafts exist. |
| `motion-ui-patterns` | One loud element per surface (one dark tile, one dark review), one primary action per section, 8pt spacing, interface motion inside 150 to 250ms. |
| `anthropic-skills:animate` | Tool choice: CSS transitions for hover, press and the menu; GSAP only where scroll-linking needs it. Easing from the tokens (`--ease-out`), transform and opacity only. |
| `anthropic-skills:improve-animations` | Used as a self-audit: no `transition: all`, no `scale(0)`, `transform-origin` set on the receding cards (top centre), and a cleanup function that restores the static page if reduced motion is switched on mid-session. |
| `anthropic-skills:find-animation-opportunities` | Decided what should *not* move: no marquee, no looping hero, no number tickers, no animated survey chips (they change instantly). |
| `anthropic-skills:animation-performance` | Every scroll animation is transform/opacity (plus a one-off clip-path reveal); grain is a fixed layer; `backdrop-filter` only on the fixed nav and menu; no animated inherited CSS variables. |
| `anthropic-skills:animation-vocabulary` | Named the choreography so it can be discussed: scroll reveal, stagger, scroll-driven scrub, card stacking, parallax, mask reveal, press feedback. |
| `anthropic-skills:mobile-native` | `viewport-fit=cover` with safe-area insets on the nav, menu and footer; tap highlight removed; `touch-action: manipulation`; `user-select: none` on controls only; 16px fields; `overscroll-behavior: contain` on the menu. |
| `accessibility` | Skip link, landmarks, alt text, `aria-expanded` and Escape on the menu, a labelled radio group for the survey chips, `aria-live` on the survey panel, inline form error that names the field, visible focus (gold on dark grounds). |
| `tailwind-design-system` | No Tailwind (the brief says static HTML/CSS). Applied its token hierarchy instead: page CSS reads only semantic and component tokens from `tokens.css`. |
| `anthropic-skills:break-ui` | Probed 320, 390, 768 and 1440 widths and a doubled root font size. Found the nav's buttons overflowing the pill at 320px; fixed by moving the survey button into the menu at that width. |

## Skills excluded and why

- `design-taste-frontend`, `design-taste-frontend-v1`, `design-taste-frontend-v2-experimental`: they ban tile grids, cards and heavy scroll motion, which are this concept.
- `minimalist-ui` and `industrial-brutalist-ui`: opposite style directions (flat and quiet vs raw and terminal).
- `stitch-design-taste`: bans Inter, which is the brand's body face.

## Skills unavailable

- `imagegen-frontend-web`, `imagegen-frontend-mobile`, `image-to-code`: not loaded. Image tools are listed in this environment (Canva `generate-image`, IMG.LY `asset_generate`), but they need sign-in or credits, and the brief bans AI images presented as Mark's work, so a generated comp had nowhere honest to go on the page.

## Where skills lost to the brand rules

- `gpt-taste` and `high-end-visual-design` ban Inter and ask for Satoshi, Geist and similar. The brand keeps Fraunces and Inter.
- `gpt-taste` wants pill tags under the hero and a looping marquee. Dropped: DESIGN.md says nothing loops forever, and the proof facts sit in the owner section at body size (no large "18+").
- `high-end-visual-design` wants eyebrow badges, nested radii everywhere and its own button padding. Buttons and pills are the untouched components; the double bezel is used only on the hero portrait, with the outer radius derived from `--radius-card`.
- The hero headline uses `min(var(--text-display), 8.4vw)` so it stays two lines at 390. Everything else uses the token scale.

## Known weaknesses

- **No commercial job photos.** The only real install photos are homes, so the commercial tiles are typographic. A restaurant, office or signage photo would do more for this page than any motion.
- **Motion is verified in code, not on video.** GSAP initialises with no console errors and creates 19 to 21 scroll triggers at 390, 768 and 1440 (1 under reduced motion), but headless Chrome doesn't advance GSAP's frame ticker, so no screenshot shows the finished intro. Needs a look in a real browser, and on a mid-range phone for the stacking cards.
- **Stacked cards on mobile** use `position: sticky`. That's fine in Chrome and Safari but untested on a real device.
- **The form is not connected.** It validates and then says it's a mockup.
- **Impeccable detector flags left as-is:** "cramped padding" on tiles and cards (false positive: the padding is on the inner link or wrapper), "dark glow" (the brand's brown-tinted `--shadow-2`), "cream palette" (the brand's paper ground), and one heading at 1.22 line-height (display type, by design).
- **Text-only zoom.** Real browser zoom at 200% passes because the layout reflows. A doubled root font size with the viewport unchanged still crowds the nav pill. That's an edge case, but it's open.
- **Screenshots** were taken with Playwright's headless shell (`chrome-headless-shell.exe` 1248), not `chrome.exe`. Chrome's new headless mode clamps the window to 500px wide, so a "390" capture from it is really a cropped 500px layout.
