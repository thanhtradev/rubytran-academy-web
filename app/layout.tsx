import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rubytran Academy',
  description: 'Rubytran Academy website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  )
}
