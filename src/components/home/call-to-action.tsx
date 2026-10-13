import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { TbAward } from 'react-icons/tb'
import { Button, Stats } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { CERTIFICATES, NAME } from '@/lib/constants'

export async function CallToAction() {
  const t = await getTranslations('home_page.hero')

  return (
    <div className='space-y-2 text-balance text-center md:text-left lg:space-y-4'>
      <Title>{t('title')}</Title>
      <div className='fl-text-base/xl not-md:w-full not-md:max-w-xs text-rotate duration-30000'>
        <span className='not-md:justify-items-center font-good-times'>
          <span className='w-full truncate'>{t('position')}</span>
          <span className='truncate'>
            <TbAward className='inline fill-amber-200 stroke-amber-500' /> React
          </span>
          <span className='truncate'>
            <TbAward className='inline fill-amber-200 stroke-amber-500' /> TypeScript
          </span>
          <span className='truncate'>
            <TbAward className='inline fill-amber-200 stroke-amber-500' /> Next.js
          </span>
        </span>
      </div>
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

const Title = tw.h1`fl-text-3xl/5xl bg-linear-to-b from-sky-500 to-fuchsia-500 bg-clip-text font-bold font-good-times text-transparent dark:via-white`
