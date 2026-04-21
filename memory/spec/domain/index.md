# Domain Specs - Index

Status: Active (2026-04-21)

This section captures content model constraints and design intent for the portfolio site — things not obvious from reading the components alone. For actual page structure, props, and routes, read the code (`src/App.tsx`, `src/main.tsx`, `src/components/MainPage.tsx`).

Related documents:

- [Specifications index](../index.md): Parent catalog for all normative docs. Read this to navigate between project, domain, and testing specs.
- [Repository structure](../../structure.md): High-level repo layout and section boundaries. Read this when deciding whether a new concept belongs in domain specs or elsewhere.

## Content model intent

- The homepage is a single scrollable page combining CV-like sections (header, skills, timeline, education, languages, hobbies). It doubles as a printable-ish portfolio.
- The timeline is the central element — it tells a career story, not just lists jobs. Entries alternate left/right, can be paired side-by-side, and hobby projects get visually distinct gradient cards.
- Project detail pages are self-contained deep dives linked from the timeline. They should feel like standalone mini-articles.
- Map visualizations on some project pages use real geographic data (GeoJSON) to demonstrate technical work, not just decorate.

## Design constraints

- No external data fetching at runtime — everything is static or bundled.
- Adding a new project page requires: creating a component in `src/projects/`, adding a route in `src/main.tsx`, and linking from the timeline in `src/App.tsx`.
