# Portfolio

Modern personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Features

- Fast Vite dev/build setup
- Type-safe React with TypeScript
- Routing via React Router
- Data fetching/caching with TanStack Query
- Tailwind CSS + shadcn/ui + Radix primitives
- Reusable UI components and icons

## Tech Stack

- Vite 5
- React 18, React DOM
- TypeScript 5
- Tailwind CSS 3, tailwind-merge, tailwindcss-animate
- shadcn/ui components (Radix UI)
- React Router (`react-router-dom`)
- TanStack React Query
- Recharts (charts)
- Sonner (toasts)
- date-fns, lucide-react, zod

## Getting Started

Prerequisites:

- Node.js 18+ and npm

Install and run locally:

```sh
npm install
npm run dev
```

Build and preview production build:

```sh
npm run build
npm run preview
```

## Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run build:dev`: Development-mode build
- `npm run preview`: Preview built app locally
- `npm run lint`: Run ESLint

## Project Structure

- `src/main.tsx`: App bootstrap
- `src/App.tsx`: Providers and routes
- `src/pages/`: Route pages (`Index`, `NotFound`)
- `src/components/`: UI components and `ui/` primitives
- `src/hooks/`: Custom hooks
- `src/lib/`: Utilities
- `public/`: Static assets

## Styling and UI

- Tailwind is configured in `tailwind.config.ts` and `src/index.css`.
- shadcn/ui components live under `src/components/ui/` and are based on Radix UI.

## Routing

Routes are defined in `src/App.tsx` using `react-router-dom`.

## Notes on TypeScript Paths

The alias `@/*` maps to `src/*` (see `tsconfig.json` and Vite `resolve.alias`). Import like `@/components/Button`.

## Deployment

This is a static site. Any static host works (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages). Build with `npm run build` and deploy the `dist/` folder.

## License

MIT
