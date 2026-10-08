import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { LuArrowUpRight } from 'react-icons/lu'
import { Badge, Button, Card } from 'rsc-daisyui'
import { getPlaceholder } from '@/actions'

export interface CertificateCardProps {
  title: string
  entity: string
  imageSrc: string
  tags: string[]
  link: string
}

export async function CertificateCard({ title, entity, imageSrc, tags, link }: CertificateCardProps) {
  const t = await getTranslations('about_page.tabs.1')

  return (
    <Card border className='fade-in animate-in p-3 shadow-sm'>
      <figure className='relative inset-shadow-sm/15 aspect-video w-full overflow-hidden rounded-2xl'>
        <Image
          alt={title}
          blurDataURL={await getPlaceholder(imageSrc)}
          className='scale-95 object-contain object-center'
          fill
          placeholder='blur'
          quality={100}
          src={imageSrc}
        />
      </figure>
      <Card.Body className='p-3 pb-0'>
        <Card.Title className='line-clamp-2 leading-5' title={title}>
          {title}
        </Card.Title>
        <p>{entity}</p>
        <Card.Actions>
          {tags.map((tag) => (
            <Badge color='accent' key={tag} size='sm' soft>
              {tag}
            </Badge>
          ))}
          <Button as='a' className='mx-auto mt-1' color='info' href={link} outline size='sm' target='_blank' wide>
            {t('link')}
            <LuArrowUpRight />
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}
