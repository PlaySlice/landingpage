import { Twitter, Send, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              © 2025 Ez1. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://x.com/ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@ez1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded"
              // You can add an onClick handler here if needed
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
