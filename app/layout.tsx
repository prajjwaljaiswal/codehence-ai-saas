import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codehence | Generate any code at once and design',
  description: 'Created with Codehence',
  generator: 'codehence.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
