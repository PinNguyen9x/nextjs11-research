import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'

export interface IAppProps {
  children: React.ReactNode
}

export function App({ children }: IAppProps) {
  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <Link href="/admin/posts">Sidebar</Link>
      <Link href="/admin/posts/create">Sidebar</Link>
      <div>{children}</div>
    </Auth>
  )
}
