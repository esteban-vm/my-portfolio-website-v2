'use client'

import { useTheme } from '@teispace/next-themes'
import { Languages, MoonStar, Settings, Sun, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState, useTransition } from 'react'
import { Button, Tooltip } from 'rsc-daisyui'
import { changeLanguage } from '@/actions'

export default function FabPage() {
  const locale = useLocale()
  const t = useTranslations('FabPage')
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

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

  return (
    <div className='fab fab-flower translate-y-[calc(-100%-(--spacing(4)))]'>
      <Button as='div' color='primary' shape='circle' size='lg' tabIndex={0}>
        <Settings />
      </Button>

      <Button as='span' className='fab-close' color='error' shape='circle' size='lg'>
        <X />
      </Button>

      <Tooltip position='left' tip={t('LanguageButton')}>
        <Button disabled={isPending} onClick={onLanguageChange} shape='circle' size='lg' type='button'>
          <Languages />
        </Button>
      </Tooltip>

      <Tooltip position='left' tip={theme === 'dark' ? t('ThemeButton.light') : t('ThemeButton.dark')}>
        <Button onClick={onThemeChange} shape='circle' size='lg' type='button'>
          {theme === 'dark' ? <Sun /> : <MoonStar />}
        </Button>
      </Tooltip>
    </div>
  )
}
