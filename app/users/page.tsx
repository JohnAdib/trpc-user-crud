'use client'

import { EmptyState } from '@components/layout/empty-state'
import { Loading } from '@components/layout/loading'
import { PageHeader } from '@components/layout/page-header'
import { UsersTable } from '@components/users/users-table'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'

export default function Page() {
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

  const deleteHandler = (id: string): boolean => {
    console.log('delete user with id: ', id)
    return true
  }

  const handleDelete = (id: string) => {
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
        const deleted = deleteHandler(id)
        if (deleted) {
          Swal.fire({
            title: 'Deleted!',
            text: 'User has been deleted!',
            icon: 'success'
          })
        } else {
          Swal.fire('Error!', 'Something went wrong!', 'error')
        }
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
