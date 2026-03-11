# ADR-0006: Prompt-Helper Enforcement via CLAUDE.md

**Decision:** Every new prompt file in `prompts/` must be created through the `prompts/templates/prompt-helper.md` process. This rule is enforced at the AI-assistant level via a CLAUDE.md instruction. A GitHub Actions validator serves as a secondary check for structural compliance.
**Status:** Accepted
**Date:** 2026-03-11
**Type:** DEV

## Context

During the session establishing conventions, `prompts/development/introduce-conventions.md` was created directly without going through the prompt-helper process. This resulted in three fixable issues: a stale Ziel section, non-concrete Inputs, and an unmarked irreversible step. The issues were caught and corrected retroactively.

The prompt-helper exists to prevent exactly this: prompts that drift from the project's structural requirements (explicit Constraints, measurable Akzeptanzkriterien, no inline context). Without enforcement, the helper is a guideline, not a rule.

Two enforcement levels were considered: (1) AI-level instruction (CLAUDE.md) to prevent non-compliant prompts from being created in the first place, and (2) CI validation as a safety net for structural checks.

Quality attribute affected: maintainability (prompt quality degrades without enforcement), consistency.

## Consequences

**Easier:** AI assistant cannot bypass the helper even if instructed to create a quick prompt; structural issues are caught before files are committed; prompt library stays consistent.
**Harder:** Overhead per prompt is higher — the helper adds a planning step before writing; for genuinely simple prompts, this feels bureaucratic (but simple prompts are explicitly out of scope per the helper's Tanzbereich definition).
**Required adjustments:** CLAUDE.md must contain the rule "Kein Prompt ohne Helper" with explicit reference to `prompts/templates/prompt-helper.md`; a GitHub Actions workflow step must validate required sections (`## Kontext`, `## Ziel`, `## Constraints`, `## Akzeptanzkriterien`) in `prompts/**/*.md` files.

## Alternatives

| Option | Reason rejected |
|---|---|
| Guideline only (no enforcement) | Status quo — already failed; guideline was ignored during `introduce-conventions.md` creation |
| Pre-commit hook (local) | Enforces only on the developer's machine; bypassed by `--no-verify`; CI is more reliable |
| Mandatory PR review | Solo project — no second reviewer; automation is more practical |
| No prompt library (chat only) | Loses the benefit of repeatable, documented workflows that survive context resets |
