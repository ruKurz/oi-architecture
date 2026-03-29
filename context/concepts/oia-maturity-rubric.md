# OIA Maturity Rubric v1 — All Zones

**Status:** Active — v1
**Implements:** Issue #247 (Zone 1), Issue #248 (Zone 2+3)
**Depends on:** [oia-maturity-model.md](oia-maturity-model.md) (#239), [oia-layer-definitions.md](oia-layer-definitions.md) (#240)

---

## How to Read This Rubric

Each layer has:
1. **5-level description** — what each star level looks, feels, and acts like in practice
2. **Transition blocks** — for each step up (1→2, 2→3, 3→4, 4→5): what you currently experience, what you gain, what to do, how to measure it
3. **Priority** is always derived from the Stop-Gate position — Zone 1 layers gate all other zones

**MoSCoW notation in action items:**
- **M** — Must: required to reach the next level; blocking if missing
- **S** — Should: significantly accelerates progress; do unless genuinely constrained
- **C** — Could: adds value but not blocking
- **W** — Won't (now): explicitly deferred; not wrong, just not yet

---

## Zone 1 — Foundation

**Stop-Gate rule:** Both L1 and L2 must reach ★★★ (Defined) before Zone 2 work is sustainable.

> Zone 1 < ★★★: No viable foundation. Every AI initiative built on top is structurally fragile — impressive in demos, unreliable in production.

Zone 1 does not produce direct business value. It enables everything else to produce value reliably.

---

## L2 — Data Sources

> **Reality note:** Most organizations do not have a complete, current inventory of their data sources. This is not failure — it is the norm. The rubric acknowledges this: ★★ (Implicit) is where most organizations honestly start, and reaching ★★★ (Defined) is a genuine achievement that unlocks real progress.

---

### Level Descriptions

**★☆☆☆☆ Absent**
No structured access to organizational data exists for AI/intelligence purposes. Data sits in systems that are not connected, not inventoried, and not accessible in any programmatic way. Any data that does flow into AI systems does so accidentally — copy-paste, manual export, or one-off scripts. Nothing is repeatable.

Symptoms: AI prototypes use synthetic or demo data. "We'd need to ask IT" is the answer to any data question. No one owns data access for AI use.

---

**★★☆☆☆ Implicit**
Data sources exist and are used, but access is undocumented, person-dependent, and fragile. Individual engineers or data analysts know which systems hold what — but that knowledge is in their heads, not written down. Some data flows into AI systems, but the pipeline is informal and breaks when the person who built it leaves or is unavailable.

Symptoms: "Talk to Marcus — he knows how to get the HR data." Pipeline breaks after a team change. No data catalog. Onboarding a new engineer to "the data situation" takes weeks of oral knowledge transfer.

---

**★★★☆☆ Defined**
Key data sources are inventoried. Each source has a documented owner, known format, known access path, and known refresh cadence. At least the sources relevant to the current initiative are formally described. A new engineer can understand what data exists and how to access it without tribal knowledge.

Symptoms: A data source register exists (even if incomplete). Access to the most critical sources is scripted and repeatable. Data ownership is assigned. Incidents don't require "finding the right person" to resolve.

---

**★★★★☆ Connected**
Data sources are integrated into a functioning pipeline that feeds downstream layers (C2 → L3). Input and output contracts are explicit: each source has a defined schema, SLA for freshness, and a documented place in the processing chain. Quality problems in a source are detected automatically, not discovered accidentally downstream.

Symptoms: C2 pipeline runs without manual intervention. New data sources can be onboarded with a documented process. Downstream teams know what to expect from each source and when. Data quality issues generate alerts, not surprises.

---

**★★★★★ Optimized**
The data source landscape improves without external trigger. Coverage gaps are identified automatically. Data quality trends are monitored continuously and fed back to source system owners. New organizational data sources are assessed against the architecture before they are introduced. The organization treats data source quality as a managed asset, not a background condition.

Symptoms: Data source coverage reports are generated automatically. Quality degradation triggers improvement workflows. New system onboarding includes a "data source integration checklist." The organization can answer "what data do we have and how reliable is it?" in real time.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
No data flows reliably into any AI system. Every prototype requires manual data preparation. Stakeholders cannot get answers to "what data do we have?" The initiative is blocked at the data layer before it starts.

**What you gain at ★★:**
The initiative can actually start. At least the data that matters for the current use case is accessible — even informally. Prototypes become possible. The team learns what data exists and what it does not.

> Business benefit: First working prototype possible. Team no longer blocked on data access for initial exploration.

**What needs to be done:**

- **M** Identify the 2–3 data sources most critical for the current use case
- **M** Find and document who currently controls access to each
- **M** Get at least one working data extract into the initiative's environment
- **S** Document the access method (even informally — a README is enough)
- **C** Check whether similar undocumented access patterns exist elsewhere in the org

**How to measure progress:**

- Leading KPI: Number of data sources with a documented access path (target: ≥ 1 within 2 weeks)
- Lagging KPI: Time from "we need this data" to "we have this data in our environment" (target: days, not weeks)

**Priority: High — this is the absolute starting point.**
Without any data access, nothing else in the initiative is possible. No other priority applies until this gate is open.

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Data flows, but the knowledge lives in people's heads. The pipeline is a collection of undocumented scripts and personal access credentials. When a key person is absent, the initiative stalls. No one knows the full list of data sources in use. Onboarding a new team member to "the data situation" takes weeks.

**What you gain at ★★★:**
The initiative becomes resilient to team changes. Any engineer can understand the data landscape and reproduce the pipeline. Incidents become solvable without tribal knowledge. The Zone 1 gate begins to open.

> Business benefit: Initiative no longer depends on specific individuals. Onboarding time for new engineers drops from weeks to days. Data incidents can be resolved by any team member.

**What needs to be done:**

- **M** Create a data source register — even a simple spreadsheet: source name, owner, format, access path, refresh cadence
- **M** Script all data access paths (no manual exports or copy-paste)
- **M** Assign formal ownership for each source (a named person or team, not "IT")
- **S** Document known data quality issues and their workarounds
- **S** Define the minimum acceptable data freshness for each source
- **C** Align the data source register with any existing IT asset management tools
- **W** Build a full enterprise data catalog (too large in scope for this transition)

**How to measure progress:**

- Leading KPI: % of data sources in use that have an entry in the register (target: 100% of sources used by current initiative)
- Lagging KPI: Time for a new engineer to independently reproduce the full data pipeline (target: ≤ 1 day)

**Priority: High — Zone 1 gate.**
★★★ on both L1 and L2 is required before Zone 2 investment is sustainable. This transition is on the critical path.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
The data sources are documented, but the pipeline connecting them to downstream layers (C2 → L3) still requires human intervention, breaks quietly, and has no quality monitoring. Downstream teams don't know when data is stale or degraded until a problem surfaces in a user-visible way.

**What you gain at ★★★★:**
The data layer becomes a reliable, observable infrastructure component. Downstream teams can depend on it. Data quality issues are caught before they reach users. New sources can be onboarded with a repeatable process.

> Business benefit: Production incidents caused by silent data pipeline failures drop significantly. Downstream teams (L3, L4, L5) can build with confidence on the data layer. Time spent on data debugging drops by estimated 60–80%.

**What needs to be done:**

- **M** Automate all pipeline runs (no manual triggers for recurring data flows)
- **M** Implement monitoring and alerting for pipeline failures and data quality degradation
- **M** Define and enforce input/output schemas for each source in the C2 pipeline
- **M** Define SLAs for data freshness and make them visible to downstream consumers
- **S** Build a process for onboarding new data sources (checklist, ownership, schema documentation)
- **S** Implement data lineage tracking — know where each piece of data came from
- **C** Add automated data quality scoring per source
- **W** Full data mesh or federated ownership model (premature at this stage)

**How to measure progress:**

- Leading KPI: % of pipeline runs that complete without manual intervention (target: ≥ 95%)
- Lagging KPI: Mean time to detect a data quality issue (target: automated detection within 1 pipeline cycle)

**Priority: High once Zone 1 gate is open.**
This transition makes the data layer production-ready. Until it is complete, L3 and everything above it remains fragile.

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
The pipeline runs reliably, but coverage and quality improvement still require someone to notice a problem and escalate it. New data sources are onboarded reactively. The organization knows what it has — but doesn't systematically discover what it's missing.

**What you gain at ★★★★★:**
The data layer becomes self-improving. Coverage gaps are detected automatically. Quality trends are monitored and surfaced to source owners before problems reach downstream systems. The organization has a living, accurate picture of its data landscape at all times.

> Business benefit: Reduction in data-related production incidents approaches zero. New AI use cases can be assessed against the existing data landscape without a discovery project. Data quality becomes a measurable organizational KPI, not a background assumption.

**What needs to be done:**

- **M** Implement automated coverage gap detection (flag missing or underrepresented domains)
- **M** Establish feedback loops from data quality monitoring to source system owners
- **S** Create a data source assessment process for new systems before they are introduced
- **S** Publish data quality metrics as an operational dashboard visible to all stakeholders
- **C** Introduce data quality SLAs at the organizational level, not just the initiative level
- **W** Full autonomous data remediation without human oversight (not yet appropriate)

**How to measure progress:**

- Leading KPI: Number of coverage gaps detected and addressed per quarter (target: process exists and runs)
- Lagging KPI: % of data quality issues detected automatically vs. reported manually (target: ≥ 80% automated detection)

**Priority: Medium — pursue after Zone 2 baseline is established.**
★★★★★ on L2 is exceptional. Reaching ★★★★ and maintaining it reliably is the practical target for most initiatives. ★★★★★ becomes relevant when the initiative operates at scale and data quality directly drives business outcome variability.

---

## L1 — AI & Cognitive Infrastructure

---

### Level Descriptions

**★☆☆☆☆ Absent**
No AI or cognitive infrastructure exists in connection with the initiative. All processing is rule-based, manual, or handled by third-party SaaS products where the infrastructure is entirely opaque. No models, no APIs, no vector infrastructure — nothing that could be assessed, improved, or built upon.

Symptoms: "We use ChatGPT via the browser." No internal AI API or model deployment. No vector index, no ML pipeline, no inference endpoint the initiative controls.

---

**★★☆☆☆ Implicit**
AI infrastructure exists and is used, but it is undocumented, unmanaged, and fragile. Models are accessed via personal API keys. Infrastructure decisions were made opportunistically. No one formally owns the infrastructure. It works for the current prototype but would not survive a team change or a production load increase.

Symptoms: Single person manages all API keys and model configurations. No formal model registry. Infrastructure costs are unknown or untracked. "It works on my machine / in my environment."

---

**★★★☆☆ Defined**
The infrastructure components in use are documented, owned, and reproducible. The models, vector infrastructure, and APIs in use are registered. Access is managed through shared credentials or service accounts. A new engineer can understand and reproduce the infrastructure setup from documentation. Cost is tracked.

Symptoms: Infrastructure-as-code or equivalent deployment documentation exists. Model versions are pinned and documented. There is a named owner for each infrastructure component. Someone can answer "what models and infrastructure do we use, and how?" without escalating.

---

**★★★★☆ Connected**
Infrastructure is integrated into the initiative's pipeline with explicit contracts. Model selection, versioning, and update procedures are defined. The infrastructure is production-grade: observable, scalable within known parameters, and resilient to single-component failures. Downstream consumers (L4 Features) know what to expect from the infrastructure layer.

Symptoms: Infrastructure is deployed via CI/CD. Model updates follow a documented versioning and rollback procedure. Observability stack covers inference latency, error rates, and costs. SLAs for infrastructure availability are defined and monitored.

---

**★★★★★ Optimized**
Infrastructure improves without external trigger. Model performance is monitored continuously and compared against alternatives. Capacity adjustments happen automatically or through well-defined playbooks. Infrastructure decisions are made based on measured performance data, not intuition. The organization treats AI infrastructure as a managed, evolving capability.

Symptoms: Automated model evaluation pipelines compare current models against alternatives periodically. Cost optimization runs automatically. Infrastructure incidents trigger automated remediation for known failure modes. The team spends time on capability improvement, not infrastructure firefighting.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
No controlled AI infrastructure exists. Engineers use personal accounts, browser-based tools, or no AI tooling at all. Any AI capability in the initiative is ad-hoc and non-reproducible.

**What you gain at ★★:**
The team can work with AI tooling in a shared, consistent way. At minimum, a shared model access point exists that the initiative controls and can build on.

> Business benefit: The initiative can begin building AI-powered features. Prototyping velocity increases. The team is no longer blocked by "how do we access a model."

**What needs to be done:**

- **M** Provision a shared model access point (API key under a service account, not personal accounts)
- **M** Select an initial model and document the choice (which model, which version, why)
- **S** Document the access method and share it with the full initiative team
- **C** Track infrastructure costs from day one — even informally
- **W** Full infrastructure-as-code (premature at this stage)

**How to measure progress:**

- Leading KPI: All team members can access the same model endpoint from the same configuration (binary: yes/no)
- Lagging KPI: Time to onboard a new engineer to the AI infrastructure (target: hours, not days)

**Priority: High — parallel to L2 ★1→2.**
Infrastructure and data access are co-blocking. Neither produces value without the other.

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
AI infrastructure works, but it is understood only by the person who set it up. Model versions are untracked. API keys are personal or shared informally. Costs are unknown. If the infrastructure breaks or the key person leaves, recovery requires investigation rather than following a playbook.

**What you gain at ★★★:**
Infrastructure becomes a team asset, not an individual's knowledge. The Zone 1 gate begins to open. Any team member can maintain, reproduce, or hand over the infrastructure.

> Business benefit: Initiative no longer has a single point of failure at the infrastructure layer. Compliance and security reviews become possible (prerequisite for production deployment in most organizations). Infrastructure costs become visible and manageable.

**What needs to be done:**

- **M** Document all infrastructure components: models used, versions pinned, access method, owner
- **M** Move all API keys and credentials to a shared secrets manager (not personal accounts)
- **M** Tag and track infrastructure costs by initiative
- **S** Pin model versions — define a process for evaluating and adopting updates
- **S** Write a "infrastructure runbook" — how to restart, recover, or reproduce the setup
- **C** Register models in a model registry if one exists in the organization
- **W** Full MLOps pipeline (significant investment, not required at this stage)

**How to measure progress:**

- Leading KPI: Number of infrastructure components with documented owner, version, and access path (target: 100% of components in use)
- Lagging KPI: Time to recover from an infrastructure incident without the original setup person (target: ≤ 4 hours using documentation)

**Priority: High — Zone 1 gate.**
Co-critical with L2 ★★★. Both must reach Defined before Zone 2 investment yields sustainable returns.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Infrastructure is documented and owned, but deployment is still manual, observability is limited, and the connection to downstream feature and capability layers is informal. Infrastructure updates are disruptive. There is no systematic way to evaluate whether the current model choices are still appropriate.

**What you gain at ★★★★:**
Infrastructure becomes production-grade. Features and capabilities built on it can be delivered reliably. The team has confidence that infrastructure changes will not cause silent regressions downstream.

> Business benefit: Production-grade AI features become possible. Infrastructure-related downtime drops to near zero. Compliance and security requirements for production deployment can be met. Downstream teams (L4, L5) can build with confidence.

**What needs to be done:**

- **M** Deploy infrastructure via automated pipeline (CI/CD or equivalent) — no manual deployments to production
- **M** Implement observability: inference latency, error rates, costs, model version in use — all monitored
- **M** Define and document SLAs for infrastructure availability and response time
- **M** Establish a model update procedure: evaluation criteria, rollback plan, communication to downstream consumers
- **S** Implement load testing and define scaling limits
- **S** Document failure modes and recovery playbooks for each infrastructure component
- **C** Evaluate model alternatives on a defined schedule
- **W** Autonomous self-healing infrastructure (not yet warranted at this scale)

**How to measure progress:**

- Leading KPI: % of infrastructure deployments via automated pipeline (target: 100%)
- Lagging KPI: Infrastructure-related production incidents per month (target: ≤ 1 per quarter after reaching this level)

**Priority: High once Zone 1 gate is open.**
Required for any AI capability to be production-reliable. This transition is on the critical path to Zone 2.

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Infrastructure runs reliably, but improvement is reactive. Model choices are revisited only when a problem surfaces or a major new release forces a re-evaluation. Cost optimization and performance tuning happen in project bursts, not continuously.

**What you gain at ★★★★★:**
Infrastructure improves as a background process. The organization accumulates infrastructure intelligence over time. Model selection becomes evidence-based and continuous, not event-driven.

> Business benefit: Infrastructure costs are systematically minimized without sacrificing performance. The organization is always using near-optimal models for its use cases. Infrastructure no longer requires burst investment — it is maintained through lightweight continuous processes.

**What needs to be done:**

- **M** Implement automated model evaluation: periodic benchmarking of current model vs. alternatives on real use cases
- **M** Establish feedback loops from production performance data to infrastructure decisions
- **S** Automate cost optimization (e.g., autoscaling, model tier selection based on request complexity)
- **S** Create an infrastructure improvement backlog driven by performance and cost data
- **C** Implement automated capacity forecasting
- **W** Fully autonomous infrastructure management without human oversight thresholds

**How to measure progress:**

- Leading KPI: Frequency of evidence-based model evaluations (target: at least quarterly, results documented)
- Lagging KPI: Infrastructure cost per unit of capability delivered — trend direction (target: declining or stable over 6 months)

**Priority: Medium — pursue after Zone 2 baseline is established.**
As with L2 ★★★★★, this level is exceptional. ★★★★ maintained reliably is the practical target for most initiatives. ★★★★★ becomes relevant at scale, when infrastructure optimization has measurable business impact.

---

## Zone 1 — Stop-Gate Summary

### Gate Criteria

| Layer | Required level | What "open" means |
|---|---|---|
| L2 Data Sources | ≥ ★★★ Defined | Key sources inventoried, access scripted, ownership assigned |
| L1 AI Infrastructure | ≥ ★★★ Defined | Components documented, credentials managed, costs tracked |

**Both must be ≥ ★★★ for the Zone 1 gate to be open.**

A single ★★ on either layer keeps the gate closed, regardless of the other layer's score.

### Organizational Reading — Zone 1

| Combined score | What it says about the organization |
|---|---|
| Both < ★★★ | No viable foundation for AI. Current AI activity is experimental at best, structurally unsound at worst. Investment in Zone 2 is premature. |
| L2 ≥ ★★★, L1 < ★★★ | Data is accessible, but cannot be processed reliably. Pipeline work is blocked by infrastructure fragility. |
| L1 ≥ ★★★, L2 < ★★★ | Infrastructure capacity exists, but has nothing reliable to process. Capability without content. |
| Both ≥ ★★★ | Zone 1 gate open. Foundation is in place. Zone 2 investment (L3 Knowledge Core, L4 Features, L5 Capabilities) can begin with confidence. |
| Both ≥ ★★★★ | Foundation is production-grade. Zone 2 can scale without foundation risk. |
| Both ★★★★★ | Foundation is self-improving. Exceptional. Rare. Pursue Zone 3 impact with infrastructure confidence. |

### Recommended Sequencing Within Zone 1

Work L1 and L2 in parallel — they are co-blocking and often unblock each other:

1. L2 ★1→2 + L1 ★1→2 simultaneously (data access + model access — both needed for first prototype)
2. L2 ★2→3 + L1 ★2→3 simultaneously (documentation + ownership — both needed for zone gate)
3. L2 ★3→4 + L1 ★3→4 in sequence (pipeline automation first, then infrastructure production-readiness)
4. L2 ★4→5 + L1 ★4→5 deferred until Zone 2 baseline is stable

---

## Rubric Format Template

This rubric establishes the format for Zone 2 and Zone 3 layers. Each subsequent layer follows the same structure:

```
### Level Descriptions
★☆☆☆☆ [Name]: [what it looks like in practice]
★★☆☆☆ [Name]: ...
★★★☆☆ [Name]: ...
★★★★☆ [Name]: ...
★★★★★ [Name]: ...

### Transition N→N+1: [Level name] → [Level name]
Current state — what this looks like: [concrete symptoms]
What you gain at ★★★: [business benefit, measurably formulated]
What needs to be done: [MoSCoW-labeled action list]
How to measure progress: [Leading KPI + Lagging KPI]
Priority: [derived from Stop-Gate position + reasoning]
```

---

# OIA Maturity Rubric v1 — Zone 2: Capabilities

**Implements:** Issue #248
**Depends on:** Zone 1 rubric (#247)

---

## Zone 2 — Capabilities

**Stop-Gate rule:** L3, L4, L5, and L8 must all reach ★★★ (Defined) before Zone 3 work is sustainable.

> Zone 2 < ★★★: Capabilities exist only as code or informal knowledge. The organization cannot describe what the system can do in business terms, and the system cannot adapt to who is asking or why. Applications built on top of this produce inconsistent results.

Zone 2 is where data and infrastructure (Zone 1) are transformed into describable, testable, and combinable organizational abilities.

---

## L3 — Knowledge Core

> **Reality note:** Most AI initiatives reach Zone 1 with a functional data pipeline but no semantic knowledge model. L3 ★★ is common — data flows but doesn't accumulate meaning. The transition from ★★ to ★★★ is often the most intellectually demanding step in the architecture: it requires deciding what the organization actually knows, not just what it stores.

> **Structural vs. functional assessment:** L3 star ratings assess *structural presence* — whether entity types are defined, documented, and owned. They do not assess *functional quality* — whether retrieval is actually returning relevant results. A system can reach L3 ★★★ structurally while returning poor results in practice (e.g. 0/5 relevant hits for a real query). Functional quality requires runtime measurement: run representative queries from L7 use cases and evaluate top-k precision. If structural and functional scores diverge, report both — structural score for the rubric, functional score as a separate quality note.

---

### Level Descriptions

**★☆☆☆☆ Absent**
No structured knowledge model exists. All information lives only in source systems (L2) in system-specific formats. There is no cross-system consolidation, no entity model, and no semantic structure. Any knowledge retrieval requires going back to the raw source. The same "person" or "product" exists as 10 different records in 10 different systems with no connection between them.

Symptoms: "We'd need to check the CRM and then cross-reference with SAP." No single place to ask "what do we know about X?" Entity duplication is the norm. New engineers must learn system-by-system where different information lives.

---

**★★☆☆☆ Implicit**
Some consolidation exists — often in the form of a shared wiki, a team OneNote, or a personal knowledge base maintained by one person. Cross-system knowledge exists but lives in undocumented, person-dependent structures. Entities are partially described, but no formal model governs what belongs where or how things relate.

Symptoms: "Ask Maria — she has a spreadsheet with all the product mappings." Knowledge lives in the architect's head. Informal taxonomy that nobody fully understands. Wiki pages that are 70% accurate and 30% outdated, with no way to tell which is which.

---

**★★★☆☆ Defined**
Core entity types are identified, named, and documented. At least the entities relevant to the current initiative are formally modeled with defined attributes and ownership. Basic cross-system resolution is in place — the same entity from different systems can be recognized as the same thing. A controlled vocabulary exists. The Knowledge Core can answer "what entities do we model?" without tribal knowledge.

Symptoms: Entity registry exists. Attributes and relationships documented per entity type. New entities go through a definition process before being added. The core entity model is stable enough that multiple applications can reference it independently.

---

**★★★★☆ Connected**
The Knowledge Core is the authoritative semantic source for the initiative. L4 features query it through explicit contracts. Entities are versioned and auditable — changes are tracked. Relationships between entities are modeled and accessible. Downstream consumers (L4, L5, L6) know what they can depend on and what the Knowledge Core guarantees. Quality of the Knowledge Core is monitored.

Symptoms: Entity resolution handles ambiguity (the same person in 5 systems maps to one entity). Relationship queries work ("all documents referencing entity X"). Knowledge Core changes go through a versioned update procedure. L4 functions fail explicitly when Knowledge Core contracts are violated — no silent degradation.

---

**★★★★★ Optimized**
The Knowledge Core improves without external trigger. New relationships are discovered automatically from usage patterns. Knowledge quality metrics are monitored continuously and drive improvement workflows. The organization's understanding of its own knowledge landscape grows as a background process. The Knowledge Core is a living organizational asset, not a static schema.

Symptoms: Automated entity resolution catches new duplication patterns. Knowledge gap detection surfaces missing entities before downstream systems surface failures. Usage patterns generate relationship suggestions. Knowledge quality is a published, tracked organizational KPI.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
No cross-system view of organizational knowledge exists. Every question requires navigating to multiple source systems. Duplicates are everywhere. Nobody knows what the organization collectively knows — only what individual systems contain.

**What you gain at ★★:**
A first, informal consolidated view of the initiative's core domain emerges. The team has a shared mental model — even if only documented in a wiki or spreadsheet — of what entities are important and how they relate.

> Business benefit: Team alignment on domain concepts. Reduced time navigating between source systems for known questions. First prototype of knowledge retrieval becomes possible.

**What needs to be done:**

- **M** Identify the 3–5 most important entity types for the current initiative (e.g. Person, Product, Project)
- **M** Create an informal inventory: what is currently known about each entity type, where it lives
- **S** Document at least one cross-system mapping (same entity, different systems)
- **C** Survey the team: "what knowledge do you wish you could find instantly?"
- **W** Full ontology or formal knowledge graph (premature at this stage)

**How to measure progress:**

- Leading KPI: Number of core entity types with at least an informal description (target: ≥ 3 within 2 weeks)
- Lagging KPI: Time to answer "who is the contact person for initiative X?" without navigating multiple systems (target: measurably reduced)

**Priority: High — Zone 2 gate dependency.**
L3 ★★★ is required for Zone 2 gate. This transition starts the path.

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Knowledge exists in informal structures that are person-dependent and partially outdated. There is no formal entity model. New contributors must learn the knowledge landscape through oral knowledge transfer. The wiki or spreadsheet that holds the knowledge is not trusted — nobody knows which parts are current.

**What you gain at ★★★:**
The Knowledge Core becomes a reliable, reproducible artifact. New contributors can onboard to the knowledge model without asking the team. The Zone 2 gate begins to open for L3.

> Business benefit: Knowledge becomes a team asset, not an individual's memory. Onboarding time drops. New L4 features can be built on a stable semantic foundation. First entity-level queries become possible across documents.

**What needs to be done:**

- **M** Define the entity types, their attributes, and their owners formally — in a document, schema, or model file
- **M** Establish cross-system entity resolution for at least the core entity types
- **M** Assign ownership: who is responsible for keeping each entity type current?
- **S** Define and apply a controlled vocabulary: preferred terms for all entity types
- **S** Implement version tracking for the entity model (even if just a changelog)
- **C** Map entity types to L2 source systems (where does the authoritative data for each entity live?)
- **W** Full semantic graph with automated relationship extraction (pursue at ★★★★)

**How to measure progress:**

- Leading KPI: Number of entity types with formal definition, owner, and source mapping (target: 100% of core entity types)
- Lagging KPI: % of knowledge queries resolved by the Knowledge Core without fallback to source systems (target: ≥ 70% for known entity types)

**Priority: High — Zone 2 gate.**
L3 ★★★ is one of four required for Zone 2 to open. This transition is on the critical path.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
The entity model is defined and stable, but the Knowledge Core is not yet the authoritative source for downstream layers. L4 functions may bypass it. Relationships are documented but not queryable. Knowledge quality is assumed, not monitored.

**What you gain at ★★★★:**
The Knowledge Core becomes the single source of semantic truth. Downstream layers (L4, L5, L6) explicitly depend on it through contracts. Cross-document entity queries work. Knowledge changes are versioned and communicated to consumers.

> Business benefit: "All documents mentioning customer X" is a reliable query, not a search approximation. Knowledge changes no longer break downstream features silently. Entity resolution quality is measurable and improvable.

**What needs to be done:**

- **M** Make the Knowledge Core the explicit dependency for all L4 features that use entity data — no direct source system access in features
- **M** Model at least one relationship type with full CRUD support (e.g. "mentioned in", "responsible for")
- **M** Implement monitoring: entity coverage, relationship completeness, resolution conflict rate
- **M** Version the Knowledge Core schema — downstream consumers subscribe to a version, not a mutable state
- **S** Build entity resolution with conflict detection (when two source records can't be resolved, surface the conflict)
- **S** Publish the Knowledge Core access contract to all L4 and L5 consumers
- **C** Add automated quality checks: entity completeness, attribute coverage, stale record detection
- **W** Full automated knowledge graph population without human review

**How to measure progress:**

- Leading KPI: % of L4 features that use the Knowledge Core as their entity data source (target: 100%)
- Lagging KPI: Number of unique resolved entities vs. raw extraction count — entity resolution rate (target: measurable and trending upward)

**Priority: High once Zone 2 gate is open.**
Connected Knowledge Core is what enables L5 capabilities to be more than query reformulations.

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
The Knowledge Core is reliable and connected, but it only grows when someone explicitly adds to it. Quality issues surface through downstream failures. The organization doesn't systematically discover what it doesn't know.

**What you gain at ★★★★★:**
The Knowledge Core becomes self-improving. New knowledge is discovered, validated, and integrated as a background process. The organization accumulates semantic understanding over time without dedicated knowledge engineering projects.

> Business benefit: Knowledge coverage gaps are detected before they cause capability failures. New entity relationships surface automatically from usage patterns. The cost of maintaining the Knowledge Core drops while its coverage increases.

**What needs to be done:**

- **M** Implement automated relationship discovery from usage and co-occurrence patterns
- **M** Build feedback loops: when a query returns poor results, that gap is surfaced to the knowledge engineering process
- **S** Automated entity resolution for new entities without manual review (for high-confidence matches)
- **S** Knowledge quality dashboard published to stakeholders
- **C** Automated knowledge gap detection from L7 use case coverage analysis
- **W** Fully autonomous knowledge ingestion without any human review thresholds

**How to measure progress:**

- Leading KPI: % of new entity relationships added automatically vs. manually (target: ≥ 50% automated)
- Lagging KPI: Knowledge Core coverage — % of L7 use cases fully answerable from Knowledge Core without source system fallback (target: ≥ 90%)

**Priority: Medium — pursue after Zone 3 baseline is established.**
★★★★★ on L3 is exceptional and requires significant investment. ★★★★ maintained reliably is the practical target for most initiatives.

---

## L4 — Features & APIs

---

### Level Descriptions

**★☆☆☆☆ Absent**
No reusable API functions exist. All data access is ad-hoc: direct database queries, manual exports, one-off scripts. Every application or prototype must implement its own data access logic. There is no shared vocabulary of what the system can do at the function level.

Symptoms: Duplicate query logic across codebases. "Search" means something different in three different places. New features require re-implementing the same operations. No API documentation because there is no API.

---

**★★☆☆☆ Implicit**
Functions exist as internal utilities or undocumented endpoints. Engineers who wrote them know how to call them; others need to read the source code or ask. Input and output shapes are informal. Functions break without notice because no contract governs their interface.

Symptoms: "There's a function for that — ask Tim." API calls with undocumented parameters. Output format varies depending on how it's called. No versioning. Callers adapt to implementation, not to a contract.

---

**★★★☆☆ Defined**
Core functions are documented with explicit input and output contracts. Each function has a named owner. New engineers can use existing functions without reading source code. The function inventory is known — someone can answer "what functions does this system expose?" without guessing.

Symptoms: API documentation exists (auto-generated is acceptable). Function names express intent. Schemas defined for inputs and outputs. Breaking changes communicated to callers. Function ownership assigned.

---

**★★★★☆ Connected**
API layer is fully integrated into the initiative's capability stack. L5 capabilities orchestrate L4 functions through explicit dependencies. Function versioning and SLAs are in place. API consumers (L5, L6) can build against stable contracts. Performance is monitored per function.

Symptoms: API versioning scheme active. Functions expose SLAs: response time, availability, error behavior. Consumer dependencies on specific API versions are tracked. API changes go through a deprecation process. Function performance metrics are visible.

---

**★★★★★ Optimized**
The API layer evolves based on usage data. Unused functions are retired. High-traffic functions are optimized automatically. New functions are driven by measured capability gaps, not by individual requests. The API inventory is accurate, curated, and continuously improved.

Symptoms: API usage analytics drive the function roadmap. Underused endpoints trigger deprecation reviews. Performance anomalies generate optimization tasks automatically. API design decisions reference usage evidence, not assumptions.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
All functionality is implemented inline. There are no reusable operations. Every new feature rediscovers and re-implements the same logic. The system grows by accretion, not composition.

**What you gain at ★★:**
The first reusable operations exist. The team can build new features by combining existing functions rather than starting from scratch.

> Business benefit: Development velocity increases as features are built from shared operations. First prototype of multi-step capability becomes possible.

**What needs to be done:**

- **M** Extract the 2–3 most frequently needed operations into callable functions (search, extract, classify — whatever fits the use case)
- **M** Give each function a name that expresses its intent
- **S** Document the basic interface for each function (even informally — a docstring is enough)
- **C** Build a shared registry or module where functions can be discovered

**How to measure progress:**

- Leading KPI: Number of reusable functions that exist and can be called from more than one place (target: ≥ 3)
- Lagging KPI: % of new feature work that reuses existing functions vs. re-implementing (target: measurably increasing)

**Priority: High — Zone 2 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Functions exist but are tribal knowledge. New engineers can't discover them. Breaking changes go unannounced. The function inventory is in the developer's head, not in documentation.

**What you gain at ★★★:**
The API layer becomes a shareable asset. Any contributor can use existing functions. The Zone 2 gate begins to open for L4.

> Business benefit: Onboarding time for new contributors drops. Feature development becomes composable — new capabilities are built from existing functions. API surface becomes auditable.

**What needs to be done:**

- **M** Document all exposed functions: name, purpose, inputs, outputs, owner
- **M** Define and enforce input/output schemas (typed, validated)
- **M** Assign ownership for each function
- **S** Generate API documentation automatically from code (OpenAPI, docstrings, or equivalent)
- **S** Establish a breaking-change communication process
- **C** Create a function naming convention and apply it retroactively
- **W** Full API gateway with rate limiting and authentication (premature at this stage)

**How to measure progress:**

- Leading KPI: % of exposed functions with documented input/output contract (target: 100%)
- Lagging KPI: Number of integration failures caused by undocumented API changes per month (target: 0)

**Priority: High — Zone 2 gate.**
L4 ★★★ is one of four required for Zone 2 to open.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Functions are documented but not governed. Consumers depend on specific implementations rather than contracts. No SLAs. Performance not monitored. Version changes break callers without warning.

**What you gain at ★★★★:**
The API layer becomes a stable platform for L5 and L6. Consumers can build with confidence. API changes are managed, not discovered.

> Business benefit: Production reliability of capabilities built on L4 increases significantly. API-related incidents drop. New capabilities can be delivered faster because the API layer is dependable.

**What needs to be done:**

- **M** Introduce API versioning — consumers target a version, not the latest implementation
- **M** Define SLAs per function: response time, availability, error behavior
- **M** Monitor performance per function: latency, error rate, usage volume
- **S** Implement a deprecation process: old versions supported for a defined period before removal
- **S** Track consumer dependencies on API versions — know who will be affected by a change
- **C** Add automated API contract testing in CI/CD
- **W** Full API marketplace or developer portal (not warranted at this scale)

**How to measure progress:**

- Leading KPI: % of functions with defined and monitored SLAs (target: 100% of functions used by L5/L6)
- Lagging KPI: Mean time to detect an API performance degradation (target: automated detection within one monitoring cycle)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
APIs are stable and monitored, but evolution is reactive. New functions are added when someone asks. Unused functions accumulate. Performance optimization happens in project bursts.

**What you gain at ★★★★★:**
The API layer evolves continuously as a background process. Coverage gaps are detected before they block capability development. The API inventory stays accurate and curated.

> Business benefit: API technical debt is eliminated systematically. New capability requests can be assessed against existing API coverage — most needs are already covered. Development time for new capabilities drops.

**What needs to be done:**

- **M** Implement API usage analytics — track which functions are used, how often, and with what patterns
- **M** Establish a function lifecycle process: new → active → deprecated → removed
- **S** Route capability gap signals (from L5) to API backlog automatically
- **S** Periodic API review: retire unused functions, optimize high-traffic ones
- **C** Automated performance regression detection

**How to measure progress:**

- Leading KPI: % of API functions with up-to-date usage data (target: 100%)
- Lagging KPI: Ratio of new function requests satisfied by existing API vs. requiring new development (target: ≥ 60% satisfied by existing)

**Priority: Medium — pursue after Zone 3 baseline is established.**

---

## L5 — Cognitive Capabilities

> **Reality note:** This is the layer where technically strong initiatives most often underperform. The functions exist. The search works. The extraction runs. But nobody can articulate what the system *can do* in the terms a business stakeholder would use. This gap is not a technical problem — it is a description and governance problem. And it is one of the two most common Zone 2 gate blockers.

---

### Level Descriptions

**★☆☆☆☆ Absent**
No named capabilities exist. The system does things — but those things are only describable in technical terms (API endpoints, function calls, module names). If a business stakeholder asks "what can this system do?", the only honest answer is to show them the code or the API documentation.

Symptoms: "Capabilities" are the same as the L4 function list. Contribution to a new feature starts with "what code do we need?" not "do we have this capability?" No capability catalog. Capability gaps are invisible until a feature request exposes them.

---

**★★☆☆☆ Implicit**
Capabilities exist in practice — the system genuinely can do things that have business value — but they are undescribed in business terms. The team understands what the system can do, but can't explain it to a non-technical stakeholder without a demonstration. New capabilities are added by writing code, not by first asking whether a capability already covers the need.

Symptoms: "We have a search endpoint" instead of "We can Find Knowledge." Capabilities are described by their implementation. Two similar capabilities exist because nobody knew the first one covered the need. Capability description is oral.

---

**★★★☆☆ Defined**
Capabilities are named in business terms and documented in a capability catalog. Each capability has a one-sentence description of what it does and what it does not do. Capabilities are technology-independent descriptions. A non-technical stakeholder can read the catalog and understand what the system can do.

Symptoms: Capability catalog exists (e.g. "Find Knowledge", "Extract Entities", "Expand Query", "Classify Document"). Each capability is mapped to the L4 functions it uses. New feature requests are evaluated against the capability catalog before implementation begins.

---

**★★★★☆ Connected**
Capabilities are mapped to both the L4 functions that implement them and the L6 applications that apply them. Capability coverage — which L7 use cases each capability can address — is explicitly documented. Capability gaps are visible: "we have no capability for Summarize Knowledge yet." Capabilities are treated as organizational investments, not implementation details.

Symptoms: Capability map exists: capability → functions (L4) + applications (L6) + use cases (L7). Coverage analysis run before each planning cycle. Capability metrics exist: usage frequency, quality scores, coverage per use case.

---

**★★★★★ Optimized**
The capability model evolves from usage data. New capabilities are introduced based on measured gaps. Redundant capabilities are consolidated. Capability quality is tracked and drives improvement cycles. The organization's intelligence portfolio is actively managed.

Symptoms: Capability usage metrics drive the capability roadmap. Redundancy analysis runs periodically. New use case requests are assessed against capability coverage before any design work begins. The capability model is published and stakeholder-visible.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
The system has technical functions but no describable organizational abilities. Business stakeholders experience this as opacity: "I know the system does something, but I can't say what it can do for me."

**What you gain at ★★:**
The team develops a shared informal understanding of what the system can do. Prototypes become explainable to stakeholders in approximate business terms.

> Business benefit: First stakeholder communication about system capabilities becomes possible. Internal team alignment on what is being built improves.

**What needs to be done:**

- **M** Have the team list what the system "can do" — in one sentence each, without using technical terms
- **M** Validate the list: does each entry describe a business effect, not an implementation?
- **S** Identify duplicates in the list (two entries that describe the same underlying capability)

**How to measure progress:**

- Leading KPI: Team can enumerate system capabilities without referring to the API documentation (binary: yes/no)
- Lagging KPI: Time for a new stakeholder to understand what the system can do (target: one conversation, no demo required)

**Priority: High — Zone 2 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
The team knows what the system can do, but the knowledge is oral and technical. Capabilities are described differently by different team members. New capabilities are added as code without a capability design step. Capability gaps are invisible until a feature request reveals them.

**What you gain at ★★★:**
Capabilities become an organizational asset, not team knowledge. New contributors understand what the system can do from documentation. Capability gaps become visible and plannable. The Zone 2 gate begins to open for L5.

> Business benefit: Non-technical stakeholders can participate in capability planning. New feature requests can be evaluated against existing capabilities — reducing redundant development. Capability gaps become explicit investment decisions.

**What needs to be done:**

- **M** Create a capability catalog: name each capability in business terms
- **M** Write a one-sentence description for each capability: what it does + what it explicitly does NOT do
- **M** Map each capability to the L4 functions it uses (even informally)
- **S** Assign an owner to each capability
- **S** Run a gap analysis: what do users need that isn't in the catalog?
- **C** Link capabilities to L7 use cases they address
- **W** Full capability maturity model or capability-based planning process (premature at this stage)

**How to measure progress:**

- Leading KPI: Number of named, documented capabilities (target: all current capabilities covered within 2 weeks)
- Lagging KPI: % of new feature requests that map to an existing capability vs. require a new one (target: ≥ 60% map to existing, indicating capability stability)

**Priority: High — Zone 2 gate.**
L5 ★★★ is one of the two most common Zone 2 gate blockers (alongside L8). This is typically the highest-leverage transition in the initiative.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Capabilities are named and documented, but they exist in isolation. Nobody knows which capabilities address which use cases, or which capabilities are unused. Capability coverage is assumed, not measured.

**What you gain at ★★★★:**
The capability layer becomes connected to both the technical layer below (L4) and the application layer above (L6). Coverage is measurable. Investment in new capabilities is evidence-based.

> Business benefit: "We already have a capability for that" becomes a provable statement, not an approximation. Capability investment decisions are based on coverage analysis. Redundant development is prevented.

**What needs to be done:**

- **M** Build the capability map: capability → L4 functions + L6 applications + L7 use cases
- **M** Run coverage analysis: which L7 use cases have no capability covering them?
- **S** Define capability metrics: usage frequency, quality score per capability
- **S** Establish a capability review cycle (at minimum, each planning period)
- **C** Document capability dependencies: capabilities that require other capabilities to function
- **W** Fully automated capability gap detection without manual review

**How to measure progress:**

- Leading KPI: % of L7 use cases with at least one mapped capability (target: 100% of documented use cases)
- Lagging KPI: % of new feature requests satisfied by existing capabilities without new development (target: ≥ 70%)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Capability model is connected, but evolution is reactive. New capabilities are designed when someone asks. Capability quality is not systematically tracked. Redundant capabilities accumulate.

**What you gain at ★★★★★:**
The capability portfolio is actively managed. Capabilities are retired when superseded, improved when underperforming, and added based on measured gaps.

> Business benefit: Capability portfolio stays lean and effective. Organizational intelligence grows systematically, not by accretion. Capability investments are traceable to business outcome improvements.

**What needs to be done:**

- **M** Implement capability performance tracking: quality score, usage volume, outcome correlation
- **M** Establish a capability lifecycle: proposed → active → deprecated → retired
- **S** Automated redundancy detection: flag capabilities with overlapping scope
- **S** Route L10 outcome signals to capability improvement backlog
- **C** Capability portfolio published to organizational stakeholders

**How to measure progress:**

- Leading KPI: % of capabilities with a quality score and usage metric (target: 100%)
- Lagging KPI: Capability portfolio size trend — growing thoughtfully vs. by accretion (target: stable or decreasing number of capabilities per unit of use case coverage)

**Priority: Medium — pursue after Zone 3 baseline is established.**

---

## L8 — Situation & Context

> **Reality note:** L8 is the second most common Zone 2 gate blocker, alongside L5. Most systems have no context awareness — they treat every request identically regardless of who is asking, why, when, or what decision the result will support. Adding context does not require sophisticated personalization infrastructure. It starts with asking a single question: "What does the user need to do with this result?"

---

### Level Descriptions

**★☆☆☆☆ Absent**
The system has no awareness of context. Every request is treated identically: same retrieval strategy, same response format, same priority weighting — regardless of who is asking, when, why, or what they plan to do with the result. The system cannot distinguish between a developer debugging a pipeline and an executive preparing a board briefing.

Symptoms: Search results are ranked purely by semantic similarity, with no awareness of user role, intent, or urgency. No user identity in the system. Query quality determines result quality entirely — the system cannot compensate for an underspecified search intent. Context is architecturally absent.

---

**★★☆☆☆ Implicit**
Some context is captured — user sessions exist, project scope is used as a filter, or domain is inferred from the entry point. But context is not formally modeled, not used to adapt behavior, and not stored for future use. The team understands that context matters but hasn't designed a context model.

Symptoms: User sessions exist but are anonymous. "Project context" is a configuration parameter, not a dynamic situational state. Context that could help (user's current task, urgency, decision deadline) is available but ignored. Results vary only by query, not by requester.

---

**★★★☆☆ Defined**
Core context dimensions are formally defined and captured at request time. At minimum: role, domain, and intent are present in the request schema. Context is logged with results, enabling future analysis of what context patterns lead to better outcomes. The system can distinguish between different request contexts — even if it doesn't yet use that distinction to improve results.

Symptoms: Request schema includes context fields (role, domain, intent, task type). Context data is stored alongside results. Intent types are defined: "find reference", "verify fact", "explore topic", "find owner", "understand decision." New requests include context — at least for one client.

---

**★★★★☆ Connected**
Context actively shapes capability selection, knowledge retrieval, and response formatting. Different situations produce observably different results. The system applies context to filter, rank, and format its output — not just to log it. Retrieval strategies are parameterized by intent type. Role-based access control aligns with the context model.

Symptoms: A "find reference" query uses different retrieval parameters than an "explore topic" query. An executive's request surfaces different content than a developer's request for the same query. Context mismatch — a high-stakes decision request treated as casual browsing — is detected and escalated. A/B testing of retrieval strategies per intent is possible.

---

**★★★★★ Optimized**
The context model evolves from usage data. The system learns which context patterns correlate with better outcomes and adjusts retrieval strategies accordingly. New context dimensions are discovered from usage analysis. The system can predict what a user needs based on established patterns — even when intent is underspecified.

Symptoms: Retrieval strategy parameters are tuned per intent type from measured outcome data. New context dimensions (e.g. urgency, collaboration context) are surfaced from usage pattern analysis. The system can surface "you seem to be working on X — here is related content" without explicit user input.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
The system is context-blind. Every request is a black box to the system: query in, result out. The same retrieval strategy applies to a CEO preparing a strategic decision and an intern doing exploratory research.

**What you gain at ★★:**
The team begins capturing contextual signals, even without yet using them. Context data starts accumulating for future analysis.

> Business benefit: First contextual signals captured. Foundation for context-aware retrieval laid. A/B testing by user segment becomes possible once enough data accumulates.

**What needs to be done:**

- **M** Add user session identity — even anonymous — to requests
- **M** Add a domain or scope field to the request schema
- **S** Log context alongside query and results
- **C** Survey users about their most common intent types — don't model what you haven't observed

**How to measure progress:**

- Leading KPI: % of requests that include at least one context field beyond the query (target: 100% once implemented)
- Lagging KPI: Distribution of context values across requests — evidence that context is varied (not all requests look the same)

**Priority: High — Zone 2 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Some context exists but it is informal, inconsistent, and not used. The system knows there is a "user" and a "project" but treats them as configuration parameters, not as dynamic situational inputs.

**What you gain at ★★★:**
Context becomes a formal, governed dimension of every request. The Zone 2 gate begins to open for L8.

> Business benefit: First differentiated retrieval strategies possible — different intents can be served differently. User experience begins to adapt to context. A/B testing of retrieval strategies per intent becomes possible.

**What needs to be done:**

- **M** Define 3–5 intent types for the current use case (e.g. "find reference", "verify fact", "explore topic", "find owner", "understand decision")
- **M** Add intent field to the API request schema and populate it in at least one client
- **M** Define role or access level as a context dimension
- **S** Log all context dimensions alongside results for future analysis
- **S** Document the context model: dimensions, allowed values, ownership
- **C** Build a context dashboard: distribution of intents over time
- **W** Personalization or behavioral modeling (premature at this stage)

**How to measure progress:**

- Leading KPI: Intent field present in API schema and populated by at least one client (binary: yes/no)
- Lagging KPI: Distribution of intent values in logs — evidence that different intent types are being used

**Priority: High — Zone 2 gate.**
L8 ★★★ is the second most common Zone 2 gate blocker. The transition is lightweight — a single field addition — but requires organizational agreement on intent types.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Context is captured and logged, but not yet used to differentiate behavior. All intent types receive the same retrieval strategy. Context is a data field, not a control dimension.

**What you gain at ★★★★:**
Context actively shapes the system's behavior. Different situations produce meaningfully different results. The system begins to behave intelligently — not just correctly.

> Business benefit: Retrieval relevance improves measurably per intent type. Users with different roles and goals receive results adapted to their situation. The system becomes more useful as context richness increases.

**What needs to be done:**

- **M** Implement at least two differentiated retrieval strategies: one per distinct intent class
- **M** Route requests to the correct strategy based on intent field
- **M** Track relevance metrics per intent type
- **S** Implement role-based result filtering: not just access control, but relevance adjustment
- **S** Run A/B tests: context-aware retrieval vs. context-blind baseline
- **C** Implement urgency or priority weighting for time-sensitive intent types
- **W** Full personalization based on historical behavior (significant investment, needs data accumulation first)

**How to measure progress:**

- Leading KPI: Number of distinct retrieval strategies active (target: ≥ 2, one per intent class)
- Lagging KPI: Relevance score by intent type vs. context-blind baseline (target: measurable improvement for at least 2 intent types)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Context shapes behavior, but the context model is static. New context dimensions are added manually when someone notices they are relevant. Retrieval strategy parameters are set at design time and not updated from feedback.

**What you gain at ★★★★★:**
The context model evolves from usage. The system learns which context-strategy combinations produce better outcomes and adjusts automatically.

> Business benefit: Retrieval quality improves continuously without explicit tuning projects. New context signals are discovered from usage patterns before they are explicitly requested. The system's intelligence grows with use.

**What needs to be done:**

- **M** Implement outcome feedback collection: mark results as useful or not useful, with context captured
- **M** Feed outcome data back to retrieval strategy parameters — at least semi-automated
- **S** Automated context dimension discovery: flag new patterns in usage data that correlate with outcome quality
- **S** Retrieval strategy parameter tuning from A/B test results
- **C** Context model versioning: track how context understanding evolves over time

**How to measure progress:**

- Leading KPI: % of retrieval strategy parameters informed by measured outcome data vs. set by design assumption (target: ≥ 50% data-driven)
- Lagging KPI: Trend in overall retrieval relevance score over time (target: improving or stable, never degrading)

**Priority: Medium — pursue after Zone 3 baseline is established.**

---

## Zone 2 — Stop-Gate Summary

### Gate Criteria

| Layer | Required level | What "open" means |
|---|---|---|
| L3 Knowledge Core | ≥ ★★★ Defined | Core entity types documented, cross-system resolution in place, ownership assigned |
| L4 Features & APIs | ≥ ★★★ Defined | All functions documented with input/output contracts, ownership assigned |
| L5 Cognitive Capabilities | ≥ ★★★ Defined | Capability catalog exists, capabilities named in business terms, L4 mapping complete |
| L8 Situation & Context | ≥ ★★★ Defined | Core context dimensions defined, intent field in API schema, context logged with results |

**All four must be ≥ ★★★ for the Zone 2 gate to be open.**

A single ★★ on any of the four layers keeps the gate closed, regardless of the others' scores.

### Common Gate Blockers

| Pattern | Blocked layers | What it means |
|---|---|---|
| Strong pipeline, no semantics | L3 ★★ | Data flows but doesn't accumulate meaning. Every query goes back to raw text. |
| Technical capabilities, no business vocabulary | L5 ★★ | System does things but can't describe what in business terms. Stakeholder communication impossible. |
| Context-blind retrieval | L8 ★ | Same result for every user and every intent. Quality depends entirely on query quality. |
| APIs exist but undocumented | L4 ★★ | Functions are tribal knowledge. New contributors can't build on them. |

### Organizational Reading — Zone 2

| Score pattern | What it says about the organization |
|---|---|
| L3 < ★★★, L4 ≥ ★★★ | API platform exists without semantic foundation. Features access raw data directly. Fragile at scale. |
| L5 < ★★★, L4 ≥ ★★★ | Technical capability without organizational description. Classic developer-led system that can't explain itself. |
| L8 < ★★★, L5 ≥ ★★★ | Capabilities defined but context-blind. System does the right things for the wrong users. |
| All Zone 2 ≥ ★★★ | Zone 2 gate open. Capabilities are describable, the system is context-aware. Zone 3 investment can begin. |
| All Zone 2 ≥ ★★★★ | Capabilities are connected to use cases and applications. Organization can articulate its intelligence portfolio. |

### Recommended Sequencing Within Zone 2

1. **L8 ★1→3 first** — start intent logging and context field before anything else. Intent data accumulates passively while other Zone 2 work proceeds. The longer it runs, the more useful it becomes. Starting here costs one sprint; delaying it costs weeks of data.
2. **L5 ★2→3 while L8 data accumulates** — create the capability catalog in parallel. This is documentation work, not code — it can happen while L8 intent logging runs in the background.
3. **L3 ★2→3 + L4 ★2→3** in parallel — entity model and API contracts can evolve simultaneously once L8 and L5 work is underway
4. **L3 ★3→4 + L4 ★3→4** together — connected Knowledge Core requires connected API layer
5. **L5 ★3→4 + L8 ★3→4** together — connected capabilities require context-aware routing, which needs the intent data from step 1
6. ★4→5 transitions deferred until Zone 3 baseline is stable

> **Sequencing rationale:** L8 ★1→3 is the only Zone 2 transition that produces value passively — data accumulates during all other work. L5 ★2→3 is documentation-only — no engineering risk. These two together open the Zone 2 gate for the two most common blockers at minimal cost, while L3 and L4 work continues in parallel.

---

# OIA Maturity Rubric v1 — Zone 3: Impact

**Implements:** Issue #248
**Depends on:** Zone 2 rubric (this document)

---

## Zone 3 — Impact

**Stop-Gate rule:** L6, L7, L9, and L10 must all reach ★★★ (Defined) before the architecture can claim to produce measurable organizational impact.

> Zone 3 < ★★★: Applications exist but they aren't connected to organizational needs or measurable outcomes. Users may be satisfied with what the system does, but the organization cannot articulate why it matters or what changes as a result.

Zone 3 is where capabilities (Zone 2) meet real organizational needs (L7), are delivered through concrete applications (L6), for identifiable participants (L9), with traceable outcomes (L10).

---

## L6 — Solutions, Applications & Tools

---

### Level Descriptions

**★☆☆☆☆ Absent**
No application or tool exists that lets non-technical users access the system's capabilities. Capabilities are only accessible via raw API or command line. The system has no user-facing expression.

Symptoms: Only engineers can use the system. Business stakeholders see demos, not tools. Any business use requires developer involvement for every task. The system exists, but not as an organizational tool.

---

**★★☆☆☆ Implicit**
An application exists but is informal, undocumented, and person-dependent. It may be a personal script, an internal dashboard with no owner, or a prototype that was never productionized. It works for the person who built it and for users who were shown how to use it informally.

Symptoms: "The UI" is a React prototype from the hackathon. Usage depends on knowing the right URL. No documentation. No support path. Works when the original developer is available. Usage is limited to early adopters who received a direct demo.

---

**★★★☆☆ Defined**
The application is documented, owned, and deployable reproducibly. Users can accomplish their core tasks without developer assistance. The application has a defined user base, an owner, and a support path. A new user can onboard from documentation.

Symptoms: Application deployed to a stable URL or package. README or user guide exists. Owner named. Users can be onboarded by the owner without the original developer. The application is maintained — bugs are tracked and resolved.

---

**★★★★☆ Connected**
The application orchestrates multiple capabilities in response to situational context. Different users in different situations receive meaningfully different experiences. The application is integrated into the organization's workflows, not a standalone tool. L8 context actively shapes the application's behavior.

Symptoms: Role-based UI adaptation. "You seem to be working on X — here is a relevant starting point." Integration with organizational systems (calendar, task tracker, communication tools). Application usage data flows back to capability improvement. The application is part of how work gets done, not an optional add-on.

---

**★★★★★ Optimized**
The application evolves from usage data. UX improvements are driven by measured user outcomes. Low-value features are removed. High-value flows are optimized. The application maintains itself at a level of quality that matches organizational needs without requiring dedicated improvement projects.

Symptoms: Feature usage analytics drive roadmap. UX A/B testing is routine. Underused features are retired. The application continuously improves the outcomes it enables. Users notice the system getting better.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
Capabilities are real, but only accessible to those with technical access. Business value is locked behind the API layer.

**What you gain at ★★:**
First non-technical access to capabilities. Early adopters can use the system without developer assistance.

> Business benefit: Business validation becomes possible. First real users generate real feedback. Prototype usage reveals which capabilities matter.

**What needs to be done:**

- **M** Build a minimal UI or workflow that exposes at least one core capability to a non-technical user
- **M** Test it with at least one real user on a real task
- **S** Document the basic usage flow
- **C** Collect feedback from first users

**How to measure progress:**

- Leading KPI: Number of non-technical users who have used the application (target: ≥ 3 on real tasks)
- Lagging KPI: Tasks completed without developer assistance (target: ≥ 1 repeatable workflow)

**Priority: High — Zone 3 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Application exists but is fragile and person-dependent. Usage is limited to early adopters who received a direct demo. No documentation, no support path, no owner.

**What you gain at ★★★:**
The application becomes a sustainable organizational tool. New users can onboard independently. Zone 3 gate begins to open for L6.

> Business benefit: Usage can scale beyond the initial inner circle. The application becomes an organizational asset rather than a personal tool. Support load on the development team drops.

**What needs to be done:**

- **M** Write user documentation — at minimum a quick-start guide
- **M** Assign an application owner (not the original developer necessarily)
- **M** Deploy to a stable, always-available environment
- **S** Create an onboarding path for new users: documentation + first-use walkthrough
- **S** Set up a feedback or issue reporting channel
- **C** Create a support escalation path

**How to measure progress:**

- Leading KPI: Number of users onboarded without developer assistance (target: ≥ 5)
- Lagging KPI: Support requests that required developer involvement vs. resolved from documentation (target: ≤ 20% require developer)

**Priority: High — Zone 3 gate.**

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Application exists and is usable, but treats all users identically. No context adaptation. Not integrated into organizational workflows. Usage is voluntary and standalone.

**What you gain at ★★★★:**
The application becomes embedded in how work gets done. Context drives behavior. Multiple capabilities are orchestrated in service of real tasks.

> Business benefit: Application becomes a default tool for a specific workflow, not an optional add-on. Usage grows because the application meets users where they are. Workflow integration means the application is used when it's relevant, not when the user remembers to open it.

**What needs to be done:**

- **M** Implement context-aware behavior: role, intent, or situational data shapes the application's response
- **M** Integrate with at least one organizational workflow entry point (where do users currently start the task the application supports?)
- **S** Add usage analytics: which features are used, by whom, on what tasks
- **S** Connect application outcomes to L10 outcome tracking
- **C** Implement progressive disclosure: power users can access advanced features without overwhelming new users

**How to measure progress:**

- Leading KPI: % of target user base using the application at least once per week (target: ≥ 30% for defined target users)
- Lagging KPI: Task completion time for the primary use case vs. previous workflow (target: measurable reduction)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Application is used and embedded, but evolves only when someone escalates a problem or writes a feature request. No systematic improvement cycle.

**What you gain at ★★★★★:**
Application continuously improves from usage data. Users notice the system getting better without a "new version" announcement.

> Business benefit: Application quality stays aligned with organizational needs without dedicated improvement sprints. User satisfaction trends upward. Technical debt is managed, not accumulated.

**What needs to be done:**

- **M** Implement outcome-linked usage analytics: not just "feature used" but "did the user accomplish the task?"
- **M** Establish a continuous improvement cycle from usage data to roadmap
- **S** Routine feature retirement process for underused features
- **S** UX A/B testing infrastructure

**How to measure progress:**

- Leading KPI: % of roadmap items driven by usage analytics vs. individual feature requests (target: ≥ 50% analytics-driven)
- Lagging KPI: User-reported task completion success rate over time (target: improving trend)

**Priority: Medium — pursue after Zone 3 baseline is stable.**

---

## L7 — Use Cases & Challenges

---

### Level Descriptions

**★☆☆☆☆ Absent**
No use cases are documented. The initiative exists because someone had an idea or a vendor pitched something — but the concrete organizational problems it is supposed to solve are not written down. If asked "what problem does this solve?", the answer is abstract or marketing language.

Symptoms: "We want to be AI-driven." "We're building a knowledge management system." Use cases are not separable from solution descriptions. No actor, no task, no context — only product descriptions.

---

**★★☆☆☆ Implicit**
The team understands the core problem it is solving, but the understanding is informal and team-internal. Different team members would describe the use case differently. Users of the system experience its value but can't see the use case model that shaped the design.

Symptoms: Use cases live in the team's heads and in Slack threads. "We know what we're solving." Problem description changes with the audience. No use case register. Prioritization is done by feel.

---

**★★★☆☆ Defined**
Key use cases are documented with actor, task, and context. Use cases are prioritized. New work is evaluated against the use case register. Users can recognize their problems in the documented use cases. The difference between "in scope" and "out of scope" is answerable from the register.

Symptoms: Use case register exists: name, actor, task, context, priority. Acceptance criteria for use cases defined. "Does this initiative address use case X?" is answerable. Use case coverage gaps are visible.

---

**★★★★☆ Connected**
Use cases are linked to capabilities (L5), applications (L6), and outcomes (L10). Coverage is measurable: for each use case, it is known which capabilities address it and which application implements it. Gaps are explicit investment decisions. New use cases go through a structured intake process.

Symptoms: Use case–capability–application traceability matrix exists. New use case requests are evaluated against existing capabilities before design work begins. Use case coverage is a reported metric. L10 outcomes are linked to specific use cases.

---

**★★★★★ Optimized**
The use case register evolves from organizational feedback. New challenges are surfaced before they are articulated as feature requests. Use case ROI is tracked and drives priority. Addressed use cases are closed out; new ones are incorporated from usage signals and strategic input.

Symptoms: Use case value tracking: which use cases have measurably improved organizational performance? Unused use cases (nobody actually uses the application for this) are flagged and closed. New use cases emerge from L10 outcome analysis.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
The initiative is building something, but the organizational problem it solves is not documented. Any description of the problem is marketing language. Nobody has written "User X needs to do Y in context Z."

**What you gain at ★★:**
The team achieves internal alignment on what problem is being solved. Design decisions have a touchstone.

> Business benefit: Design decisions can be evaluated against a shared problem understanding. Scope creep becomes distinguishable from core functionality.

**What needs to be done:**

- **M** Write down the core problem in one sentence: who is stuck, what are they trying to do, what makes it hard
- **M** Validate with at least one real user: does this description match their experience?
- **S** Identify 2–3 distinct use cases (they may be similar, but write them separately)

**How to measure progress:**

- Leading KPI: Problem description written and validated by at least one real user (binary: yes/no)
- Lagging KPI: Design disputes resolved by reference to the problem statement vs. by authority (target: at least some disputes resolved by reference)

**Priority: High — Zone 3 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Team knows the problem but can't show it. New contributors need weeks of context to understand what is being solved and why. Prioritization is based on judgment rather than use case priority. Scope decisions are argued, not derived.

**What you gain at ★★★:**
Use cases become an organizational artifact. Zone 3 gate begins to open for L7.

> Business benefit: Onboarding of new contributors accelerates. Stakeholder communication becomes more precise. Investment decisions reference documented use case priority rather than stakeholder opinion.

**What needs to be done:**

- **M** Create a use case register: for each use case, document actor, task, context, current pain, success criterion
- **M** Prioritize the register: which use cases are Must, Should, Could, Won't for the current initiative?
- **S** Link each use case to the organizational role(s) that experience it
- **S** Define acceptance criteria: what does it mean for a use case to be "addressed"?
- **C** Validate the register with representative users from each actor group

**How to measure progress:**

- Leading KPI: Number of documented use cases with actor, task, and context (target: all current-scope use cases covered)
- Lagging KPI: % of scope decisions that reference a use case vs. decided by argument (target: ≥ 80% reference-based)

**Priority: High — Zone 3 gate.**

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Use cases are documented but isolated. It is not known which capabilities address each use case, or whether an application actually implements it. Coverage is assumed.

**What you gain at ★★★★:**
Use cases are connected to the full architecture. Gaps are explicit. Investment in capabilities is justified by use case coverage.

> Business benefit: "We have a capability for that" is provable. ROI calculation per capability becomes possible. Use case coverage becomes a planning and communication tool.

**What needs to be done:**

- **M** Build use case–capability–application traceability: for each use case, which capability addresses it, which application implements it?
- **M** Identify coverage gaps: use cases with no capability, no application, or no outcome tracking
- **S** Define outcome KPIs per use case
- **S** Create use case intake process for new requests
- **C** Validate coverage with users: do they experience the use case as addressed?

**How to measure progress:**

- Leading KPI: % of use cases with capability and application mapping (target: 100% for in-scope use cases)
- Lagging KPI: % of use cases rated as "addressed" by representative users (target: ≥ 70%)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Use cases are connected and covered, but the register is static. New challenges aren't discovered until someone escalates them. Addressed use cases stay in the register forever.

**What you gain at ★★★★★:**
The use case register is a living organizational intelligence artifact that evolves as the organization changes.

> Business benefit: The organization never builds the wrong thing twice. Addressed use cases are retired. New use cases from outcome feedback are proactively incorporated. The initiative stays aligned with organizational reality.

**What needs to be done:**

- **M** Track use case ROI: for each addressed use case, what measurably changed?
- **M** Retire addressed use cases: close them out and link them to their outcome evidence
- **S** Surface new use cases from L10 outcome feedback and L8 context signals
- **C** Publish use case coverage map to organizational stakeholders

**How to measure progress:**

- Leading KPI: % of use cases with outcome evidence (addressed vs. not addressed, measurably) (target: 100% of high-priority use cases)
- Lagging KPI: Time from new organizational challenge emerging to appearing in the use case register (target: ≤ one planning cycle)

**Priority: Medium — pursue after Zone 3 baseline is stable.**

---

## L9 — System Participants

---

### Level Descriptions

**★☆☆☆☆ Absent**
No participant model exists. The system has "users" but they are not categorized, described, or differentiated. Nobody can answer: who initiates the process, who executes the task, who benefits from the outcome?

Symptoms: "Users" are an undifferentiated group. No roles in the system. Access control is all-or-nothing. The same interface serves the developer, the manager, and the end user identically. Nobody has explicitly considered who is accountable for what in the system.

---

**★★☆☆☆ Implicit**
Participant roles exist in practice — developers have admin access, end users have restricted access — but they are not formally documented or connected to the architecture. The Initiator/Actor/Beneficiary triad exists by convention, not by design.

Symptoms: Roles exist as database flags, not as architectural concepts. "Who is responsible for X?" requires asking around. No formal participant model. Access control evolved organically. The accountability structure is tribal knowledge.

---

**★★★☆☆ Defined**
The participant model is documented. The Initiator/Actor/Beneficiary triad is defined for the initiative's core use cases. Each role has documented responsibilities, access rights, and accountability. New participants can be onboarded to their role from documentation.

Symptoms: Participant model document exists. Role descriptions written. RACI or equivalent for core processes. Initiator, Actor, and Beneficiary identifiable for every significant workflow. Access control aligns with the participant model.

---

**★★★★☆ Connected**
The participant model governs application design, access control, and capability routing. Different participants receive different experiences based on their role and context. Participant-level outcome tracking is possible: what do participants of role X achieve using capability Y?

Symptoms: L8 context model includes participant role. L6 applications adapt to participant. Access control is derived from participant model, not hardcoded. Participant-level usage analytics exist. New roles go through a design process, not just an access-rights change.

---

**★★★★★ Optimized**
The participant model evolves with the organization. New roles are assessed against the architecture before onboarding. Obsolete roles are retired. Participant-level outcome tracking informs capability and application improvements.

Symptoms: Participant model versioning tracks organizational change. New organizational roles are assessed: does this role require a new L8 context dimension? A new access tier? A new capability? Participant outcome data flows to L10 and back to L5 improvement.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
The system serves "users" without distinction. Accountability for decisions, data quality, and outcomes is undefined. When something goes wrong, nobody is clearly responsible.

**What you gain at ★★:**
Role boundaries emerge. Accountability begins to form. The Initiator/Actor/Beneficiary triad is recognizable, even if informal.

> Business benefit: First accountability structure. Escalation paths exist. The system's behavior is traceable to a role.

**What needs to be done:**

- **M** Identify the distinct types of participants who interact with the system (even informally)
- **M** Describe the Initiator (who triggers the process), Actor (who executes), Beneficiary (who gains) for the core use case
- **S** Document current access levels as roles, not as individuals

**How to measure progress:**

- Leading KPI: Initiator, Actor, Beneficiary identified and named for the core use case (binary: yes/no)
- Lagging KPI: Time to identify who is responsible when an incident occurs (target: measurably reduced)

**Priority: High — Zone 3 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Roles exist in practice but are not documented or connected to the architecture. Onboarding a new participant requires asking the team. Access rights and responsibilities are not derivable from any artifact.

**What you gain at ★★★:**
Participants are an architectural concept, not just a system configuration. Zone 3 gate begins to open for L9.

> Business benefit: Onboarding new participants is self-service. Accountability is clear and auditable. Compliance reviews are possible (who has access to what, and why?).

**What needs to be done:**

- **M** Document the participant model: for each role, responsibilities, access rights, accountability, and place in the Initiator/Actor/Beneficiary triad
- **M** Align access control with the documented participant model
- **S** Define a role change process: what happens when a participant changes role?
- **S** Link each documented use case to the participant roles involved
- **C** Validate the participant model with representatives of each role

**How to measure progress:**

- Leading KPI: Number of roles with documented responsibilities and access rights (target: all roles in use)
- Lagging KPI: % of access control decisions derivable from the participant model without asking (target: 100%)

**Priority: High — Zone 3 gate.**

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Participant model documented but not connected to architecture. Applications treat all participants of a role identically. L8 context does not include participant dimensions. Participant outcomes are not tracked.

**What you gain at ★★★★:**
The participant model governs behavior. Different participants in different contexts receive different system behavior. Participant-level outcomes become visible.

> Business benefit: Applications serve participants effectively rather than generically. Access control and UX are consistent and architecture-derived. Participant outcome data enables role-level impact assessment.

**What needs to be done:**

- **M** Include participant role as a dimension in the L8 context model
- **M** Implement role-dependent behavior in at least one L6 application
- **S** Build participant-level usage and outcome analytics
- **S** Audit access control: is it fully derivable from the participant model?
- **C** Define escalation and override processes per participant role

**How to measure progress:**

- Leading KPI: % of L6 applications with participant-role-dependent behavior (target: 100% of applications with multiple user types)
- Lagging KPI: Participant satisfaction by role (target: measurably differentiated, high for primary roles)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Participant model is connected but static. New organizational roles require manual assessment and ad-hoc access configuration. Obsolete roles accumulate. Participant outcome data exists but is not fed back to improvement.

**What you gain at ★★★★★:**
Participant model evolves with organizational change. New roles are proactively assessed. Outcome data drives capability and application improvements for each participant type.

> Business benefit: The system stays aligned with organizational reality as it changes. Participant experience improves continuously. New organizational roles are supported systematically rather than as afterthoughts.

**What needs to be done:**

- **M** Establish a participant model review cadence aligned with organizational change cycles
- **M** Feed participant outcome data back to L5 capability and L6 application improvement
- **S** Automated detection of access pattern anomalies (participants using the system in unexpected ways — either gap or abuse)
- **C** Participant model versioning tied to organizational change events

**How to measure progress:**

- Leading KPI: Time from new organizational role definition to participant model update (target: ≤ one planning cycle)
- Lagging KPI: Participant outcome trend by role over time (target: improving for all primary roles)

**Priority: Medium — pursue after Zone 3 baseline is stable.**

---

## L10 — Business Outcome

> **Reality note:** L10 is the most commonly absent layer across all AI initiatives — not because organizations don't care about outcomes, but because outcome measurement requires design decisions made at the *beginning* of an initiative. If no baseline was measured before the system launched, it cannot be measured after. The transition from ★ to ★★★ on L10 is often a retrospective effort: going back to define what *should have been* tracked and creating the measurement infrastructure now.

---

### Level Descriptions

**★☆☆☆☆ Absent**
No business outcomes are defined or tracked. The initiative exists, produces outputs, and is used — but nobody can answer "what changed in the organization as a result?" Success is assumed, not measured. The initiative's continuation is justified by presence, not by impact.

Symptoms: No KPIs defined. No baseline measured. Success is "the system is being used." "We know it helps." No feedback loop from usage to improvement. Stakeholder satisfaction is the de facto success metric, which fluctuates with recency and individual advocacy.

---

**★★☆☆☆ Implicit**
The team understands what they are trying to achieve and informally observes whether it's working. Positive signals are noticed: "people seem to like it", "we hear it's saving time." But these observations are anecdotal and unstructured. The organization cannot defend the initiative with evidence.

Symptoms: "We get positive feedback." "Users tell us it's helpful." Outcomes described qualitatively. No measurement framework. Initiative review conversations are dominated by feature stories, not impact evidence.

---

**★★★☆☆ Defined**
Key outcomes are defined with measurable KPIs. A baseline is established. Progress toward outcomes is tracked and reported. Stakeholders can see whether the initiative is producing its intended impact. The initiative can answer "are we achieving what we set out to achieve?"

Symptoms: Outcome KPIs defined and baselined. Regular reporting cadence. At least one leading and one lagging indicator tracked per outcome. Stakeholders receive outcome reports, not just feature updates. "We are on track / not on track" is answerable.

---

**★★★★☆ Connected**
Outcomes are connected to the full architecture: traceable from L10 back to L7 use cases, L5 capabilities, and L6 applications. Outcome data informs investment decisions — what to build next, what to improve, what to retire. The initiative makes decisions based on outcome data, not on opinion.

Symptoms: Outcome-to-use-case traceability: "this KPI improvement is attributable to addressing use case X." Investment decisions reference outcome data. Capability improvements are prioritized by their predicted outcome impact. L10 data flows back to L5 capability improvement roadmap.

---

**★★★★★ Optimized**
Business outcomes drive a continuous improvement loop across the architecture. The system learns from its impact. Outcome trends trigger improvement workflows without requiring a human to notice and escalate. The organization treats its intelligence architecture as a measured, managed business asset.

Symptoms: Outcome degradation triggers automated investigation. Usage drops correlate with experience analysis and generate improvement tasks. The initiative's ROI is tracked and published as a business metric alongside other organizational KPIs. The architecture improves itself in response to outcome signals.

---

### Transition 1→2: Absent → Implicit

**Current state — what this looks like:**
The initiative produces no evidence of impact. Continuation is justified by advocacy and presence. The organization cannot distinguish between "this helps" and "this is what we built."

**What you gain at ★★:**
The team develops a shared, informal understanding of what success looks like. Anecdotal evidence begins to accumulate.

> Business benefit: Qualitative evidence for continuation. First signals of whether the initiative is on the right track.

**What needs to be done:**

- **M** Define success in one sentence: what does it look like when this initiative is working?
- **M** Identify the organizational metric most likely to change if the initiative succeeds
- **S** Begin collecting qualitative feedback from users: is this making their work easier?

> **Minimum viable L10:** If baseline measurement was not designed into the initiative from the start, the minimal viable approach is: search log + manual relevance rating. For each session, the user rates whether the results were useful (binary: yes/no). This produces an outcome signal — even if rough — within days, without infrastructure investment. It also seeds the data needed for L10 ★2→3.

**How to measure progress:**

- Leading KPI: Success definition written and shared with stakeholders (binary: yes/no)
- Lagging KPI: Team can cite specific user stories about impact (target: ≥ 3 specific, concrete examples)

**Priority: High — Zone 3 gate dependency.**

---

### Transition 2→3: Implicit → Defined

**Current state — what this looks like:**
Success is felt, not measured. The initiative cannot be defended with evidence. When budget pressure comes, the initiative cannot demonstrate its value quantitatively.

**What you gain at ★★★:**
The initiative has a measurable impact framework. Zone 3 gate begins to open for L10.

> Business benefit: Initiative continuation can be defended with evidence. Investment decisions reference outcome data. The organization develops an evidence-based relationship with its intelligence architecture.

**What needs to be done:**

- **M** Define at least two outcome KPIs: one leading (early signal) and one lagging (actual impact)
- **M** Measure the baseline for each KPI before — or as close to "before" as possible
- **M** Establish a measurement cadence: how often are KPIs measured, who reports them, who receives them?
- **S** Link each KPI to a use case: this metric changes when use case X is addressed
- **S** Define thresholds: what "good" looks like vs. what "not working" looks like
- **C** Publish outcomes to a stakeholder dashboard
- **W** Full attribution analysis: separating initiative impact from other organizational factors (significant statistical work, premature at this stage)

**How to measure progress:**

- Leading KPI: Number of outcome KPIs with baseline and measurement cadence (target: ≥ 2)
- Lagging KPI: Time from "are we having impact?" question to evidence-based answer (target: ≤ 1 week)

**Priority: High — Zone 3 gate.**
L10 ★★★ is one of the most valuable transitions in the entire rubric. An initiative without outcome measurement cannot learn, cannot be defended, and cannot be scaled. This transition should be designed at initiative launch — retrofitting it is harder.

---

### Transition 3→4: Defined → Connected

**Current state — what this looks like:**
Outcomes are tracked but isolated. The data doesn't flow back to the architecture. Capability and application decisions still rely on judgment rather than outcome evidence.

**What you gain at ★★★★:**
Outcomes drive the architecture. Investments are justified by outcome impact. The improvement loop closes.

> Business benefit: Every architecture investment can be connected to its predicted outcome impact. Development prioritization becomes evidence-based. The ROI of specific capabilities is calculable.

**What needs to be done:**

- **M** Build outcome-to-use-case traceability: which KPI changes when which use case is addressed?
- **M** Feed outcome data into planning: capability and application roadmap decisions reference outcome trends
- **M** Define the feedback loop: when L10 shows a decline, what architectural investigation is triggered?
- **S** Build outcome attribution tooling: correlate L10 metrics with L6 application usage and L5 capability deployment
- **S** Stakeholder reporting: outcome data presented alongside feature delivery in regular reviews
- **C** ROI calculation per capability or application

**How to measure progress:**

- Leading KPI: % of investment decisions that reference outcome data (target: ≥ 80%)
- Lagging KPI: Time from outcome decline detected to architectural cause identified (target: ≤ 2 weeks)

**Priority: High once Zone 2 gate is open.**

---

### Transition 4→5: Connected → Optimized

**Current state — what this looks like:**
Outcomes are tracked and connected, but improvement is still triggered by humans noticing trends and escalating. The organization is evidence-informed but not self-improving.

**What you gain at ★★★★★:**
The architecture optimizes itself in response to outcome signals. Declining outcomes trigger automated investigation and improvement workflows. The initiative manages itself as a business asset.

> Business benefit: Initiative ROI is maintained without dedicated management overhead. The system learns from its own impact data. Organizational intelligence grows as a background process.

**What needs to be done:**

- **M** Implement automated outcome monitoring with alerting thresholds
- **M** Define automated investigation triggers: outcome decline → architecture investigation → improvement task
- **S** Outcome trend forecasting: predict when thresholds will be reached
- **S** Publish the initiative's ROI as an organizational business metric
- **C** Connect outcome signals to L5 capability evolution and L3 knowledge improvement automatically

**How to measure progress:**

- Leading KPI: % of outcome deteriorations detected automatically vs. noticed manually (target: ≥ 80% automated)
- Lagging KPI: Time from outcome signal to improvement task created and assigned (target: ≤ 24 hours for automated triggers)

**Priority: Medium — pursue after Zone 3 baseline is stable. This level represents organizational intelligence maturity, not just system maturity.**

---

## Zone 3 — Stop-Gate Summary

### Gate Criteria

| Layer | Required level | What "open" means |
|---|---|---|
| L6 Solutions & Applications | ≥ ★★★ Defined | Application documented, owned, deployable; users onboarded without developer assistance |
| L7 Use Cases & Challenges | ≥ ★★★ Defined | Use case register exists with actor, task, context; prioritized |
| L9 System Participants | ≥ ★★★ Defined | Participant model documented; Initiator/Actor/Beneficiary triad defined; access control aligned |
| L10 Business Outcome | ≥ ★★★ Defined | KPIs defined and baselined; measurement cadence established; outcome reporting active |

**All four must be ≥ ★★★ for the Zone 3 gate to be open.**

A single ★★ on any of the four layers keeps the gate closed, regardless of the others' scores.

### Organizational Reading — Zone 3

| Score pattern | What it says about the organization |
|---|---|
| L6 ≥ ★★★, L10 < ★★★ | Application exists but nobody measures whether it helps. Activity without accountability. |
| L7 < ★★★, L6 ≥ ★★★ | Application built without documented requirements. Success undefined. |
| L9 < ★★★, L6 ≥ ★★★ | Capability deployed without accountability model. Any incident produces blame, not resolution. |
| L10 < ★★★ across the board | The organization cannot distinguish between valuable and worthless initiatives. Investment is unjustifiable. |
| All Zone 3 ≥ ★★★ | Zone 3 gate open. Impact is measurable. The organization can distinguish what works from what doesn't. |
| All ≥ ★★★★ | Architecture produces organizational intelligence at scale. Impact is traceable and investable. |

### Recommended Sequencing Within Zone 3

1. L7 ★2→3 first — use cases are the foundation for all Zone 3 design decisions
2. L9 ★2→3 in parallel — participant model shapes application design from the start
3. L6 ★2→3 — application built for documented use cases, serving documented participants
4. L10 ★1→3 — outcome measurement designed before the application reaches full usage
5. L6 ★3→4 + L10 ★3→4 together — connected application and outcome tracking reinforce each other
6. ★4→5 transitions deferred until outcome data has accumulated (minimum: 2–3 measurement cycles)

---

# Muster-Bibliothek (Pattern Library)

The four organizational patterns below describe the most common score signatures in OIA assessments. Each pattern is a diagnostic: it names what is visible in the scores, explains what it means organizationally, and indicates the highest-leverage improvement path.

---

## Pattern A — Data-Rich, Context-Poor

**Score signature:** L2 ★★★★ / L4 ★★★★ / L8 ★–★★ / L5 ★★

**What the scores say:** The data pipeline is excellent and the API layer is strong. But the system has no awareness of who is asking, why, or what they intend to do with the result. Capability vocabulary is technical, not business-oriented.

**What this means organizationally:**
This pattern is common in developer-led knowledge systems. The builder knows what the system does — technically — but hasn't yet formalized what it *is for* in organizational terms. The system's output quality depends entirely on query quality. The system cannot compensate for underspecified intent. The same result is delivered regardless of whether the user is making a strategic decision or exploring casually.

**The gap:** Not technical. The data is there. The functions work. The gap is *description* (L5) and *context awareness* (L8).

**Highest-leverage path:**
1. L5 ★★→★★★: Name capabilities in business terms. Create a capability catalog.
2. L8 ★→★★★: Define 3–5 intent types. Add intent to the request schema.
3. These two transitions alone open the Zone 2 gate — without touching the data or API layer.

---

## Pattern B — Capability Without Foundation

**Score signature:** L5 ★★★★ / L3 ★★★★ / L1 ★★ / L2 ★★

**What the scores say:** Capabilities are well-designed and the knowledge model is sophisticated — but the infrastructure and data layers are fragile. Impressive in design, unreliable in production.

**What this means organizationally:**
This pattern often appears in architecture-first initiatives where design work ran ahead of infrastructure work. The capability model is correct and the knowledge structures are sophisticated — but they run on undocumented infrastructure with undocumented data sources. The system works in demos and breaks in production. When the person who configured the infrastructure leaves, recovery requires investigation, not a playbook.

**The gap:** Zone 1 is below threshold. The Zone 2 work is real, but it is structurally fragile.

**Highest-leverage path:**
1. L1 ★★→★★★: Document infrastructure, manage credentials, track costs.
2. L2 ★★→★★★: Create data source register, script access paths, assign ownership.
3. Only after Zone 1 gate opens should Zone 2 investment continue. Otherwise, sophistication compounds fragility.

**Warning:** Continuing Zone 2 or Zone 3 investment before Zone 1 is at ★★★ creates pseudo-maturity — a system that appears capable but fails under operational load.

---

## Pattern C — Technology Without Business

**Score signature:** L1 ★★★★ / L4 ★★★★ / L10 ★ / L7 ★–★★

**What the scores say:** Excellent technical infrastructure and API capability, but no documented use cases and no outcome tracking. "A solution looking for a problem."

**What this means organizationally:**
This pattern is common in technology-driven initiatives that were launched because of capability availability ("we now have an LLM") rather than organizational need ("we have a problem worth solving"). The technical foundation is solid and the API layer is strong — but nobody knows which organizational problems the initiative is supposed to address, and no measurement exists to determine whether it's working.

**The gap:** Zone 3 is entirely absent. The initiative cannot be defended against budget pressure. Any individual user complaint is treated the same as a systemic capability failure — because there is no measurement to distinguish them.

**Highest-leverage path:**
1. L7 ★→★★★: Write down the use cases. Who needs this, for what task, in what context?
2. L10 ★→★★★: Define KPIs and baseline them. What will change if this works?
3. These two transitions are primarily documentation work — no new technical development required.

**Warning:** An initiative in Pattern C cannot justify its own continuation. Even a modest investment in L7 and L10 transforms "we believe this helps" into "we can show this helps."

---

## Pattern D — Governed Intelligence

**Score signature:** L1 ★★★★ / L2 ★★★★ / L3 ★★★★ / L4 ★★★★ / L5 ★★★★ / L8 ★★★ / L9 ★★★ / L10 ★★★

**What the scores say:** Foundation is production-grade, capabilities are connected and context-aware, impact is measured. The architecture produces organizational intelligence at scale.

**What this means organizationally:**
This pattern represents the target state for an OIA initiative. The organization has made the full journey from raw data to measurable business impact. The architecture is not just functional — it is *managed*. Capabilities are described in organizational terms, use cases are documented and tracked, outcomes are measured and reported. The system is trusted.

**What distinguishes this pattern from pseudo-maturity:**
The scores are balanced across all three zones. No zone is at ★★★★★ while another is at ★. The organization made sustainable progress — Zone 1 before Zone 2, Zone 2 before Zone 3 — rather than optimizing one layer while leaving others fragile.

**Next investment:**
- Zone 2 and Zone 3 ★4→5 transitions: optimize with feedback loops
- L8 ★★★→★★★★: context-aware retrieval
- L10 ★★★→★★★★: outcome data drives architecture decisions
- The goal at this stage is continuous improvement, not structural remediation.

---

# Organisationslesart (Organizational Reading Template)

The Organisationslesart is the mechanism for translating a per-layer score profile into an organizational statement: what does this score pattern say about the *organization* behind the initiative, not just the technical system?

---

## How to Derive an Organizational Reading

A score profile is a diagnostic instrument. Follow these steps:

**Step 1 — Identify the zone pattern.**
Where is the highest investment relative to the zone gates? Is Zone 2 receiving investment while Zone 1 is fragile? Is Zone 3 absent while Zone 2 is complete?

**Step 2 — Name the dominant pattern.**
Match the score profile to the Muster-Bibliothek (Pattern A–D above), or derive a hybrid description if no single pattern fits.

**Step 3 — State what the pattern reveals about the organization.**
The score pattern is not a technical assessment — it is an organizational signal. Apply the following translation keys:

| Layer gap | Organizational signal |
|---|---|
| L1 < ★★★ | Initiative is person-dependent and fragile. Infrastructure is not treated as a shared organizational asset. |
| L2 < ★★★ | Organization does not manage its data sources. Knowledge of "what data exists" is tribal. |
| L3 < ★★★ | Organization treats its knowledge as a search index, not as a structured asset. No semantic model of the domain. |
| L4 < ★★★ | Capabilities are not composable. Every new feature is built from scratch. Technical knowledge is not shared. |
| L5 < ★★★ | Organization cannot describe what its systems can do in business terms. Technical and organizational vocabulary are disconnected. |
| L8 < ★★★ | System does not know who it is serving or why. Every request treated identically — context-blind. |
| L6 < ★★★ | Capabilities exist but are not accessible to the organization. Business value is locked behind the API. |
| L7 < ★★★ | Organization does not have a documented understanding of the problems it is trying to solve. Design decisions are unjustified. |
| L9 < ★★★ | No accountability model. When something goes wrong, the response is blame, not process. |
| L10 < ★★★ | Organization cannot distinguish valuable from worthless initiatives. Investment decisions are advocacy-driven, not evidence-based. |

**Step 4 — Identify the transition that changes the most.**
The Organizational Reading is most useful when it identifies the single transition that would most change the organizational signal. This is almost always in the lowest zone with an open gate-blocker.

**Step 5 — Write the reading.**
A well-formed Organizational Reading has four elements:
1. **Pattern name** (from Muster-Bibliothek or derived hybrid)
2. **What the scores say** (neutral diagnosis of the score profile)
3. **What it means organizationally** (the organizational behavior revealed by the scores)
4. **Highest-leverage transition** (the one change that unlocks the most improvement)

**Example (Pattern A — Data-Rich, Context-Poor):**

> This initiative shows Pattern A: Data-Rich, Context-Poor. The data pipeline (L2 ★★★★) and API layer (L4 ★★★★) are production-grade, while L5 ★★ and L8 ★ are Zone 2 gate blockers.
>
> Organizationally, this means the initiative was built by technically capable contributors who understand pipeline architecture well. The challenge going forward is not technical depth — it is business clarity: naming what the system can do (L5) and making it context-aware (L8).
>
> The highest-leverage transition is L5 ★★→★★★: creating a capability catalog in business terms. This single transition, combined with L8 ★→★★★ (adding intent to the request schema), opens the Zone 2 gate — and is achievable in a focused sprint without any infrastructure work.

---

## Zone Summary Reference

| Zone | Gate layers | Gate threshold | What opening the gate enables |
|---|---|---|---|
| Zone 1 — Foundation | L1, L2 | Both ≥ ★★★ | Zone 2 investment becomes sustainable |
| Zone 2 — Capabilities | L3, L4, L5, L8 | All ≥ ★★★ | Zone 3 investment becomes sustainable |
| Zone 3 — Impact | L6, L7, L9, L10 | All ≥ ★★★ | Architecture produces measurable organizational impact |
