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
        url: "https://ez1.dev/social_preview_index.png",
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
    images: {
      url: "https://ez1.dev/social_preview_index.png",
      width: 512,
      height: 512,
      alt: "ez1 Logo",
    },
    creator: "@ez1dev",
  },
  icons: {
    icon: [
      {
        url: "https://ez1.dev/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "https://ez1.dev/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://ez1.dev/social_preview_index.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://ez1.dev/social_preview_index.png",
      },
    ],
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
