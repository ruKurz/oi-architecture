# OIA · Create Architecture Decision Record

**Prompt type:** Generation
**Domain:** DEV | BIZ (depends on the decision)

---

## Kontext

Read before execution:
- `decisions/README.md` — ADR index and template
- `decisions/` — all existing ADRs (for numbering and consistency)
- `CONVENTIONS.md` — ADR format rules

ADR methodology: Ralf D. Müller / Johannes Dienst (fiveandahalfstars.ninja).
Key principle: **Decision first** — the decision is stated upfront, rationale follows.
The Alternatives section is **mandatory** — document what was consciously rejected, not just what was chosen.

---

## Ziel

Create a new ADR file in `decisions/` that documents an architecture decision.
The ADR is complete, self-explanatory, and follows the Müller/Dienst format.

---

## Inputs

The user provides — informally, as "kernels of truth":
- What was decided? (one sentence is enough)
- Why? (quality attribute: maintainability, portability, readability, scalability, ...)
- What alternatives were considered — and why rejected?
- Does this affect DEV, BIZ, or both?

If inputs are missing: ask before generating anything.

---

## Constraints

- **English only** — ADRs are DEV artifacts, not articles
- **Do not make decisions on behalf of the user** — if context is missing, ask
- **BIZ decisions** get `Type: BIZ` but are treated technically like DEV ADRs
- **No retroactive changes to existing ADRs** — use a new ADR with `Superseded by ADR-XXXX` instead
- **Alternatives: at least 1 alternative** must be documented — otherwise it is a description, not a decision
- **New ADRs always start as `Proposed`** — only the human maintainer sets `Accepted`

---

## Schritte

### Step 1 — Determine the next ADR number

Check whether `decisions/` exists. If not: create it with a minimal `decisions/README.md` (table header only: `| ADR | Title | Status | Type | Date |` — no entries).

Scan `decisions/` for existing ADR files. Determine the next number (NNNN, four digits with leading zeros: `0001`, `0002`, ...).

---

### Step 2 — Process the kernels of truth

Analyse the user input using this synthesis formula (from the Hands-on Architects methodology):

> "In the context of **[use case / system area]**, facing **[concern / quality trade-off]**, we decided for **[option]**, to achieve **[quality goal]**, accepting **[downside]**, because **[core rationale]**."

Use this sentence as the basis for the Decision line in the ADR.

---

### Step 3 — Create the ADR file

Filename: `decisions/NNNN-kebab-case-noun-phrase.md`

Template:
```markdown
# ADR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided.
**Status:** Proposed
**Date:** YYYY-MM-DD
**Type:** DEV | BIZ | BOTH

## Context

Facts that influenced the decision. Neutral language — no judgement.
State the quality attribute affected (ISO 25010: maintainability, portability,
performance efficiency, reliability, security, usability, ...).

## Consequences

**Easier:** What becomes simpler as a result.
**Harder:** What becomes more difficult or requires more discipline.
**Required adjustments:** What else must change to make this decision work.

## Alternatives

| Option | Reason rejected |
|---|---|
| Alternative A | Why not chosen |
| Alternative B | Why not chosen |
```

---

### Step 4 — Update the ADR index

Add an entry to the ADR list in `decisions/README.md`:
```markdown
| [ADR-NNNN](./NNNN-title.md) | Title | Proposed | DEV/BIZ | YYYY-MM-DD |
```

---

### Step 5 — Suggest a commit message

Suggest a commit message in Conventional Commits format:
```
docs(decisions): add ADR-NNNN <noun-phrase title>

Closes #N
```

---

## Entscheidungsregeln

- If alternatives are missing → ask, do not invent them
- If the type is unclear (DEV vs. BIZ) → use BOTH and ask the user
- If an existing ADR covers the same decision → check whether supersession is needed, do not duplicate
- If the decision is trivial and easily reversible → no ADR needed; a comment in the code is sufficient

---

## Qualitätskriterien (AI self-check)

After creation, verify:
- [ ] Would someone without context understand the decision in 30 seconds?
- [ ] Is the Decision line in active imperative voice?
- [ ] Is at least 1 alternative documented with a reason?
- [ ] Are consequences named both positively and negatively?
- [ ] Is the quality attribute explicitly stated?

---

## Akzeptanzkriterien

- [ ] `decisions/NNNN-<name>.md` exists with complete Müller/Dienst format
- [ ] `decisions/README.md` contains the new entry
- [ ] A commit message has been suggested
- [ ] No existing ADRs were modified

---

## Output

| File | Action |
|---|---|
| `decisions/NNNN-<name>.md` | created |
| `decisions/README.md` | changed (new index entry) |
