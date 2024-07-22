import * as React from 'react'

export interface AuthProps {
  children: React.ReactNode
}

export function Auth({ children }: AuthProps) {
  return <div>{children}</div>
}
