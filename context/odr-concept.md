# ODR — Organizational Decision Record

**Version:** 1.0 · 2026-03-14
**Status:** Active
**Related:** [ADR-0012](../decisions/0012-introduce-odr-governance-layer.md) · [ODR Template](../decisions/org/odr-template.md)

---

## What is an ODR?

An **Organizational Decision Record** documents a decision made at the organizational governance layer — a choice about *how an organization operates*, governs itself, and structures its processes.

ODRs make organizational intelligence explicit. They answer the question:

> *"Why does this organization behave the way it does?"*

The defining property of an ODR is its **binding scope**: every ODR explicitly states which participants are bound by it — Users, Agents, Contributors, or all three. An AI agent that acts within an organization must respect its organizational decisions just as much as a human employee does. This is not a design detail; it is the core constraint that distinguishes ODRs from all existing decision documentation formats.

---

## Why ODRs — the gap no existing format fills

**ADRs** (Architecture Decision Records) document technical and structural choices:
> "We chose technology X over Y for architectural reason Z."

The keyword is *architectural*. ADRs are explicitly bound to systems and their structure — not to the organization as an acting subject. They are primarily binding for technical contributors: code reviewers, architects, developers.

**ODRs** document organizational choices:
> "We chose operating model X over Y because it minimizes risk Z at cost C."

The critical distinction: an ODR binds **all system participants** — Users, Contributors, and Agents alike. An AI agent that acts within an organization must respect its organizational decisions just as much as a human employee does. This is not an afterthought — it is the central design constraint that makes ODRs necessary.

ADRs answer *how we build*. ODRs answer *how we operate*.

### Why existing formats don't fill this gap

Several adjacent formats exist. None of them cover the Org layer completely:

| Format | Layer | Binding | Why-documentation | Versionable | Agent-aware |
|---|---|---|---|---|---|
| ADR | Arch | Technical contributors | ✅ | ✅ | ❌ |
| GDR (Governance Decision Record) | Arch/Data | Data teams + platform | ✅ | ✅ | ❌ |
| Decision Log | All | No specific scope | ⚠️ often absent | ❌ | ❌ |
| Policy Document | Org | Humans | ❌ rarely | ❌ | ❌ |
| **ODR** | **Org** | **All participants incl. Agents** | **✅** | **✅** | **✅** |

**GDR (Agile Lab):** A versioned, computationally executable governance policy format for data platforms — Policy-as-Code. Domain-specific to data governance; requires platform infrastructure. Not a general-purpose format for organizational decisions.

**Decision Log:** A reactive protocol — it records what was decided, not why in a structured way. No binding concept, no defined scope (who is bound?), no governance layer in a hierarchy.

**Policy Document:** The classic form of organizational decisions (HR handbooks, codes of conduct). Problems: no standardized structure analogous to ADRs, no documentation of the decision rationale (context, rejected alternatives, trade-offs), not version-controlled in a software workflow sense, no binding scope definition.

The "it's just a Policy Document with ADR format" objection is predictable — and wrong. Policy Documents do not document the decision rationale, are not part of a versionable knowledge base, and do not define the binding scope. An ODR does all three. The binding-scope field (Users / Agents / Contributors / All) is not cosmetic — it makes the decision machine-readable in the sense that an AI agent can determine whether a given ODR applies to its actions.

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

An ADR may reference an ODR as its higher-level authority:
> *"Per ODR-0001, this project operates under a community-driven model; this ADR implements that choice at the technical layer."*

---

## ODRs and OIA

The ODR concept aligns directly with the *Organizational Intelligence Architecture* thesis:

> Organizational intelligence is not just about data pipelines and AI models — it requires making the cognitive architecture of the organization itself explicit and traceable.

Decisions about *how the organization operates* are part of that cognitive architecture. Left implicit, they become invisible constraints that block contributors (human and AI) from acting coherently. Made explicit as ODRs, they become navigable, auditable, and improvable.

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

### GOV.UK ADR Framework
The UK Government Digital Service recommends ADR adoption at multiple levels — team, programme, department, cross-departmental. This multi-level recommendation implicitly acknowledges a hierarchy of decision-making authority consistent with the Gov → Org → Arch model.

---

**Note on scope:** The three-level model is a pragmatic simplification. Real enterprise governance (especially TOGAF-compliant architectures) operates with more layers and finer distinctions. For a project at OIA's current scale, three levels provide the right balance between rigor and maintainability.
