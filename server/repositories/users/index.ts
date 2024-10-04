import { getUsers } from './get-users'
import { addUser } from './add-user'
import { deleteUser } from './delete-user'
import { getUserById } from './get-user-by-id'
import { getUserByEmail } from './get-user-by-email'
import { getUserCount } from './get-user-count'

export const repoUsers = {
  getUsers,
  getUserCount,
  addUser,
  deleteUser,
  getUserById,
  getUserByEmail
}
