import { describe, test, expect, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { model } from '../src/data/model'

// Provide minimal DOM for renderer tests
beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>')
  global.document = dom.window.document
  global.window = dom.window as any
})

describe('renderOIA', () => {
  test('returns an HTMLElement with class diagram-wrapper', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    expect(el.className).toBe('diagram-wrapper')
  })

  test('renders header with correct title', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    expect(el.innerHTML).toContain('Organizational')
    expect(el.innerHTML).toContain('Intelligence')
    expect(el.innerHTML).toContain('Architecture')
  })

  test('renders all 9 layers + pipeline as data-id attributes', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    ;['#L1', '#L2', '#L3', '#L4', '#L5', '#L6', '#L7', '#L8', '#L9', '#L1b'].forEach((id) => {
      expect(el.querySelector(`[data-id="${id}"]`), `Missing data-id="${id}"`).not.toBeNull()
    })
  })

  test('renders Knowledge Core with core-badge', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    expect(el.innerHTML).toContain('CENTRAL COMPONENT')
    expect(el.querySelector('.layer-core')).not.toBeNull()
  })

  test('renders legend when badges are present', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    expect(el.querySelector('.legend')).not.toBeNull()
    expect(el.innerHTML).toContain('Feedback Loop')
  })

  test('renders badge icons on tagged layers', async () => {
    const { renderOIA } = await import('../src/renderer/render-diagram')
    const el = renderOIA(model)
    expect(el.querySelectorAll('.badge-icon').length).toBeGreaterThan(0)
  })
})
