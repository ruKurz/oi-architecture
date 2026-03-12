# OIA · OSS Readiness Review

**Prompt-Typ:** Generation
**Refs:** #61
> Führt eine strukturierte Open-Source-Bereitschaftsprüfung durch — simuliert die Außenperspektive eines erfahrenen OSS-Maintainers vor der ersten öffentlichen Veröffentlichung.

---

## Kontext

Lies vor der Ausführung:
- `README.md` — Ersteindruck, Zielgruppenansprache, Quick Start
- `docs/CONTRIBUTING.md` — Contributor-Experience
- `CONVENTIONS.md` — Projektregeln und BIZ/DEV-Trennung
- `CLAUDE.md` — Scope-Regeln, AI-Tooling-Konfiguration
- `.github/` — Workflows, Templates (falls vorhanden)
- `oia-site/` — Produktiver Code, Tests, CI-Konfiguration
- `decisions/` — ADRs und Governance-Dokumente

Aktives Repository: aus `git remote get-url origin` ermitteln.

---

## Ziel

Am Ende liegt ein vollständiges Review-Dokument unter `reviews/oss-readiness-review-YYYY-MM-DD.md`, das die Projektstärken, Schwächen und fehlenden Elemente aus drei externen Perspektiven bewertet — als Grundlage für gezielte Verbesserungen vor der öffentlichen Veröffentlichung.

---

## Constraints

- Ändert **keine** Projektdateien
- Erstellt **keine** GitHub Issues (das ist Aufgabe von `project-review.md` als Folgeschritt)
- Bewertet **keine** inhaltlichen BIZ-Entscheidungen (OIA-Layer-Struktur, Terminologie)
- Schreibt **keine** Empfehlungen für grundlegende Architektur-Umorientierungen — nur für OSS-Bereitschaft
- Greift **nicht** in `node_modules`, `.git`, `dist`, `build` ein
- Das Review ersetzt **nicht** den internen Compliance-Check (`project-review.md`)

---

## Perspektiven

Die Analyse erfolgt aus drei gleichzeitig eingenommenen Außenperspektiven:

1. **Externer Entwickler** (erstmaliger Contributor)
2. **Erfahrener OSS-Maintainer** (kritischer Reviewer)
3. **Kritischer Nutzer** (bewertet Adoption-Entscheidung)

---

## Schritte

### 1 · FIRST IMPRESSION

Analysiere, was ein Besucher bei der ersten Begegnung mit dem Repository versteht und was unklar bleibt:
- Was ist sofort verständlich?
- Was ist unklar oder verwirrend?
- Würde ein externer Entwickler das Projekt ausprobieren? Warum (nicht)?

### 2 · README & DOCUMENTATION REVIEW

Bewerte:
- Klarheit der Problemstellung und Zielgruppe
- Quick-Start-Nutzbarkeit (funktioniert ohne Vorwissen?)
- Fehlendes: Screenshots, Live-URL, Beispiele
- Sprache und Konsistenz (Zielgruppe klar angesprochen?)

Liste konkrete Schwächen mit Fundstelle (Datei, Abschnitt).

### 3 · CONTRIBUTOR EXPERIENCE

Analysiere aus Sicht eines externen Contributors:
- Ist die Projektstruktur nachvollziehbar?
- Ist klar, wo man anfangen soll?
- Sind Coding-Konventionen erkennbar?
- Gibt es reibungslose Einstiegspunkte (Good First Issues, Labels, Onboarding)?

Benenne Reibungspunkte explizit.

### 4 · CODEBASE & ARCHITECTURE

Bewerte (ohne Grundkonzepte zu erklären):
- Modularität und Separation of Concerns
- Naming-Konsistenz
- Technical-Debt-Signale (DRY-Verletzungen, Hardcoding, ungetestete Pfade)
- Architekturrisiken für zukünftige Contributor

### 5 · PROJECT GOVERNANCE & OPEN SOURCE READINESS

Prüfe Vorhandensein und Qualität:

| Artefakt | Status | Qualität |
|---|---|---|
| LICENSE | ? | ? |
| CONTRIBUTING.md | ? | ? |
| CODE_OF_CONDUCT.md | ? | ? |
| SECURITY.md | ? | ? |
| CHANGELOG.md | ? | ? |
| Issue Templates | ? | ? |
| PR Template | ? | ? |
| dependabot.yml | ? | ? |
| Roadmap (auffindbar) | ? | ? |

Erkläre was fehlt oder unzureichend ist.

### 6 · TESTING & QUALITY SIGNALS

Bewerte:
- Vorhandensein und Struktur der Tests
- CI-Automatisierung und Abdeckung
- Risiken für zukünftige Wartbarkeit

### 7 · CRITICAL QUESTIONS BEFORE RELEASE

Formuliere mindestens 10 unbequeme Fragen, die eine kritische Öffentlichkeit stellen wird — Fragen, auf die das Projekt noch keine klare Antwort hat.

### 8 · TOP 10 IMPROVEMENTS BEFORE OPEN SOURCE RELEASE

Ranke die 10 wirkungsvollsten Verbesserungen nach Impact:

| # | Verbesserung | Impact |
|---|---|---|
| 1 | … | … |
| … | … | … |

Fokus: Was erhöht Glaubwürdigkeit und Nutzbarkeit am stärksten?

### 9 · OPEN SOURCE MATURITY ASSESSMENT

Bewerte auf dieser Skala:

- **Level 1** – Experimental
- **Level 2** – Usable
- **Level 3** – Open Source Ready
- **Level 4** – Mature OSS

Begründe die Einstufung mit konkreten Befunden.

### 10 · FINAL HONEST VERDICT

Antworte ehrlich: Wenn du dieses Projekt online entdeckst, würdest du es:

- Ignorieren
- Beobachten (Watch)
- Ausprobieren
- Adoptieren

Begründe warum. Fokus: Hilft die Antwort dem Projekt, öffentliche Kritik zu überstehen?

---

## Entscheidungsregeln

| Situation | Verhalten |
|---|---|
| Befund könnte Absicht sein (z.B. bewusste Zweisprachigkeit) | Trotzdem benennen — externe Wahrnehmung zählt, nicht Autorenintention |
| Governance-Artefakt fehlt | In §5-Tabelle als ❌ Missing eintragen, in §8 ranken wenn relevant |
| Code-Qualitätsproblem ohne OSS-Relevanz | Nur erwähnen wenn es Contributor-Experience direkt betrifft |
| BIZ-Inhalt (OIA-Modell, Layer-Struktur) betroffen | Außerhalb des Scope — nicht bewerten |

---

## Akzeptanzkriterien

- [ ] Alle 10 Abschnitte sind vorhanden und ausgefüllt
- [ ] §8 (Top 10) ist nach Impact gerankt, nicht alphabetisch
- [ ] §9 (Maturity) enthält eine konkrete Level-Einstufung mit Begründung
- [ ] §10 (Verdict) enthält eine der vier Optionen (Ignore / Watch / Try / Adopt)
- [ ] Keine Projektdatei wurde geändert
- [ ] Review wurde gespeichert unter `reviews/oss-readiness-review-YYYY-MM-DD.md`

---

## Output

```
reviews/oss-readiness-review-YYYY-MM-DD.md — erstellt
```
