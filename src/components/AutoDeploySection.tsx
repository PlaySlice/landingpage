"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Terminal, Server, Cloud } from "lucide-react";
import AnimatedStarsBackground from "@/components/AnimatedStarsBackground";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description:
      "Link your wallet with our platform with a single click",
    icon: <Terminal className="w-4 h-4" />
  },
  {
    number: "02",
    title: "Generate Your Contract",
    description:
      "Use our AI tools to create your Solana program",
    icon: <Cloud className="w-4 h-4" />
  },
  {
    number: "03",
    title: "One-Click Deployment",
    description:
      "Deploy your Contract instantly with our automatic integration",
    icon: <Server className="w-4 h-4" />
  },
  {
    number: "04",
    title: "Continuous Updates",
    description: "You can upgrade your program with changes you make",
    icon: <Rocket className="w-4 h-4" />
  },
];

const AutoDeploySection = ({ isWeb3 = false }) => {
  // Only render this component in Web3 mode
  if (!isWeb3) return null;
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-[#FF5C3A]/5"
    >
      <AnimatedStarsBackground />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -right-40 top-1/4 w-96 h-96 rounded-full opacity-10 ${isWeb3 ? 'bg-Black' : 'bg-blue-500'} blur-3xl`}></div>
        <div className={`absolute -left-20 top-1/4 w-64 h-64 rounded-full opacity-5 ${isWeb3 ? 'bg-[#FF5C3A]' : 'bg-indigo-500'} blur-2xl`}></div>
      </div>

      <motion.div 
        style={{ opacity, scale }} 
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className={`mb-6 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${isWeb3 ? "bg-white/20 text-[#18181b] border border-[#18181b]/40 backdrop-blur-sm" : " text-blue-800 dark:bg-dark-900/30 dark:text-blue-400"}`}>
                <Rocket className={`w-4 h-4 mr-2 ${isWeb3 ? "text-[#18181b]" : ""}`} />
                Seamless Deployment
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight ${isWeb3 ? "text-[#18181b] drop-shadow-lg" : "text-neutral-900 dark:text-white"}`} style={isWeb3 ? {textShadow: '0 2px 16px rgba(255, 91, 58, 0.29)'} : {}}>
                Deploy to Solana
                <br />
                in One Click
              </h2>
              <p className={`text-lg mb-10 ${isWeb3 ? "text-[#18181b]/80" : "text-neutral-600 dark:text-neutral-400"}`}>
                Focus on creating amazing experiences, not on deployment
                processes. With our Deploy on Solana feature, your dApps go
                live instantly.
              </p>

              <div className="space-y-8 mb-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0, 
                      x: isInView ? 0 : -20 
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="flex group"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className={`w-10 h-10 rounded-full ${isWeb3 ? "bg-white/10 border border-[#18181b]/40" : "bg-neutral-200 dark:bg-neutral-800"} flex items-center justify-center ${isWeb3 ? "text-[#18181b]" : "font-bold text-neutral-700 dark:text-neutral-300"} group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isWeb3 ? "text-[#18181b]" : "text-neutral-900 dark:text-white"} group-hover:translate-x-1 transition-transform duration-300`}>
                        {step.title}
                      </h3>
                      <p className={`${isWeb3 ? "text-[#18181b]/70" : "text-neutral-600 dark:text-neutral-400"}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isWeb3 
                      ? "bg-gradient-to-r from-[#FF5C3A] to-[#FF6A4D] text-[#18181b] border border-[#18181b]/10"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  onClick={() => window.open("https:/ai.ez1.dev/", "_blank")}
                >
                  Try Deploy On Solana
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y }}
              className="lg:col-span-7 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.92 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl"
              >
                {/* Glass morphism effect */}
                <div className={`absolute inset-0 ${isWeb3 ? 'bg-white/5' : 'bg-white/5 dark:bg-black/10'} backdrop-blur-[2px] z-10 border border-white/20 rounded-2xl`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 dark:from-blue-900/10 dark:to-indigo-900/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Terminal UI */}
                  <div className="w-[90%] max-w-xl aspect-[5/3] bg-neutral-900 dark:bg-black rounded-xl shadow-2xl overflow-hidden border border-neutral-800">
                    <div className="h-8 bg-neutral-800 dark:bg-neutral-900 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-neutral-400 font-mono">terminal</span>
                      </div>
                    </div>
                    <div className="p-5 font-mono text-sm text-white/90 space-y-3 h-full">
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">$</span>
                        <span className="text-white">ez1 deploy --chain solana</span>
                      </div>
                      <div className="flex items-center text-neutral-400">
                        <span className="ml-4">Analyzing project structure...</span>
                      </div>
                      <div className="flex items-center text-neutral-400">
                        <span className="ml-4">Compiling Solana program...</span>
                      </div>
                      <div className="flex items-center text-neutral-400">
                        <span className="ml-4">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className={`inline-block h-3 w-3 rounded-full mr-2 ${isWeb3 ? 'bg-[#FF5C3A]' : 'bg-green-500'}`}
                          />
                          Deploying to Solana {isWeb3 ? 'mainnet' : 'devnet'}...
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex items-center"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        <span className={`${isWeb3 ? "text-[#FF5C3A]" : "text-green-400"}`}>
                          Program deployed successfully!<br />
                          <span className="text-neutral-400 text-xs">
                            Program ID: 66ce7iZ5uqnVbh4Rt5wChHWyVfUvv1LJrBo8o214pump
                          </span>
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="flex items-center"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white">
                          Front-end deployed at:<br />
                          <span className={`italic underline cursor-pointer ${isWeb3 ? "text-[#FF5C3A]" : "text-blue-400"}`}>
                            https:/ai.ez1.dev/
                          </span>
                        </span>
                      </motion.div>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">$</span>
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          transition={{ duration: 0.3, delay: 1.8 }}
                          className="inline-block overflow-hidden"
                        >
                          <span className="flex items-center">
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                              className="ml-1 inline-block w-2 h-5 bg-white"
                            ></motion.span>
                          </span>
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive elements */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-8 right-8 z-20"
                >
                  <div className={`rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 border ${isWeb3 ? "border-[#FF5C3A]/30" : "border-white/20"}`}>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${isWeb3 ? "bg-[#FF5C3A]" : "bg-green-500"} animate-pulse`}></div>
                      <span className="text-sm text-white font-medium">Live on Solana</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AutoDeploySection;
