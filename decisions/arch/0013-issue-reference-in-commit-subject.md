# ADR-0013: Issue Reference in Commit Subject Line

**Decision:** Every commit subject line ends with `(#N)` — the GitHub Issue number in parentheses. The footer `Closes #N` / `Refs #N` is retained alongside it.
**Status:** Proposed
**Date:** 2026-03-28
**Type:** DEV
**Governed by:** [ODR-0002](../org/0002-adopt-agile-principles.md)

## Context

The current convention (ADR-0005) places the issue reference only in the commit footer (`Closes #N` / `Refs #N`). This is correct for GitHub auto-close and changelog tooling, but it makes `git log --oneline` output opaque: a reader cannot tell which issue a commit belongs to without reading the full message.

With feature branches introduced (ADR-0014), each branch corresponds to exactly one issue. Commits on that branch are naturally issue-scoped. Making the issue reference visible in the subject line reinforces this relationship and makes the log immediately navigable.

The industry standard for visible, log-friendly issue references is to append `(#N)` at the end of the subject line. This pattern is used by React, Vue, Angular, the Linux kernel PR process, and the majority of major open-source projects.

**Example — current:**
```
feat(renderer): add zoom constants

Closes #42
```

**Example — new:**
```
feat(renderer): add zoom constants (#42)

Closes #42
```

Quality attribute affected: traceability (log readability), contributor experience.

## Consequences

**Easier:** `git log --oneline` shows the issue number next to every commit. Branch history is navigable without opening individual commits. Cross-referencing commits and issues requires no extra tooling.

**Harder:** Subject line is slightly longer (4–7 chars for `(#N)`). The 50-character guideline becomes tighter for long scope+description combinations — requires more concise subject writing.

**Required adjustments:**
- CONVENTIONS.md §2.3: subject line format updated, example updated
- `.gitmessage` template updated if it contains an example subject
- All future commits follow the new format; existing commits are not retroactively changed

## Alternatives

| Option | Reason rejected |
|---|---|
| Prefix `#42 feat(scope):` | Breaks Conventional Commits parsers; type is no longer the first token; commitlint and semantic-release fail |
| Footer-only (current) | Issue reference invisible in `git log --oneline`; requires opening the full commit to find the linked issue |
| No issue reference in commits | No traceability; contradicts ADR-0003 (GitHub Issues as task tracker) |
