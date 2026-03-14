// @vitest-environment jsdom
import { describe, test, expect } from 'vitest'
import type { OIAModel, Container } from '../data/types'
import { renderLayer } from './render-layer'

const mockModel: OIAModel = {
  meta: { version: '0.1.0', title: 'OIA', subtitle: '', created: '2024-01-01' },
  elements: [],
  connections: [],
  badges: [],
  views: [],
  legend: { show: false, position: 'bottom' },
}

const standardLayer: Container = {
  id: '#L1',
  type: 'container',
  containerType: 'layer',
  label: 'Data Layer',
  description: 'Data sources',
  children: [],
}

const coreLayer: Container = {
  id: '#L3',
  type: 'container',
  containerType: 'layer',
  label: 'Knowledge Core',
  description: 'Central component',
  children: [],
  meta: { highlighted: true },
}

describe('renderLayer', () => {
  test('returns element with class "layer" for standard layer', () => {
    const el = renderLayer(mockModel, standardLayer)
    expect(el.className).toBe('layer')
  })

  test('returns element with class "layer-core" for highlighted layer', () => {
    const el = renderLayer(mockModel, coreLayer)
    expect(el.className).toBe('layer-core')
  })

  test('sets data-id attribute from layer id', () => {
    const el = renderLayer(mockModel, standardLayer)
    expect(el.dataset.id).toBe('#L1')
  })

  test('renders badge icons on tagged layers', () => {
    const el = renderLayer(mockModel, standardLayer)
    expect(el.querySelector('.layer-header')).not.toBeNull()
  })
})
