'use client'

import type { FieldValues } from 'react-hook-form'
import type { FormControlProps } from '@/types'
import { useTranslations } from 'next-intl'
import { useId } from 'react'
import { Controller } from 'react-hook-form'
import { Kbd, Label, Textarea, Validator } from 'rsc-daisyui'

type BaseFormTextboxProps = Omit<JSX.IntrinsicElements['textarea'], 'name' | 'color'>

interface FormTextboxProps<T extends FieldValues> extends FormControlProps<T>, BaseFormTextboxProps {}

export function FormTextbox<T extends FieldValues>({ control, name, label, ...rest }: FormTextboxProps<T>) {
  const t = useTranslations('contact_page.form')
  const fieldId = useId()
  const errorId = useId()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <div>
            <Label as='label' className='mb-1.5 cursor-pointer font-semibold text-sm' htmlFor={fieldId}>
              {label}:
              <small className='flex items-center justify-center font-normal'>
                <span>{t('tip')}:&nbsp;</span>
                <Kbd size='xs'>shift</Kbd> + <Kbd size='xs'>enter</Kbd>
              </small>
            </Label>
            <Textarea
              {...rest}
              aria-errormessage={errorId}
              aria-invalid={invalid}
              className='field-sizing-content w-full resize-none'
              id={fieldId}
              validator
              {...field}
            />
            <Validator.Hint as='small' className='empty:hidden' id={errorId} role='alert'>
              {error?.message}
            </Validator.Hint>
          </div>
        )
      }}
    />
  )
}
