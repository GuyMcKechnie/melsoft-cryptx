# CryptX Dashboard

CryptX is a responsive, pixel-focused crypto asset dashboard built with React and Tailwind CSS. The UI follows the Figma design specification and showcases component-driven architecture, data modules, and bespoke visual styling without third-party charting libraries.

## Tech Stack

-   React 19 with functional components running on Vite
-   Tailwind CSS for all styling and responsive behaviour
-   Lucide icons for navigation and status affordances
-   Dynamic SVG/Tailwind implementation for chart visuals (no charting libs)
-   Hardcoded data modules for metrics, ZAR-denominated price timeline, and transactions

## Getting Started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:5173](http://localhost:5173) by default.

## Project Structure

```text
src/
  assets/               # Brand assets and icons
  components/
    layout/             # High-level layout (Sidebar, Header, MainContent)
    ui/                 # Reusable UI pieces (MetricCard, ChartVisual, TransactionTable)
  data/                 # Hardcoded data sources for UI rendering
  App.jsx               # Root dashboard composition
  index.css             # Tailwind entry point + global styles
```

## Available Scripts

-   `npm run dev` – run the development server
-   `npm run build` – create an optimized production build
-   `npm test` – execute the component test suite

## Design & Implementation Notes

-   Sidebar remains fixed on large screens and adapts to a compact navigation for small screens.
-   Metric cards, chart, and table consume static data via props to highlight reusable patterns.
-   The BTC price visual generates an SVG path at runtime from timeline data, maintaining fidelity while remaining framework-agnostic.
-   Values are currently expressed in South African Rand (ZAR) within the data modules.
-   Custom colour tokens, shadows, and typography are defined inside `tailwind.config.js` for fidelity.
