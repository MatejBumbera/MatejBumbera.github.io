# Matej Bumbera — Personal Portfolio

A clean, modern single-page portfolio website built for performance and elegant design. 
This portfolio showcases my background as a Full-Stack Developer and Database Administrator, built with a "warm dark mode" aesthetic.

## Tech Stack
- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Features
- **Performant & Static:** Optimized for static hosting via GitHub Pages with a lightweight bundle.
- **Modern Aesthetic:** Custom deep crimson, copper, and warm espresso color palette with smooth CSS transitions and a subtle grid background.
- **Clean Architecture:** Content data is fully decoupled from the UI components (`src/data/index.tsx`), making it extremely simple to update roles, skills, and projects over time.

## Local Development

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This repository is pre-configured for GitHub Pages deployment. The `vite.config.ts` sets the `base` path to `/portfolio/`. If you deploy it to a top-level domain or a different repository name, update `base` in `vite.config.ts`.

To build the project:
```bash
npm run build
```
This generates the optimized production static files in the `dist/` directory.

## License
MIT License. Feel free to fork and use this template for your own portfolio.
