'use client'

import type { FieldValues } from 'react-hook-form'
import type { BaseFormControlProps } from '@/types'
import { useFormState } from 'react-hook-form'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'
import { Alert, Toast } from 'rsc-daisyui'

interface ToastAlertProps<T extends FieldValues> extends BaseFormControlProps<T> {
  success?: string
  error?: string
}

export function ToastAlert<T extends FieldValues>({ control, success, error }: ToastAlertProps<T>) {
  const { isSubmitSuccessful } = useFormState({ control })

  if (!isSubmitSuccessful) return null

  return (
    <Toast className='slide-in-from-bottom absolute motion-safe:animate-in' horizontal='center'>
      <Alert className='font-semibold not-dark:text-white [&_svg]:size-4' color={success ? 'success' : 'error'}>
        {success ? <FaCircleCheck /> : <FaCircleXmark />}
        <span>{success ? success : error}</span>
      </Alert>
    </Toast>
  )
}
