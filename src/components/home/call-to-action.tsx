import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Button } from 'rsc-daisyui'

export async function CallToAction() {
  const t = await getTranslations('home_page.hero')

  return (
    <div className='space-y-4 text-balance text-center md:text-left'>
      <h1 className='fl-text-3xl/5xl font-bold font-good-times'>{t('title')}</h1>
      <p className='leading-5 first-letter:font-bold'>{t('call_to_action')}</p>
      <div className='flex flex-wrap items-center justify-center gap-2 md:justify-start'>
        <Button as={Link} color='primary' href='/projects'>
          <FaArrowRight />
          {t('projects_link')}
        </Button>
        <Button color='accent' outline>
          <FaDownload />
          {t('cv_link')}
        </Button>
      </div>
    </div>
  )
}
