import { db, users } from '@db'
import { IUser } from '@interfaces'

export async function getUsers({
  offset,
  limit
}: {
  offset: number
  limit: number
}): Promise<IUser[]> {
  return await db.select().from(users).offset(offset).limit(limit)
}
