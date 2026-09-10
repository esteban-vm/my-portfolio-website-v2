import { FolderOpenDot, Info, Mail } from 'lucide-react'
import { Dock } from 'rsc-daisyui'

export default async function DockPage() {
  await new Promise((r) => setTimeout(r, 5_000))

  return (
    <Dock as='nav' className='relative border border-base-300'>
      <Dock.Item label='Sobre mí'>
        <Info />
      </Dock.Item>
      <Dock.Item label='Proyectos'>
        <FolderOpenDot />
      </Dock.Item>
      <Dock.Item label='Contacto'>
        <Mail />
      </Dock.Item>
    </Dock>
  )
}
