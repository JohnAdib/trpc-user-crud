import Swal from 'sweetalert2'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseApiError(error: any): void {
  // Extract the error message object
  const errorMessage = error?.message

  const errorMessagesString = parseErrorMessage(errorMessage)

  Swal.fire({
    title: 'Error!',
    text: 'Failed to add a new user!',
    footer: errorMessagesString,
    icon: 'error'
  })
}

function parseErrorMessage(errorMessage: string): string {
  let errorMessageObj = []
  try {
    errorMessageObj = JSON.parse(errorMessage)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_e) {
    console.log('Failed to parse error message as JSON')
    // if it's string, return it as is
    return errorMessage
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errMessageArray = errorMessageObj?.map((err: any) => err.message)

  // Join the messages into a single string
  const errorMessagesString = errMessageArray.join('<br>')

  return errorMessagesString
}
