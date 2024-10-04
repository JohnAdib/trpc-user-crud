import { db, users } from '@db'
import { eq } from 'drizzle-orm'

export async function getUserById({ userId }: { userId: number }) {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)

  return result[0]
}
