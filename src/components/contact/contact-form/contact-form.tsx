'use client'

import { useTranslations } from 'next-intl'
import { FaAt, FaPencil } from 'react-icons/fa6'
import { Divider, Fieldset } from 'rsc-daisyui'
import { useContactForm } from '@/hooks'
import { FormInput } from './form-input'
import { FormTextbox } from './form-textbox'
import { SocialLinks } from './social-links'
import { SubmitButton } from './submit-button'
import { ToastAlert } from './toast-alert'

export function ContactForm() {
  const t = useTranslations('ContactForm')

  const {
    handleSubmitWithAction,
    form: {
      control,
      formState: { isSubmitting, isSubmitSuccessful },
    },
  } = useContactForm()

  return (
    <>
      <form className='my-3 h-full w-full max-w-lg lg:max-w-3xl' noValidate onSubmit={handleSubmitWithAction}>
        <Fieldset disabled={isSubmitting || isSubmitSuccessful}>
          <Fieldset.Legend className='fl-text-3xl/4xl'>{t('legend')}</Fieldset.Legend>

          <FormInput
            control={control}
            icon={FaPencil}
            label={t('labels.name')}
            maxLength={50}
            minLength={5}
            name='name'
            placeholder={t('placeholders.name')}
            required
            type='text'
          />

          <FormInput
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
            maxLength={255}
            minLength={5}
            name='message'
            placeholder={t('placeholders.message')}
            required
          />

          <SubmitButton control={control} />
          <Divider className='my-0' />
          <SocialLinks />
        </Fieldset>
      </form>

      <ToastAlert control={control} />
    </>
  )
}
