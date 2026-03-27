import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://pal-ball.com',
  output: 'hybrid',
  adapter: vercel({
    nodeVersion: '20.x',
  }),
  integrations: [],
});
