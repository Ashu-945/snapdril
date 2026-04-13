import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
import { Analytics } from '@vercel/analytics/next'
import { GlobalBackground } from "@/components/global-background"
import { MouseSpotlight } from "@/components/mouse-spotlight"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingShapes } from "@/components/floating-shapes"
import { WhatsAppButton } from "@/components/whatsapp-button"
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'SnapDrill | Capture Moments, Build Your Brand',
  description: 'Helping small and local businesses grow through captivating digital media.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/snapdrill-media/logoPhotoCropped.png',
      },
    ],
    apple: '/snapdrill-media/logoPhotoCropped.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased text-white gradient-bg min-h-screen flex flex-col`}>
        <GlobalBackground />
        <MouseSpotlight />
        <FloatingShapes />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
