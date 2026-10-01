import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { TbCertificate, TbStack2 } from 'react-icons/tb'
import { Collapse, Tabs } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about_page')

  return {
    title: t('title'),
  }
}

export default function AboutPage() {
  return (
    <Tabs className='my-30 w-full self-start justify-self-start lg:mx-10' decorate='lift'>
      <Tabs.Tab as='label' className='font-semibold'>
        <input defaultChecked name='my_tabs' type='radio' />
        <TbCertificate />
        &nbsp;Certificates
      </Tabs.Tab>

      <Tabs.Content className='border-base-300 bg-base-100 p-3'>My certificates</Tabs.Content>

      <Tabs.Tab as='label' className='font-semibold'>
        <input name='my_tabs' type='radio' />
        <TbStack2 />
        &nbsp;Tech Stack
      </Tabs.Tab>

      <Tabs.Content className='border-base-300 bg-base-100 p-3'>
        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Front-End</Collapse.Title>
          <Collapse.Content>
            <TechCard img='html5' tech='HTML5' />
            <TechCard img='css3' tech='CSS3' />
            <TechCard img='tailwind' tech='TailwindCSS' />
            <TechCard img='javascript' tech='JavaScript' />
            <TechCard img='typescript' tech='TypeScript' />
            <TechCard img='react' tech='ReactJS' />
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Back-End</Collapse.Title>
          <Collapse.Content>
            <TechCard img='prisma' tech='Prisma' />
            <TechCard img='node' tech='NodeJS' />
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Databases</Collapse.Title>
          <Collapse.Content>
            <TechCard img='postgresql' tech='PostgreSQL' />
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Full-Stack</Collapse.Title>
          <Collapse.Content>
            <TechCard img='next' tech='Next.js' />
          </Collapse.Content>
        </Collapse>

        <Collapse className='border border-base-300' icon='arrow'>
          <Collapse.Title>Tools</Collapse.Title>
          <Collapse.Content>
            <TechCard img='vscode' tech='VSCode' />
            <TechCard img='git' tech='Git' />
            <TechCard img='github' tech='GitHub' />
            <TechCard img='docker' tech='Docker' />
          </Collapse.Content>
        </Collapse>
      </Tabs.Content>
    </Tabs>
  )
}

interface TechCardProps {
  tech: string
  img: string
}

async function TechCard({ tech, img }: TechCardProps) {
  const imageSrc = `/images/icons/${img}.png`

  return (
    <div className='glass relative aspect-square basis-20 rounded-2xl md:basis-24'>
      <Image
        alt={tech}
        blurDataURL={await getPlaceholder(imageSrc)}
        className='scale-85 object-cover object-center contrast-125'
        fill
        placeholder='blur'
        src={imageSrc}
        title={tech}
      />
    </div>
  )
}
