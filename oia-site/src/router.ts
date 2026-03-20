import type { OIAModel } from './data/types'
import { renderOIA } from './renderer/render-diagram'
import { renderDetailView } from './views/detail'
import { projectLayer } from './data/doc/projection'
import { renderMotivationView } from './views/motivation'
import { renderContributeView } from './views/contribute'
import { renderAboutView } from './views/about'
import { renderLegalView } from './views/legal'
import { renderNav } from './views/nav'
import {
  ZOOM_DEFAULT,
  ZOOM_MIN,
  ZOOM_MAX,
  ZOOM_STEP,
  ZOOM_FAR_THRESHOLD,
  ZOOM_MID_THRESHOLD,
} from './constants'

let model: OIAModel
let appContainer: HTMLElement
let navElement: HTMLElement | null = null
const DIAGRAM_NATIVE_WIDTH = 1440
function getInitialZoom(): number {
  return Math.max(ZOOM_MIN, Math.min(ZOOM_DEFAULT, window.innerWidth / DIAGRAM_NATIVE_WIDTH))
}

let zoomValue = getInitialZoom()

function setZoom(val: number) {
  zoomValue = val
  const wrapper = appContainer.querySelector('.diagram-wrapper') as HTMLElement | null
  if (wrapper) {
    wrapper.style.transform = `scale(${zoomValue})`
    const cls =
      zoomValue < ZOOM_FAR_THRESHOLD
        ? 'zoom-far'
        : zoomValue < ZOOM_MID_THRESHOLD
          ? 'zoom-mid'
          : 'zoom-full'
    wrapper.classList.remove('zoom-far', 'zoom-mid', 'zoom-full')
    wrapper.classList.add(cls)
  }
  const label = appContainer.querySelector('.zoom-label') as HTMLElement | null
  if (label) label.textContent = Math.round(zoomValue * 100) + '%'
  const slider = appContainer.querySelector('.zoom-slider') as HTMLInputElement | null
  if (slider) slider.value = String(zoomValue * 100)
}

function attachClickHandlers() {
  appContainer.querySelectorAll('[data-id]').forEach((node) => {
    node.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = (node as HTMLElement).dataset.id
      if (id) window.location.hash = `#/detail/${id}`
    })
  })
}

function renderOverview() {
  appContainer.innerHTML = ''
  const diagram = renderOIA(model)
  appContainer.appendChild(diagram)
  setZoom(zoomValue)
  attachClickHandlers()

  // Zoom controls
  const controls = document.createElement('div')
  controls.className = 'zoom-controls'
  controls.innerHTML = `
    <span class="zoom-controls__label">Zoom</span>
    <input class="zoom-slider" type="range" min="${ZOOM_MIN * 100}" max="${ZOOM_MAX * 100}" value="${Math.round(zoomValue * 100)}" step="${ZOOM_STEP * 100}">
    <span class="zoom-label">${Math.round(zoomValue * 100)}%</span>
  `
  appContainer.appendChild(controls)

  const slider = controls.querySelector('.zoom-slider') as HTMLInputElement
  slider.addEventListener('input', () => setZoom(Number(slider.value) / 100))

  // Mousewheel zoom on slider area
  controls.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP
    setZoom(Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, zoomValue + delta)))
  })
}

function renderDetail(id: string) {
  appContainer.innerHTML = ''
  const projection = projectLayer(id)
  appContainer.appendChild(renderDetailView(model, id, projection))
  attachClickHandlers()
}

function renderPage(viewElement: HTMLElement) {
  appContainer.innerHTML = ''
  appContainer.appendChild(viewElement)
}

export function initRouter(oiaModel: OIAModel, container: HTMLElement) {
  model = oiaModel
  appContainer = container
  navElement = document.getElementById('site-nav')

  const fab = document.querySelector('.github-fab') as HTMLElement | null

  const route = () => {
    const hash = window.location.hash || '#/'

    if (navElement) renderNav(navElement)

    const isPageView =
      hash === '#/motivation' || hash === '#/contribute' || hash === '#/about' || hash === '#/legal'
    if (fab) fab.style.display = isPageView ? '' : 'none'

    if (hash.startsWith('#/detail/')) {
      renderDetail(decodeURIComponent(hash.replace('#/detail/', '')))
    } else if (hash === '#/motivation') {
      renderPage(renderMotivationView())
    } else if (hash === '#/contribute') {
      renderPage(renderContributeView())
    } else if (hash === '#/about') {
      renderPage(renderAboutView())
    } else if (hash === '#/legal') {
      renderPage(renderLegalView())
    } else {
      renderOverview()
    }
  }

  window.addEventListener('hashchange', route)
  route()
}
