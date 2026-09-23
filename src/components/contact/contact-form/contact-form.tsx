'use client'

import type { KeyboardEventHandler } from 'react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { FaAt, FaPencil } from 'react-icons/fa6'
import { Divider, Fieldset } from 'rsc-daisyui'
import { useContactForm } from '@/hooks'
import { INPUT_LENGTHS } from '@/lib/constants'
import { Confetti } from './confetti'
import { FormInput } from './form-input'
import { FormTextbox } from './form-textbox'
import { SocialLinks } from './social-links'
import { SubmitButton } from './submit-button'
import { ToastAlert } from './toast-alert'

export function ContactForm() {
  const t = useTranslations('contact_page.form')
  const formRef = useRef<HTMLFormElement>(null)

  const {
    handleSubmitWithAction,
    action: {
      hasSucceeded,
      result: { data, serverError },
    },
    form: {
      control,
      formState: { isSubmitting, isSubmitSuccessful },
    },
  } = useContactForm()

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.shiftKey && event.key === 'Enter') {
      event.preventDefault()
      formRef.current?.requestSubmit()
    }
  }

  return (
    <>
      <form className='my-3 w-full max-w-lg lg:max-w-3xl' noValidate onSubmit={handleSubmitWithAction} ref={formRef}>
        <Fieldset disabled={isSubmitting || isSubmitSuccessful}>
          <Fieldset.Legend className='fl-text-3xl/4xl'>{t('legend')}</Fieldset.Legend>

          <FormInput
            autoComplete='given-name'
            control={control}
            icon={FaPencil}
            label={t('labels.name')}
            maxLength={INPUT_LENGTHS.nameMax}
            minLength={INPUT_LENGTHS.nameMin}
            name='name'
            placeholder={t('placeholders.name')}
            required
            type='text'
          />

          <FormInput
            autoComplete='home email'
            control={control}
            icon={FaAt}
            label={t('labels.email')}
            name='email'
            placeholder={t('placeholders.email')}
            required
            type='email'
          />

          <FormTextbox
            control={control}
            label={t('labels.message')}
            maxLength={INPUT_LENGTHS.messageMax}
            minLength={INPUT_LENGTHS.messageMin}
            name='message'
            onKeyDown={onKeyDown}
            placeholder={t('placeholders.message')}
            required
          />

          <SubmitButton control={control} />
          <Divider className='my-0' />
          <SocialLinks />
        </Fieldset>
      </form>

      <ToastAlert control={control} error={serverError} success={data?.message} />
      <Confetti numberOfPieces={150} recycle={false} run={hasSucceeded} width={formRef.current?.clientWidth} />
    </>
  )
}
