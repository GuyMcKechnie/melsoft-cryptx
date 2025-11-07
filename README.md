# CryptX Dashboard

A modern, responsive cryptocurrency asset dashboard built with React 19 and Tailwind CSS. CryptX provides real-time market insights, transaction tracking, and performance analytics with a clean, pixel-perfect UI designed for optimal user experience.

## Features

-   **Live Market Data** – Real-time cryptocurrency price tracking with visual sparklines
-   **Portfolio Metrics** – Track total balance, revenue, and assets at a glance
-   **Interactive Charts** – Custom SVG-based BTC price visualization without third-party libraries
-   **Transaction History** – Comprehensive transaction table with status indicators
-   **Responsive Design** – Fully responsive layout optimized for desktop and mobile
-   **Component Architecture** – Modular, reusable React components following best practices

## Tech Stack

-   **React 19** – Latest React with functional components and hooks
-   **Vite 5.4** – Next-generation frontend tooling for blazing-fast development
-   **Tailwind CSS 3.4** – Utility-first CSS framework for rapid UI development
-   **Lucide React** – Beautiful, consistent icon library
-   **Custom SVG Charts** – Bespoke data visualization without heavy charting dependencies

## Installation

```bash
# Clone the repository
git clone https://github.com/GuyMcKechnie/melsoft-cryptx.git

# Navigate to project directory
cd melsoft-cryptx

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start Vite development server with hot module replacement |
| `npm run build`   | Create optimized production build                         |
| `npm run preview` | Preview production build locally                          |

## Project Structure

```text
melsoft-cryptx/
├── public/
│   └── robots.txt              # SEO crawler instructions
├── src/
│   ├── assets/                 # Static assets (icons, images)
│   │   ├── btc.png
│   │   ├── cardano.png
│   │   ├── eth.png
│   │   └── lite.png
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.jsx      # Top navigation and user controls
│   │   │   ├── MainContent.jsx # Main dashboard content area
│   │   │   └── Sidebar.jsx     # Navigation sidebar
│   │   └── ui/                 # Reusable UI components
│   │       ├── ChartVisual.jsx       # BTC price chart visualization
│   │       ├── LiveMarketCard.jsx    # Crypto market card with sparkline
│   │       ├── MetricCard.jsx        # Dashboard metric display
│   │       └── TransactionTable.jsx  # Transaction history table
│   ├── data/                   # Static data modules
│   │   ├── chartStaticData.js  # BTC chart timeline and labels
│   │   └── transactionData.js  # Market data and transactions
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind customization
├── vite.config.js              # Vite build configuration
└── README.md                   # This file
```

## Design Philosophy

### Component-Driven Architecture

Each UI element is built as a standalone, reusable component with clear props interfaces, making the codebase maintainable and scalable.

### Custom Visualizations

Rather than relying on heavy charting libraries, CryptX implements lightweight SVG-based visualizations that render dynamically from data, ensuring fast load times and complete styling control.

### Responsive First

The dashboard adapts seamlessly across devices:

-   **Desktop** – Full sidebar navigation with expanded metrics
-   **Tablet** – Optimized grid layouts
-   **Mobile** – Compact navigation and stacked components

### Tailwind Customization

Custom design tokens defined in `tailwind.config.js`:

-   Color palette matching brand identity
-   Typography scale for hierarchy
-   Custom shadows and spacing
-   Responsive breakpoints

## Configuration Files

-   **`vite.config.js`** – Vite build and dev server settings with React plugin
-   **`tailwind.config.js`** – Custom Tailwind theme and utilities
-   **`postcss.config.js`** – PostCSS plugins including Tailwind and Autoprefixer

## Data Management

Currently uses static data modules for demonstration:

-   **Market Data** – Live crypto prices and sparkline data in `transactionData.js`
-   **Chart Timeline** – BTC price history in `chartStaticData.js`
-   **Transaction Records** – Sample transaction history with status tracking

_Note: These can be easily replaced with API calls to live cryptocurrency data sources._
