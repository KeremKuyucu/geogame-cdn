import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeoGame Cdn Service',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.github.com/KeremKuyucu/GeoGame/main/assets/logo.png"
        />
        <meta name="theme-color" content="#4338ca" />
      </head>
      <body>{children}</body>
    </html>
  )
}
