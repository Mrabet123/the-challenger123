// app/layout.tsx (or RootLayout.tsx)
import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'ChallenZee',
  description: 'A Gen Z platform for challenge events',
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/logo2.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    // you can also add apple and shortcut if you like:
    apple: '/logo2.png',
    shortcut: '/logo2.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

      <body>{children}</body>

    </html>
  )
}