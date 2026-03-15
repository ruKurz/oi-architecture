import { describe, test, expect, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { model } from '../src/data/model'
import { renderDetailView } from '../src/views/detail'

beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.document = dom.window.document
  global.window = dom.window as any
})

describe('renderDetailView', () => {
  test('returns element with class detail-view', () => {
    const el = renderDetailView(model, '#L3')
    expect(el.className).toBe('detail-view')
  })

  test('shows element id and label for known container', () => {
    const el = renderDetailView(model, '#L3')
    expect(el.innerHTML).toContain('#L3')
    expect(el.innerHTML).toContain('Organizational Knowledge Core')
  })

  test('breadcrumb contains OIA link to #/', () => {
    const el = renderDetailView(model, '#L1')
    const breadcrumb = el.querySelector('.detail-breadcrumb')
    expect(breadcrumb).not.toBeNull()
    const homeLink = el.querySelector('.detail-breadcrumb__item[href="#/"]')
    expect(homeLink).not.toBeNull()
  })

  test('renders detail-id element', () => {
    const el = renderDetailView(model, '#L3')
    expect(el.querySelector('.detail-id')).not.toBeNull()
    expect(el.querySelector('.detail-title')).not.toBeNull()
  })

  test('renders children for container element', () => {
    const el = renderDetailView(model, '#L3')
    expect(el.querySelector('.detail-items')).not.toBeNull()
    expect(el.querySelectorAll('.detail-item').length).toBeGreaterThan(0)
  })

  test('renders system participants detail view for #L9', () => {
    const el = renderDetailView(model, '#L9')
    expect(el.querySelector('.sp-layer')).not.toBeNull()
    expect(el.querySelector('.sp-spectrum')).not.toBeNull()
    expect(el.querySelector('.sp-insight')).not.toBeNull()
  })

  test('shows "No sub-elements" for item without children and no description', () => {
    const el = renderDetailView(model, '#I2-1')
    expect(el.querySelector('.detail-items')).not.toBeNull()
    expect(el.innerHTML).toContain('No sub-elements')
  })

  test('does not show "No sub-elements" for triad item with description', () => {
    const el = renderDetailView(model, '#L9-t-initiator')
    expect(el.innerHTML).not.toContain('No sub-elements')
    expect(el.querySelector('.detail-desc')).not.toBeNull()
  })

  test('shows not-found message for unknown id', () => {
    const el = renderDetailView(model, '#DOES_NOT_EXIST')
    expect(el.innerHTML).toContain('Element not found')
    expect(el.innerHTML).toContain('#DOES_NOT_EXIST')
  })

  test('back link is present in not-found view', () => {
    const el = renderDetailView(model, '#MISSING')
    expect(el.querySelector('.detail-back')).not.toBeNull()
  })
})
