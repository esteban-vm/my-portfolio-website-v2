'use client'

import type { Control, FieldValues } from 'react-hook-form'
import { useFormState } from 'react-hook-form'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'
import { Alert, Toast } from 'rsc-daisyui'

interface ToastAlertProps<T extends FieldValues> {
  control: Control<T>
  success?: string
  error?: string
}

export function ToastAlert<T extends FieldValues>({ control, success, error }: ToastAlertProps<T>) {
  const { isSubmitSuccessful } = useFormState({ control })

  if (!isSubmitSuccessful) return null

  return (
    <Toast className='absolute' horizontal='center'>
      <Alert className='font-semibold [&_svg]:size-4' color={success ? 'success' : 'error'}>
        {success ? <FaCircleCheck /> : <FaCircleXmark />}
        <span>{success ? success : error}</span>
      </Alert>
    </Toast>
  )
}
