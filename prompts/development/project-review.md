# OIA · Project Review

**Prompt-Typ:** Execution
**Refs:** #11
> Scannt das OIA-Projekt selbständig, prüft alle ADRs auf Compliance, und erstellt GitHub Issues für neue Befunde. Keine statischen Pfade — alles wird aus dem Projekt ermittelt.

---

## Kontext

Lies vor der Ausführung:
- `CONVENTIONS.md` — verbindliche Regeln
- `CLAUDE.md` — Scope-Regeln (BIZ/DEV)

Projektroot: aktuelles Arbeitsverzeichnis.

---

## Ziel

Am Ende sind alle neuen Befunde (Konventionsverstöße, ADR-Verletzungen, strukturelle Probleme) als GitHub Issues angelegt — ohne Duplikate, ohne Implementierung.

---

## Constraints

- Implementiert **nichts** — nur Analyse und Issue-Erstellung
- Ändert **keine** Quelldateien
- Erstellt **kein** Issue ohne vorherige Duplikatprüfung
- Bewertet **keine** BIZ-Inhalte (OIA-Layer-Struktur, Modell-IDs, Architektur-Terminologie)
- Greift **nicht** in `node_modules`, `.git`, `dist`, `build` ein
- Fügt **kein** vages Issue ein ("Code verbessern") — jedes Issue braucht eine konkrete Aktion

---

## Schritt 0 — Discovery

Ermittle selbständig:

1. **Projektstruktur**: Alle Dateien und Ordner im Root (eine Ebene tief).
2. **Source-Verzeichnis** (`src/`, `lib/`, o.Ä.), **Test-Verzeichnis**, **Style-Verzeichnis**, **CI/CD-Konfiguration**.
3. **ADR-Verzeichnis**: Scanne `decisions/` auf alle `*.md`-Dateien außer `README.md`. Für jede ADR: lies `**Decision:**` und `**Type:**` Zeilen — diese definieren was geprüft wird.
4. **Offene GitHub Issues**: Lade die aktuelle Issue-Liste (`gh issue list --state open --limit 100`). Halte Titel und Nummern intern fest — wird in Schritt 3 zur Duplikatprüfung verwendet.

Zeige kurz die erkannte Struktur und die gefundenen ADRs (3–7 Zeilen) bevor du mit der Analyse beginnst.

---

## Schritt 1 — Analyse: 7 Dimensionen

Für jeden Befund: konkret benennen (Datei + Zeile wenn möglich), Priorität vormerken.

### Dimension 1 · Projektstruktur & Ordner-Organisation
- Dateien im Root, die in einen Unterordner gehören?
- Doppelte Dateien mit ähnlichen Namen an verschiedenen Orten?
- Ordnernamen inkonsistent (gemischt Deutsch/Englisch)?
- Archiv-/Draft-Bereiche klar von aktivem Inhalt abgegrenzt?
- Dateien, die nirgendwo referenziert werden (verwaist)?

### Dimension 2 · Datenmodell & Typsystem
- Primäre Modelldatei (JSON/YAML/Schema): IDs konsistent? Pflichtfelder vollständig?
- TypeScript-Typen: `any`-Typen ohne Kommentar? Type-Casts ohne Begründung?
- Felder im Modell, die im Typsystem nicht abgebildet sind (oder umgekehrt)?

### Dimension 3 · Source-Code & Architektur
- Dateien > 150 Zeilen → Kandidaten zum Aufteilen?
- Identische/ähnliche Code-Blöcke (DRY-Verletzungen)?
- Hartkodierte Werte, die aus dem Datenmodell kommen sollten?
- Ungenutzte Exporte, Imports oder tote Code-Pfade?

### Dimension 4 · Styling
- Magic Numbers (Farben, Größen) die Design Tokens sein sollten?
- CSS-Klassen, die im HTML/JS-Code nicht verwendet werden?
- Inline-Styles für wiederkehrende Werte (statt CSS-Variablen)?

### Dimension 5 · Tests
- Source-Dateien ohne zugehörige Testdatei?
- Kritische User-Flows (Routing, Navigation, Interaktion) ohne Test-Abdeckung?
- Tests, die Implementierungsdetails statt Verhalten prüfen?

### Dimension 6 · Tooling & Automatisierung
- Fehlende Scripts (lint, format, typecheck, audit)?
- CI/CD: Deckt es Build, Test und Deploy ab? Manuelle Schritte, die automatisiert werden könnten?
- Dev-Dependencies klar von Prod-Dependencies getrennt?

### Dimension 7 · Dokumentation & Prompts
- README.md aktuell (beschreibt aktuelle Projektstruktur)?
- Prompts ohne die 4 Pflicht-Abschnitte (`## Kontext`, `## Ziel`, `## Constraints`, `## Akzeptanzkriterien`)?
- Prompts mit hardkodierten Pfaden, die veraltet sein könnten?
- Dokumentation, die nicht mehr zum Code passt?

---

## Schritt 1b — ADR-Compliance-Check

Für jede in Schritt 0 gefundene ADR:

1. Lies die vollständige ADR.
2. Leite daraus ab: **Welche konkreten Eigenschaften muss das Projekt erfüllen?**
   - Beispiel ADR-0001 (Sprache): Alle TS-Variablen/Funktionen müssen englisch sein → prüfe Quellcode auf deutsche Bezeichner.
   - Beispiel ADR-0002 (BIZ/DEV): Kein Commit darf beide Domains berühren → prüfe Git-Log auf gemischte Commits.
   - Beispiel ADR-0005 (Commits): Footer muss `Closes #N` oder `Refs #N` enthalten → prüfe letzten 10 Commits.
   - Beispiel ADR-0006 (Prompt-Helper): Alle `prompts/**/*.md` müssen 4 Pflichtabschnitte haben → prüfe alle Prompt-Dateien.
3. Halte Verletzungen als Befunde fest (mit Datei + Zeile).

---

## Schritt 2 — Priorisieren

Weise jedem Befund zu:
- 🔴 Blocker oder Inkonsistenz, die Folgefehler erzeugt
- 🟡 Verbesserung mit klarem, mittelfristigem Nutzen
- 🟢 Nice-to-have, langfristig oder optional

---

## Schritt 3 — Duplikatprüfung & Issue-Erstellung

Für jeden Befund aus Schritt 1 + 1b:

### 3.1 Duplikatprüfung
Vergleiche den Befund mit der in Schritt 0 geladenen Issue-Liste:
- Suche nach Überschneidungen im **Titel** und in der **betroffenen Datei/Komponente**.
- Bei eindeutiger Überschneidung: **Issue überspringen**, in Zusammenfassung als "bereits offen: #N" vermerken.
- Bei Unsicherheit: Issue erstellen, mit Hinweis "möglicherweise verwandt mit #N".

### 3.2 Issue erstellen
Für neue Befunde ohne Duplikat:

```
gh issue create \
  --title "<type>(<scope>): <imperative description>" \
  --label "<domain:dev|domain:biz>,<category>" \
  --body "<Kontext + Aktion + Akzeptanzkriterien>"
```

Issue-Body-Format:
```markdown
## Context
[Datei(en) + konkrete Beobachtung + warum es ein Problem ist]

## Action
[Was konkret zu tun ist — spezifisch genug dass jemand ohne Kontext starten kann]

## Acceptance criteria
- [ ] [Messbares Kriterium]
- [ ] All tests still green (falls DEV)
```

Labels: verwende `domain:dev` oder `domain:biz` + mindestens ein Kategorie-Label (`renderer`, `model`, `infra`, `ux`, `prompt`, `architecture`, `content`).

### 3.3 Zu klein für ein Issue?
Wenn ein Befund kleiner als S (unter 30 Minuten, trivial) ist: trage ihn in `context/todo.md` unter dem passenden Abschnitt ein statt ein Issue zu erstellen.

---

## Schritt 4 — Zusammenfassung ausgeben

Zeige nach Abschluss:
- Anzahl neue Issues erstellt (mit Nummern)
- Anzahl übersprungen (Duplikate, mit Issue-Nummern)
- Anzahl in `context/todo.md` eingetragen (zu klein für Issue)
- Welche Dimension / ADR hat die meisten Findings?
- Empfohlener erster Schritt und warum

---

## Entscheidungsregeln

| Situation | Verhalten |
|---|---|
| Befund ist unklar oder könnte Absicht sein | Als 🟢-Issue mit "Investigate whether..." im Titel |
| Zwei Befunde beschreiben dasselbe Problem | Zusammenführen zu einem Issue |
| Offenes GitHub Issue deckt Befund bereits ab | Überspringen — in Zusammenfassung vermerken |
| Datei oder Ordner nicht auffindbar | In Zusammenfassung als "nicht geprüft: [was]" vermerken |
| Mehr als 5 Befunde in einer Dimension | Top 5 nach Impact auswählen |
| BIZ-Inhalt betroffen (Modell-IDs, Layer-Namen) | Kein Issue erstellen — BIZ-Entscheidung, außer Scope |
| `gh` CLI nicht verfügbar | Befunde in `context/todo.md` eintragen als Fallback |

---

## Akzeptanzkriterien

- [ ] Schritt 0 wurde ausgeführt: Discovery + ADR-Liste + offene Issues geladen
- [ ] Alle 7 Dimensionen + alle gefundenen ADRs wurden geprüft
- [ ] Kein Issue ohne vorherige Duplikatprüfung erstellt
- [ ] Jedes neue Issue hat: Titel im Conventional-Commits-Format, mindestens 2 Labels, konkreten Body
- [ ] Nichts wurde implementiert
- [ ] Zusammenfassung mit empfohlenem ersten Schritt wurde ausgegeben

---

## Output

```
GitHub Issues — neue Issues erstellt (Nummern in Zusammenfassung)
context/todo.md — optional: neue Einträge für triviale Befunde (< 30min)
```
