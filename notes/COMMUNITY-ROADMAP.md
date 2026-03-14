# OIA Community Roadmap

> Adapted from: DB Cognitive Computing Open Source Center Discussion Paper (2016)
> Applied to: Organizational Intelligence Architecture (OIA)

This document translates the 3-phase open source community activation model into an OIA-specific roadmap. It is a living strategy document, not a task list — task-level work is tracked as GitHub Issues.

---

## Phase I — OSS Project Launch

**Goal:** Everything a first visitor needs is in place. The repo is self-explanatory.

**Status:** In progress (pre Going Public)

### Infrastructure

| Item | Status |
|---|---|
| GitHub repository (public) | 🔲 pending |
| LICENSE — MIT (code) + CC BY 4.0 (content) | 🔲 #38 |
| README.md — clear, honest, oriented for 3 personas | 🔲 #41 |
| CONTRIBUTING.md — architecture of participation | 🔲 #39 |
| GOVERNANCE.md — who decides what | 🔲 #40 |
| SECURITY.md — vulnerability reporting | 🔲 #26 |
| OIA Diagram (publishable) | 🔲 #5 |
| GitHub Pages (oia-site live) | 🔲 pending |
| GitHub Issues as tracker (ADR-0003) | ✅ done |
| Conventional Commits (ADR-0005) | ✅ done |
| `good first issue` labels on 2–3 issues | 🔲 |

### Documentation (30-minute rule)

A first-time visitor — developer, enterprise architect, or CIO — must be able to understand the value, structure, and contribution process within 30 minutes.

**Three entry personas:**
- **Developer** → oia-site code, JSON model, CONTRIBUTING.md
- **Enterprise Architect / CIO** → OIA model layers, diagram, articles
- **Contributor** → issues, CONTRIBUTING.md, good first issues

### Soft Launch Campaign (end of Phase I)

- LinkedIn post: "OIA is now open source" — include diagram, repo link, one concrete implementation story
- Announce in 2–3 relevant LinkedIn groups / communities (Enterprise Architecture, Knowledge Management, AI in Enterprise)
- Personal network activation: direct messages to 10–15 people who will engage

---

## Phase II — Community Engagement (PUSH)

**Goal:** Actively bring the right people to the project. The community does not yet pull on its own.

**Trigger:** Phase I infrastructure is complete + first public release (v0.1.0)

### Target Groups (OIA-specific)

The original DB paper listed 7 generic groups. For OIA:

| Target Group | What they get | How to reach them |
|---|---|---|
| **Enterprise Architects** | Reference model, decision support vocabulary | LinkedIn, EA community forums |
| **CIOs / IT Leadership** | Strategic framing for AI investment decisions | LinkedIn articles, speaking slots |
| **Knowledge Management practitioners** | Validation of their domain in the AI era | KM communities, conferences |
| **AI/ML Engineers** | Architectural context for technical implementations | GitHub, LinkedIn tech posts |
| **Open Source contributors** | Meaningful content to contribute to (model, diagrams, articles) | GitHub, OSS communities |
| **Researchers / Academics** | Framework to reference in papers on organizational AI | Academia channels, ResearchGate |

### Push Promotion

- Blog / LinkedIn article series (one per OIA layer, starting with Knowledge Core and Data Layer)
- Development roadmap published in GitHub (Milestones or Projects board)
- Speaker submissions: EA conferences, KM summits, AI enterprise events
- White papers / long-form articles (based on article drafts in `articles/`)

### Evangelising Principle (Thought Doership)

Every push item must contain operational scar tissue — concrete implementation experience, failure modes, lessons learned. No framework descriptions without operational anchoring. See `context/oia-project-instruction-prompt.md` → Thought Doership.

---

## Phase III — Community Activation (PUSH + PULL)

**Goal:** The community generates activity on its own. Contributors arrive without being personally recruited.

**Trigger:** Phase II has generated visible traction (stars, forks, issues from strangers, inbound LinkedIn comments)

### Pull Mechanisms

- GitHub Discussions enabled (Q&A, ideas, model discussions)
- Community-submitted use cases and model extensions
- Regular community call or async update (quarterly)
- `good first issue` + `help wanted` labels actively maintained

### Business Value Demonstration

- Case studies / testimonials from practitioners who applied OIA
- "Used by" section in README (logos, links, references)
- Workshops: OIA walkthroughs with real organisations (documented as blog posts)

### Ecosystem Evolution

OIA starts as a **solo/maintainer-driven** project. Growth path:

```
Solo maintainer (now)
  → Named contributors with commit rights (Phase II end)
    → Advisory circle / community council (Phase III)
      → Consortium model if adoption warrants (open question)
```

See issue #42 for the ecosystem type decision.

---

## What We Are Not Doing

To keep scope manageable:

- **No dedicated community platform** (Slack, Discord) before Phase II has real traction — GitHub Issues + Discussions is sufficient
- **No events/hackathons** before Phase II — premature investment
- **No social media accounts** beyond LinkedIn — too scattered for the current stage
- **No formal consortium** until there are external organisations with strategic interest

---

*Source: DB Cognitive Computing Open Source Center Discussion Paper, 2016 — adapted March 2026*
*Owner: Rüdiger Kurz · Review: before each phase transition*
