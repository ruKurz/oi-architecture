# OIA Layer Definitions — MECE Assessment Criteria

**Status:** Active
**Implements:** Issue #240
**Depends on:** [oia-maturity-model.md](oia-maturity-model.md) (#239)
**Precondition for:** #247 (Maturity Rubric v1)

---

## Purpose

This document provides the formal definition of each OIA layer as an independent assessment dimension for the OIA Maturity Model. Each definition specifies:

- **What the layer is** — one-sentence definition + clarifying paraphrase
- **What belongs in this layer** — in-criteria
- **What does not belong** — out-criteria
- **MECE boundary** — explicit boundary to neighboring layers
- **Assignment example** — one correct vs. one incorrect assignment

The definitions follow the MECE Principle (Minto): every OIA element belongs to exactly one layer, no gaps, no overlaps.

---

## L1 — AI & Cognitive Infrastructure

**Definition:** The technological execution environment — compute, storage, network, and AI models — on which all processing within the architecture runs.
*(The technical basis such as servers, databases, and AI models on which everything else operates.)*

### In-criteria
- Compute, storage, and network resources
- AI/ML models (LLMs, ML, deep learning, NLP, computer vision, RPA)
- Vector indexes and knowledge graph infrastructure (as technical platform, not content)
- Technical services and APIs provided by the infrastructure layer
- Organization-specifically trained or fine-tuned models (even if knowledge-adjacent — see boundary note)

### Out-criteria
- Business functions, capabilities, or goals → L5
- Concrete technical operations (search, classify, summarize) → L4
- Data content, documents, source systems → L2
- Semantic knowledge, entity models, relationships → L3
- Any element that carries business meaning or goal-directedness

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L2 Data Sources | L1 provides the environment to *connect and process* L2 — L2 contains the data, L1 runs the pipeline. A database server is L1; the database content is L2. |
| L4 Features | L1 is the technical substrate; L4 uses L1 to implement concrete functions. An LLM is L1; the `/summarize` API built on it is L4. |
| L3 Knowledge Core | L1 executes processing; L3 holds the result as structured meaning. A vector index as infrastructure is L1; the semantic entities modeled within it are L3. |

### Assignment Example
- ✅ **Correct:** "We use Azure OpenAI Service as our LLM infrastructure" → L1 (infrastructure component)
- ❌ **Incorrect:** "Our LLM knows our product catalog" → not L1; if structured and controlled, it belongs to L3 (Knowledge Core)

---

## L2 — Data Sources

**Definition:** System-bound primary sources for fragmented, raw data, documents, and operational representations — the original storage locations of organizational information.
*(The many individual systems in which information exists only in fragments and in isolation.)*

### In-criteria
- Databases, ERP systems, CRM systems, document management systems
- File stores, email archives, collaboration platforms
- APIs, web services, data feeds, external sources
- Logs, event streams, media and image repositories
- Code repositories, legacy systems
- Any primary source that contains raw, unprocessed organizational data

### Out-criteria
- Processed, structured, or semantically modeled knowledge → L3
- Cross-system consolidated semantic objects (Entities C1) → L3
- The pipeline that processes L2 data → C2
- The infrastructure that connects L2 sources → L1
- Use cases or business problems that motivate data access → L7

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L1 Infrastructure | L2 contains data; L1 enables access and processing. A SharePoint site is L2; the server hosting it is L1. |
| L3 Knowledge Core | L2 holds local, system-bound representations; L3 holds cross-system consolidated semantic objects. A customer record in CRM is L2; the unified Customer entity in the Knowledge Core is L3. |
| C2 Pipeline | L2 is the source; C2 is the transformation process. A document sitting in a file share is L2; the ingestion step that reads it is C2. |

### Assignment Example
- ✅ **Correct:** "Employee records in SAP HR" → L2 (primary data source, system-bound)
- ❌ **Incorrect:** "Our knowledge base of employee skills" → not L2 if structured and cross-system; belongs to L3

---

## L3 — Knowledge Core

**Definition:** The central, semantically structured, and controlled knowledge space in which organization-wide consolidated entities, relationships, and context information are modeled.
*(The place where a coherent and comprehensible overall picture of the organization emerges from scattered data.)*

### In-criteria
- Semantic entity models (Persons, Organizations, Locations, Products, etc.)
- Explicit relationships between entities
- Attributes and metadata of entities
- Controlled, versioned, auditable knowledge structures
- Knowledge graphs and semantic networks of organizational content
- Any explicitly modeled, cross-system organizational knowledge

### Out-criteria
- Raw, unprocessed source data → L2
- Infrastructure components that store or index the Knowledge Core → L1
- Technical functions that access the Knowledge Core → L4
- Implicit knowledge in AI model weights → L1 (even if organization-specific)
- Use cases that consume knowledge → L5, L6, L7

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L2 Data Sources | L2 contains source-specific representations; L3 contains cross-system semantic objects. The same "person" in 10 systems is 10 L2 records; one unified Person entity is L3. |
| L1 Infrastructure | L1 provides the execution environment; L3 holds the meaning. A vector database as platform is L1; the semantically modeled knowledge stored in it is L3. |
| L4 Features | L3 stores meaning; L4 accesses and processes it. The entity model of a product is L3; the `/search` function that queries it is L4. |
| C2 Pipeline | C2 transforms raw data into structured content that feeds L3; L3 is the destination, not the process. |

### Assignment Example
- ✅ **Correct:** "Unified product catalog with linked supplier and project relationships" → L3 (cross-system semantic model)
- ❌ **Incorrect:** "Our SharePoint wiki" → not L3 unless explicitly modeled, versioned, and cross-system; otherwise L2

---

## L4 — Features & APIs

**Definition:** Context-independent, API-based technical functions for processing data and knowledge — standardized, reusable operations without their own goal-directedness.
*(Individual building blocks such as search, classification, or summarization that execute specifically without deciding what is useful.)*

### In-criteria
- Search, classification, extraction, summarization, calculation, OCR, translation
- Any reusable technical API operation callable by higher layers
- Functions that are context-independent and deterministic/controllably executable
- Building blocks that process L2 data or L3 knowledge without applying business goals

### Out-criteria
- Business-goal-directed application of functions → L5
- The infrastructure running the functions → L1
- Knowledge or data being processed → L2, L3
- Orchestration of multiple functions for a concrete task → L5, L6
- Any element that requires context or goal-awareness to be useful

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L1 Infrastructure | L1 is the substrate; L4 is the function built on it. An LLM endpoint is L1; `/summarize` built on that endpoint is L4. |
| L5 Capabilities | L4 executes operations without goals; L5 orchestrates them toward a business effect. "Classify this document" is L4; "Support procurement decision-making" is L5. |
| L6 Applications | L4 provides building blocks; L6 orchestrates them in a user context. The translation API is L4; the multilingual customer portal using it is L6. |

### Assignment Example
- ✅ **Correct:** "REST endpoint `/api/extract-entities`" → L4 (context-independent, reusable function)
- ❌ **Incorrect:** "AI assistant that helps HR find candidates" → not L4; combines multiple capabilities toward a goal → L6

---

## L5 — Cognitive Capabilities

**Definition:** Goal-directed, context-dependent abilities for generating effect through the use of knowledge and technical functions — expressed in business terms, independent of specific implementations.
*(What a system or organization can do to achieve a desired result in a concrete situation.)*

### In-criteria
- Named abilities expressed in business language: "Analyze information", "Evaluate options", "Generate content", "Link knowledge", "Support decisions"
- Orchestrations of multiple L4 functions toward a business goal
- Capabilities that are technology-independent and more stable than their implementations
- Abilities that require context to be meaningful

### Out-criteria
- Concrete technical operations → L4
- Applications or tools that implement capabilities → L6
- Business outcomes produced by capabilities → L10
- Infrastructure that enables capabilities → L1
- Use cases that motivate capabilities → L7

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L4 Features | L4 executes; L5 pursues goals. The `/summarize` function is L4; "Support executive briefing preparation" is L5. |
| L6 Applications | L5 describes the ability; L6 implements the ability concretely in a context. "Link knowledge across projects" is L5; "Project Intelligence Dashboard" is L6. |
| L10 Business Outcome | L5 enables action potential; L10 is the actual change in reality produced when actors apply that potential. |

### Assignment Example
- ✅ **Correct:** "Identify regulatory conflicts across contracts" → L5 (goal-directed, context-dependent ability)
- ❌ **Incorrect:** "Compliance management system" → not L5; it is the application implementing the capability → L6

---

## L6 — Solutions, Applications & Tools

**Definition:** Orchestration and interaction units for the concrete application of Capabilities in the context of Situations — systems or tools in which capabilities are combined and executed for real tasks.
*(The systems or tools in which capabilities are combined and used to implement real tasks.)*

### In-criteria
- User interfaces, workflows, automated systems, agentic execution units
- Any system that orchestrates multiple capabilities toward a concrete task
- Applications that combine L4 functions and L5 capabilities to solve L7 use cases
- Both human-facing and automated/system-facing implementations

### Out-criteria
- Abstract capabilities without concrete implementation → L5
- Individual technical functions → L4
- The use case or problem being solved → L7
- The context determining how the application is used → L8
- Business outcomes produced by the application → L10

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L5 Capabilities | L5 is the "what can be done"; L6 is the "where and how it is done concretely". "Document analysis capability" is L5; "Contract Review Tool" is L6. |
| L7 Use Cases | L7 defines the need; L6 fulfills it. "Finding relevant precedents quickly" is L7; "Legal Research Assistant" is L6. |
| L8 Situation | L8 determines the context; L6 operates within it. The situation "urgent deadline, remote user, mobile device" is L8; the mobile-optimized briefing tool is L6. |

### Assignment Example
- ✅ **Correct:** "Chatbot for internal IT helpdesk" → L6 (orchestrates capabilities, context-aware, user-facing)
- ❌ **Incorrect:** "Ability to answer employee questions" → not L6; describes a capability → L5

---

## L7 — Use Cases & Challenges

**Definition:** Concrete tasks and problems from the real world that must be solved in a situation — the actual concerns, challenges, and tasks that persons or systems face.
*(The actual concerns, challenges, and tasks that people or systems face.)*

### In-criteria
- Concrete organizational challenges or problem descriptions
- Situations where an actor needs to accomplish something
- Stated needs that motivate the use of capabilities and applications
- Dynamic, situational tasks (not predefined workflows — those belong to L6)

### Out-criteria
- The capability that solves the use case → L5
- The application implementing the solution → L6
- The context framing the use case → L8
- The outcome produced by solving the use case → L10
- Abstract organizational goals or strategies

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L5 Capabilities | L7 describes the problem; L5 describes the ability to solve it. "Can't find relevant expertise quickly" is L7; "Expert discovery capability" is L5. |
| L6 Applications | L7 defines the need; L6 fulfills it. "Employees need to onboard faster" is L7; "Onboarding Assistant" is L6. |
| L8 Situation | L8 is the context frame; L7 is the specific task within that frame. "New employee, first week, remote" is L8; "Find relevant onboarding documents" is L7. |
| L10 Outcome | L7 states what must be solved; L10 states what actually changed when it was solved. |

### Assignment Example
- ✅ **Correct:** "Sales team cannot find current pricing for custom configurations" → L7 (concrete challenge)
- ❌ **Incorrect:** "Improve sales efficiency" → not L7; too abstract; not a concrete task in a situation → remains a strategic goal

---

## L8 — Situation & Context

**Definition:** The concrete, action-determining state that governs the selection, interpretation, and application of capabilities — the primary control mechanism for action and decision.
*(The current situation that determines which action is meaningful and how knowledge is used.)*

### In-criteria
- Time, place, domain, task, role, access level, language, preferences
- Environmental conditions, constraints, and priorities active in a moment
- The situationally relevant excerpt of knowledge (Context as activated subset of L3)
- Governance and compliance conditions active in a given situation

### Out-criteria
- The knowledge itself → L3
- The use case being executed within the situation → L7
- The capabilities deployed → L5
- The actor executing the action → L9
- Permanent organizational structures or roles (not situational) → L9

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L3 Knowledge Core | L3 holds all available knowledge; L8 determines which subset is relevant right now. "The product knowledge base" is L3; "The customer is in Germany, needs GDPR-compliant information" is L8. |
| L7 Use Cases | L7 is the task; L8 is the frame in which the task occurs. "Find a supplier" is L7; "Urgent need, budget frozen, EU-only constraint" is L8. |
| L9 Participants | L9 defines roles; L8 defines the active state. "Procurement Manager" is L9; "Acting as procurement manager with approval authority on this day for this contract" is L8. |

### Assignment Example
- ✅ **Correct:** "User is a non-native English speaker on a mobile device under time pressure" → L8 (situational parameters governing which capabilities and formats are relevant)
- ❌ **Incorrect:** "User profile: job title = Engineer" → not L8 alone; static role information belongs to L9; L8 is the active, time-bound state

---

## L9 — System Participants

**Definition:** The roles of stakeholders with respect to responsibility, execution, and effect within an action system — making visible who initiates, who acts, and who is affected.
*(Who initiates something, who implements it, and who experiences the effects.)*

### In-criteria
Three structurally distinct roles:
- **Initiator:** defines the use case, sets goals, bears responsibility for the intended effect ("Why is action taken?")
- **Actor:** executes the action — can be human, system, or agentic instance ("How is action taken?")
- **Beneficiary:** experiences the effects — can be customer, employee, organization, or system ("Who is affected?")

### Out-criteria
- Capabilities used by actors → L5
- Applications operated by actors → L6
- Situations in which actors operate → L8
- Outcomes experienced by beneficiaries → L10
- Organizational hierarchies or org charts (structural, not role-functional)

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L6 Applications | L6 is the tool; L9 is who uses it. "Knowledge Assistant" is L6; "HR Business Partner using it to support employees" is L9 (Actor + Beneficiary). |
| L8 Situation | L8 is the active state; L9 is the structural role. "Procurement Manager" is L9; "Procurement Manager currently approving a contract under time pressure" activates L8. |
| L10 Outcome | L9 attributes outcome to roles; L10 describes the outcome itself. "The customer received faster service" is L10; "Customer as Beneficiary" is L9. |

### Assignment Example
- ✅ **Correct:** "IT department as Initiator, AI agent as Actor, employee as Beneficiary in an automated onboarding flow" → L9 (role triad with clear attribution)
- ❌ **Incorrect:** "The chatbot answers questions" → not L9; the chatbot as a system is an Actor (L9), the function it performs is L5/L6

---

## L10 — Business Outcome

**Definition:** The actual, context-dependent effect of actions in the real world — the change in reality produced when capabilities are applied by actors in a concrete situation, serving as the reference point for evaluating the entire architecture.
*(What concretely changes through decisions and actions, and shows whether the system works.)*

### In-criteria
- Measurable changes in organizational reality: time saved, decisions improved, errors reduced, revenue generated, costs avoided
- Effects experienced by beneficiaries (L9)
- Results that validate whether the architecture is working
- Both lagging outcomes (revenue, NPS) and leading indicators (adoption rate, task completion time)

### Out-criteria
- Capabilities that produced the outcome → L5
- Applications through which actors achieved the outcome → L6
- Actors who produced or experienced the outcome → L9
- Use cases that were solved to produce the outcome → L7
- Strategic goals or aspirations not yet measured in reality

### MECE Boundary

| Neighbor | Boundary rule |
|---|---|
| L5 Capabilities | L5 is the potential; L10 is the actualized effect. "Ability to find information faster" is L5; "Average search time reduced from 45 min to 8 min" is L10. |
| L7 Use Cases | L7 is the unsolved problem; L10 is the solved result. "Sales team can't find pricing" is L7; "Quote generation time reduced by 60%" is L10. |
| L9 Participants | L9 attributes roles; L10 describes what changed. "Customer as Beneficiary" is L9; "Customer satisfaction score increased by 12 points" is L10. |

### Assignment Example
- ✅ **Correct:** "Time-to-decision in procurement reduced from 5 days to 1 day" → L10 (real-world change, measurable)
- ❌ **Incorrect:** "Better decisions" → not L10; not measurable, not grounded in reality; must be operationalized before it qualifies

---

## MECE Test — Full Architecture

The following table summarizes the full layer stack and confirms no element can belong to two layers simultaneously:

| Layer | Contains | Does NOT contain |
|---|---|---|
| L1 Infrastructure | Compute, models, technical services | Data content, functions, capabilities |
| L2 Data Sources | Raw source data, system-specific records | Processed/modeled knowledge, pipeline |
| L3 Knowledge Core | Semantic entities, relationships, controlled knowledge | Raw data, infrastructure, functions |
| L4 Features & APIs | Context-independent technical functions | Goals, orchestration, infrastructure |
| L5 Capabilities | Goal-directed, tech-independent abilities | Concrete implementations, outcomes |
| L6 Applications | Orchestrating implementations in context | Abstract abilities, use cases, outcomes |
| L7 Use Cases | Concrete real-world tasks and challenges | Solutions, capabilities, context frames |
| L8 Situation & Context | Active, time-bound contextual state | Permanent roles, knowledge, tasks |
| L9 Participants | Role attribution (Initiator/Actor/Beneficiary) | Applications, capabilities, outcomes |
| L10 Business Outcome | Real-world change, measurable effect | Potential, capability, aspiration |

**No-gap check:** Every OIA element belongs to exactly one row above. The chain L2→C2→L3 covers all data-to-knowledge transformation. C1 (Entities) is the output of C2 and the input to L3 — not a standalone layer, but the bridge concept between them.

---

## Cross-Cutting Concepts (C1, C2)

C1 and C2 are not assessment layers in the Maturity Model — they are architectural concepts that span layers.

- **C2 — Data Processing Pipeline:** The transformation process that moves data from L2 to L3. Assessed through the maturity of L2 (source quality) and L3 (knowledge quality), not as a standalone dimension.
- **C1 — Organizational Entities:** The semantic output of C2 processing — Persons, Organizations, Locations, Products, Materials, Projects, Activities, Events. These are modeled in L3 as the central objects of the Knowledge Core.
