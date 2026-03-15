import type { OIAModel, Container, ContentItem } from '../data/types'
import { getItem } from './utils'

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
