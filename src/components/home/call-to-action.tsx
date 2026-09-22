import Link from 'next/link'
import { Button } from 'rsc-daisyui'

export function CallToAction() {
  return (
    <div className='space-y-4 text-center md:text-left'>
      <h1 className='fl-text-3xl/4xl font-bold font-montserrat'>Welcome To My Portfolio Website</h1>
      <p className='text-balance'>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
        eaque aut repudiandae et a id nisi.
      </p>
      <div className='space-x-2'>
        <Button as={Link} color='primary' href='/projects'>
          View Projects
        </Button>
        <Button color='accent' outline>
          Download CV
        </Button>
      </div>
    </div>
  )
}
