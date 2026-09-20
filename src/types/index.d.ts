import type { Control, FieldPath, FieldValues } from 'react-hook-form'

export interface BaseFormControlProps<T extends FieldValues> {
  control: Control<T>
}

export interface FormControlProps<T extends FieldValues> extends BaseFormControlProps<T> {
  name: FieldPath<T>
  label: string
}
