/**
 * Reusable InfoBadge + overlay.
 * renderInfoBadge / renderInfoOverlay produce the HTML.
 * attachInfoBadgeHandlers wires open/close behaviour after
 * the returned element is in the DOM.
 */

export function renderInfoBadge(label: string, overlayId: string): string {
  return `<button class="info-badge" data-overlay-target="${overlayId}" type="button" aria-expanded="false">ⓘ ${label}</button>`
}

export function renderInfoOverlay(id: string, content: string): string {
  return `<div class="info-overlay" id="${id}" hidden role="dialog" aria-modal="true">
    <div class="info-overlay__panel">
      <button class="info-overlay__close" type="button" aria-label="Close">×</button>
      <div class="info-overlay__content">${content}</div>
    </div>
  </div>`
}

export function attachInfoBadgeHandlers(container: HTMLElement): void {
  const close = () => {
    container.querySelectorAll<HTMLElement>('.info-overlay').forEach((el) => {
      el.hidden = true
    })
    container.querySelectorAll<HTMLButtonElement>('.info-badge').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false')
    })
  }

  container.querySelectorAll<HTMLButtonElement>('.info-badge').forEach((badge) => {
    badge.addEventListener('click', (e) => {
      e.stopPropagation()
      const targetId = badge.dataset.overlayTarget
      if (!targetId) return
      const overlay = container.querySelector<HTMLElement>(`#${targetId}`)
      if (!overlay) return
      const opening = overlay.hidden
      close()
      if (opening) {
        overlay.hidden = false
        badge.setAttribute('aria-expanded', 'true')
      }
    })
  })

  // Close on backdrop click (click on .info-overlay outside .info-overlay__panel)
  container.querySelectorAll<HTMLElement>('.info-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close()
    })
    overlay.querySelector('.info-overlay__close')?.addEventListener('click', (e) => {
      e.stopPropagation()
      close()
    })
  })
}
