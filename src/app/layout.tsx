import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider"; // Adjust the import path as needed

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata configuration with images from the public folder
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
        url: "/social-preview-index.png", // Image from the public folder
        width: 1200, // Optional: adjust as needed
        height: 630, // Optional: adjust as needed
        alt: "Social preview image for ez1", // Optional: descriptive alt text
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://ez1.dev/",
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    images: ["/social-preview-index.png"], // Image from the public folder
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
