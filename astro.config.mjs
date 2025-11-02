// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  adapter: netlify({
    edgeMiddleware: false,
    imageCDN: true,
  }),
  integrations: [
    mdx(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],
  image: {
    domains: [],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});