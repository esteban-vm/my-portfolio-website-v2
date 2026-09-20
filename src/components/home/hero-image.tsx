import Image from 'next/image'
import { getPlaceholder } from '@/actions'

const imageSrc = '/images/hero-image.jpg'

export async function HeroImage() {
  return (
    <div className='motion-safe:pointer-fine:hover-3d aspect-3/4 w-full max-w-60 md:max-w-72'>
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
  )
}
