import { PageHeader } from '@/components/layout/page-header'
import { UsersTable } from '@/components/users/users-table'
import { IUserWithoutPassword, UserRole, UserStatus } from '@/interfaces'

const sampleData: IUserWithoutPassword[] = [
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
  return (
    <>
      <PageHeader
        title="Users"
        description="A list of all the users. You can add, view, and delete users."
        btnText="Add User"
        btnHref="/users/add"
      />
      <UsersTable users={sampleData} />
    </>
  )
}
