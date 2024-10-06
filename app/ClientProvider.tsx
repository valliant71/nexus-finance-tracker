'use client'

import { ClerkProvider } from '@clerk/nextjs'

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>
}