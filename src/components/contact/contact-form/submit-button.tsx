'use client'

import type { Control, FieldValues } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useFormState } from 'react-hook-form'
import { FaPaperPlane } from 'react-icons/fa6'
import { Button, Loading } from 'rsc-daisyui'

interface SubmitButtonProps<T extends FieldValues> {
  control: Control<T>
}

export function SubmitButton<T extends FieldValues>({ control }: SubmitButtonProps<T>) {
  const t = useTranslations('ContactForm.button')
  const { isValid, isSubmitting } = useFormState({ control })

  return (
    <Button className='mt-1.5' color='primary' disabled={!isValid} type='submit'>
      {isSubmitting ? t('sending') : t('idle')}&nbsp;
      {isSubmitting ? <Loading /> : <FaPaperPlane />}
    </Button>
  )
}
