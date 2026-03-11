# Todo-Infrastruktur Setup
> **Prompt-Typ:** Execution
> Legt die Strukturen an, die es danach ermöglichen, Beobachtungen und offene Punkte schnell und unkompliziert festzuhalten — ohne den laufenden Arbeitsfluss zu unterbrechen.

---

## Kontext

Betroffen: Arbeitsinfrastruktur des OIA-Projekts.

Relevante Dateien (vor Ausführung lesen):
- `context/oia-context.md` — Terminologie (nur lesen)
- `.claude/commands/` — prüfen ob bereits vorhanden

---

## Ziel

Nach Ausführung dieses Prompts kann jeder Beteiligte (Mensch oder Agent) eine Beobachtung mit einem einzigen, einheitlichen Befehl festhalten. Die gesammelten Einträge sind ohne Session-Kontext lesbar und priorisierbar.

---

## Constraints

- Ändert **keine** bestehenden Projektdateien (kein `oia-model.json`, kein CSS, kein Code)
- Erstellt **keine** Inhalts-Einträge — nur die Infrastruktur
- Überschreibt **keine** bereits vorhandenen Dateien — prüft zuerst, ob sie existieren
- Legt **keine** eigene Terminologie fest, die mit `context/oia-context.md` kollidiert

---

## Schritte

### Schritt 1 — `context/todo.md` anlegen

Erstelle die Datei mit folgendem Inhalt:

```markdown
# OIA · Parking Lot

Beobachtungen, offene Punkte und Ideen, die während der Arbeit auffallen
und nicht sofort umgesetzt werden können.

Einträge werden mit `/todo` oder direkt hinzugefügt.
Format: chronologisch, neueste Einträge unten.

Kategorien: model | renderer | prompt | architecture | infra | ux
Dringlichkeit: low | medium | high
Status: open | in-progress | done | wont-do

---

<!-- Einträge folgen hier -->
```

> Falls die Datei bereits existiert: nur prüfen, ob die Kopfzeile das Kategorie/Status-Schema enthält — ggf. ergänzen, nicht ersetzen.

---

### Schritt 2 — Slash-Command `.claude/commands/todo.md` anlegen

Erstelle `.claude/commands/todo.md` mit folgendem Inhalt:

```markdown
Füge den folgenden Punkt als neuen Eintrag in `context/todo.md` ein.
Implementiere nichts. Analysiere nichts. Nur festhalten.

Verwende dieses Format:

### [HEUTIGES DATUM] $ARGUMENTS
- **Kategorie:** (model | renderer | prompt | architecture | infra | ux)
- **Dringlichkeit:** medium
- **Beobachtung:** $ARGUMENTS
- **Kontext:** (aus dem laufenden Gespräch ableiten, falls erkennbar)
- **Status:** open

Bestätige mit einer Zeile: "→ Eingetragen: [Kurztitel]"
```

> Falls `.claude/commands/` nicht existiert: Verzeichnis anlegen.
> Falls die Datei bereits existiert: Inhalt vergleichen, nur bei wesentlicher Abweichung ersetzen.

---

### Schritt 3 — Konvention dokumentieren

Ergänze in `context/oia-context.md` unter einem neuen Abschnitt `## Arbeitskonventionen` (oder append, falls bereits vorhanden):

```markdown
## Arbeitskonventionen

### Todo / Parking Lot
- Beobachtungen → `/todo <Beschreibung>` oder direkt in `context/todo.md`
- Kategorien: model | renderer | prompt | architecture | infra | ux
- Status-Werte: open | in-progress | done | wont-do
- Review: regelmäßig zu Sessionbeginn kurz durchsehen
```

---

## Entscheidungsregeln

| Situation | Verhalten |
|---|---|
| `context/todo.md` existiert bereits | Nur Kopfzeile/Schema prüfen, nicht überschreiben |
| `.claude/commands/todo.md` existiert bereits | Inhalt vergleichen — nur ersetzen wenn Schema fehlt |
| `context/oia-context.md` hat bereits "Arbeitskonventionen" | Nur den Todo-Abschnitt ergänzen, falls fehlend |
| `.claude/commands/` existiert nicht | Verzeichnis anlegen, dann Datei erstellen |

---

## Akzeptanzkriterien

- [ ] `context/todo.md` existiert mit Kopfzeile inkl. Kategorie- und Status-Schema
- [ ] `.claude/commands/todo.md` existiert und enthält `$ARGUMENTS`
- [ ] `context/oia-context.md` enthält den Todo-Konventions-Abschnitt
- [ ] Ein Test-Eintrag mit `/todo Infrastruktur-Setup abgeschlossen` lässt sich sofort anlegen

---

## Output

```
context/todo.md              — erstellt
.claude/commands/todo.md     — erstellt
context/oia-context.md       — geändert (Abschnitt ergänzt)
```
