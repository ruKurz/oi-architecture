# OIA Model Guide

This document explains the **Organizational Intelligence Architecture (OIA)** model — what it describes, how to read it, and how to contribute to it.

---

## What OIA describes

OIA is a conceptual reference model for how organizations turn knowledge into action.

The central idea:

```
Data → Intelligence → Capability → Solution → Business Outcome
```

Organizations can be understood as **cognitive systems** — they take in data, interpret information, build knowledge, make decisions, and execute actions. OIA makes this transformation path explicit as an architectural model.

OIA is not a technology stack. It is a **shared thinking model** for enterprise architects, knowledge management practitioners, AI engineers, and decision-makers who need a common language for discussing organizational intelligence.

---

## The Model Layers

The diagram shows seven horizontal layers, read from bottom (foundation) to top (outcomes).

### Layer 1 — Data Layer

The foundation. All organizational knowledge starts here.

**Data sources:** Persons · Organizations · Locations · Customers · Materials · Projects · Jobs · Rules · Media

**Processing pipeline:**
```
Ingestion → Processing → Cleaning → Validation → Information & Knowledge
```

---

### Layer 2 — AI & Cognitive Infrastructure

The technical capabilities that process data and enable cognition.

**Components:** Large Language Models · Machine Learning · NLP · Vector Indexes · Knowledge Graphs · Computer Vision · RPA

---

### Layer 3 — Features & APIs

Reusable technical services — the building blocks of organizational capabilities.

```
/search  /classify  /summarize  /link  /remember  /chat  /transform  /create  /calc
```

---

### Layer 4 — Cognitive Capabilities

What the organization is able to *do* with its knowledge — independent of specific implementation.

**Examples:** Find Information · Link Information · Evaluate Facts · Structure Documents · Generate Content · Identify Redundancies · Create Reports · Convey Knowledge

This is the pivot layer of the model. It translates technical infrastructure into organizational ability.

---

### Layer 5 — Solutions & Applications

User-facing systems — the interfaces between people and organizational knowledge.

**Examples:** Enterprise Search · Knowledge Assistants · Maintenance Assistants · Code Assist Systems

---

### Layer 6 — Use Cases & Challenges

Concrete organizational challenges that motivate the architecture.

**Examples:** HR Process Consulting · Infrastructure Maintenance · Software Development Support · Customer Support

---

### Layer 7 — Situation Layer

The context of every decision: who is asking, from where, with what access rights, at what time.

**Dimensions:** Employee · Event · Time · Place · Domain · Task · Preferences · Language · Access

This is a context input layer — not a user interface.

---

## Cross-Cutting Dimensions

The model has two vertical columns that cut across all layers:

**Left — System Development & Interaction**
How the system is built, operated, and improved:
- User Interaction (Login, Input/Output)
- Context Understanding (Intent Detection, Context Enrichment)
- Feature Orchestration (Agents, Workflows, Pipelines)
- Learning & Optimization (Training, Model Improvement)

**Right — Data Sources & Processing**
How raw data becomes usable knowledge:
- Sources: People · Documents · Transactions · Projects · Logs
- Pipeline: Ingestion → Processing → Cleaning → Validation

---

## Key Terminology

| Term | Meaning |
|---|---|
| **OIA** | Organizational Intelligence Architecture — not "Operational Intelligence" |
| **Knowledge Core** | Central structured knowledge store (planned for V2) |
| **Cognitive Capabilities** | What the system *can do* — not how it is implemented |
| **Solutions** | User-facing applications — not technology stacks |
| **Situation Layer** | Context input — not a user interface |

---

## V2 Backlog (open)

| Item | Description | Priority |
|---|---|---|
| **Knowledge Core** | Central knowledge store: semantic layer, index, access control, knowledge graph | High |
| **Clearer data flow** | Data Pipeline → Knowledge Core → Capabilities connection made visible | High |
| **Actors** | Explicit modeling of humans (Employee, Analyst, Developer) and agents (AI Assistants, Autonomous Systems) | Medium |
| **Business Outcome** | Close the loop at Decision / Action / Outcome | Medium |
| **Validated Knowledge Storage** | Explicit layer for curated, versioned knowledge | Medium |

---

## How to contribute to the model

Model changes are **BIZ domain** changes (see [CONVENTIONS.md](../CONVENTIONS.md#21-biz--dev-separation)).

**What can change:**
- Layer descriptions and item labels → `oia-site/src/data/oia-model.json`
- Terminology decisions → `context/oia-context.md`
- Architecture decisions → `decisions/` (new ADR required)

**What does not change without an ADR:**
- Layer IDs (`#L1`–`#L10`)
- The fundamental 7-layer structure
- Core terminology (OIA, Knowledge Core, Cognitive Capabilities)

**Good starting points:**
- Improve the description of an existing layer or item
- Challenge a layer definition that does not match real-world systems
- Propose a new capability or use case based on implementation experience

See [GOOD_FIRST_ISSUES.md](../GOOD_FIRST_ISSUES.md) for specific contribution ideas.
