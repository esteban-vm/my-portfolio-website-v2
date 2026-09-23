import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { ContactForm } from '@/components/contact'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact_page')

  return {
    title: t('title'),
  }
}

export default async function ContactPage() {
  const locale = await getLocale()

  return <ContactForm key={locale} />
}
