# For Dhvani ❤️

A one-page, scrollable "story" site — built with React, Vite, Tailwind CSS, and Framer Motion.

## What's inside

Each section lives in its own folder under `src/components/`, in the order they appear on the page:

1. **Intro** — cinematic starfield, typewriter intro
2. **LoveLetter** — animated envelope that unfolds into a letter
3. **Timeline** — your memories, as tilting cards
4. **ReasonsGrid** — 50 flip cards, one reason each
5. **DistanceSection** — two glowing points connected across the distance
6. **MiniGame** — catch-the-falling-hearts game with unlockable messages
7. **PromiseCards** — flip cards with promises
8. **FutureCarousel** — draggable carousel of future plans
9. **Constellation** — clickable stars hiding secret messages
10. **VirtualHug** — the "Hug Me" button
11. **Ending** — the finale, with the big "I Love You" moment

Shared ambient effects (fireflies, floating hearts, sparkles, cursor glow, confetti/fireworks helpers) live in `src/components/shared/`.

There's also a tiny hidden easter egg in the footer — click the little star (✦) five times.

## Running it locally

You'll need [Node.js](https://nodejs.org) (version 18 or newer) installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Customizing it

- **Her name**: change `HER_NAME` at the top of `src/App.jsx` — it flows through the intro and ending automatically.
- **The love letter**: edit `letterParagraphs` in `src/components/LoveLetter/LoveLetter.jsx`.
- **Memories/photos**: edit `src/data/memories.js`. Drop your photos into `public/images/` and set each memory's `image` field to e.g. `'/images/first-date.jpg'`.
- **The 50 reasons**: edit `src/data/reasons.js` — add, remove, or reorder freely, the grid adjusts automatically.
- **Promises**: `src/data/promises.js`
- **Future dreams**: `src/data/dreams.js`
- **Mini-game messages**: `src/data/heartMessages.js`
- **Constellation secrets**: `src/data/constellationMessages.js` (each has an `x`/`y` position as a percentage, plus a `message`)
- **Colors**: `tailwind.config.js` under `theme.extend.colors` (`blush`, `lavender`, `sky`, `plum`, `twilight`, `gold`)
- **Fonts**: loaded via Google Fonts in `index.html` (Fraunces for headings, Quicksand for body text, Caveat for the handwritten bits)

## Deploying to GitHub Pages

**Option A — one command (recommended):**

```bash
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch using the `gh-pages` package (already included). Then in your repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `root`**.

**Option B — automatic on every push (already set up):**

There's a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys automatically whenever you push to `main`. To use it: in your repo, go to **Settings → Pages → Source → GitHub Actions**. Then just `git push` and it handles the rest.

Either way, the site will be live at `https://<your-username>.github.io/<repo-name>/`. The build is already configured with a relative base path (`vite.config.js`), so it works at any subpath without extra tweaking.

## A note on performance

The reasons grid, sparkles, and fireflies are all lightweight DOM/CSS-driven animations — no heavy libraries beyond `framer-motion` and `canvas-confetti`, so it should run smoothly even on older phones. If you add a lot of high-resolution photos to the timeline, consider compressing them first (e.g. with [squoosh.app](https://squoosh.app)) so the site stays fast.
