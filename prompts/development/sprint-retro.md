# OIA · Sprint Review, Retro & Planning

**Prompt-Typ:** Execution
> Ein vollständiger Sprint-Abschluss in drei Phasen: **Review** (was wurde wirklich erledigt?), **Retro** (was lief nicht gut, was verbessern wir?), **Planning** (was machen wir als nächstes?). Wird ausgeführt, wenn der laufende Sprint abgeschlossen werden soll.

---

## Kontext

Lies vor der Ausführung:
- `decisions/0003-github-issues-as-task-tracker.md` — verbindliches Issue-Format und Abschluss-Konventionen
- `decisions/0005-conventional-commits-with-content-type.md` — `Closes #N` / `Refs #N` Footer-Konvention

Aktives Repository: aus `git remote get-url origin` ermitteln.

---

---

# PHASE A — Review

> Läuft vollständig durch, keine Unterbrechung.

## Ziel (Phase A)

Alle erledigten-aber-offenen Issues sind geschlossen. Die Acceptance Criteria der letzten 10 geschlossenen Issues sind gegen das Repo geprüft. Eine Abweichungsliste liegt vor.

## Constraints (Phase A)

- Implementiert **nichts**
- Ändert **keine** Quelldateien
- Schließt **kein** Issue ohne Nachweis (Commit-Referenz oder explizit bestätigte Implementierung)
- Bewertet **keine** BIZ-Inhalte (OIA-Modell-Layer, Terminologie)

---

## Schritte (Phase A)

### A-1 — Issue-Hygiene: Erledigte aber noch offene Issues finden

```bash
git log --oneline -30
gh issue list --state open --limit 100
```

1. Scanne die letzten 30 Commits auf `Closes #N`, `Fixes #N`, `Refs #N`-Footer.
2. Prüfe für jede referenzierte Issue-Nummer: Ist das Issue noch offen?
3. Prüfe zusätzlich: Gibt es offene Issues, deren **Titel oder Scope** eindeutig von einem neueren Commit abgedeckt wird — auch ohne expliziten Footer?
4. Liste alle Kandidaten mit Begründung (Commit-Hash + Commit-Nachricht als Nachweis).
5. Schließe alle bestätigten Fälle:

```bash
gh issue close <N> --comment "Closed: implemented in commit <HASH> — <COMMIT_TITLE>"
```

**Entscheidungsregel:** Unsichere Fälle → nicht schließen, stattdessen Kommentar im Issue: "Possibly done in <HASH> — please confirm."

---

### A-2 — Abnahme-Review: Letzte 10 geschlossene Issues

```bash
gh issue list --state closed --limit 10
```

Für jedes der 10 Issues:

1. Lies den vollständigen Issue-Body (Acceptance criteria).
2. Prüfe im Repo, ob jedes Akzeptanzkriterium tatsächlich erfüllt ist:
   - Existiert die genannte Datei?
   - Enthält sie das beschriebene Element?
   - Wurde ein genanntes Kommando / Label / Konfiguration umgesetzt?
3. Klassifiziere:
   - ✅ **Vollständig** — alle Kriterien erfüllt
   - ⚠️ **Teilweise** — mindestens eines fehlt oder weicht ab
   - ❌ **Offen** — Kernaussage des Issues ist nicht umgesetzt

**Ausgabe:** Tabellarische Liste aller 10 Issues mit Status + Abweichungsbeschreibung (max. 1 Satz).

---

## Entscheidungsregeln (Phase A)

| Situation | Verhalten |
|---|---|
| Commit-Footer fehlt, aber Implementierung eindeutig erkennbar | Issue schließen + Hinweis auf fehlenden Footer |
| Issue hat keine Acceptance Criteria | Als ⚠️ werten — fehlende AC = nicht überprüfbar |
| `gh` CLI nicht verfügbar | Ergebnisse als Markdown-Ausgabe, kein Issue schließen |

---

## Akzeptanzkriterien (Phase A)

- [ ] Erledigte-aber-offene Issues identifiziert und geschlossen (oder begründet nicht geschlossen)
- [ ] Alle 10 Issues gegen ihre AC geprüft
- [ ] Abweichungsliste ausgegeben (auch wenn leer)

---

---

# PHASE B — Retro

> Läuft vollständig durch, keine Unterbrechung. Basiert auf Abweichungsliste aus Phase A.

## Ziel (Phase B)

Die 3 wirkungsvollsten Prozessverbesserungen aus dem Sprint existieren als ein einziges GitHub Issue.

## Constraints (Phase B)

- **Nur ausführen** wenn Phase A Abweichungen ergab (⚠️ oder ❌)
- Fasst die **3 Maßnahmen** in einem einzigen Issue zusammen — nicht 3 separate Issues
- Erstellt **kein** Issue ohne vorherige Duplikatprüfung

---

## Schritte (Phase B)

### B-1 — Ursachenanalyse

Für jede Abweichung aus Phase A: kurze Hypothese. Kategorien:

| Kategorie | Beispiel |
|---|---|
| **Acceptance Criteria zu vage** | "File exists" statt "File exists with sections X, Y, Z" |
| **Scope-Creep** | Issue teilweise umgesetzt, Rest vergessen |
| **Kein Commit-Footer** | Issue nicht verknüpft → geht vergessen |
| **Issue zu groß** | Mehrere Aufgaben in einem Issue → nur Teil erledigt |
| **Review fehlte** | Keine Überprüfung nach Commit, ob AC wirklich erfüllt |

### B-2 — Maßnahmen entwickeln + priorisieren

Pro Ursachen-Kategorie maximal eine konkrete Maßnahme. Bewerte nach: **Nutzen · Aufwand · Nachhaltigkeit**. Wähle die **3 besten**.

### B-3 — Duplikatprüfung

```bash
gh issue list --state open --limit 100
```

### B-4 — Retro-Issue erstellen

```bash
gh issue create \
  --title "chore(process): implement sprint retro improvements (<DATUM>)" \
  --label "domain:dev,infra" \
  --body "<Body>"
```

Body-Format:
```markdown
## Context
Sprint Retro vom <DATUM>. Review der letzten 10 Issues ergab <N> Abweichungen.

## Findings (Abweichungen)
- Issue #X: [Beschreibung]

## Root Causes
- [Ursache] → [betroffene Issues]

## Action — 3 Maßnahmen (priorisiert)

### 1. [Maßnahme]
[Konkrete Umsetzung, max. 2 Sätze]

### 2. [Maßnahme]
[Konkrete Umsetzung, max. 2 Sätze]

### 3. [Maßnahme]
[Konkrete Umsetzung, max. 2 Sätze]

## Acceptance criteria
- [ ] Maßnahme 1 umgesetzt und verankert (CONVENTIONS.md / Prompt / ADR)
- [ ] Maßnahme 2 umgesetzt
- [ ] Maßnahme 3 umgesetzt
- [ ] Nächster Sprint Retro zeigt Rückgang der Abweichungsrate
```

---

## Entscheidungsregeln (Phase B)

| Situation | Verhalten |
|---|---|
| Keine Abweichungen in Phase A | Phase B überspringen — kurze Bestätigung ausgeben |
| Abweichung ist trivial | Als Beobachtung im Issue, keine eigene Maßnahme |
| Weniger als 3 Abweichungen | Nur 1–2 Maßnahmen, Titel anpassen |
| Mehr als 5 Abweichungen | Top 5 nach Impact, Rest als "further observations" |

---

## Akzeptanzkriterien (Phase B)

- [ ] Retro-Issue erstellt (falls Abweichungen) oder Abwesenheit bestätigt
- [ ] Retro-Issue enthält max. 3 Maßnahmen

---

---

# PHASE C — Sprint Planning

> Interaktiv — enthält zwei explizite Checkpoints, an denen auf Chat-Antwort gewartet wird.

## Ziel (Phase C)

Ein abgestimmter Sprint-Scope existiert: eine Liste von Issues, die ein Sprintziel bestmöglich unterstützen — weder zu viel noch zu wenig — und ein Shake-Hands zum Start.

## Constraints (Phase C)

- Erstellt **keine neuen Issues** vor Checkpoint 1
- Schlägt **keine Issues vor**, die nicht thematisch mit dem Sprintziel zusammenhängen
- Fasst den Scope **nicht** ohne explizite Bestätigung ab
- **Wartet** nach jedem Checkpoint auf eine Chat-Antwort — führt nicht eigenständig weiter

---

## Schritte (Phase C)

### C-1 — Sprintziel aufnehmen

Das Sprintziel wird vom Nutzer als Freitext zusammen mit dem Prompt übergeben.

Falls keines übergeben wurde:
> **STOP — Eingabe fehlt.** Bitte das Sprintziel als Freitext eingeben: "Was soll am Ende des nächsten Sprints erreicht sein?"

Paraphrasiere das Ziel in einem Satz:
> "Ich verstehe das Sprintziel als: **[Paraphrase]**. Korrekt?"

Falls korrigiert: Sprintziel aktualisieren, dann weiter.

---

### C-2 — Issue-Scan: Thematisch passende Issues finden

```bash
gh issue list --state open --limit 100
```

Ordne jeden offenen Issue einem von drei Buckets zu:

| Bucket | Kriterium |
|---|---|
| 🎯 **Direkt** | Issue unterstützt das Sprintziel unmittelbar |
| 🔗 **Indirekt** | Voraussetzung für ein direktes Issue oder sinnvolle Ergänzung |
| ⬜ **Nicht relevant** | Kein erkennbarer Bezug |

Zeige nur 🎯 und 🔗 Issues mit je einem Satz Begründung.

---

### C-3 — Scope-Vorschlag + Gap-Analyse

**Vorgeschlagener Sprint-Scope:**

Präsentiere 🎯 als Kernscope, 🔗 als optional. Größeneinschätzung pro Issue:

| Größe | Richtwert |
|---|---|
| S | < 30 Minuten |
| M | 30 Min – 2 Stunden |
| L | halber Tag |
| XL | mehrere Tage → Aufteilen empfohlen |

**Gap-Analyse:** Fehlen Issues, die das Ziel gut unterstützen würden aber noch nicht existieren? Pro Lücke: ein Satz + Empfehlung (anlegen oder nicht).

---

### ⏸ CHECKPOINT 1 — Scope-Feedback

> **STOP — Ausgabe an Nutzer. Warten auf Chat-Antwort.**

Frage explizit:
1. Ist der Scope richtig (zu viel / zu wenig / passt)?
2. Sollen Issues aus der Gap-Analyse angelegt werden — welche?
3. Sollen Issues aus dem Scope herausgenommen werden?

**Nicht weiter, bis Chat-Antwort vorliegt.**

---

### C-4 — Scope finalisieren

Führe aus, was in Checkpoint 1 bestätigt wurde:

- Neue Issues anlegen (falls bestätigt):

```bash
gh issue create \
  --title "<type>(<scope>): <description>" \
  --label "<domain>,<category>" \
  --body "<Context + Action + Acceptance criteria>"
```

Zeige den finalen Scope:

```
Sprint-Scope — [DATUM]
Ziel: [Sprintziel]

🎯 Kern:
  #N  [Titel]  [Größe]

🔗 Optional (falls Zeit):
  #N  [Titel]  [Größe]

Gesamt Kern: [Summe]
```

---

### ⏸ CHECKPOINT 2 — Shake-Hands

> **STOP — Ausgabe an Nutzer. Warten auf Chat-Antwort.**

> "Scope steht. Bereit zum Start? — Antworte mit **'Start'** oder gib letzte Korrekturen durch."

Nach Bestätigung:
> "Sprint gestartet. Viel Erfolg. Beim nächsten Abschluss: diesen Prompt erneut ausführen."

---

## Entscheidungsregeln (Phase C)

| Situation | Verhalten |
|---|---|
| Kein Sprintziel | STOP — Eingabe anfragen |
| Scope > 5 direkte Issues | Hinweis: "Möglicherweise zu groß — Priorisierung auf 3–5 Kern-Issues empfohlen" |
| Scope = 0 direkte Issues | Hinweis: "Keine passenden Issues — Gap-Analyse zeigt nötige neue Issues" |
| XL-Issue im Scope | Warnung: "Issue #N ist XL — Aufteilen vor Sprint-Start empfohlen" |
| Nutzer bestätigt ohne Änderungen | Direkt zu Checkpoint 2 |

---

## Akzeptanzkriterien (Phase C)

- [ ] Sprintziel paraphrasiert und bestätigt
- [ ] Alle offenen Issues gescannt und bewertet
- [ ] Scope-Vorschlag mit Größen ausgegeben
- [ ] Gap-Analyse durchgeführt
- [ ] Checkpoint 1: Feedback eingeholt und umgesetzt
- [ ] Checkpoint 2: Shake-Hands erfolgt
- [ ] Finaler Scope schriftlich ausgegeben

---

---

# Zusammenfassung am Ende des vollständigen Durchlaufs

Zeige nach Phase C:

```
Sprint-Abschluss — [DATUM]

Phase A (Review):
  Issues geschlossen:   N  (#...)
  Issues reviewed:      10
  Status:               ✅ X  ⚠️ Y  ❌ Z
  Abweichungsrate:      X%

Phase B (Retro):
  Retro-Issue:          #N (URL) | nicht nötig

Phase C (Planning):
  Neue Issues:          N  (#...)
  Sprint-Scope:         N Kern-Issues, N optionale
  Sprintziel:           [ein Satz]
```

---

## Output

```
Phase A: GitHub Issues — geschlossen (Anzahl variabel)
Phase B: GitHub Issue — 1 Retro-Issue (falls Abweichungen)
Phase C: GitHub Issues — ggf. neue Issues (Gap-Analyse)
         Chat-Ausgabe — finaler Sprint-Scope als Liste
```
