import type { OIAModel } from './data/types'
import { renderOIA } from './renderer/render-diagram'
import { renderDetailView } from './views/detail'

let model: OIAModel
let appEl: HTMLElement
let zoomValue = 0.75

function setZoom(val: number) {
  zoomValue = val
  const wrapper = appEl.querySelector('.diagram-wrapper') as HTMLElement | null
  if (wrapper) {
    wrapper.style.transform = `scale(${zoomValue})`
    const cls = zoomValue < 0.55 ? 'zoom-far' : zoomValue < 0.75 ? 'zoom-mid' : 'zoom-full'
    wrapper.classList.remove('zoom-far', 'zoom-mid', 'zoom-full')
    wrapper.classList.add(cls)
  }
  const label = appEl.querySelector('.zoom-label') as HTMLElement | null
  if (label) label.textContent = Math.round(zoomValue * 100) + '%'
  const slider = appEl.querySelector('.zoom-slider') as HTMLInputElement | null
  if (slider) slider.value = String(zoomValue * 100)
}

function attachClickHandlers() {
  appEl.querySelectorAll('[data-id]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = (el as HTMLElement).dataset.id
      if (id) window.location.hash = `#/detail/${id}`
    })
  })
}

function renderOverview() {
  appEl.innerHTML = ''
  const diagram = renderOIA(model)
  appEl.appendChild(diagram)
  setZoom(zoomValue)
  attachClickHandlers()

  // Zoom controls
  const controls = document.createElement('div')
  controls.className = 'zoom-controls'
  controls.innerHTML = `
    <span style="font-size:10px;color:var(--text-muted)">Zoom</span>
    <input class="zoom-slider" type="range" min="40" max="100" value="${Math.round(zoomValue * 100)}" step="5">
    <span class="zoom-label">${Math.round(zoomValue * 100)}%</span>
  `
  appEl.appendChild(controls)

  const slider = controls.querySelector('.zoom-slider') as HTMLInputElement
  slider.addEventListener('input', () => setZoom(Number(slider.value) / 100))

  // Mousewheel zoom on slider area
  controls.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY < 0 ? 0.05 : -0.05
    setZoom(Math.min(1, Math.max(0.4, zoomValue + delta)))
  })
}

function renderDetail(id: string) {
  appEl.innerHTML = ''
  appEl.appendChild(renderDetailView(model, id))
}

export function initRouter(oiaModel: OIAModel, container: HTMLElement) {
  model = oiaModel
  appEl = container

  const route = () => {
    const hash = window.location.hash || '#/'
    if (hash.startsWith('#/detail/')) {
      renderDetail(decodeURIComponent(hash.replace('#/detail/', '')))
    } else {
      renderOverview()
    }
  }

  window.addEventListener('hashchange', route)
  route()
}
