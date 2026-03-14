# ODR — Organizational Decision Record

**Version:** 1.1 · 2026-03-14
**Status:** Active
**Related:** [ADR-0012](../decisions/0012-introduce-odr-governance-layer.md) · [ODR Template](../decisions/org/odr-template.md)

---

## What is an ODR?

An **Organizational Decision Record** documents a decision made at the organizational governance layer — a choice about *how an organization operates*, governs itself, and structures its processes.

ODRs make organizational intelligence explicit. They answer the question:

> *"Why does this organization behave the way it does?"*

The defining property of an ODR is its **binding scope**: every ODR explicitly states which participants are bound by it — Users, Agents, Contributors, or all three. An AI agent that acts within an organization must respect its organizational decisions just as much as a human employee does. This is not a design detail; it is the core constraint that distinguishes ODRs from all existing decision documentation formats.

A useful mental model:

> *ODRs are the `.env` file of the organization — not for secrets, but for values, methods, and decisions from which both human and agent behavior can be derived.*

Just as a `.env` file configures runtime behavior without embedding logic in code, an ODR stack configures organizational behavior without embedding it in informal culture or undocumented convention.

---

## Why ODRs — the gap no existing format fills

**ADRs** (Architecture Decision Records) document technical and structural choices:
> "We chose technology X over Y for architectural reason Z."

The keyword is *architectural*. ADRs are explicitly bound to systems and their structure — not to the organization as an acting subject. They are primarily binding for technical contributors: code reviewers, architects, developers.

**ODRs** document organizational choices:
> "We chose operating model X over Y because it minimizes risk Z at cost C."

The critical distinction: an ODR binds **all system participants** — Users, Contributors, and Agents alike.

ADRs answer *how we build*. ODRs answer *how we operate*.

### Why existing formats don't fill this gap

Several adjacent formats exist. None of them cover the Org layer completely:

| Format | Layer | Binding | Why-documentation | Versionable | Agent-aware | Derivation chain |
|---|---|---|---|---|---|---|
| ADR | Arch | Technical contributors | ✅ | ✅ | ❌ | ❌ |
| GDR (Governance Decision Record) | Arch/Data | Data teams + platform | ✅ | ✅ | ❌ | ❌ |
| Decision Log | All | No specific scope | ⚠️ often absent | ❌ | ❌ | ❌ |
| Policy Document | Org | Humans | ❌ rarely | ❌ | ❌ | ❌ |
| Runbook / Playbook | Arch | Operators | ❌ | ⚠️ | ❌ | ❌ |
| AI Governance Framework (NIST, Microsoft, EU AI Act) | Org/Gov | Management, auditors | ⚠️ | ❌ | ❌ | ❌ |
| **ODR** | **Org** | **All participants incl. Agents** | **✅** | **✅** | **✅** | **✅** |

**GDR (Agile Lab):** A versioned, computationally executable governance policy format for data platforms — Policy-as-Code. Domain-specific to data governance; requires platform infrastructure. Not a general-purpose format for organizational decisions.

**Decision Log:** A reactive protocol — it records what was decided, not why in a structured way. No binding concept, no defined scope (who is bound?), no governance layer in a hierarchy.

**Policy Document:** The classic form of organizational decisions (HR handbooks, codes of conduct). Problems: no standardized structure analogous to ADRs, no documentation of the decision rationale (context, rejected alternatives, trade-offs), not version-controlled in a software workflow sense, no binding scope definition.

**Runbook / Playbook:** Describes *how* something is done — step-by-step operational procedures. ODRs describe *why* — the reasoning behind organizational choices. The difference is between an operating manual and a constitution. A constitution does not tell you how to file a form; it tells you why the process exists at all.

**AI Governance Frameworks (Microsoft Cloud Adoption Framework, NIST AI RMF, EU AI Act):** These define *what* must be documented (risk controls, compliance evidence, role assignments) and *who* is responsible. They do not provide a format in which individual organizational decisions are captured as structured, versionable, derivable units. Microsoft's AI Readiness approach defines institutional roles (Platform Team, AI CoE) and processes — but does not codify *why* an organization operates the way it does, nor how that derives to technical tool choices. The result: compliance is demonstrated as static documentation, not as an active, machine-readable knowledge base.

The "it's just a Policy Document with ADR format" objection is predictable — and wrong. Policy Documents do not document the decision rationale, are not part of a versionable knowledge base, and do not define the binding scope or derivation chain. An ODR does all four.

---

## The derivation chain — the core innovation

The most important property of an ODR is not its format. It is the **derivation chain** it enables.

```
Value (ODR)  →  Method (ODR / practice)  →  Tool (ADR)
```

Example:

```
ODR-0002: We adopt agile principles
  └─ implements: Scrum sprint cadence
       └─ implements: ADR-0003 (GitHub Issues as task tracker)
       └─ implements: ADR-0005 (Conventional Commits)
            └─ implements: git flow branch strategy
```

This chain means that an observer — human or AI — who reads `ODR-0002` can *derive* which tools and conventions are in use, and *why* they were chosen. The choice is not arbitrary; it is the logical implementation of an organizational decision that was made consciously and documented transparently.

This is structurally related to **Fitness Functions** from Evolutionary Architecture (Ford et al., 2017) — but one layer higher. Fitness Functions check whether the *system* meets architectural criteria. ODRs define the criteria against which *organizational behavior* is measured. Both make implicit constraints explicit and testable.

ODRs make the following statement machine-verifiable:
> *"The commit convention used in this project is not a random choice. It derives from ODR-0002 (agile principles) → structured delivery discipline → ADR-0005."*

---

## Agent onboarding: the concrete use case

Current state-of-the-art for briefing an AI agent on organizational context: a long system prompt, manually written and manually maintained. When the organization changes, the prompt goes stale. When a new AI tool is adopted, the briefing starts from scratch.

With an ODR stack, agent onboarding becomes derivable:

1. Agent reads `decisions/README.md` → finds the ODR index
2. Agent reads `ODR-0001` → knows: this project is community-driven, no vendor control
3. Agent reads `ODR-0002` → knows: agile principles apply; sprint-based, iterative, change is expected
4. Agent traverses `implements` references → knows: GitHub Issues (ADR-0003), Conventional Commits (ADR-0005), BIZ/DEV separation (ADR-0002)
5. Agent knows what it can decide autonomously and what requires human sign-off

The result: consistent agent behavior derived from organizational decisions, not from a manually curated prompt. When a decision changes, the ODR is updated — and the behavior update propagates.

This is the capability gap that no existing governance framework addresses. Microsoft, NIST, and the EU AI Act all recognize that AI agents need context. None of them provide a machine-readable format in which that context is stored as a structured, versionable, derivable knowledge base.

---

## The governance hierarchy

ODRs sit within a three-level hierarchy:

```
Gov  (Government / Norm)
 │   External constraints — laws, regulations, standards, compliance requirements.
 │   These are given, not chosen. Examples: GDPR, ISO 27001, labor law.
 │
 ▼
Org  (Organization / Policy)        ← ODR layer
 │   Internal organizational decisions — how we choose to operate within the
 │   constraints imposed by Gov. Examples: "We adopt agile principles."
 │   "We are a community-driven project." "We document decisions transparently."
 │
 ▼
Arch (Architecture / Technology)
     Technical and structural decisions — how we implement the Org choices.
     Examples: ADRs, commit conventions, CI/CD pipelines, data models.
```

An ODR at the Org layer may:
- Reference a Gov constraint as the trigger for the decision
- Constrain one or more ADRs at the Arch layer
- Be referenced by other ODRs via `derives-from` (parent) or `implements` (child) links

An ADR may reference an ODR as its higher-level authority:
> *"Per ODR-0001, this project operates under a community-driven model; this ADR implements that choice at the technical layer."*

---

## ODRs and OIA

The ODR concept aligns directly with the *Organizational Intelligence Architecture* thesis:

> Organizational intelligence is not just about data pipelines and AI models — it requires making the cognitive architecture of the organization itself explicit and traceable.

Decisions about *how the organization operates* are part of that cognitive architecture. Left implicit, they become invisible constraints that block contributors (human and AI) from acting coherently. Made explicit as ODRs, they become navigable, auditable, and improvable.

ODRs are, in the language of OIA, a **Knowledge Core artifact** for the organization's own operating logic — stored in the same repository as the code it governs, versioned alongside it, and readable by all participants.

---

## Binding parties

Every ODR explicitly states who it binds:

| Party | Meaning |
|---|---|
| **Users** | Humans interacting with the system (employees, contributors, readers) |
| **Agents** | AI systems, automated workflows, bots acting within the organization |
| **Contributors** | People contributing to the project (code, content, governance) |
| **All** | Users + Agents + Contributors |

This explicit binding is what distinguishes ODRs from informal process notes. An ODR is not a suggestion — it is a traceable organizational commitment.

---

## Naming and numbering

- ODRs are numbered independently of ADRs: `ODR-0001`, `ODR-0002`, …
- Files are stored in `decisions/org/` (separate from ADRs in `decisions/`)
- File naming: `decisions/org/NNNN-slug.md`
- Both ADRs and ODRs are indexed in `decisions/README.md` under separate sections

**Status values** (same as ADRs):
- `Proposed` — active and followed, awaiting human sign-off
- `Accepted` — explicitly confirmed by the human maintainer
- `Deprecated` — no longer applicable
- `Superseded by ODR-XXXX` — replaced by a newer record

**Only a human maintainer may set status to `Accepted`.** AI-assisted tooling must use `Proposed`.

---

## ODR vs. ADR — at a glance

| Dimension | ADR | ODR |
|---|---|---|
| Layer | Arch | Org |
| Subject | Technical / structural choices | Organizational operating choices |
| Trigger | Architectural need or constraint | Governance need, policy choice, or Gov constraint |
| Binding for | Technical contributors primarily | All participants (Users, Agents, Contributors) |
| Location | `decisions/` | `decisions/org/` |
| Template | `decisions/README.md` → Template section | `decisions/org/odr-template.md` |
| Numbered | ADR-XXXX | ODR-XXXX |
| Derivation links | — | `derives-from` / `implements` |

---

## Theoretical foundation

The Gov → Org → Arch hierarchy is a deliberate simplification of established enterprise governance frameworks — not an invented construct.

### TOGAF (The Open Group Architecture Framework)
The strongest correspondence. TOGAF's Architecture Governance model distinguishes explicitly between:
- **Corporate/Regulatory Governance** — external constraints that are given, not chosen (= `Gov`)
- **IT/Business Governance** — internal policies and operating decisions (= `Org`)
- **Architecture Governance** — technical decisions, patterns, standards (= `Arch`)

TOGAF treats Corporate Governance as an external input to the internal governance framework, consistent with the ODR model's treatment of `Gov` as "given, not chosen." A TOGAF whitepaper explicitly recommends inserting a Business Governance layer between Corporate and Technology Governance — acknowledging that the boundary between Org and Arch needs more granularity in large enterprises. The three-layer model here is a conscious simplification of this richer structure.

### COBIT / ISO/IEC 42010
COBIT and the ISO/IEC 42010 standard (Systems and Software Engineering — Architecture Description) treat external regulatory requirements (GDPR, HIPAA, ISO 27001, SOX, NIST) as a distinct compliance layer on which internal governance mechanisms are built. This is the same separation as `Gov → Org`.

### Weill & Ross — IT Governance
Peter Weill and Jeanne W. Ross (*IT Governance*, 2004) define IT governance as "specifying the decision rights and accountability framework to encourage desirable behavior in the use of IT." Their framework distinguishes governance decisions (who has the right to decide) from management decisions (who implements). ODRs operate at the governance level — they document *that* a decision was made and *why*, not *how* it is implemented.

### ADR tradition — Nygard (2011)
The Architecture Decision Record format originates with Michael Nygard's 2011 blog post *Documenting Architecture Decisions*. The format was designed for the Arch layer: technical choices made by architects and developers. ODRs extend the same traceability principle one layer up — applying it to organizational decisions that constrain the Arch layer.

### Fitness Functions — Ford et al. (2017)
Ford, Parsons, Kua, and Richards (*Building Evolutionary Architectures*, 2017) define Fitness Functions as objective integrity assessments of architectural characteristics. ODRs operate at an analogous level for the organizational layer: they make the criteria against which *organizational behavior* is measured explicit and traceable — not code quality, but organizational identity.

### GOV.UK ADR Framework
The UK Government Digital Service recommends ADR adoption at multiple levels — team, programme, department, cross-departmental. This multi-level recommendation implicitly acknowledges a hierarchy of decision-making authority consistent with the Gov → Org → Arch model.

---

**Note on scope:** The three-level model is a pragmatic simplification. Real enterprise governance (especially TOGAF-compliant architectures) operates with more layers and finer distinctions. For a project at OIA's current scale, three levels provide the right balance between rigor and maintainability.
