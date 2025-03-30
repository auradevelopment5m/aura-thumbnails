import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Aura Thumbnail Generator</title>
        <meta name="description" content="Generate custom thumbnails for Aura resources" />
      </head>
      <body>{children}</body>
    </html>
  )
}

