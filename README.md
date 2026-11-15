# Studio Ghibli Movies

A simple React web application that fetches and displays Studio Ghibli films from the [Ghibli API](https://ghibliapi.vercel.app/). Movie cards show each film's poster, title, and release year.

## Live Preview

## Available scripts

- `npm run dev` — start the Vite development server.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

## Built with

- React
- Vite
- [Ghibli API](https://ghibliapi.vercel.app/)

The API request is handled in `src/services/api.js`; the home page loads the films and renders them as movie cards.
