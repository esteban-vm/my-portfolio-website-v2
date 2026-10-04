import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Button, Stats } from 'rsc-daisyui'
import { CERTIFICATES, NAME } from '@/lib/constants'

export async function CallToAction() {
  const t = await getTranslations('home_page.hero')

  return (
    <div className='space-y-2 text-balance text-center md:text-left lg:space-y-4'>
      <h1 className='fl-text-3xl/5xl font-bold font-good-times'>{t('title')}</h1>
      <p className='leading-5'>{t('call_to_action', { name: NAME! })}</p>
      <Stats className='md:stats-horizontal' vertical>
        <Stats.Stat className='px-3 py-2' desc={t('stats.1.subtitle')} title={t('stats.1.title')} value='13' />
        <Stats.Stat
          className='px-3 py-2'
          desc={t('stats.2.subtitle')}
          title={t('stats.2.title')}
          value={CERTIFICATES.length}
        />
      </Stats>
      <div className='flex flex-wrap items-center justify-center gap-2 md:justify-start'>
        <Button as={Link} className='not-md:btn-wide' color='primary' href='/projects'>
          <FaArrowRight />
          {t('projects_link')}
        </Button>
        <Button className='not-md:btn-wide' color='accent' outline>
          <FaDownload />
          {t('cv_link')}
        </Button>
      </div>
    </div>
  )
}
