## Personal website

Hosted via GitHub Pages.

### Homepage

The front page is a static profile built in `src/App.tsx` that shows:

- Name, title, location, email, and phone
- Profile photo from `public/photo.jpeg`
- Link to GitHub profile
- Link to CV PDF at `public/cv-guskov-2025.pdf`

Update content by editing `src/App.tsx`. Replace assets by updating the files in `public/` with the same names or adjust the filenames and links accordingly.

Asset paths should respect the Vite base path (GitHub Pages serves under `/<repo>/`). In components, prefer prefixing public assets with `import.meta.env.BASE_URL`:

```tsx
const base = import.meta.env.BASE_URL;
<img src={base + "photo.jpeg"} alt="Photo" />
<a href={base + "cv-guskov-2025.pdf"} target="_blank" rel="noreferrer">Download CV</a>
```

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

## Ideas

- more data, more texts
- need to make it more fun and stand out
  - nice and beautiful timeline, showing all my projects, hobbies, telling more about projects i've been working on (screenshots, links)
  - integrate a little game or smth
  - nice hires photo or image to get attention
  - something really nice, like 3d graphics
- mobile version!
- pure terminal-like text website with emojis, super nerdy stuff!
