# OIA Prompt Helper
> Erstellt strukturierte, ausführbare Prompts für das OIA-Projekt.

---

## Tanzbereich — Was der Helper erstellt (und was nicht)

Der Prompt Helper erstellt Prompts, die **dauerhafte Änderungen am Projekt** bewirken:

| Erstellt | Nicht erstellt |
|---|---|
| Workflows, die einen neuen Entwicklungsprozess einführen | Session-Commands für Einzel-Aktionen |
| Setup-Prompts, die Infrastruktur anlegen (Dateien, Konventionen, Slash-Commands) | Prompts, die einen einzelnen Wert / eine einzelne Beobachtung erfassen |
| Prozess-Prompts, die beschreiben wie etwas wiederholt gemacht wird | Checklisten für einmalige Schritte |
| Prompts, die das Modell, die Darstellung oder das Tooling erweitern | Direkte Ausführung ohne Prompt als Zwischenartefakt |

**Faustregel:** Wenn der resultierende Prompt nur einmal sinnvoll ist → kein Prompt-Helper-Fall.
Wenn der Prompt eine wiederholbare Arbeitsweise im Projekt etabliert → Prompt-Helper-Fall.

**Beispiele für gültige Prompt-Helper-Aufgaben:**
- "Erstelle einen Prompt, der Todo-Infrastruktur im Projekt anlegt (Datei + Slash-Command)"
- "Erstelle einen Prompt, der einen neuen Diagramm-Export-Workflow einführt"
- "Erstelle einen Prompt, der das Modell um einen neuen Layer-Typ erweitert"

**Beispiele für ungültige Aufgaben (direkter Chat reicht):**
- "Erfasse diese Beobachtung für mich"
- "Füge diesen Eintrag zu einer Liste hinzu"

---

## System-Kontext

**Lies vor dem Erstellen des Prompts:**
- `context/oia-context.md` — Architekturschichten, Terminologie, Backlog (DE)
- `context/oia-project-instruction-prompt.md` — Rolle, Mission, Zielgruppe

**Scanne auf bereits vorhandene ähnliche Prompts:**
- `prompts/development/` — technische Ausführungs-Prompts
- `prompts/` — alle weiteren Prompts inkl. Vorgänger-Versionen

**Single Source of Truth für Modellinhalte:** `oia-site/src/data/oia-model.json`

**Ausführungskontext:** Nutze relative Pfade — Claude kennt das Arbeitsverzeichnis aus der Session.

---

## Prompt-Typ

Wähle den Typ, bevor du die Struktur festlegst:

| Typ | Wann | Typische Outputs |
|---|---|---|
| **Execution** | Baue / implementiere etwas | Dateien, Code, Konfiguration |
| **Generation** | Erstelle Inhalte | Artikel, Diagramme, JSON-Daten |
| **Refinement** | Aktualisiere / verbessere Bestehendes | Geänderte Dateien, neue Version |

**Typ dieser Aufgabe:** `{EXECUTION | GENERATION | REFINEMENT}`

---

## Aufgabe

### Ausgangssituation

{BESCHREIBUNG_DES_PROBLEMS_ODER_VORHABENS}

### Ausgangsartefakte

- `{BESTEHENDER_PROMPT_ODER_DATEI}` — Rolle: `{Ausgangspunkt | Referenz | wird ersetzt}`
- `{WEITERE_REFERENZEN}`

### Änderungen gegenüber Vorgänger

> Nur ausfüllen bei Refinement. Bei neuen Prompts: "Neu — kein Vorgänger."

{DELTA_ZUM_VORGAENGER}

---

## OIA-spezifische Regeln

Diese Regeln gelten für jeden generierten Prompt:

1. **Terminologie** — Begriffe aus `context/oia-context.md` Abschnitt "Terminologie" werden nicht umdefiniert
2. **JSON-Modell-Änderungen** — Strukturelle Änderungen an `oia-model.json` (neue Layer, ID-Schema) → erst zur Review vorlegen, nicht direkt ausführen
3. **Kein Inline-Kontext** — Kontext wird per Dateipfad referenziert, nicht wiederholt
4. **Ein Prompt, eine Aufgabe** — Scope-Creep wird explizit zurückgewiesen
5. **Irreversible Schritte markieren** — Git-Operationen, Dateiüberschreibungen, Deployments

---

## Output-Schema für den generierten Prompt

```
## Kontext
Welcher Teil des OIA-Projekts ist betroffen?
Welche Dateien sind relevant (nur Pfade, kein Inhalt)?

## Ziel
Ein Satz: Was soll am Ende existieren oder sich verändert haben?

## Constraints
Was darf der Prompt NICHT tun?
(z. B. "Ändert kein bestehendes CSS", "Berührt oia-model.json nicht")

## Inputs
Dateien, die gelesen werden müssen — mit konkreten Pfaden.

## Schritte
Nummerierte, ausführbare Schritte.
Jeder Schritt hat genau ein Ergebnis.

## Entscheidungsregeln
Was tun bei Unklarheiten oder Konflikten?
(z. B. "Wenn ID-Konflikt → frage nach, führe nicht aus")

## Akzeptanzkriterien
Woran erkennt man, dass der Prompt erfolgreich ausgeführt wurde?
(z. B. "npm run test läuft grün", "Build erzeugt dist/")

## Output
Welche Dateien werden erstellt oder geändert?
Format: `pfad/zur/datei.ext` — erstellt | geändert | gelöscht
```

---

## Few-Shot: Beispiel eines guten OIA-Prompts

> Referenz: `prompts/development/build-microsite.md`

Was diesen Prompt gut macht:
- **Kontext** ist kurz — nur Projektpfad + Architekturübersicht, kein Fließtext
- **Constraints** sind explizit — "Kein manuelles HTML", "Kein Backend", "Design Tokens 1:1"
- **Schritte** sind nummeriert und phasenweise — jede Phase hat ein abgeschlossenes Artefakt
- **Ausführungsreihenfolge** am Ende — auch bei verteilter Arbeit klar, was zuerst kommt
- **Akzeptanzkriterien** eingebettet in Phasen — z. B. "Tests müssen grün sein"

Was ein schlechter OIA-Prompt macht (Anti-Pattern):
- Beschreibt das Was, aber nicht das Wie → Agent trifft zu viele eigene Entscheidungen
- Enthält den Projektkontext als Fließtext statt als Pfad-Referenz → veraltet sofort
- Vermischt Modell-Änderung + Renderer-Änderung + Deployment in einem Prompt → nicht isolierbar

---

## Ergebnis

Du bist fertig, wenn:

- [ ] Prompt-Typ ist festgelegt
- [ ] `Constraints` sind explizit formuliert (nicht nur implizit)
- [ ] `Akzeptanzkriterien` sind messbar (nicht "sieht gut aus")
- [ ] Kein Projektkontext ist inline wiederholt — nur Pfad-Referenzen
- [ ] Der Prompt ist unter folgendem Pfad gespeichert:

```
{ZIELPFAD_ZUM_PROMPT}
```
