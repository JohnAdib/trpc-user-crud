import { UserRole } from './enum/type-user-role'
import { UserStatus } from './enum/type-user-status'

export interface IUser {
  id: number
  name: string
  email: string
  role: UserRole | string
  bio: string | null
  status?: UserStatus | string
}
