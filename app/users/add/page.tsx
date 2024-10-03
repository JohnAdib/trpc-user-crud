'use client'

import { AddUser } from '@components/users/add-user'

export default function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form submitted')
  }

  return (
    <>
      <AddUser onSubmit={handleSubmit} />
    </>
  )
}
