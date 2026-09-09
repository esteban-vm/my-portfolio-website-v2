import type { Locale } from 'next-intl'
import { cookies, headers } from 'next/headers'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { LOCALE_COOKIE, LOCALES } from '@/lib/constants'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const savedLocale = cookieStore.get(LOCALE_COOKIE)?.value

  let locale: Locale

  if (hasLocale(LOCALES, savedLocale)) {
    locale = savedLocale
  } else {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language') ?? ''

    if (acceptLanguage.startsWith(LOCALES[1])) {
      locale = LOCALES[1]
    } else {
      locale = LOCALES[0]
    }
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
