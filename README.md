# paas-sample-astro

Minimal **Astro** site for end-to-end testing the `paas` build & serve
pipeline.

## What this proves

A successful deploy proves the same surface as the React sample, but
through Astro's build pipeline:

- `paas` auto-detect saw `"astro"` in `package.json` and emitted the
  Node build → nginx serve Dockerfile (OUTDIR=`dist`).
- `astro build` succeeded inside Kaniko.
- Static HTML is served via nginx with SPA fallback.

The build-time timestamp baked into the page proves the build ran.
The client-side ticking clock proves the static HTML was successfully
served and the inline `<script>` executed.

## Local dev

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```
