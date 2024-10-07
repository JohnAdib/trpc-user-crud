import { describe, expect, it } from 'vitest'
import { validatePagination } from './validate-pagination'

describe('validatePagination schema', () => {
  it('should validate a valid pagination input successfully', () => {
    const validPaginationData = {
      page: 2,
      perPage: 20
    }

    const parsed = validatePagination.parse(validPaginationData)

    expect(parsed).toEqual(validPaginationData)
  })

  it('should default to page 1 when page number is not provided', () => {
    const paginationData = {
      perPage: 15
    }

    const parsed = validatePagination.parse(paginationData)

    expect(parsed).toEqual({ page: 1, perPage: 15 })
  })

  it('should default to perPage 10 when perPage is not provided', () => {
    const paginationData = {
      page: 3
    }

    const parsed = validatePagination.parse(paginationData)

    expect(parsed).toEqual({ page: 3, perPage: 10 })
  })

  it('should fail validation when page is less than 1', () => {
    const invalidPaginationData = {
      page: 0,
      perPage: 10
    }

    expect(() => validatePagination.parse(invalidPaginationData)).toThrowError(
      'Page number must be at least 1'
    )
  })

  it('should fail validation when perPage is less than 1', () => {
    const invalidPaginationData = {
      page: 1,
      perPage: 0
    }

    expect(() => validatePagination.parse(invalidPaginationData)).toThrowError(
      'Items per page must be at least 1'
    )
  })
})
