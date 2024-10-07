import { utils } from '@server'
import { repositories } from '@server'
import { IPaginationResult, IUser } from '@interfaces'

export const getUsers = async (input: { page: number; perPage: number }) => {
  if (input.page < 1 || input.perPage < 1) {
    throw new Error(
      'Invalid input for page and perPage. Must be positive integers'
    )
  }
  if (input.perPage > 100) {
    throw new Error('perPage must be less than or equal to 100')
  }

  const offset = (input.page - 1) * input.perPage

  const totalItems = await repositories.users.getUserCount()
  const paginatedItems: IUser[] = await repositories.users.getUsers({
    offset,
    limit: input.perPage
  })

  const paginatedUsers: IPaginationResult<IUser> = utils.paginate({
    paginatedItems,
    totalItems,
    currentPage: input.page,
    perPage: input.perPage
  })

  return paginatedUsers
}
