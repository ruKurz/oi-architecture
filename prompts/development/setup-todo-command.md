# ~~OIA · Setup Todo Command~~ — DEPRECATED

> **Status: Deprecated**
> The todo infrastructure (`context/todo.md` + `.claude/commands/todo.md`) has been set up.
> This prompt is a one-time setup and is no longer needed.
> The `/todo` slash command is active. See `context/todo.md` for usage.

---

# Todo Infrastructure Setup

**Prompt type:** Execution *(one-time, already executed)*
**Domain:** DEV

> Sets up the structures that allow observations and open points to be captured quickly and without interrupting the current workflow.

---

## Kontext

Affected: working infrastructure of the OIA project.

Relevant files (read before execution):
- `context/oia-context.md` — terminology (read only)
- `.claude/commands/` — check if already present

---

## Ziel

After running this prompt, every participant (human or agent) can record an observation with a single, consistent command. The collected entries are readable and prioritisable without session context.

---

## Constraints

- **Changes no existing project files** (no `oia-model.json`, no CSS, no code)
- **Creates no content entries** — infrastructure only
- **Does not overwrite existing files** — checks first whether they exist
- **Introduces no terminology** that conflicts with `context/oia-context.md`

---

## Schritte

### Step 1 — Create `context/todo.md`

Create the file with the following content:

```markdown
# OIA · Parking Lot

Observations, open points and ideas that come up during work
and cannot be addressed immediately.

Entries are added via `/todo` or directly.
Format: chronological, newest entries at the bottom.

Categories: model | renderer | prompt | architecture | infra | ux
Urgency: low | medium | high
Status: open | in-progress | done | wont-do

---

<!-- Entries follow here -->
```

> If the file already exists: only check whether the header contains the category/status schema — add if missing, do not replace.

---

### Step 2 — Create slash command `.claude/commands/todo.md`

Create `.claude/commands/todo.md` with the following content:

```markdown
Add the following point as a new entry to `context/todo.md`.
Do not implement anything. Do not analyse anything. Just record it.

Use this format:

### [TODAY'S DATE] $ARGUMENTS
- **Category:** (model | renderer | prompt | architecture | infra | ux)
- **Urgency:** medium
- **Observation:** $ARGUMENTS
- **Context:** (derive from the current conversation if recognisable)
- **Status:** open

Confirm with one line: "→ Recorded: [short title]"
```

> If `.claude/commands/` does not exist: create the directory.
> If the file already exists: compare content, only replace if there is a material difference.

---

### Step 3 — Document the convention

Add to `context/oia-context.md` under a new section `## Working Conventions` (or append if already present):

```markdown
## Working Conventions

### Todo / Parking Lot
- Observations → `/todo <description>` or directly in `context/todo.md`
- Categories: model | renderer | prompt | architecture | infra | ux
- Status values: open | in-progress | done | wont-do
- Review: briefly scan at the start of each session
```

---

## Entscheidungsregeln

| Situation | Behaviour |
|---|---|
| `context/todo.md` already exists | Only check header/schema, do not overwrite |
| `.claude/commands/todo.md` already exists | Compare content — only replace if schema is missing |
| `context/oia-context.md` already has "Working Conventions" | Only add the todo section if missing |
| `.claude/commands/` does not exist | Create directory, then create file |

---

## Akzeptanzkriterien

- [ ] `context/todo.md` exists with header including category and status schema
- [ ] `.claude/commands/todo.md` exists and contains `$ARGUMENTS`
- [ ] `context/oia-context.md` contains the todo conventions section
- [ ] A test entry with `/todo Infrastructure setup complete` can be added immediately

---

## Output

```
context/todo.md              — created
.claude/commands/todo.md     — created
context/oia-context.md       — changed (section added)
```
