# 🌍 My Travels

A collection of travel itineraries, built as a static website with [Astro](https://astro.build/). Each trip has its own country-themed design.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321/mytravel](http://localhost:4321/mytravel)

## Structure

- `/` — Dark minimalist landing page with links to all trips
- `/japan2026/` — Japan trip (Sep–Oct 2026) with Japanese-inspired design

## Pages Per Trip

Each trip section includes: Home, Itinerary, Restaurants, Bookings, Budget, Practical Info

## Adding a New Trip

1. Create content in `src/content/<trip-name>/` (markdown files)
2. Add collection to `src/content.config.ts`
3. Create pages in `src/pages/<trip-name>/`
4. Add a card to the landing page (`src/pages/index.astro`)
5. Optionally create a new theme in `TripLayout.astro` via props

## Tech Stack

- **Astro** — Static site generator
- **Content Collections** — Markdown-based content
- **Custom CSS** — Per-trip themed design systems
- **Google Fonts** — Playfair Display (landing), Noto Serif JP + Inter (Japan)

## Build

```bash
npm run build     # Outputs to dist/
npm run preview   # Preview the build
```
