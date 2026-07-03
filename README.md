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

## Google reviews (auto-synced)

`.github/workflows/sync-reviews.yml` runs nightly and pulls the business's Google
reviews into `src/data/reviews.json` via the Places API (New). The home-page
reviews section renders only when that file contains reviews. To activate:

1. Create the Google Business Profile and find the **Place ID**
   (https://developers.google.com/maps/documentation/places/web-service/place-id).
2. In Google Cloud Console: create a project, enable **Places API (New)**,
   create an API key restricted to that API.
3. Add the key as repo secret **`GOOGLE_PLACES_API_KEY`**
   (Settings → Secrets and variables → Actions).
4. Put the Place ID in `src/data/reviews.json` (`"placeId": "..."`).
5. Run the "Sync Google Reviews" workflow manually once (Actions tab) to test.

When reviews change, the workflow commits the data file to `main` and
publishes a fresh build itself (a `GITHUB_TOKEN` push can't trigger the normal
deploy workflow). Only 4–5-star written reviews are shown; Google's API
returns at most five reviews.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch at
**dapperav.com** (via `public/CNAME` — don't delete it).

## Old routes

The previous CRA site's routes (`/contact`, `/portfolio`, `/pricing`, `/calculator`,
`/services/*`) redirect to their new equivalents via `astro.config.mjs`.
