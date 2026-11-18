# Dapper AV mockups (2026-11-18)

Static homepage mockups for Mark to choose from. **Nothing here is on the live site.**
Every mock uses `design-system/tokens.css` and `design-system/components.css`, so every button,
pill and field is identical across all of them (three button sizes, two pill heights, one shape).
Brand guidelines: `design-system/DESIGN.md`. Brand board: `brand-board/board.png`.

## Where the skills contradict each other

| # | Contradiction | Skills on each side |
|---|---|---|
| C1 | Ornament ban vs. depth and materials | `design-taste-frontend` (all 3 versions) ban shadows, glass, cards, eyebrows ⟂ `high-end-visual-design`, `anthropic-skills:apple-design`, `glass-dashboard-ui` call for them |
| C2 | Style direction | `minimalist-ui` (flat, quiet) ⟂ `industrial-brutalist-ui` (raw, terminal) ⟂ `glass-dashboard-ui` (frosted glass) |
| C3 | Body font | `stitch-design-taste` bans Inter ⟂ the brand uses Inter |
| C4 | Motion intensity | `gpt-taste` (heavy pinned scroll animation) ⟂ `minimalist-ui` / `design-taste-frontend` restraint |

## The mocks (each uses every design skill except the ones listed as excluded)

| Folder | Concept | Excluded skills (and why) |
|---|---|---|
| `01-original-remastered` | Mark's original design (glass, pinstripe, roundel nav, record-sleeve gallery), remastered | design-taste-frontend ×3 (C1), minimalist-ui + industrial-brutalist-ui (C2), stitch-design-taste (C3) |
| `02-material-depth` | New: Apple-grade depth, light and materials | design-taste-frontend ×3 (C1), minimalist-ui + industrial-brutalist-ui (C2), stitch-design-taste (C3) |
| `03-editorial-restraint` | New: quiet editorial, photo-led (body font swapped per stitch) | high-end-visual-design, apple-design, glass-dashboard-ui (C1, C2), industrial-brutalist-ui (C2), gpt-taste (C4) |
| `04-industrial` | New: the trade itself — cabling, labels, racks, spec sheets | minimalist-ui, apple-design, glass-dashboard-ui, high-end-visual-design (C2), design-taste-frontend ×3 (bans its monospace and rules), stitch-design-taste (C3) |
| `05-motion-showcase` | New: AIDA story with tile grid and scroll choreography | design-taste-frontend ×3 (C1, C4), minimalist-ui + industrial-brutalist-ui (C2), stitch-design-taste (C3) |

Skills that need something we don't have are reported in each mock's README:
`figma` (needs sign-in via /mcp), `imagegen-frontend-web` / `imagegen-frontend-mobile` /
`image-to-code` (need an image-generation tool).
