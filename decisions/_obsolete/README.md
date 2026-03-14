# Obsolete Decision Records

This folder contains decision records that are no longer active — they have been superseded or deprecated.

## When files are moved here

A record is moved to `_obsolete/` when:
- Its **Status** is set to `Superseded by ADR-XXXX` or `Superseded by ODR-XXXX`
- Its **Status** is set to `Deprecated` (no replacement, but no longer binding)

Records are **never deleted** — they remain here for historical reference and to preserve the decision rationale that led to the superseding record.

## How to reference an obsolete record

Use the full path from the project root:
```
decisions/_obsolete/NNNN-title.md
```

In `decisions/README.md`, superseded entries are shown with strikethrough:
```markdown
| ~~[ADR-0011](./_obsolete/0011-title.md)~~ | ~~Title~~ | Superseded by ODR-0004 | DEV | YYYY-MM-DD |
```

## Current obsolete records

| Record | Status | Reason |
|---|---|---|
| [ADR-0011](0011-english-as-project-language.md) | Superseded by ODR-0004 | Language policy elevated to Org layer |
