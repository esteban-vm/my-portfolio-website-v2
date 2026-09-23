import type { IconType } from 'react-icons'
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Button, Indicator } from 'rsc-daisyui'
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
    <div className='flex justify-center gap-3.5'>
      {socialLinks.map((link) => {
        const { title, href, Icon, className } = link

        return (
          <Indicator key={href}>
            <Indicator.Badge className='rounded-none' color='primary' ghost size='xs'>
              <FaExternalLinkAlt />
            </Indicator.Badge>
            <Button
              as='a'
              className={cn('text-white hover:opacity-75 dark:border-white', className)}
              href={href}
              shape='square'
              size='lg'
              target='_blank'
              title={title}
            >
              <Icon className='size-[75%]' />
            </Button>
          </Indicator>
        )
      })}
    </div>
  )
}
