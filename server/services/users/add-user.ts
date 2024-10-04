import { IUser, UserRole, UserStatus } from '@interfaces'
import { repositories } from '@server/repositories'

export const addUser = async (input: Omit<IUser, 'id'>) => {
  const userRole: UserRole = input.role as UserRole

  const addedUser = await repositories.users.addUser({
    name: input.name,
    email: input.email,
    role: userRole,
    bio: input.bio,
    status: UserStatus.Active
  })

  console.log('addedUser', addedUser)
  return true
}
