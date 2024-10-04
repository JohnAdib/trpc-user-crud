import { db, users } from '@db'
import { IUser, UserRole, UserStatus } from '@interfaces'

export async function addUser({
  name,
  email,
  role,
  bio = '',
  status
}: {
  name: string
  email: string
  role: UserRole
  bio?: string
  status: UserStatus
}): Promise<IUser> {
  return await db
    .insert(users)
    .values({ name, email, role, bio, status })
    .returning()
    .then((data) => data[0])
}
