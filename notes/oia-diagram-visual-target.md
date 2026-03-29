# OIA Diagram — Visual Target State

> **Purpose:** This document describes the intended visual target state for the OIA architecture diagram,
> as defined by the author during the development of the C1/C2 cross-cutting concept display (Issue #254).
> It is written to support future UI/UX redesign decisions.

---

## Core Design Principle

**Relationships are more important than content.**

The current HTML presentation groups terms into boxes and layers.
What the human viewer primarily needs to understand is *how the elements relate to and depend on each other* — the arrows, the flows, the derivations.
The semantic model already has this information formalized. The presentation layer barely surfaces it.

> "Für den menschlichen Betrachter sind die Zusammenhänge (Pfeile) wichtiger fast als der Inhalt.
> Das Bild zeigt in Summe viel zu wenige Zusammenhänge. Es ist aktuell eine Gruppierung von Begriffen."

---

## Reading Direction

The OIA diagram is read **bottom to top**.

```
L3  Knowledge Core          ← meaning arises here
 ↑  [entities feed in]
C2  Data Processing Pipeline ← transforms raw into structured
 ↑  [raw data feeds in]
L2  Data Sources            ← unstructured raw material
L1  AI & Cognitive Infra    ← technology foundation
```

This flow direction must be supported by all visual indicators:
- Arrows always point **upward (↑)**
- No bidirectional arrows in the data flow zone
- Layout reinforces reading from bottom to top

---

## Semantic Relationships: L1 → L2 → C2 → C1 → L3

These are the formalized dependencies from the semantic model (`document-model.json`).
They should all be **visibly represented** in the diagram.

### L1 — AI & Cognitive Infrastructure

- **Enables** C2: the pipeline uses L1 technology for processing
- **Connects** L2 data sources (makes them accessible)
- **Supports** L4 Features (indirectly used by L5 Capabilities)

> Currently: L1 is shown as a box. Its role as *enabler* of C2 is invisible.

### L2 — Data Sources

- **Feeds** C2 (Data Pipelines): raw, unstructured data flows into the pipeline
- **Is processed via** L1 (infrastructure connects the sources)
- **Is the foundation for** L3 (after processing: Knowledge Core is built from it)
- **Is NOT entities**: Data Sources contain documents, databases, logs — not semantic objects

> Distinction that must be visible: Data Sources ≠ Organizational Entities.
> This was a recurring source of confusion in the diagram history.

### C2 — Data Processing Pipeline (cross-cutting concept)

- **Input**: receives raw data from L2
- **Uses**: L1 infrastructure for processing
- **Processes via**: Ingestion → Processing → Cleansing → Validation → Information & Knowledge
- **Output**: extracts/derives C1 Entities from the processed data
- **Feeds**: L3 Knowledge Core with structured, processed data

> C2 is not a layer — it is a **reusable processing concept** used at multiple points
> (between L2/L3, within L5 Capabilities, within L6 Applications).
> The pipeline steps are the hero of this element — they should be prominent.

### C1 — Organizational Entities (cross-cutting concept)

Entities: **Persons · Organizations · Locations · Products · Materials · Projects · Activities · Events**

- **Derived from**: the output of C2 processing — not read directly from data sources
- **Modeled in**: L3 Knowledge Core as central semantic objects
- **Interconnected**: entities do not exist in isolation; they are systematically linked
  (e.g. Organization → has Units → within which Persons work → who work on Projects)
- **Belong to**: the C1 concept group ("Organizational Entities C1")

> C1 is the *bridge* between raw processing (C2) and semantic meaning (L3).
> It must be visually positioned ABOVE C2 and BELOW L3.

> The entity chips must show their membership to C1 (label "C1 · Organizational Entities")
> but the *flow arrows between layers* must NOT use "C1" as a label — C1 is the concept group,
> not the flow itself.

### L3 — Knowledge Core

- **Receives**: structured data from C2
- **Models**: C1 Entities as central semantic objects
- **Maps**: relationships BETWEEN entities (semantic network)
- **Is the sole source**: of semantic organizational knowledge
- **Is NOT a data store**: it is a semantic system

> The relationships WITHIN L3 (entity interlinking, semantic network) are currently invisible.
> This is one of the most significant gaps between the semantic model and the visual presentation.

---

## Missing Relationships in Current Presentation

The following connections exist in the semantic model but are not shown in the diagram:

| Relationship | From | To | Type |
|---|---|---|---|
| enables processing | L1 Infrastructure | C2 Pipeline | dependency |
| raw data feeds in | L2 Data Sources | C2 Pipeline | data flow |
| extracts entities | C2 Pipeline | C1 Entities | derivation |
| entities modeled in | C1 Entities | L3 Knowledge Core | semantic modeling |
| feeds knowledge | C2 Pipeline | L3 Knowledge Core | data flow |
| entity interlinking | C1 Entities | C1 Entities | semantic network |
| provides knowledge for | L3 Knowledge Core | L4 Features | dependency |
| feedback loop | L6 Applications | L3 Knowledge Core | feedback |

> The current diagram shows at most 2 of these 8 relationships (the flow connectors between L2→C2 and C2→L3).

---

## Target Visual Structure (L1–L3 Zone)

```
┌───────────────────────────────────────────────────┐
│  L3  Knowledge Core                               │
│  [core blocks: Entities · Relationships ·         │
│   Attributes · Context Information]               │
│  ↑ models C1 entities · builds semantic network   │
└───────────────────────────────────────────────────┘
        ↑  Entities feed into Knowledge Core
┌───────────────────────────────────────────────────┐
│  C2  Data Processing Pipeline  (cross-cutting)    │
│                                                   │
│  C1 · Organizational Entities                     │
│  [Persons] [Organizations] [Locations]            │
│  [Products] [Materials] [Projects]                │
│  [Activities] [Events]                            │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  C2  Data Processing Pipeline                     │
│  [📥 Ingestion] → [⚙️ Processing] →               │
│  [🧹 Cleansing] → [✅ Validation] →               │
│  [💡 Information & Knowledge]                     │
└───────────────────────────────────────────────────┘
        ↑  Raw Data from Data Sources
┌───────────────────────────────────────────────────┐
│  L2  Data Sources                                 │
│  (Documents, Databases, Email, APIs, ...)         │
│            ← enabled by L1 Infrastructure →      │
└───────────────────────────────────────────────────┘
┌───────────────────────────────────────────────────┐
│  L1  AI & Cognitive Infrastructure                │
│  (LLMs, ML, Vector Indexes, Knowledge Graphs, …) │
└───────────────────────────────────────────────────┘
```

---

## Redesign Consideration

The current implementation is a **vertical layer stack with grouped content**.
It does not convey relationships, dependencies, or flows between elements.

A future redesign should consider:

1. **Flow-first layout**: arrows and connections as primary visual elements
2. **Semantic network for L3**: show entity relationships as a mini-graph inside the Knowledge Core
3. **Cross-cutting concept visualization**: C1 and C2 visually span or bridge layers rather than sitting between them
4. **L1 as substrate**: show L1 visually "beneath" L2, enabling the connection — not just as another box
5. **Connection rendering from model data**: use the `connections` array in `oia-model.json` to render actual arrows between elements (currently connections data exists but is not rendered)

> The `connections` array in `oia-model.json` already contains `conn-flow-1` (L2→C2) and
> `conn-flow-2` (C2→L3). These are machine-readable but not yet rendered as visual arrows.
> A future renderer could use SVG overlay lines to show all connections from the data model.
