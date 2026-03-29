# OIA-ODR-0003: Assessment System-Type Qualifier

**Decision:** Every OIA Maturity Assessment begins with a mandatory System-Type classification that determines how L7, L8, L9, and L10 are defined for the specific Vorhaben. Three system types are defined: End-User-Anwendung (A), Framework/Platform (B), and Infrastruktur (C).
**Status:** Proposed
**Date:** 2026-03-29
**Governs:** Pre-assessment step for all OIA Maturity Assessments · L7/L8/L9/L10 layer definitions per system type
**Implements:** OIA model v0.4.0

---

## Context

The OIA Maturity Model (OIA-ODR-0002) defines assessment dimensions for ten layers. The layer definitions in `context/concepts/oia-layer-definitions.md` were validated against End-User-Applications — systems that directly serve end users and produce user-visible outcomes.

First real-world validation revealed that for Platform/Framework products (systems that enable other applications rather than directly serving end users), the Zone 3 layer definitions (L7, L8, L9, L10) produce structurally incorrect assessments:

- **L8 "Absent"** for a framework that intentionally delegates context handling to client applications is not a gap — it is correct architecture. The framework does not need to be context-aware; it needs to expose a context-passing API. These are different design goals and require different rubric criteria.
- **L10 "Absent"** for a framework whose primary value is time-to-value for integrators is not a missing business outcome — the business outcome is integration quality and reliability. Measuring it against end-user metrics produces a false deficit.
- **L7** for a framework contains integration scenarios (what client systems need the framework to do), not end-user use cases.
- **L9** participant triad has a different structure: the framework team is the Initiator, the integrator (developer of the client application) is the Actor, the end-user of the client application is the Beneficiary.

Without a System-Type Qualifier established before assessment begins, the rubric implicitly assumes Type A and produces misleading scores for Types B and C.

---

## Decision

### 1. System-Type as Mandatory Pre-Assessment Step

Before any layer is scored, the assessor must classify the Vorhaben into one of three system types. The classification is documented in the assessment output header, alongside the layer scores.

The System-Type is not a score. It is a qualifier that selects the appropriate interpretation of Zone 3 layer definitions.

### 2. System-Type Definitions

| Type | Name | Definition | Primary value recipient |
|---|---|---|---|
| **A** | End-User-Anwendung | System works directly for end users and produces user-visible outcomes | End user |
| **B** | Framework/Platform | System enables other applications (client systems); operator is typically a data processor; no direct end-user interaction | Integrator — developer of the client application |
| **C** | Infrastruktur | System provides operational capacity (compute, storage, processing) to other systems without business logic | System operator |

**Mixed types** are possible. When a Vorhaben exhibits characteristics of multiple types, classify by the dominant value delivery path and document the mixed classification in the assessment header. Example: a framework that also ships a reference implementation (Type B + Type A reference tenant) — classify as Type B, document the reference tenant separately.

### 3. Zone 1 and Zone 2 — Type-Invariant

L1, L2, L3, L4, and L5 definitions are identical across all system types. These layers describe the technical and semantic foundation that any system type requires.

**L8 (Situation & Context)** is in Zone 2 and remains a Zone 2 gate layer for all system types. The *structural criteria* (defined context dimensions, context captured at request time, context logged with results) apply identically. The *dimensions* of context differ by system type — but the concept is identical: does the system understand the situation it is operating in?

| Type | Context dimensions |
|---|---|
| **A** | User role, domain, intent, urgency, language, task |
| **B** | Caller type (agent / pipeline / human developer / automation), operation type (index / search / configure / monitor), deployment environment (local / cloud / multi-tenant), corpus characteristics |
| **C** | Operational conditions: load level, resource constraints, upstream system state |

For Type B, L8 ★★★ means: "Core integration context dimensions are defined (caller type, operation type, deployment environment), captured at request time, and logged with results." The gate threshold is identical to Type A; the context dimensions are integration-shaped rather than business-shaped.

> **Why this matters for frameworks:** A search request from Claude Code via MCP in an interactive session has different relevance expectations than a bulk QA check from a CI pipeline. A local single-user deployment context calls for different behavior than a multi-tenant cloud deployment. The framework is in a situation — that situation just looks like integration context, not user context.

### 4. Zone 3 Layer Definition Variants

For **Type A** (End-User-Anwendung): apply all layer definitions and rubric level descriptions without modification.

For **Type B** (Framework/Platform):

| Layer | Type A definition | Type B variant |
|---|---|---|
| **L7 Use Cases** | End-user use cases and challenges | Integration scenarios: what client applications need the framework to enable (e.g. "index a 50k-document corpus in under 10 min", "retrieve with ≥ 70% top-5 precision across file types") |
| **L9 System Participants** | Initiator/Actor/Beneficiary = organizational user roles | Triad: Framework-Team (Initiator) → Integrator / client developer (Actor) → End-User of client application (Beneficiary) |
| **L10 Business Outcome** | User-visible / organizational business outcome | Integration quality: time-to-value for new integrators, retrieval reliability across reference corpora, API stability, documentation completeness, onboarding time |

**L6 (Solutions & Applications)** for Type B refers to the framework itself as the "application" for integrators — the SDK, CLI, Docker image, or API surface that integrators consume. The rubric criteria apply without structural change; the user is the integrator, not the end user.

For **Type C** (Infrastruktur): Zone 3 rubric variant to be specified when a Type C assessment is first conducted. Until then: document the system as Type C and note that Zone 3 scores are not comparable to Type A/B assessments.

### 5. Assessment Output Header

Every published assessment must begin with a System-Type declaration in the following form:

```
**System-Type:** B — Framework/Platform
**Rationale:** The system provides retrieval infrastructure for client applications.
The operator processes data on behalf of client integrators (Auftragsdatenverarbeiter).
No direct end-user interaction. Zone 3 definitions applied per OIA-ODR-0003 §4 Type B variant.
```

---

## Consequences

- AI Agents performing maturity assessments must determine and document the System-Type before scoring any layer
- For Type B assessments: apply L7/L9/L10 Type B variants; interpret L8 as context-passing API completeness
- The assessment output must include the System-Type declaration block (§5)
- The local-rag reference assessment (`.local/notes/oia-assessment-local-rag.md`) must be re-scored for L7/L9/L10 using Type B variants before any published version is produced (#243)
- Future rubric additions for Zone 3 (★4→5 transitions) must provide Type A and Type B descriptions in parallel

---

## Alternatives Considered

**Separate rubrics per system type:** Three full rubric documents, one per type. Rejected: triples maintenance burden; Zone 1+2 layers are type-invariant and would be duplicated needlessly. Every rubric update would require three edits.

**Inline notes in transition blocks:** Type-specific notes scattered throughout the rubric. Rejected: distributes governance logic without enforcement; assessors must know all notes to apply them correctly; the qualifier is binding and must be established before scoring begins, not discovered mid-rubric.

**Assessor guidance document (non-binding):** A guidance note without OIA-ODR status. Rejected: produces inconsistent assessments across assessors and agents; the qualifier is architectural, not advisory — it changes what a score means.
