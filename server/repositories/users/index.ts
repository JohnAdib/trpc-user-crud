import { getUsers } from './get-users'
import { addUser } from './add-user'
import { deleteUser } from './delete-user'
import { getUserById } from './get-user-by-id'

export const repoUsers = {
  getUsers,
  addUser,
  deleteUser,
  getUserById
}
