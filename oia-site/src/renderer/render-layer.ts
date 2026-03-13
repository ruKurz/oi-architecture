import type { OIAModel, Container, ContentItem } from '../data/types'
import { getItem } from './utils'

function renderActorsLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((fid) => {
      const frame = getItem(model, fid) as Container | undefined
      if (!frame || frame.type !== 'container') return ''
      const isAgents = frame.meta?.variant === 'agents'
      const tagClass = isAgents ? 'accent4' : ''
      const tags = frame.children
        .map((cid) => {
          const child = getItem(model, cid)
          return child
            ? `<span class="tag ${tagClass}"><span class="dot"></span>${child.label}</span>`
            : ''
        })
        .join('')
      return `<div class="actor-group ${frame.meta?.variant || ''}" data-id="${frame.id}" style="cursor:pointer">
      <div class="actor-group-title">${frame.meta?.icon || ''} ${frame.label}${getBadgeIcons(model, frame.badges)}</div>
      <div class="tag-row">${tags}</div>
    </div>`
    })
    .join('')
}

function renderSituationLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="sit-item">${item.label}</span>` : ''
    })
    .join('')
}

function renderUseCaseLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item
        ? `<span class="usecase-item"><span class="usecase-dot"></span>${item.label}</span>`
        : ''
    })
    .join('')
}

function renderSolutionsLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id) as ContentItem | undefined
      return item
        ? `<div class="sol-item"><span class="sol-icon">${item.icon || ''}</span>${item.label}</div>`
        : ''
    })
    .join('')
}

function renderCapabilitiesLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="cap-item"><span class="cap-dot"></span>${item.label}</span>` : ''
    })
    .join('')
}

function renderFeaturesLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="tag mono accent2">${item.label}</span>` : ''
    })
    .join('')
}

function renderKnowledgeCore(model: OIAModel, layer: Container): string {
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
      return `<div class="core-block" data-id="${box.id}" style="cursor:pointer">
      <div class="core-block-title">${box.label}</div>
      <div class="core-block-items">${items}</div>
    </div>`
    })
    .join('')
  return `<div class="core-inner">${blocks}</div>`
}

function renderInfrastructureLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="tag"><span class="dot"></span>${item.label}</span>` : ''
    })
    .join('')
}

function renderPipeline(model: OIAModel, layer: Container): string {
  const steps = layer.children
    .map((id, i, arr) => {
      const item = getItem(model, id) as ContentItem | undefined
      if (!item) return ''
      const isLast = i === arr.length - 1
      const isOutput = item.properties?.variant === 'output'
      const style = isOutput
        ? ' style="border-color:var(--accent2-dim);color:var(--accent2-high)"'
        : ''
      const arrow = !isLast ? '<div class="pipeline-arrow">→</div>' : ''
      return `<div class="pipeline-step"${style}>${item.icon || ''}<br>${item.label}</div>${arrow}`
    })
    .join('')
  return `<div class="pipeline-row">${steps}</div>`
}

function renderOutcomeLayer(model: OIAModel, layer: Container): string {
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

function renderDataSources(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id) as ContentItem | undefined
      return item
        ? `<div class="data-item"><span class="data-icon">${item.icon || ''}</span>${item.label}</div>`
        : ''
    })
    .join('')
}

function getBadgeIcons(model: OIAModel, badgeIds: string[] | undefined): string {
  if (!badgeIds || badgeIds.length === 0) return ''
  return badgeIds
    .map((bid) => {
      const badge = model.badges.find((b) => b.id === bid)
      return badge
        ? `<span class="badge-icon" title="${badge.label}: ${badge.description}">${badge.icon}</span>`
        : ''
    })
    .join('')
}

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
  wrapper.style.cursor = 'pointer'

  if (isCore) {
    wrapper.className = 'layer-core'
    const numId = layer.id.replace('#', '')
    wrapper.innerHTML = `
      <div class="layer-header">
        <span class="layer-num" style="color:var(--accent2);opacity:0.6">${numId}</span>
        <span class="layer-title">${layer.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc" style="color:var(--accent2-mid)">${layer.description || ''}</span>
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
