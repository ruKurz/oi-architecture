# OIA MicroSite — Ausführungs-Prompt v2

## Kontext

Du arbeitest am Projekt **Organizational Intelligence Architecture (OIA)** – einem konzeptionellen Architekturmodell, das beschreibt, wie Organisationen Wissen in Handlungen verwandeln. Zielgruppe: CIOs, Enterprise Architects. Publikationskanal: LinkedIn, GitHub Pages.

**Ausführungskontext:** Arbeite im Repository-Root (nutze relative Pfade, keine absoluten Maschinenpfade).

Das Modell hat 9 Architekturschichten (L1–L9) plus zwei Seitenpanels. Der konzeptionelle Fluss:

```
Data → Intelligence → Capability → Solution → Business Outcome
```

Die Architekturschichten von unten nach oben:
```
L9  – Actors
L8  – Situation Layer
L7  – Use Cases & Challenges
L6  – Solutions & Applications
L5  – Cognitive Capabilities
L4  – Features & APIs
L3  – Organizational Knowledge Core  ← zentrales Element (hervorgehoben)
L2  – AI & Cognitive Infrastructure
L1b – Data Processing Pipeline
L1  – Data Sources

Left Panel  – System Development & Interaction
Right Panel – Data Sources & Processing
```

---

## Architekturprinzip: Model-Driven Site

**Single Source of Truth:** `oia-site/src/data/oia-model.json`

Das JSON-Modell wird nie manuell ins HTML übersetzt. Stattdessen erzeugt eine `renderOIA()`-Funktion aus dem Modell das vollständige Diagramm. Das Site-Framework (Vite, Router, Zoom) ist von den Inhalten getrennt.

```
oia-model.json  →  renderOIA()  →  Diagramm-HTML im Browser
                →  detail view  →  Klick-Detail pro Element
```

---

## Phase 1: Projekt erstellen

### Vite-Projekt anlegen

```bash
npm create vite@latest oia-site -- --template vanilla-ts
cd oia-site
npm install
npm install -D vitest @vitest/ui
```

> Playwright wird erst hinzugefügt, wenn der Dev-Server läuft. Für den Start reichen Vitest-Unit-Tests.

---

## Phase 2: Ordnerstruktur

```
oia-site/
├── src/
│   ├── data/
│   │   ├── oia-model.json       # Single Source of Truth (JSON-Modell)
│   │   └── types.ts             # TypeScript-Interfaces für das Modell
│   ├── renderer/
│   │   ├── render-diagram.ts    # renderOIA(model, viewId?) → HTMLElement
│   │   ├── render-layer.ts      # Einzelne Layer rendern
│   │   └── render-panel.ts      # Side-Panels rendern
│   ├── views/
│   │   ├── overview.ts          # Default-Route: vollständiges Diagramm
│   │   └── detail.ts            # Detail-View für ein Element (#/detail/:id)
│   ├── styles/
│   │   ├── tokens.css           # Design Tokens (1:1 aus oia-diagram-v2.html)
│   │   ├── layout.css
│   │   └── components.css
│   ├── router.ts                # Hash-Router: #/ | #/detail/:id
│   └── main.ts                  # App-Einstiegspunkt
├── tests/
│   ├── model.spec.ts            # Alle L1–L9 vorhanden, IDs eindeutig
│   └── renderer.spec.ts         # renderOIA gibt valides HTML zurück
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

## Phase 3: Datenmodell

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
  children: string[]            // IDs der Kind-Elemente
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

### `src/data/oia-model.json` — Initiale Befüllung

Das JSON-Modell wird aus `diagrams/oia-diagram-v2.html` extrahiert. Struktur-Vorgabe:

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
    // ... alle weiteren Layer und Items aus oia-diagram-v2.html extrahieren
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

> **Aufgabe beim Ausführen:** Lies `diagrams/oia-diagram-v2.html` vollständig und extrahiere alle Inhalte in das JSON-Modell. Alle Layer-IDs folgen dem Schema `#L1`–`#L9`. Item-IDs werden sequenziell vergeben: `#001`, `#002`, ...

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

  // 1. Left Panel rendern
  // 2. Center: Layer L1–L9 in order (model.meta.order) rendern
  // 3. Right Panel rendern
  // 4. Badge-Legende rendern falls model.legend.show

  return wrapper
}
```

**Renderer-Regeln:**
- `containerType: 'layer'` → volle Breite, horizontaler Block (CSS-Klasse: `.layer`)
- `containerType: 'frame'` → Gruppe mit leichtem Hintergrund (`.layer-frame`)
- `containerType: 'box'` → kompakter Sub-Container (`.layer-box`)
- `meta.highlighted: true` → teal border + glow (Knowledge Core L3)
- `itemType` bestimmt die Farbe (siehe Design Tokens)
- Jedes klickbare Element erhält `data-id="<element.id>"` und `cursor: pointer`

---

## Phase 5: Design Tokens

`src/styles/tokens.css` — exakt aus `oia-diagram-v2.html` übernehmen:

```css
:root {
  --bg:        #050d1a;
  --accent:    #4db8ff;   /* blau  – Hauptakzent, Layer-Titel */
  --accent2:   #2cf2c2;   /* teal  – Knowledge Core, APIs */
  --accent3:   #f0a732;   /* orange – Use Cases, Feedback */
  --accent4:   #c47dff;   /* lila  – Agents */
  --text:      #e8f4ff;
  --text-dim:  #7a9fc4;
  --border:    rgba(77, 184, 255, 0.2);
  --border-hover: rgba(77, 184, 255, 0.6);
}
```

Fonts: Space Mono (Labels/Titel), DM Sans (Fließtext/Sub-Items)

---

## Phase 6: Routing & Zoom

### Hash-Router (`src/router.ts`)

```typescript
// Routen:
// '#/'              → Overview (renderOIA fullscreen)
// '#/detail/:id'    → Detail-View für Element mit dieser ID

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

### Zoom-Verhalten

- Zoom-Slider: fixed, unten rechts
- Range: 40%–100%, Default: 75%
- CSS: `transform: scale(zoomValue)` auf `.diagram-wrapper`
- Zoom-Klassen steuern Sichtbarkeit:
  - `zoom-far` (< 55%): nur Layer-Titel sichtbar
  - `zoom-mid` (55–75%): Titel + Sub-Item-Labels sichtbar
  - `zoom-full` (> 75%): vollständige Darstellung
- Mausrad im Slider-Bereich: Zoom; außerhalb: normales Scroll

### Detail-View (`src/views/detail.ts`)

- Vollflächige Ansicht für ein Element
- Zeigt: id, label, description, alle children (rekursiv aufgelöst)
- `← Back`-Button → `window.location.hash = '#/'`
- Design: gleiche Farb-Tokens, zentriertes Layout, mehr Weißraum

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
          cname: ''   # Optional: Custom Domain eintragen
```

`vite.config.ts` für gh-pages Subpath:

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/oi-architecture/',   // GitHub Repo-Name
  build: {
    outDir: 'dist',
  }
})
```

---

## Wichtige Constraints

- **Kein manuelles HTML** — alle Inhalte kommen aus `oia-model.json`
- **Kein Backend** — reines Static-Site-Deployment
- **Design Tokens 1:1** aus `oia-diagram-v2.html` übernehmen — keine neuen Farben erfinden
- **`oia-site/`** ist Unterordner im bestehenden Repo — kein zweites Repo
- Das JSON-Modell (`oia-model.json`) und der Diagram-Entwicklungs-Workflow sind in `prompts/oia-entwicklungs-prompt-final.md` beschrieben — diese beiden Artefakte bauen aufeinander auf

---

## Ausführungsreihenfolge

1. Vite-Projekt anlegen (`Phase 1`)
2. `types.ts` anlegen (`Phase 3`)
3. `oia-model.json` aus `diagrams/oia-diagram-v2.html` extrahieren (`Phase 3`)
4. Tests schreiben und mit leerem Modell scheitern lassen (`Phase 7`)
5. Renderer implementieren bis Tests grün (`Phase 4`)
6. Design Tokens + Layout CSS (`Phase 5`)
7. Router + Zoom + Detail-View (`Phase 6`)
8. GitHub Actions konfigurieren (`Phase 8`)
9. `npm run build` lokal verifizieren
10. `npm run dev` starten und unter `http://localhost:5173/oi-architecture/` prüfen
11. `quick-start.md` in `oia-site/` erstellen (Dev-Server, Tests, Build, Deployment)
