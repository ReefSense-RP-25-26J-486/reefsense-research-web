import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'ReefSense — Coral Reef Monitoring & Restoration AI',
  description:
    'AI-driven decision support system for coral reef conservation. SLIIT Research Project RP-25-26J-486.',
  icons: {
    icon: '/images/logos/ReefSense_Icon.png',
    apple: '/images/logos/ReefSense_Icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
