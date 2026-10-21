'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { Button, Modal } from 'rsc-daisyui'

export function ProjectModal({ children }: { children: ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  const onDismiss = () => {
    router.back()
  }

  return createPortal(
    <Modal onClose={onDismiss} ref={dialogRef}>
      <Modal.Box>
        <Button className='absolute top-2 right-2' ghost onClick={onDismiss} shape='circle' size='xs'>
          <IoClose className='size-[80%]' />
        </Button>
        <h3 className='font-bold text-lg'>Hello!</h3>
        {children}
      </Modal.Box>
      <Modal.Backdrop
        onSubmit={(event) => {
          event.preventDefault()
          onDismiss()
        }}
      />
    </Modal>,
    document.getElementById('modal-root')!
  )
}
