import { db, users } from '@db'
import { count } from 'drizzle-orm'

export async function getUserCount(): Promise<number> {
  const dbResult = await db.select({ count: count() }).from(users)
  const totalRecords = dbResult[0].count

  return Number(totalRecords)
}
