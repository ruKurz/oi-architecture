# OIA · Create Architecture Decision Record

**Prompt-Typ:** Generation
**Kontext:** DEV | BIZ (je nach Entscheidung)

---

## Kontext

Lies vor der Ausführung:
- `decisions/README.md` — ADR-Index und Template
- `decisions/` — alle bestehenden ADRs (für Nummerierung + Konsistenz)
- `CONVENTIONS.md` Abschnitt "ADR Format" — verbindliches Template

ADR-Methodik: Ralf D. Müller / Johannes Dienst (fiveandahalfstars.ninja)
Schlüsselprinzip: **Decision zuerst** — die Entscheidung steht oben, Begründung folgt.
Alternatives-Sektion ist **Pflicht** — nicht was gewählt wurde, sondern was bewusst verworfen wurde.

---

## Ziel

Eine neue ADR-Datei in `decisions/` anlegen, die eine getroffene Architekturentscheidung dokumentiert.
Die ADR ist vollständig, selbsterklärend, und folgt dem Müller-Format.

---

## Constraints

- **Englisch** — ADRs sind DEV-Artefakte, keine Artikel
- **Keine Entscheidungen im Namen des Nutzers treffen** — wenn Kontext fehlt, fragen
- **BIZ-Entscheidungen (Architektur-Inhalt)** bekommen `Type: BIZ`, werden aber technisch wie DEV-ADRs behandelt
- **Keine nachträgliche Änderung bestehender ADRs** — stattdessen neue ADR mit `Supersedes: ADR-XXXX`
- **Alternatives: mindestens 1 Alternative** muss dokumentiert sein — sonst keine Entscheidung, nur eine Beschreibung

---

## Inputs (vom Nutzer bereitzustellen)

Der Nutzer gibt an — formlos, als "Kernels of Truth":
- Was wurde entschieden? (1 Satz reicht)
- Warum? (Qualitätsattribut: Wartbarkeit, Portabilität, Lesbarkeit, Skalierbarkeit, ...)
- Was wurde als Alternative in Betracht gezogen (und warum verworfen)?
- Betrifft es DEV, BIZ, oder beides?

Falls Inputs fehlen: fragen, bevor etwas generiert wird.

---

## Schritte

### Schritt 1 — Nächste ADR-Nummer ermitteln

Prüfe, ob `decisions/` existiert. Falls nicht: erstelle `decisions/` und lege eine minimale `decisions/README.md` an (nur Tabellenheader `| ADR | Title | Status | Type | Date |` — keine Einträge).

Scanne `decisions/` auf bestehende ADR-Dateien. Bestimme die nächste Nummer (NNNN, vierstellig mit führenden Nullen: `0001`, `0002`, ...).

---

### Schritt 2 — Kernels of Truth verarbeiten

Analysiere die Nutzereingabe mit dieser Synthese-Formel (aus Hands-on Architects Methodik):

> "In the context of **[use case / system area]**, facing **[concern / quality trade-off]**, we decided for **[option]**, to achieve **[quality goal]**, accepting **[downside]**, because **[core rationale]**."

Nutze diesen Satz als Grundlage für die Decision-Zeile in der ADR.

---

### Schritt 3 — ADR-Datei erstellen

Dateiname: `decisions/NNNN-kebab-case-noun-phrase.md`

Template:
```markdown
# ADR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided.
**Status:** Accepted
**Date:** YYYY-MM-DD
**Type:** DEV | BIZ | BOTH

## Context

Facts that influenced the decision. Neutral language — no judgement.
State the quality attribute affected (ISO 25010: maintainability, portability,
performance efficiency, reliability, security, usability, ...).

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

### Schritt 4 — ADR-Index aktualisieren

Füge einen Eintrag in `decisions/README.md` zur ADR-Liste hinzu:
```markdown
| ADR-NNNN | [Title](./NNNN-title.md) | Accepted | DEV/BIZ | YYYY-MM-DD |
```

---

### Schritt 5 — Commit-Nachricht vorschlagen

Schlage eine Commit-Nachricht im Conventional Commits Format vor:
```
docs(decisions): add ADR-NNNN <noun-phrase title>

Closes #N
```

---

## Entscheidungsregeln

- Wenn Alternatives fehlen → fragen, nicht erfinden
- Wenn der Typ unklar ist (DEV vs. BIZ) → BOTH verwenden und Nutzerfrage stellen
- Wenn eine bestehende ADR die gleiche Entscheidung behandelt → prüfen ob Supersede nötig, nicht duplizieren
- Wenn die Entscheidung trivial und leicht reversibel ist → kein ADR, Kommentar im Code reicht

---

## Qualitätskriterien (AI-Judge-Fragen)

Nach der Erstellung selbst prüfen:
- [ ] Würde jemand ohne Kontext die Entscheidung in 30 Sekunden verstehen?
- [ ] Ist die Decision-Zeile in aktivem Imperativ formuliert?
- [ ] Gibt es mindestens 1 Alternative mit Begründung?
- [ ] Sind Konsequenzen sowohl positiv als auch negativ benannt?
- [ ] Ist das Quality Attribute explizit genannt?

---

## Akzeptanzkriterien

- [ ] `decisions/NNNN-<name>.md` existiert mit vollständigem Müller-Format
- [ ] `decisions/README.md` enthält den neuen Eintrag
- [ ] Commit-Nachricht ist vorgeschlagen
- [ ] Keine bestehenden ADRs wurden verändert

---

## Output

| Datei | Aktion |
|---|---|
| `decisions/NNNN-<name>.md` | erstellt |
| `decisions/README.md` | geändert (neuer Index-Eintrag) |

---

## Ergebnis

Du bist fertig, wenn:

- [ ] Prompt-Typ ist festgelegt (`Generation`)
- [ ] `Constraints` sind explizit formuliert (nicht nur implizit)
- [ ] `Akzeptanzkriterien` sind messbar
- [ ] Kein Projektkontext ist inline wiederholt — nur Pfad-Referenzen
- [ ] Der Prompt ist unter folgendem Pfad gespeichert:

```
prompts/development/create-adr.md
```
