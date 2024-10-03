import { UserRole } from './enum/type-user-role'
import { UserStatus } from './enum/type-user-status'

export interface IUser {
  id: number
  name: string
  email: string
  role: UserRole
  bio?: string
  status?: UserStatus
}
