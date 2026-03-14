import type { OIAModel, Container, ContentItem } from '../data/types'
import { getItem } from './utils'

export function getBadgeIcons(model: OIAModel, badgeIds: string[] | undefined): string {
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

export function renderSituationLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="sit-item">${item.label}</span>` : ''
    })
    .join('')
}

export function renderUseCaseLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item
        ? `<span class="usecase-item"><span class="usecase-dot"></span>${item.label}</span>`
        : ''
    })
    .join('')
}

export function renderCapabilitiesLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="cap-item"><span class="cap-dot"></span>${item.label}</span>` : ''
    })
    .join('')
}

export function renderFeaturesLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="tag mono accent2">${item.label}</span>` : ''
    })
    .join('')
}

export function renderInfrastructureLayer(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id)
      return item ? `<span class="tag"><span class="dot"></span>${item.label}</span>` : ''
    })
    .join('')
}

export function renderDataSources(model: OIAModel, layer: Container): string {
  return layer.children
    .map((id) => {
      const item = getItem(model, id) as ContentItem | undefined
      return item
        ? `<div class="data-item"><span class="data-icon">${item.icon || ''}</span>${item.label}</div>`
        : ''
    })
    .join('')
}
