import { UserRole } from './enum/type-user-role'
import { UserStatus } from './enum/type-user-status'

export interface IUserAdd {
  name: string
  email: string
  role: UserRole | string
  bio: string | null
}
export interface IUser extends IUserAdd {
  id: number
  status?: UserStatus | string
}
