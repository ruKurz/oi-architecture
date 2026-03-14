# OIA · Active Semantic Anchors

**Version:** 2.0.0 · 2026-03-28

> Semantic Anchors are well-defined methodologies and frameworks that serve as reference points
> when communicating with AI assistants. Invoking an anchor activates the AI's full trained
> knowledge of that methodology — proponents, practices, failure modes — in a single phrase.
>
> Source: https://llm-coding.github.io/Semantic-Anchors/
> Decision: [ADR-0010](../decisions/adr/0010-semantic-anchors-as-vocabulary-layer.md)

---

## How to Read This File

Each entry:
- **Anchor** — the exact invocation phrase (use verbatim in prompts and CLAUDE.md)
- **Domain** — BIZ (OIA model, articles, architecture) or DEV (tooling, code, docs)
- **Applies when** — the specific OIA context in which this anchor activates
- **Key concepts activated** — what the AI's prior knowledge contributes

---

## BIZ Anchors

### MECE Principle (Minto)
**Domain:** BIZ
**Applies when:** Evaluating or designing OIA layers, capability groupings, or any categorization
**Key concepts activated:** Mutual Exclusivity (categories don't overlap), Collective Exhaustiveness (no gaps), structural completeness test, issue tree logic

**OIA application:** The seven OIA layers must be MECE. When proposing a new layer or rearranging items between layers, apply the MECE test explicitly: "Does this item belong to exactly one layer? Is every item in the model covered by some layer?"

---

### Pyramid Principle (Minto)
**Domain:** BIZ
**Applies when:** Structuring OIA articles, ADR bodies, architecture documents, or any written output
**Key concepts activated:** Conclusion first, supporting arguments below, horizontal logic (MECE at each level), vertical logic (each level answers the question raised by the level above), executive communication

**OIA application:** LinkedIn articles and architecture documents start with the key message, then justify. ADR bodies state the decision first (already enforced by ADR-0004 — the Pyramid Principle is the underlying rationale).

---

### BLUF — Bottom Line Up Front
**Domain:** BIZ
**Applies when:** Writing executive-facing content (articles, summaries, issue comments for CIO/EA audience)
**Key concepts activated:** Military communication pattern, inverted pyramid, reader-first framing, one-sentence lead

**OIA application:** Any output destined for LinkedIn or a C-level reader opens with the single most important statement. No scene-setting, no history first.

---

### Domain-Driven Design (Evans)
**Domain:** BIZ
**Applies when:** Discussing OIA terminology, layer boundaries, or model coherence
**Key concepts activated:** Ubiquitous Language, Bounded Context, Aggregate, Entity, Value Object, Anti-Corruption Layer, Strategic Design

**OIA application:** OIA terminology (`Situation Layer`, `Cognitive Capabilities`, `Knowledge Core`, `Solutions & Applications`) is the Ubiquitous Language of the OIA Bounded Context. Anchors: never rename model terms without a BIZ decision; never mix OIA terms with implementation synonyms.

---

### SOTA — State of the Art
**Domain:** BIZ
**Applies when:** Positioning OIA capabilities relative to current AI and knowledge management approaches in articles or strategic content
**Key concepts activated:** Current best-known approach in a field, benchmark baseline, research-grade comparison, advancement framing, competitive landscape positioning

**OIA application:** When writing about what OIA enables beyond current tools, or when describing how OIA integrates state-of-the-art AI components (LLMs, vector indexes, knowledge graphs), invoke SOTA to anchor the value proposition against the current baseline — not hypothetically.

---

### Cynefin Framework (Snowden)
**Domain:** BIZ
**Applies when:** Positioning OIA's purpose, writing thought-leadership content, or discussing where OIA adds value
**Key concepts activated:** Clear / Complicated / Complex / Chaotic / Confused domains, sense-making vs. decision-making, probe-sense-respond, expertise vs. emergence

**OIA application:** OIA is the intelligence infrastructure that helps organizations operate across all Cynefin domains — in Complex domains (emergent knowledge), the intelligence layer is especially critical. This framing strengthens the OIA value proposition for a strategic audience.

---

### Wardley Mapping (Wardley)
**Domain:** BIZ
**Applies when:** Strategic positioning of OIA components, thought-leadership articles about AI maturity
**Key concepts activated:** Evolution axis (Genesis → Custom-Built → Product → Commodity), Value Chain, Situational Awareness, doctrine, gameplay

**OIA application:** OIA components can be positioned on the Wardley evolution axis — e.g. LLMs are moving toward Commodity, while Knowledge Core and Situation Layer remain Custom-Built. This gives the OIA diagram a strategic time dimension and is strong LinkedIn thought-leadership material.

---

## DEV Anchors

> These are already practised in the project. Making them explicit as Semantic Anchors ensures
> consistent AI activation and allows prompts to reference them by name without re-explanation.

### Conventional Commits (Lövlie et al.)
**Domain:** DEV
**Applies when:** Any commit message is drafted
**Key concepts activated:** `feat:` / `fix:` / `docs:` / `chore:` / `refactor:` types, scope in parentheses, imperative subject line, breaking change footer, machine-parseable changelog

**OIA application:** See CONVENTIONS.md §2.3 and [ADR-0005](../decisions/adr/0005-conventional-commits-with-content-type.md). The project extends the standard with the `content:` type for BIZ commits.

---

### Semantic Versioning (Preston-Werner)
**Domain:** DEV
**Applies when:** Any version number change is discussed or the `meta.version` field is updated
**Key concepts activated:** MAJOR.MINOR.PATCH semantics, breaking change = MAJOR bump, backward-compatible feature = MINOR bump, patch = bug fix

**OIA application:** Current version: `0.1.0`. Any version change must be cross-cutting (see CLAUDE.md Version Identity rule). The `0.x` prefix signals pre-stable API — breaking BIZ model changes are expected.

---

### Docs-as-Code
**Domain:** DEV
**Applies when:** Any documentation change — docs/, decisions/, README.md, CONVENTIONS.md
**Key concepts activated:** Docs live in version control alongside code, same review process, Markdown/AsciiDoc as source, CI validation, docs reviewed in PRs

**OIA application:** All documentation is in the repo. Docs changes follow the same commit convention, issue tracking, and review process as code changes.

---

### Diátaxis Framework (Procida)
**Domain:** DEV
**Applies when:** Creating or restructuring content in `docs/`
**Key concepts activated:** Four documentation modes — Tutorials (learning-oriented), How-to guides (task-oriented), Reference (information-oriented), Explanation (understanding-oriented); never mix modes in one document

**OIA application:** New docs/ content must declare its mode. `docs/CONTRIBUTING.md` is a How-to guide. `docs/ARCHITECTURE.md` is Reference. `docs/working-with-adrs-and-semantic-anchors.md` is a How-to guide. Mixing modes is a Diátaxis violation.

---

## DEV Anchors — Agile Process

> Added in sprint 2026-03-28 when agile development methods were formally adopted (ODR-0002). These four anchors map to specific process steps actually practised in OIA — they are not aspirational.

### Five Whys (Ohno)
**Domain:** DEV
**Applies when:** Sprint retrospective root cause analysis (sprint-retro.md B-1)
**Key concepts activated:** Iterative questioning (ask "why" 5 times), root cause vs. symptom, causal chain, Taiichi Ohno / Toyota Production System

**OIA application:** In sprint-retro.md B-1, apply Five Whys to each deviation: do not stop at the immediate cause (e.g. "AC was missing") — trace back to why it was missing. This produces actionable, structural measures rather than symptom-level fixes.

---

### MoSCoW (Clegg)
**Domain:** DEV
**Applies when:** Sprint planning prioritization (sprint-planning.md C-3), backlog triage
**Key concepts activated:** Must Have / Should Have / Could Have / Won't Have, time-box constraints, stakeholder negotiation, DSDM agile framework

**OIA application:** When the sprint scope contains more issues than the time-box allows, apply MoSCoW to the candidate list: every issue is explicitly labeled Must (core), Should (high-value addition), Could (if time allows), or Won't (deferred). This makes trade-off decisions explicit and documented.

---

### Testing Pyramid (Fowler / Cohn)
**Domain:** DEV
**Applies when:** Designing or reviewing the test strategy for OIA renderer or tooling changes
**Key concepts activated:** Unit tests (many, fast, isolated) at the base, integration tests (fewer) in the middle, E2E/UI tests (few, slow) at the top; anti-pattern: inverted pyramid (too many E2E tests)

**OIA application:** OIA has unit tests (Vitest, `oia-site/src/**/*.spec.ts`). New DEV features follow the pyramid: unit tests for logic, integration tests for rendering paths, manual/preview for UI. Do not add E2E automation without justification — visual regression is handled via Netlify preview deployments.

---

### YAGNI — You Aren't Gonna Need It (Jeffries, Beck)
**Domain:** DEV
**Applies when:** Any DEV implementation task — reviewing scope, evaluating feature additions, deciding whether to add abstraction
**Key concepts activated:** Extreme Programming principle, avoid speculative generality, implement only what is needed now, cost of premature abstraction, incremental design

**OIA application:** OIA is a pre-1.0 project with a single maintainer. YAGNI applies at every level: do not add configuration flags for hypothetical use cases, do not create abstractions for patterns that appear fewer than 3 times, do not build tooling "for the future". When in doubt: implement the simplest thing that satisfies the current issue's AC.

---

## Adding a New Anchor

1. Check the library: https://llm-coding.github.io/Semantic-Anchors/
2. Verify it meets anchor quality criteria (precise, rich, consistent, attributable)
3. Create a GitHub Issue describing the proposed addition and its OIA application context
4. Add the anchor to this file following the entry format above
5. Reference it in CLAUDE.md if it should be applied automatically by the AI agent
6. Commit as `content(context): add [anchor name] to active semantic anchors` with `Closes #N`

## Removing or Replacing an Anchor

If an anchor's methodology changes significantly, or if a better anchor covers the same ground, create an ADR or GitHub Issue documenting the transition. Do not silently remove anchors.
