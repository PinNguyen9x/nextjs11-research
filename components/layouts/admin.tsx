import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'
import { LayoutProps } from '@/models/common'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  )
}
