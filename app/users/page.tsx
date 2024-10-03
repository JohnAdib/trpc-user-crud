'use client'

import { PageHeader } from '@/components/layout/page-header'
import { UsersTable } from '@/components/users/users-table'
import { IUser, UserRole, UserStatus } from '@/interfaces'
import Swal from 'sweetalert2'

const sampleData: IUser[] = [
  {
    id: 1,
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: UserRole.User,
    status: UserStatus.Active
  },
  {
    id: 2,
    name: 'Lindsay Walton',
    email: 'lindsay@example.com',
    role: UserRole.User,
    status: UserStatus.Active
  },
  {
    id: 3,
    name: 'Lindsay Walton',
    email: 'lindsay2@example.com',
    role: UserRole.User,
    status: UserStatus.Active
  }
]

export default function Page() {
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
      <UsersTable users={sampleData} onClickDelete={handleDelete} />
    </>
  )
}
