'use client'

import { useTheme } from '@teispace/next-themes'
import { useLocale, useTranslations } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { use, useEffect, useState } from 'react'
import { browser } from 'react-dom'
import { LuArrowUp, LuLanguages, LuMoonStar, LuSettings, LuSun, LuX } from 'react-icons/lu'
import { Button, Tooltip } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { changeLanguage } from '@/actions'

export function RootFab() {
  use(browser())

  const locale = useLocale()
  const [scroll, setScroll] = useState(0)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('root_layout.fab')
  const { execute, isPending } = useAction(changeLanguage)

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const onLanguageChange = () => {
    execute({ lang: locale === 'en' ? 'es' : 'en' })
  }

  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Wrapper>
      <Button as='div' color='primary' role='button' shape='circle' size='lg' tabIndex={0}>
        <LuSettings />
      </Button>

      <Button as='span' className='fab-close' color='error' shape='circle' size='lg'>
        <LuX />
      </Button>

      {scroll + window.innerHeight - 200 > window.innerHeight && (
        <Tooltip className='pointer-coarse:tooltip-open' color='info' position='left' tip={t('scroll_button')}>
          <Button className='dark:border-base-content' onClick={onScrollToTop} shape='circle' size='lg' type='button'>
            <LuArrowUp />
          </Button>
        </Tooltip>
      )}

      <Tooltip className='pointer-coarse:tooltip-open' color='info' position='left' tip={t('language_button')}>
        <Button
          className='dark:border-base-content'
          disabled={isPending}
          onClick={onLanguageChange}
          shape='circle'
          size='lg'
          type='button'
        >
          <LuLanguages />
        </Button>
      </Tooltip>

      <Tooltip
        className='pointer-coarse:tooltip-open'
        color='info'
        position='left'
        tip={theme === 'dark' ? t('theme_button.light') : t('theme_button.dark')}
      >
        <Button className='dark:border-base-content' onClick={onThemeChange} shape='circle' size='lg' type='button'>
          {theme === 'dark' ? <LuSun /> : <LuMoonStar />}
        </Button>
      </Tooltip>
    </Wrapper>
  )
}

const Wrapper = tw.div`fab pointer-fine:fab-flower bottom-20 [&_svg]:size-5.5`
