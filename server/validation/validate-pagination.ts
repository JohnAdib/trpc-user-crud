import { z } from 'zod'

export const validatePagination = z.object({
  page: z.number().min(1, 'Page number must be at least 1').default(1),
  perPage: z.number().min(1, 'Items per page must be at least 1').default(10)
})
