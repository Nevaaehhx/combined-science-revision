# Chemistry revision

A revision web app for AQA Combined Science Trilogy, Foundation tier, Chemistry. Ten topics (C1 to C10), each with a Learn mode and a Test mode. Self-marked written questions use AQA-style mark schemes.

Single static HTML file. No build step, no server, no dependencies beyond two Google Fonts.

## Running locally

Open `index.html` in any modern browser.

## Where progress is saved

Progress is kept in the browser's `localStorage` under the key `chem_progress_v2`. It is per-browser and per-device. Clearing browser data will wipe it.

The home screen has two extra buttons:

- **Export progress** downloads a JSON file you can keep as a backup.
- **Import progress** lets you load that JSON on another browser or device.

## Deploying

Static site. Drop the folder into Vercel, Netlify, GitHub Pages, or any static host. No build command, no output directory, no environment variables.
