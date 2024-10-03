import { IUser } from '@/interfaces'
import { sampleUsers } from './sample-users'

export const addUser = (input: Omit<IUser, 'id'>): IUser => {
  const id = Date.now()

  const user: IUser = {
    id,
    ...input
  }

  sampleUsers.push(user)
  return user
}
