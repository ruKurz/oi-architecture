# OIA Prompt Helper
> Creates structured, executable prompts for the OIA project.

---

## Scope — What the helper creates (and what it does not)

The Prompt Helper creates prompts that **produce lasting changes to the project**:

| Creates | Does not create |
|---|---|
| Workflows that introduce a new development process | Session commands for one-off actions |
| Setup prompts that establish infrastructure (files, conventions, slash commands) | Prompts that capture a single value or observation |
| Process prompts that describe how something is done repeatedly | Checklists for one-time steps |
| Prompts that extend the model, rendering, or tooling | Direct execution without a prompt as intermediate artefact |

**Rule of thumb:** If the resulting prompt is only useful once → not a Prompt Helper case.
If the prompt establishes a repeatable way of working in the project → Prompt Helper case.

**Examples of valid Prompt Helper tasks:**
- "Create a prompt that sets up todo infrastructure in the project (file + slash command)"
- "Create a prompt that introduces a new diagram export workflow"
- "Create a prompt that extends the model with a new layer type"

**Examples of invalid tasks (direct chat is sufficient):**
- "Record this observation for me"
- "Add this entry to a list"

---

## System context

**Read before creating the prompt:**
- `context/oia-context.md` — architecture layers, terminology, backlog (DE)
- `context/oia-project-instruction-prompt.md` — role, mission, target audience

**Scan for existing similar prompts:**
- `prompts/development/` — technical execution prompts
- `prompts/` — all other prompts including predecessor versions

**Single source of truth for model content:** `oia-site/src/data/oia-model.json`

**Execution context:** Use relative paths — Claude knows the working directory from the session.

---

## Prompt type

Choose the type before fixing the structure:

| Type | When | Typical outputs |
|---|---|---|
| **Execution** | Build / implement something | Files, code, configuration |
| **Generation** | Create content | Articles, diagrams, JSON data |
| **Refinement** | Update / improve existing artefacts | Changed files, new version |

**Type of this task:** `{EXECUTION | GENERATION | REFINEMENT}`

---

## Task

### Starting situation

{DESCRIPTION_OF_THE_PROBLEM_OR_INITIATIVE}

### Source artefacts

- `{EXISTING_PROMPT_OR_FILE}` — role: `{Starting point | Reference | will be replaced}`
- `{FURTHER_REFERENCES}`

### Changes relative to predecessor

> Fill in only for Refinement. For new prompts: "New — no predecessor."

{DELTA_TO_PREDECESSOR}

---

## OIA-specific rules

These rules apply to every generated prompt:

1. **Terminology** — terms from `context/oia-context.md` section "Terminologie" are not redefined
2. **JSON model changes** — structural changes to `oia-model.json` (new layers, ID schema) → present for review first, do not execute directly
3. **No inline context** — context is referenced by file path, not repeated as prose
4. **One prompt, one task** — scope creep is explicitly rejected
5. **Mark irreversible steps** — git operations, file overwrites, deployments

---

## Output schema for the generated prompt

```
## Context
Which part of the OIA project is affected?
Which files are relevant (paths only, no content)?

## Goal
One sentence: what should exist or have changed at the end?

## Constraints
What must the prompt NOT do?
(e.g. "Does not change existing CSS", "Does not touch oia-model.json")

## Inputs
Files that must be read — with concrete paths.

## Steps
Numbered, executable steps.
Each step has exactly one result.

## Decision rules
What to do in case of ambiguity or conflict?
(e.g. "If ID conflict → ask, do not execute")

## Acceptance criteria
How do you know the prompt was executed successfully?
(e.g. "npm run test passes", "Build produces dist/")

## Output
Which files are created or changed?
Format: `path/to/file.ext` — created | changed | deleted
```

---

## Few-shot: example of a good OIA prompt

> Reference: `prompts/development/build-microsite.md`

What makes this prompt good:
- **Context** is short — only project path + architecture overview, no prose
- **Constraints** are explicit — "No manual HTML", "No backend", "Design tokens 1:1"
- **Steps** are numbered and phase-based — each phase has a completed artefact
- **Execution order** at the end — clear even for distributed work
- **Acceptance criteria** embedded in phases — e.g. "Tests must pass"

What a bad OIA prompt does (anti-patterns):
- Describes the what, but not the how → agent makes too many independent decisions
- Contains project context as prose instead of path references → goes stale immediately
- Mixes model change + renderer change + deployment in one prompt → not isolatable

---

## Done

You are finished when:

- [ ] Prompt type is defined
- [ ] `Constraints` are explicitly stated (not just implied)
- [ ] `Acceptance criteria` are measurable (not "looks good")
- [ ] No project context is repeated inline — path references only
- [ ] The prompt is saved at the following path:

```
{TARGET_PATH_FOR_PROMPT}
```
