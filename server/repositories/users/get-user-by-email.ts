import { db, users } from '@db'
import { IUser } from '@interfaces'
import { eq } from 'drizzle-orm'

export async function getUserByEmail({
  email
}: {
  email: string
}): Promise<IUser> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then((data) => data[0])

  return result
}
