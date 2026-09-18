# Wei Dong — Game Programmer Portfolio

A bilingual English / Simplified Chinese portfolio presenting gameplay systems, rendering work, performance optimization, and commercial client engineering experience.

<img src="public/assets/icon/logo-transparent.png" alt="Wei Dong portfolio logo" width="120" />

[Portfolio](https://nooobad.com) · [GitHub Pages address](https://away1615.github.io)

## Features

- Project cards with technology tags and dedicated project-detail pages.
- Bilingual copy with language preference stored in local storage.
- Markdown-based technical write-ups and local project screenshots.
- Work/education history, grouped skills, and resume assets.
- Static output using Astro, TypeScript, and plain CSS.

![SkyFire Uprising project imagery included in the portfolio](public/assets/projects/skyfire-uprising/overview.webp)
*Example project media included in the site. This image shows project captures, not a screenshot of the website layout.*

## Local development

Use Node.js **22.12 or later** and the package-manager version declared in `package.json` (**pnpm 11.7.0**).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

| Command | Purpose |
| --- | --- |
| `pnpm check` | Astro / TypeScript diagnostics |
| `pnpm build` | Check and generate the static site |
| `pnpm preview` | Preview the production build locally |

## Content and source map

| Location | Purpose |
| --- | --- |
| [`src/data/portfolio.ts`](src/data/portfolio.ts) | Project metadata, experience, and skills |
| [`src/i18n/copy.ts`](src/i18n/copy.ts) | Shared English and Chinese copy |
| [`src/content/project-details/`](src/content/project-details/) | Localized project write-ups |
| [`src/pages/`](src/pages/) | Homepage, project index, and detail routes |
| [`src/components/`](src/components/) | Shared presentation components |
| [`src/scripts/site.ts`](src/scripts/site.ts) | Browser interactions and language persistence |
| [`src/styles/global.css`](src/styles/global.css) | Visual system and responsive layout |
| [`public/assets/`](public/assets/) | Project media, icons, and resume PDFs |

To update a project, edit its metadata in `portfolio.ts`, update the corresponding localized Markdown files, and place real screenshots in `public/assets/projects/`. Keep bilingual facts consistent and distinguish personal contributions from team scope.

## Deployment and checks

The repository is configured for GitHub Pages through [GitHub Actions](.github/workflows/deploy.yml), with the custom domain in [`public/CNAME`](public/CNAME) and Astro settings in [`astro.config.mjs`](astro.config.mjs). Pushing to `main` triggers the configured deployment workflow.

Before publishing, run the check/build commands, verify both languages and their persistence, inspect project navigation and resume links, and check desktop and narrow mobile layouts for overflow. 

See [`AGENTS.md`](AGENTS.md) for repository-specific workflow guidance. Some historical context there may lag the current source; use the source files above for current page structure and content.
