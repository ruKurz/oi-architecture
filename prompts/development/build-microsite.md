# OIA · Build the OIA Microsite

**Prompt type:** Execution
**Domain:** DEV

---

## Kontext

Read before execution:
- `context/oia-context.md` — architecture layers, terminology, conceptual flow
- `diagrams/oia-diagram-v2.html` — source for initial model extraction
- `oia-site/src/data/types.ts` — TypeScript schema (if already present)

Architecture principle: **Model-Driven Site**

Single source of truth: `oia-site/src/data/oia-model.json`

The JSON model is never manually translated into HTML. Instead, a `renderOIA()` function generates the complete diagram from the model. The site framework (Vite, router, zoom) is decoupled from the content.

```
oia-model.json  →  renderOIA()  →  Diagram HTML in browser
                →  detail view  →  click-detail per element
```

---

## Ziel

A fully functional, data-driven OIA diagram site exists at `oia-site/`, deployed to GitHub Pages via GitHub Actions. All diagram content comes from `oia-model.json` — no manual HTML editing.

---

## Constraints

- **No manual HTML** — all content comes from `oia-model.json`
- **No backend** — pure static site deployment
- **Design tokens 1:1** from `diagrams/oia-diagram-v2.html` — do not invent new colours
- **`oia-site/` is a subdirectory** of the existing repo — not a separate repository
- **Model and evolution workflow** are described in `prompts/development/evolve-model.md` — these two artefacts build on each other

---

## Phase 1: Create the project

```bash
npm create vite@latest oia-site -- --template vanilla-ts
cd oia-site
npm install
npm install -D vitest @vitest/ui
```

> Playwright is added only once the dev server is running. Vitest unit tests are sufficient to start.

---

## Phase 2: Folder structure

```
oia-site/
├── src/
│   ├── data/
│   │   ├── oia-model.json       # Single source of truth (JSON model)
│   │   └── types.ts             # TypeScript interfaces for the model
│   ├── renderer/
│   │   ├── render-diagram.ts    # renderOIA(model, viewId?) → HTMLElement
│   │   ├── render-layer.ts      # Render individual layers
│   │   └── render-panel.ts      # Render side panels
│   ├── views/
│   │   ├── overview.ts          # Default route: full diagram
│   │   └── detail.ts            # Detail view for an element (#/detail/:id)
│   ├── styles/
│   │   ├── tokens.css           # Design tokens (1:1 from oia-diagram-v2.html)
│   │   ├── layout.css
│   │   └── components.css
│   ├── router.ts                # Hash router: #/ | #/detail/:id
│   └── main.ts                  # App entry point
├── tests/
│   ├── model.spec.ts            # All L1–L9 present, IDs unique
│   └── renderer.spec.ts         # renderOIA returns valid HTML
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Actions → gh-pages
```

---

## Phase 3: Data model

### `src/data/types.ts`

```typescript
export interface OIAModel {
  meta: ModelMeta
  elements: Element[]
  connections: Connection[]
  badges: Badge[]
  views: View[]
  legend: { show: boolean; position: string }
}

export interface ModelMeta {
  version: string
  title: string
  subtitle: string
  created: string
}

export type Element = Container | ContentItem

export interface Container {
  id: string                    // '#L1' | '#001' | ...
  type: 'container'
  containerType: 'layer' | 'frame' | 'box'
  label: string
  description?: string
  children: string[]            // IDs of child elements
  badges?: string[]
  meta?: { order?: number; highlighted?: boolean; view_level?: string }
}

export interface ContentItem {
  id: string
  type: 'item'
  itemType: ItemType
  label: string
  description?: string
  icon?: string
  badges?: string[]
  properties?: Record<string, string | number | boolean>
}

export type ItemType =
  | 'actor'
  | 'situation'
  | 'usecase'
  | 'solution'
  | 'capability'
  | 'feature'
  | 'infrastructure'
  | 'processingstep'
  | 'datasource'
  | 'concept'

export interface Connection {
  id: string
  from: string
  to: string
  connectionType: 'flow' | 'depends-on' | 'uses' | 'produces' | 'feedback' | 'generic'
  label?: string
  direction: 'forward' | 'backward' | 'bidirectional'
}

export interface Badge {
  id: string
  icon: string
  label: string
  description: string
}

export interface View {
  id: string
  type: 'overview' | 'detail'
  label: string
  include?: string[]
  root?: string
  depth?: number
}
```

---

### `src/data/oia-model.json` — initial population

The JSON model is extracted from `diagrams/oia-diagram-v2.html`. Structure:

```json
{
  "meta": {
    "version": "2.0",
    "title": "Organizational Intelligence Architecture",
    "subtitle": "How organizations turn knowledge into action",
    "created": "2026"
  },
  "elements": [
    {
      "id": "#L9",
      "type": "container",
      "containerType": "layer",
      "label": "Actors",
      "children": ["#L9-frame-humans", "#L9-frame-agents"],
      "meta": { "order": 9 }
    },
    {
      "id": "#L3",
      "type": "container",
      "containerType": "layer",
      "label": "Organizational Knowledge Core",
      "description": "Central structured knowledge store",
      "children": ["#L3-semantic", "#L3-index", "#L3-graph", "#L3-access"],
      "meta": { "order": 3, "highlighted": true }
    }
    // ... all further layers and items extracted from oia-diagram-v2.html
  ],
  "connections": [
    {
      "id": "conn-feedback-1",
      "from": "#L6",
      "to": "#L3",
      "connectionType": "feedback",
      "label": "usage signals",
      "direction": "backward"
    }
  ],
  "badges": [],
  "views": [
    {
      "id": "view-overview",
      "type": "overview",
      "label": "OIA Overview",
      "include": ["all"]
    }
  ],
  "legend": { "show": true, "position": "bottom" }
}
```

> **Task on execution:** Read `diagrams/oia-diagram-v2.html` completely and extract all content into the JSON model. All layer IDs follow the schema `#L1`–`#L9`. Item IDs are assigned sequentially: `#001`, `#002`, ...

---

## Phase 4: Renderer

### `src/renderer/render-diagram.ts`

```typescript
import type { OIAModel, View } from '../data/types'

export function renderOIA(model: OIAModel, viewId?: string): HTMLElement {
  const view = viewId
    ? model.views.find(v => v.id === viewId)
    : model.views.find(v => v.type === 'overview')

  const wrapper = document.createElement('div')
  wrapper.className = 'diagram-wrapper'

  // 1. Render left panel
  // 2. Center: render layers L1–L9 in order (model.meta.order)
  // 3. Render right panel
  // 4. Render badge legend if model.legend.show

  return wrapper
}
```

**Renderer rules:**
- `containerType: 'layer'` → full width, horizontal block (CSS class: `.layer`)
- `containerType: 'frame'` → group with light background (`.layer-frame`)
- `containerType: 'box'` → compact sub-container (`.layer-box`)
- `meta.highlighted: true` → teal border + glow (Knowledge Core L3)
- `itemType` determines the colour (see design tokens)
- Every clickable element gets `data-id="<element.id>"` and `cursor: pointer`

---

## Phase 5: Design tokens

`src/styles/tokens.css` — copied exactly from `diagrams/oia-diagram-v2.html`:

```css
:root {
  --bg:        #050d1a;
  --accent:    #4db8ff;   /* blue   – main accent, layer titles */
  --accent2:   #2cf2c2;   /* teal   – Knowledge Core, APIs */
  --accent3:   #f0a732;   /* orange – Use Cases, Feedback */
  --accent4:   #c47dff;   /* purple – Agents */
  --text:      #e8f4ff;
  --text-dim:  #7a9fc4;
  --border:    rgba(77, 184, 255, 0.2);
  --border-hover: rgba(77, 184, 255, 0.6);
}
```

Fonts: Space Mono (labels/titles), DM Sans (body text/sub-items)

---

## Phase 6: Routing & zoom

### Hash router (`src/router.ts`)

```typescript
// Routes:
// '#/'              → Overview (renderOIA fullscreen)
// '#/detail/:id'    → Detail view for element with this ID

export function initRouter(): void {
  const render = () => {
    const hash = window.location.hash || '#/'
    if (hash.startsWith('#/detail/')) {
      const id = hash.replace('#/detail/', '')
      renderDetailView(id)
    } else {
      renderOverview()
    }
  }
  window.addEventListener('hashchange', render)
  render() // Initial render
}
```

### Zoom behaviour

- Zoom slider: fixed, bottom right
- Range: 40%–100%, default: 75%
- CSS: `transform: scale(zoomValue)` on `.diagram-wrapper`
- Zoom classes control visibility:
  - `zoom-far` (< 55%): only layer titles visible
  - `zoom-mid` (55–75%): titles + sub-item labels visible
  - `zoom-full` (> 75%): full rendering
- Mouse wheel in slider area: zoom; outside: normal scroll

### Detail view (`src/views/detail.ts`)

- Full-screen view for one element
- Shows: id, label, description, all children (resolved recursively)
- `← Back` button → `window.location.hash = '#/'`
- Design: same colour tokens, centred layout, more whitespace

---

## Phase 7: Tests

```typescript
// tests/model.spec.ts
import model from '../src/data/oia-model.json'

test('all 9 main layers present', () => {
  const ids = model.elements.map((e: any) => e.id)
  ;['#L1','#L2','#L3','#L4','#L5','#L6','#L7','#L8','#L9'].forEach(id => {
    expect(ids).toContain(id)
  })
})

test('no duplicate IDs', () => {
  const ids = model.elements.map((e: any) => e.id)
  expect(new Set(ids).size).toBe(ids.length)
})

test('L3 is highlighted (Knowledge Core)', () => {
  const l3 = model.elements.find((e: any) => e.id === '#L3')
  expect(l3?.meta?.highlighted).toBe(true)
})

test('all children IDs resolve to existing elements', () => {
  const allIds = new Set(model.elements.map((e: any) => e.id))
  model.elements
    .filter((e: any) => e.type === 'container')
    .forEach((c: any) => {
      c.children.forEach((childId: string) => {
        expect(allIds.has(childId)).toBe(true)
      })
    })
})
```

---

## Phase 8: GitHub Actions → gh-pages

```yaml
# .github/workflows/deploy.yml
name: Deploy OIA Site to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - 'oia-site/**'

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: oia-site/package-lock.json

      - name: Install dependencies
        run: cd oia-site && npm ci

      - name: Build
        run: cd oia-site && npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./oia-site/dist
          cname: ''   # Optional: custom domain
```

`vite.config.ts` for gh-pages subpath:

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/oi-architecture/',   // GitHub repo name
  build: {
    outDir: 'dist',
  }
})
```

---

## Execution order

1. Create Vite project (Phase 1)
2. Create `types.ts` (Phase 3)
3. Extract `oia-model.json` from `diagrams/oia-diagram-v2.html` (Phase 3)
4. Write tests and let them fail with an empty model (Phase 7)
5. Implement renderer until tests pass (Phase 4)
6. Design tokens + layout CSS (Phase 5)
7. Router + zoom + detail view (Phase 6)
8. Configure GitHub Actions (Phase 8)
9. Verify `npm run build` locally
10. Start `npm run dev` and verify at `http://localhost:5173/oi-architecture/`
11. Create `quick-start.md` in `oia-site/` (dev server, tests, build, deployment)

---

## Akzeptanzkriterien

- [ ] `npm run test` passes (all tests green)
- [ ] `npm run build` produces a clean `dist/`
- [ ] Diagram visible in browser at `http://localhost:5173/oi-architecture/`
- [ ] All 9 main layers rendered from `oia-model.json`
- [ ] Detail view works for at least one element
- [ ] GitHub Actions workflow deploys to gh-pages on push to main
- [ ] No manual HTML content — all diagram content from JSON model

---

## Output

| File | Action |
|---|---|
| `oia-site/` | created (full directory) |
| `oia-site/src/data/oia-model.json` | created (extracted from diagram) |
| `oia-site/src/data/types.ts` | created |
| `oia-site/src/renderer/` | created |
| `oia-site/tests/` | created |
| `.github/workflows/deploy.yml` | created |
