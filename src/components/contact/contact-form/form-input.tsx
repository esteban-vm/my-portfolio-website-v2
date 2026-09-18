'use client'

import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import type { IconType } from 'react-icons'
import { useId } from 'react'
import { Controller } from 'react-hook-form'
import { Input, Label, Validator } from 'rsc-daisyui'

export type BaseFormInputProps = Omit<JSX.IntrinsicElements['input'], 'name' | 'color'>

export interface FormInputProps<T extends FieldValues> extends BaseFormInputProps {
  control: Control<T>
  name: FieldPath<T>
  label: string
  icon: IconType
}

export function FormInput<T extends FieldValues>({ control, name, label, icon: Icon, ...rest }: FormInputProps<T>) {
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
            </Label>
            <Input as='label' className='w-full' validator>
              <Icon className='cursor-pointer opacity-30' />
              <input {...rest} aria-errormessage={errorId} aria-invalid={invalid} id={fieldId} {...field} />
            </Input>
            <Validator.Hint as='small' className='empty:hidden' id={errorId} role='alert'>
              {error?.message}
            </Validator.Hint>
          </div>
        )
      }}
    />
  )
}
