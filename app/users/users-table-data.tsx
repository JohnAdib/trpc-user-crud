'use client'
import { trpc } from '~/trpc/client'

export function UsersTableData() {
  const greeting = trpc.hello.useQuery()
  if (!greeting.data) return <div>Loading...</div>
  return <div>{greeting.data.greeting}</div>
}
