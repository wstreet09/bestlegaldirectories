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

Hostinger's Git deployment **does not run build commands**, so we use a two-branch setup:

- **`main`** — source code (clean, no build artifacts)
- **`production`** — built site only, files at the root, ready for Hostinger to serve

Hostinger pulls the `production` branch into `public_html/`. Done — no `.htaccess` tricks, no committed `dist/` in `main`.

### Hostinger one-time setup

In hPanel → **Websites** → your site → **Advanced** → **Git**, fill the form with:

| Field | Value |
|---|---|
| Repository URL | `https://github.com/wstreet09/bestlegaldirectories.git` |
| Branch | `production` |
| Directory | (leave blank) |

Click **Create**, then click **Deploy**. The site goes live.

### Updating the live site

```bash
# 1. Edit anything in src/, public/, or src/data/directories.ts on main
git add .
git commit -m "Your change"
git push origin main

# 2. Build, then publish to the production branch:
npm run deploy
```

The `npm run deploy` script (see `package.json`) builds and force-pushes the contents of `dist/` to the `production` branch as a single fresh commit. Then in Hostinger hPanel → Git → click **Deploy**.

### Optional: auto-deploy on push

Hostinger gives you a webhook URL when you click "Auto Deployment" on the connected repo. Copy that URL and add it as a webhook on the GitHub repo (`Settings` → `Webhooks` → `Add webhook`):

- **Payload URL**: the webhook URL Hostinger gave you
- **Content type**: `application/json`
- **Events**: just the push event
- **Active**: yes

After that, `npm run deploy` automatically triggers a Hostinger deploy without clicking anything.

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
