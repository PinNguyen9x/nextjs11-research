import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
  children: React.ReactNode
  requireLogin?: boolean
}

export function Auth({ children, requireLogin = false }: AuthProps) {
  const { profile, firstLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!requireLogin) return
    if (!firstLoading && !profile?.username) {
      router.replace('/login')
    }
  }, [firstLoading, profile, requireLogin, router])

  if (requireLogin && !profile?.username) return <p>Loading...</p>
  return <div>{children}</div>
}
