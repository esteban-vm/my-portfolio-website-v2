import type { SlideButtonProps, SlideId } from './slide-button'
import Image from 'next/image'
import { Badge } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'
import { SlideButton } from './slide-button'

interface ProjectSlideProps extends Omit<SlideButtonProps, 'direction'> {
  title: string
  image: string
  slidePrev: SlideId
  slideNext: SlideId
}

export async function ProjectSlide({ title, image, slideId, slidePrev, slideNext }: ProjectSlideProps) {
  return (
    <div className='carousel-item relative w-full overflow-hidden rounded-xl' id={slideId}>
      <Image
        alt={title}
        blurDataURL={await getPlaceholder(image)}
        className='object-cover object-center contrast-125'
        fill
        placeholder='blur'
        quality={100}
        src={image}
      />
      <div className='absolute inset-x-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
        <SlideButton direction='left' slideId={slidePrev} />
        <SlideButton direction='right' slideId={slideNext} />
      </div>
      <Badge
        className='not-lg:badge-sm absolute top-full left-1/2 w-full max-w-[calc(90%-var(--spacing)*5)] -translate-x-1/2 translate-y-[-120%] sm:max-w-xs md:max-w-sm'
        ghost
        size='lg'
      >
        <span className='truncate font-semibold' title={title}>
          {title}
        </span>
      </Badge>
    </div>
  )
}
