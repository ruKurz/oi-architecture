# OIA · Integrate Concept into Project

**Prompt type:** Execution (interactive — expects user confirmations)
**Context:** DEV — Process & Architecture Contracts

---

## Kontext

Read before execution:
- `CLAUDE.md` — agent contracts, ADR rules, Semantic Anchor rules
- `CONVENTIONS.md` — §2.1 BIZ/DEV separation, §2.3 commits
- `decisions/README.md` — ADR index (existing decisions, next available number)
- `context/semantic-anchors.md` — active anchor registry

This prompt integrates a new concept (`$Subject`) as a binding element into `$Project`.
Binding means: the concept is documented as an ADR and anchored at all relevant locations
in the project — as a contract for human developers and the agent alike.

---

## Ziel

At the end, `$Subject` exists as a reviewed, documented, and binding element
of the development process in `$Project` — for both agent and human.

---

## Inputs

| Parameter | Required | Description |
|---|---|---|
| `$Subject` | Yes | Concept, technology, or rule to integrate. Can be provided as a name, URL, Markdown file, or Semantic Anchor. |
| `$Project` | No | Target project. Default: current working directory. |

---

## Constraints

- **Do not touch BIZ content**: OIA model IDs, layer naming, and architecture terminology remain unchanged — unless `$Subject` is explicitly a BIZ concept
- **No prompt without helper**: If `$Subject` requires a new prompt file, `prompts/templates/prompt-helper.md` must be used — this prompt does not create sub-prompts directly
- **No commit without GitHub Issue**: A GitHub Issue must exist before the first commit
- **One concept per invocation**: One prompt call = one `$Subject` — actively reject scope creep
- **No implementation without confirmation**: The user must explicitly confirm before Step 3 begins

---

## Schritte

### Step 1 — Analysis: Is $Subject the right choice?

1. Check whether `$Subject` is already (partially) integrated in the project:
   - Search `CLAUDE.md`, `CONVENTIONS.md`, `decisions/README.md`, `context/semantic-anchors.md`
   - If found: assess whether the integration is complete and true to the concept
2. Research alternatives to `$Subject`:
   - Offer the user an interactive web search for alternatives
   - Present max. 3 alternatives as a table: Concept | Strengths | Weaknesses | Recommendation
3. If an alternative is clearly superior: recommend it actively with a one-sentence rationale
4. Ask the user for a deliberate decision: which concept should be integrated — and why?

> **Wait for confirmation and a brief rationale before proceeding.**

---

### Step 2 — Draft an integration plan

1. Identify all locations in the project where `$Subject` must be anchored:
   - Mandatory: `CLAUDE.md` (agent contract), `CONVENTIONS.md` (developer contract)
   - Optional, depending on `$Subject`: `context/semantic-anchors.md`, `decisions/`, `docs/`, prompt files
2. If good practices for integrating `$Subject` are unknown: offer a web search
3. Create a concise integration plan:
   - Which files change and how?
   - Which locations need cleanup (contradictions, duplicates)?
   - Is `$Subject` BIZ, DEV, or BOTH? → determines how many commits are needed
4. Draft an ADR for `$Subject` based on Steps 1 + 2:
   - Use `prompts/development/create-adr.md`
   - ADR always starts in status `Proposed` — only the maintainer sets `Accepted`
   - Present the ADR for review; do not commit yet

---

### Step 3 — Execute the integration

1. Briefly present the integration plan from Step 2 to the user

> **Wait for explicit confirmation before making any changes.**

2. Apply changes in this order:
   - a. Place ADR in `decisions/`, update `decisions/README.md`
   - b. Update `CLAUDE.md` (session reads, auto-apply rules)
   - c. Extend `CONVENTIONS.md` (new section or extend existing)
   - d. `context/semantic-anchors.md` — only if `$Subject` is a Semantic Anchor
   - e. Additional files as defined in the integration plan
3. Create a GitHub Issue, then commit:
   - BIZ changes and DEV changes in separate commits
   - Each commit references the issue in the footer (`Closes #N` or `Refs #N`)
4. Validate the result against the acceptance criteria

---

### Step 4 — Review & handover

1. Summarize in 3–5 bullet points what was integrated and where
2. Describe how the user works with `$Subject` in daily practice:
   - How is it referenced in a prompt?
   - When is the agent expected to apply it?
   - When should the ADR or anchor be updated?

---

## Entscheidungsregeln

- If `$Subject` is already fully and correctly integrated → stop after Step 1 and inform the user
- If `$Subject` affects both BIZ and DEV → plan two commits and inform the user
- If a web search would be useful → ask first, do not run automatically
- If the ADR number is unclear → `decisions/README.md` is the single source of truth: highest number + 1
- If `$Subject` requires a new prompt → refer to `prompts/templates/prompt-helper.md`, do not create it directly

---

## Akzeptanzkriterien

- [ ] An ADR for `$Subject` exists in `decisions/` (status: Proposed)
- [ ] `decisions/README.md` contains the new ADR entry
- [ ] `CLAUDE.md` contains `$Subject` as a binding rule or session read
- [ ] `CONVENTIONS.md` contains `$Subject` in the relevant section
- [ ] A GitHub Issue exists referencing the integration
- [ ] All changes are committed (BIZ and DEV separately, each with issue reference)
- [ ] The user has received a description of how to work with `$Subject` in practice

---

## Output

| File | Action |
|---|---|
| `decisions/NNNN-<subject-slug>.md` | created |
| `decisions/README.md` | changed |
| `CLAUDE.md` | changed |
| `CONVENTIONS.md` | changed |
| `context/semantic-anchors.md` | changed (only if `$Subject` is a Semantic Anchor) |
