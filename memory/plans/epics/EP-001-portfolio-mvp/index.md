# EP-001 - Portfolio Site MVP

Status: Completed (2026-04-21)

## Goal

Ship a personal portfolio site that serves as both a public-facing CV and a showcase of project work.

## Features

All features below are implemented and live.

### FT-0001 Homepage

Single scrollable page with profile header, skills, interactive career timeline, education, languages, hobbies. Fixed TOC nav on desktop. Responsive — collapses to single column on mobile.

### FT-0002 Interactive timeline

Color-coded career timeline with left/right alternating layout. Supports badges (startup/consultant/hobby), tech tags, paired items, and links to project detail pages. Hobby entries get gradient card styling.

### FT-0003 Project detail pages

Self-contained deep-dive pages for five projects (Instabee Fleet Dashboard, Instabee Geospatial Ranking, Robot Arm, TgAgent, UI Generator). Linked from timeline.

### FT-0004 Routing and deployment

React Router SPA with GitHub Pages compatibility (404.html + sessionStorage redirect). CI workflow: lint → build with BASE_PATH → deploy to Pages. Downloadable CV at `/cv`.
