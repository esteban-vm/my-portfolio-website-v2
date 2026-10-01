import type { IconType } from 'react-icons'

interface TechCardProps {
  tech: string
  icon: IconType
  color?: `#${string}`
}

export function TechCard({ tech, icon: Icon, color }: TechCardProps) {
  return (
    <div className='glass flex aspect-square basis-20 items-center justify-center rounded-2xl md:basis-24' title={tech}>
      <Icon className='size-[75%]' fill={color ?? 'currentColor'} />
    </div>
  )
}
