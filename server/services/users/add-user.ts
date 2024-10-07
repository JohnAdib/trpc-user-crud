import { IUserAdd, UserRole, UserStatus } from '@interfaces'
import { repositories } from '@server'

export const addUser = async (input: IUserAdd): Promise<boolean> => {
  const userRole: UserRole = input.role as UserRole

  const isUserExist = await repositories.users.getUserByEmail({
    email: input.email
  })

  if (isUserExist) {
    throw new Error(
      'User with this email already exists, please use another email'
    )
  }

  await repositories.users.addUser({
    name: input.name,
    email: input.email,
    role: userRole,
    bio: input.bio || '',
    status: UserStatus.ACTIVE
  })

  return true
}
