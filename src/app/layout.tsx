import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider"; // Adjust the path as needed

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata configuration using a simple image reference from the public folder
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
    images: ["/social-preview-index.png"], // Simply reference the image from the public folder
  },
  twitter: {
    card: "summary_large_image",
    url: "https://ez1.dev/",
    title: "ez1 - Dream It, Build It.",
    description:
      "Build and create projects effortlessly with ez1, your intelligent AI agent companion for development and innovation.",
    images: ["/social-preview-index.png"], // Simply reference the image from the public folder
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
        <ThemeProvider>
          <header className="p-4">
            <a href="/">
              {/* Light Mode Logo */}
              <img
                src="/logo-light-styled.png"
                alt="logo"
                className="w-[90px] inline-block dark:hidden"
              />
              {/* Dark Mode Logo */}
              <img
                src="/logo-dark-styled.png"
                alt="logo"
                className="w-[90px] inline-block hidden dark:block"
              />
            </a>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
