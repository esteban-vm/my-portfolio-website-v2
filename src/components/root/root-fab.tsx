'use client'

import { useTheme } from '@teispace/next-themes'
import { useLocale, useTranslations } from 'next-intl'
import { use, useTransition } from 'react'
import { browser } from 'react-dom'
import { LuLanguages, LuMoonStar, LuSettings, LuSun, LuX } from 'react-icons/lu'
import { Badge, Button, Tooltip } from 'rsc-daisyui'
import tw from 'tailwind-styled-components'
import { changeLanguage } from '@/actions'

export function RootFab() {
  use(browser())

  const locale = useLocale()
  const t = useTranslations('FabPage')
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()

  const onThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const onLanguageChange = () => {
    startTransition(async () => {
      if (locale === 'en') {
        await changeLanguage('es')
      } else {
        await changeLanguage('en')
      }
    })
  }

  const themeMsg = theme === 'dark' ? t('ThemeButton.light') : t('ThemeButton.dark')

  return (
    <Wrapper>
      <Button as='div' color='primary' shape='circle' size='lg' tabIndex={0}>
        <LuSettings />
      </Button>

      <Button as='span' className='fab-close' color='error' shape='circle' size='lg'>
        <LuX />
      </Button>

      <Tooltip className='pointer-fine:tooltip' color='info' disabled position='left' tip={t('LanguageButton')}>
        <div>
          <Badge className='mr-1 pointer-fine:hidden' color='info'>
            {t('LanguageButton')}&nbsp;
          </Badge>
          <Button disabled={isPending} onClick={onLanguageChange} shape='circle' size='lg' type='button'>
            <LuLanguages />
          </Button>
        </div>
      </Tooltip>

      <Tooltip className='pointer-fine:tooltip' color='info' disabled position='left' tip={themeMsg}>
        <div>
          <Badge className='mr-1 pointer-fine:hidden' color='info'>
            {themeMsg}&nbsp;
          </Badge>
          <Button onClick={onThemeChange} shape='circle' size='lg' type='button'>
            {theme === 'dark' ? <LuSun /> : <LuMoonStar />}
          </Button>
        </div>
      </Tooltip>
    </Wrapper>
  )
}

const Wrapper = tw.div`fab pointer-fine:fab-flower -translate-y-1/3 pointer-fine:translate-y-[calc(-100%-(--spacing(4)))] [&_svg]:size-5.5`
