import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | ML Moc City',
    default: 'ML Moc City',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="pt">
      <body className="bg-[#f5f5f5] text-[#333333] p-2">{children}</body>
    </html>
  )
}
