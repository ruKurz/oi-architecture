export function renderMotivationView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">Warum OIA?</div>

      <h1 class="page-view__lead">
        <!-- PLACEHOLDER: Hauptthese in einem Satz — Autor füllt aus -->
        Wissen ist in Organisationen vorhanden —<br>
        aber es kommt selten dort an, wo Entscheidungen getroffen werden.
      </h1>

      <div class="page-placeholder">
        ⚠️ Inhalt wird vom Autor bereitgestellt — Struktur steht, Text ist Platzhalter
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Das Problem</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Beschreibung des Ausgangsproblems (2–3 Absätze) -->
          Unternehmen investieren Milliarden in Datenplattformen, KI-Werkzeuge und
          Analytics-Systeme — und trotzdem entstehen Entscheidungen oft auf Basis
          von Erfahrungswissen, Bauchgefühl oder unvollständigen Informationen.
          Die Architektur fehlt, die erklärt, wie aus Daten tatsächlich
          organisationale Handlungsfähigkeit wird.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Die Antwort: OIA</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Was OIA ist und warum es diese Lücke schließt -->
          Die <strong>Organizational Intelligence Architecture</strong> beschreibt den
          vollständigen Weg — von Rohdaten über Wissen und Fähigkeiten bis zu
          Lösungen und messbaren Business Outcomes. Nicht als Technologie-Stack,
          sondern als konzeptionelles Modell für Architekten, CIOs und
          Entscheidungsträger.
        </p>
        <div class="page-view__flow">
          <span class="page-view__flow-step">Daten</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Intelligenz</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Fähigkeit</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Lösung</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step accent3">Business Outcome</span>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Für wen?</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Zielgruppen benennen -->
          OIA richtet sich an Enterprise Architects, CIOs und alle, die
          KI-Vorhaben in Organisationen strategisch verankern wollen —
          jenseits von Pilotprojekten und Tool-Evaluierungen.
        </p>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/">← Zum Architekturdiagramm</a>
        <a class="page-view__cta-link primary" href="#/mitmachen">Mitmachen →</a>
      </div>

    </div>
  `
  return view
}
