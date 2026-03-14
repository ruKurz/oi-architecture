# ODR-0001: OIA Ecosystem Type — Community-Driven with Benevolent Dictator

**Decision:** OIA operates as a **community-driven open project** under a benevolent dictator governance model: contributions are open to all, the project is not controlled by any vendor or commercial interest, and the maintainer holds final decision authority while actively working toward broader governance participation over time.
**Status:** Proposed
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All

## Context

Every open project operates within an ecosystem model — explicitly or implicitly. For OIA, this choice has direct consequences for governance structure, contribution rules, roadmap authority, licensing, and the relationship with external contributors.

Three fundamental models exist:

**Vendor-driven:** A single company or commercial entity controls the roadmap. Community contributions are welcome but secondary to the vendor's interests. Examples: many enterprise open-source projects with a dominant commercial backer.

**Consortium-driven:** A group of organizations co-governs the project under a shared charter. Decision authority is distributed across members. Examples: CNCF projects, Eclipse Foundation members.

**Community-driven:** Governance emerges from the contributor community. No single commercial entity controls the roadmap. Decisions are made transparently and the project is accountable to its contributors. Examples: Linux kernel, many Apache projects.

OIA's founding thesis is about *organizational intelligence* — how organizations make knowledge operational, accessible, and usable across human and AI participants. A project that argues for open, transparent organizational structures while being secretly vendor-controlled would contradict its own thesis.

Additionally: OIA is at an early stage (v0.1.0). Consortium governance requires infrastructure and coordination overhead that is not yet warranted. The project currently has a single maintainer (Rüdiger Kurz).

## Consequences

**For Users:** OIA's direction is not controlled by any vendor's product interests. Users can trust that the model reflects the best available understanding of organizational intelligence, not a commercial agenda.

**For Agents:** AI systems acting within or referencing OIA can treat its content as an independently governed knowledge resource, not a proprietary framework.

**Easier:** Contributions from individuals and organizations with diverse interests are structurally welcome. Licensing (MIT + CC BY 4.0) and governance are consistent with community-driven expectations.

**Harder:** A benevolent dictator model requires the maintainer to actively work against the natural tendency toward unilateral decisions. Over time, governance will need to expand as the contributor base grows.

**Required adjustments:**
- `GOVERNANCE.md` documents the benevolent dictator model explicitly — this ODR is the governing rationale behind it
- The ecosystem type must be considered when making decisions about partnerships, integrations, and sponsorships
- Future ODRs or ADRs that affect project direction must be consistent with the community-driven commitment

## Alternatives

| Option | Reason rejected |
|---|---|
| Vendor-driven | Contradicts OIA's thesis of transparent organizational intelligence. Commercial control would compromise the model's independence and credibility. |
| Consortium-driven | Premature at v0.1.0. The coordination overhead of consortium governance is not warranted at this stage. Can be revisited when the contributor base reaches sufficient scale. |
| Fully flat community governance (no maintainer authority) | Incompatible with a single-maintainer project at this stage. Without clear decision authority, small projects stall on contested decisions. The benevolent dictator model provides clarity while remaining open. |

## Related decisions

| Record | Relationship |
|---|---|
| [ADR-0012](../0012-introduce-odr-governance-layer.md) | Architectural decision that introduced the ODR layer |
| [ADR-0002](../0002-biz-dev-separation.md) | BIZ/DEV separation — this ODR is a BIZ artifact |
| [GOVERNANCE.md](../../GOVERNANCE.md) | Operational implementation of this decision |
