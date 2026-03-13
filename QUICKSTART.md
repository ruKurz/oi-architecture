# Quick Start — OIA Developer Setup

**Estimated time to first running instance: under 10 minutes.**

## Prerequisites

- **Node.js 20+** — <https://nodejs.org>
- **Git**
- **VS Code** (recommended) — install suggested extensions when prompted

## 1 — Clone and install

```bash
git clone https://github.com/ruKurz/oi-architecture.git
cd oi-architecture/oia-site
npm install
```

## 2 — Start the dev server

```bash
npm run dev
# → http://localhost:5173/oi-architecture/
```

Open the browser — hot reload is active.

## 3 — Run tests

```bash
npm test
# All tests must stay green after your changes
```

## 4 — Lint

```bash
npm run lint
```

## 5 — Build

```bash
npm run build
# Output in oia-site/dist/
```

---

## Finding the Right Place

| What you want to change | Where to look |
|---|---|
| OIA model (layers, items, labels) | `oia-site/src/data/oia-model.json` |
| Layer rendering | `oia-site/src/renderer/render-layer.ts` |
| Detail / side panel | `oia-site/src/renderer/render-panel.ts` |
| Navigation & routing | `oia-site/src/router.ts` |
| Pages (Motivation, About, …) | `oia-site/src/views/` |
| Colors, layout, design tokens | `oia-site/src/styles/` |
| Constants & zoom levels | `oia-site/src/constants.ts` |

For full contribution workflow: [`CONTRIBUTING.md`](CONTRIBUTING.md).
For codebase architecture: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
For OIA model guide: [`docs/MODEL_GUIDE.md`](docs/MODEL_GUIDE.md).
