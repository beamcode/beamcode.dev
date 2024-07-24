"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function ThemeToggleGray() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  function toggleTheme() {
    if (!mounted) return
    setTheme(theme === "light" ? "cyberpunk" : "light")
  }

  return (
    <div
      className="flex-shrink-0 w-12 h-8 p-1 rounded-full bg-primary-bg"
      onClick={() => {
        toggleTheme()
      }}
      aria-label="Toggle Dark Mode"
      role="button"
    >
      <div className="w-6 h-6 rounded-full duration-[250ms] ease-in-out flex items-center justify-center dark:translate-x-4 bg-default-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="block dark:hidden w-4 h-4 text-gray-400 dark:text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="hidden dark:block w-4 h-4 text-gray-400 dark:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </div>
  )
}
