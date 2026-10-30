'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { Button, Modal } from 'rsc-daisyui'
import { PROJECT_MODAL_ID } from '@/lib/constants'

export function ProjectModal({ slug }: { slug: string }) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current) return
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const onDismiss = router.back

  return createPortal(
    <Modal onClose={onDismiss} ref={dialogRef}>
      <Modal.Box>
        <Button className='absolute top-2 right-2' ghost onClick={onDismiss} shape='circle' size='sm'>
          <IoClose className='size-[80%]' />
        </Button>
        <h3 className='fl-text-base/lg font-semibold'>Project {slug}</h3>
        <p>Coming soon…</p>
      </Modal.Box>
      <Modal.Backdrop
        onSubmit={(event) => {
          event.preventDefault()
          onDismiss()
        }}
      />
    </Modal>,
    document.getElementById(PROJECT_MODAL_ID)!
  )
}
