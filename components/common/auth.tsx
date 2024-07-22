import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
  children: React.ReactNode
}

export function Auth({ children }: AuthProps) {
  const { profile, firstLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push('/login')
    }
  }, [firstLoading, profile, router])

  if (!profile?.username) return <p>Loading...</p>
  return <div>{children}</div>
}
