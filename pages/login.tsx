import authApi from '@/api/auth-api'
import * as React from 'react'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  async function login() {
    try {
      await authApi.login({
        username: 'admin',
        password: 'admin12312',
      })
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
  async function logout() {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={login}>Login</button>
      <button onClick={getProfile}>Get Profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
