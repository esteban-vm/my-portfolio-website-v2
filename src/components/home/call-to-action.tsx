import Link from 'next/link'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Button } from 'rsc-daisyui'

export function CallToAction() {
  return (
    <div className='space-y-4 text-balance text-center md:text-left'>
      <h1 className='fl-text-3xl/5xl font-bold font-good-times'>Welcome To My Portfolio Website</h1>
      <p>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
        eaque aut repudiandae et a id nisi.
      </p>
      <div className='space-x-2'>
        <Button as={Link} className='md:btn-md' color='primary' href='/projects' size='sm'>
          <FaArrowRight />
          View Projects
        </Button>
        <Button className='md:btn-md' color='accent' outline size='sm'>
          <FaDownload />
          Download CV
        </Button>
      </div>
    </div>
  )
}
