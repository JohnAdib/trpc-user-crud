'use client'

import { Divider } from '@components/atoms/divider'
import { Heading, Subheading } from '@components/atoms/heading'
import { Textarea } from '@components/atoms/textarea'
import { Input } from '@components/atoms/input'
import { Text } from '@components/atoms/text'
import clsx from 'clsx'
import { Button } from '@components/atoms/button'
import { Select } from '@components/atoms/select'
import { UserRole } from '@interfaces'

function UserRoleOptions() {
  return Object.keys(UserRole).map((role) => (
    <option key={role} value={role.toLocaleLowerCase()}>
      {role}
    </option>
  ))
}

interface IAddUser {
  onSubmit: (data: any) => void
}

export function AddUser({ onSubmit }: IAddUser) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Collect the form data using FormData API
    const formData = new FormData(e.currentTarget)

    // Create an object from the form data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      bio: formData.get('bio')
    }

    // Pass the collected data to the onSubmit handler
    onSubmit(data)
  }

  return (
    <form method="post" className="mx-auto max-w-4xl" onSubmit={handleSubmit}>
      <Heading>Add New User</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Name</Subheading>
          <Text>This will be displayed on your public profile.</Text>
        </div>
        <div>
          <Input
            aria-label="Name"
            name="name"
            defaultValue=""
            autoComplete="name"
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Email</Subheading>
          <Text>This is how customers can contact you for support.</Text>
        </div>
        <div className="space-y-4">
          <Input
            type="email"
            aria-label="Email"
            name="email"
            autoComplete="email"
            // defaultValue="info@example.com"
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Role</Subheading>
          <Text>The User Role determines what permissions you have.</Text>
        </div>
        <div>
          <Select aria-label="Role" name="role" defaultValue="user">
            <UserRoleOptions />
          </Select>
        </div>
      </section>

      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Bio</Subheading>
          <Text>
            This will be displayed on your public profile. Maximum 500
            characters.
          </Text>
        </div>
        <div>
          <Textarea
            aria-label="Organization Bio"
            name="bio"
            resizable={false}
            rows={3}
            className={clsx('resize-none')}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  )
}
