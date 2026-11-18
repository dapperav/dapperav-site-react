# Design System: Dapper AV, concept 03 "Editorial restraint"

Concept-level rules for this mockup only. The brand rules in `design-system/DESIGN.md` and the values in
`design-system/tokens.css` / `components.css` sit above this file; where they disagree, they win.

## 1. Visual Theme & Atmosphere

A quiet, photo-led page laid out like an architecture practice's monograph: warm paper, one deep brown
ink, real photographs hung at uneven sizes on a 12-column grid you can feel but never see. Density 3
("gallery airy" between sections, full content inside them), variance 6 ("offset asymmetric": every edge
lands on a column line, offsets come from a small set of values), motion 4 ("fluid CSS": one masked
headline reveal on load, then quiet staggered entrances; nothing loops).
The idea: *dapper* means well dressed. The page is tailored the way the installs are: level lines, hidden
wiring, everything labeled. Every photograph carries a caption that says whose photo it is.

## 2. Color Palette & Roles

- **Paper** (#faf5ea) — page ground everywhere except two tone steps
- **Logo Cream** (#f2dfbb) — the one tone step: the Homes field and the survey panel; also pill fill
- **Logo Brown** (#531b0a) — all display type and running text (12.6:1 on paper)
- **Cocoa** (#6b4a33) — captions, install lists, secondary notes only (never running text)
- **Logo Gold** (#f1b71c) — the single accent: primary buttons and the selected pill. Nothing else
- **Gold Ink** (#7a5200) — the short dash before each survey checklist item
- **Roast** (#2a0c03) — footer ground behind the darkened last photograph
Banned: pure black, gradients, glows, any second accent, violet/blue.

## 3. Typography Rules

- **Display:** Fraunces, weight 600, tracking -0.03em, leading 1.0. Headlines two lines max at every width.
- **Body and UI:** Geist 400/500/600 (overrides the brand's Inter; `stitch-design-taste` bans Inter). 17px, leading 1.6, 34 to 42ch measures.
- **Scale (one page, eight steps incl. the button's fixed 16px):** display `--text-display`, h1 `--text-h1`, h2 `--text-h2`, h3 clamp(24px, 2.4vw, 36px), lead `--text-lead`, body 17, small 15. The footer wordmark is the only exception.
- No monospace, no eyebrow labels, no tiny tracked caps, no italic accent words.

## 4. Component Stylings

- **Buttons:** only `.btn` + `--primary | --secondary | --ghost` + `--sm | --lg` from components.css. Primary (gold) for "Book a free site survey", ghost for "Call (972) 824-1303". One label per intent across the whole page.
- **Pills:** `.pill` with a real radio input inside; on the cream panel the default fill steps to Paper so it reads, shape untouched. Selected = gold.
- **Cards:** none. The survey panel is the only rounded surface (`--radius-card`), a tone step, no border, no shadow.
- **Photographs:** square corners, one treatment (as shot), caption below in Cocoa naming the source. Found photos say "Not our photo/work" plus creator and licence.
- **Shadow:** only on the phone menu panel, which genuinely floats.

## 5. Layout Principles

12 columns, margins `max(--page-gutter, 5vw)`. Hero: stepped two-line title, portrait tucked under line one,
small place photo top right. Business rows hang from one axis at column 5 with install notes or photos in the
right margin. How-it-works falls down a diagonal. Neighbouring sections never share an arrangement.
Below 768px every section is single column, and the unevenness survives as alternating widths
(100%, 64% right, 78% left). No horizontal scroll at 390px (measured).

## 6. Motion & Interaction

Strong ease-out `cubic-bezier(0.23, 1, 0.32, 1)`. Headline lines rise from behind their own baseline
(900ms, second line +110ms); hero copy fades in after; portrait settles from scale 1.06. Section parts rise 24px
with opacity, staggered 70ms, once, via IntersectionObserver. Survey panel swaps with a 220ms rise. Buttons
press to 0.97 (components.css). Transform and opacity only. All of it sits behind
`prefers-reduced-motion: no-preference`; content is never hidden unless the script that reveals it has run.

## 7. Anti-Patterns (Banned)

Emoji; Inter; pure black; gradients and glows; glass or blur; shadows at rest; hairline rules and 1px outlined
boxes; three equal cards; eyebrows and 01/02/03 numbering; em dashes in copy; scroll cues; "18+" set large;
the vinyl record as a subject; found or AI photos presented as Mark's jobs; invented reviews, clients, stats,
insurance or licences; the dealership display photo (owner dislikes it).
