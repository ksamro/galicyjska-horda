import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://galicyjskahorda.pl',
  integrations: [sitemap()],
  output: 'static'
});
