'use client'

import { AddUser } from '@components/users/add-user'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { trpc } from '~/trpc/client'
import { parseApiError } from '../../_helpers/parse-zod-error'

export default function Page() {
  const router = useRouter()
  const addUserMutation = trpc.addUser.useMutation()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addHandler = async (formData: any): Promise<boolean> => {
    try {
      await addUserMutation.mutateAsync(formData)

      Swal.fire({
        title: 'Success!',
        text: 'A new user has been added!',
        icon: 'success'
      })
      router.push('/users')
    } catch (error) {
      parseApiError(error)
    }
    return true
  }

  return (
    <>
      <AddUser onSubmit={addHandler} />
    </>
  )
}
