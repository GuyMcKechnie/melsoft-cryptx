# CryptX Dashboard

CryptX is a responsive, pixel-focused crypto asset dashboard built with React and Tailwind CSS. The UI follows the Figma design specification and showcases component-driven architecture, hardcoded data sources, and bespoke visual styling without third-party charting libraries.

## Tech Stack

-   React 19 with functional components and hooks
-   Tailwind CSS for all styling and responsive behaviour
-   Static SVG/Tailwind implementation for chart visuals
-   Hardcoded data modules for metrics, price timeline, and transactions

## Getting Started

```bash
npm install
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000).

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

-   `npm start` – run the development server
-   `npm run build` – create an optimized production build
-   `npm test` – execute the component test suite

## Design & Implementation Notes

-   Sidebar remains fixed on large screens and adapts to a compact navigation for small screens.
-   Metric cards, chart, and table consume static data via props to highlight reusable patterns.
-   The BTC price visual is a handcrafted SVG path styled entirely with Tailwind utilities.
-   Custom colour tokens, shadows, and typography are defined inside `tailwind.config.js` for fidelity.
