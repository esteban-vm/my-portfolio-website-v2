import type { IconType } from 'react-icons'
import { FaCode, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { GoCopilot } from 'react-icons/go'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { VscJson, VscVscode } from 'react-icons/vsc'

const floatingIcons: IconType[] = [
  FaGithub,
  FaCss3,
  FaHtml5,
  FaJs,
  FaGit,
  FaReact,
  FaCode,
  SiTailwindcss,
  SiNextdotjs,
  VscVscode,
  SiTypescript,
  GoCopilot,
  VscJson,
]

export function FloatingIcons() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      {floatingIcons.map((Icon) => (
        <Icon className='floating-icon' key={crypto.randomUUID()} />
      ))}
    </div>
  )
}
