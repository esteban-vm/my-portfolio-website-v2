import { Hero } from 'rsc-daisyui'
import { CallToAction, FloatingIcons, HeroImage } from '@/components/home'

export default function HomePage() {
  return (
    <Hero as='main' className='grow'>
      <FloatingIcons />
      <Hero.Content className='flex-col gap-8 pb-20 md:flex-row-reverse md:pb-0'>
        <HeroImage />
        <CallToAction />
      </Hero.Content>
    </Hero>
  )
}
