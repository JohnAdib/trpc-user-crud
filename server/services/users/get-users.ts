import { paginate } from '@server/utils/pagination'
import { repositories } from '@server/repositories'

export const getUsers = async (input: { page: number; perPage: number }) => {
  const listOfUsers = await repositories.users.getUsers({
    page: input.page,
    perPage: input.perPage
  })

  return paginate(listOfUsers, input.page, input.perPage)
}
