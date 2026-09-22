import { FaCode, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { GoCopilot } from 'react-icons/go'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { VscJson, VscVscode } from 'react-icons/vsc'

export function FloatingIcons() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <FaGithub className='floating-icon' />
      <FaCss3 className='floating-icon' />
      <FaHtml5 className='floating-icon' />
      <FaJs className='floating-icon' />
      <FaGit className='floating-icon' />
      <FaReact className='floating-icon' />
      <FaCode className='floating-icon' />
      <SiTailwindcss className='floating-icon' />
      <SiNextdotjs className='floating-icon' />
      <VscVscode className='floating-icon' />
      <SiTypescript className='floating-icon' />
      <GoCopilot className='floating-icon' />
      <VscJson className='floating-icon' />
    </div>
  )
}
