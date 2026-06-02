import { defineConfig } from 'astro/config';

// Astro emits to ./dist/ by default — matches the OUTDIR the paas
// auto-detect script looks for when it sees "astro" in package.json.
// Output mode 'static' is the default and what the nginx serve
// stage expects (no SSR server needed).
export default defineConfig({
  output: 'static',
});
