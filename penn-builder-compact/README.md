# Penn Builder Compact

Penn Builder Compact is a static website builder prototype for composing a Penn-inspired site from editable sections, themes, typefaces, grouped navigation, parallax backgrounds, and packaged HTML exports.

The app runs directly in a browser. No build step or framework install is required.

## Requirements

Static preview:

- Any modern browser
- Optional: Python 3 if you want to serve the folder locally with `python3 -m http.server`

CMS backend:

- `nvm`
- Node `24.15.0`, pinned in `.nvmrc`
- npm, included with Node
- The system `sqlite3` command

There are currently no npm package dependencies to install.

## Install NVM

If `nvm` is not installed, install it with:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then restart your terminal, or load it in the current shell:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

## First-Time Setup

From the compact project folder:

```sh
cd "/Users/haasj/Documents/New project/penn-builder-compact"
nvm install
nvm use
node -v
npm -v
sqlite3 --version
```

Expected Node version:

```text
v24.15.0
```

## Open Locally As Static Files

Open `index.html` in a browser, or serve the folder with any static server.

```sh
cd "/Users/haasj/Documents/New project/penn-builder-compact"
python3 -m http.server 4174
```

Then open:

```text
http://127.0.0.1:4174/
```

## Run With CMS Storage

The compact project also includes a small Node + SQLite CMS backend.

```sh
cd "/Users/haasj/Documents/New project/penn-builder-compact"
nvm use
node server.js
```

The project is pinned to Node `24.15.0` in `.nvmrc`.

Then open:

```text
http://127.0.0.1:4175/
```

When opened through the CMS server, the builder loads and saves state through `/api/site` into `data/cms.sqlite`. `localStorage` remains available as a fallback.

## Deploy To Cloudflare Pages

This folder includes Cloudflare Pages Functions for `/api/site`, `/api/assets`, and `/api/health`.

Use these GitHub-connected Pages settings:

```text
Root directory: penn-builder-compact
Framework preset: None
Build command: exit 0
Build output directory: /
```

For shared CMS storage on Cloudflare, bind a D1 database to the Pages project with the variable name `DB`.

See [Cloudflare Pages Deployment](docs/CLOUDFLARE_PAGES.md).

## What Is Included

- `index.html`: app shell and editor controls
- `styles.css`: studio UI and generated preview styling
- `script.js`: builder state, layout rendering, export, ZIP download, and interactions
- `assets/`: Penn building, campus life, research, and logo images
- `functions/`: Cloudflare Pages API routes for deployed CMS storage
- `docs/`: compact project documentation

## Key Capabilities

- Brand identity controls
- Theme palette and typeface controls
- Primary and secondary typefaces
- Add, remove, reorder, and group sections
- Group navigation with anchor links
- Optional group parallax images
- Multiple editable layouts
- Per-button and per-item URLs
- External-link icon toggle
- Export HTML
- Download a ZIP containing `index.html` and packaged assets

## Documentation

Start with:

- [Project Brief](docs/PROJECT_BRIEF.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Layouts](docs/LAYOUTS.md)
- [Groups And Navigation](docs/GROUPS_AND_NAVIGATION.md)
- [Export And Assets](docs/EXPORT_AND_ASSETS.md)
- [State Model](docs/STATE_MODEL.md)
- [CMS Backend](docs/CMS_BACKEND.md)
- [Cloudflare Pages Deployment](docs/CLOUDFLARE_PAGES.md)
- [Assets](assets/README.md)
