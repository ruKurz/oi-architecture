# Organizational Intelligence Architecture (OIA)

> *How organizations turn knowledge into action*

A conceptual reference architecture for intelligent organizations — describing how raw data transforms into decisions and actions.

---

## Core Idea

Organizations are **cognitive systems**. They collect data, interpret information, generate knowledge, support decisions, and enable actions. Most enterprise architectures stop at data platforms or analytics — but fail to explain how knowledge becomes operational capability.

**OIA fills this architectural gap.**

```
Data → Intelligence → Capability → Solution → Business Outcome
```

---

## Architecture Layers

| Layer | What it describes |
|---|---|
| **Situation Layer** | Context of every decision: Employee, Event, Time, Place, Domain, Task, Access |
| **Use Cases** | Organizational challenges driving the architecture: HR, Maintenance, Customer Support |
| **Solutions & Applications** | User-facing systems: Enterprise Search, Knowledge Assistants, Code Assist |
| **Cognitive Capabilities** | What the org can *do*: Find, Link, Evaluate, Generate, Structure, Report |
| **Features & APIs** | Reusable technical services: `/search` `/summarize` `/link` `/chat` `/classify` |
| **AI & Cognitive Infrastructure** | LLMs, ML, NLP, Vector Indexes, Knowledge Graphs, RPA |
| **Data Layer** | Foundation: Persons, Documents, Projects, Rules + Processing Pipeline |

**Cross-cutting dimensions:**
- **Left:** System Development & Interaction — User Interaction, Context Understanding, Feature Orchestration, Learning & Optimization
- **Right:** Data Sources & Processing — Ingestion → Processing → Cleaning → Validation

---

## Quick Start

Goal: from zero to a running dev environment and your first PR in under 20 minutes.

### Prerequisites

- **Node.js 20+** — [nodejs.org](https://nodejs.org)
- **Git**
- **VS Code** (recommended) — install the suggested extensions when prompted

### 1 — Clone and install

```bash
git clone https://github.com/ruKurz/oi-architecture.git
cd oi-architecture/oia-site
npm install
```

### 2 — Start the dev server

```bash
npm run dev
# → http://localhost:5173/oi-architecture/
```

Open the URL in your browser. Hot reload is active — changes appear immediately.

### 3 — Run the tests

```bash
npm test
# All tests must stay green after any change
```

### 4 — Find the right place for your change

| What you want to change | Where to look |
|---|---|
| OIA model content (layers, items, labels) | `oia-site/src/data/oia-model.json` |
| Layer rendering logic | `oia-site/src/renderer/render-layer.ts` |
| Detail panel / side panel | `oia-site/src/renderer/render-panel.ts` |
| Navigation and routing | `oia-site/src/router.ts` |
| Site pages (Motivation, About, …) | `oia-site/src/views/` |
| Colors, layout, design tokens | `oia-site/src/styles/` |
| Shared constants and zoom levels | `oia-site/src/constants.ts` |

### 5 — Make your change

Before you start:

- Read [CONVENTIONS.md](CONVENTIONS.md) — naming rules, BIZ/DEV separation, commit format
- Every commit references a GitHub Issue: `feat(renderer): add X  Refs #N`

After your change:

```bash
npm run lint && npm test
```

Both must pass before committing.

### 6 — Submit a pull request

1. Fork the repo on GitHub
2. Create a feature branch: `git checkout -b feat/your-change`
3. Commit with a [Conventional Commit](CONVENTIONS.md#23-conventional-commits) message
4. Push and open a pull request — CI runs lint, tests, and build automatically

> Need more detail? See [CONTRIBUTING.md](CONTRIBUTING.md).

---

### Working with AI (Claude Code)

This project ships a set of prompts for recurring development tasks. Load the relevant file as context in [Claude](https://claude.ai) or run it via Claude Code in this repo. Each prompt is self-contained — read its `## Kontext` section first.

| Prompt | Purpose |
|---|---|
| `prompts/development/project-review.md` | Full project health check — creates GitHub Issues for findings |
| `prompts/development/sprint-retro.md` | Sprint Review → Retro → Planning cycle |
| `prompts/development/create-adr.md` | Create a new Architecture Decision Record |
| `prompts/development/create-issue.md` | Create a well-structured GitHub Issue |
| `prompts/development/evolve-model.md` | Extend or refine the OIA model |
| `prompts/templates/prompt-helper.md` | **Mandatory** before adding any new prompt to this project |

---

## Understanding the Architecture

For readers who want to explore the model itself rather than contribute code:

- Read [context/oia-context.md](context/oia-context.md) — the stable context anchor, summarizes the current model state (DE)
- Read the articles:
  - [articles/organizational-intelligence-architecture.md](articles/organizational-intelligence-architecture.md) — foundational article introducing OIA
  - [articles/the-organizational-brain.md](articles/the-organizational-brain.md) — the cognitive systems perspective
- Load [context/oia-project-instruction-prompt.md](context/oia-project-instruction-prompt.md) into a Claude project for a configured architecture sparring partner

---

## Repository Structure

```
oi-architecture/
├── oia-site/         # Interactive renderer (TypeScript + Vite)
│   └── src/
│       ├── data/     # oia-model.json — single source of truth for the model
│       ├── renderer/ # Layer, panel, diagram rendering logic
│       ├── views/    # Site pages (Motivation, About, …)
│       └── styles/   # CSS design tokens and layout
├── context/          # Stable context documents (project anchor)
├── articles/         # Published and draft LinkedIn articles
├── diagrams/         # Architecture diagrams (HTML/SVG)
├── decisions/        # Architecture Decision Records (ADRs)
├── prompts/          # Claude prompts for recurring project tasks
│   ├── development/  # Execution prompts (review, sprint, ADR, …)
│   ├── diagrams/     # Diagram generation prompts
│   └── templates/    # Prompt helper (mandatory for new prompts)
├── notes/            # Research notes and ideas
├── images/           # Visual assets
└── inspirations/     # Reference material and external sources
```

---

## Current Status

**V1 complete:** The full 7-layer architecture is conceptually defined and published.

**V2 in progress** — open priorities:

| Item | Priority |
|---|---|
| Knowledge Core — central knowledge store (Semantic Layer, Index, Access Control, Graph) | 🔴 High |
| Clearer data flow: Pipeline → Knowledge Core → Capabilities | 🔴 High |
| Actors — Humans & Agents explicitly modeled | 🟡 Medium |
| Business Outcome — closing the loop at Decision / Action / Outcome | 🟡 Medium |
| Validated Knowledge Storage — explicit layer for curated, versioned knowledge | 🟠 Medium |

---

## Key Terminology

- **OIA** — Organizational Intelligence Architecture (not: Operational Intelligence)
- **Knowledge Core** — Central structured knowledge store of the organization
- **Cognitive Capabilities** — What the system *can do*, independent of implementation
- **Solutions** — User-facing applications, not a technology stack
- **Situation Layer** — Context input, not a user interface

---

## Strategic Context

This model bridges:
- Code-driven AI and grown enterprise data
- Technology enthusiasm and organizational prerequisites
- The technical architect and the strategic thinker

Central thesis: Organizations will fail at AI adoption without first addressing data quality, culture, organizational structures, and information curation. Existing digital assets — like Enterprise Search with dozens of integrations — remain essential in an agent-driven world, not replaceable by it.

---

## Conventions

See [CONVENTIONS.md](./CONVENTIONS.md) for naming, commit, and BIZ/DEV separation rules.
Architecture decisions are documented in [decisions/](./decisions/).

---

## History

The OIA model evolved through several visual iterations before the current data-driven renderer was built.

| Version | Artefact | Description |
|---|---|---|
| V1 | [images/oia-model-v1.png](images/oia-model-v1.png) | First static diagram — established the 7-layer structure |
| V2 pre | [diagrams/oia-diagram-v2.html](diagrams/oia-diagram-v2.html) | Interactive HTML prototype — the design language that became the renderer |
| V2 | `oia-site/` | Production renderer: TypeScript + Vite, fully data-driven from `oia-model.json` |

> A diagram gallery showing the visual evolution of OIA is planned for the microsite.

---

## License

This project uses dual licensing:

- **Code** (`oia-site/`) — [MIT License](LICENSE)
- **Content** (`context/`, `articles/`, `diagrams/`, `decisions/`, `notes/`) — [CC BY 4.0](LICENSE-CC-BY-4.0)
