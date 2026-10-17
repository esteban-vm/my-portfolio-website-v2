'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'
import { LOCALE_COOKIE, LOCALES } from '@/lib/constants'
import { safeClient } from '@/lib/safe-action'

export const changeLanguage = safeClient
  .inputSchema(z.object({ lang: z.enum(LOCALES) }))
  .action(async ({ parsedInput }) => {
    const cookieStore = await cookies()
    cookieStore.set(LOCALE_COOKIE, parsedInput.lang)
  })
