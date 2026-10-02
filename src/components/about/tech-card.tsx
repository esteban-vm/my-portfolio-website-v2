import type { IconType } from 'react-icons'
import { Indicator } from 'rsc-daisyui'

interface TechCardProps {
  tech: string
  icon: IconType
  color?: `#${string}`
}

export function TechCard({ tech, icon: Icon, color }: TechCardProps) {
  return (
    <Indicator className='glass flex aspect-square basis-20 items-center justify-center rounded-2xl md:basis-24'>
      <Indicator.Badge
        className='indicator-middle md:indicator-bottom font-semibold'
        horizontal='center'
        size='sm'
        soft
      >
        {tech}
      </Indicator.Badge>
      <Icon className='size-[75%]' fill={color ?? 'currentColor'} />
    </Indicator>
  )
}
