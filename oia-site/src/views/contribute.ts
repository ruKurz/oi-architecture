export function renderContributeView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">Contribute</div>

      <h1 class="page-view__lead">
        <!-- PLACEHOLDER: Call-to-Action als Einstieg (Pyramid: Handlungsaufforderung zuerst) -->
        OIA ist ein offenes Modell —<br>
        dein Wissen macht es besser.
      </h1>

      <div class="page-placeholder">
        ⚠️ Inhalt wird vom Autor bereitgestellt — Struktur steht, Text ist Platzhalter
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Was wir suchen</h2>
        <div class="page-view__cards">
          <div class="page-view__card">
            <div class="page-view__card-title">Practitioners</div>
            <p class="page-view__card-body">
              <!-- PLACEHOLDER -->
              Du arbeitest täglich mit Enterprise Search, Knowledge Management
              oder KI in Organisationen? Deine Erfahrungen formen das Modell.
            </p>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Architekten & Berater</div>
            <p class="page-view__card-body">
              <!-- PLACEHOLDER -->
              Du entwickelst Architekturen für intelligente Organisationen?
              Dein Feedback zu Vollständigkeit und Praxistauglichkeit ist wertvoll.
            </p>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Entwickler</div>
            <p class="page-view__card-body">
              <!-- PLACEHOLDER -->
              Du möchtest am interaktiven Renderer mitbauen?
              TypeScript, Vite, klare Konventionen — der Einstieg dauert 20 Minuten.
            </p>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Wie du beiträgst</h2>
        <ol class="page-view__steps">
          <li class="page-view__step">
            <span class="page-view__step-num">01</span>
            <div>
              <strong>Repository erkunden</strong> —
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">github.com/ruKurz/oi-architecture</a>
            </div>
          </li>
          <li class="page-view__step">
            <span class="page-view__step-num">02</span>
            <div>
              <strong>CONTRIBUTING.md lesen</strong> — Prozess, Standards und erste Schritte
            </div>
          </li>
          <li class="page-view__step">
            <span class="page-view__step-num">03</span>
            <div>
              <strong>Issue öffnen oder kommentieren</strong> — kein Beitrag ist zu klein
            </div>
          </li>
          <li class="page-view__step">
            <span class="page-view__step-num">04</span>
            <div>
              <strong>Pull Request stellen</strong> — CI prüft alles, Review folgt zeitnah
            </div>
          </li>
        </ol>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link primary" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">Auf GitHub starten →</a>
      </div>

    </div>
  `
  return view
}
