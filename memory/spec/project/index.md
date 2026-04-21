# Project Specs - Index

Status: Active (2026-04-21)

This section captures project-wide conventions and constraints not obvious from the code alone. For stack details see `package.json`; for deployment details see `.github/workflows/ci.yml` and `vite.config.ts`.

Related documents:

- [Repository structure](../../structure.md): High-level repo layout and document placement rules. Read this when mapping a new concept to the right section.
- [Specifications index](../index.md): Parent catalog for spec docs. Read this to navigate the rest of the normative documentation.
- [Domain specs](../domain/index.md): Content model constraints. Read this for content-level concepts.

## Project overview

Personal portfolio / CV website for Alexey Guskov. Single-page app with project detail pages. Hosted at [guskov.dev](https://guskov.dev).

## Conventions and constraints

- Public assets must be referenced with `import.meta.env.BASE_URL` prefix — GitHub Pages serves under a subpath.
- SPA routing on GitHub Pages relies on `public/404.html` redirecting via `sessionStorage`. This is fragile; don't add server-side logic that assumes a real server.
- All content is inline in React components. No CMS, no markdown rendering, no data files for content.
- Quality gates: `npm run lint` and `npm run format` before merging.
