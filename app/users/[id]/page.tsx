'use client'

import { BrowserFrame } from '@components/layout/browser-frame'
import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userId = parseInt(params.id, 10)
  const deleteUserMutation = trpc.deleteUser.useMutation()

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

  const deleteHandler = async (id: number): Promise<boolean> => {
    console.log('delete user with id: ', id)
    try {
      const deleteResult = await deleteUserMutation.mutateAsync({ id })
      console.log('deleteResult', deleteResult)

      Swal.fire({
        title: 'Deleted!',
        text: 'User has been deleted! ',
        icon: 'success'
      })
      router.push('/users')
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete user!', 'error')
      console.error('Failed to delete user', error)
    }
    return true
  }

  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text:
        "You won't be able to revert this! You are about to delete user with id " +
        id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHandler(id)
      }
    })
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
        btnAction={() => handleDelete(userId)}
      />
      <BrowserFrame>{userString}</BrowserFrame>
    </>
  )
}
