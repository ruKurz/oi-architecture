# Organizational Intelligence Architecture (OIA)

> *How organizations turn knowledge into action.*

**[Live Demo →](https://rukurz.github.io/oi-architecture/)** | Version 0.1.0 — early access | [![CI](https://github.com/ruKurz/oi-architecture/actions/workflows/pr-check.yml/badge.svg)](https://github.com/ruKurz/oi-architecture/actions/workflows/pr-check.yml)

**OIA** is a conceptual reference model for intelligent organizations.
It describes how raw data becomes decisions, actions, and measurable business outcomes — going beyond pure data and analytics architectures.

```text
Data → Intelligence → Capability → Solution → Business Outcome
```

![OIA Interactive Diagram — 7-layer architecture showing how organizations turn knowledge into action](docs/images/Organizational-Intelligence-Architecture-03-12-2026.png)

---

## Why OIA?

> Organizations fail at AI adoption when they do not first address data quality, culture, structures, and knowledge curation.

OIA provides the **architectural bridge** between "we have data" and "we consistently apply that knowledge in solutions and decisions" — making the cognitive architecture of the organization explicit.

---

## Architecture Layers

| Layer | What it describes |
|---|---|
| **Situation Layer** | Context of every decision: employee, event, time, place, domain, task, permissions |
| **Use Cases** | Organizational challenges: HR, Maintenance, Customer Support |
| **Solutions & Applications** | User-facing systems: Enterprise Search, Knowledge Assistants, Code Assist |
| **Cognitive Capabilities** | What the organization *can do*: Find, Link, Evaluate, Generate, Structure, Report |
| **Features & APIs** | Reusable services: `/search` `/summarize` `/link` `/chat` `/classify` |
| **AI & Cognitive Infrastructure** | LLMs, ML, NLP, Vector Indexes, Knowledge Graphs, RPA |
| **Data Layer** | Foundation: persons, documents, projects, rules + processing pipeline |

---

## Quick Start

**→ See [QUICKSTART.md](QUICKSTART.md)** for prerequisites, clone, dev server, tests, and build.

```bash
git clone https://github.com/ruKurz/oi-architecture.git
cd oi-architecture/oia-site && npm install && npm run dev
```

---

## Documentation

| Document | Purpose |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Contribution workflow, dev setup, commit format, PR process |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Codebase structure, rendering architecture, routing, CSS |
| [`docs/MODEL_GUIDE.md`](docs/MODEL_GUIDE.md) | OIA model layers, terminology, how to contribute to the model |
| [`docs/GOOD_FIRST_ISSUES.md`](docs/GOOD_FIRST_ISSUES.md) | Curated entry points for new contributors |
| [`decisions/adr/`](decisions/adr/) | Architecture Decision Records (ADRs) — technical and structural choices |
| [`decisions/odr/`](decisions/odr/) | Organizational Decision Records (ODRs) — governance, operating model, principles |

---

## Contributing

OIA improves through shared experience from people who build real knowledge systems.
Contributions range from a comment on an issue to a new use case or model refinement.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for full details, or browse [`docs/GOOD_FIRST_ISSUES.md`](docs/GOOD_FIRST_ISSUES.md) for entry points.

---

## License

- **Code** (`oia-site/`) — [MIT License](LICENSE)
- **Content** (`context/`, `articles/`, `diagrams/`, `decisions/`, `notes/`) — [CC BY 4.0](LICENSE-CC-BY-4.0)

---

## Governance

See [`GOVERNANCE.md`](GOVERNANCE.md) — current model: benevolent dictator (single maintainer, Rüdiger Kurz).

Decisions are documented in a three-layer hierarchy:
- **Org layer** — Organizational Decision Records (ODRs) in [`decisions/odr/`](decisions/odr/): ecosystem type, operating model, language policy
- **Arch layer** — Architecture Decision Records (ADRs) in [`decisions/adr/`](decisions/adr/): tooling, conventions, technical structure

See [`decisions/README.md`](decisions/README.md) for the full index.
