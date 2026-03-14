# Prompt: Create an Organizational Decision Record (ODR)

## Context

The OIA project documents organizational decisions as ODRs (Organizational Decision Records) at the Org layer of the governance hierarchy (Gov → Org → Arch). ODRs complement ADRs: where ADRs document technical and structural choices (Arch layer), ODRs document how the project governs itself — its operating model, principles, and policies.

**Key references:**
- `context/odr-concept.md` — full ODR concept, hierarchy, and rationale
- `decisions/org/odr-template.md` — canonical ODR template with all required fields
- `decisions/README.md` — ODR index (source of truth for next ODR number)
- `CONVENTIONS.md §ODR Format` — field definitions, commit rules, acceptance protocol

**Governance rule (CLAUDE.md):** An ODR is needed when a decision (a) affects how the project operates — not what it builds, (b) binds participants beyond technical contributors (including Users and AI Agents), and (c) is organizational in nature: governance model, operating principles, language policy, ecosystem type.

**If in doubt: ADR vs ODR?**
- Affects tooling, code structure, technical process → ADR
- Affects how the project governs itself, operates, or participates in a community → ODR

## Goal

Create a well-formed, fully linked ODR file in `decisions/org/` that:
1. Uses the next available ODR number from the index in `decisions/README.md`
2. Populates all required fields from the template
3. Correctly identifies its position in the derivation chain (`derives-from`, `implements`)
4. Updates `decisions/README.md` to register the new ODR
5. Adds `governed-by: ODR-XXXX` to any ADRs that this ODR mandates

## Constraints

- **Template:** Always use `decisions/org/odr-template.md` as the starting point
- **Numbering:** Read the current highest ODR number from `decisions/README.md` ODR index. Next = highest + 1. Never reuse a number.
- **Status:** Always `Proposed`. Only the human maintainer sets `Accepted`.
- **Binding scope:** Explicitly state `Binding for:` — do not leave it implicit. Options: `All` · `Users` · `Agents` · `Contributors`.
- **Derives from:** Must point to a parent ODR or to `—` only for a founding record. ODR-0000 is the root. All other ODRs must trace to ODR-0000.
- **Implements:** List all ADRs this ODR mandates. If no ADR exists yet, use `—` and note that an ADR should be created.
- **No BIZ/DEV mixing:** ODR creation is a BIZ commit (`docs(decisions):`). If you also need to add `governed-by` to an existing ADR, that is a separate DEV concern — do it in the same commit only if the ADR is in `decisions/arch/` (also BIZ).
- **Issue reference:** Every commit must reference the GitHub Issue in the footer (`Closes #N` or `Refs #N`).
- **Prompt-helper compliant:** This prompt was created via the prompt-helper process (ADR-0006).

## Steps

### Step 1 — Read the index
```
Read decisions/README.md → ODR Index
```
Identify the current highest ODR number. The new ODR number = highest + 1.

### Step 2 — Determine the derivation chain
Answer these questions before writing:
1. **Derives from:** Which existing ODR motivates this decision? (Usually ODR-0000 or a specific organizational ODR.)
2. **Implements:** Which ADRs (existing or to be created) are the Arch-layer implementation of this ODR?
3. **Binding for:** Who must comply — All / Users / Agents / Contributors?

### Step 3 — Draft the ODR
Use `decisions/org/odr-template.md`. Fill every field:
- `Decision:` — one or two sentences, active voice, decision + key rationale
- `Status:` — always `Proposed`
- `Date:` — today's date
- `Level:` — always `Org`
- `Binding for:` — explicit scope
- `Derives from:` — parent ODR link
- `Implements:` — child ADR links or `—`

Write the full body: Context, Consequences (For Users / For Agents / Easier / Harder / Required adjustments), Alternatives table, Related decisions table.

### Step 4 — Save the file
```
decisions/org/NNNN-kebab-case-noun-phrase-title.md
```
Filename: lowercase, kebab-case, noun phrase (not a verb phrase).

### Step 5 — Update decisions/README.md
Add one row to the ODR Index table:
```markdown
| [ODR-NNNN](./org/NNNN-title.md) | Title | Proposed | YYYY-MM-DD |
```

### Step 6 — Update governed-by on impacted ADRs
For each ADR listed in `Implements:`, ensure it carries:
```
**Governed by:** [ODR-NNNN](../org/NNNN-title.md)
```
If the ADR does not yet exist, note it as a follow-up.

### Step 7 — Commit
```
docs(decisions): ODR-NNNN — <noun phrase summary>

<one-line description of what was decided and why it matters>

Closes #N
```

## Acceptance criteria

- [ ] ODR file exists at `decisions/org/NNNN-*.md` with the correct number
- [ ] All required fields present: Decision, Status (Proposed), Date, Level (Org), Binding for, Derives from, Implements
- [ ] Derives from chain traces back to ODR-0000 (directly or via parent ODRs)
- [ ] `decisions/README.md` ODR index updated with the new entry
- [ ] Every ADR listed in `Implements:` carries `Governed by: ODR-NNNN`
- [ ] Commit uses `docs(decisions):` type and references the GitHub Issue
- [ ] No BIZ and DEV artifacts mixed in the same commit
