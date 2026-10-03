import Image from 'next/image'
import { Badge, Card } from 'rsc-daisyui'

export function CertificateCard() {
  return (
    <Card border className='w-full max-w-88 px-3 py-4.5 shadow-sm'>
      <figure className='relative aspect-video w-full overflow-hidden rounded-2xl'>
        <Image alt='' className='object-cover object-fit' fill quality={100} src='/images/cert-example.webp' />
      </figure>

      <Card.Body className='p-3 pb-0'>
        <Card.Title>
          Name
          <Badge color='secondary' size='sm'>
            NEW
          </Badge>
        </Card.Title>
        <p>An example of a certificate.</p>
        <Card.Actions>
          <Badge outline>Tag1</Badge>
          <Badge outline>Tag2</Badge>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}
