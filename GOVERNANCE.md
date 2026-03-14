# OIA Governance

## Current Model: Benevolent Dictator

OIA is currently maintained by a single maintainer. All decisions about direction, content, and process rest with the maintainer.

This is not ambiguity — it is a deliberate choice for a project in its early phase. Stating it explicitly is more useful than leaving it implied.

**Maintainer:** Rüdiger Kurz
**Contact:** kurz@vnc-online
**Profile:** [LinkedIn](https://www.linkedin.com/in/ruedigerkurz/)

## How Decisions Are Made

**Day-to-day changes** (content, fixes, tooling) are made directly by the maintainer.

**Significant decisions** are documented in two layers in [`decisions/`](decisions/README.md):
- **Organizational decisions** (governance model, operating principles, language policy) → Organizational Decision Records (ODRs) in [`decisions/odr/`](decisions/odr/). This governance model is documented as [ODR-0001](decisions/odr/0001-oia-ecosystem-type.md).
- **Architectural decisions** (tooling, conventions, technical structure) → Architecture Decision Records (ADRs) in [`decisions/adr/`](decisions/adr/).

**Community input** is welcome at any time via GitHub Issues and Pull Requests. Contributions are reviewed by the maintainer. There is no committee, no vote, no roadmap committee.

## ADR and ODR Acceptance

Only the maintainer sets an ADR or ODR status to `Accepted`. AI tooling and external contributors create records in `Proposed` state. A `Proposed` record is active and followed — it means "awaiting human sign-off", not "not yet in use".

## How the Governance Model Can Evolve

If OIA grows a sustained contributor community, governance can evolve in stages:

1. **Solo maintainer** (current) — full authority, fast decisions
2. **Core contributors** — 2–5 people with commit access and shared decision-making on direction
3. **Steering committee** — formal governance body for major version decisions and community direction

Each stage requires a new ODR documenting the governance change (and corresponding ADRs for any structural implementation). There is no timeline — evolution follows demonstrated need, not wishful thinking.

## Code of Conduct

See [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
