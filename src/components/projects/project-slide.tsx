import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'

export interface ProjectSlideProps {
  title: string
  image: string
  id: `slide${1 | 2 | 3}`
  slidePrev: `#slide${1 | 2 | 3}`
  slideNext: `#slide${1 | 2 | 3}`
}

export async function ProjectSlide({ title, image, id, slidePrev, slideNext }: ProjectSlideProps) {
  return (
    <div className='carousel-item relative w-full overflow-hidden rounded-box' id={id}>
      <Image alt={title} blurDataURL={await getPlaceholder(image)} fill placeholder='blur' quality={100} src={image} />

      <div className='absolute inset-x-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
        <Button as={Link} className='not-lg:btn-sm' href={slidePrev} replace shape='circle'>
          <FaChevronLeft />
        </Button>

        <Button as={Link} className='not-lg:btn-sm' href={slideNext} replace shape='circle'>
          <FaChevronRight />
        </Button>
      </div>
    </div>
  )
}
