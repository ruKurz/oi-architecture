# OIA Governance

## Current Model: Benevolent Dictator

OIA is currently maintained by a single maintainer. All decisions about direction, content, and process rest with the maintainer.

This is not ambiguity — it is a deliberate choice for a project in its early phase. Stating it explicitly is more useful than leaving it implied.

**Maintainer:** Rüdiger Kurz
**Contact:** kurz@vnc-online
**Profile:** [LinkedIn](https://www.linkedin.com/in/ruedigerkurz/)

## How Decisions Are Made

**Day-to-day changes** (content, fixes, tooling) are made directly by the maintainer.

**Significant decisions** — those that affect project structure, tooling, or process with non-obvious trade-offs — are documented as Architecture Decision Records (ADRs) in [`decisions/`](decisions/README.md). ADRs are the primary record of why the project is the way it is.

**Community input** is welcome at any time via GitHub Issues and Pull Requests. Contributions are reviewed by the maintainer. There is no committee, no vote, no roadmap committee.

## ADR Acceptance

Only the maintainer sets an ADR status to `Accepted`. AI tooling and external contributors create ADRs in `Proposed` state. A `Proposed` ADR is active and followed — it means "awaiting human sign-off", not "not yet in use".

## How the Governance Model Can Evolve

If OIA grows a sustained contributor community, governance can evolve in stages:

1. **Solo maintainer** (current) — full authority, fast decisions
2. **Core contributors** — 2–5 people with commit access and shared decision-making on direction
3. **Steering committee** — formal governance body for major version decisions and community direction

Each stage requires a new ADR documenting the change. There is no timeline — evolution follows demonstrated need, not wishful thinking.

## Code of Conduct

See [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
