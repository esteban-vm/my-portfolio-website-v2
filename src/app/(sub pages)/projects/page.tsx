import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Button, Carousel, List } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'
import { ProjectSlide } from '@/components/projects'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('projects_page')

  return {
    title: t('title'),
  }
}

export default function ProjectsPage() {
  return (
    <div className='my-20 flex w-full not-md:flex-col not-md:items-center gap-3 self-start justify-self-start border border-primary p-3 lg:mx-10'>
      <Carousel className='carousel-center aspect-4/3 w-full max-w-xl space-x-2 rounded-box bg-neutral/10 p-2 lg:max-w-3xl'>
        <ProjectSlide
          href='/projects/1'
          image='/images/project1.webp'
          slideId='slide1'
          slideNext='slide2'
          slidePrev='slide3'
          title='Project 1'
        />

        <ProjectSlide
          href='/projects/2'
          image='/images/project2.webp'
          slideId='slide2'
          slideNext='slide3'
          slidePrev='slide1'
          title='Project 2'
        />

        <ProjectSlide
          href='/projects/3'
          image='/images/project3.webp'
          slideId='slide3'
          slideNext='slide1'
          slidePrev='slide2'
          title='Project 3'
        />
      </Carousel>

      <div className='h-128 w-full overflow-scroll border border-primary'>
        <List className='relative w-full items-center' vanilla={false}>
          <div className='fixed z-10 w-full max-w-sm border border-primary bg-base-100 p-4'>
            <p className='text-xs tracking-wide'>More of my projects</p>
          </div>

          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </div>
    </div>
  )
}

async function ListItem() {
  const imgSrc = '/images/project.webp'

  return (
    <List.Row className='w-full items-center first-of-type:mt-10'>
      <div className='font-thin text-4xl tabular-nums opacity-30'>01</div>
      <div className='relative size-14'>
        <Image
          alt=''
          blurDataURL={await getPlaceholder(imgSrc)}
          className='size-10 rounded-box'
          fill
          placeholder='blur'
          src={imgSrc}
        />
      </div>
      <List.ColGrow>
        <div>Project title</div>
        <div className='font-semibold text-xs uppercase opacity-60'>Project description</div>
      </List.ColGrow>
      <Button ghost shape='square'>
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
        <svg className='size-[1.2em]' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
            <path d='M6 3L20 12 6 21 6 3z' />
          </g>
        </svg>
      </Button>
    </List.Row>
  )
}
