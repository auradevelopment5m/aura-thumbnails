import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aura Thumbnail Generator",
  description: "Create custom thumbnails for Aura resources",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}

