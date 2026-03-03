# Fenrir Security Dashboard

A security dashboard built with React 19, TypeScript, and Tailwind CSS.

## Features

- **Dynamic Theming**: Fully integrated Light and Dark modes with synchronization across all components.
- **Interactive Modals**: Reusable modal system for critical actions like starting new scans, exporting reports, and stopping active sessions.
- **Data Visualization**: Comprehensive scan tables, severity badges, and trend indicators.
- **Responsive Layout**: Optimized for both desktop and mobile viewing with a collapsible sidebar and fluid grid system.
- **Clean Architecture**: Centralized types, reusable icon/badge components, and a modular dummy data system for easy scaling.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend-design-challenge-amey-sawant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Project Structure

- `src/components/auth`: Authentication forms (Login, Signup).
- `src/components/dashboard`: Dashboard-specific UI elements (Sidebar, Topbar, Table, Stats, Modals).
- `src/components/icons`: Centralized reusable icons, badges, and status indicators.
- `src/dummy`: Centralized static data for the dashboard.
- `src/styles`: Global theme and CSS variables.
- `src/types`: All TypeScript interfaces and types.

## Known Limitations

- **Static Data**: All dashboard data and table entries are served from `src/dummy`. Integration with a real API is pending.

---
