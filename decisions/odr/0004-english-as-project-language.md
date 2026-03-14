# ODR-0004: English as the Sole Project Language

**Decision:** All OIA project artifacts are written in English. The only exception is LinkedIn articles, which remain in German as an explicit author choice for a German-speaking professional audience. This rule applies to all participants — Users, Agents, and Contributors.
**Status:** Proposed
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All
**Derives from:** [ODR-0001](./0001-oia-ecosystem-type.md)
**Implements:** — (operational implementation via CONVENTIONS.md §2.2 and ADR-0001 naming conventions)

> **Note on supersession:** This ODR supersedes the language section of [ADR-0001](../adr/0001-language-and-naming-conventions.md) and [ADR-0011](../_obsolete/0011-english-as-project-language.md). The naming conventions from ADR-0001 remain active at the Arch layer.

## Context

OIA operates as a community-driven open project (ODR-0001). A community-driven project with international contributors requires a common working language. Without an explicit language decision, artifacts drift toward the author's native language — creating a barrier to contribution and a cognitive switching cost for every reader navigating between German and English content.

Two pressures shaped this decision:

1. **Internationalization:** The project's community-driven model (ODR-0001) requires that all participants — human contributors, AI agents, and users — can navigate the project without language barriers. German-only or mixed-language artifacts restrict participation to German speakers.

2. **Agent readability:** AI systems acting within OIA consume prompts, ADRs, ODRs, and CLAUDE.md as machine-readable contracts. Mixed-language artifacts increase the probability of misinterpretation at the language boundary.

The LinkedIn exception is an explicit author choice, not an inconsistency: the target audience for LinkedIn content is German-speaking professionals in the DACH region. Forcing English there would reduce content quality and authenticity without adding project value.

**Historical note:** The language section of ADR-0001 (2026-03-11) initially allowed German for content artifacts. ADR-0011 (2026-03-13) moved all non-LinkedIn artifacts to English. This ODR elevates that decision to the Org layer, where language policy belongs.

## Consequences

**For Users:** All documentation, ADRs, ODRs, and operational content is readable without German. The only German-language artifacts are LinkedIn articles, which are explicitly audience-targeted.

**For Agents:** All agent-facing artifacts (CLAUDE.md, prompts, ADRs, ODRs) are in English. No language ambiguity at the machine-readable layer.

**Easier:** Single mental model for all contributors — no per-file language decision. Onboarding cost for non-German contributors is zero. Agent instructions and project conventions are consistent.

**Harder:** Existing German files in `context/`, `notes/`, and legacy `prompts/` are known exceptions — they are not retroactively translated; new files follow this convention strictly.

**Required adjustments:**
- CONVENTIONS.md §2.2 documents the operational rule
- `prompts/` directory: English on creation or next significant edit
- `context/` and `notes/` files: English on next significant edit

## Alternatives

| Option | Reason rejected |
|---|---|
| German for all content artifacts | Incompatible with ODR-0001 community-driven model; restricts international contribution |
| Per-artifact language decision | Reintroduces Denglish drift; adds decision overhead per file; creates inconsistency for agents |
| Translate LinkedIn articles to English | Target audience is German-speaking; translation reduces quality and authenticity |
| No language policy | Status quo before ADR-0001 — caused mixed-language artifacts and repeated decision overhead |

## Related decisions

| Record | Relationship |
|---|---|
| [ODR-0001](./0001-oia-ecosystem-type.md) | Derives from — community-driven model requires international accessibility |
| [ADR-0001](../adr/0001-language-and-naming-conventions.md) | Arch-layer naming conventions remain active; language section superseded by this ODR |
| [ADR-0011](../_obsolete/0011-english-as-project-language.md) | Superseded — Arch-layer record that this ODR replaces at the Org layer |
