import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'
import { LayoutProps } from '@/models/common'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth()
  const router = useRouter()
  async function handleLogoutClick() {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <p>Profile:{JSON.stringify(profile, null, 4)}</p>
      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  )
}
