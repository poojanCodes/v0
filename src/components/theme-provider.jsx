"use client"

import * as React from "react"
// 📦 Swapped to the compatible package version
import { ThemeProvider as NextThemesProvider } from "@teispace/next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}