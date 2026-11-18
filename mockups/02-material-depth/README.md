# 02 — Material depth

Static homepage mockup. Open `index.html` directly in a browser (it links `../../design-system/` and `../assets/`). Not the live site.

## Concept

Apple presents a product as a lit object sitting in real space, and this page does the same for the thing Dapper AV sells first: the free site survey, shown in the hero as a heavy espresso "pass" with machined bezels, an overhead lamp and a contact shadow, which tilts into place as you scroll and actually starts a booking. Everything below is built from layered materials: cream panes in tan trays (double bezels), one dark heavy tile for the lead business (restaurants and bars), warm light that follows the pointer across tiles, brown-tinted shadows from a single light source, and dark "chapters" lit from above. Motion is physical and quiet: critically damped tilt on the portrait, one scrubbed scroll story per chapter, and a blur crossfade when you change the kind of space.

Page order: floating glass nav, hero with the survey pass, facts line, six business tiles plus homes, dark chapter (statement, five steps), survey explorer (`.pill` chips, then the checks for that space), owner section with portrait, real work (fireplace and hi-fi photos only, plus the install standard), both real Google reviews, booking form, footer.

## Skills loaded, and what each changed

| Skill | What it changed here |
|---|---|
| `high-end-visual-design` (lead) | Picked "Editorial Luxury" texture (cream, espresso, variable serif, fixed grain layer) and the asymmetric bento. Double-bezel shell plus core on every card, photo and form panel. Button-in-button arrow orb on the hero CTA. Floating pill nav with a two-line hamburger that morphs to an X and a full-screen glass menu with staggered links. Custom cubic-beziers only; reveals fade up with a 6px blur. |
| `anthropic-skills:apple-design` (lead) | The hero object (survey pass) presented like a product, lit from above with a contact shadow. Critically damped portrait tilt (no overshoot). Translucent nav as a separate floating layer with content scrolling under it; heavier, darker material for structure, lighter for interactive surfaces. `prefers-reduced-transparency` and `prefers-contrast` fallbacks. Size-specific tracking (tight display, neutral body). |
| `glass-dashboard-ui` | Dark glass navbar variant: inset from edges, links at about 70% cream going to full on hover, logo left, links centred, action right, folds into a menu button below 1100px. Glass kept to fixed layers only (nav, menu), never on scrolling cards. |
| `gpt-taste` | Wide H1 container so the headline holds two lines; exactly two hero CTAs; gapless bento with `grid-auto-flow: dense` (7+5 / 7+5 / 4+4+4 / 12); GSAP ScrollTrigger scrubbed word reveal on the dark statement and scale-in on work photos; no "SECTION 01" meta labels; `overflow-x: clip` on the page. |
| `ui-ux-pro-max` | Ran `--design-system` for a premium local contractor. Kept its checklist (44px targets, 4.5:1 text, focus states, reduced motion, 375 to 1440 breakpoints) and its "funnel" pattern (survey CTA repeated at each stage). Rejected its palette (green and orange) and Inter-only pairing because the brand tokens win. |
| `impeccable` | Ran `impeccable context` (no PRODUCT.md, existing visual system; treated DESIGN.md and tokens as authority), worked in Persuade mode, then ran `impeccable detect` at the end (results below). Bolder: the hero went from a centred headline to a lit physical object. Delight: pointer light on tiles, portrait glare. Polish: two-line headline check at every width. |
| `redesign-existing-projects` | Audit list drove fixes: no three equal columns (asymmetric bento and z-axis cascade instead), tinted shadows with one light direction, grain overlay, `text-wrap: balance/pretty`, sentence-case headings, skip link, semantic landmarks, no dead `#` buttons. |
| `superdesign:superdesign` | Loaded, but its CLI preflight (`npx @superdesign/cli`) was blocked by the session's permission classifier, so no Superdesign canvas drafts were made. |
| `anthropic-skills:emil-design-eng` | `scale(0.97)` press comes from the shared `.btn`; no `scale(0)` entrances; blur-bridged crossfade on the explorer panel (4px, 200ms); exit faster than enter on the menu; hover effects gated behind `(hover: hover) and (pointer: fine)`. |
| `motion-ui-patterns` | One loud element per surface (dark feature tile, dark survey pass, one primary button per block); nested radii (outer 24px, bezel 6px, inner 18px); UI motion 150 to 250ms; light from above, raise only what matters. |
| `anthropic-skills:animate` | Gate per animation: tile hover lift (tens per day, near-imperceptible 4px), explorer swap (state indication, 160 to 200ms), menu (occasional, 280 to 600ms), marketing reveals allowed to run longer. Transitions over keyframes everywhere. |
| `anthropic-skills:find-animation-opportunities` | Used as the filter: rejected a hero marquee, perpetual floating cards and a count-up on "18 years" (that would put "18" large). Kept the five moments listed above. |
| `anthropic-skills:animation-performance` | Only `transform`, `opacity` and small `filter` animate. Pointer light moves a dedicated element by `transform`, not a CSS variable on the card. Portrait tilt writes `style.transform` in rAF and stops when settled. `backdrop-filter` only on the two fixed layers. Animated blur kept at 6px or less. |
| `anthropic-skills:mobile-native` | `viewport-fit=cover` plus safe-area padding on nav, menu and footer; `-webkit-tap-highlight-color: transparent`; `touch-action: manipulation`; `user-select: none` on controls only; 16px fields (from `.field`); no hover styles on touch; zoom left enabled. |
| `accessibility` | Skip link, landmarks, `aria-pressed` on explorer chips, `aria-live` panel, `role="status"` on form messages, labels above every field, inline validation that names the missing field and focuses it, `inert` on page content while the menu is open, Escape closes the menu and returns focus, star rating has a text equivalent. |
| `tailwind-design-system` | Not Tailwind (static mockup), but applied its token hierarchy: every local value is a `color-mix()` of semantic tokens (`--hl`, `--shell`, `--lamp`, `--contact`); no raw hex in section styles. |
| `anthropic-skills:break-ui` | QA at 320, 390, 1024 and 1440px and at 200% root font size, cycling all seven explorer spaces and submitting the empty form. Found and fixed: "Please add your your name" validation copy; the explorer panel changed height between spaces (now a fixed minimum on desktop); the bento overflowed at 200% zoom (now `minmax(0, 1fr)` tracks and `overflow-wrap`); headlines ran to 3 or 4 lines at 320px (smaller sizes below 360px). |

## Skills excluded, and why

- `design-taste-frontend`, `design-taste-frontend-v1`, `design-taste-frontend-v2-experimental`: they ban shadows, glass, cards and eyebrows, which is this concept (contradiction C1).
- `minimalist-ui`: flat and quiet, the opposite of layered materials (C2).
- `industrial-brutalist-ui`: raw terminal style, contradicts the material direction (C2).
- `stitch-design-taste`: bans Inter; the brand keeps Inter (C3).

## Skills unavailable

- `imagegen-frontend-web`, `imagegen-frontend-mobile`, `image-to-code`: not loaded. No first-party image-generation tool is available to this agent; the generators visible in the session are third-party connectors (Canva, Adobe Firefly, IMG.LY) that need sign-in or credits, and any generated picture would break the client's "no AI photos presented as his work" rule anyway.
- `superdesign:superdesign`: loaded, but blocked at the CLI step (see above).

## Where skills lost to the hard rules or tokens

- `high-end-visual-design` and `gpt-taste` ban Inter and ask for Geist or Satoshi: the brand tokens use Inter, so Inter stays.
- `high-end-visual-design` wants eyebrow tags as tiny uppercase pills: every tag must be `.pill`, so eyebrows are plain sentence-case text with a gold rule instead.
- `gpt-taste` wants picsum/stock imagery: banned; only Mark's real photos are used.
- `glass-dashboard-ui` wants glass over a full-bleed photo: there is no real photo suitable for that, so glass is limited to the nav and menu.
- `ui-ux-pro-max` palette and fonts: replaced by the brand tokens.

## Content decisions

- Per the coordinator's correction, `dealership-display.jpg` is not used anywhere (Mark doesn't like it). The first draft used it as the hero product shot; it was replaced by the survey pass, and the work section now shows only the fireplace and hi-fi photos plus the install standard card.
- No found or stock photos are used, so no credits are needed.
- Facts used: 18 years installing AV, 5 years running managed IT, IT director by day, Richmond TX, reply within one business day, free 30 to 45 minute survey, TV mounting from $150. No insurance, licensing, access control, client names or invented numbers. "18" appears only at body size.
- Explorer checklists are the cost drivers from `src/data/industries.ts`; the home checklist is drawn from the site FAQ.
- The form is a mock: it validates and shows "Mockup only: nothing was sent." The hero pass carries the chosen space into the booking form.

## Known weaknesses

- Commercial-first copy, but both work photos are residential, because those are the only real install photos Mark is happy with. The page needs a commercial job photo.
- The hero object is a designed card, not a photograph; it reads as premium, but a real photo of a finished business install would be stronger.
- `impeccable detect` flags: low contrast on the dark feature tile (a false positive, it reads the light base gradient that the dark rule overrides; the screenshot shows cream on espresso), "cramped padding" on full-bleed sections (false positive; the container provides gutters), tight leading on display type (deliberate per DESIGN.md, 1.0 to 1.05) and a cream page background (brand-mandated).
- Screenshots are from headless Chrome. Hover light, portrait tilt, menu, the GSAP tilt-in and scroll scrubs were checked in code and with scripted interaction, not on a real phone. The full-page screenshots show the end state of scroll animations.
- On phones, switching explorer spaces still changes the panel height a little (the panel is the last thing in its section, so nothing important jumps).
- GSAP loads from cdnjs; offline, the page still works and the dimmed statement words fall back to full opacity.
