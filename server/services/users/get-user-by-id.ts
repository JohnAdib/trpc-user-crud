import { IUser } from '@interfaces'
import { repositories } from '@server'

export const getUserById = async (input: {
  id: number
}): Promise<IUser | null> => {
  const userData = (await repositories.users.getUserById({
    userId: input.id
  })) as IUser

  return userData
}
