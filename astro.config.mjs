import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://crowdinblue.org',
  base: '/',
  output: 'static',
  build: {
    // Generate assets with content hashing for better caching
    assets: 'assets',
  },
  server: {
    host: true
  }
});
