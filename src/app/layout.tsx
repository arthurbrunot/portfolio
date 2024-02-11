import {type Metadata, Viewport} from 'next'
import { Inter } from 'next/font/google'
import { RootLayout } from '@/components/RootLayout'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })
import '@/styles/tailwind.css'
import clsx from "clsx";
import {Analytics} from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: '%s - Arthur BRUNOT',
    default: 'Arthur BRUNOT - Créateur de solutions digitales',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={clsx("h-full bg-neutral-950 text-base antialiased", inter.className)}>
      <SpeedInsights />
      <Analytics />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
