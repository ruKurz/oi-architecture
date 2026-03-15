# ODR — Organizational Decision Record

**Status:** Active
**Related:** [ADR-0012](../decisions/adr/0012-introduce-odr-governance-layer.md) · [ODR Template](../decisions/odr/odr-template.md)

---

## What is an ODR?

An **Organizational Decision Record** documents a decision made at the organizational governance layer — a choice about *how an organization operates*, governs itself, and structures its processes.

ODRs make organizational intelligence explicit. They answer the question:

> *"Why does this organization behave the way it does?"*

The defining property of an ODR is its **binding scope**: every ODR explicitly states which participants are bound by it — Users, Agents, Contributors, or all three. An AI agent that acts within an organization must respect its organizational decisions just as much as a human employee does. This is not a design detail; it is the core constraint that distinguishes ODRs from all existing decision documentation formats.

A useful mental model:

> *ODRs are the `.env` file of the organization — not for secrets, but for values, methods, and decisions from which both human and agent behavior can be derived.*

Just as a `.env` file configures runtime behavior without embedding logic in code, an ODR stack configures organizational behavior without embedding it in informal culture or undocumented convention.

### Binding parties

Every ODR explicitly states who it binds:

| Party | Meaning |
|---|---|
| **Users** | Humans interacting with the system (employees, contributors, readers) |
| **Agents** | AI systems, automated workflows, bots acting within the organization |
| **Contributors** | People contributing to the project (code, content, governance) |
| **All** | Users + Agents + Contributors |

This explicit binding is what distinguishes ODRs from informal process notes. An ODR is not a suggestion — it is a traceable organizational commitment. For how binding is enforced in practice, see [ODR lifecycle and maintenance → Enforcement](#odr-lifecycle-and-maintenance).

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

**Runbook / Playbook:** Describes *how* something is done — step-by-step operational procedures. ODRs describe *why* — the reasoning behind organizational choices. The difference is between an operating manual and a constitution. A constitution does not tell you how to file a form; it tells you why the process exists at all. Unlike a constitution, an ODR is backed by a concrete enforcement mechanism — see the Enforcement section in [ODR lifecycle and maintenance](#odr-lifecycle-and-maintenance).

**AI Governance Frameworks (Microsoft Cloud Adoption Framework, NIST AI RMF, EU AI Act):** These define *what* must be documented (risk controls, compliance evidence, role assignments) and *who* is responsible. They do not provide a format in which individual organizational decisions are captured as structured, versionable, derivable units. Microsoft's AI Readiness approach defines institutional roles (Platform Team, AI CoE) and processes — but does not codify *why* an organization operates the way it does, nor how that derives to technical tool choices. The result: compliance is demonstrated as static documentation, not as an active, machine-readable knowledge base.

### Anti-pattern: AI Theater

Organizations responding to AI readiness requirements typically create new roles and governance layers: Chief AI Officer, AI Ethics Committee, AI Center of Excellence, AI Governance Committee. These structures are designed to *talk about* AI — to discuss policies, review risks, and produce reports. They rarely produce machine-readable artifacts that describe how the organization actually operates.

The result: AI agents deployed in these organizations have no structured source of truth for organizational context. They receive a system prompt written by a developer, or they receive none at all. The governance layer is a committee; the agent's operational context is guesswork.

This is AI Theater — governance-as-committee rather than governance-as-structured-knowledge. You cannot configure an agent's behavior from an org chart. A Chief AI Officer title does not tell an agent whether this organization operates agilely, what its risk tolerance is, or whether a given decision requires human sign-off. An ODR stack does.

ODRs replace advisory bodies as the *medium* for organizational self-description. The committee may still exist — but its decisions, once made, are encoded in ODRs, not in meeting minutes. AI maturity is not achieved by creating roles to discuss AI; it is achieved by building the organizational knowledge infrastructure that agents can actually read.

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

### Example ODR

```markdown
# ODR-0002: Adopt Agile Software Development Principles

**Decision:** OIA development follows the principles of the Agile Manifesto (2001)
as its operating model — accepting process overhead as the cost of a deliberate
risk-minimization strategy, with adaptations for the single-maintainer context.
**Status:** Proposed
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All
**Derives from:** ODR-0001 (community-driven model requires adaptive delivery)
**Implements:** ADR-0003 (GitHub Issues as sprint task tracker),
               ADR-0005 (Conventional Commits as delivery discipline)
*(Note: `governed-by` is an ADR field, not an ODR field. ODRs carry `implements` pointing down to ADRs; ADRs carry `governed-by` pointing up to the ODR that mandated them. The chain is bidirectional — the directionality is asymmetric by design.)*

## Context

Software projects make an organizational choice about how they manage uncertainty,
change, and delivery risk — even when that choice is never stated. In a project
like OIA — where the model is being discovered, not specified up front — rigid
planning would lock in premature decisions. Agile principles are a structural fit:
the architecture evolves as understanding deepens.

Risk-minimization framing: agile's short feedback loops reduce the risk of building
the wrong thing for a long time. This risk reduction has a cost: process overhead
(planning, retros, issue hygiene). That tradeoff is consciously accepted.

## Consequences

**For Users:** Development is iterative and visible. The OIA model will change as
understanding improves. Stability of core concepts is protected by ADRs, not by a
rigid specification.

**For Agents:** AI tooling acting within this project must respect agile operating
constraints: sprint scope is bounded, unconfirmed scope changes require explicit
human sign-off (Checkpoint protocol), and process documents are binding artifacts.

**Easier:** Change is expected and accommodated without justification overhead.
**Harder:** Process discipline is required even with a single maintainer.
**Required adjustments:** Sprint-based workflow via sprint-retro.md; GitHub Issues
as authoritative tracker (ADR-0003); Conventional Commits (ADR-0005).

## Alternatives

| Option | Reason rejected |
|---|---|
| Waterfall / plan-driven | Incompatible with a model being discovered, not pre-specified |
| No explicit process | No traceability; contradicts OIA's thesis of explicit structure |
| Full Scrum | Assumes team roles that don't map to a single-maintainer context |
| Kanban-only | Lacks sprint boundary needed for deliberate reflection and scope control |
```

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

## Naming and numbering

- ODRs are numbered independently of ADRs: `ODR-0001`, `ODR-0002`, …
- Files are stored in `decisions/odr/` (separate from ADRs in `decisions/`)
- File naming: `decisions/odr/NNNN-slug.md`
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
| Location | `decisions/` | `decisions/odr/` |
| Template | `decisions/README.md` → Template section | `decisions/odr/odr-template.md` |
| Numbered | ADR-XXXX | ODR-XXXX |
| Derivation links | — | `derives-from` / `implements` |
| Upward link | `governed-by: ODR-XXXX` | — |

> **Bidirectional traversability:** ODRs carry `implements` links pointing down to ADRs. ADRs carry a `governed-by` field pointing up to the ODR that mandated them. This makes the chain traversable in both directions: from an organizational principle to its technical implementation, and from a technical convention back to the organizational decision that justified it. Without the `governed-by` field on ADRs, the chain is navigable top-down only — an agent reading an ADR in isolation cannot determine which organizational decision it serves.

---

## ODR lifecycle and maintenance

### Proposing an ODR

Any participant — human contributor or AI-assisted tooling — may propose an ODR by creating a file in `decisions/odr/` with status `Proposed`. Proposals must follow the canonical template (`decisions/odr/odr-template.md`) and include all required fields, including `derives-from` and `implements`.

A new ODR should be accompanied by a GitHub Issue (per ADR-0003) and a commit referencing that issue.

### Accepting an ODR

**Only a human maintainer may set an ODR's status to `Accepted`.** This is a deliberate governance constraint: organizational decisions that bind all participants — including AI agents — require explicit human sign-off. AI-assisted tooling must use `Proposed` when creating new ODRs, regardless of confidence.

### Superseding an ODR

When an ODR is replaced by a newer decision:

1. The new ODR is created with `derives-from` referencing the superseded ODR where applicable.
2. The superseded ODR's status is updated to `Superseded by ODR-XXXX` — it is **not deleted**.
3. The derivation chain remains fully traversable: any observer can follow the history from the current ODR back through all previous decisions.

### Impact on implementing ADRs

When an ODR is superseded, all ADRs that reference it in their `implements` field require an explicit review:

- If the implementing ADR remains valid under the new ODR: add a note confirming continued validity.
- If the implementing ADR is no longer consistent with the new ODR: it must be updated or superseded itself.

This review is not optional — it is part of the acceptance criteria for any ODR supersession.

### Enforcement

An ODR's binding claim is not rhetorical — it is a property of the toolchain. Concrete enforcement mechanisms:

| Mechanism | What it enforces |
|---|---|
| **CI/CD check** | Agent-generated artifacts reference the correct ODR in their `governed-by` field |
| **PR review gate** | Any commit touching the organizational layer must cite an ODR or open one |
| **Automated linting** | Flags ADRs missing a `governed-by` field; flags ODRs missing `implements` targets |
| **Agent instruction check** | System prompts / CLAUDE.md reference the active ODR stack at session start |

Enforcement does not require all mechanisms from day one. The minimum viable enforcement for this project is the PR review gate: any decision that affects how the project operates requires either an existing ODR citation or a new ODR proposal before merge.

### Review cadence

ODRs should be reviewed at major project milestones (e.g., major version releases) and whenever a significant governance change occurs. The review need not result in a change — a documented confirmation of continued validity is a valid outcome. Stale ODRs that are no longer reflected in actual practice should be updated to `Deprecated` rather than left as silent debt.

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

**Note on bidirectional traversability:** The `governed-by: ODR-XXXX` field on ADRs closes the loop. TOGAF's governance hierarchy is described top-down: Corporate → IT → Architecture. COBIT defines accountability chains but does not specify how individual artifacts reference their governing policy. Neither framework provides a mechanism for navigating from a low-level technical decision *back* to the organizational principle that motivated it. The `governed-by` field does: it makes the ADR ↔ ODR relationship explicit and machine-readable in both directions, a property that none of the established frameworks operationalize at the artifact level.

**Note on scope:** The three-level model is a pragmatic simplification. Real enterprise governance (especially TOGAF-compliant architectures) operates with more layers and finer distinctions. For a project at OIA's current scale, three levels provide the right balance between rigor and maintainability.
