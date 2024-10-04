import { repositories } from '@server/repositories'

export const deleteUser = async (input: { id: number }): Promise<void> => {
  await repositories.users.deleteUser({
    userId: input.id
  })
}
