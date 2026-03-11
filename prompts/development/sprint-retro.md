# OIA · Sprint Retro & Issue Review

**Prompt-Typ:** Execution
> Prüft Issue-Hygiene, führt ein Abnahme-Review der letzten erledigten Issues durch und leitet Retro-Maßnahmen als GitHub Issue ab. Wiederholt ausführbar am Ende jeder Arbeitsphase.

---

## Kontext

Lies vor der Ausführung:
- `decisions/0003-github-issues-as-task-tracker.md` — verbindliches Issue-Format und Abschluss-Konventionen
- `decisions/0005-conventional-commits-with-content-type.md` — `Closes #N` / `Refs #N` Footer-Konvention

Aktives Repository: aus `git remote get-url origin` ermitteln.

---

## Ziel

Am Ende sind offene-aber-erledigte Issues geschlossen, eine Abweichungsliste für die letzten 10 Issues ist erstellt, und die 3 wirkungsvollsten Prozessverbesserungen existieren als ein einziges GitHub Issue.

---

## Constraints

- Implementiert **nichts** — nur Analyse, Schließen von Issues und Issue-Erstellung
- Ändert **keine** Quelldateien
- Schließt **kein** Issue ohne Nachweis (Commit-Referenz oder explizit bestätigte Implementierung)
- Erstellt **kein** Retro-Issue ohne vorherige Duplikatprüfung
- Bewertet **keine** inhaltlichen BIZ-Entscheidungen (OIA-Modell-Layer, Terminologie)
- Fasst die **3 Maßnahmen** in einem einzigen Issue zusammen — nicht 3 separate Issues

---

## Inputs

- `git log --oneline -30` — letzte 30 Commits mit Footern
- `gh issue list --state open --limit 100` — aktuell offene Issues
- `gh issue list --state closed --limit 20` — zuletzt geschlossene Issues (für Review)

---

## Schritte

### Schritt 1 — Issue-Hygiene: Erledigte aber noch offene Issues finden

```bash
git log --oneline -30
gh issue list --state open --limit 100
```

1. Scanne die letzten 30 Commits auf `Closes #N`, `Fixes #N`, `Refs #N`-Footer.
2. Prüfe für jede referenzierte Issue-Nummer: Ist das Issue noch offen?
3. Prüfe zusätzlich: Gibt es offene Issues, deren **Titel oder Scope** eindeutig von einem neueren Commit abgedeckt wird — auch ohne expliziten Footer?
4. Liste alle Kandidaten mit Begründung (Commit-Hash + Commit-Nachricht als Nachweis).
5. Schließe alle bestätigten Fälle mit Kommentar:

```bash
gh issue close <N> --comment "Closed: implemented in commit <HASH> — <COMMIT_TITLE>"
```

**Entscheidungsregel:** Unsichere Fälle (kein eindeutiger Nachweis) → nicht schließen, stattdessen als Kommentar im Issue vermerken: "Possibly done in <HASH> — please confirm."

---

### Schritt 2 — Abnahme-Review: Letzte 10 geschlossene Issues

```bash
gh issue list --state closed --limit 10
```

Für jedes der 10 Issues:

1. Lies den vollständigen Issue-Body (Acceptance criteria).
2. Prüfe im Repo, ob jedes Akzeptanzkriterium tatsächlich erfüllt ist:
   - Existiert die genannte Datei?
   - Enthält sie das beschriebene Element?
   - Wurde ein genanntes Kommando / Label / Konfiguration umgesetzt?
3. Klassifiziere den Befund:
   - ✅ **Vollständig** — alle Kriterien erfüllt
   - ⚠️ **Teilweise** — mindestens eines fehlt oder weicht ab
   - ❌ **Offen** — Kernaussage des Issues ist nicht umgesetzt

**Ausgabe:** Tabellarische Liste aller 10 Issues mit Status und Abweichungsbeschreibung (max. 1 Satz pro Abweichung).

---

### Schritt 3 — Retro: Ursachen und Maßnahmen

**Nur wenn es Abweichungen (⚠️ oder ❌) aus Schritt 2 gibt.**

#### 3.1 Ursachenanalyse

Für jede Abweichung: Stelle eine kurze Hypothese an, warum sie entstanden ist. Halte dich an diese Kategorien:

| Kategorie | Beispiel |
|---|---|
| **Acceptance Criteria zu vage** | "File exists" statt "File exists with sections X, Y, Z" |
| **Scope-Creep** | Issue wurde teilweise umgesetzt, Rest vergessen |
| **Kein Commit-Footer** | Issue wurde nicht verknüpft → bleibt offen, geht vergessen |
| **Issue zu groß** | Mehrere unabhängige Aufgaben in einem Issue → nur Teil erledigt |
| **Review fehlte** | Keine Überprüfung nach Commit, ob AC wirklich erfüllt |

#### 3.2 Maßnahmen entwickeln

Leite aus den Ursachen konkrete, umsetzbare Maßnahmen ab. Pro Ursachen-Kategorie maximal eine Maßnahme.

#### 3.3 Priorisierung

Bewerte jede Maßnahme nach:
- **Nutzen:** Verhindert wie viele zukünftige Abweichungen dieser Art?
- **Aufwand:** Wie aufwändig ist die Umsetzung?
- **Nachhaltigkeit:** Verbessert sich der Prozess dauerhaft oder nur einmalig?

Wähle die **3 Maßnahmen mit dem höchsten Nutzen-Aufwand-Verhältnis**.

#### 3.4 Duplikatprüfung

```bash
gh issue list --state open --limit 100
```

Prüfe: Gibt es bereits ein offenes Issue, das eine dieser Maßnahmen abdeckt?

#### 3.5 Retro-Issue erstellen

Fasse alle 3 Maßnahmen in **einem einzigen Issue** zusammen:

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
- Issue #X: [kurze Beschreibung der Abweichung]
- Issue #Y: [kurze Beschreibung der Abweichung]

## Root Causes
- [Ursache 1] → [betroffene Issues]
- [Ursache 2] → [betroffene Issues]

## Action — 3 Maßnahmen (priorisiert)

### 1. [Maßnahme mit höchstem Nutzen]
[Konkrete Umsetzung, max. 2 Sätze]

### 2. [Zweite Maßnahme]
[Konkrete Umsetzung, max. 2 Sätze]

### 3. [Dritte Maßnahme]
[Konkrete Umsetzung, max. 2 Sätze]

## Acceptance criteria
- [ ] Maßnahme 1 umgesetzt und in CONVENTIONS.md / Prompt / ADR verankert
- [ ] Maßnahme 2 umgesetzt
- [ ] Maßnahme 3 umgesetzt
- [ ] Nächster Sprint Retro zeigt Rückgang der Abweichungsrate
```

---

### Schritt 4 — Zusammenfassung ausgeben

Zeige nach Abschluss:
- Anzahl Issues geschlossen (Schritt 1) — mit Nummern
- Anzahl Issues reviewed (Schritt 2) — Statusverteilung (✅ / ⚠️ / ❌)
- Abweichungsrate (⚠️ + ❌ / Gesamt)
- Häufigste Ursachenkategorie
- Retro-Issue-URL (falls erstellt)
- Falls keine Abweichungen: kurze Bestätigung + "Kein Retro-Issue nötig"

---

## Entscheidungsregeln

| Situation | Verhalten |
|---|---|
| Commit-Footer fehlt, aber Implementierung ist eindeutig erkennbar | Issue schließen mit Nachweis + Hinweis auf fehlenden Footer |
| Issue hat keine Acceptance Criteria | Als ⚠️ werten — fehlende AC = nicht überprüfbar |
| Abweichung ist trivial (Tippfehler, fehlender Kommentar) | In Retro-Issue als Beobachtung, keine eigene Maßnahme |
| Weniger als 3 Abweichungen insgesamt | Nur 1–2 Maßnahmen im Retro-Issue, Titel anpassen |
| Keine Abweichungen | Kein Retro-Issue erstellen — Zusammenfassung als Bestätigung |
| `gh` CLI nicht verfügbar | Alle Ergebnisse als Markdown-Ausgabe, kein Issue |
| Mehr als 5 Abweichungen | Top 5 nach Impact für Retro auswählen, Rest in Issue als "further observations" |

---

## Akzeptanzkriterien

- [ ] Schritt 1 wurde ausgeführt: alle erledigten-aber-offenen Issues wurden identifiziert und geschlossen (oder begründet nicht geschlossen)
- [ ] Schritt 2 wurde ausgeführt: alle 10 Issues wurden gegen ihre AC geprüft
- [ ] Abweichungsliste wurde ausgegeben (auch wenn leer)
- [ ] Retro-Issue wurde erstellt (falls Abweichungen) oder Abwesenheit bestätigt
- [ ] Retro-Issue enthält genau 3 Maßnahmen (oder weniger, falls weniger Abweichungen)
- [ ] Zusammenfassung mit Abweichungsrate ausgegeben

---

## Output

```
GitHub Issues — geschlossen (Schritt 1, Anzahl variabel)
GitHub Issue — 1 Retro-Issue erstellt (Schritt 3, falls Abweichungen)
```
