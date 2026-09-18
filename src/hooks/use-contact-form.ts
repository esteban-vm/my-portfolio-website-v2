import { zodResolver } from '@hookform/resolvers/zod'
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { sendEmail } from '@/actions'

export function useContactForm() {
  const t = useTranslations('ContactForm.errors')

  return useHookFormAction(
    sendEmail,
    zodResolver(
      z.object({
        name: z.string().trim().nonempty(t('name.nonempty')).min(5, t('name.min')).max(50, t('name.max')),
        email: z.email(t('email')).trim().lowercase(),
        message: z.string().trim().nonempty(t('message.nonempty')).min(5, t('message.min')).max(255, t('message.max')),
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
        onError(args) {
          console.log(args.error)
        },
        onSuccess(args) {
          console.log(args.data)
        },
      },
    }
  )
}
