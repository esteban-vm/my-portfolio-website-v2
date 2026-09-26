import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@teispace/next-themes'
import { getTheme, getThemeScript } from '@teispace/next-themes/server'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { RootDock, RootFab } from '@/components/root'
import { THEME_COOKIE, THEME_MAP, THEMES } from '@/lib/constants'
import { Axis, Geist, GoodTimes } from '@/lib/fonts'
import '@/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('root_layout.metadata')

  return {
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    keywords: [t('keywords.1'), t('keywords.2'), t('keywords.3'), t('keywords.4')],
    authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
    generator: 'Next.js',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  // interactiveWidget: 'overlays-content',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const locale = await getLocale()
  const initialTheme = (await getTheme()) ?? ''
  const themeScript = getThemeScript({ initialTheme })

  return (
    <html
      className={`${Axis.variable} ${Geist.variable} ${GoodTimes.variable} h-full antialiased`}
      dir='ltr'
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: anti-FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='relative flex h-full min-h-192 flex-col items-center justify-center'>
        <ThemeProvider
          cookieOptions={{ name: THEME_COOKIE }}
          disableTransitionOnChange
          initialTheme={initialTheme}
          themes={THEMES}
          value={THEME_MAP}
        >
          <NextIntlClientProvider>
            <div className='relative flex min-h-full w-full flex-col items-center'>{children}</div>
            <Suspense fallback={null}>
              <RootFab />
            </Suspense>
            <RootDock />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
