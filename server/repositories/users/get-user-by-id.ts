import { db, users } from '@db'
import { IUser } from '@interfaces'
import { eq } from 'drizzle-orm'

export async function getUserById({
  userId
}: {
  userId: number
}): Promise<IUser> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)
    .then((data) => data[0])

  return result
}
