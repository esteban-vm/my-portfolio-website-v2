'use client'

import type { DockItemProps } from '@/components/dock'
import { FolderOpenDot, Info, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dock } from 'rsc-daisyui'
import { DockItem } from '@/components/dock'

export default function DockPage() {
  const t = useTranslations()

  const items: DockItemProps[] = [
    {
      label: t('AboutPage.title'),
      href: '/about',
      icon: Info,
    },
    {
      label: t('ProjectsPage.title'),
      href: '/projects',
      icon: FolderOpenDot,
    },
    {
      label: t('ContactPage.title'),
      href: '/contact',
      icon: Mail,
    },
  ]

  return (
    <footer className='w-full shrink-0 grow-0'>
      <Dock as='nav' className='relative border border-base-300'>
        {items.map((item) => (
          <DockItem key={item.href} {...item} />
        ))}
      </Dock>
    </footer>
  )
}
