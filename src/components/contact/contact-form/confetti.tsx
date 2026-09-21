import type { IConfettiOptions } from 'react-confetti'
import { use } from 'react'
import ReactConfetti from 'react-confetti'
import { browser } from 'react-dom'

type ConfettiProps = Partial<IConfettiOptions>

export function Confetti(props: ConfettiProps) {
  use(browser())

  return <ReactConfetti className='mx-auto motion-reduce:hidden' {...props} />
}
