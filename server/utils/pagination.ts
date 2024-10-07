import { IPaginationResult } from '@interfaces'

interface IPaginateInput<T> {
  paginatedItems: T[]
  totalItems: number
  currentPage: number
  perPage: number
}

export function paginate<T>({
  paginatedItems,
  totalItems,
  currentPage,
  perPage
}: IPaginateInput<T>): IPaginationResult<T> {
  const totalPages = Math.ceil(totalItems / perPage)

  // Ensure the current page is within the valid range
  const safePage = Math.max(1, Math.min(currentPage, totalPages))

  // Return the paginated result with metadata
  return {
    result: paginatedItems,
    meta: {
      totalItems,
      totalPages,
      currentPage: safePage,
      perPage
    }
  }
}
