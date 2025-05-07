"use client";

import {
  Twitter,
  Send,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const contractAddress = "66ce7iZ5uqnVbh4Rt5wChHWyVfUvv1LJrBo8o214pump";
  const [copied, setCopied] = useState(false);

  // Force dark theme on component mount
  useEffect(() => {
    // Check if theme is not already dark
    if (theme !== "dark") {
      toggleTheme(); // Toggle to dark theme
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  // Icon hover animation
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15, 
      filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="backdrop-blur-lg sticky top-5 z-50 rounded-3xl overflow-hidden mx-auto min-w-[70vh] max-w-[3000px] m-4 border border-black/20 shadow-lg shadow-black/30"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className=""></div>
        <div className="max-w-7xl mx-auto pl-3 pr-6 relative z-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 -ml-1">
              <motion.a 
                href="/" 
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  width={120}
                  height={32}
                  src="/new_logo.png"
                  alt="Ez1 Logo"
                  className="object-contain py-2"
                  priority
                />
              </motion.a>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-10 h-10 rounded-2xl bg-white/30  "
                title="Twitter"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5 text-black" />
              </motion.a>
              <motion.a
                href="https://t.me/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-10 h-10 rounded-2xl bg-white/30 shadow-sm shadow-black/10"
                title="Telegram"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-5 w-5 text-black" />
              </motion.a>
              <motion.a
                href="https://dexscreener.com/solana/cedoapevhivr96swkvb2ebr8ick1ax1dwb2ygjqtz4gd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-10 h-10 rounded-2xl bg-white/30 shadow-sm shadow-black/10"
                title="DexScreener"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/dex.png" 
                    alt="DexScreener" 
                    width={20} 
                    height={20}
                    className="object-contain" 
                  />
                </div>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-10 h-10 rounded-2xl bg-white/30 shadow-sm shadow-black/10"
                title="YouTube"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="h-5 w-5 text-black" />
              </motion.a>

            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
