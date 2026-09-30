import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { TbCertificate, TbStack2 } from 'react-icons/tb'
import { Collapse, Tabs } from 'rsc-daisyui'

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
            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='HTML5' className='object-cover object-center' fill src='/images/icons/html5.png' />
            </div>

            {/* rounded-2xl border-4 border-transparent shadow-md shadow-primary */}

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='CSS3' className='object-cover object-center' fill src='/images/icons/css3.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='TailwindCSS' className='object-cover object-center' fill src='/images/icons/tailwind.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='JavaScript' className='object-cover object-center' fill src='/images/icons/javascript.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='TypeScript' className='object-cover object-center' fill src='/images/icons/typescript.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='ReactJS' className='object-cover object-center' fill src='/images/icons/react.png' />
            </div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Back-End</Collapse.Title>

          <Collapse.Content>
            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='Prisma' className='object-cover object-center' fill src='/images/icons/prisma.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='NodeJS' className='object-cover object-center' fill src='/images/icons/node.png' />
            </div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Databases</Collapse.Title>

          <Collapse.Content>
            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='PostgreSQL' className='object-cover object-center' fill src='/images/icons/postgresql.png' />
            </div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Full-Stack</Collapse.Title>

          <Collapse.Content>
            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='Next.js' className='object-cover object-center' fill src='/images/icons/next.png' />
            </div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='border border-base-300' icon='arrow'>
          <Collapse.Title>Tools</Collapse.Title>

          <Collapse.Content>
            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='VSCode' className='object-cover object-center' fill src='/images/icons/vscode.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='Git' className='object-cover object-center' fill src='/images/icons/git.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='GitHub' className='object-cover object-center' fill src='/images/icons/github.png' />
            </div>

            <div className='relative aspect-square basis-20 md:basis-24'>
              <Image alt='Docker' className='object-cover object-center' fill src='/images/icons/docker.png' />
            </div>
          </Collapse.Content>
        </Collapse>
      </Tabs.Content>
    </Tabs>
  )
}
