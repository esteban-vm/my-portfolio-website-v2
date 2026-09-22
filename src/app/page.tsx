import { Hero } from 'rsc-daisyui'
import { CallToAction, FloatingIcons, HeroImage } from '@/components/home'

export default function HomePage() {
  return (
    <Hero as='main' className='relative grow rounded'>
      <FloatingIcons />
      <Hero.Content className='flex-col gap-8 md:flex-row-reverse'>
        <HeroImage />
        <CallToAction />
      </Hero.Content>
    </Hero>
  )
}
