// @vitest-environment jsdom
import { describe, test, expect } from 'vitest'
import type { OIAModel } from './data/types'
import { initRouter } from './router'

const mockModel: OIAModel = {
  meta: { version: '0.1.0', title: 'OIA', subtitle: '', created: '2024-01-01' },
  elements: [],
  connections: [],
  badges: [],
  views: [],
  legend: { show: false, position: 'bottom' },
}

describe('initRouter', () => {
  test('renders diagram-wrapper for default hash', () => {
    window.location.hash = '#/'
    const container = document.createElement('div')
    initRouter(mockModel, container)
    expect(container.querySelector('.diagram-wrapper')).not.toBeNull()
  })

  test('renders page-view for #/motivation hash', () => {
    window.location.hash = '#/motivation'
    const container = document.createElement('div')
    initRouter(mockModel, container)
    expect(container.querySelector('.page-view')).not.toBeNull()
  })

  test('renders page-view for #/contribute hash', () => {
    window.location.hash = '#/contribute'
    const container = document.createElement('div')
    initRouter(mockModel, container)
    expect(container.querySelector('.page-view')).not.toBeNull()
  })

  test('renders page-view for #/about hash', () => {
    window.location.hash = '#/about'
    const container = document.createElement('div')
    initRouter(mockModel, container)
    expect(container.querySelector('.page-view')).not.toBeNull()
  })
})
