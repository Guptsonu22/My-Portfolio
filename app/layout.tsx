import "./globals.css"
import type React from "react"

export const metadata = {
  title: "Sonu Kumar - Creative Developer",
  description: "Portfolio of Sonu Kumar - Web Developer and IT Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

