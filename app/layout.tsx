import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientProvider } from './ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Business Finance Tracker',
  description: 'Track your business finances with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}