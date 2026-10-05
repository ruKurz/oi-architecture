# OIA Assessment #002 — Local Knowledge Retrieval System (Second Cycle)

**Assessment date:** 2026-03-29
**Assessor:** Claude (OIA Maturity Rubric v1, Zones 1–3)
**System:** A local, project-based semantic search and knowledge retrieval system (same system as Assessment #001)
**Cycle:** 2 — after two increments that introduced a context model and a capability catalog
**System-Type:** B — Framework/Platform
**System-Type rationale:** The system provides retrieval infrastructure for client applications. The operator processes data on behalf of client integrators. No direct end-user interaction as primary use case. Zone 3 definitions applied per OIA-ODR-0003 §4 Type B variant.
**Stack:** Python, FastAPI, vector store, local embedding models, NLP library, SQLite, Vue 3, MCP Server
**Prior cycle:** Assessment #001 (same system, before the context-model and capability-catalog increments)
**Status:** Completed — feedback incorporated; framework notes in §3

---

## Layer Scores

| Layer | Cycle 1 (#001) | Cycle 2 (this) | Delta |
|---|---|---|---|
| L1 AI & Cognitive Infrastructure | ★★★☆☆ | ★★★☆☆ | = |
| L2 Data Sources | ★★★★☆ | ★★★★☆ | = |
| L3 Knowledge Core | ★★★☆☆ | ★★★☆☆ | = |
| L4 Features & APIs | ★★★★☆ | ★★★★☆ | = |
| L5 Cognitive Capabilities | ★★☆☆☆ | **★★★☆☆** | ↑ +1 |
| L6 Solutions & Applications | ★★★☆☆ | ★★★☆☆ | = |
| L7 Use Cases & Challenges | ★★☆☆☆ | ★★☆☆☆ | = |
| L8 Situation & Context | ★☆☆☆☆ | **★★★☆☆** | ↑ +2 |
| L9 System Participants | ★★☆☆☆ | ★★☆☆☆ | = |
| L10 Business Outcome | ★☆☆☆☆ | ★☆☆☆☆ | = |

> **Note on Type B scoring:** L7, L8, L9, L10 scores are applied under OIA-ODR-0003 Type B variant definitions throughout. L7 = integration scenarios; L8 = integration context (operation type, caller type, deployment environment); L9 = Framework-Team → Integrator → End-User triad; L10 = integration quality outcome (retrieval precision, time-to-value, API stability). Numerically identical to the Type A frame; the *meaning* of each score differs.

---

## Stop-Gate Analysis

```
ZONE 1 — Foundation
  L2 Data Sources:           ★★★★ ✅
  L1 AI Infrastructure:      ★★★  ✅
  → Zone 1 gate: OPEN (unchanged from Cycle 1)

ZONE 2 — Capabilities
  L3 Knowledge Core:         ★★★  ✅ (at threshold)
  L4 Features & APIs:        ★★★★ ✅
  L5 Cognitive Capabilities: ★★★  ✅ (was ★★ — now at threshold)
  L8 Situation & Context:    ★★★  ✅ (was ★  — now at threshold)
  → Zone 2 gate: NOW OPEN ← headline change

ZONE 3 — Impact (first-time assessment)
  L6 Solutions & Applications: ★★★  ✅ (at threshold)
  L7 Use Cases & Challenges:   ★★   ❌ (below threshold)
  L9 System Participants:      ★★   ❌ (below threshold)
  L10 Business Outcome:        ★    ❌ (absent)
  → Zone 3 gate: NOT OPEN
```

**Verdict:** Zone 2 gate opened in this cycle. The two Cycle 1 blockers (L5 Capability naming, L8 Context model) were both resolved — by the capability-catalog increment and the context-model increment respectively. Zone 3 is the next investment area. The three blocking dimensions are L7 (integration scenarios not formally documented), L9 (integrator triad not formalized), and L10 (no integration quality KPIs tracked).

---

## Pattern: "Context-Aware but not Context-Driven"

**Score signature:** L2 ★★★★ / L4 ★★★★ / L8 ★★★ / L5 ★★★

This is a resolved Pattern A ("Data-Rich, Context-Poor") in transition. The system now captures intent and has named its capabilities. The data pipeline and API layer remain excellent. However, the system still does not adapt retrieval behavior based on context — intent is observed and logged, but not acted upon. The pattern name reflects the inflection point: the system has moved from structurally context-free to context-aware, but has not yet crossed into context-driven.

The next transition requires wiring the context model into actual retrieval configuration. That requires a quality baseline first (see Recommendations).

---

## Evidence per Layer

### L1 — AI & Cognitive Infrastructure ★★★☆☆ Defined

**Evidence for ★★★:**
- Vector store: documented in a decision record, owner-assigned
- Embedding providers: pluggable abstraction — local (primary), alternative local, cloud, and sparse-lexical providers switchable
- Model choice documented in a decision record with rationale (short-query robustness, German-language support, asymmetric retrieval)
- Pipeline version tracking: embedding model, dimension, and enrichment version stored with the index — mismatch triggers automatic full rebuild
- Python environment pinned
- Operational observability added in this cycle: search log (query + intent + top score), structured index-failure records (typed error categories with duration), index-run tracking (progress, stuck-run recovery)

**Why not ★★★★:**
- No infrastructure-level observability (no inference latency metrics, no model error rate, no request throughput)
- No CI/CD automated deployment pipeline
- No formal SLAs for infrastructure availability or response time
- No documented model update procedure with evaluation criteria and rollback plan

---

### L2 — Data Sources ★★★★☆ Connected

**Evidence for ★★★★:**
- Supported formats: Markdown, plain text, PDF (with OCR fallback), spreadsheets (.xlsx/.xls, .csv), images (OCR)
- Extractor modules per format, encoding fallbacks, binary content detection
- Scanner exclusions: hidden directories, version-control and virtual-environment folders, agent configuration files, OS artefacts
- Input/output contracts explicit: source file → extracted text → pipeline
- Source metadata per document: path, file type, file hash, size, project scope
- Incremental indexing: hash-based change detection with configurable strategies — closes the Cycle 1 gap "no change detection"
- Structured failure tracking with typed error categories (no content, extraction failed, embedding failed, unsupported format, OCR timeout)

**Why not ★★★★★:**
- No automated coverage gap detection
- No data quality scoring per source type
- No feedback loop from quality monitoring to source owners (N/A for filesystem, but principle absent)

---

### L3 — Knowledge Core ★★★☆☆ Defined

**Evidence for ★★★:**
- Vector store: one collection per project scope, named vectors (dense + sparse lexical weights)
- SQLite metadata layer: projects, documents, index runs, index failures, search log, source statistics; curation flags and a user model prepared but not yet active
- Entity extraction: NLP pipeline → top-10 persons, organizations, locations per document
- Document classification: 44 keyword patterns → 19 document type labels
- Document header chunks: synthetic enrichment chunk per document (title + type + entities) — improves semantic findability for documents whose content does not match query directly
- Chunk payload: text, source path, document ID, project scope, chunk index, chunk type

**Why not ★★★★:**
- Entities extracted but not modeled as semantic objects — no cross-document entity resolution (planned, not yet implemented)
- Vector store is a retrieval index, not a semantic knowledge graph
- No explicit entity relationships modeled
- No controlled vocabulary or ontology
- No versioned, auditable knowledge structures

> **Structural vs. functional assessment (critical note):** ★★★ here is a structural judgment — entity extraction exists, metadata is structured, chunk types are defined. Functional quality — what % of top-5 results for real integration queries are relevant — was not measured. This is the one layer where structural and functional scores could diverge significantly.
>
> Specific risk: OCR extraction quality is variable. If the OCR engine produces substantial noise for a significant portion of scanned PDFs (suspected), the functional score for a document-heavy corpus could be ★★ or lower — meaning the search index contains enough noise to degrade retrieval precision measurably. This risk is currently unquantified. The quality baseline (Recommendation 2) will surface it or rule it out.
>
> **Until the quality baseline is complete, L3 ★★★ should be read as "structurally sound, functionally unvalidated."**

---

### L4 — Features & APIs ★★★★☆ Connected

**Evidence for ★★★★:**
- REST API: routers for health, projects, indexing, search, search log
- MCP server: list projects + search (project, query, limit, intent) — explicit integration contract for AI agent callers
- Hybrid search: dense + sparse retrieval with reciprocal rank fusion
- Query expansion: 24 concept-based trigger mappings applied pre-embedding
- Intent field in request schema: 6 operation types, logged per search (new in this cycle)
- Test modules covering all major subsystems

**Why not ★★★★★:**
- No API versioning (/v1 URL prefix absent)
- No automated API performance monitoring (latency, throughput at API level)
- No formally published API contract beyond auto-generated FastAPI documentation

---

### L5 — Cognitive Capabilities ★★★☆☆ Defined

**Evidence for ★★★:** (capability-catalog increment complete — dedicated capability catalog document)

| ID | Business Name | Scope | What it does NOT do |
|---|---|---|---|
| C1 | Index Knowledge | Ingestion pipeline (scan, extract, chunk, embed) | Does not validate or curate content quality |
| C2 | Find Knowledge | Search service + vector store | Does not summarize or synthesize results |
| C3 | Expand Query | Query expansion | Does not learn from query history |
| C4 | Extract Entities | Enrichment | Does not resolve cross-document entity identity |
| C5 | Classify Document | Enrichment | Does not infer document semantics beyond type labels |

Capabilities are named in business terms, each scoped to a module, and explicitly bounded by what they do NOT do. A new contributor understands system abilities without reading source code.

**Why not ★★★★:**
- Capabilities are documented but not yet connected as explicit input/output contracts to neighboring layers (L4 → L5 → L6 handoff not formalized)
- No capability stability guarantees across versions
- New capabilities can still be added as code modules without a formal capability design step
- No capability-level precision targets or quality thresholds defined

---

### L6 — Solutions & Applications ★★★☆☆ Defined

**Evidence for ★★★:**
- Vue 3 Admin UI: search view with intent selector, project admin, index run monitoring, failure diagnostics
- MCP Server: AI coding-assistant integration — AI agents can use the system as a knowledge source
- REST API: headless application for programmatic integrators
- CLI: serve and index commands
- All applications owned, documented, reproducible via Docker Compose

**Why not ★★★★:**
- Applications are task-specific, not orchestrating multiple capabilities for complex composed tasks
- No context-aware behavior adapting to caller type or operation type
- Intent field exists in search UI but does not influence response presentation
- No agentic workflow combining Index + Find + Classify in a single operation

---

### L7 — Use Cases & Challenges ★★☆☆☆ Implicit (Type B: Integration Scenarios)

*Type B variant: use cases = integration scenarios for domain applications and AI agent callers.*

**Evidence for ★★:**
- MVP document: User Group A (MCP / personal corpus) and User Group B (REST / domain application) described as integration profiles
- 6 intent types define a retrieval pattern taxonomy (knowledge question, simple fact, document lookup, aggregation, enumeration, comparison)
- Core integration problem articulated: reliable local retrieval without cloud dependency

**Why not ★★★:**
- No formal integration scenario register — no documented scenarios with pre/post conditions per caller type
- User Groups A and B are personas, not integration scenarios
- Scenarios not linked to capabilities (L5) or integration quality outcomes (L10)
- "MCP Agent searching interactively" and "CI pipeline running bulk QA" have structurally different precision/latency requirements — both collapsed into one pipeline without explicit differentiation

---

### L8 — Situation & Context ★★★☆☆ Defined (Type B: Integration Context)

*Type B variant: context = integration context (operation type, caller type, deployment environment).*

**Evidence for ★★★:** (context-model increment complete)
- Intent field: 6 operation types, named and documented in API schema and capability catalog
- Every search logged with project, query, intent, result count, top score, timestamp
- Intent accessible to integrators via a search-log API endpoint
- Context dimension is named, documented, and owned by the search service

**Why not ★★★★:**
- Intent is logged but does NOT influence retrieval — no intent-based routing, no parameter tuning, no ranking modification
- Caller type not distinguished: MCP agent, human developer, and CI pipeline receive identical treatment
- Deployment context not modeled: local single-user vs. multi-tenant behave identically
- Only one of three Type B context dimensions is covered (operation type ≈ intent; caller type absent; deployment environment absent)

> **Type B precision note:** The intent field maps to operation type — what the search is FOR. Caller type (who is calling: agent vs. human vs. pipeline) and deployment environment (local dev vs. production deployment) are still architecturally absent. L8 ★★★ is the correct score because the implemented dimension is named, documented, and accumulating real data — but the full Type B context model is ~⅓ implemented.

---

### L9 — System Participants ★★☆☆☆ Implicit (Type B: Integrator Triad)

*Type B variant: triad = Framework-Team → Integrator → End-User of client application.*

**Evidence for ★★:**
- MVP document: User Groups A and B imply distinct integrator profiles
- User model with admin | viewer roles exists in domain model — not yet enforced
- MCP server implies Agent caller as a known integration pattern
- Integration patterns are functional and real

**Why not ★★★:**
- No formal Integrator role documentation — no statement of what the framework owes integrators (API stability, breaking change policy, migration paths)
- No documented Initiator/Actor/Beneficiary triad for the framework context
- User roles have no enforcement in API middleware (placeholder only)
- No accountability definition between Framework-Team and Integrators

---

### L10 — Business Outcome ★☆☆☆☆ Absent (Type B: Integration Quality)

*Type B variant: outcome = integration quality — retrieval precision, time-to-value for integrators, API stability.*

**Evidence assessed:**
- Search log captures the top score per query — a raw signal, not a precision metric (no ground truth comparison)
- Index run tracking captures duration and failure rate — operational metrics, not integration quality
- No integration quality KPIs defined: "top-5 precision on representative corpus", "time-to-first-working-integration", "API breaking changes per release" — not measured
- No feedback mechanism from integration experience to improvement backlog
- Top-score distribution available in search log — meaningful only relative to a precision baseline that does not yet exist

---

## Recommendations

> **Recommendation character is explicit below.** Each recommendation is one of three types:
> — **Documentation:** text work, no code, completable in days
> — **Measurement:** manual measurement or data analysis, no code, requires operator time
> — **Engineering:** code change, requires design + implementation cycle

### Recommendation 1 — Document Integration Scenarios (L7 ★★→★★★)

**Character: Documentation**
**Priority: High — Zone 3 gate blocker. Completable in 1 week without code.**

Create an integration-scenario document with three scenarios:

1. **MCP Agent Search** — Caller: AI agent via stdio MCP. Operation: interactive search, low volume, high precision requirement. Environment: developer workstation, single user.
2. **REST Bulk QA** — Caller: CI pipeline. Operation: batch validation, high volume, latency-tolerant. Environment: automated, no human in loop.
3. **Domain Application Integrator** — Caller: application developer building a domain application. Operation: programmatic search embedded in domain workflow. Environment: varies (local dev → production).

Per scenario: caller profile, operation type (mapped to the intent field), precision/latency tradeoffs, example request, expected capabilities used (linked to L5), expected integration quality outcome (linked to L10).

Business benefit: Integrators know explicitly which configuration fits their pattern. Separating scenarios makes retrieval optimization tractable — the system cannot be optimized for all three patterns simultaneously without knowing they are different.

Leading KPI: Integration-scenario document created with ≥ 3 scenarios (binary: yes/no)
Lagging KPI: New integrators onboard using scenario documentation without direct support

---

### Recommendation 2 — Establish Quality Baseline (L10 ★→★★)

**Character: Measurement**
**Priority: High — prerequisite for R3. Must precede intent-based routing.**

Take 10 representative queries from the search log (covering at least 3 intent types), run them against the primary indexed corpus, and manually evaluate top-5 results for relevance. Record in a quality-baseline document:

- Per-query: intent type, top-5 results, binary relevance per result (relevant / not relevant)
- Per-intent-type: precision@5 (# relevant in top-5 / 5)
- Cross-cutting: note any systematic patterns (e.g., OCR-extracted documents consistently rank low for non-OCR queries, or entity extraction produces findability improvements for header-matched documents)

This baseline serves two purposes:
1. It surfaces whether L3 ★★★ is structurally correct but functionally lower (OCR noise risk)
2. It provides the ground truth that R3 (intent-based routing) needs to validate improvement

Business benefit: The single measurement session produces a precision number that every future release can be compared against. Without it, improvement claims are unverifiable.

Leading KPI: Quality-baseline document created with ≥ 10 queries evaluated (binary: yes/no)
Lagging KPI: Precision@5 by intent type — the number itself is the outcome, whatever it is

> **Why R2 must precede R3:** Intent-based retrieval routing (R3) optimizes different intent groups with different parameters. Without a precision baseline, there is no way to know which intents need improvement, which parameters to tune, or whether tuning worked. R3 without R2 is optimization without measurement.

---

### Recommendation 3 — Activate Intent-Based Retrieval Routing (L8 ★★★→★★★★)

**Character: Engineering**
**Priority: Medium — pursue after R2 is complete.**

Using the precision findings from R2, define two retrieval configurations:
- **Precision-optimized:** for document-lookup and simple-fact intents — fewer results, higher score threshold
- **Recall-optimized:** for aggregation and enumeration intents — more results, lower threshold

Implement intent-based routing in the search service. Add `caller_type: agent | pipeline | human` to the search request — log alongside intent, use for future routing.

Business benefit: "Finding a single document" and "compiling a list of all relevant passages" are structurally different retrieval tasks with different optimal parameters. Collapsing them into one configuration is a precision tradeoff that the accumulated intent data makes visible and fixable. After R2 baseline, R3 can be measured against it.

Leading KPI: ≥ 2 distinct retrieval configurations active and selectable by intent (binary: yes/no)
Lagging KPI: Precision@5 per intent type after routing active — compare against R2 baseline

---

## Proposed Roadmap Increments

Three new increments derived directly from this assessment:

| Increment | Name | Character | L-Target | Prerequisite |
|---|---|---|---|---|
| Increment 1 | Integration Scenarios | Documentation | L7 → ★★★ | None |
| Increment 2 | Quality Baseline | Measurement | L10 → ★★, L3 functional validation | Search-log data (context-model increment) |
| Increment 3 | Intent-Based Retrieval Routing | Engineering | L8 → ★★★★ | Increment 2 complete |

**Recommended sequencing:** Increment 1 and Increment 2 can run in parallel (no dependency between them). Increment 3 requires Increment 2 to be complete.

---

## Rubric Gaps Found

No new structural gaps in Rubric v1 were discovered in this cycle. Three observations for the rubric backlog:

1. **L3 structural vs. functional scoring is under-specified for OCR-heavy corpora.** The rubric's L3 ★★★ criteria ("entities extracted, metadata structured") does not distinguish between clean digital text and OCR-extracted content, which can have substantially lower semantic coherence. A rubric note for OCR-heavy contexts — requiring a functional precision measurement before treating L3 as production-ready — would prevent false confidence.

2. **Recommendation character (Documentation / Measurement / Engineering) is not a rubric concept.** The assessment feedback explicitly identified that the three recommendations had different characters not named in the report. The rubric's recommendation format (MoSCoW action items + KPIs) does not include a "character" field. Adding one would help assessors sequence recommendations correctly — especially when a Measurement recommendation must precede an Engineering recommendation.

3. **Zone 3 transition path (Zone 2 open → Zone 3 targets) needs elaboration.** The rubric describes Zone 3 layer targets (L6 ★★★★, L9 ★★★, L7 ★★★★, L10 ★★★★) but gives no guidance on which Zone 3 layer to start with once Zone 2 opens. Feedback from this cycle: L7 (Integration Scenarios) is the lowest-effort, highest-leverage first step because it is pure documentation work and unlocks L9 and L10 framing. A sequencing note for Zone 3 entry would be valuable.

---

## §3 — How This Feedback Changed the Framework

One change to the assessment methodology directly from this cycle's feedback.

### Change 1 — Recommendation character field

**Feedback:** The three recommendations in the draft report (R1, R2, R3) were listed in an order that was logical by layer number but incorrect for implementation: R2 (intent-based routing = Engineering) was listed before R3 (quality baseline = Measurement), when R3 is in fact a prerequisite for R2. The feedback identified that the report did not make the character of each recommendation explicit.

**Assessment practice change:** All future assessments must label each recommendation with its character (Documentation / Measurement / Engineering) before the priority assignment. Sequencing within the recommendation list must respect the dependency between a Measurement recommendation and the Engineering change it enables. This change is reflected in the recommendations above and documented in the rubric backlog (Rubric Gap #2).

---

## §4 — What a Third Assessment Could Test

### Hypothesis 1 — L3 structural vs. functional gap (OCR risk)

**What to test:** Does the quality baseline (Increment 2) reveal a significant gap between L3 ★★★ (structural) and the functional precision reality for OCR-heavy corpora?

**What to look for:** If the OCR engine produces >20% noise in OCR-extracted documents and those documents appear in top-5 results for non-OCR queries, the effective L3 score for a document-heavy integrator could be ★★. If a planned OCR entity filter closes this gap, a third assessment should re-score L3 after it lands.

### Hypothesis 2 — Intent routing validation

**What to test:** After Increment 3 (intent-based retrieval routing), does precision@5 improve for the targeted intent groups (document lookup, simple fact) compared to the Increment 2 baseline?

**What to look for:** Does the routing produce measurable precision improvement? Or does the single retrieval pipeline already perform near-optimally for all intent types? Either result is useful.

### Hypothesis 3 — Zone 3 entry: L7 → ★★★ unlocking L9 and L10 framing

**What to test:** Does completing Increment 1 (Integration Scenarios) actually enable more precise L9 and L10 assessment? Or do L9 and L10 remain at ★★ / ★ regardless of L7 improvement?

**What to look for:** If Integration Scenarios are defined (L7 ★★★), does the Integrator triad (L9) become easier to specify? Does the quality baseline (L10 ★★) become scenario-specific? The OIA Stop-Gate model predicts that Zone 3 layers improve together — this hypothesis tests that in the Type B context.

### Hypothesis 4 — Caller-type context model

**What to test:** Increment 3 adds caller-type logging. In a third assessment cycle, is there meaningful behavioral differentiation between MCP agent callers and human developer callers?

**What to look for:** Do the two caller types show measurably different precision needs? Does the system need per-caller-type retrieval tuning, or does intent classification already capture the relevant variation?

---

*This document is part of the OIA Assessment Library at `context/assessments/`. Each entry records one assessment cycle: scores, recommendations, rubric gaps found, framework changes made, and open hypotheses for the next cycle. Assessment #001 is the prior cycle for the same system.*
