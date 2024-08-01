import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'

export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const handleLoginSubmit = (value: any) => {
    console.log(value)
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
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  )
}
