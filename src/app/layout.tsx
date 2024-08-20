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
    <html lang="en" className="bg-default">
      <body className="font-default text-primary">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mx-auto max-w-[700px] px-4 pb-24 pt-10 md:px-6 md:pb-44 md:pt-20">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
