import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RootLayout } from '@/components/RootLayout'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })
import '@/styles/tailwind.css'
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={clsx("h-full bg-neutral-950 text-base antialiased", inter.className)}>
      <SpeedInsights />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
