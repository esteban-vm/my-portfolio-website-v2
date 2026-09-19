import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Button } from 'rsc-daisyui'
import { cn } from '@/lib/ui'

interface SocialLink {
  href: string
  Icon: IconType
  className: string
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/esteban-vm',
    Icon: FaGithub,
    className: 'border-black bg-black',
  },
  {
    href: 'https://wa.link/txgz09',
    Icon: FaWhatsapp,
    className: 'border-[#00b544] bg-[#03C755]',
  },
  {
    href: 'https://www.linkedin.com/in/webdev-esteban/',
    Icon: FaLinkedin,
    className: 'border-[#0059b3] bg-[#0967C2]',
  },
]

export function SocialLinks() {
  return (
    <div className='flex justify-center gap-1.5'>
      {socialLinks.map((link) => {
        const { href, Icon, className } = link

        return (
          <Button
            as='a'
            className={cn('text-white hover:opacity-75 dark:border-white', className)}
            href={href}
            key={href}
            shape='square'
            size='lg'
            target='_blank'
          >
            <Icon className='size-[75%]' />
          </Button>
        )
      })}
    </div>
  )
}
