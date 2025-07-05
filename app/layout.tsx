// app/layout.tsx (or RootLayout.tsx)
import type { Metadata } from 'next'
import "../src/App.css"; // Make sure this path is correct
import "./globals.css";   // If you have a globals.css

export const metadata: Metadata = {
  title: 'ChallenZee',
  description: 'Created with v0',
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
      <body>{children}</body>
    </html>
  )
}
