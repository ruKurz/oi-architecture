# OIA Site — Quick Start

## Voraussetzungen

- Node.js >= 20
- npm >= 9

---

## Lokaler Dev-Server

```bash
cd oia-site
npm install
npm run dev
```

Öffne http://localhost:5173/oi-architecture/ im Browser.

Der Dev-Server unterstützt Hot Module Replacement — Änderungen an CSS und TypeScript sind sofort sichtbar.

---

## Tests

```bash
# Einmalig ausführen
npm run test

# Im Watch-Modus (re-run bei Dateiänderungen)
npm run test:watch

# Mit Browser-UI
npm run test:ui
```

---

## Production Build

```bash
npm run build
```

Die fertige Site liegt danach in `oia-site/dist/`.

Lokale Vorschau des Builds:

```bash
npm run preview
```

Öffne http://localhost:4173/oi-architecture/

---

## GitHub Pages Deployment

Das Deployment läuft automatisch über GitHub Actions, sobald Änderungen in `oia-site/**` auf den `main`-Branch gepusht werden.

**Voraussetzungen im GitHub-Repo:**
1. Settings → Pages → Source: `gh-pages` Branch
2. Das Workflow-File `.github/workflows/deploy.yml` ist bereits konfiguriert

**Manuell auslösen** (optional, über GitHub UI):
- Actions → "Deploy OIA Site to GitHub Pages" → Run workflow

Die Site ist danach erreichbar unter:
```
https://<github-username>.github.io/oi-architecture/
```

---

## Inhalte ändern

Alle Inhalte kommen aus einer einzigen Datei:

```
oia-site/src/data/oia-model.json
```

Kein HTML wird manuell editiert. Änderungen am Modell werden beim nächsten `npm run dev` oder `npm run build` übernommen.

**Nach jeder Änderung:**
```bash
npm run test   # Modell-Integrität prüfen
npm run build  # Build verifizieren
```
