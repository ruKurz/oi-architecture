# ADR-0005: Conventional Commits with Custom Content Type

**Decision:** The OIA project uses Conventional Commits with a custom `content:` type for BIZ-domain changes (OIA model updates, articles, diagrams, architecture content). All other types follow the standard specification. Every commit footer must reference a GitHub Issue (`Closes #N` or `Refs #N`), except for initial setup commits.
**Status:** Accepted
**Date:** 2026-03-11
**Type:** DEV
**Governed by:** [ODR-0002](../odr/0002-adopt-agile-principles.md)

## Context

Conventional Commits provides machine-readable commit history and maps naturally to BIZ/DEV separation (see ADR-0002). However, the standard specification does not include a type for content/domain changes — `docs:` conventionally means documentation updates, not OIA architectural content additions.

A custom `content:` type makes the BIZ domain explicit in git history: `content(model): add business outcome items to L10` is unambiguous, while `docs(model): add business outcome items to L10` implies documentation, not model evolution.

Quality attribute affected: traceability, maintainability (git history as communication tool).

## Consequences

**Easier:** Git log filtered by `content:` shows OIA model evolution; filtered by `feat:|fix:|chore:` shows DEV progression; changelogs can be generated per domain; BIZ/DEV commit separation is enforced by convention.
**Harder:** Contributors must learn the custom `content:` type; a linter (commitlint) would need custom configuration to allow it; the `.gitmessage` template must list all valid types.
**Required adjustments:** `.gitmessage` commit template must include `content` in the type list; CONVENTIONS.md must document the full type table; `create-adr.md` commit suggestions use `docs(decisions):`.

## Alternatives

| Option | Reason rejected |
|---|---|
| Use `docs:` for content changes | Ambiguous — `docs:` in Conventional Commits means documentation, not domain content; would blur BIZ/DEV boundary |
| Use `feat:` for both DEV features and BIZ content | No domain signal; git log unreadable by concern |
| No commit convention | Status quo before this session — no linkage, no filtering, no changelog automation |
| Full commitlint with semantic-release | Overkill for a solo project; adds tooling complexity; can be added later without changing this decision |
