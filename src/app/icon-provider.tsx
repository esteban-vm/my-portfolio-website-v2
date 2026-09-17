'use client'

import type { ReactNode } from 'react'
import { IconContext } from 'react-icons'

export function IconProvider({ children }: { children: ReactNode }) {
  const className = 'size-5.5 align-middle'
  return <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
}
