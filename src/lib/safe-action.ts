import { getTranslations } from 'next-intl/server'
import { createSafeActionClient } from 'next-safe-action'

export const safeClient = createSafeActionClient({
  async handleServerError(error) {
    console.log({ error: error.message })

    const t = await getTranslations('ContactForm.toasts')
    return t('error')
  },
})
