// Renders dapperav-cover.html to a 1640x624 PNG (and a JPEG for upload) with Playwright + Edge.
// Usage: node brand-assets/cover/render.mjs   (Playwright from the global @playwright/cli install)
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const pw = process.env.PLAYWRIGHT ?? 'file:///C:/Users/MarkImmler/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright/index.mjs';
const { chromium } = await import(pw);
const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch({ channel: 'msedge' });
const p = await (await b.newContext({ viewport: { width: 820, height: 312 }, deviceScaleFactor: 2 })).newPage();
// Facebook version, then a Nextdoor version with the words higher (Nextdoor overlays the bottom-left)
for (const [query, name] of [['', 'dapperav-cover-1640'], ['?nextdoor', 'dapperav-cover-nextdoor-1640']]) {
  await p.goto(pathToFileURL(path.join(here, 'dapperav-cover.html')).href + query, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(here, `${name}.png`) });
  await p.screenshot({ path: path.join(here, `${name}.jpg`), type: 'jpeg', quality: 90 });
}
await b.close();
console.log('rendered', path.join(here, 'dapperav-cover-1640.png'));
