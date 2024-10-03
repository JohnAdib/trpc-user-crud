export interface PaginationResult<T> {
  data: T[]
  totalItems: number
  totalPages: number
  currentPage: number
  perPage: number
}

export function paginate<T>(
  items: T[],
  currentPage: number,
  perPage: number
): PaginationResult<T> {
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / perPage)

  const safePage = Math.max(1, Math.min(currentPage, totalPages))

  const start = (safePage - 1) * perPage
  const paginatedItems = items.slice(start, start + perPage)

  return {
    data: paginatedItems,
    totalItems,
    totalPages,
    currentPage: safePage,
    perPage
  }
}
