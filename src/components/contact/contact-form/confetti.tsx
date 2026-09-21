'use client'

import type { IConfettiOptions } from 'react-confetti'
import { use, useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import { browser } from 'react-dom'

type ConfettiProps = Partial<IConfettiOptions>

export function Confetti(props: ConfettiProps) {
  use(browser())
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference)')
    setShouldRender(mq.matches)

    const onChange = (event: MediaQueryListEvent) => setShouldRender(event.matches)

    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  if (!shouldRender) return null

  return <ReactConfetti className='mx-auto' {...props} />
}
