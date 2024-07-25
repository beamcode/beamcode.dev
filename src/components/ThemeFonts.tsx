"use client"

import { useTheme } from "next-themes"

export function useThemeFontClass() {
  const { theme } = useTheme()

  if (theme === "cyberpunk") return "font-MegaMan"

  return ""
}
