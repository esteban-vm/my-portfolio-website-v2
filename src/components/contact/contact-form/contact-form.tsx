'use client'

import { useTranslations } from 'next-intl'
import { FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { Button, Divider, Fieldset } from 'rsc-daisyui'
import { useContactForm } from '@/hooks'
import { FormInput } from './form-input'
import { FormTextbox } from './form-textbox'

export function ContactForm() {
  const t = useTranslations('ContactForm')

  const {
    handleSubmitWithAction,
    form: {
      control,
      formState: { isSubmitting, isValid },
    },
  } = useContactForm()

  return (
    <form className='my-3 w-full max-w-lg lg:max-w-3xl' noValidate onSubmit={handleSubmitWithAction}>
      <Fieldset disabled={isSubmitting}>
        <Fieldset.Legend className='fl-text-4xl/5xl'>{t('legend')}</Fieldset.Legend>

        <FormInput
          control={control}
          label={t('labels.name')}
          name='name'
          placeholder={t('placeholders.name')}
          type='text'
        />

        <FormInput
          control={control}
          label={t('labels.email')}
          name='email'
          placeholder={t('placeholders.email')}
          type='email'
        />

        <FormTextbox
          control={control}
          label={t('labels.message')}
          name='message'
          placeholder={t('placeholders.message')}
        />

        <Button className='mt-1.5' color='primary' disabled={!isValid} type='submit'>
          Send message&nbsp;
          <FaPaperPlane />
        </Button>

        <Divider className='my-0' />

        <div className='flex justify-center gap-1.5'>
          <Button
            className='border-black bg-black text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaGithub className='size-[75%]' />
          </Button>
          <Button
            className='border-[#00b544] bg-[#03C755] text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaWhatsapp className='size-[75%]' />
          </Button>
          <Button
            className='border-[#0059b3] bg-[#0967C2] text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaLinkedin className='size-[75%]' />
          </Button>
        </div>
      </Fieldset>
    </form>
  )
}
