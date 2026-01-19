import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { MobileNav } from '@/components/MobileNav'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://developer.example.dev'),
  title: '全端工程師 | 作品集',
  description: '專業全端軟體工程師，專注於打造卓越的數位體驗。精通 React、Next.js、TypeScript 和現代網頁技術。',
  keywords: ['軟體工程師', '全端開發者', 'React', 'Next.js', 'TypeScript', '作品集', '前端開發', '後端開發'],
  authors: [{ name: 'Developer' }],
  creator: 'Developer',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://developer.example.dev',
    siteName: '開發者作品集',
    title: '全端工程師 | 作品集',
    description: '專業全端軟體工程師，專注於打造卓越的數位體驗。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '全端工程師作品集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全端工程師 | 作品集',
    description: '專業全端軟體工程師，專注於打造卓越的數位體驗。',
    images: ['/og-image.png'],
    creator: '@developer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansTC.variable}`}>
      <body className="font-sans bg-background min-h-dvh noise-overlay">
        <div className="bg-grid fixed inset-0 pointer-events-none" aria-hidden="true" />

        {/* Desktop Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Modal Slot for Parallel Routes */}
        {modal}

        {/* Mobile Navigation */}
        <MobileNav />
      </body>
    </html>
  )
}
