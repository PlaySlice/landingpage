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
    <footer className="relative px-4 mx-auto min-w-[70vh] max-w-[3000px] pb-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className={`backdrop-blur-lg rounded-3xl overflow-hidden mx-auto min-w-[0vh] max-w-[3000px] m-4 mb-4 border ${isWeb3 ? "border-black/20 shadow-lg shadow-black/30" : "border-white/10"}`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div>
              <p className={`text-sm font-medium ${isWeb3 ? "text-black" : "text-white"}`}>
                © 2025 Ez1. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-8 h-8 rounded-3xl bg-white/30"
                title="Twitter"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-4 w-4 text-black" />
              </motion.a>
              <motion.a
                href="https://t.me/ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-8 h-8 rounded-3xl bg-white/30 shadow-sm shadow-black/10"
                title="Telegram"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-4 w-4 text-black" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@ez1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-8 h-8 rounded-3xl bg-white/30 shadow-sm shadow-black/10"
                title="YouTube"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="h-4 w-4 text-black" />
              </motion.a>
              <motion.a
                href="https://dexscreener.com/solana/cedoapevhivr96swkvb2ebr8ick1ax1dwb2ygjqtz4gd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black flex items-center justify-center w-8 h-8 rounded-2xl bg-white/30 shadow-sm shadow-black/10"
                title="DexScreener"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/dex.png" 
                    alt="DexScreener" 
                    width={16} 
                    height={16}
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
