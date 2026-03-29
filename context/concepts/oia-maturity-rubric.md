# OIA Maturity Rubric v1 — Zone 1: Foundation

**Status:** Active — v1
**Implements:** Issue #247
**Depends on:** [oia-maturity-model.md](oia-maturity-model.md) (#239), [oia-layer-definitions.md](oia-layer-definitions.md) (#240)
**Followed by:** Zone 2 + Zone 3 rubric (Issue #241b)

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
