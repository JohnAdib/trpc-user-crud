import { IUser, UserRole, UserStatus } from '@interfaces'
import { repositories } from '@server/repositories'

export const addUser = async (input: Omit<IUser, 'id'>) => {
  const userRole: UserRole = input.role as UserRole

  const isUserExist = await repositories.users.getUserByEmail({
    email: input.email
  })

  if (isUserExist) {
    throw new Error(
      'User with this email already exists, please use another email'
    )
  }

  const addedUser = await repositories.users.addUser({
    name: input.name,
    email: input.email,
    role: userRole,
    bio: input.bio || '',
    status: UserStatus.ACTIVE
  })

  console.log('addedUser', addedUser)
  return true
}
