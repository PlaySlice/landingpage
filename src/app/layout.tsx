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
  openGraph: {
    type: "website",
    url: "https://ez1.dev/",
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    images: [
      {
        url: "https://i.ibb.co/ks1XJgpK/social-preview-index.png",
        width: 1200,
        height: 630,
        alt: "ez1 Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://ez1.dev/",
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    images: [
      "https://i.ibb.co/ks1XJgpK/social-preview-index.png",
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
        <meta property="twitter:url" content={metadata.twitter.url} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}