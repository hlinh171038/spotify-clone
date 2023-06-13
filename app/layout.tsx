import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import {Figtree} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const font = Figtree({ subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
