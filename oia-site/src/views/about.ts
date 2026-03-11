export function renderAboutView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">About</div>

      <h1 class="page-view__lead">
        <!-- PLACEHOLDER: Wer steckt hinter OIA? (Pyramid: Person und Kontext zuerst) -->
        Rüdiger Kurz —<br>
        Enterprise Architect mit Fokus auf intelligente Organisationen.
      </h1>

      <div class="page-placeholder">
        ⚠️ Inhalt wird vom Autor bereitgestellt — Struktur steht, Text ist Platzhalter
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Der Autor</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Kurzbiografie, Hintergrund, aktuelle Position -->
          [Autor füllt aus: Hintergrund, Erfahrung, Unternehmen/Rolle]
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Wie OIA entstand</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Entstehungsgeschichte — konkrete Erfahrungen, die das Modell ausgelöst haben -->
          [Autor füllt aus: Was hat gefehlt? Welche Projekte, welche Erkenntnisse?
          Thought Doership — konkrete Erfahrung statt Theorie]
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Wohin es geht</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Vision — was OIA langfristig sein soll -->
          [Autor füllt aus: Framework, Buch, Community? Mittelfristiges Ziel]
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Kontakt</h2>
        <p class="page-view__body">
          <!-- PLACEHOLDER: Kontaktweg -->
          E-Mail: <a class="page-view__link" href="mailto:kurz@vnc-online">kurz@vnc-online</a><br>
          LinkedIn: <!-- PLACEHOLDER: LinkedIn-URL einfügen -->
          GitHub: <a class="page-view__link" href="https://github.com/ruKurz" target="_blank" rel="noopener">github.com/ruKurz</a>
        </p>
      </section>

    </div>
  `
  return view
}
