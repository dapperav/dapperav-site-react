/**
 * Pulls the business's Google reviews via the Places API (New) and writes
 * them to src/data/reviews.json. Run by .github/workflows/sync-reviews.yml
 * on a nightly schedule.
 *
 * Requires:
 *   - placeId set in src/data/reviews.json
 *   - GOOGLE_PLACES_API_KEY in the environment (repo secret in CI)
 *
 * Both missing → clean no-op so the workflow stays green until configured.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = new URL('../src/data/reviews.json', import.meta.url);
const current = JSON.parse(readFileSync(FILE, 'utf8'));
const apiKey = process.env.GOOGLE_PLACES_API_KEY;

if (!current.placeId) {
  console.log('reviews sync: placeId not set in src/data/reviews.json — skipping.');
  process.exit(0);
}
if (!apiKey) {
  console.log('reviews sync: GOOGLE_PLACES_API_KEY not set — skipping.');
  process.exit(0);
}

const res = await fetch(`https://places.googleapis.com/v1/places/${current.placeId}`, {
  headers: {
    'X-Goog-Api-Key': apiKey,
    'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
  },
});

if (!res.ok) {
  console.error(`reviews sync: Places API returned ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const place = await res.json();

const next = {
  placeId: current.placeId,
  rating: place.rating ?? null,
  total: place.userRatingCount ?? 0,
  updated: current.updated, // only bump when content actually changes
  reviews: (place.reviews ?? [])
    .filter((r) => r.rating >= 4 && r.text?.text) // show only strong, written reviews
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? 'Google user',
      rating: r.rating,
      text: r.text.text.trim(),
      when: r.relativePublishTimeDescription ?? '',
    })),
};

const changed =
  JSON.stringify({ ...current, updated: null }) !== JSON.stringify({ ...next, updated: null });

if (!changed) {
  console.log('reviews sync: no changes.');
  process.exit(0);
}

next.updated = new Date().toISOString();
writeFileSync(FILE, JSON.stringify(next, null, 2) + '\n');
console.log(`reviews sync: updated — ${next.reviews.length} reviews, ${next.rating}★ (${next.total} total).`);
