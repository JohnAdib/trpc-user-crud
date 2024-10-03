'use client'
import { trpc } from '~/trpc/client'

export function UsersTableData() {
  // const greeting = trpc.hello.useQuery({
  //   text: 'tRPC'
  // })
  // if (!greeting.data) return <div>Loading...</div>
  // return <div>{greeting.data.greeting}</div>

  const { data, isLoading } = trpc.getUsers.useQuery({
    page: 1,
    perPage: 10
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data?.data?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
