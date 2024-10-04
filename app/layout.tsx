import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@components/layout/header'
import { Footer } from '@components/layout/footer'
import clsx from 'clsx'
import { Container } from '@components/atoms/container'
import { TRPCProvider } from '~/trpc/client'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Simple User Management',
  description: 'Simple CRUD app using tRPC and Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'flex',
          'flex-col',
          'relative',
          'min-h-screen'
        )}
      >
        <Header />
        <Container className={clsx('grow', 'py-6 md:py-12')}>
          <TRPCProvider>{children}</TRPCProvider>
        </Container>
        <Footer />
      </body>
    </html>
  )
}
