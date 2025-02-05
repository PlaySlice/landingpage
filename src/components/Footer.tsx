import { Twitter, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">© 2025 Ez1. All rights reserved.</p>
          </div>
          <div className="flex space-x-3">
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
          </div>
        </div>
      </div>
    </footer>
  )
}

