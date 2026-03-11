# OIA · Introduce Project Conventions

**Prompt-Typ:** Execution
**Kontext:** DEV — Technische Infrastruktur

---

## Kontext

Lies vor der Ausführung:
- `context/oia-context.md` — Projektüberblick, Terminologie
- `context/todo.md` — aktueller Stand der Aufgaben

Scanne die bestehende Struktur:
- Projektroot: alle Dateien auf oberster Ebene
- `oia-site/` — Vite/TypeScript App
- `prompts/`, `context/`, `articles/`, `decisions/` (falls vorhanden)

---

## Ziel

Am Ende existiert ein `CONVENTIONS.md` im Projektroot, das alle Konventionen des OIA-Projekts verbindlich definiert. Die Konventionen sind sofort wirksam — bestehende Dateien werden nicht rückwirkend angepasst.

---

## Constraints

- **BIZ-Inhalte nicht anfassen**: Diagramm-Inhalte, OIA-Modell-IDs, Layer-Benennung, Architektur-Terminologie sind BIZ-Entscheidungen und werden in `CONVENTIONS.md` nicht definiert
- **Keine Umbenennung bestehender Dateien** im Rahmen dieses Prompts — Konventionen gelten für neue Dateien
- **Kein Refactoring bestehenden Codes** — nur Dokumentation, Todo-Nummerierung und Git-Template
- Das Dokument soll als "Decision Log for Future Me" formuliert sein, nicht als Contributor-Onboarding-Guide

---

## Inputs

- `context/todo.md` — Header wird aktualisiert (GitHub-Issues-Hinweis)
- `README.md` — wird um Conventions-Abschnitt ergänzt
- `context/oia-context.md` — Terminologie-Referenz (nicht verändern)
- Konventionsinhalte: vollständig in Schritt 2 dieses Prompts definiert

---

## Schritte

### Schritt 1 — `decisions/` Ordner anlegen

Erstelle `decisions/` im Projektroot mit:
- `decisions/README.md` — ADR-Index und Template
- `decisions/0001-language-and-naming-conventions.md` — erste ADR (diese Konvention als Entscheidung dokumentiert)

ADR-Template (Müller/Dienst-Format — Decision zuerst, Alternatives Pflicht):
```markdown
# ADR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided.
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXXX
**Date:** YYYY-MM-DD
**Type:** DEV | BIZ | BOTH

## Context

Facts that influenced the decision. Neutral language — no judgement yet.
Quality attribute affected (e.g. maintainability, portability, security).

## Consequences

**Easier:** What becomes simpler as a result.
**Harder:** What becomes more difficult or requires more discipline.
**Required adjustments:** What else must change to make this decision work.

## Alternatives

| Option | Reason rejected |
|---|---|
| Alternative A | Why not chosen |
| Alternative B | Why not chosen |
```

---

### Schritt 2 — `CONVENTIONS.md` im Projektroot erstellen

Struktur des Dokuments (alle Abschnitte sind Pflicht):

#### 2.1 BIZ / DEV Separation (oberste Regel)

Definiere zwei Arbeitsbereiche:

| Bereich | Bedeutung | Commit-Typ | Ordner |
|---|---|---|---|
| **DEV** | Technische Umsetzung: Renderer, Tooling, Tests, Build, CI | `feat:` `fix:` `chore:` `refactor:` `test:` `style:` | `oia-site/` `.github/` `prompts/` |
| **BIZ** | Fachliche Inhalte: OIA-Modell, Artikel, Diagramm-Inhalte, Architektur-Entscheidungen | `content:` `docs:` | `context/` `articles/` `diagrams/` `decisions/` `notes/` |

Regel: **Ein Commit berührt entweder BIZ oder DEV — nie beide.** Wenn beides nötig ist: zwei separate Commits.

Regel: **Kein Commit ohne referenziertes GitHub Issue** (außer: `chore: initial setup` bei neuen Dateien).

---

#### 2.2 Sprache

| Bereich | Sprache | Beispiele |
|---|---|---|
| Code, Kommentare, Commits, Dateinamen | Englisch | `renderLayerAsHtml()`, `feat: add zoom constants` |
| Typen, Interfaces, JSON-Keys | Englisch | `ContentItem`, `itemType`, `containerType` |
| Artikel, LinkedIn-Posts, Prompts | Deutsch | Autoren-Entscheidung |
| ADRs | Englisch (vollständig — DEV-Artefakt) | `ADR-0001: Use Vite and TypeScript for renderer` |

---

#### 2.3 Conventional Commits

Format:
```
<type>[optional scope]: <imperative description>

[optional body, wrapped at 72 chars]

Closes #N   ← closes the GitHub Issue
Refs #N     ← references without closing (for partial work)
```

Erlaubte Typen:

| Typ | Verwendung |
|---|---|
| `feat` | Neue Funktion im Renderer oder Tooling |
| `fix` | Bug-Korrektur |
| `content` | Neuer OIA-Inhalt, Artikel, Modell-Ergänzung (BIZ) |
| `docs` | Dokumentation, ADRs, CONVENTIONS.md |
| `refactor` | Code-Umstrukturierung ohne Verhaltensänderung |
| `test` | Tests hinzugefügt oder angepasst |
| `chore` | Build, CI/CD, Dependencies, Tooling |
| `style` | Formatierung (kein Logik-Wechsel) |

Scopes (optional, in Klammern):
```
feat(renderer): add outcome layer rendering
content(model): add business outcome items to L10
chore(ci): add npm audit to deploy pipeline
```

Regeln:
- Imperativ: "add" nicht "added", "fix" nicht "fixes"
- Max. 50 Zeichen für die Subject-Zeile
- Kein Punkt am Ende
- GitHub Issue im Footer — immer (außer bei initialen Commits)

---

#### 2.4 Issue-Tracking

**Offizielle Aufgaben → GitHub Issues** (https://github.com/<owner>/oi-architecture/issues)

Vorteile: Community-fähig, filterbar, verlinkbar in Commits, Milestones möglich.

`context/todo.md` bleibt als **Session-Parking-Lot** — Dinge die während der Arbeit auffallen, noch nicht priorisiert. Vor Arbeitsbeginn: offene Parking-Lot-Einträge als GitHub Issues anlegen oder bewusst verwerfen.

Format eines Parking-Lot-Eintrags (weiterhin in `context/todo.md`):
```
**[2026-MM-DD] [AKTION] `#kategorie` [S|M|L]** (DEV|BIZ)
→ Betroffener Pfad: Beschreibung
→ Aktion: Was konkret zu tun ist
```

Kategorien: `model` · `renderer` · `prompt` · `architecture` · `infra` · `ux` · `content`

---

#### 2.5 TypeScript Naming

| Element | Konvention | Beispiel |
|---|---|---|
| Variablen | camelCase, semantisch vollständig | `currentZoomValue`, `diagramWrapperElement` |
| Funktionen | camelCase, Verb zuerst, semantisch vollständig | `renderLayerAsHtml()`, `findElementById()`, `resolveChildrenForContainer()` |
| Booleans | `is`/`has`-Präfix | `isHighlighted`, `hasChildren`, `isDetailView` |
| Event-Handler | `on`/`handle`-Präfix | `onHashChange`, `handleZoomInput` |
| Typen/Interfaces | PascalCase, kein `I`/`T`-Präfix | `OIAModel`, `ContentItem`, `LayerContainer` |
| Enums (Name) | PascalCase | `ContainerType` |
| Enum-Werte | SCREAMING_SNAKE_CASE | `SITUATION_LAYER`, `DATA_SOURCE` |
| Konstanten (Modul-Ebene) | SCREAMING_SNAKE_CASE | `DEFAULT_ZOOM`, `ZOOM_LEVELS` |
| Keine Typinfo im Namen | | `userString` ❌ → `userName` ✓ |
| Keine Abkürzungen | | `el` ❌ → `element` ✓, `btn` ❌ → `button` ✓ |

---

#### 2.6 Datei- und Ordner-Naming

| Typ | Konvention | Beispiel |
|---|---|---|
| TypeScript-Module | kebab-case | `render-layer.ts`, `oia-model.json` |
| Test-Dateien | `<name>.spec.ts` | `render-layer.spec.ts` |
| Verzeichnisse | kebab-case, Englisch | `src/renderer/`, `src/data/` |
| Markdown-Inhalte | kebab-case, Englisch | `naming-conventions.md` |
| Prompts | kebab-case, Englisch | `introduce-conventions.md` |

---

#### 2.7 CSS-Klassen

kebab-case, BEM-lite (Block--Element nur bei echter Hierarchie):

```css
.detail-view          /* Block */
.detail-view__title   /* Element (nur wenn Hierarchie semantisch relevant) */
.zoom-controls        /* einfacher Block */
.layer-core           /* Modifier eingebaut im Blocknamen */
```

Keine Inline-Styles für wiederkehrende Werte — immer CSS-Variable oder Klasse.

---

#### 2.8 JSON-Datenmodell (DEV-Struktur)

Keys: camelCase (JavaScript-idiomatisch):
```json
{ "itemType": "outcome", "containerType": "layer", "isHighlighted": true }
```

IDs: Bestehende `#L1`–`#L10` werden nicht verändert. Schema für neue Items: Entscheidung liegt bei BIZ-Kontext.

---

#### 2.9 Tests

```typescript
describe('<FunctionName>', () => {
  test('<verb> + <expected result>', ...)
  // Beispiele:
  test('returns element with class detail-view', ...)
  test('shows not-found message for unknown id', ...)
  test('renders badge icons on tagged layers', ...)
})
```

---

### Schritt 3 — `context/todo.md` aktualisieren

Lies `context/todo.md`. Ergänze den Header mit dem neuen Format-Standard (siehe 2.4):
- Ersetze die Anleitung zur Nummerierung durch den GitHub-Issues-Hinweis
- Füge oben einen Hinweis ein: "Parking Lot — offene Einträge als GitHub Issues anlegen vor Arbeitsbeginn"
- Bestehende Einträge bleiben unverändert (keine Nummerierung nötig — sie wandern als Issues ins Tracker)

---

### Schritt 4 — Git Commit Message Template anlegen

Erstelle `.gitmessage` im Projektroot:

```
# <type>[scope]: <imperative description> (max 50 chars)
# Types: feat fix content docs refactor test chore style
# Scopes (optional): renderer model ci infra ux content

# Body (optional, wrap at 72 chars):


# Footer — REQUIRED (except initial commits):
Closes #N
# or: Refs #N  (if issue stays open after this commit)
```

Aktiviere das Template für das Repository:
```bash
git config commit.template .gitmessage
```

> ⚠️ **Irreversibel auf Systemebene:** Dieser Befehl schreibt in die lokale `.git/config`. Rückgängig machen: `git config --unset commit.template`

---

### Schritt 5 — README.md ergänzen

Füge im Abschnitt "Contributing" (neu anlegen falls nicht vorhanden) einen kurzen Hinweis ein:
```markdown
## Conventions
See [CONVENTIONS.md](./CONVENTIONS.md) for naming, commit, and BIZ/DEV separation rules.
Architecture decisions are documented in [decisions/](./decisions/).
```

---

## Entscheidungsregeln

- Wenn eine Konvention einen bestehenden Code-Stand verletzt → dokumentieren in `CONVENTIONS.md` unter "Known Exceptions", nicht sofort fixen
- Wenn BIZ vs. DEV unklar → BIZ-Zweifel gilt: nicht in DEV-Commit aufnehmen
- Wenn ein Parking-Lot-Eintrag zu klein für ein GitHub Issue ist → in `context/todo.md` belassen, kein Issue nötig

---

## Akzeptanzkriterien

- [ ] `CONVENTIONS.md` existiert im Projektroot und ist lesbar ohne Kontext-Vorwissen
- [ ] `decisions/README.md` und `decisions/0001-...md` existieren
- [ ] `context/todo.md` hat GitHub-Issues-Hinweis im Header
- [ ] `.gitmessage` existiert, `git config commit.template` ist gesetzt
- [ ] `README.md` verweist auf `CONVENTIONS.md` und `decisions/`
- [ ] Kein bestehender Code wurde verändert

---

## Output

| Datei | Aktion |
|---|---|
| `CONVENTIONS.md` | erstellt |
| `decisions/README.md` | erstellt |
| `decisions/0001-language-and-naming-conventions.md` | erstellt |
| `context/todo.md` | geändert (Header: GitHub-Issues-Hinweis) |
| `.gitmessage` | erstellt |
| `README.md` | geändert (Conventions-Abschnitt) |
