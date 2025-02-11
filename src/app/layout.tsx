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
        url: "https://ez1.dev/social-preview-index.png", // Ensure full URL is used
        width: 1200,
        height: 630,
        alt: "ez1 Social Preview",
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
      "https://ez1.dev/social-preview-index.png", // Fully qualified URL
    ],
    creator: "@ez1dev",
  },
  icons: {
    icon: [
      {
        url: "/social-preview-index.png", // Using relative URL (works for favicons)
        type: "image/png",
      },
      {
        url: "/social-preview-index.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/social-preview-index.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/social-preview-index.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/social-preview-index.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/social-preview-index.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/social-preview-index.png",
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
      <head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {/* Twitter */}
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}