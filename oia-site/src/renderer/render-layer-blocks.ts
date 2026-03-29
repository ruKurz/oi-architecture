import type { OIAModel, Container, ContentItem } from '../data/types'
import { getItem } from './utils'

export function renderTransformZone(
  model: OIAModel,
  pipeline: Container,
  concept: Container,
): HTMLElement {
  const wrapper = document.createElement('div')
  wrapper.className = 'transform-zone'
  wrapper.dataset.id = pipeline.id

  const pipelineNumId = pipeline.id.replace('#', '')
  const conceptNumId = concept.id.replace('#', '')

  const steps = pipeline.children
    .map((id, i, arr) => {
      const item = getItem(model, id) as ContentItem | undefined
      if (!item) return ''
      const isLast = i === arr.length - 1
      const isOutput = item.properties?.variant === 'output'
      const outputClass = isOutput ? ' pipeline-step--output' : ''
      const arrow = !isLast ? '<div class="pipeline-arrow">→</div>' : ''
      return `<div class="pipeline-step${outputClass}">${item.icon || ''}<br>${item.label}</div>${arrow}`
    })
    .join('')

  const chips = concept.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="concept-chip">${item.label}</span>` : ''
    })
    .join('')

  wrapper.innerHTML = `
    <div class="transform-zone-header">
      <span class="layer-num">${pipelineNumId}</span>
      <span class="layer-title">${pipeline.label}</span>
      <span class="layer-desc">${pipeline.description || ''}</span>
    </div>
    <div class="pipeline-row">${steps}</div>
    <div class="transform-output" data-id="${concept.id}">
      <span class="transform-output-label">${conceptNumId} Extracted →</span>
      <div class="concept-chips">${chips}</div>
    </div>
  `
  return wrapper
}

export function renderSolutionsLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id) as ContentItem | undefined
      return item
        ? `<div class="sol-item"><span class="sol-icon">${item.icon || ''}</span>${item.label}</div>`
        : ''
    })
    .join('')
}

export function renderKnowledgeCore(model: OIAModel, layer: Container): string {
  const blocks = layer.children
    .map((bid) => {
      const box = getItem(model, bid) as Container | undefined
      if (!box || box.type !== 'container') return ''
      const items = box.children
        .map((cid) => {
          const child = getItem(model, cid)
          return child ? child.label : ''
        })
        .join('<br>')
      return `<div class="core-block" data-id="${box.id}">
      <div class="core-block-title">${box.label}</div>
      <div class="core-block-items">${items}</div>
    </div>`
    })
    .join('')
  return `<div class="core-inner">${blocks}</div>`
}

export function renderPipeline(model: OIAModel, layer: Container): string {
  const steps = layer.children
    .map((id, i, arr) => {
      const item = getItem(model, id) as ContentItem | undefined
      if (!item) return ''
      const isLast = i === arr.length - 1
      const isOutput = item.properties?.variant === 'output'
      const outputClass = isOutput ? ' pipeline-step--output' : ''
      const arrow = !isLast ? '<div class="pipeline-arrow">→</div>' : ''
      return `<div class="pipeline-step${outputClass}">${item.icon || ''}<br>${item.label}</div>${arrow}`
    })
    .join('')
  return `<div class="pipeline-row">${steps}</div>`
}

export function renderOutcomeLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id) as ContentItem | undefined
      if (!item) return ''
      const categories = Array.isArray(item.properties?.outcome_category)
        ? (item.properties!.outcome_category as string[]).join(' · ')
        : (item.properties?.outcome_category as string) || ''
      return `<div class="outcome-item">
      <span class="outcome-label">${item.label}</span>
      ${categories ? `<span class="outcome-categories">${categories}</span>` : ''}
    </div>`
    })
    .join('')
}
