import { Hero } from 'rsc-daisyui'

export default function HeroLayout({ children }: LayoutProps<'/'>) {
  return (
    <Hero as='main' className='grow rounded bg-base-200'>
      {children}
    </Hero>
  )
}
