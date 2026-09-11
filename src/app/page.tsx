import { Hero } from 'rsc-daisyui'
import { CallToAction, HeroImage } from '@/components/home'

export default function HomePage() {
  return (
    <Hero as='main' className='grow rounded'>
      <Hero.Content className='flex-col gap-8 md:flex-row-reverse'>
        <HeroImage />
        <CallToAction />
      </Hero.Content>
    </Hero>
  )
}
