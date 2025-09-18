## Personal website

Hosted via GitHub Pages.

### Homepage

The front page is an interactive portfolio built in React + TypeScript that showcases:

- **Personal Profile**: Name, title, location, email, and phone
- **Professional Summary**: Skills and experience overview
- **Interactive Timeline**: Employment history with detailed project information
- **Project Deep Dives**: Click "more..." links to explore detailed project pages
- **Technology Tags**: Visual representation of tech stacks
- **Profile Photo**: From `public/photo.jpeg`
- **Social Links**: GitHub profile and downloadable CV PDF

The timeline highlights projects with detailed descriptions, and users can click "more..." links to navigate to dedicated project pages with full technical details.

Update content by editing `src/App.tsx` and project files in `src/projects/`. Replace assets by updating files in `public/` with the same names.

Asset paths should respect the Vite base path (GitHub Pages serves under `/<repo>/`). In components, prefer prefixing public assets with `import.meta.env.BASE_URL`:

```tsx
const base = import.meta.env.BASE_URL;
<img src={base + "photo.jpeg"} alt="Photo" />
<a href={base + "cv-guskov-2025.pdf"} target="_blank" rel="noreferrer">Download CV</a>
```

### Project Pages

Dedicated project pages provide in-depth information about specific work experiences:

- **Fleet Management Dashboard**: Internal tools for monitoring parcel lockers with real-time data visualization and interactive map showing supermarket clustering
- **Geospatial Ranking**: Automated ranking system using OpenStreetMap data for improved logistics

Each project page includes:

- Project title and company information
- Detailed technical descriptions
- Technology stack with visual tags
- Implementation details and challenges solved
- Performance optimizations and outcomes
- **Interactive Maps**: Real-time visualization of geographic data with clustering

#### 🗺️ **Map Visualization Features**

The Fleet Management Dashboard includes advanced map functionality:

- **OSM Data Integration**: Processes OpenStreetMap supermarket data into clustered GeoJSON
- **Smart Clustering**: Groups nearby supermarkets within 500m radius using Haversine distance calculation
- **Color-Coded Operators**:
  - 🟢 **Green**: Coop supermarkets
  - 🔴 **Red**: ICA supermarkets
  - 🟠 **Orange**: Mixed clusters (both operators)
- **Interactive Labels**: Count numbers displayed on cluster centers
- **Data Processing**: CLI tools for converting OSM JSON to optimized GeoJSON

Project pages are self-contained components in `src/projects/` directory, each managing its own content and metadata.

### App Structure

```
src/
├── components/
│   ├── PageComponents.tsx     # Reusable UI components (Header, Content, Section, Tag)
│   ├── MapBackground.tsx      # Interactive map component with clustering
│   ├── BackButton.tsx         # Reusable navigation button
│   └── Tag.tsx               # Technology tag component
├── projects/
│   ├── InstabeeFleetDashboard.tsx    # Fleet dashboard with map visualization
│   ├── InstabeeGeospatialRanking.tsx # Geospatial ranking project page
│   └── index.ts                      # Project exports
├── utils/
│   └── osmToGeoJson.ts        # OSM data processing and clustering utilities
├── App.tsx                   # Main application with timeline
├── main.tsx                  # App entry point with routing
└── index.css                 # Global styles
public/
├── supermarkets.geojson      # Processed supermarket clustering data
└── [other assets...]
```

### Features

#### 🎯 **Interactive Timeline**

- Visual employment history with color-coded periods
- Clickable "more..." links for projects with detailed information
- Responsive design that works on mobile and desktop
- Smooth hover effects and transitions

#### 📄 **Project Deep Dives**

- Dedicated pages for complex projects
- Technical implementation details
- Technology stack visualization
- Performance metrics and outcomes

#### 🗺️ **Interactive Maps & Data Visualization**

- **MapLibre GL Integration**: High-performance web mapping with vector tiles
- **Real-time Clustering**: Dynamic grouping of geographic data points
- **OSM Data Processing**: Automated conversion of OpenStreetMap data to GeoJSON
- **Color-coded Visualization**: Operator-based styling for market analysis
- **Distance Calculations**: Haversine formula for accurate geographic clustering
- **CLI Data Tools**: Command-line utilities for data processing workflows

#### 🎨 **Modern UI/UX**

- Clean, professional design with Tailwind CSS
- Consistent typography and spacing
- Smooth animations and hover states
- Mobile-responsive layout

#### 🔧 **Technical Features**

- **React Router**: Client-side routing for project pages
- **Lazy Loading**: Optimized bundle splitting for project components
- **TypeScript**: Full type safety throughout the application
- **SEO-Friendly**: HTML links for better search engine indexing
- **Base Path Support**: Works correctly on GitHub Pages subdirectories

#### 📱 **Responsive Design**

- Mobile-first approach with responsive breakpoints
- Optimized layouts for different screen sizes
- Touch-friendly interactions

### Stack

- **Build**: Vite + React + TypeScript
- **Mapping**: MapLibre GL JS for interactive web maps
- **Data Processing**: Custom OSM to GeoJSON conversion utilities
- **Geographic Calculations**: Haversine distance formula for clustering
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

1. Install dependencies: `npm ci` (or `npm install`)
2. Start dev server: `npm run dev`
3. Open the app at the URL printed by Vite

#### **Content Management**

- **Main Profile**: Edit `src/App.tsx` for personal information, skills, and timeline
- **Project Pages**: Edit files in `src/projects/` for detailed project content
- **Assets**: Update files in `public/` (photo, CV PDF, etc.)
- **Styling**: Modify Tailwind classes in components for visual changes

#### **Adding New Projects**

1. Create a new file in `src/projects/YourProjectName.tsx`
2. Use the `Page` components for consistent styling
3. Add the project ID to the timeline in `src/App.tsx`
4. Update the router in `src/components/Project.tsx`

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

1. In GitHub → Settings → Pages, set Source to "GitHub Actions".
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

## 🗺️ **Mapping & Data Features** ✅

**Implemented:**

- Interactive map with supermarket clustering visualization
- OSM data processing pipeline with CLI tools
- Color-coded operator analysis (Coop/ICA market competition)
- Real-time geographic clustering with count labels
- Data-driven styling and performance optimizations

**Future Enhancements:**

- Additional data layers (population density, transport hubs)
- Interactive filtering by operator or cluster size
- Time-series animation of market expansion
- Export functionality for processed datasets
- Integration with more OSM data types
