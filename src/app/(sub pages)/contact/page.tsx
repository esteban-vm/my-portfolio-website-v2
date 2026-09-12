import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage')

  return {
    title: t('title'),
  }
}

export default async function ContactPage() {
  const t = await getTranslations('ContactPage')

  return <div>{t('title')}</div>
}
