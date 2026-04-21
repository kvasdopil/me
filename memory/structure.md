# Repository Structure

Status: Active (2026-04-21)

Personal portfolio and CV website for Alexey Guskov, hosted at [guskov.dev](https://guskov.dev) via GitHub Pages.

Related documents:

- [Memory Bank index](index.md): Entry point for the full memory bank. Read this to navigate the system from the top.
- [Memory Bank principles](mbb/principles.md): Governing rules such as single source of truth and one file per concept. Read this before adding new docs so the structure does not decay.
- [Project specs](spec/project/index.md): Project-level context — conventions and constraints. Read this for non-obvious project rules.

## Key boundaries

- **Content** lives in `src/App.tsx` (homepage) and `src/projects/*.tsx` (project detail pages). All content is inline JSX — no CMS, no markdown rendering at runtime.
- **Reusable UI** lives in `src/components/`. `MainPage.tsx` owns homepage components; `PageComponents.tsx` owns project-page components.
- **Static assets** go in `public/`. Must be referenced with `import.meta.env.BASE_URL` prefix for GitHub Pages compatibility.
- **Map data pipeline**: raw GeoJSON in `raw-data/` → processed via `osm-to-geojson.js` → output in `public/`.
- **CV drafts** in `docs/` are standalone HTML/Markdown files, not rendered by the app.

## Memory bank boundaries

- `memory/spec/` is the source of truth for product and engineering requirements.
- `memory/adr/` is the source of truth for durable architectural and policy decisions.
- `memory/plans/` is the source of truth for delivery sequencing and verification planning.
- Code is the source of truth for implementation details.

## Placement rules

- Put stable behavior, invariants, and contracts in `spec/`.
- Put rationale and tradeoffs in `adr/`.
- Put execution sequence and acceptance checklists in `plans/`.
- Update the nearest `index.md` whenever you add, rename, split, or remove a document.
