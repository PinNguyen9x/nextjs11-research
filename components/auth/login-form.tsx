import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { LoginPayload } from '@/models'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface LoginFormProps {
  onSubmit?: (values: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter your username')
      .min(4, 'Username is required to have at least 4 characters'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Password is required to have at least 6 characters'),
  })
  const [showPassword, setShowPassword] = useState(false)
  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const handleLoginSubmit = (values: LoginPayload) => {
    onSubmit?.(values)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} label="Username" />
      <InputField
        name="password"
        type={showPassword ? 'text' : 'password'}
        control={control}
        label="Password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>
        Login
      </Button>
    </Box>
  )
}
