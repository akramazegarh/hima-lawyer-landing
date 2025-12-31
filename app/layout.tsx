import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIMA - نظام إدارة قضايا للمحامين المغاربة',
  description: 'نظام SaaS متقدم لإدارة القضايا والعملاء مصمم خصيصاً للمحامين في المغرب. حلول مبتكرة لتنظيم العمل القانوني وتوفير الوقت.',
  keywords: 'محامي, إدارة قضايا, المغرب, برنامج قانوني, نظام إدارة',
  openGraph: {
    title: 'HIMA - نظام إدارة قضايا للمحامين المغاربة',
    description: 'نظام SaaS متقدم لإدارة القضايا والعملاء',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
