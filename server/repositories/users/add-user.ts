import { db, users } from '@db'
import { UserRole, UserStatus } from '@interfaces'

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
}) {
  return await db
    .insert(users)
    .values({ name, email, role, bio, status })
    .returning()
}
