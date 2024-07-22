import authApi from '@/api/auth-api'
import * as React from 'react'
import { useAuth } from '../hooks'
import { useRouter } from 'next/router'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({ revalidateOnMount: false })
  async function handleLoginClick() {
    try {
      await login()
      router.push('/about')
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  async function getProfile() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('fail to get profile', error)
    }
  }
  async function handleLogoutClick() {
    try {
      await logout()
      console.log('Redirecting to login page')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile:{JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={getProfile}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button
        onClick={() => {
          router.push('/about')
        }}
      >
        Go to about
      </button>
    </div>
  )
}
