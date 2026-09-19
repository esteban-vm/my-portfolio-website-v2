'use client'

import type { Control, FieldValues } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useFormState } from 'react-hook-form'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'
import { Alert, Toast } from 'rsc-daisyui'

interface ToastAlertProps<T extends FieldValues> {
  control: Control<T>
}

export function ToastAlert<T extends FieldValues>({ control }: ToastAlertProps<T>) {
  const t = useTranslations('ContactForm.toasts')
  const { isSubmitted, isSubmitSuccessful } = useFormState({ control })

  if (!isSubmitted) return null

  return (
    <Toast className='absolute' horizontal='center'>
      <Alert className='font-semibold [&_svg]:size-4' color={isSubmitSuccessful ? 'success' : 'error'}>
        {isSubmitSuccessful ? <FaCircleCheck /> : <FaCircleXmark />}
        <span>{isSubmitSuccessful ? t('success') : t('error')}</span>
      </Alert>
    </Toast>
  )
}
