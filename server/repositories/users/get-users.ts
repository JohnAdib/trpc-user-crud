import { db, users } from '@db'

export async function getUsers({
  page = 1,
  perPage = 10
}: {
  page?: number
  perPage?: number
}) {
  const offset = (page - 1) * perPage
  return await db.select().from(users).offset(offset).limit(perPage)
}
