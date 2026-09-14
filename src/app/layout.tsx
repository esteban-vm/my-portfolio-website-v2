import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@teispace/next-themes'
import { getTheme, getThemeScript } from '@teispace/next-themes/server'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { THEME_COOKIE, THEME_MAP, THEMES } from '@/lib/constants'
import { balsamiq } from '@/lib/fonts'
import '@/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('RootLayout')

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
  interactiveWidget: 'overlays-content',
}

export default async function RootLayout({ children, fab, dock }: LayoutProps<'/'>) {
  const locale = await getLocale()
  const initialTheme = (await getTheme()) ?? ''
  const themeScript = getThemeScript({ initialTheme })

  return (
    <html className={`${balsamiq.variable} antialiased`} dir='ltr' lang={locale} suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: anti-FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            cookieOptions={{ name: THEME_COOKIE }}
            defaultTheme={THEMES[0]}
            disableTransitionOnChange
            initialTheme={initialTheme}
            themes={THEMES}
            value={THEME_MAP}
          >
            <div className='flex size-full min-h-screen flex-col items-center'>
              {children}
              {fab}
              {dock}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
