import type { Metadata } from 'next'
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
            <div className='aspect-square basis-28 border border-primary'>HTML5</div>
            <div className='aspect-square basis-28 border border-primary'>CSS3</div>
            <div className='aspect-square basis-28 border border-primary'>TailwindCSS</div>
            <div className='aspect-square basis-28 border border-primary'>JavaScript</div>
            <div className='aspect-square basis-28 border border-primary'>TypeScript</div>
            <div className='aspect-square basis-28 border border-primary'>ReactJS</div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Back-End</Collapse.Title>
          <Collapse.Content>
            <div className='aspect-square basis-28 border border-primary'>Prisma</div>
            <div className='aspect-square basis-28 border border-primary'>NodeJS</div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Databases</Collapse.Title>
          <Collapse.Content>
            <div className='aspect-square basis-28 border border-primary'>PostgreSQL</div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='mb-3 border border-base-300' icon='arrow'>
          <Collapse.Title>Full-Stack</Collapse.Title>
          <Collapse.Content>
            <div className='aspect-square basis-28 border border-primary'>Next.js</div>
          </Collapse.Content>
        </Collapse>

        <Collapse className='border border-base-300' icon='arrow'>
          <Collapse.Title>Tools</Collapse.Title>
          <Collapse.Content>
            <div className='aspect-square basis-28 border border-primary'>VSCode</div>
            <div className='aspect-square basis-28 border border-primary'>Git</div>
            <div className='aspect-square basis-28 border border-primary'>GitHub</div>
            <div className='aspect-square basis-28 border border-primary'>Docker</div>
          </Collapse.Content>
        </Collapse>
      </Tabs.Content>
    </Tabs>
  )
}
