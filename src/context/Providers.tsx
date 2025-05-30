"use client"

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: "light", dark: "dark", terminal: "terminal" }}
      enableSystem
      themes={["light", "dark", "terminal"]}
    >
      {children}
    </ThemeProvider>
  )
}
