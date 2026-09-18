'use client'

import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { useId } from 'react'
import { Controller } from 'react-hook-form'
import { Label, Textarea, Validator } from 'rsc-daisyui'

export type BaseFormTextboxProps = Omit<JSX.IntrinsicElements['textarea'], 'name' | 'color'>

export interface FormTextboxProps<T extends FieldValues> extends BaseFormTextboxProps {
  control: Control<T>
  name: FieldPath<T>
  label: string
}

export function FormTextbox<T extends FieldValues>({
  control,
  name,
  label,
  required = true,
  ...rest
}: FormTextboxProps<T>) {
  const fieldId = useId()
  const errorId = useId()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <div>
            <Label as='label' className='mb-1.5 cursor-pointer text-sm' htmlFor={fieldId}>
              {label}:
            </Label>
            <Textarea
              {...rest}
              aria-errormessage={errorId}
              aria-invalid={invalid}
              className='field-sizing-content w-full resize-none'
              id={fieldId}
              required={required}
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
