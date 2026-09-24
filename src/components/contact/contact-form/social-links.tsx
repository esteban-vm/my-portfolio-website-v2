import type { IconType } from 'react-icons'
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Button, Tooltip } from 'rsc-daisyui'
import { cn } from '@/lib/ui'

interface SocialLink {
  title: string
  href: string
  Icon: IconType
  className: string
}

const socialLinks: SocialLink[] = [
  {
    title: 'GitHub',
    href: 'https://github.com/esteban-vm',
    Icon: FaGithub,
    className: 'border-black bg-black',
  },
  {
    title: 'WhatsApp',
    href: 'https://wa.link/txgz09',
    Icon: FaWhatsapp,
    className: 'border-[#00b544] bg-[#03C755]',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/webdev-esteban/',
    Icon: FaLinkedin,
    className: 'border-[#0059b3] bg-[#0967C2]',
  },
]

export function SocialLinks() {
  return (
    <div className='flex justify-center gap-3'>
      {socialLinks.map((link) => {
        const { title, href, Icon, className } = link

        return (
          <Tooltip key={href} position='bottom' tip=''>
            <Tooltip.Content className='flex items-center justify-center gap-1'>
              <FaExternalLinkAlt />
              <span>{title}</span>
            </Tooltip.Content>

            <Button
              as='a'
              className={cn('text-white hover:opacity-75 dark:border-white', className)}
              href={href}
              shape='square'
              size='lg'
              target='_blank'
            >
              <Icon className='size-[75%]' />
            </Button>
          </Tooltip>
        )
      })}
    </div>
  )
}
