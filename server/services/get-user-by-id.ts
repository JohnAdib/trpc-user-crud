import { IUser } from '@/interfaces'
import { sampleUsers } from './sample-users'

export const getUserById = (input: { id: number }): IUser | null => {
  const user = sampleUsers.find((user) => user.id === input.id)
  return user || null
}
