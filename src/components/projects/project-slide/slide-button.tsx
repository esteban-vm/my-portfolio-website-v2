'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button } from 'rsc-daisyui'

export type SlideId = `slide${1 | 2 | 3}`

export interface SlideButtonProps {
  slideId: SlideId
  direction: 'left' | 'right'
}

export function SlideButton({ slideId, direction }: SlideButtonProps) {
  const handleClick = () => {
    document.getElementById(slideId)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <Button onClick={handleClick} shape='circle' size='sm'>
      {direction === 'right' ? <FaChevronRight /> : <FaChevronLeft />}
    </Button>
  )
}
