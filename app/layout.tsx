import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quick App',
  description: 'Quick with App',
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
