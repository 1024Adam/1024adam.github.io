# 1024adam.github.io

Adam Reid's personal website and developer portfolio hosted on GitHub Pages: [1024adam.github.io](https://1024adam.github.io).

## Architecture & Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation, strict 0 kB client JS)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript (strict mode)
- **Content**: Astro Content Layer with Zod schemas (`src/content.config.ts`)
- **SEO & Sitemaps**: [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- **CI/CD**: GitHub Actions deploying to GitHub Pages (`.github/workflows/deploy.yml` on `master`)
- **Theme**: Native Dark Mode (`#0D1117` obsidian canvas, zero light mode toggle / zero FOUC)

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Type check
npm run check

# Build production static site
npm run build

# Preview build output
npm run preview
```
