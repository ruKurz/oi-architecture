# ADR-0001: Language and Naming Conventions

**Decision:** All technical artifacts (code, comments, commits, filenames, ADRs, documentation) are written in English. OIA content artifacts (articles, LinkedIn posts) remain in German as an author choice. TypeScript follows camelCase for variables/functions, PascalCase for types, SCREAMING_SNAKE_CASE for enums and module-level constants.
**Status:** Accepted
**Date:** 2026-03-11
**Type:** DEV

## Context

The project mixes two languages: German (author's native language, target audience for OIA articles) and English (industry standard for code and technical documentation). Without explicit rules, files and identifiers mixed languages inconsistently — README.md was English, `context/` files were mixed, prompts were German, code was English.

Quality attribute affected: maintainability, portability (non-German contributors cannot read mixed German/English code).

## Consequences

**Easier:** Consistent codebase readable by international contributors; ADRs and commit messages follow standard open-source conventions; no decision fatigue per file about which language to use.
**Harder:** Authors must switch mental context between German (article writing) and English (code/ADR writing); German prompts in `prompts/` directory are a documented exception requiring discipline.
**Required adjustments:** Existing mixed-language comments and variable names are treated as known exceptions (not retroactively renamed); new code follows the convention strictly.

## Alternatives

| Option | Reason rejected |
|---|---|
| All German | Code would be unreadable for non-German developers; contradicts industry standard |
| All English | OIA articles are authored in German for a German-speaking LinkedIn audience; forcing EN would reduce article quality |
| Per-file decision (no rule) | Status quo — caused inconsistency and repeated decision overhead |
