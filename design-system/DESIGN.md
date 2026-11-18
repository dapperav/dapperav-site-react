# Design System: Dapper AV Solutions

Brand guidelines and the rules every page and mockup follows. Values live in
`design-system/tokens.css`; buttons, pills and fields live in `design-system/components.css`.
Verified against the real logo file on 2026-11-18.

## 0. What the brand is

Owner-operated commercial AV and managed IT installer in Richmond, Texas (Fort Bend County).
One person, Mark Immler, surveys, installs and supports: 18 years installing AV, 5 years running
managed IT, IT director by day. Commercial work comes first (restaurants and bars, offices,
retail, signage, business Wi-Fi, cabling); homes second (TV mounting from $150, theaters, audio).

**Core idea:** *dapper* means well-dressed and precise. The brand promise is the tailored
install: level, hidden wires, labeled cables, one accountable person.
**Name origin and motif:** the roundel logo reads like a record label. Treat the vinyl as an
**accent only** (a groove ring, the logo itself). It must never become the subject of a page:
blown up, it reads as a music store (Mark, 2026-11-18).

## 1. Visual Theme & Atmosphere

Warm, tailored, confident. Dark espresso fields and warm cream paper, one gold accent,
a characterful serif for headlines. Density 4 (balanced), variance 6 (offset, not chaotic),
motion 5 (fluid, purposeful, never perpetual).

## 2. Color Palette & Roles (logo-verified)

| Name | Hex | Role |
|---|---|---|
| **Logo Brown** | `#531b0a` | Primary ink on light grounds (12.6:1 on paper); main dark field |
| **Deep Espresso** | `#3b1005` | Alternate dark field, hover on dark buttons |
| **Roast** | `#2a0c03` | Deepest field: footer, overlays |
| **Logo Gold** | `#f1b71c` | The ONE accent: primary buttons, selected pills, highlights on dark |
| **Gold Hover** | `#f6c94e` | Hover state of gold fills only |
| **Gold Ink** | `#7a5200` | Gold as *text* on light grounds (≥5.2:1); never as a fill |
| **Logo Cream** | `#f2dfbb` | Warm light field, alt sections, pill backgrounds |
| **Light Cream** | `#f7f0e0` | Text on dark fields (12.1:1 on Logo Brown) |
| **Paper** | `#faf5ea` | Default page ground |
| **Cocoa** | `#6b4a33` | Secondary text on light grounds (≥6:1); never on gold |
| **Tan Line** | `#e7cfa1` | Form-field borders and hairlines on light |

Corrections from the old tokens: the site used `#3b1005` as "logo brown" (the logo is `#531b0a`),
`#f0b010` as gold (logo `#f1b71c`) and `#f7f0e0` as "logo cream" (logo `#f2dfbb`).

Rules: one accent (gold). Gold text only via Gold Ink. No pure black, no purple/blue, no neon glow.

## 3. Typography Rules

- **Display:** Fraunces (variable serif). Tracking −0.03em, leading 1.0–1.05, weight 600.
  Headlines two lines maximum at every width.
- **Body and UI:** Inter (variable). 16–17px, leading 1.6, 45–70 characters per line.
- Five sizes on a page: display, h1, h2, lead, body (+ small for captions). Tokens `--text-*`.
- Note: `stitch-design-taste` bans Inter. The brand keeps Inter. Mockups that follow stitch
  swap the body face and are labeled as such (see `mockups/README.md`).

## 4. Component Stylings (tokens: `--btn-*`, `--pill-*`, `--field-*`)

- **Buttons — one shape everywhere:** fully round (`--radius-control`). Three variants only:
  *primary* (gold fill, brown text), *secondary* (brown fill, cream text), *ghost* (transparent,
  1.5px current-color border). Three sizes only: sm 44px, md 48px, lg 56px tall. Press = scale
  0.97. Hover = one tone lighter. No gradients, no glow, no sheen.
- **Pills (chips, filters, tags):** same full-round shape. 44px tall when interactive, 32px when
  static. Default Logo Cream fill; selected = gold fill with brown text.
- **Cards and media:** one radius, `--radius-card` (24px). Shadow only when something truly
  floats (`--shadow-1/2`, brown-tinted).
- **Fields:** label above, 48px tall, `--radius-field` (12px), 16px text, gold focus ring.

Before: the original site had nine different button/pill size combinations, four radii and six
shadow strengths. After: three button sizes, two pill heights, three radii, two shadows.

## 5. Layout Principles

Max width 80rem, gutters `--page-gutter`. Sections separated by `--section-y`. Single column
below 768px, no horizontal scroll, 44px minimum touch targets. One idea per section.

## 6. Motion & Interaction

Ease-out for entrances (`--ease-out`), a light spring only on press/hover feedback
(`--ease-spring`). Transform and opacity only. Nothing loops forever without a pause.
Everything respects `prefers-reduced-motion`.

## 7. Anti-Patterns (banned on this brand)

- The record or any vinyl motif as the main subject of a page.
- Numbers that read wrong out of context (big "18+" next to "Side A" read as adult-only).
- AI-made or stock photos presented as Dapper AV jobs. Found pictures must be credited and
  labeled as not ours.
- Fabricated reviews, clients, statistics or certifications. Not insured / not DPS-licensed:
  never imply either.
- Per-page button or pill styling. Use the components.
- Pure black, neon glows, purple/blue AI gradients, emoji.
