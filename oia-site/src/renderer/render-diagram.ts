import type { OIAModel, Container } from '../data/types'
import { renderLayer } from './render-layer'
import { renderPanel } from './render-panel'

export function renderOIA(model: OIAModel): HTMLElement {
  const wrapper = document.createElement('div')
  wrapper.className = 'diagram-wrapper'

  // Header
  const header = document.createElement('div')
  header.className = 'header'
  header.innerHTML = `
    <div class="header-badge">Reference Architecture · V${model.meta.version} · ${model.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${model.meta.subtitle}</p>
    <div class="header-line"></div>
  `
  wrapper.appendChild(header)

  // Main grid
  const grid = document.createElement('div')
  grid.className = 'main-grid'

  // Left panel
  const leftPanel = model.elements.find((e) => e.id === '#panel-left' && e.type === 'container') as
    | Container
    | undefined
  if (leftPanel) {
    grid.appendChild(renderPanel(model, leftPanel))
  }

  // Center column: all layers sorted by order descending (top = highest order)
  const center = document.createElement('div')
  center.className = 'center-col'

  const layers = model.elements
    .filter((e) => e.type === 'container' && (e as Container).containerType === 'layer')
    .map((e) => e as Container)
    .sort((a, b) => (b.meta?.order ?? 0) - (a.meta?.order ?? 0))

  // Collect pipeline containers too (they sit between L1 and L2)
  const pipelines = model.elements
    .filter((e) => e.type === 'container' && (e as Container).containerType === 'pipeline')
    .map((e) => e as Container)

  // Build ordered list: layers sorted by order, insert pipelines by their order value
  const allCenter: Container[] = [...layers, ...pipelines].sort(
    (a, b) => (b.meta?.order ?? 0) - (a.meta?.order ?? 0),
  )

  for (const layer of allCenter) {
    center.appendChild(renderLayer(model, layer))
  }

  grid.appendChild(center)

  // Right panel
  const rightPanel = model.elements.find(
    (e) => e.id === '#panel-right' && e.type === 'container',
  ) as Container | undefined
  if (rightPanel) {
    grid.appendChild(renderPanel(model, rightPanel))
  }

  wrapper.appendChild(grid)

  // Legend
  if (model.legend.show && model.badges.length > 0) {
    const legend = document.createElement('div')
    legend.className = 'legend'
    const items = model.badges
      .map(
        (b) => `
      <div class="legend-item">
        <span class="legend-icon">${b.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${b.label}</span>
          <span class="legend-desc">${b.description}</span>
        </div>
      </div>
    `,
      )
      .join('')
    legend.innerHTML = `<div class="legend-title">Legend</div><div class="legend-items">${items}</div>`
    wrapper.appendChild(legend)
  }

  // Footer
  const footer = document.createElement('div')
  footer.className = 'footer'
  footer.textContent = `OIA · Organizational Intelligence Architecture · V${model.meta.version} · © ${model.meta.created} · ${model.meta.subtitle}`
  wrapper.appendChild(footer)

  return wrapper
}
