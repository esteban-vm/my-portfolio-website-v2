import { zodResolver } from '@hookform/resolvers/zod'
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { sendEmail } from '@/actions'
import { isProfane } from '@/lib/helpers'

export function useContactForm() {
  const t = useTranslations('ContactForm.errors')

  return useHookFormAction(
    sendEmail,
    zodResolver(
      z.object({
        name: z.string().trim().min(5, t('name.min')).max(50, t('name.max')),
        email: z
          .string()
          .trim()
          .pipe(z.email(t('email')).toLowerCase()),
        message: z
          .string()
          .trim()
          .min(5, t('message.min'))
          .max(255, t('message.max'))
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
    }
  )
}
