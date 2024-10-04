import Swal from 'sweetalert2'

interface IParseZodError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}

export function parseZodError({ error }: IParseZodError) {
  // Extract the error message object
  const errorMessage = error?.message

  let errorMessageObj = []
  try {
    errorMessageObj = JSON.parse(errorMessage)
  } catch (e) {
    console.log('Failed to parse error message as JSON')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errMessageArray = errorMessageObj?.map((err: any) => err.message)

  // Join the messages into a single string
  const errorMessagesString = errMessageArray.join('<br>')

  Swal.fire({
    title: 'Error!',
    text: 'Failed to add a new user!',
    footer: errorMessagesString,
    icon: 'error'
  })
}
