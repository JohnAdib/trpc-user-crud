'use client'

import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { UsersTable } from '@components/users/users-table'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'

export default function Page() {
  const { data, isLoading } = trpc.getUsers.useQuery(
    {
      page: 1,
      perPage: 10
    },
    {
      staleTime: 0
    }
  )

  if (data === undefined) {
    return <Loading />
  }

  if (data === null || data?.result.length === 0) {
    return (
      <EmptyState
        title="There are no users!"
        description="Get started by adding a new user."
        btnHref="/users/add"
        btnText="Add User"
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Users"
        description="A list of all the users. You can add, view, and delete users."
        btnText="Add User"
        btnHref="/users/add"
      />
      <UsersTable users={data.result} />
    </>
  )
}
