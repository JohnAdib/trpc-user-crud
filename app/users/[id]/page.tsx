'use client'

import { BrowserFrame } from '@components/layout/browser-frame'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { trpc } from '~/trpc/client'

export default function Page({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id, 10)

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

  return <BrowserFrame>{userString}</BrowserFrame>
}
