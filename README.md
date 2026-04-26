# Best Legal Directories

A one-page editorial guide to the 10 best law firm web directories. Built with [Astro](https://astro.build) + Tailwind CSS v4. Static output, deployable anywhere.

Live site: <https://bestlegaldirectories.com>

## Local development

```bash
nvm use            # uses .nvmrc (Node 22)
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ for verification
```

## Editing the directory list

All 10 entries live in a single file:

- [`src/data/directories.ts`](src/data/directories.ts)

Change the order, descriptions, or URLs there and rebuild — the entire page (including the JSON-LD schema in `<head>`) updates from that one source.

## Deploying to Hostinger via Git

Hostinger's Git deployment **does not run build commands**, so the production-ready static site needs to be committed to the repo.

### One-time setup

1. **GitHub**: push this repo to GitHub (see "Pushing to GitHub" below).
2. **Hostinger hPanel** → **Websites** → your site → **Git**:
   - Connect the GitHub repository.
   - Set the branch to `main`.
   - Set the **Repository Path** to `/dist` (so Hostinger serves the built output, not the source).
   - If your Hostinger plan does not support a custom repository path, use the fallback below.

### Fallback (any Hostinger plan)

If you cannot set the repo path to `/dist`, add a one-line `.htaccess` rewrite at `public_html/.htaccess` that points the document root at `dist/`:

```apache
RewriteEngine On
RewriteRule ^$ /dist/index.html [L]
RewriteRule ^(.*)$ /dist/$1 [L]
```

### Updating the live site

```bash
# 1. Make changes to src/, public/, or src/data/directories.ts
# 2. Build the site
npm run build

# 3. Commit source AND the built dist/ folder
git add .
git commit -m "Update site"
git push origin main

# 4. In Hostinger hPanel → Git → click "Deploy"
```

> **Note**: `dist/` is ignored by `.gitignore` for clean local development. Before your first deploy, **remove `dist/` from `.gitignore`** so the built files are tracked. After that, every `npm run build` followed by `git push` ships a new version.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Best Legal Directories site"
gh repo create bestlegaldirectories --public --source=. --push
```

(Or create the repo manually on github.com and add the remote.)

## Project structure

```
src/
├── components/        # Hero, Intro, DirectoryCard, DirectoryList, Methodology, Footer, SiteHeader
├── data/
│   └── directories.ts # The 10 directories (single source of truth)
├── layouts/
│   └── BaseLayout.astro  # <head>, SEO, fonts, JSON-LD
├── pages/
│   └── index.astro    # The page
└── styles/
    └── global.css     # Tailwind v4 + theme tokens

public/
├── favicon.svg
└── robots.txt
```

## Stack

- **Astro 5** — static site generator
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin
- **Fraunces** + **Geist** + **Geist Mono** — fonts via Google Fonts
- **@astrojs/sitemap** — auto-generated sitemap
