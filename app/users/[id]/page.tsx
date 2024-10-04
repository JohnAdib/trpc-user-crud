'use client'

import { BrowserFrame } from '@components/layout/browser-frame'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { trpc } from '~/trpc/client'

export default function Page({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10)

  const handleUserDelete = async () => {
    console.log('delete user with id: ', userId)
  }

  const { data } = trpc.getUserById.useQuery({
    id: userId
  })

  if (data === undefined) {
    return <Loading />
  }

  if (data === null) {
    return (
      <EmptyState
        title="This user does not exist!"
        description="Please check the user ID and try again or create a new user."
        btnHref="/users"
        btnText="List of Users"
      />
    )
  }

  // convert the user object to a string
  const userString = JSON.stringify(data, null, 2)

  return (
    <>
      <PageHeader
        title="User Profile"
        description="You can view the user's profile here!"
        btnText="Delete User"
        btnHref=""
        btnAction={handleUserDelete}
      />
      <BrowserFrame>{userString}</BrowserFrame>
    </>
  )
}
