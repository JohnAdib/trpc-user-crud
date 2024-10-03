import { UserRole, UserStatus } from '@interfaces'
import { z } from 'zod'

export const validateAddUser = z.object({
  name: z.string().min(1, 'Please provide a name'),
  email: z.string().email('Please provide a valid email'),
  role: z.nativeEnum(UserRole, {
    errorMap: () => ({
      message: 'Please provide a valid user role'
    })
  }),
  bio: z.string().optional(),
  status: z
    .nativeEnum(UserStatus, {
      errorMap: () => ({
        message: 'Please provide a valid user status'
      })
    })
    .optional()
})
