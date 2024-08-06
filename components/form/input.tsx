import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEvent } from 'react'
import { Control, useController } from 'react-hook-form'

type InputFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
}

export function InputField({
  name,
  label,
  control,
  onChange: externamOnchange,
  onBlur: externamOnBlur,
  ...props
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  })
  return (
    <TextField
      fullWidth
      margin="normal"
      size="small"
      name={name}
      label={label}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        externamOnchange?.(e)
      }}
      onBlur={onBlur}
      inputRef={ref}
      value={value}
      error={!!error}
      helperText={error?.message}
      {...props}
    />
  )
}
