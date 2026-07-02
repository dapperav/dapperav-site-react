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
    '/contact': '/quote',
    '/portfolio': '/work',
    '/pricing': '/services',
    '/calculator': '/quote',
    '/services/home-theater': '/services',
    '/services/smart-home': '/services',
  },
});
