import { Twitter, Send, Youtube } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer({ isWeb3 = false }) {
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
    <footer className="relative px-2 sm:px-4 md:px-6 lg:px-8 mx-auto xs:space-x-2 sm:min-w-[30vh] md:min-w-[40vh] lg:min-w-[70vh] max-w-[3000px] pb-3 xs:pb-4 sm:pb-6 md:pb-8">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className={`backdrop-blur-lg rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden mx-auto max-w-[3000px] m-1.5 xs:m-2 sm:m-4 md:m-6 mb-1.5 xs:mb-2 sm:mb-4 border ${isWeb3 ? "border-black/20 shadow-lg shadow-black/30" : "border-white/10"}`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="container mx-auto px-2 xs:px-3 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-10 xs:flex-row justify-between items-center py-3 xs:py-0 space-y-2 xs:space-y-0 xs:h-10 sm:h-12 md:h-16 lg:h-20">
            <div className="pl-1 sm:pl-0">
              <p className={`text-2xs xs:text-xs sm:text-sm md:text-base font-medium ${isWeb3 ? "text-black" : "text-white"}`}>
                © 2025 Ez1. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-2 lg:space-x-2 pr-1 sm:pr-0">
              <motion.a
                href="https://x.com/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg xs:rounded-2xl sm:rounded-3xl bg-white/50"
                title="Twitter"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 text-black" />
              </motion.a>
              <motion.a
                href="https://t.me/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg xs:rounded-2xl sm:rounded-3xl bg-white/50 shadow-sm shadow-black/10"
                title="Telegram"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 text-black" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg xs:rounded-2xl sm:rounded-3xl bg-white/50 shadow-sm shadow-black/10"
                title="YouTube"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 text-black" />
              </motion.a>
              <motion.a
                href="https://dexscreener.com/solana/cedoapevhivr96swkvb2ebr8ick1ax1dwb2ygjqtz4gd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg xs:rounded-2xl sm:rounded-3xl bg-white/50 shadow-sm shadow-black/10"
                title="DexScreener"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/dex.png" 
                    alt="DexScreener" 
                    width={12} 
                    height={12}
                    className="object-contain" 
                  />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
