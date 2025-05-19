import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header"
import Providers from "@/context/Providers"

import "@/styles/global.css"

export const metadata: Metadata = {
  title: "Beamcode.dev",
  description: "Personal website of Beamcode",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-default-font text-primary-text" suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="mx-auto max-w-[700px] px-4 pt-10 pb-24 md:px-6 md:pt-20 md:pb-44">
            {children}
          </main>
          {/* <Footer /> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
