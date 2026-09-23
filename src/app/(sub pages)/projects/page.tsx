import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('projects_page')

  return {
    title: t('title'),
  }
}

export default async function ProjectsPage() {
  const t = await getTranslations('projects_page')

  return <div>{t('title')}</div>
}
