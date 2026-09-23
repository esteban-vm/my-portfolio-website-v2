import { zodResolver } from '@hookform/resolvers/zod'
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { sendEmail } from '@/actions'
import { INPUT_LENGTHS } from '@/lib/constants'
import { isProfane } from '@/lib/helpers'

export function useContactForm() {
  const t = useTranslations('ContactForm.errors')

  return useHookFormAction(
    sendEmail,
    zodResolver(
      z.object({
        name: z
          .string()
          .trim()
          .min(INPUT_LENGTHS.nameMin, t('name.min', { chars: INPUT_LENGTHS.nameMin }))
          .max(INPUT_LENGTHS.nameMax, t('name.max', { chars: INPUT_LENGTHS.nameMax })),
        email: z
          .string()
          .trim()
          .pipe(z.email(t('email')).toLowerCase()),
        message: z
          .string()
          .trim()
          .min(INPUT_LENGTHS.messageMin, t('message.min', { chars: INPUT_LENGTHS.messageMin }))
          .max(INPUT_LENGTHS.messageMax, t('message.max', { chars: INPUT_LENGTHS.messageMax }))
          .superRefine((value, ctx) => {
            if (isProfane(value)) {
              ctx.addIssue({
                code: 'custom',
                message: t('message.profane'),
              })
            }
          }),
      })
    ),
    {
      formProps: {
        mode: 'onChange',
        defaultValues: {
          name: '',
          email: '',
          message: '',
        },
      },
      actionProps: {
        onSuccess() {
          navigator.vibrate(500)
        },
      },
    }
  )
}
