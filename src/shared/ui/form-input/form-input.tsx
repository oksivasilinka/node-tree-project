import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Input, InputProps } from '@/shared/ui'

export type FormInputProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<InputProps, 'name' | 'onChange' | 'value'>

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: FormInputProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Input
      {...{
        id: name,
        onChange: onChange,
        value: value,
        ...textFieldProps,
      }}
    />
  )
}
