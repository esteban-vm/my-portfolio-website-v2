import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Carousel } from 'rsc-daisyui'
import { ProjectSlide } from '@/components/projects'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('projects_page')

  return {
    title: t('title'),
  }
}

export default function ProjectsPage() {
  return (
    <div className='my-20 flex w-full flex-col items-center gap-3 self-start justify-self-start p-3 lg:mx-10'>
      <Carousel className='carousel-center aspect-4/3 w-full max-w-xl space-x-2 rounded-box bg-neutral/10 p-2 lg:max-w-3xl lg:space-x-3 lg:p-3'>
        <ProjectSlide
          image='/images/project1.webp'
          slideId='slide1'
          slideNext='slide2'
          slidePrev='slide3'
          title='Project 1'
        />

        <ProjectSlide
          image='/images/project2.webp'
          slideId='slide2'
          slideNext='slide3'
          slidePrev='slide1'
          title='Project 2'
        />

        <ProjectSlide
          image='/images/project3.webp'
          slideId='slide3'
          slideNext='slide1'
          slidePrev='slide2'
          title='Project 3'
        />
      </Carousel>
      <div>List</div>
    </div>
  )
}
