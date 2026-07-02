# Dapper AV Solutions — dapperav.com

Marketing site for Dapper AV Solutions, built with [Astro 5](https://astro.build) + Tailwind CSS 4.
Fully static, deployed to GitHub Pages.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `http://localhost:4321`        |
| `npm run build`   | Production build to `./dist`                 |
| `npm run preview` | Preview the production build locally         |

## Where things live

- **Business facts & copy** (phone, email, services, pricing, process, service areas): `src/data/site.ts`
- **Gallery projects**: `src/data/gallery.ts` — drop an image in `src/assets/`, import it, add an entry
- **Pages**: `src/pages/` (`index`, `services`, `work`, `quote`, `404`)
- **Design tokens** (logo-derived palette, fonts, motion): `src/styles/global.css`
- **Brand assets**: `src/assets/` (source images) and `public/` (favicons, manifest)

## Quote form

The Request a Quote form posts to [Web3Forms](https://web3forms.com), which emails
submissions to `contact@dapperav.com`. The access key lives in `src/data/site.ts`
(`WEB3FORMS_ACCESS_KEY`). It is a public-by-design key — it can only send mail TO the
registered inbox. If the key is left as the placeholder, the form shows an error with
direct phone/email contact instead of pretending to succeed.

Spam protection: hidden `botcheck` honeypot + Web3Forms server-side filtering.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch at
**dapperav.com** (via `public/CNAME` — don't delete it).

## Old routes

The previous CRA site's routes (`/contact`, `/portfolio`, `/pricing`, `/calculator`,
`/services/*`) redirect to their new equivalents via `astro.config.mjs`.
