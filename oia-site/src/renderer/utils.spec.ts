import { describe, test, expect } from 'vitest'
import type { OIAModel } from '../data/types'
import { getItem } from './utils'

const mockModel: OIAModel = {
  meta: { version: '0.1.0', title: 'OIA', subtitle: '', created: '2024-01-01' },
  elements: [
    { id: '#L1', type: 'container', containerType: 'layer', label: 'Data Layer', children: [] },
    { id: '#item1', type: 'item', itemType: 'datasource', label: 'Item One' },
  ],
  connections: [],
  badges: [],
  views: [],
  legend: { show: false, position: 'bottom' },
}

describe('getItem', () => {
  test('returns element for known container id', () => {
    const result = getItem(mockModel, '#L1')
    expect(result).toBeDefined()
    expect(result?.label).toBe('Data Layer')
  })

  test('returns element for known item id', () => {
    const result = getItem(mockModel, '#item1')
    expect(result?.label).toBe('Item One')
  })

  test('returns undefined for unknown id', () => {
    const result = getItem(mockModel, '#unknown')
    expect(result).toBeUndefined()
  })
})
