'use server'

import emailjs from '@emailjs/nodejs'
import { getTranslations } from 'next-intl/server'
import { z } from 'zod'
import { isProfane } from '@/lib/helpers'
import { safeClient } from '@/lib/safe-action'

export const sendEmail = safeClient
  .inputSchema(async () => {
    const t = await getTranslations('ContactForm.errors')

    return z.object({
      name: z.string().trim().nonempty(t('name.nonempty')).min(5, t('name.min')).max(50, t('name.max')),
      email: z.email(t('email')).trim().lowercase(),
      message: z
        .string()
        .trim()
        .nonempty(t('message.nonempty'))
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
  })
  .action(async ({ parsedInput }) => {
    if (process.env.NODE_ENV !== 'production') {
      await new Promise((r) => setTimeout(r, 5_000))
      return
    }

    const { name, email, message } = parsedInput

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        to_name: process.env.EMAILJS_TO_NAME,
        from_email: email,
        to_email: process.env.EMAILJS_TO_EMAIL,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    )
  })
