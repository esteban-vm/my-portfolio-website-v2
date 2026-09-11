'use client'

import type { LucideIcon } from 'lucide-react'
import type { Route } from 'next'
import { usePathname, useRouter } from 'next/navigation'
import { Dock } from 'rsc-daisyui'

export interface DockItemProps {
  label: string
  href: Route
  icon: LucideIcon
}

export function DockItem({ label, href, icon: Icon }: DockItemProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Dock.Item active={pathname === href} label={label} onClick={() => router.push(href)}>
      <Icon />
    </Dock.Item>
  )
}
