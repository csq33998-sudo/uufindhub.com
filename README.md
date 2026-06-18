# UU Find Hub

Astro static guide and product curation site for UUfinds Spreadsheet, QC photo research, source links, and agent-ready shopping workflows.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static product data in `src/data/products.ts`
- Sitemap generation through `@astrojs/sitemap`

## Local Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

The site is configured for `https://uufindhub.com`. Update `site` in `astro.config.mjs` if the production domain changes.
