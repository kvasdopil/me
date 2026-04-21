# EP-002 - Maps and Data Visualization

Status: Completed (2026-04-21)

## Goal

Add interactive map visualizations to project pages using real geographic data.

## Features

All features below are implemented and live.

### FT-0020 Interactive maps with clustering

MapLibre GL maps on project pages. Supermarket clustering visualization — groups within 500m via Haversine, color-coded by operator (Coop/ICA/mixed), count labels on clusters.

### FT-0021 OSM data pipeline

CLI tool converts OpenStreetMap exports to optimized GeoJSON. Source data in `raw-data/`, processed output in `public/`. NL regions, NL cities, and Stockholm-area supermarket datasets.

## Future enhancements (unplanned)

- Additional data layers (population density, transport hubs)
- Interactive filtering by operator or cluster size
- Time-series animation, export functionality
