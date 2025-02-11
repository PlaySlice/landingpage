import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ez1 - Dream It, Build It.",
  description:
    "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
  keywords: [
    "AI agent",
    "project builder",
    "development assistant",
    "code generation",
    "AI development",
    "software projects",
    "automated development",
    "ez1",
    "AI coding",
    "project creation",
  ],
  authors: [{ name: "ez1" }],
  openGraph: {
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    url: "https://ez1.dev",
    siteName: "ez1",
    images: [
      {
        url: "https://ez1.dev/apple-touch-icon-precomposed.png",
        width: 512,
        height: 512,
        alt: "ez1 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-YpQ2PBG7Xgci7TxcZO3czjrspUhFcE.png",
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
