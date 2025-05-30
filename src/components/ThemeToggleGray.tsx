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
    setTheme(theme === "light" ? "terminal" : "light")
  }

  return (
    <div
      className="bg-primary-bg h-8 w-12 shrink-0 rounded-full p-1"
      onClick={() => {
        toggleTheme()
      }}
      aria-label="Toggle Dark Mode"
      role="button"
    >
      <div className="bg-default flex h-6 w-6 items-center justify-center rounded-full duration-[250ms] ease-in-out dark:translate-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="block h-4 w-4 text-gray-400 dark:hidden dark:text-gray-200"
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
          className="hidden h-4 w-4 text-gray-400 dark:block dark:text-gray-400"
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
