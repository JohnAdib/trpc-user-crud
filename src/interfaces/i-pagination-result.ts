export interface IPaginationResult<T> {
  result: T[]
  totalItems: number
  totalPages: number
  currentPage: number
  perPage: number
}
