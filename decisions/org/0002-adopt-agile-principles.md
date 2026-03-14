# ODR-0002: Adopt Agile Software Development Principles

**Decision:** OIA development follows the principles of the Agile Manifesto (2001) as its operating model — accepting the process overhead as the cost of a deliberate risk-minimization strategy, with adaptations for the single-maintainer context.
**Status:** Proposed
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All

## Context

Software projects make an organizational choice about how they manage uncertainty, change, and delivery risk — even when that choice is never stated. OIA has operated with sprint-based development, iterative delivery, and issue-driven task tracking from the start. This ODR makes that implicit choice explicit and binding.

The Agile Manifesto (Beck et al., 2001) articulates four value pairs and twelve principles that collectively describe an adaptive, human-centered approach to software development. The core insight relevant here:

> Responding to change over following a plan.

In a project like OIA — where the model itself is being discovered, not specified — agile principles are not just a process preference. They are a structural fit: the architecture evolves as understanding deepens, and rigid up-front planning would lock in premature decisions.

**Risk-minimization framing:** Adopting agile is a deliberate risk-management decision. Agile practices — short feedback loops, small increments, continuous integration — reduce the risk of building the wrong thing for a long time. This risk reduction has a cost: process overhead (planning, retros, issue hygiene, sprint reviews). That tradeoff is consciously accepted.

**Single-maintainer adaptations:** The Agile Manifesto assumes a team. OIA currently has a single human maintainer. Some practices are adapted accordingly:
- "Individuals and interactions" → maintainer + AI tooling as a development pair
- "Customer collaboration" → community feedback via GitHub Issues and the ODR-0001 community-driven model
- "Responding to change" → scope changes within and between sprints are normal, not failures

## Consequences

**For Users:** Development is iterative and visible. The OIA model will change as understanding improves. Stability of core concepts (layer IDs, terminology) is protected by ADRs and BIZ/DEV separation, not by a rigid specification.

**For Agents:** AI tooling acting within this project — including Claude Code — must respect agile operating constraints: sprint scope is bounded, unconfirmed scope changes require explicit human sign-off (Checkpoint protocol), and process documents (prompts, sprint files) are binding artifacts.

**Easier:** Change is expected and accommodated. Contributors do not need to justify why something changed — only what changed and why the new direction is better.

**Harder:** Process discipline is required even with a single maintainer. Sprint planning, retros, and issue hygiene create overhead. The discipline pays off only if maintained consistently.

**Required adjustments:**
- Sprint-based development formalized via `prompts/development/sprint-retro.md` (and planned sub-prompts)
- GitHub Issues as the authoritative task tracker (ADR-0003) implements this ODR at the Arch layer
- Conventional commits (ADR-0005) implement the "working software" value at the Arch layer
- Future process changes must be evaluated against agile principles before adoption

## Alternatives

| Option | Reason rejected |
|---|---|
| Waterfall / plan-driven development | Incompatible with a project where the model is being discovered. Premature specification would lock in incorrect architectural decisions. |
| No explicit process (ad-hoc) | No traceability, no feedback loops, no ability to improve the process itself. Contradicts OIA's thesis of explicit organizational structure. |
| Full Scrum | Scrum assumes a team with defined roles (Scrum Master, Product Owner, Development Team). These roles do not map to a single-maintainer project without distortion. Agile principles — rather than a specific framework — provide the right level of abstraction. |
| Kanban-only | Kanban's continuous flow model lacks the sprint boundary that enables deliberate planning and retrospection. Sprint cadence is retained as a forcing function for reflection and scope control. |

## Related decisions

| Record | Relationship |
|---|---|
| [ADR-0012](../0012-introduce-odr-governance-layer.md) | Architectural decision that introduced the ODR layer |
| [ODR-0001](./0001-oia-ecosystem-type.md) | Establishes the community-driven model this ODR operates within |
| [ADR-0003](../0003-github-issues-as-task-tracker.md) | Arch-layer implementation: GitHub Issues as sprint task tracker |
| [ADR-0005](../0005-conventional-commits-with-content-type.md) | Arch-layer implementation: conventional commits as delivery discipline |
