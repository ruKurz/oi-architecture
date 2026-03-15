# ADR-0017: Agent Skills (SKILL.md) as Portable Workflow Format

**Decision:** Adopt the Agent Skills SKILL.md format for reusable AI agent workflows. Skills live in `prompts/skills/` and follow the three-layer progressive disclosure model: discovery (frontmatter, ~50 tokens), activation (SKILL.md body, < 2000 tokens), execution (referenced project files, loaded on demand by the skill body).
**Status:** Proposed
**Date:** 2026-03-15
**Type:** DEV
**Governed by:** — *(for now — if an OIA-ODR mandates Skills as the delivery format for Cognitive Capabilities, this ADR will be updated to reference that record)*

## Context

The project's prompts in `prompts/development/` are full-context documents — they load entirely when referenced. As the number of workflows grows, this creates context overhead: every session loads all binding contracts (CLAUDE.md, CONVENTIONS.md, ADR index) even for single-issue tasks.

The Agent Skills standard (agentskills.io / SKILL.md format) solves this via progressive disclosure: only the skill name and description (~50 tokens) load at startup. Full instructions load only when the skill is triggered. Referenced project files (CONVENTIONS.md, decisions/README.md) load only when the workflow explicitly requires them.

Claude Code natively supports SKILL.md-based skills: it reads `name` and `description` from YAML frontmatter for discovery and loads the full body on trigger.

## Consequences

**Easier:** Portable, versioned, triggerable workflows; reduced per-session context overhead; the SKILL.md body is the single source of workflow logic; skills can be contributed and reviewed independently.
**Harder:** A new directory structure (`prompts/skills/`) and a new file format (SKILL.md) must be maintained alongside existing prompts in `prompts/development/`.
**Required adjustments:** CLAUDE.md must document the skill location and trigger convention. CONVENTIONS.md must define skill authoring rules. Existing prompts are not migrated retroactively — new reusable workflows use SKILL.md going forward. Any new skill file in `prompts/skills/` must still be created via `prompts/templates/prompt-helper.md` for the workflow-design step, but the output format is SKILL.md (not the standard prompt template).

## Alternatives

| Option | Reason rejected |
|---|---|
| Extend existing prompts in `prompts/development/` | No progressive disclosure; all content loads always; not portable across sessions or projects |
| CLAUDE.md sections as mini-skills | No selective loading; CLAUDE.md grows unboundedly; not independently triggerable |
