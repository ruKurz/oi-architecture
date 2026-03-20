# ADR-0018: Separation of Presentation / Projection Layer and Semantic Model Layer

**Decision:** The OIA architecture enforces a strict separation between a Presentation / Projection Layer (rendering-oriented) and a Semantic Model Layer (structure- and meaning-oriented). The Semantic Model Layer is the sole source of truth for organizational meaning. The two layers are conceptually and structurally independent, must never be unified into a single schema, and follow a strictly asymmetric dependency: Semantic Model → Projection, never the inverse. Presentation artifacts are always derived projections — never primary definitions.
**Status:** Proposed
**Date:** 2026-03-20
**Type:** BOTH
**Governed by:** —

## Context

The OIA aims to model an organization as a semantically structured system — not merely as a visual diagram. This introduces two fundamentally different concerns that evolve under conflicting pressures:

| Concern | Optimized for |
|---|---|
| Presentation / Projection | clarity, layout, usability, visual stability |
| Semantic Model | correctness, traceability, expressiveness, extensibility |

**Representation vs. Meaning.** How the architecture is *displayed* and what it *means* are not the same problem. Coupling them forces trade-offs that degrade both sides: visual concerns leak into data structures, semantic structures get distorted by layout needs, and schema evolution becomes constrained by rendering stability.

**Increasing semantic depth.** The OIA is evolving toward explicit semantic structures, ontology derivation, machine-readable relationships, and traceability to source statements. This requires a semantically rich, structurally precise model layer that is independent of any visual representation.

**Future system evolution.** Planned extensions include semantic extraction pipelines, ontology and schema generation, database-backed representations (graph or relational), API-based access to architecture knowledge, and AI-supported reasoning. All of these require a stable, presentation-independent semantic model. A presentation-coupled model cannot serve as the foundation for any of these without architectural rework.

**Risk of model conflation.** Without an explicit decision, presentation and semantic concerns tend to merge over time: the renderer becomes the de-facto schema owner, UI constructs carry implicit semantic assumptions, and the data model drifts toward serving display rather than meaning. This leads to loss of semantic integrity and blocks the transition to an intelligent organizational knowledge system.

## Consequences

**Easier:**
- Semantic model and presentation layer evolve independently — changes in one do not constrain the other
- Databases (graph, relational) can be introduced without UI constraints
- Clean foundation for APIs, semantic querying, and AI integration
- Clear ownership of each layer; responsibilities do not overlap
- Traceability, reasoning, and querying capabilities can be built on a stable, presentation-free semantic model

**Harder:**
- Projection logic must be explicitly maintained: the Semantic Model Layer does not render itself — each presentation format requires a defined, maintained projection
- Identifiers and mapping rules between layers must be explicitly coordinated

**Required adjustments:**
- Defined projection mapping between semantic entities and visual elements (where they coexist)
- Explicit validation to prevent concern leakage across the layer boundary — no renderer construct may define semantic meaning
- Clear identifier strategy across layers (coordinated vs. independent)
- Ownership assigned per layer: semantic pipeline owns the Semantic Model Layer; renderer pipeline owns the Presentation / Projection Layer

**Architectural rules (non-negotiable):**
- The Semantic Model Layer is the sole source of truth for organizational structure and meaning
- No unified schema that merges semantic and presentation concerns is permitted
- The dependency direction is strictly asymmetric: Semantic Model → Projection; any reversal is an architectural violation
- Presentation artifacts derived from the semantic model are projections — they have no authority to define or constrain semantic structure

## Alternatives

| Option | Reason rejected |
|---|---|
| Unified model (presentation + data) | Mixes concerns, creates bidirectional coupling, blocks evolution toward semantic and database-backed systems; schema changes for semantic purposes risk breaking rendering |
| Presentation-driven model as sole model | Reduces the architecture to a visualization artifact; loses semantic depth required for reasoning, querying, and AI integration |
| Semantic model as optional extension of presentation model | Prevents consistent evolution; introduces ambiguity about which model is the source of truth; semantic concerns remain subordinate to visual constraints |

## Strategic Impact

This decision establishes the architectural foundation for transforming the OIA from a visual architecture description into a semantically explicit, machine-interpretable organizational knowledge system. It is a prerequisite for:

- **Semantic storage:** graph and relational database representations derived from the Semantic Model Layer without UI constraints
- **Semantic querying:** structured queries over organizational knowledge without rendering artifacts polluting the schema
- **AI-assisted reasoning:** language model and inference pipelines that operate on clean semantic structures, not display-optimized data
- **Semantic extraction pipelines:** automated derivation of semantic structure from source documents, feeding into the Semantic Model Layer
- **Ontology and schema generation:** machine-readable ontologies derived from the authoritative semantic model
- **API access:** architecture knowledge exposed via stable, presentation-independent APIs
- **Automation:** rule-based and AI-driven automation that requires unambiguous semantic definitions as input

Without this separation, none of these capabilities can be built on a stable foundation — every extension would be constrained by rendering decisions made for a different purpose.
