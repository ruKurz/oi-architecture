# Organizational Intelligence Architecture (OIA)

> *How organizations turn knowledge into action.*

**Organizational Intelligence Architecture (OIA)** ist ein konzeptionelles Referenzmodell für intelligente Organisationen.  
Es beschreibt, wie Rohdaten zu Entscheidungen, Handlungen und messbaren Business Outcomes werden – jenseits von reinen Daten‑ und Analytics‑Architekturen.

```text
Data → Intelligence → Capability → Solution → Business Outcome
```

**Status:** Version 0.1.0 – early access, designed as a thinking tool.  
Die weitere Entwicklung – von der Referenzarchitektur zur Referenzimplementierung – soll gemeinsam mit einer Community erfolgen.

---

## At a Glance

OIA richtet sich an **Enterprise‑ und Lösungsarchitekt:innen, strategische Entscheider:innen und AI‑Leader**, die eine gemeinsame Sprache für:

- Daten, Wissen und Entscheidungen
- AI‑/LLM‑Infrastruktur
- konkrete Lösungen und Business Outcomes

aufbauen wollen.

Das Modell liegt als interaktive Visualisierung vor:  
Ein mehrschichtiges Diagramm, das Situationen, Use Cases, Fähigkeiten, Lösungen, AI‑Infrastruktur und Datenbasis einer Organisation in einem zusammenhängenden Bild zeigt.

---

## Why OIA?

Die zentrale These von OIA:

> Organisationen scheitern an AI‑Adoption, wenn sie nicht zuerst Datenqualität, Kultur, Strukturen und Wissenskurierung adressieren.

Typische heutige Architektur‑Landkarten enden bei:

- Datenplattformen und Pipelines  
- Analytics‑ und BI‑Systemen  
- isolierten AI‑/ML‑Use‑Cases

Was fehlt, ist eine **architektonische Brücke**:

- von „wir haben Daten“  
- über „wir verfügen über explizite, geprüfte Fähigkeiten“  
- hin zu „wir setzen diese Fähigkeiten konsistent in Lösungen und Entscheidungen um“.

OIA macht diesen Weg explizit – als **kognitive Architektur der Organisation**.

---

## Architecture Layers

### Kernlagen

| Layer                       | Was beschrieben wird                                                                                  |
|----------------------------|-------------------------------------------------------------------------------------------------------|
| **Situation Layer**        | Kontext jeder Entscheidung: Mitarbeiter:in, Ereignis, Zeit, Ort, Domäne, Aufgabe, Berechtigungen     |
| **Use Cases**              | Organisations‑Herausforderungen: z.B. HR, Maintenance, Customer Support                               |
| **Solutions & Applications** | User‑Facing Systeme: Enterprise Search, Knowledge Assistants, Code Assist                          |
| **Cognitive Capabilities** | Was die Organisation *kann*: Find, Link, Evaluate, Generate, Structure, Report                       |
| **Features & APIs**        | Wiederverwendbare Services: `/search` `/summarize` `/link` `/chat` `/classify`                       |
| **AI & Cognitive Infrastructure** | LLMs, ML, NLP, Vektorindizes, Knowledge Graphs, RPA                                            |
| **Data Layer**             | Fundament: Personen, Dokumente, Projekte, Regeln + Processing Pipeline                               |

### Quer­schnitts­dimensionen

- **Linke Seite – System Development & Interaction**  
  User Interaction, Context Understanding, Feature Orchestration, Learning & Optimization.

- **Rechte Seite – Data Sources & Processing**  
  Ingestion → Processing → Cleaning → Validation.

---

## Quick Start (Dev, v0.1.0)

Ziel: In **unter 20 Minuten** eine laufende Dev‑Umgebung und deinen ersten kleinen Change.

### Voraussetzungen

- **Node.js 20+** – <https://nodejs.org>  
- **Git**  
- **VS Code** (empfohlen) – installiere die vorgeschlagenen Extensions

### 1 — Repository klonen und installieren

```bash
git clone https://github.com/ruKurz/oi-architecture.git
cd oi-architecture/oia-site
npm install
```

### 2 — Dev‑Server starten

```bash
npm run dev
# → http://localhost:5173/oi-architecture/
```

Browser öffnen, Hot Reload ist aktiv.

### 3 — Tests ausführen

```bash
npm test
# Alle Tests müssen nach Änderungen grün bleiben
```

---

## Making Changes (für Contributor)

### 4 — Die richtige Stelle finden

| Was du ändern möchtest                      | Wo du schauen solltest                    |
|---------------------------------------------|-------------------------------------------|
| OIA‑Modell (Layer, Items, Labels)          | `oia-site/src/data/oia-model.json`        |
| Layer‑Rendering                             | `oia-site/src/renderer/render-layer.ts`   |
| Detail‑ / Side‑Panel                        | `oia-site/src/renderer/render-panel.ts`   |
| Navigation & Routing                        | `oia-site/src/router.ts`                  |
| Seiten (Motivation, About, …)              | `oia-site/src/views/`                     |
| Farben, Layout, Design Tokens              | `oia-site/src/styles/`                    |
| Konstanten & Zoom‑Level                    | `oia-site/src/constants.ts`               |

### 5 — Änderung umsetzen

Vor dem Start:

- Lies [`CONVENTIONS.md`](CONVENTIONS.md) – Naming, BIZ/DEV‑Trennung, Commit‑Format.  
- Jeder Commit referenziert ein GitHub‑Issue:  
  `feat(renderer): add X  Refs #N`

Nach der Änderung:

```bash
npm run lint && npm test
```

Beides muss erfolgreich sein, bevor du commitest.

### 6 — Pull Request erstellen

1. Repo forken.  
2. Feature‑Branch anlegen:  
   `git checkout -b feat/your-change`  
3. Commit mit [Conventional Commit](CONVENTIONS.md#23-conventional-commits).  
4. Pushen und Pull Request öffnen – CI prüft Lint, Tests und Build.

Weitere Details: [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## Working with AI (Claude Code)

Für wiederkehrende Aufgaben stellt das Projekt fertige Prompts bereit.  
Du kannst sie als Kontext in [Claude](https://claude.ai) laden oder über Claude Code im Repo verwenden.

Jeder Prompt ist eigenständig – lies zuerst den Abschnitt `## Kontext`.

| Prompt                                   | Zweck                                                |
|------------------------------------------|------------------------------------------------------|
| `prompts/development/project-review.md`  | Projekt‑Health‑Check, erzeugt GitHub‑Issues          |
| `prompts/development/sprint-retro.md`    | Sprint Review → Retro → Planning                     |
| `prompts/development/create-adr.md`      | Neue Architecture Decision Records erstellen         |
| `prompts/development/create-issue.md`    | Strukturierte GitHub‑Issues erzeugen                 |
| `prompts/development/evolve-model.md`    | OIA‑Modell erweitern oder verfeinern                 |
| `prompts/templates/prompt-helper.md`     | **Pflicht** vor neuen Prompts                        |

---

## Understanding the Architecture (ohne Code)

Wenn du das Modell **verstehen und nutzen**, aber nicht unbedingt entwickeln möchtest:

- `context/oia-context.md` – stabiler Kontextanker, fasst den aktuellen Modellstand (DE) zusammen.  
- Artikel:
  - `articles/organizational-intelligence-architecture.md` – Einführung in OIA.
  - `articles/the-organizational-brain.md` – die Perspektive „Organisation als kognitives System“.
- `context/oia-project-instruction-prompt.md` in ein Claude‑Projekt laden, um einen konfigurierten Architecture‑Sparring‑Partner zu erhalten.

---

## Repository Structure

```text
oi-architecture/
├── oia-site/          # Interactive renderer (TypeScript + Vite)
│   └── src/
│       ├── data/      # oia-model.json — single source of truth for the model
│       ├── renderer/  # Layer, panel, diagram rendering logic
│       ├── views/     # Site pages (Motivation, About, …)
│       └── styles/    # CSS design tokens and layout
├── context/           # Stable context documents (project anchor)
├── articles/          # Published and draft LinkedIn articles
├── diagrams/          # Architecture diagrams (HTML/SVG)
├── decisions/         # Architecture Decision Records (ADRs)
├── prompts/           # Claude prompts for recurring project tasks
│   ├── development/   # Execution prompts (review, sprint, ADR, …)
│   ├── diagrams/      # Diagram generation prompts
│   └── templates/     # Prompt helper (mandatory for new prompts)
├── notes/             # Research notes and ideas
├── images/            # Visual assets
└── inspirations/      # Reference material and external sources
```

---

## Current Status

**V1** – Konzeptionelle 7‑Layer‑Architektur ist definiert und veröffentlicht.  
**V2 (in Arbeit)** – Fokusthemen:

| Item                                                                 | Priority |
|----------------------------------------------------------------------|----------|
| Knowledge Core – zentraler Wissensspeicher (Semantic Layer, Index, Access Control, Graph) | 🔴 High  |
| Klarer Datenfluss: Pipeline → Knowledge Core → Capabilities         | 🔴 High  |
| Actors – explizite Modellierung von Menschen & Agenten              | 🟡 Medium |
| Business Outcome – Entscheidung / Aktion / Outcome klar schließen   | 🟡 Medium |
| Validated Knowledge Storage – explizite Schicht für kuratiertes, versioniertes Wissen | 🟠 Medium |

---

## Key Terminology

- **OIA** – Organizational Intelligence Architecture (nicht: Operational Intelligence).  
- **Knowledge Core** – zentraler, strukturierter Wissensspeicher der Organisation.  
- **Cognitive Capabilities** – was das System *tun kann*, unabhängig von der technischen Umsetzung.  
- **Solutions** – User‑Facing‑Anwendungen, keine Technologie‑Stacks.  
- **Situation Layer** – Kontextinput, kein User Interface.

---

## Strategic Context & Community

OIA schlägt eine Brücke zwischen:

- Code‑getriebener AI und gewachsener Enterprise‑Datenlandschaft  
- Technologie‑Enthusiasmus und organisatorischen Voraussetzungen  
- Technischer Architektur und strategischer Perspektive

Dieses Repository ist **Version 0.1.0** – bewusst als Denkanstoß angelegt.  
Die Weiterentwicklung hin zu Referenz‑Implementierungen soll gemeinsam mit einer Community erfolgen:

- Feedback zu Modell und Visualisierung  
- neue Use Cases und Capabilities  
- gemeinsame Experimente mit Knowledge Cores, Agenten und bestehenden Enterprise‑Systemen

(Community‑Links fügst du hier ein, sobald verfügbar – z.B. Slack/Discord, Newsletter, Meetup‑Seite.)

---

## License

Dual Licensing:

- **Code** (`oia-site/`) – [MIT License](LICENSE)  
- **Content** (`context/`, `articles/`, `diagrams/`, `decisions/`, `notes/`) – [CC BY 4.0](LICENSE-CC-BY-4.0)
---

## Conventions

Verbindliche Regeln für Naming, Commits und BIZ/DEV‑Trennung: [`CONVENTIONS.md`](CONVENTIONS.md).
Architecture Decision Records: [`decisions/`](decisions/).

---

## History

Das OIA‑Modell hat mehrere visuelle Iterationen durchlaufen, bevor der aktuelle datengetriebene Renderer entstand.

| Version | Artefakt | Beschreibung |
|---|---|---|
| V1 | [images/oia-model-v1.png](images/oia-model-v1.png) | Erstes statisches Diagramm – begründet die 7-Layer-Struktur |
| V2 pre | [diagrams/oia-diagram-v2.html](diagrams/oia-diagram-v2.html) | Interaktiver HTML-Prototyp – die Design-Sprache des Renderers |
| V2 | `oia-site/` | Produktions-Renderer: TypeScript + Vite, vollständig datengetrieben aus `oia-model.json` |

> Eine Diagramm-Galerie zur visuellen Evolution von OIA ist für die Microsite geplant.
