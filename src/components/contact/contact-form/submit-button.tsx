'use client'

import type { FieldValues } from 'react-hook-form'
import type { BaseFormControlProps } from '@/types'
import { useTranslations } from 'next-intl'
import { useFormState } from 'react-hook-form'
import { FaPaperPlane } from 'react-icons/fa6'
import { Button, Loading } from 'rsc-daisyui'

export function SubmitButton<T extends FieldValues>({ control }: BaseFormControlProps<T>) {
  const t = useTranslations('contact_page.form.button')
  const { isValid, isSubmitting } = useFormState({ control })

  return (
    <Button className='md:btn-md mt-1.5' color='primary' disabled={!isValid} size='sm' type='submit'>
      {isSubmitting ? t('sending') : t('idle')}&nbsp;
      {isSubmitting ? <Loading /> : <FaPaperPlane />}
    </Button>
  )
}
