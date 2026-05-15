# CMS Backend

The compact project includes an optional local CMS backend.

## Run

```sh
cd penn-builder-compact
nvm use
node server.js
```

Then open:

```text
http://127.0.0.1:4175/
```

## Storage

The backend uses SQLite through the system `sqlite3` command.

Database file:

```text
data/cms.sqlite
```

Uploaded assets:

```text
uploads/
```

## API

### Health

```http
GET /api/health
```

### Site State

```http
GET /api/site
POST /api/site
```

The current first version stores the full builder state as JSON in SQLite. That preserves the existing frontend model while moving persistence out of `localStorage`.

### Assets

```http
GET /api/assets
POST /api/assets
```

The asset endpoint accepts JSON with a base64 `dataUrl` and stores the image in `uploads/`. The current editor still stores uploaded images in site JSON, but this endpoint is ready for the next step: switching image uploads from data URLs to file URLs.

## Notes

- The static builder still works from `index.html`.
- When served through `server.js`, the frontend loads/saves through `/api/site`.
- `localStorage` remains as a local fallback.
- Cloudflare Pages deployment uses `functions/api/*` with a D1 binding named `DB`; see `CLOUDFLARE_PAGES.md`.
