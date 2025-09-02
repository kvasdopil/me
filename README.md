## Personal website

Hosted via GitHub Pages.

### Stack

- **Build**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Quality**: ESLint (flat config) + Prettier
- **Icons**: `react-icons`

### Requirements

- Node.js 22.x (matches CI)
- npm 10+

### Scripts

- **dev**: `npm run dev` — start local dev server
- **build**: `npm run build` — type-check and build to `dist/`
- **preview**: `npm run preview` — preview the production build
- **lint**: `npm run lint` — run ESLint
- **lint:fix**: `npm run lint:fix` — fix fixable ESLint issues
- **format**: `npm run format` — format with Prettier
- **format:check**: `npm run format:check` — check formatting

### Development

1. Install deps: `npm ci` (or `npm install`)
2. Start dev server: `npm run dev`

Open the app at the URL printed by Vite. Static assets in `public/` are served at the root (e.g. `/cv-guskov-2025.pdf`).

### Build & Preview locally

```bash
npm run build
npm run preview
```

To test a non-root base path (like on GitHub Pages):

```bash
BASE_PATH=/me/ npm run build
```

### Deployment (GitHub Pages)

This repo contains a workflow at `.github/workflows/ci.yml` that:

- Lints (`npm run lint`)
- Builds with `BASE_PATH=/<repo>/` (so assets resolve under `/REPO_NAME/`)
- Uploads the `dist/` artifact and deploys to GitHub Pages

Setup steps:

1. In GitHub → Settings → Pages, set Source to “GitHub Actions”.
2. Push to `main`. The workflow will build and deploy automatically.
3. Your site will be available at `https://<username>.github.io/<repo>/`.

Notes:

- Vite `base` is configured in `vite.config.ts` to read `process.env.BASE_PATH` (defaults to `/`).
- The workflow sets `BASE_PATH=/${{ github.event.repository.name }}/` for correct asset paths on Pages.
