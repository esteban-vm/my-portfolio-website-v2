'use server'

import type { Locale } from 'next-intl'
import { cookies } from 'next/headers'
import { LOCALE_COOKIE } from '@/lib/constants'

export async function changeLanguage(locale: Locale) {
  const cookieStore = await cookies()
  cookieStore.set(LOCALE_COOKIE, locale)
}
