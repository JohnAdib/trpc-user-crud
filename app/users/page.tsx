'use client'

import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { UsersTable } from '@components/users/users-table'
import { useQueryClient } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'

export default function Page() {
  const queryClient = useQueryClient()
  const deleteUserMutation = trpc.deleteUser.useMutation({
    onSuccess: () => {
      // Invalidate and refetch the getUsers query when a user is deleted
      // queryClient.invalidateQueries([['getUsers']])
    }
  })
  const { data, isLoading } = trpc.getUsers.useQuery({
    page: 1,
    perPage: 10
  })

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

  return (
    <>
      <PageHeader
        title="Users"
        description="A list of all the users. You can add, view, and delete users."
        btnText="Add User"
        btnHref="/users/add"
      />
      <UsersTable users={data.result} onClickDelete={handleDelete} />
    </>
  )
}
