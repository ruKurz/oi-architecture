# OIA · Create GitHub Issue

**Prompt-Typ:** Execution
> Legt ein neues GitHub Issue an — regelkonform nach ADR-0003 (Format, Labels, Duplikatprüfung).

---

## Kontext

Lies vor der Ausführung:
- `decisions/0003-github-issues-as-task-tracker.md` — verbindliches Format, Labels, No-Duplicate-Rule
- `CONVENTIONS.md` §2.1 — BIZ/DEV-Zuordnung für Labels
- `CONVENTIONS.md` §2.3 — Commit-Typen als Orientierung für Issue-Titel

Aktives Repository: aus `git remote get-url origin` ermitteln — nicht hartkodiert.

---

## Ziel

Ein neues GitHub Issue existiert, das ADR-0003 vollständig einhält: korrekter Titel, mindestens 2 Labels, vollständiger Body (Context / Action / Acceptance criteria), kein Duplikat eines bestehenden Issues.

---

## Constraints

- **Kein Issue ohne Duplikatprüfung** — offene Issues zuerst laden
- **Kein Issue für BIZ-Inhalte** (OIA-Modell-IDs, Layer-Namen) ohne explizite Nutzer-Bestätigung
- **Kein vager Titel** — muss Conventional-Commits-Format einhalten
- **Mindestens 2 Labels** — domain + category
- **Nicht ausführen** — das Issue beschreibt Arbeit, die noch aussteht; nichts implementieren

---

## Inputs (vom Nutzer bereitzustellen)

Formlos — als "Kernels of Truth":
- Was ist das Problem / die Aufgabe? (1–3 Sätze)
- Welche Datei(en) sind betroffen?
- DEV oder BIZ?
- Kategorie: `renderer` · `model` · `infra` · `ux` · `prompt` · `architecture` · `content`

Falls Inputs fehlen: nachfragen, bevor etwas erstellt wird.

---

## Schritte

### Schritt 1 — Duplikatprüfung

```bash
gh issue list --state open --limit 100
```

Prüfe Titel und betroffene Dateien gegen die Nutzereingabe:
- Klare Überschneidung → **abbrechen**, bestehende Issue-Nummer nennen
- Unsicher → Issue erstellen mit Hinweis `possibly related to #N` im Body

### Schritt 2 — Titel formulieren

Format: `<type>(<scope>): <imperative description>`

Erlaubte Typen: `feat` `fix` `content` `docs` `refactor` `test` `chore` `style`
Scopes (Beispiele): `renderer` `model` `ci` `infra` `ux` `content` `decisions` `prompt`

Regeln: Imperativ · max. 70 Zeichen · kein Punkt am Ende

### Schritt 3 — Labels bestimmen

| Pflicht | Werte |
|---|---|
| Domain | `domain:dev` oder `domain:biz` |
| Kategorie | `renderer` · `model` · `infra` · `ux` · `prompt` · `architecture` · `content` |

### Schritt 4 — Body verfassen

```markdown
## Context
[Datei(en) + konkrete Beobachtung + warum es ein Problem ist]

## Action
[Was konkret zu tun ist — spezifisch genug für jemanden ohne Vorwissen]

## Acceptance criteria
- [ ] [Messbares Kriterium]
- [ ] All tests still green (wenn DEV)
```

**Hinweis Abhängigkeiten:** Wenn ein AC-Item erst erfüllt sein kann, nachdem ein anderes Issue abgeschlossen wurde → `blocked by #N` statt eigenständiges Kriterium. Beispiel: `- [ ] Labels deployed — blocked by #54` statt `- [ ] Labels exist on GitHub`.

### Schritt 5 — Issue erstellen

```bash
gh issue create \
  --title "<title>" \
  --label "<domain>,<category>" \
  --body "<body>"
```

Gib die erstellte Issue-URL aus.

---

## Entscheidungsregeln

| Situation | Verhalten |
|---|---|
| Duplikat gefunden | Abbrechen — bestehende Nummer nennen |
| BIZ/DEV unklar | Nachfragen — nicht raten |
| Kategorie-Label fehlt | Nachfragen — kein Issue ohne Kategorie |
| `gh` nicht verfügbar | Eintrag in `context/todo.md` als Fallback, mit Hinweis |
| Mehr als ein Problem in der Eingabe | Ein Issue pro Problem — nicht zusammenfassen |
| AC-Item hängt von anderem offenen Issue ab | Als `blocked by #N` kennzeichnen — nicht als eigenständiges Kriterium |

---

## Akzeptanzkriterien

- [ ] Duplikatprüfung wurde ausgeführt (Ergebnis kurz vermerkt)
- [ ] Titel folgt Conventional-Commits-Format
- [ ] Mindestens 2 Labels gesetzt (domain + category)
- [ ] Body enthält alle 3 Abschnitte (Context, Action, Acceptance criteria)
- [ ] Issue-URL wurde ausgegeben
- [ ] Nichts wurde implementiert

---

## Output

```
GitHub Issue — erstellt (URL in Ausgabe)
```
