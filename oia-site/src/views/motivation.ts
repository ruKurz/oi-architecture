export function renderMotivationView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__hero">
      <div class="page-view__hero-line">This is an open architecture of participation.</div>
      <div class="page-view__hero-sub">For everyone.</div>
    </div>

    <div class="page-view__content">

      <div class="page-view__eyebrow">Motivation</div>

      <h1 class="page-view__lead">
        Build the Architecture Together
      </h1>

      <div class="page-view__intro">
        <p>OIA is not a finished framework.</p>
        <p>
          It is a <strong>working model</strong> for how organizations can turn knowledge into action.
        </p>
        <p>
          Version <strong>0.1.0</strong> is intentionally early.<br>
          The architecture will evolve through real implementations, experiments and operational feedback.
        </p>
        <p>Not through theory alone.</p>
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">An Open Architecture of Participation</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          OIA is designed as a <strong>shared architectural thinking model</strong>.
        </p>
        <p class="page-view__body" style="margin-bottom: 20px;">
          It improves when people who actually build systems contribute their experience:
        </p>
        <div class="page-view__audience">
          <span class="page-view__audience-item">enterprise architects</span>
          <span class="page-view__audience-item">knowledge management practitioners</span>
          <span class="page-view__audience-item">AI engineers</span>
          <span class="page-view__audience-item">data platform teams</span>
          <span class="page-view__audience-item">digital transformation leaders</span>
        </div>
        <p class="page-view__body page-view__manifesto">
          <strong>Architecture that grows from practice.</strong>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">What Contributions Look Like</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          Contributions do not have to be large.<br>
          The most valuable inputs often come from real implementation experience:
        </p>
        <div class="page-view__cards">
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>a failed RAG experiment</li>
              <li>a difficult enterprise search integration</li>
              <li>governance challenges around AI assistants</li>
            </ul>
          </div>
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>knowledge graph modelling problems</li>
              <li>operational lessons from production systems</li>
              <li>architectural gaps you have encountered</li>
            </ul>
          </div>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          Real systems create real learning.<br>
          That learning improves the architecture.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">From Reference Model to Real Systems</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          The long-term ambition of OIA is to evolve step by step:
        </p>
        <div class="page-view__flow page-view__flow--vertical">
          <span class="page-view__flow-step">Reference Architecture</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Architectural Patterns</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Reference Implementations</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step accent3">Operational Organizational Intelligence Systems</span>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          This evolution can only happen through <strong>shared practice</strong>.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Join the Work</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          If you are building systems where <strong>knowledge must become action</strong>,<br>
          your experience belongs in this architecture.
        </p>
        <div class="page-view__join-steps">
          <div class="page-view__join-step">
            <span class="page-view__step-num">01</span>
            <span>Explore the model</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">02</span>
            <span>Challenge assumptions</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">03</span>
            <span>Contribute insights from real implementations</span>
          </div>
        </div>
        <p class="page-view__body page-view__manifesto" style="margin-top: 28px;">
          OIA is not a finished answer.<br><br>
          It is a place where the architecture of organizational intelligence is <strong>built in the open</strong>.
        </p>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/">← Zum Architekturdiagramm</a>
        <a class="page-view__cta-link primary" href="#/contribute">Contribute →</a>
      </div>

      <div class="page-view__charter">
        <em>Architecture does not emerge from presentations.</em><br>
        <em>It emerges from systems that were built, tested, broken — and rebuilt.</em>
      </div>

    </div>
  `
  return view
}
