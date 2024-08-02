import React from 'react'
import { LoginForm } from '@/components/auth'
import { LoginPayload } from '@/models'
import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { login } = useAuth({ revalidateOnMount: false })
  async function handleLoginClick(data: LoginPayload) {
    try {
      await login(data)
      router.push('/')
    } catch (error) {
      console.log('fail to login', error)
    }
  }

  return (
    <Box>
      <Paper elevation={4} sx={{ mx: 'auto', mt: 8, p: 4, textAlign: 'center', maxWidth: '480px' }}>
        <Typography component="h1" variant="h5" mb={3}>
          Login
        </Typography>
        <LoginForm onSubmit={handleLoginClick} />
      </Paper>
    </Box>
  )
}
