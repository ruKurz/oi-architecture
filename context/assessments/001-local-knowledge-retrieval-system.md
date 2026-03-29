# OIA Assessment #001 — Local Knowledge Retrieval System

**Assessment date:** 2026-03-29
**Assessor:** Claude (OIA Maturity Rubric v1, Zones 1–3)
**System:** A local, project-based semantic search and knowledge retrieval system
**System-Type:** B — Framework/Platform
**System-Type rationale:** The system provides retrieval infrastructure for client applications. The operator processes data on behalf of client integrators. No direct end-user interaction. Zone 3 definitions applied per OIA-ODR-0003 §4 Type B variant.
**Stack:** Python, FastAPI, vector store, local embedding models, SQLite, Vue 3, MCP Server
**Status:** Completed — feedback incorporated into Rubric v1 (see §3)

---

## Layer Scores

| Layer | Score | Verdict |
|---|---|---|
| L1 AI & Cognitive Infrastructure | ★★★☆☆ | Defined |
| L2 Data Sources | ★★★★☆ | Connected |
| L3 Knowledge Core | ★★★☆☆ | Defined |
| L4 Features & APIs | ★★★★☆ | Connected |
| L5 Cognitive Capabilities | ★★☆☆☆ | Implicit |
| L6 Solutions & Applications | ★★★☆☆ | Defined |
| L7 Use Cases & Challenges | ★★☆☆☆ | Implicit |
| L8 Situation & Context | ★☆☆☆☆ | Absent |
| L9 System Participants | ★★☆☆☆ | Implicit |
| L10 Business Outcome | ★☆☆☆☆ | Absent |

> **Note on System-Type B re-scoring:** L7, L9, and L10 scores above were initially assessed against Type A (End-User-Anwendung) criteria. Under Type B variant definitions (OIA-ODR-0003), L7 ★★ remains — integration scenarios are not formally documented. L9 ★★ remains — the Integrator role (client developers) is implied but undocumented. L10 ★ remains — no integration quality KPIs defined or tracked. The scores are numerically identical; the *meaning* of each score changes: these are not missing user outcomes, they are missing integration quality artifacts.
>
> **Note on L8 re-scoring (Type B):** L8 ★ was initially assessed as "no context awareness." Under Type B: L8 ★ means the system does not distinguish between caller types (Agent via MCP, CI pipeline, human developer) or operation types (interactive search, bulk index, health check). This is an integration architecture gap, not a business context gap — and it is real.

---

## Stop-Gate Analysis

```
ZONE 1 — Foundation
  L2 Data Sources:         ★★★★ ✅
  L1 AI Infrastructure:    ★★★  ✅
  → Zone 1 gate: OPEN

ZONE 2 — Capabilities
  L3 Knowledge Core:       ★★★  ✅ (at threshold)
  L4 Features & APIs:      ★★★★ ✅
  L5 Cognitive Capabilities: ★★ ❌ (below threshold)
  L8 Situation & Context:  ★    ❌ (absent)
  → Zone 2 gate: NOT OPEN

ZONE 3 — Impact
  → Not assessed (Zone 2 not open)
```

**Verdict:** Zone 1 gate is open. Zone 2 is the next investment area. The two blocking dimensions are L5 (capabilities not named in business terms) and L8 (no integration context model — system does not distinguish caller type, operation type, or deployment environment).

---

## Pattern: "Data-Rich, Context-Poor" (Pattern A)

**Score signature:** L2 ★★★★ / L4 ★★★★ / L8 ★ / L5 ★★

The data pipeline is excellent and the API layer is strong. The system does not distinguish between an Agent searching interactively, a CI pipeline running bulk QA, and a human developer testing locally. Capability vocabulary is technical (API endpoints, module names), not business-oriented (named abilities with scope and limits). Result quality depends entirely on query quality — the system cannot adapt to the caller's context.

This is a common pattern in developer-led framework projects: technically strong foundation, with the organizational description and context-awareness layer not yet built.

---

## Evidence per Layer

### L1 — AI & Cognitive Infrastructure ★★★☆☆ Defined

**Evidence for ★★★:**
- Vector store documented and owner-assigned
- Embedding model provider abstraction built in: multiple providers (local, cloud) switchable
- Local deployment via Docker Compose, documented
- Model choice documented in decision record (local embedding, no cloud-API dependency)
- Python environment pinned

**Why not ★★★★:**
- No observability stack (no inference latency monitoring, no error rate tracking)
- No automated deployment pipeline (CI/CD)
- No model version pinning with explicit update procedure
- Resource usage not tracked

---

### L2 — Data Sources ★★★★☆ Connected

**Evidence for ★★★★:**
- Supported formats inventoried and documented: Markdown, plain text, PDF, spreadsheets, images (OCR)
- Extractor modules per format with encoding fallbacks
- Scanner with configurable exclusions (hidden dirs, binary detection)
- Input/output contracts explicit: source file → extracted text → pipeline
- Source metadata captured per document: path, file type, size, project scope
- Phase-based roadmap documents future source additions

**Why not ★★★★★:**
- No change detection / incremental re-indexing (noted as open in roadmap)
- No data quality scoring per source
- No automated coverage gap detection

---

### L3 — Knowledge Core ★★★☆☆ Defined

**Evidence for ★★★:**
- Vector store: semantic chunks indexed with metadata (text, source path, document ID, scope, chunk index, chunk type)
- Entity extraction: persons, organizations, locations extracted per document
- Document classification: document type assigned per file
- SQLite metadata layer: projects, index runs, documents — structured, queryable
- Project-scoped isolation: one collection per project scope

**Why not ★★★★:**
- Entities extracted but not modeled as semantic objects — no entity model, no cross-document entity resolution, no relationships
- The vector store is a search index, not a semantic knowledge graph
- No explicit relationships modeled
- No versioned, auditable knowledge structures
- No controlled vocabulary or ontology

> **Structural vs. functional note:** ★★★ here is a structural judgment (entity extraction exists, metadata is structured). Functional quality — what % of top-5 results for real queries are relevant — was not measured. If retrieval precision is low for representative queries, the functional score would diverge from the structural score. Recommended validation: run 5–10 representative queries and evaluate top-5 precision before treating L3 as production-ready.

---

### L4 — Features & APIs ★★★★☆ Connected

**Evidence for ★★★★:**
- REST API with explicit, documented routers: health, projects, indexing, search
- MCP server: exposes capabilities to Agent callers — explicit cross-system integration contract
- Search service: semantic search with configurable retrieval
- Query expansion: automatic query enhancement
- Modular — each function independently callable
- API integrated into both UI and MCP consumers

**Why not ★★★★★:**
- No automated API performance monitoring
- No versioned API (no /v1 versioning scheme)

---

### L5 — Cognitive Capabilities ★★☆☆☆ Implicit

**Evidence for ★★:**
- Semantic search capability exists and works
- Query expansion exists — basic cognitive enhancement
- Entity extraction capability exists
- These capabilities are real and functional

**Why not ★★★:**
- Capabilities not named in business terms — no "Find Knowledge" or "Identify Entities" capability definition
- No capability catalog or registry
- Capabilities implemented as technical modules, not described as organizational abilities
- No statement of what the system *can do* independent of how it does it
- New capabilities added as code modules without a capability design step

---

### L6 — Solutions & Applications ★★★☆☆ Defined

**Evidence for ★★★:**
- Vue 3 Admin UI: search view + admin dashboard — documented and functional
- MCP Server integration: Agent caller can use the system as a knowledge source — concrete application
- REST API as headless application for programmatic consumers
- Applications are owned and reproducible

**Why not ★★★★:**
- Applications are simple: search UI + admin, not orchestrating multiple capabilities for complex tasks
- No context-aware application behavior — UI does not adapt to caller, role, or situation
- No agentic workflows combining multiple capabilities

---

### L7 — Use Cases & Challenges ★★☆☆☆ Implicit (Type B: Integration Scenarios)

*Type B variant applied: use cases = integration scenarios.*

**Evidence for ★★:**
- Core integration problem is well-articulated: reliable knowledge retrieval from fragmented project documents, locally, without cloud dependency
- The MCP integration scenario is real and implemented

**Why not ★★★:**
- Integration scenarios not formally documented — no scenario register, no per-caller-type scenarios
- No distinct integration scenarios: "Agent searching interactively" vs. "CI pipeline running QA checks" are different scenarios with different precision/latency tradeoffs — both collapsed into one
- Integration scenarios not linked to capabilities (L5) or integration quality outcomes (L10)

---

### L8 — Situation & Context ★☆☆☆☆ Absent (Type B: Integration Context)

*Type B variant applied: context = integration context (caller type, operation type, deployment environment).*

**Evidence assessed:**
- Project-scoped isolation (one collection per project) is the only context boundary — structural, not situational
- No caller type distinction: Agent (MCP), pipeline (CLI), human developer treated identically
- No operation type distinction: interactive search vs. bulk QA vs. health check — same retrieval parameters
- No deployment environment context: local single-user vs. multi-tenant behave identically
- Query expansion improves the query but does not use caller or operation context

**Why ★ and not ★★:**
- The "project" as context boundary is configuration, not dynamic integration context
- No component in the codebase addresses integration-situational relevance — architecturally absent

---

### L9 — System Participants ★★☆☆☆ Implicit (Type B: Integrator Triad)

*Type B variant applied: triad = Framework-Team → Integrator → End-User of client application.*

**Evidence for ★★:**
- Implied Integrator: the developer building a client application using the MCP server or REST API
- MCP server implies an Agent caller as a known integration pattern
- These integration patterns are functional and real

**Why not ★★★:**
- No formal Integrator role documented — what does the framework owe integrators? (API stability, migration paths, support)
- No accountability definition for the Framework-Team → Integrator contract
- No documentation of who decides what gets indexed, who owns a project scope, who the downstream beneficiary is

---

### L10 — Business Outcome ★☆☆☆☆ Absent (Type B: Integration Quality)

*Type B variant applied: outcome = integration quality (time-to-value for integrators, retrieval reliability, API stability).*

**Evidence assessed:**
- No integration quality KPIs defined: "time-to-first-working-integration", "top-5 precision across file types", "API breaking change frequency" — not tracked
- No onboarding time measurement for new integrators
- No feedback mechanism from integration experience back to improvement

---

## Rubric Gaps Found

Four places where the rubric needed clarification, discovered during this assessment:

1. **L3: vector search ≠ semantic knowledge model.** The rubric describes L3 as a "semantic system" but many real implementations use vector search as a substitute for a true semantic model. Decision taken here: ★★★ if entities are extracted and metadata is structured, even without a semantic graph — but documented separately as a structural-only score.

2. **L2 vs. L3 boundary for entity extraction.** Entities are extracted during ingestion (pipeline) but stored as metadata in the search index (L3). The extraction happens at the pipeline level, the result lives in the knowledge layer. Boundary is correct but the implementation makes it blurry.

3. **L4 ★★★★ threshold.** The rubric requires input/output contracts to neighboring layers to be explicit. For an API-first system, the API *is* the contract — but there is no explicitly published schema beyond auto-generated documentation. Decision: ★★★★ because the contract exists and is machine-readable.

4. **L9 for a single-developer project.** The Initiator/Actor/Beneficiary triad is harder to apply when the developer is simultaneously Initiator, Actor, and Beneficiary. Partially resolved by the System-Type B variant (Framework-Team / Integrator / End-User), but the rubric needs a note for small-team contexts.

---

## Top 3 Recommendations

### Recommendation 1 — Name and formalize Cognitive Capabilities (L5 ★★→★★★)

**Priority: High — Zone 2 gate blocker**

Create a capability catalog: name each capability in business terms.
- "Find Knowledge" (semantic search on indexed documents)
- "Extract Entities" (identify persons, organizations, locations from text)
- "Expand Query" (reformulate search intent for better retrieval)
- "Classify Document" (assign type/domain to a document)

Write one-sentence descriptions for each: what it does, what it does NOT do. Map existing code modules to capabilities.

Business benefit: Capabilities become describable, testable, and combinable without reading the code. Capability gaps become visible — "Summarize Knowledge" is not yet a capability.

Leading KPI: Capability catalog created (binary: yes/no within 2 weeks)
Lagging KPI: % of new feature requests mapping to an existing capability vs. requiring a new one (target: >60% map to existing)

---

### Recommendation 2 — Introduce integration context model (L8 ★→★★★)

**Priority: High — Zone 2 gate blocker. Start first — data accumulates passively.**

Add caller type and operation type to search and index requests:
- `caller_type`: agent | pipeline | human | automation
- `operation_type`: interactive_search | bulk_qa | index | health

Log context with every request — even without using it yet for routing. Define 2–3 distinct behaviors for different caller/operation combinations (Agent interactive search vs. CI pipeline QA check have different precision/latency tradeoffs).

Business benefit: First step toward integration-context-aware retrieval. Enables A/B testing of retrieval strategies per caller type. The system begins learning which configurations work for which integration patterns.

Leading KPI: Context fields present in API schema and populated by at least one client
Lagging KPI: Retrieval relevance score by caller type (measurable after 2–4 weeks of accumulated data)

---

### Recommendation 3 — Evolve Knowledge Core from index to semantic model (L3 ★★★→★★★★)

**Priority: Medium — pursue after L5 and L8 reach ★★★**

Model extracted entities as first-class objects: each Person, Organization entity gets an ID and a record — not just extracted text per chunk. Add cross-document entity resolution. Add at least one relationship type: "mentioned in" (entity → document).

Business benefit: Enables cross-document queries. "All documents referencing entity X" becomes a graph query — more reliable and explainable than full-text search approximation.

Leading KPI: Number of unique entities resolved across documents (vs. raw extraction count)
Lagging KPI: % of relational queries answered correctly (queries involving 2+ entities)

---

## §3 — How This Feedback Changed the Framework

This assessment was the first real-world validation of OIA Maturity Rubric v1. Four changes were made to the framework as a direct result.

### Change 1 — Zone 2 sequencing: L8 before L5

**Feedback:** The rubric said "L8 and L5 both High Priority Zone 2 blockers" but gave no ordering. Real-world guidance: L8 (intent/context logging) should start first because it accumulates data passively while L5 (capability catalog) is being designed.

**Rubric change (merged in #263):** Zone 2 Stop-Gate sequencing now explicitly states: start L8 ★1→3 first; L5 ★2→3 proceeds in parallel as documentation work. Rationale documented: L8 is the only Zone 2 transition that produces value passively.

### Change 2 — Minimum viable L10 tracking pattern

**Feedback:** L10 "Absent" without a practical MVP suggestion left the assessor with no actionable starting point for the smallest possible outcome tracking.

**Rubric change (merged in #263):** L10 Transition 1→2 now includes a "Minimum viable L10" callout: search log + manual relevance rating per session. Binary yes/no per session produces an outcome signal within days without infrastructure investment.

### Change 3 — L3 structural vs. functional assessment note

**Feedback:** The rubric produced a structural ★★★ (entity extraction exists, metadata structured) with no acknowledgment that functional quality — actual retrieval precision for real queries — could tell a different story.

**Rubric change (merged in #263):** L3 now includes a "Structural vs. functional assessment" note: report both scores if they diverge. Structural score for the rubric; functional score (top-k precision on representative queries) as a separate quality note.

### Change 4 — System-Type Qualifier (OIA-ODR-0003)

**Feedback:** The most significant finding. The rubric implicitly assumed an End-User-Application. For a Framework/Platform product, Zone 3 layer definitions (L7, L8, L9, L10) produced structurally incorrect assessments — not because the system was poorly built, but because the wrong yardstick was applied.

**Model change (merged in #264):** OIA-ODR-0003 introduces three system types as a mandatory pre-assessment step. Type B (Framework/Platform) has explicit variant definitions for L7 (integration scenarios), L8 (integration context dimensions), L9 (Integrator triad), and L10 (integration quality outcome). The key insight: L8 is type-invariant in *concept* (does the system understand its situation?) but type-specific in *dimensions* — a framework's situation is defined by caller type, operation type, and deployment environment, not by user role and business intent.

---

## §4 — What a Second Assessment Could Test

The rubric has been modified but not yet re-validated. Four hypotheses for a second assessment cycle:

### Hypothesis 1 — Type A validation (End-User-Application)

**What to test:** Does the standard rubric (no Type B variants) produce coherent, actionable results for a system that directly serves end users?

**What to look for:** Do the Zone 3 layer definitions fit without modification? Does L8 (user role/intent as context) produce a meaningful assessment for a real user-facing system?

**Suggested system:** Any internal knowledge assistant or enterprise search tool with real end users.

### Hypothesis 2 — Type B with multiple integrators

**What to test:** The Type B variant for L9 and L10 was designed from a single-integrator case. Does the Integrator triad and integration quality outcome hold when there are 3+ distinct integrators with different use patterns?

**What to look for:** Does L10 (integration quality KPIs) produce the right investment signals across integrator types? Does L9 ★★★ (documented Integrator role) scale to multiple client types?

### Hypothesis 3 — Functional L3 measurement

**What to test:** The structural-vs-functional L3 gap. Run representative queries on a real indexed corpus and measure top-5 precision. Does the structural ★★★ match the functional reality?

**What to look for:** If structural ★★★ and functional ★★ diverge, does the two-score approach (rubric note) communicate the gap clearly enough to drive investment? Or does it need to be a formal sub-score?

### Hypothesis 4 — Zone 2 sequencing validation

**What to test:** The new recommendation to start L8 before L5. In a second assessment cycle of the same system (after L8 intent logging is implemented), has the intent data accumulated been useful for shaping L5 capability definitions?

**What to look for:** Did starting L8 first actually accelerate L5 design? Or did L5 design need to happen first to know what intents to log?

---

*This document is part of the OIA Assessment Library at `context/assessments/`. Each entry records one assessment cycle: scores, recommendations, rubric gaps found, framework changes made, and open hypotheses for the next cycle. The library is the primary feedback loop for improving Rubric v1.*
