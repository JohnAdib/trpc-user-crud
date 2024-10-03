import { z } from 'zod'

export const validateUserId = z.object({
  id: z
    .number()
    .positive('Please provide a valid user ID, it must be a positive number')
})
