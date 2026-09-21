'use server'

import emailjs from '@emailjs/nodejs'
import { getTranslations } from 'next-intl/server'
import { z } from 'zod'
import { PRIVATE_KEY, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID, TO_EMAIL, TO_NAME } from '@/lib/constants'
import { isProfane } from '@/lib/helpers'
import { safeClient } from '@/lib/safe-action'

export const sendEmail = safeClient
  .inputSchema(async () => {
    const t = await getTranslations('ContactForm.errors')

    return z.object({
      name: z
        .string()
        .trim()
        .min(5, t('name.min', { chars: 5 }))
        .max(50, t('name.max', { chars: 50 })),
      email: z
        .string()
        .trim()
        .pipe(z.email(t('email')).toLowerCase()),
      message: z
        .string()
        .trim()
        .min(5, t('message.min', { chars: 5 }))
        .max(255, t('message.max', { chars: 255 }))
        .superRefine((value, ctx) => {
          if (isProfane(value)) {
            ctx.addIssue({
              code: 'custom',
              message: t('message.profane'),
            })
          }
        }),
    })
  })
  .outputSchema(z.object({ message: z.string() }))
  .action(async ({ parsedInput }) => {
    if (process.env.NODE_ENV !== 'production') {
      await new Promise((r) => setTimeout(r, 5_000))

      if (parsedInput.message === 'error') {
        throw new Error('Failed')
      }
    } else {
      const { name, email, message } = parsedInput

      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        { from_name: name, to_name: TO_NAME, from_email: email, to_email: TO_EMAIL, message },
        { publicKey: PUBLIC_KEY, privateKey: PRIVATE_KEY }
      )
    }

    const t = await getTranslations('ContactForm.toasts')
    return { message: t('success') }
  })
