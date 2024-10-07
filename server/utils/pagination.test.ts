import { describe, expect, it } from 'vitest'
import { paginate } from './pagination'
import { IPaginationResult } from '@interfaces'

describe('paginate function', () => {
  it('should correctly paginate items and return proper metadata', () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5']
    const totalItems = 5
    const perPage = 2
    const currentPage = 1

    const expected: IPaginationResult<string> = {
      result: ['item1', 'item2'],
      meta: {
        totalItems: 5,
        totalPages: 3, // 5 total items / 2 per page = 3 pages
        currentPage: 1,
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: items.slice(0, perPage),
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle out-of-range current page by adjusting to the nearest valid page', () => {
    // const items = ['item1', 'item2', 'item3', 'item4', 'item5']
    const totalItems = 5
    const perPage = 2
    const currentPage = 5 // Invalid page

    const expected: IPaginationResult<string> = {
      result: [], // No items for an out-of-range page
      meta: {
        totalItems: 5,
        totalPages: 3, // 5 total items / 2 per page = 3 pages
        currentPage: 3, // Adjusted to the last page (safe page)
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: [],
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle when current page is less than 1 by adjusting to 1', () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5']
    const totalItems = 5
    const perPage = 2
    const currentPage = 0 // Invalid page

    const expected: IPaginationResult<string> = {
      result: ['item1', 'item2'], // Return first page's items
      meta: {
        totalItems: 5,
        totalPages: 3,
        currentPage: 1, // Adjusted to the first page
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: items.slice(0, perPage),
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle empty items array', () => {
    const items: string[] = []
    const totalItems = 0
    const perPage = 2
    const currentPage = 1

    const expected: IPaginationResult<string> = {
      result: [],
      meta: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: items,
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle perPage being larger than total items', () => {
    const items = ['item1', 'item2', 'item3']
    const totalItems = 3
    const perPage = 10
    const currentPage = 1

    const expected: IPaginationResult<string> = {
      result: ['item1', 'item2', 'item3'],
      meta: {
        totalItems: 3,
        totalPages: 1,
        currentPage: 1,
        perPage: 10
      }
    }

    const result = paginate({
      paginatedItems: items,
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle the last page with partial items', () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5']
    const totalItems = 5
    const perPage = 2
    const currentPage = 3

    const expected: IPaginationResult<string> = {
      result: ['item5'], // Only 1 item on the last page
      meta: {
        totalItems: 5,
        totalPages: 3,
        currentPage: 3,
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: items.slice(4), // Only item5 remains for the last page
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })

  it('should handle an exact match for total items and per page', () => {
    const items = ['item1', 'item2', 'item3', 'item4']
    const totalItems = 4
    const perPage = 2
    const currentPage = 2

    const expected: IPaginationResult<string> = {
      result: ['item3', 'item4'], // Second page items
      meta: {
        totalItems: 4,
        totalPages: 2, // 4 total items / 2 per page = 2 pages
        currentPage: 2,
        perPage: 2
      }
    }

    const result = paginate({
      paginatedItems: items.slice(2),
      totalItems,
      currentPage,
      perPage
    })

    expect(result).toEqual(expected)
  })
})
