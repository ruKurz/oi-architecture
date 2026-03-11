import { describe, test, expect, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import model from '../src/data/oia-model.json'
import type { OIAModel } from '../src/data/types'
import { renderDetailView } from '../src/views/detail'

beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.document = dom.window.document
  global.window = dom.window as any
})

describe('renderDetailView', () => {
  test('returns element with class detail-view', () => {
    const el = renderDetailView(model as OIAModel, '#L3')
    expect(el.className).toBe('detail-view')
  })

  test('shows element id and label for known container', () => {
    const el = renderDetailView(model as OIAModel, '#L3')
    expect(el.innerHTML).toContain('#L3')
    expect(el.innerHTML).toContain('Organizational Knowledge Core')
  })

  test('back link points to #/', () => {
    const el = renderDetailView(model as OIAModel, '#L1')
    const back = el.querySelector('.detail-back')
    expect(back).not.toBeNull()
    expect(back?.getAttribute('href')).toBe('#/')
  })

  test('renders detail-id element', () => {
    const el = renderDetailView(model as OIAModel, '#L3')
    expect(el.querySelector('.detail-id')).not.toBeNull()
    expect(el.querySelector('.detail-title')).not.toBeNull()
  })

  test('renders children for container element', () => {
    const el = renderDetailView(model as OIAModel, '#L9')
    expect(el.querySelector('.detail-items')).not.toBeNull()
    expect(el.querySelectorAll('.detail-item').length).toBeGreaterThan(0)
  })

  test('shows "No sub-elements" for item without children', () => {
    // Find any item (not container) in the model
    const item = (model as OIAModel).elements.find((e) => e.type === 'item')
    expect(item).toBeDefined()
    const el = renderDetailView(model as OIAModel, item!.id)
    expect(el.querySelector('.detail-items')).not.toBeNull()
    expect(el.innerHTML).toContain('No sub-elements')
  })

  test('shows not-found message for unknown id', () => {
    const el = renderDetailView(model as OIAModel, '#DOES_NOT_EXIST')
    expect(el.innerHTML).toContain('Element not found')
    expect(el.innerHTML).toContain('#DOES_NOT_EXIST')
  })

  test('back link is present in not-found view', () => {
    const el = renderDetailView(model as OIAModel, '#MISSING')
    expect(el.querySelector('.detail-back')).not.toBeNull()
  })
})
