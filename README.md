# Combined Science revision

A revision web app for **AQA GCSE Combined Science Trilogy, Foundation tier**. Covers biology, chemistry and physics with lessons, tests, mistake review, progress tracking and a streak counter. Built for Nevaeh, but happy to be used by anyone studying the same spec.

Live: **https://nevaaehhx.github.io/combined-science-revision/**

## What's inside

- **24 topics** across the three subjects:
  - Biology: B1 Cell biology, B2 Organisation, B3 Infection & response, B4 Bioenergetics, B5 Homeostasis & response, B6 Inheritance/variation/evolution, B7 Ecology
  - Chemistry: C1-C10 (atomic structure through to using resources)
  - Physics: P1 Energy, P2 Electricity, P3 Particle model, P4 Atomic structure, P5 Forces, P6 Waves, P7 Magnetism & electromagnetism
- **~312 Foundation-tier questions** total (~13 per topic). Mix of multiple choice with option-specific feedback and short-answer questions with AQA-style mark schemes.
- **Learn mode** with topic intros, sections, callouts, key points and common-mistake lists.
- **Test mode** with self-marking for written answers.
- **Mistake review** view that surfaces every question got wrong, with the original prompt, the answer given, the correct answer and an explanation. Try-again button per mistake.
- **Progress chart** on the home screen, inline SVG, rolling score over recent sessions.
- **Streak counter** for daily revision.
- **Subject picker** to focus on one science at a time, or All.
- **Export / Import progress** as JSON for backups and moving between devices.

## Where progress is saved

Progress is stored in the browser's `localStorage` under the key `revise_progress_v3`. It is per-browser and per-device. Clearing browser data wipes it. Use Export progress (on the home screen) to keep a JSON backup.

The first time you open this version with old data, your progress under the original `chem_progress_v2` key is migrated across automatically.

## Editing content

Lessons and questions live in `content/biology.js`, `content/chemistry.js` and `content/physics.js`. Each file exposes a `window.CONTENT_*` object with `topics`, `lessons` and `questions`. Edit those files directly, push, GitHub Pages redeploys in about a minute.

Visit the live URL with `?edit=1` on the end to enable an "Export all content" button on the home page, which downloads the current content as JSON.

## Running locally

It's a single static site, no build step. Open `index.html` in any modern browser. The three `content/*.js` files load before the main script.

## Deploying

Already deployed to GitHub Pages from the `main` branch of this repo. If you fork it, enable Pages in repo Settings to get your own URL.
