import { describe, test, expect, beforeEach, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import model from '../src/data/oia-model.json'
import type { OIAModel } from '../src/data/types'

describe('initRouter — overview route (#/)', () => {
  let container: HTMLElement

  beforeEach(() => {
    vi.resetModules()
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
      url: 'http://localhost/#/',
    })
    global.document = dom.window.document
    global.window = dom.window as any
    container = dom.window.document.createElement('div')
  })

  test('renders diagram-wrapper on overview route', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.querySelector('.diagram-wrapper')).not.toBeNull()
  })

  test('adds zoom-controls to container', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.querySelector('.zoom-controls')).not.toBeNull()
  })

  test('zoom-slider range is 40–100', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    const slider = container.querySelector('.zoom-slider') as HTMLInputElement
    expect(slider?.min).toBe('40')
    expect(slider?.max).toBe('100')
  })

  test('default zoom is 75% → zoom-full class on diagram-wrapper', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    const wrapper = container.querySelector('.diagram-wrapper') as HTMLElement
    expect(wrapper?.classList.contains('zoom-full')).toBe(true)
  })

  test('zoom label shows 75%', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    const label = container.querySelector('.zoom-label')
    expect(label?.textContent).toBe('75%')
  })

  test('diagram elements have data-id attributes', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.querySelectorAll('[data-id]').length).toBeGreaterThan(0)
  })
})

describe('initRouter — detail route (#/detail/:id)', () => {
  let container: HTMLElement

  beforeEach(() => {
    vi.resetModules()
    // %23L3 decodes to #L3
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
      url: 'http://localhost/#/detail/%23L3',
    })
    global.document = dom.window.document
    global.window = dom.window as any
    container = dom.window.document.createElement('div')
  })

  test('renders detail-view when hash starts with #/detail/', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.querySelector('.detail-view')).not.toBeNull()
  })

  test('detail view shows element label', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.innerHTML).toContain('Organizational Knowledge Core')
  })

  test('detail view has back link', async () => {
    const { initRouter } = await import('../src/router')
    initRouter(model as OIAModel, container)
    expect(container.querySelector('.detail-back')).not.toBeNull()
  })
})
