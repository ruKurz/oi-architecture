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

### Understand the model

1. Read [context/oia-context.md](context/oia-context.md) — the stable context anchor (DE), summarizes the current state of the model
2. Read [context/oia-extended-context.md](context/oia-extended-context.md) — extended version in English
3. See [images/oia-model-v1.png](images/oia-model-v1.png) for the visual overview

### Explore the architecture diagram

Open [diagrams/oia-diagram-v2.html](diagrams/oia-diagram-v2.html) in a browser — the current interactive diagram.

### Read the articles

- [articles/organizational-intelligence-architecture.md](articles/organizational-intelligence-architecture.md) — foundational LinkedIn article introducing the OIA model
- [articles/the-organizational-brain.md](articles/the-organizational-brain.md) — deeper dive into the cognitive systems perspective

### Work with Claude

The file [context/oia-project-instruction-prompt.md](context/oia-project-instruction-prompt.md) contains the full project instruction prompt — load it into a Claude project to get a configured sparring partner for architecture work, article writing, and diagram development.

---

## Repository Structure

```
oi-architecture/
├── context/          # Stable context documents (project anchor)
├── articles/         # Published and draft LinkedIn articles
├── diagrams/         # Architecture diagrams (HTML/SVG)
├── drafts/           # Work-in-progress content
├── notes/            # Research notes and ideas
├── prompts/          # Claude prompts, templates, context generators
│   ├── context/      # Prompt templates for context generation
│   └── templates/    # Article and diagram templates
├── images/           # Visual assets
├── inspirations/     # Reference material and external sources
└── videos/           # Video content
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

*MIT License — see [LICENSE](LICENSE)*

