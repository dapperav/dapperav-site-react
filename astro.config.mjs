// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dapperav.com',
  // GitHub Pages serves /services/ (directory index) and 301s /services to it, so canonical +
  // sitemap URLs must carry the trailing slash or every one of them points at a redirect.
  // 'ignore' (not 'always') keeps the existing slash-less internal links working in dev.
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Old CRA routes → new pages (static meta-refresh redirects)
  redirects: {
    // Short link for review requests (invoices, texts, QR stickers)
    '/review': 'https://search.google.com/local/writereview?placeid=ChIJu1Q7sb3Sk6gRbGDmkUJWSq4',
    // Briefly-published area pages outside the real service footprint
    '/areas/houston': '/',
    '/areas/cypress': '/areas/katy',
    '/areas/the-woodlands': '/',
    '/areas/spring': '/areas/katy',
    '/contact': '/quote',
    '/portfolio': '/work',
    '/pricing': '/services',
    '/calculator': '/quote',
    '/services/home-theater': '/services',
    '/services/smart-home': '/services',
  },
});
