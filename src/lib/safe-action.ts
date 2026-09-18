import { createSafeActionClient } from 'next-safe-action'

export const safeClient = createSafeActionClient({
  handleServerError(error) {
    console.log({ error: error.message })
    return 'Ha ocurrido un error'
  },
})
