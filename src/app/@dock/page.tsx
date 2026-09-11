'use client'

import type { LucideIcon } from 'lucide-react'
import type { Route } from 'next'
import { FolderOpenDot, Info, Mail } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Dock } from 'rsc-daisyui'

interface DockItem {
  label: string
  href: Route
  Icon: LucideIcon
}

export default function DockPage() {
  const t = useTranslations()
  const router = useRouter()
  const pathname = usePathname()

  const items: DockItem[] = [
    {
      label: t('AboutPage.title'),
      href: '/about',
      Icon: Info,
    },
    {
      label: t('ProjectsPage.title'),
      href: '/projects',
      Icon: FolderOpenDot,
    },
    {
      label: t('ContactPage.title'),
      href: '/contact',
      Icon: Mail,
    },
  ]

  return (
    <footer className='w-full shrink-0 grow-0'>
      <Dock as='nav' className='relative border border-base-300'>
        {items.map((item) => {
          const { label, href, Icon } = item
          const isACtive = pathname === href
          const onNavigate = () => router.push(href)

          return (
            <Dock.Item active={isACtive} key={href} label={label} onClick={onNavigate}>
              <Icon />
            </Dock.Item>
          )
        })}
      </Dock>
    </footer>
  )
}
