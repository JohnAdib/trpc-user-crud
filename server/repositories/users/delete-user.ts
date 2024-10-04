import { db, users } from '@db'
import { eq } from 'drizzle-orm'

export async function deleteUser({ userId }: { userId: number }) {
  return await db.delete(users).where(eq(users.id, userId))
}
