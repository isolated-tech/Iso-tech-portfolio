import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
import "./globals.css"

export const metadata: Metadata = {
  title: "Isolated Tech - Digital Agency",
  description: "Isolated Tech - Leading digital agency specializing in innovative web solutions, design, and technology services",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-muted font-sans text-foreground`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}