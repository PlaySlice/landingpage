import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ez1 - Dream It, Build It.",
  description:
    "Build and create projects effortlessly with Ez1, your intelligent AI agent companion for development and innovation.",
  keywords: [
    "AI agent",
    "project builder",
    "development assistant",
    "code generation",
    "AI development",
    "software projects",
    "automated development",
    "Ez1",
    "AI coding",
    "project creation",
  ],
  authors: [{ name: "Ez1" }],
  openGraph: {
    title: "Ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with Ez1, your intelligent AI agent companion for development and innovation.",
    url: "https://ez1.dev",
    siteName: "Ez1",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        width: 512,
        height: 512,
        alt: "Ez1 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with Ez1, your intelligent AI agent companion for development and innovation.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png"],
    creator: "@ez1dev",
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

