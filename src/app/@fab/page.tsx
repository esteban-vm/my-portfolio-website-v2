import { Languages, Palette, Settings, X } from 'lucide-react'
import { Button, Tooltip } from 'rsc-daisyui'

export default function FabPage() {
  return (
    <div className='fab fab-flower translate-y-[calc(-100%-(--spacing(4)))]'>
      <Button as='div' color='primary' shape='circle' size='lg' tabIndex={0}>
        <Settings />
      </Button>

      <Button className='fab-close' shape='circle' size='lg' type='button'>
        <X />
      </Button>

      <Tooltip position='left' tip='Label A'>
        <Button shape='circle' size='lg' type='button'>
          <Languages />
        </Button>
      </Tooltip>

      <Tooltip position='left' tip='Label B'>
        <Button shape='circle' size='lg' type='button'>
          <Palette />
        </Button>
      </Tooltip>
    </div>
  )
}
