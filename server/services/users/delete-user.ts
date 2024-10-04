import { sampleUsers } from './sample-users'

export const deleteUser = (input: { id: number }): boolean => {
  const index = sampleUsers.findIndex((user) => user.id === input.id)

  if (index !== -1) {
    sampleUsers.splice(index, 1)
    return true
  }

  return false
}
