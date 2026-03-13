# OIA Diagrams

This directory contains architecture diagram sources for OIA.

## Active Visualization

**`oia-diagram-v2.html`** — the current interactive diagram.
Served via the OIA site (GitHub Pages) — not opened directly.

The rendered output is part of the oia-site microsite. Any diagram changes should be reflected in `oia-site/src/data/oia-model.json` (model content) or the renderer (`oia-site/src/renderer/`).

## Diagram Generation

Diagram prompts live in `prompts/diagrams/`. Use them when regenerating or evolving the diagram structure outside the renderer workflow.
