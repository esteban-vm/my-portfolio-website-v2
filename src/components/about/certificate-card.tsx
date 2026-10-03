import Image from "next/image";
import { Badge, Card } from "rsc-daisyui";

export function CertificateCard(){

    return  <Card className="max-w-88 w-full shadow-sm  px-3 py-4.5" border>
      <figure className=' aspect-video relative w-full rounded-2xl  overflow-hidden '>
        
          <Image quality={100} alt=''src="/images/cert-example.webp" fill className="object-fit object-cover  "  />
    
      </figure>
    
      <Card.Body className="p-3 pb-0 ">
        <Card.Title>
          Name
          <Badge size="sm" color="secondary">
            NEW
          </Badge>
        </Card.Title>
        <p>
          An example of a certificate.
        </p>
        <Card.Actions>
          <Badge outline>
            Tag1
          </Badge>
          <Badge outline>
            Tag2
          </Badge>
        </Card.Actions>
      </Card.Body>
    </Card>

}