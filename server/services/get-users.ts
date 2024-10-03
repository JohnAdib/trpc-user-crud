import { paginate } from '@server/utils/pagination'
import { sampleUsers } from './sample-users'

export const getUsers = (input: { page: number; perPage: number }) => {
  return paginate(sampleUsers, input.page, input.perPage)
}
