'use client'

import { Pagination } from '@components/layout/pagination'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { UsersTable } from '@components/users/users-table'
import { trpc } from '~/trpc/client'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()

  const searchParamPage = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string, 10)
    : 1

  // TODO: Make this configurable and move it to ENV
  // For now, we will hardcode it to 2 to keep it simple and test the pagination
  const defaultPerPage = 2
  const searchParamLimit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit') as string, 10)
    : defaultPerPage

  const { data } = trpc.getUsers.useQuery(
    {
      page: searchParamPage,
      perPage: searchParamLimit
    },
    {
      staleTime: 0
    }
  )

  if (data === undefined) {
    return <Loading />
  }

  if (data === null || data?.result?.length === 0) {
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
        btnColor="sky"
        btnHref="/users/add"
      />
      <UsersTable users={data?.result} />
      <Pagination
        currentPage={data?.meta?.currentPage}
        totalResults={data?.meta?.totalItems}
        resultsPerPage={data?.meta?.perPage}
        baseUrl="/users"
      />
    </>
  )
}
