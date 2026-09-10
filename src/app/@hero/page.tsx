import Image from 'next/image'
import { Button, Hero } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'

const imageSrc = '/images/hero-image.jpg'

export default async function HeroPage() {
  await new Promise((r) => setTimeout(r, 3_000))

  return (
    <Hero.Content className='flex-col gap-8 md:flex-row-reverse'>
      <div className='motion-safe:pointer-fine:hover-3d aspect-9/16 w-full max-w-70'>
        <figure className='relative size-full overflow-hidden rounded-lg shadow-2xl'>
          <Image
            alt=''
            blurDataURL={await getPlaceholder(imageSrc)}
            className='object-cover object-center'
            fill
            placeholder='blur'
            src={imageSrc}
          />
        </figure>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div>
        <h1 className='fl-text-3xl/5xl font-bold'>Box Office News!</h1>
        <p className='py-6'>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
          eaque aut repudiandae et a id nisi.
        </p>
        <Button className='btn-sm md:btn-md' color='primary'>
          Get Started
        </Button>
      </div>
    </Hero.Content>
  )
}
