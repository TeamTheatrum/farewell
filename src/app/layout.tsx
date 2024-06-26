import type { Metadata } from 'next'
import { Grandiflora_One } from 'next/font/google'
import './globals.css'

const grandifloraOne = Grandiflora_One({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farewell Letters',
  description: 'Farewell Letters to Jeongsu & Yuna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={grandifloraOne.className}>{children}</body>
    </html>
  )
}
