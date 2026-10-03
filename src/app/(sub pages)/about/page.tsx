import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { BiLogoPostgresql } from 'react-icons/bi'
import * as fa from 'react-icons/fa'
import { GoCopilot } from 'react-icons/go'
import { GrMysql } from 'react-icons/gr'
import * as si from 'react-icons/si'
import { TbCertificate, TbStack2 } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { Collapse, Tabs } from 'rsc-daisyui'
import { CertificateCard, TechCard } from '@/components/about'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about_page')

  return {
    title: t('title'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about_page.tabs')

  return (
    <Tabs className='my-30 w-full self-start justify-self-start lg:mx-10' decorate='lift'>
      <Tabs.Tab as='label' className='font-semibold'>
        <input defaultChecked name='my_tabs' type='radio' />
        <TbCertificate />
        &nbsp;{t('1.title')}
      </Tabs.Tab>

      <Tabs.Content className='border-base-300 bg-base-100 p-3'>
        <div className='size full flex flex-wrap items-center justify-around gap-6'>
          <CertificateCard imageSrc='/images/cert-example.webp' />
          <CertificateCard imageSrc='/images/cert-example.webp' />
          <CertificateCard imageSrc='/images/cert-example.webp' />
          {/* <CertificateCard/> */}
          {/* <CertificateCard/> */}
          {/* <CertificateCard/> */}
        </div>
      </Tabs.Content>

      <Tabs.Tab as='label' className='font-semibold'>
        <input name='my_tabs' type='radio' />
        <TbStack2 />
        &nbsp;{t('2.title')}
      </Tabs.Tab>

      <Tabs.Content className='border-base-300 bg-base-100 p-3'>
        <Collapse icon='arrow'>
          <Collapse.Title>{t('2.front')}</Collapse.Title>
          <Collapse.Content>
            <TechCard color='#ef652a' icon={fa.FaHtml5} tech='HTML5' />
            <TechCard color='#2965f1' icon={fa.FaCss3Alt} tech='CSS3' />
            <TechCard color='#38bdf8' icon={si.SiTailwindcss} tech='TailwindCSS' />
            <TechCard color='#f0db4f' icon={si.SiJavascript} tech='JavaScript' />
            <TechCard color='#007acc' icon={si.SiTypescript} tech='TypeScript' />
            <TechCard color='#00d8ff' icon={fa.FaReact} tech='React' />
            <TechCard color='#a0f' icon={si.SiVite} tech='Vite' />
          </Collapse.Content>
        </Collapse>

        <Collapse icon='arrow'>
          <Collapse.Title>{t('2.back')}</Collapse.Title>
          <Collapse.Content>
            <TechCard color='#00bfa5' icon={si.SiPrisma} tech='Prisma' />
            <TechCard color='#83cd29' icon={fa.FaNodeJs} tech='NodeJS' />
            <TechCard color='#6db33f' icon={si.SiSpringboot} tech='Spring Boot' />
            <TechCard color='#f44336' icon={fa.FaJava} tech='Java' />
          </Collapse.Content>
        </Collapse>

        <Collapse icon='arrow'>
          <Collapse.Title>{t('2.full')}</Collapse.Title>
          <Collapse.Content>
            <TechCard icon={si.SiNextdotjs} tech='Next.js' />
          </Collapse.Content>
        </Collapse>

        <Collapse icon='arrow'>
          <Collapse.Title>{t('2.db')}</Collapse.Title>
          <Collapse.Content>
            <TechCard color='#336791' icon={BiLogoPostgresql} tech='PostgreSQL' />
            <TechCard color='#00618a' icon={GrMysql} tech='MySQL' />
          </Collapse.Content>
        </Collapse>

        <Collapse icon='arrow'>
          <Collapse.Title>{t('2.tools')}</Collapse.Title>
          <Collapse.Content>
            <TechCard color='#2196f3' icon={VscVscode} tech='VSCode' />
            <TechCard color='#f34f29' icon={fa.FaGitAlt} tech='Git' />
            <TechCard icon={fa.FaGithub} tech='GitHub' />
            <TechCard icon={GoCopilot} tech='GitHub Copilot' />
            <TechCard color='#0288d1' icon={fa.FaDocker} tech='Docker' />
            <TechCard color='#f9ad00' icon={si.SiPnpm} tech='PNPM' />
          </Collapse.Content>
        </Collapse>
      </Tabs.Content>
    </Tabs>
  )
}
