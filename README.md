## Personal website

Portfolio and CV site for Alexey Guskov — [guskov.dev](https://guskov.dev).

Built with React 19, TypeScript, Vite 7, Tailwind CSS 4, MapLibre GL. Hosted on GitHub Pages.

### Quick start

```bash
npm ci
npm run dev
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

### Deployment

Push to `main` → GitHub Actions builds and deploys to Pages automatically.

For local testing with the Pages base path:

```bash
BASE_PATH=/me/ npm run build
```

### Content

- **Homepage**: Edit `src/App.tsx`
- **Project pages**: Edit files in `src/projects/`
- **Assets** (photo, CV PDF): Replace files in `public/`

### Documentation

Detailed project specs, architecture decisions, and plans live in `memory/`. See [memory/index.md](memory/index.md).

### Ideas

- More data, more texts
- Make it more fun and stand out — nice timeline, screenshots, links, 3D graphics
- Integrate a little game or interactive element
- Mobile-first improvements
- Pure terminal-like text website variant
