import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about_page')

  return {
    title: t('title'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about_page')

  return <div>{t('title')}</div>
}
