"use client";
import AIWebsiteSection from "@/components/AIWebsiteSection";
import AutoDeploySection from "@/components/AutoDeploySection";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import ClientFeedbackSection from "@/components/ClientFeedbackSection";
import EndorsementSection from "@/components/EndorsementSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NetlifyDeploySection from "@/components/NetlifyDeploySection";
import PromptEnhancerSection from "@/components/PromptEnhancerSection";
import Web3ToggleSection from "@/components/Web3ToggleSection";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedStarsBackground from "@/components/AnimatedStarsBackground";

// Animation variants for professional staggered transitions
const heroVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
};
const fadeScale = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.3 } },
};
const toggleThumb = {
  initial: { x: 0, boxShadow: '0 0 0px #fff0' },
  animate: (isWeb3: boolean) => ({
    x: isWeb3 ? 64 : 0,
    boxShadow: isWeb3
      ? '0 0 16px 4px #FF5C3A88'
      : '0 0 12px 2px #2563eb66',
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }),
};

// Add a new animation variant for the thumb hint
const normalModeHint = {
  initial: { x: 0 },
  animate: {
    x: [0, 12, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 4,
      duration: 1.5,
      ease: "easeInOut",
    }
  }
};

const card3D = {
  initial: { opacity: 0, scale: 0.96, rotateX: 8 },
  animate: { opacity: 1, scale: 1, rotateX: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
  exit: { opacity: 0, scale: 0.96, rotateX: 8, transition: { duration: 0.3 } },
};

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);
  const [isWeb3, setIsWeb3] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [starBurst, setStarBurst] = useState(false);

  // Toggle video playback
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(e => console.error("Video play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle video sound
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // Handle video playback based on Web3 mode
    if (videoRef.current) {
      if (isWeb3) {
        videoRef.current.play().catch(e => console.error("Video play error:", e));
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }

    // Hide scroll indicator after 10 seconds
    const timeout = setTimeout(() => {
      setShowScroll(false);
    }, 10000);

    // Hide scroll indicator on scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger star burst on toggle
    setStarBurst(true);
    const starBurstTimeout = setTimeout(() => setStarBurst(false), 600);

    // Clean up event listener and timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
      clearTimeout(starBurstTimeout);
    };
  }, [isWeb3]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700  ${
      isWeb3 
        ? "bg-gradient-to-b from-[#FF5C3A] via-[#FFB07C] to-[#FF6A4D]" 
        : "bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
    }`}>
      <Navbar />
      <main className="flex-grow flex flex-col px-2 sm:px-4 md:px-6">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center ">
          {/* Animated stars with burst effect */}
          <AnimatedStarsBackground burst={starBurst} />
          {/* Animated background gradient morph */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isWeb3 ? 'web3-bg' : 'normal-bg'}
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(12px)' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute inset-0 w-full h-full z-0 transition-colors duration-700 ${
                isWeb3
                  ? "bg-gradient-to-b from-[#FF5C3A] via-[#FFB07C] to-[#FF6A4D]"
                  : "bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
              }`}

              style={{
                borderBottomLeftRadius: '50% 30%', borderBottomRightRadius: '50% 30%', 
                boxShadow: isWeb3
                  ? '0px 8px 32px 0 rgba(255, 91, 58, 0.27)'
                  : '0px 10px 40px 0 rgba(0, 0, 0, 0.52)'
              }}
            />
          </AnimatePresence>
          {/* Animated content with staggered transitions */}
          <motion.div
            variants={heroVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 flex flex-col items-center justify-center w-full "
          >
            <motion.h1
              variants={fadeUp}
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tighter leading-[1.2] ${isWeb3 ? "text-[#18181b]" : "text-white"} text-center drop-shadow-lg px-3 sm:px-4`}
            >
              The First AI Tool to Deploy on Solana
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className={`text-sm xs:text-base sm:text-lg md:text-2xl ${isWeb3 ? "text-[#18181b]/80" : "text-white/80"} mb-4 sm:mb-6 md:mb-8 text-center max-w-2xl px-3 sm:px-4 md:px-6`}
            >
              Instantly deploy your dApp on Solana. No code. No limits. <br className="hidden sm:block" />
              <span className={`font-semibold ${isWeb3 ? "text-[#FF5C3A]" : "text-blue-400"}`}>
                Be the first to use AI-powered Solana deployment.
              </span>
            </motion.p>
            {/* Toggle Button */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center mb-5 sm:mb-6 md:mb-8 scale-90 sm:scale-100"
            >
              <span className={`text-lg sm:text-xl font-semibold mr-3 sm:mr-4 ${!isWeb3 ? "text-white" : "text-[#18181b]/80"}`}>Normal</span>
              <button
                className={`w-20 xs:w-24 sm:w-32 h-10 xs:h-12 sm:h-16 rounded-full flex items-center transition-colors duration-500 focus:outline-none border-3 xs:border-4 ${
                  isWeb3
                    ? "border-black/70 bg-gradient-to-r from-red-200/20 to-red-600/30 backdrop-blur-sm"
                    : "border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm "
                }`}
                onClick={() => setIsWeb3((prev) => !prev)}
                aria-label="Toggle Web3 mode"
              >
                {isWeb3 ? (
                  <motion.div
                    className="w-8 h-7 xs:w-10 xs:h-9 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center text-lg font-bold bg-[#FF5C3A] text-white"
                    animate={{ x: 56 }}
                    initial={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    style={{ boxShadow: '0 2px 12px 0 #FF5C3A33' }}
                  />
                ) : (
                  <motion.div
                    className="w-8 h-7 xs:w-10 xs:h-9 sm:w-14 sm:h-12 rounded-full shadow-lg flex items-center justify-center text-lg font-bold bg-blue-600 text-white"
                    animate={{ 
                      x: [0, 12, 0],
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 2px 12px 0 rgba(37, 99, 235, 0.3)',
                        '0 3px 15px 2px rgba(37, 99, 235, 0.6)',
                        '0 2px 12px 0 rgba(37, 99, 235, 0.3)'
                      ],
                      transition: { 
                        repeat: Infinity, 
                        repeatDelay: 2, 
                        duration: 1.7, 
                        ease: "easeInOut" 
                      }
                    }}
                    initial={{ x: 0, scale: 1 }}
                    style={{ boxShadow: '0 2px 12px 0 rgba(37, 99, 235, 0.3)' }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-blue-500/20"
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.2, 0.8],
                        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                      }}
                    />
                  </motion.div>
                )}
              </button>
              <span className={`text-lg sm:text-xl font-semibold ml-3 sm:ml-4 ${isWeb3 ? "text-[#18181b]" : "text-white/60"}`}>Web3</span>
            </motion.div>
            {/* Video/Card with 3D effect */}
            <AnimatePresence mode="wait">
              {isWeb3 ? (
                <motion.div
                  key="web3-video"
                  variants={card3D}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-4xl"
                  style={{boxShadow: '0 20px 50px 0 rgba(0, 0, 0, 0.51)'}}
                >
                  <video
                    ref={videoRef}
                    className="w-full aspect-video object-cover"
                    playsInline
                    loop
                    muted={isMuted}
                    autoPlay
                    onClick={togglePlay}
                  >
                    <source src="/EZ1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Video controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      )}
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <line x1="23" y1="9" x2="17" y2="15"></line>
                          <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="normal-card"
                  variants={card3D}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 backdrop-blur-sm border border-blue-500/10"
                >
                  <div className="py-8 px-6 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m0 16v1m-9-9h1m16 0h1m-2.947-7.053l-.708.707M5.654 5.654l-.707-.707m13.4 13.4l-.708.707M5.654 18.346l-.707.707"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold ${isWeb3 ? "text-[#18181b]" : "text-white"} mb-2`}>AI-Powered Development</h3>
                    <p className={`${isWeb3 ? "text-[#18181b]/70" : "text-blue-100/70"} mb-6`}>Create, deploy, and manage full-stack applications with our advanced AI tools</p>
                    <div className="inline-block bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-lg px-6 py-2 text-blue-300 border border-blue-500/10">
                      Toggle to Web3 mode to see Solana features
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          
          </motion.div>
        </section>

        {/* Stats & Social Proof Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -right-40 top-1/2 w-96 h-96 rounded-full opacity-10 ${isWeb3 ? 'bg-[#FF5C3A]' : 'bg-blue-500'} blur-3xl`}></div>
        <div className={`absolute -left-20 top-1/4 w-64 h-64 rounded-full opacity-5 ${isWeb3 ? 'bg-[#FF5C3A]' : 'bg-indigo-500'} blur-2xl`}></div>
      </div>

        <section className={`relative z-20 w-full py-24 md:py-36 flex flex-col items-center justify-center ${isWeb3 ? "bg-[#FF5C3A]/5" : "bg-black/3"} transition-colors duration-700`}> 
          <AnimatedStarsBackground />
          <div className="w-full flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`text-3xl xs:text-4xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 ${isWeb3 ? 'text-[#18181b]' : 'text-blue-400'} drop-shadow-lg text-center px-3 sm:px-4`}
              style={isWeb3 ? {textShadow: '0 2px 16px rgba(255, 91, 58, 0.29)'} : {}}
            >
              Trusted by the Solana Community
            </motion.h2>
            {/* Animated accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="h-1 w-32 rounded-full mb-2 origin-left"
              style={{
                background: isWeb3
                  ? 'linear-gradient(90deg, #FF5C3A 0%, #FFB07C 100%)'
                  : 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)'
              }}
            />
              </div>
          <div className="max-w-6xl w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center mb-16">
            {[{n: '10,000+', label: 'Users since launch'}, {n: '$5M', label: 'Market Cap reached'}, {n: '4M', label: 'Tokens locked for 2 years'}].map((stat, i) => (
              <motion.div
                key={stat.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                className={`flex flex-col items-center justify-center rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-100 bg-white/20 dark:bg-white/5 backdrop-blur-md py-8 xs:py-10 sm:py-12 px-4 xs:px-5 sm:px-6 w-full mx-auto ${isWeb3 ? 'border border-white/10' : 'border border-blue-400/10'}`}
                style={{
                  boxShadow: isWeb3
                    ? '0 8px 32px 0 rgba(255, 91, 58, 0.27)'
                    : '0 8px 32px 0 rgba(37,99,235,0.10)'
                }}
              >
                <span className={`text-4xl xs:text-5xl md:text-6xl font-extrabold drop-shadow-lg bg-clip-text text-transparent ${isWeb3 ? 'bg-gradient-to-r from-[#18181b] to-[#FF5C3A]' : 'bg-gradient-to-r from-blue-900 to-blue-400'}`}>{stat.n}</span>
                <span className="text-xl xs:text-2xl mt-3 xs:mt-4 font-medium" style={{color: isWeb3 ? '#18181b' : 'rgb(178, 178, 178)'}}>{stat.label}</span>
              </motion.div>
            ))}
            </div>
          <div className="flex flex-col items-center justify-center max-w-5xl w-full px-4 sm:px-6 mt-8 grid grid-cols-1 md:grid-cols-1 gap-12 text-center">
            {[{
              label: 'Followed by',
              value: 'Anatoly (Solana Co-founder)'
            }].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center relative px-2 md:px-8`}
              >
                {/* Divider for desktop */}
                {i !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-14 w-px bg-black/10 dark:bg-white/10" />
                )}
                <span className={`text-sm uppercase tracking-widest ${isWeb3 ? 'text-black/60' : 'text-white/60'} mb-2 font-semibold`}>{item.label}</span>
                <span className={`text-2xl md:text-2xl font-bold ${isWeb3 ? 'text-[#18181b]' : 'text-white'} text-center leading-tight`}>{item.value}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20"
          >
            <span className={`inline-flex items-center justify-center ${isWeb3 ? "text-[#18181b]" : "text-white"} text-sm xs:text-base sm:text-lg font-semibold rounded-3xl xs:rounded-full sm:rounded-full px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 shadow-lg transition-all duration-300 scale-90 xs:scale-95 sm:scale-100 text-center ${
              isWeb3 ? "bg-gradient-to-r from-[#FF5C3A] to-[#FF6A4D]" : "bg-gradient-to-r from-blue-600 to-blue-400"
            }`} style={{boxShadow: isWeb3 ? '0 4px 24px 0 #FF5C3A33' : '0 4px 24px 0 #2563eb33'}}>
              First AI Solana Tool to offer Deploy on Solana
            </span>
          </motion.div>
        </section>
        <AutoDeploySection isWeb3={isWeb3} />
        {/* Deployment Sections - Both visible in all modes */}
        <NetlifyDeploySection isWeb3={isWeb3} />
        


      </main>
      <Footer isWeb3={isWeb3} />
    </div>
  );
}
