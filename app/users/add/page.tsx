'use client'

import { AddUser } from '@components/users/add-user'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'

export default function Page() {
  const router = useRouter()
  const addUserMutation = trpc.addUser.useMutation()

  const addHandler = async (formData: any): Promise<boolean> => {
    try {
      const addResult = await addUserMutation.mutateAsync(formData)

      Swal.fire({
        title: 'Success!',
        text: 'A new user has been added! ',
        icon: 'success'
      })
      router.push('/users')
    } catch (error) {
      Swal.fire('Error!', 'Failed to add a new user!', 'error')
      console.error('Failed to add user', error)
    }
    return true
  }

  return (
    <>
      <AddUser onSubmit={addHandler} />
    </>
  )
}
