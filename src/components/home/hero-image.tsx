import Image from 'next/image'
import { getPlaceholder } from '@/actions'

const imageSrc = '/images/hero-image.jpg'

export async function HeroImage() {
  return (
    <div className='aspect-9/16 w-full max-w-70'>
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
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
      {/* <div /> */}
    </div>
  )
}
