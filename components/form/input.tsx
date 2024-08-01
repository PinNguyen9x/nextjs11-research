import { TextField, TextFieldProps } from '@mui/material'
import * as React from 'react'
import { Control, useController } from 'react-hook-form'

type InputFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
}

export function InputField({
  name,
  label,
  control,
  onChange: ExternamOnchange,
  onBlur: ExternamOnBlur,
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
      size="small"
      name={name}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      value={value}
      {...props}
    />
  )
}
