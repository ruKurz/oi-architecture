# OIA · Evolve the OIA Data Model

**Prompt type:** Execution
**Domain:** BIZ (model content) | DEV (schema changes)

---

## Kontext

Read before execution:
- `context/oia-context.md` — architecture layers, terminology, V2 backlog
- `oia-site/src/data/oia-model.json` — current model (single source of truth)
- `oia-site/src/data/types.ts` — full TypeScript schema

Current infrastructure status:
- JSON model: `oia-site/src/data/oia-model.json`
- Renderer: `oia-site/src/renderer/render-diagram.ts`
- Tests: `npm run test` (Vitest)
- Dev server: `npm run dev` → http://localhost:5173/oi-architecture/

This prompt covers model evolution only — not initial site setup (see `build-microsite.md`).

---

## Ziel

Iteratively evolve the OIA diagram via the JSON model — without manual HTML editing — using one of two defined workflows.

---

## Constraints

- **No manual HTML** — diagram content is changed exclusively via `oia-model.json`
- **IDs are stable** — existing IDs (`#L1`–`#L9`, `#001`, ...) are not renumbered without an explicit migration
- **Structural model changes** (new layers, ID schema changes) → present as a delta for review first, do not commit directly
- **Design tokens unchanged** — no new colours introduced; tokens are in `oia-site/src/styles/tokens.css`
- **Excalidraw is a sketch, not source of truth** — never copy directly from Excalidraw without a review step
- **One workflow per session** — do not mix Workflow A and B

---

## Datenmodell-Referenz

Full schema: `oia-site/src/data/types.ts`. Quick reference for common changes:

### Element IDs
- Layers: `#L1`–`#L9`, Pipeline: `#L1b`, Panels: `#panel-left`, `#panel-right`
- New items: sequential from the highest existing counter (`#001`, `#002`, ...)
- New layers: `#L10`, `#L11`, ... or descriptive IDs for special roles

### Adding a container
```json
{
  "id": "#L10",
  "type": "container",
  "containerType": "layer",
  "label": "Business Outcome",
  "description": "Decision / Action / Result",
  "children": [],
  "meta": { "order": 10 }
}
```

### Adding an item
```json
{
  "id": "#087",
  "type": "item",
  "itemType": "capability",
  "label": "Detect Anomalies",
  "properties": { "cognitive_level": "evaluate" }
}
```

**Valid `itemType` values:**
`actor` | `situation` | `usecase` | `solution` | `capability` | `feature` | `infrastructure` | `processingstep` | `datasource` | `concept`

### Adding a connection
```json
{
  "id": "conn-002",
  "from": "#L6",
  "to": "#L3",
  "connectionType": "feedback",
  "direction": "backward"
}
```

---

## Schritte

### Workflow A — Structural (Excalidraw sketch → model delta → HTML)

For: new layers, reorganisations, new container hierarchies.

```
1. User sketches the change in Excalidraw (rectangles = containers, rough position is enough)
2. User exports as PNG and provides it
3. Read the spatial structure → create a model delta as JSON:
   {
     "action": "add_layer",
     "element": { "id": "#L10", "containerType": "layer", "label": "Business Outcome", ... },
     "position": { "after": "#L9" }
   }
4. Present the delta for review: "These are the changes I recognised — correct?"
5. User confirms or corrects
6. Merge delta into oia-model.json
7. npm run test  →  must stay green
8. npm run dev   →  visually verify the diagram
```

> **Decision rule at Step 3:** If the spatial intention is unclear → ask before creating the delta; do not commit a "best guess".

---

### Workflow B — Content (natural language → model change → HTML)

For: new items, changed properties, new connections, label corrections.

```
1. User describes the change:
   e.g. "Add a new Capability item 'Detect Anomalies' under L5"
2. Create the element and present it for review:
   { "id": "#087", "type": "item", "itemType": "capability", "label": "Detect Anomalies", ... }
3. User confirms
4. Insert element into oia-model.json (update children array of the parent container)
5. npm run test  →  must stay green
6. npm run dev   →  visually verify the diagram
```

> **Decision rule at Step 4:** If `itemType` is unclear → derive from `context/oia-context.md`, do not guess. If a conflict with existing terminology arises → ask.

---

## Entscheidungsregeln

| Situation | Behaviour |
|---|---|
| Spatial intention in Workflow A is ambiguous | Ask — do not commit a best guess |
| `itemType` unclear in Workflow B | Derive from `context/oia-context.md`; ask if still unclear |
| Tests fail after model change | Revert the change and investigate before retrying |
| Structural change affects ID schema | Propose migration plan; do not execute without confirmation |
| Excalidraw and existing model diverge | Excalidraw is the sketch; the JSON model is authoritative |

---

## Akzeptanzkriterien

After every model change:

- [ ] `npm run test` passes (all tests green)
- [ ] `npm run build` produces a clean `dist/`
- [ ] The diagram in the browser shows the change correctly
- [ ] No existing IDs were redefined or deleted (unless explicitly planned)
- [ ] New elements are referenced in the `children` array of their parent container

After structural changes additionally:
- [ ] Delta was presented for review before committing
- [ ] `context/oia-context.md` updated if needed (new terminology, backlog status)

---

## Output

| File | Action |
|---|---|
| `oia-site/src/data/oia-model.json` | changed |
| `context/oia-context.md` | changed (if new terminology introduced) |
