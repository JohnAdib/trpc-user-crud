import { db, users } from '@db'
import { eq } from 'drizzle-orm'

export async function getUserByEmail({ email }: { email: string }) {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  return result[0]
}
