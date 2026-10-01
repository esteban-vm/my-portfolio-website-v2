import Image from 'next/image'
import { getPlaceholder } from '@/actions'

interface TechCardProps {
  tech: string
  img: string
}

export async function TechCard({ tech, img }: TechCardProps) {
  const imageSrc = `/images/icons/${img}.png`

  return (
    <div className='glass relative aspect-square basis-20 rounded-2xl md:basis-24'>
      <Image
        alt={tech}
        blurDataURL={await getPlaceholder(imageSrc)}
        className='scale-85 object-cover object-center contrast-125'
        fill
        placeholder='blur'
        src={imageSrc}
        title={tech}
      />
    </div>
  )
}
