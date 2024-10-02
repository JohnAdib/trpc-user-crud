import { UserRole } from './enum/type-user-role'
import { UserStatus } from './enum/type-user-status'

interface IUserBase {
  firstName: string
  lastName: string
  email: string
  role: UserRole
  bio?: string
  status?: UserStatus
}

export interface IUserWithPassword extends IUserBase {
  password: string
}

export interface IUserWithoutPassword extends IUserBase {
  password?: never
}

export interface IUserListResponse {
  users: IUserWithoutPassword[]
}

export interface IDeleteUser {
  id: number
}
