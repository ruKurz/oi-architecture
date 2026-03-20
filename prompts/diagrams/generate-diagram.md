# OIA · Generate Architecture Diagram (Image)

**Prompt type:** Generation
**Domain:** BIZ

> This is an image generation prompt — use with AI image tools (e.g. DALL-E, Midjourney, Stable Diffusion).
> For evolving the data-driven diagram in code, use `prompts/development/evolve-model.md` instead.

---

## Context

This prompt generates a **static image** of the Organizational Intelligence Architecture (OIA) model for use in publications, LinkedIn posts, and CIO-level presentations.

Relevant files (for terminology and layer definitions — do not inline content):
- `context/oia-context.md` — canonical layer names, terminology, architecture overview
- `context/agent/oia-project-instruction-prompt.md` — target audience (CIO, Enterprise Architect), mission, visual positioning

The OIA model has a fixed nine-layer structure (bottom → top) plus a left-side System Development dimension and feedback loops. These must appear in every generated image.

## Goal

Generate a high-resolution, publication-ready enterprise architecture diagram image of the OIA model that accurately reflects all nine layers, the left-side dimension, and the feedback loops — suitable for CIO presentations and LinkedIn.

## Constraints

- Does **not** modify any project files — output is an image, not code or data
- Does **not** touch `oia-model.json` or the interactive HTML renderer
- Does **not** redefine or rename OIA terminology — use canonical terms from `context/oia-context.md` exclusively
- Layer content and order must match the model exactly — no additions, no omissions, no reordering
- For model content changes (new layers, renamed elements): update `oia-model.json` first via `prompts/development/evolve-model.md`, then regenerate the image

## Acceptance criteria

- All nine layers visible in correct bottom-to-top order: Data Sources → Processing Pipeline → Knowledge Core → Features/APIs → Cognitive Capabilities → Solutions/Applications → Use Cases → Situation Layer → Actors
- Left-side System Development dimension (User Interaction, Context Understanding, Feature Orchestration, Model Improvement) is present
- Feedback loops (Applications → Knowledge Core, Agents → Knowledge Core, Users → Knowledge Core) are indicated
- Visual style: dark blue background, white typography, no artistic scenes, no brains, no cyberpunk imagery
- Output: high-resolution image suitable for publication (min. 1920 px wide) and LinkedIn (aspect ratio approximately 16:9 or 4:3)

---

Create a **clean enterprise architecture diagram** titled:

**Organizational Intelligence Architecture (OIA)**
Subtitle: **How organizations turn knowledge into action**

The diagram must look like a **modern enterprise architecture framework used in strategy and CIO presentations.**

## Style

- dark blue background
- white typography
- thin connection lines
- subtle glowing highlights
- clean grid layout
- structured architecture blocks
- professional infographic style
- no artistic scenes
- no brains
- no cyberpunk visuals
- no factories
- no cinematic imagery

The diagram must look like a **structured enterprise reference architecture.**

---

# Architectural Structure (Strict Layer Order)

The architecture is layered from **bottom → top**.

Use **clear horizontal layers.**

---

# 1. Data Sources (Bottom Layer)

Represent the raw organizational data.

Include the following elements:

- Persons
- Organizations
- Locations
- Projects
- Customers
- Materials
- Media
- Rules
- Logs
- Systems

Add small icons for each data category.

---

# 2. Data Processing Pipeline

Show a horizontal processing flow above the data sources.

Pipeline steps:

**Data Ingestion → Processing → Cleansing → Validation**

Use arrows between each step.

This pipeline prepares raw data for the knowledge system.

---

# 3. Organizational Knowledge Core (Central Layer — Highlighted)

This is the **central architectural component.**

Visually emphasize this layer (slight glow or frame).

Structure it as stacked internal layers:

**Organizational Knowledge Core**

Inside the core include the following internal components:

- Semantic Layer
- Index Layer
- Knowledge Graph
- Vector Index
- Security
- Access Control
- API Gateway

This component represents the **organizational knowledge memory.**

It must visually stand out from the other layers.

---

# 4. Features / APIs Layer

Above the Knowledge Core place the **Feature API layer.**

These are technical services that expose capabilities.

Include the following API endpoints:

- /search
- /classify
- /summarize
- /link
- /chat
- /create
- /analyze
- /transform
- /calc

These APIs connect applications and agents to the knowledge core.

---

# 5. Cognitive Capabilities Layer

This layer represents **organizational intelligence capabilities.**

Include the following capabilities:

- Find Information
- Evaluate Facts
- Structure Documents
- Link Knowledge
- Generate Content
- Identify Patterns
- Detect Redundancies
- Create Reports
- Communicate Knowledge

These represent **what the organization can cognitively do.**

---

# 6. Solutions / Applications Layer

Applications that employees and systems interact with.

Include these example systems:

- Enterprise Search
- Knowledge Assistant
- Maintenance Assistant
- Code Assistant
- Analytics Tools

Applications consume capabilities through APIs.

---

# 7. Use Cases / Organizational Challenges

Add a layer describing **business problems solved by the system.**

Include:

- HR Consulting
- Infrastructure Maintenance
- Software Development Support
- System Documentation
- Procurement Verification
- 24h Customer Support

These represent **organizational motivations.**

---

# 8. Situation Layer (Context)

This layer defines the **context of decisions.**

Include the following context attributes:

- Employee
- Event
- Time
- Place
- Domain
- Task
- Preferences
- Language
- Access

This context determines which knowledge and capabilities are relevant.

---

# 9. Actors Layer (Top Layer)

Two actor groups must appear side-by-side:

**Users**
**Agents**

Users include:

- Employees
- Developers
- Analysts
- Decision Makers

Agents include:

- AI Assistants
- AI Agents
- Autonomous Systems

Both actors interact with:

- Applications
- Capabilities
- APIs
- Knowledge Core

---

# Left Side: System Development & Interaction Dimension

On the **left side of the diagram**, show a vertical column describing **how the system is built and evolves.**

Divide this column into sections.

## User Interaction

- Login
- User Profile
- Click-Through
- Input / Output

## Context Understanding

- Intent Detection
- Preference Detection
- Context Analysis

## Feature Orchestration

- Pipelines
- Workflows
- Business Logic
- Agents

## Model Improvement

- Training
- Fine-Tuning
- Optimization
- Monitoring

This side dimension represents **the lifecycle and development of the intelligence system.**

---

# Feedback Loops

Add subtle **dashed feedback loops** showing continuous improvement:

- Applications → Knowledge Core
- Agents → Knowledge Core
- Users → Knowledge Core

Also add:

**Capabilities improving over time**

---

# Visual Guidelines

Ensure:

- clean structured architecture
- evenly spaced layers
- clear hierarchy
- thin connection lines
- readable typography
- small icons for data, APIs, users and agents
- no redundant labels
- no duplicated terms
- all layers clearly visible

The final result should look like a **professional enterprise AI architecture reference diagram suitable for CIO presentations.**

High resolution
Clean layout
Architecture infographic style
