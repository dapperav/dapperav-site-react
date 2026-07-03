// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dapperav.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Old CRA routes → new pages (static meta-refresh redirects)
  redirects: {
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
