import { FaCode, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { GoCopilot } from 'react-icons/go'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { VscJson, VscVscode } from 'react-icons/vsc'
import { Hero } from 'rsc-daisyui'
import { CallToAction, HeroImage } from '@/components/home'

export default function HomePage() {
  return (
    <Hero as='main' className='relative grow rounded'>
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <FaGithub className='float-icon' />
        <FaCss3 className='float-icon' />
        <FaHtml5 className='float-icon' />
        <FaJs className='float-icon' />
        <FaGit className='float-icon' />
        <FaReact className='float-icon' />
        <FaCode className='float-icon' />
        <SiTailwindcss className='float-icon' />
        <SiNextdotjs className='float-icon' />
        <VscVscode className='float-icon' />
        <SiTypescript className='float-icon' />
        <GoCopilot className='float-icon' />
        <VscJson className='float-icon' />
      </div>
      <Hero.Content className='flex-col gap-8 md:flex-row-reverse'>
        <HeroImage />
        <CallToAction />
      </Hero.Content>
    </Hero>
  )
}
