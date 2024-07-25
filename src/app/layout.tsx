import type { Metadata } from "next"
import "../styles/globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { useThemeFontClass } from "@/components/ThemeFonts"

import SpotifyWidget from "@/components/SpotifyWidget"
import RainbowProgressBar from "@/components/RainbowScrollBar"
import BurgerCursor from "@/components/FollowCursor"

export const metadata: Metadata = {
  title: "Beamcode.dev",
  description: "Welcome to my world wide web page",
}

// const test = useThemeFontClass() // This is a test

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-default-bg">
      <body className="text-primary-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="px-4 md:px-6 pt-10 md:pt-20 pb-24 md:pb-44 max-w-[700px] mx-auto">
            {children}
          </main>
          <Footer />

          <div className="fixed flex bottom-0 right-0 z-10 p-5 w-full sm:w-[400px] transition delay-300">
            {/* <SpotifyWidget className="w-full" /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
