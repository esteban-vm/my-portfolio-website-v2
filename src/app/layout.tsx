import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { balsamiq } from '@/lib/fonts'
import '@/styles/globals.css'

export type Props = LayoutProps<'/'>

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage')

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
  interactiveWidget: 'overlays-content',
}

export default async function RootLayout({ children }: Props) {
  return (
    <html className={`${balsamiq.variable} h-full antialiased`} dir='ltr' lang={await getLocale()}>
      <body className='flex min-h-full flex-col'>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
