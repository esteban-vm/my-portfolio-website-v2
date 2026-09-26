'use client'

import type { Route } from 'next'
import type { IconType } from 'react-icons'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LuFolderOpenDot, LuHouse, LuInfo, LuMail } from 'react-icons/lu'
import { Dock } from 'rsc-daisyui'

interface DockItem {
  label: string
  href: Route
  Icon: IconType
}

export function RootDock() {
  const router = useRouter()
  const t = useTranslations()
  const pathname = usePathname()

  const items: DockItem[] = [
    {
      label: t('home_page.title'),
      href: '/',
      Icon: LuHouse,
    },
    {
      label: t('about_page.title'),
      href: '/about',
      Icon: LuInfo,
    },
    {
      label: t('projects_page.title'),
      href: '/projects',
      Icon: LuFolderOpenDot,
    },
    {
      label: t('contact_page.title'),
      href: '/contact',
      Icon: LuMail,
    },
  ]

  return (
    <footer className='w-full shrink-0 grow-0'>
      <Dock as='nav' className='rounded-2xl rounded-b border border-base-300'>
        {items.map((item) => {
          const { label, href, Icon } = item
          const isACtive = pathname === href
          const onNavigate = () => router.push(href)

          return (
            <Dock.Item
              active={isACtive}
              key={href}
              label={<span className='line-clamp-1 font-axis'>{label}</span>}
              onClick={onNavigate}
            >
              <Icon className='size-5.5' />
            </Dock.Item>
          )
        })}
      </Dock>
    </footer>
  )
}
