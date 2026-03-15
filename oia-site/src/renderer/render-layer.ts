import type { OIAModel, Container } from '../data/types'
import {
  getBadgeIcons,
  renderSituationLayer,
  renderUseCaseLayer,
  renderCapabilitiesLayer,
  renderFeaturesLayer,
  renderInfrastructureLayer,
  renderDataSources,
} from './render-layer-items'
import {
  renderActorsLayer,
  renderSolutionsLayer,
  renderKnowledgeCore,
  renderPipeline,
  renderOutcomeLayer,
} from './render-layer-blocks'

type LayerRenderer = (model: OIAModel, layer: Container) => string

const layerRenderers: Record<string, LayerRenderer> = {
  '#L9': (model, layer) => `<div class="actors-grid">${renderActorsLayer(model, layer)}</div>`,
  '#L8': (model, layer) => `<div class="sit-grid">${renderSituationLayer(model, layer)}</div>`,
  '#L7': (model, layer) => `<div class="usecase-grid">${renderUseCaseLayer(model, layer)}</div>`,
  '#L6': (model, layer) => `<div class="sol-grid">${renderSolutionsLayer(model, layer)}</div>`,
  '#L5': (model, layer) => `<div class="cap-grid">${renderCapabilitiesLayer(model, layer)}</div>`,
  '#L4': (model, layer) => `<div class="tag-row">${renderFeaturesLayer(model, layer)}</div>`,
  '#L2': (model, layer) => `<div class="tag-row">${renderInfrastructureLayer(model, layer)}</div>`,
  '#L10': (model, layer) => `<div class="outcome-grid">${renderOutcomeLayer(model, layer)}</div>`,
  '#L1b': renderPipeline,
  '#L1': (model, layer) => `<div class="data-grid">${renderDataSources(model, layer)}</div>`,
}

export function renderLayer(model: OIAModel, layer: Container): HTMLElement {
  const isCore = layer.meta?.highlighted === true
  const isPipeline = layer.containerType === 'pipeline'

  const wrapper = document.createElement('div')
  wrapper.dataset.id = layer.id

  if (isCore) {
    wrapper.className = 'layer-core'
    const numId = layer.id.replace('#', '')
    wrapper.innerHTML = `
      <div class="layer-header">
        <span class="layer-num layer-num--core">${numId}</span>
        <span class="layer-title">${layer.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc layer-desc--core">${layer.description || ''}</span>
        ${getBadgeIcons(model, layer.badges)}
      </div>
      ${renderKnowledgeCore(model, layer)}
    `
    return wrapper
  }

  wrapper.className = 'layer'
  const numId = layer.id.replace('#', '')
  const renderer = layerRenderers[layer.id] ?? (isPipeline ? renderPipeline : null)
  const content = renderer ? renderer(model, layer) : ''

  wrapper.innerHTML = `
    <div class="layer-header">
      <span class="layer-num">${numId}</span>
      <span class="layer-title">${layer.label}</span>
      <span class="layer-desc">${layer.description || ''}</span>
      ${getBadgeIcons(model, layer.badges)}
    </div>
    ${content}
  `
  return wrapper
}
