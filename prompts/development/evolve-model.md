# OIA Diagramm — Modell-Evolution Prompt
> Typ: **Execution** | Zuletzt aktualisiert: 2026-03

---

## Kontext

Lies vor dem Start:
- `context/oia-context.md` — Architekturschichten, Terminologie, V2-Backlog
- `oia-site/src/data/oia-model.json` — aktuelles Modell (Single Source of Truth)

**Projektstatus:**
Die Grundinfrastruktur ist gebaut:
- JSON-Modell existiert: `oia-site/src/data/oia-model.json`
- Renderer existiert: `oia-site/src/renderer/render-diagram.ts`
- Vitest-Tests laufen: `npm run test` (13 Tests grün)
- Dev-Server: `npm run dev` → http://localhost:5173/oi-architecture/

Dieser Prompt beschreibt, wie das **Modell weiterentwickelt** wird — nicht wie die Infrastruktur gebaut wird.

---

## Ziel

Das OIA-Diagramm über das JSON-Modell iterativ weiterentwickeln — ohne manuelles HTML-Editing — über zwei definierte Workflows.

---

## Constraints

- **Kein manuelles HTML** — Diagramm-Inhalte werden ausschließlich über `oia-model.json` geändert
- **IDs sind stabil** — bestehende IDs (`#L1`–`#L9`, `#001`, ...) werden nicht umnummeriert ohne explizite Migration
- **Strukturelle Modell-Änderungen** (neue Layer, ID-Schema-Änderungen) → erst als Delta zur Review vorlegen, nicht direkt committen
- **Design Tokens unverändert** — keine neuen Farben einführen; Tokens stehen in `oia-site/src/styles/tokens.css`
- **Excalidraw ist Skizze, nicht Source of Truth** — nie direkt aus Excalidraw ins Modell ohne Review-Schritt
- **Ein Workflow pro Session** — A und B nicht mischen

---

## Datenmodell-Referenz

Das vollständige Schema ist in `oia-site/src/data/types.ts` typisiert. Kurzreferenz für häufige Änderungen:

### Element-IDs
- Layer: `#L1`–`#L9`, Pipeline: `#L1b`, Panels: `#panel-left`, `#panel-right`
- Neue Items: sequenziell ab dem höchsten bestehenden Zähler (`#001`, `#002`, ...)
- Neue Layer: `#L10`, `#L11`, ... oder sprechende IDs bei Sonderrollen

### Container anlegen
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

### Item anlegen
```json
{
  "id": "#087",
  "type": "item",
  "itemType": "capability",
  "label": "Detect Anomalies",
  "properties": { "cognitive_level": "evaluate" }
}
```

**Gültige `itemType`-Werte:**
`actor` | `situation` | `usecase` | `solution` | `capability` | `feature` | `infrastructure` | `processingstep` | `datasource` | `concept`

### Verbindung anlegen
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

## Workflow A — Strukturell (Excalidraw-Skizze → Modell-Delta → HTML)

Für: neue Layer, Verschiebungen, neue Container-Hierarchien.

```
1. Nutzer skizziert Änderung in Excalidraw (Rechtecke = Container, grobe Position reicht)
2. Nutzer exportiert als PNG und stellt es bereit
3. Claude liest räumliche Struktur → erstellt Modell-Delta als JSON:
   {
     "action": "add_layer",
     "element": { "id": "#L10", "containerType": "layer", "label": "Business Outcome", ... },
     "position": { "after": "#L9" }
   }
4. Claude zeigt Delta zur Review: "Diese Änderungen habe ich erkannt — korrekt?"
5. Nutzer bestätigt oder korrigiert
6. Delta wird in oia-model.json gemerged
7. npm run test  →  muss grün bleiben
8. npm run dev   →  Diagramm visuell prüfen
```

**Entscheidungsregel bei Schritt 3:** Wenn räumliche Intention unklar → Rückfrage vor Delta-Erstellung, kein "best guess" committen.

---

## Workflow B — Inhaltlich (Natürliche Sprache → Modell-Änderung → HTML)

Für: neues Item, geänderte Properties, neue Verbindung, Label-Korrektur.

```
1. Nutzer beschreibt Änderung:
   z. B. "Füge unter L5 ein neues Capability-Item 'Detect Anomalies' hinzu"
2. Claude erstellt das Element und zeigt es zur Review:
   { "id": "#087", "type": "item", "itemType": "capability", "label": "Detect Anomalies", ... }
3. Nutzer bestätigt
4. Element wird in oia-model.json eingefügt (children-Array des Eltern-Containers aktualisieren)
5. npm run test  →  muss grün bleiben
6. npm run dev   →  Diagramm visuell prüfen
```

**Entscheidungsregel bei Schritt 4:** Wenn `itemType` unklar → aus `context/oia-context.md` ableiten, nicht raten. Bei Konflikt mit bestehender Terminologie → Rückfrage.

---

## Offene Umsetzungsschritte (priorisiert)

| Schritt | Status | Beschreibung |
|---|---|---|
| JSON-Modell aus HTML extrahieren | ✅ Erledigt | `oia-site/src/data/oia-model.json` |
| HTML-Renderer implementieren | ✅ Erledigt | `oia-site/src/renderer/` |
| Excalidraw-Export | 🔲 Offen | `exportToExcalidraw(model)` → `.excalidraw`-Datei mit `customData`-IDs |
| Workflow-B-Test: neues Element | 🔲 Offen | Layer `#L10 – Business Outcome` nach L9 hinzufügen |
| View-System (Zoom-Levels) | 🔲 V3 | Overview-View + Detail-View pro Layer |
| PNG-Export für LinkedIn | 🔲 V3 | puppeteer/html2canvas, 1200×627px |

---

## Akzeptanzkriterien

Nach jeder Modell-Änderung:

- [ ] `npm run test` läuft grün (13+ Tests bestanden)
- [ ] `npm run build` erzeugt fehlerfreies `dist/`
- [ ] Diagramm im Browser zeigt die Änderung korrekt
- [ ] Keine bestehenden IDs wurden umdefiniert oder gelöscht (außer explizit geplant)
- [ ] Neue Elemente sind im `children`-Array ihres Eltern-Containers referenziert

Nach strukturellen Änderungen zusätzlich:
- [ ] Delta wurde vor dem Commit zur Review vorgelegt
- [ ] `context/oia-context.md` bei Bedarf aktualisiert (neue Terminologie, Backlog-Status)

---

## Bekannte Risiken und Entscheidungen

| Risiko | Entscheidung |
|---|---|
| Beliebige Verschachtelung kann zu inkonsistenten Modellen führen | Akzeptiert — Regeln werden im kreativen Prozess nicht erzwungen, später nachdefiniert |
| Sketch→Model-Übersetzung ist fehleranfällig | Excalidraw ist explizit nur Skizze. Delta immer durch Review-Schritt |
| Custom-Renderer = Wartungsaufwand | Gerechtfertigt — OIA ist kein C4/Software-Architektur-Framework, Structurizr passt nicht |
| PNG-Export erfordert zusätzliches Tooling | Für V3 verschoben |
