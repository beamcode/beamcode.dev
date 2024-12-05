import type { Metadata } from "next"
import "@/styles/global.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

import SpotifyWidget from "@/components/SpotifyWidget"
import RainbowProgressBar from "@/components/RainbowScrollBar"
import BurgerCursor from "@/components/FollowCursor"
import Providers from "@/context/Providers"

export const metadata: Metadata = {
  title: "Beamcode.dev",
  description: "Welcome to my world wide web page",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-default text-primary" suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="mx-auto max-w-[700px] px-4 pb-24 pt-10 md:px-6 md:pb-44 md:pt-20">
            {children}
          </main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
