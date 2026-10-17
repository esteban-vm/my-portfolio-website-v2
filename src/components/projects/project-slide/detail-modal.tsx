'use client'

import { useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { Button, Modal } from 'rsc-daisyui'

export function DetailModal() {
  const ref = useRef<HTMLDialogElement>(null)

  const handleClick = () => {
    ref.current?.showModal()
  }

  return (
    <>
      <Button className='absolute bottom-1.5 left-1/2 -translate-x-1/2' onClick={handleClick} size='sm'>
        Ver detalles
      </Button>
      <Modal className='sm:modal-middle' ref={ref}>
        <Modal.Box>
          <Modal.Action>
            <Button className='absolute top-2 right-2' ghost shape='circle' size='xs'>
              <IoClose className='size-[80%]' />
            </Button>
          </Modal.Action>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click the button to close</p>
        </Modal.Box>
        <Modal.Backdrop />
      </Modal>
    </>
  )
}
