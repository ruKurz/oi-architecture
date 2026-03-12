# OIA Codebase Architecture

This document describes the technical structure of the `oia-site/` renderer — a TypeScript + Vite single-page application that visualizes the OIA model as an interactive diagram.

---

## Repository Layout

```
oi-architecture/
├── oia-site/              # Interactive renderer (TypeScript + Vite)
│   └── src/
│       ├── data/          # oia-model.json — single source of truth for the model
│       ├── renderer/      # Layer, panel, and diagram rendering logic
│       ├── views/         # Website pages (Motivation, Contribute, About, Impressum)
│       ├── styles/        # CSS design tokens and layout
│       ├── router.ts      # Hash-based SPA routing
│       └── constants.ts   # Zoom levels and shared constants
├── context/               # Stable project context documents (BIZ)
├── articles/              # Published and draft articles (BIZ)
├── decisions/             # Architecture Decision Records (BIZ/DEV)
├── docs/                  # Contributor documentation
├── prompts/               # Claude prompts for recurring project tasks
└── CONTRIBUTING.md        # Contribution workflow
```

---

## Rendering Architecture

### Data Flow

```
oia-model.json
      ↓
  router.ts          (reads hash, decides which view to render)
      ↓
renderOIA()          (main diagram entry point)
      ↓
renderLayer()        (per-layer rendering)
      ↓
renderLayerItem()    (per-item rendering inside a layer)
```

### Key Files

| File | Responsibility |
|---|---|
| `src/data/oia-model.json` | The OIA model data — layers, items, labels. Single source of truth. |
| `src/renderer/render-diagram.ts` | Assembles the full diagram from layer renderers |
| `src/renderer/render-layer.ts` | Renders a single layer and its items |
| `src/renderer/render-panel.ts` | Renders the detail panel when an item is clicked |
| `src/router.ts` | Hash-based routing (`#/`, `#/detail/:id`, `#/motivation`, etc.) |
| `src/views/*.ts` | Individual page views (each returns an `HTMLElement`) |
| `src/styles/layout.css` | Layout, design tokens, component styles |
| `src/constants.ts` | Zoom constants and shared values |

---

## Routing

The site uses **hash-based routing** (no server-side routing required, GitHub Pages compatible):

| Hash | View |
|---|---|
| `#/` | OIA diagram overview |
| `#/detail/:id` | Item detail panel |
| `#/motivation` | Motivation page |
| `#/contribute` | Contribute page |
| `#/about` | About page |
| `#/impressum` | Impressum |

The nav component (`src/views/nav.ts`) is rendered on every route change. It is attached to `#site-nav` in `index.html`, which sits outside the `#app` container so it persists across route transitions.

---

## Data Model

`oia-model.json` is the single source of truth for all diagram content.

The model is typed in `src/data/types.ts`. Key types:

```typescript
OIAModel         // root object
LayerContainer   // a layer (L1–L10)
ContentItem      // an item within a layer
```

**BIZ/DEV rule:** Changes to the model data (IDs, labels, layer names) are BIZ changes. Changes to how the model is rendered are DEV changes. See [CONVENTIONS.md](../CONVENTIONS.md#21-biz--dev-separation).

---

## CSS Architecture

Design tokens are defined as CSS custom properties in `src/styles/layout.css`:

```css
--bg, --panel, --border, --border-bright
--text, --text-dim, --text-muted
--accent, --accent2, --accent3
```

Component styles follow **BEM-lite** (`block__element` — no modifiers in class names):

```css
.page-view               /* page wrapper */
.page-view__content      /* content area */
.page-view__section      /* content section */
.site-nav__link          /* nav link */
.site-nav__link--active  /* active state */
```

---

## Testing

Tests live in `oia-site/tests/` and use Vitest with JSDOM.

```bash
npm test          # run all tests
npm run lint      # ESLint + Prettier check
```

All tests must remain green before committing. The test environment has no `#site-nav` element — nav rendering is gated on `document.getElementById('site-nav')` and gracefully skipped in tests.

---

## Known Issues

| Location | Issue | GitHub |
|---|---|---|
| `renderer/render-layer.ts:154–173` | 13 hardcoded `if (layer.id === '#Lx')` instead of renderer map | TBD |
| `renderer/render-layer.ts:88,139` | RGBA colors as inline style instead of CSS variables | TBD |
| `renderer/render-layer.ts` + `render-panel.ts` | Duplicate `getItem()` function | TBD |
