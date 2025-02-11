"use client";

import { Moon, Sun, Twitter, Send, Youtube } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-neutral-950 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <Image
                width={96}
                height={96}
                src={
                  theme === "dark"
                    ? "/logo-dark-styled.png"
                    : "/logo-light-styled.png"
                }
                alt="Ez1 Logo"
                className="w-[96px] h-[96px] object-contain"
                priority
              />
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://x.com/ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-white hover:text-neutral-900 dark:hover:text-white/80"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-white hover:text-neutral-900 dark:hover:text-white/80"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-white hover:text-neutral-900 dark:hover:text-white/80"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-white hover:text-neutral-900 dark:hover:text-white/80 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
