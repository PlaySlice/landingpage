"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layout, Zap } from "lucide-react";
import AnimatedStarsBackground from "@/components/AnimatedStarsBackground";

const AIWebsiteSection = ({ isWeb3 = false }) => {
  const [activeTab, setActiveTab] = useState("design");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.4, 1, 1, 0.4]
  );

  const tabs = [
    {
      id: "design",
      label: "Design",
      icon: <Layout className="w-5 h-5 mr-2" />,
      description: "AI-powered design suggestions tailored to your brand",
    },
    {
      id: "code",
      label: "Code",
      icon: <Code className="w-5 h-5 mr-2" />,
      description: "Clean, efficient code generated from your requirements",
    },
    {
      id: "deploy",
      label: "Deploy",
      icon: <Zap className="w-5 h-5 mr-2" />,
      description: "One-click deployment to get your site live instantly",
    },
  ];

  const FloatingParticle = ({
    delay,
    x,
    y,
    size,
    duration,
  }: {
    delay: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [0, -80],
        x: [0, x],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full ${
        isWeb3 ? "bg-white" : "bg-indigo-500"
      }`}
      style={{
        width: size,
        height: size,
        bottom: "10%",
        left: "50%",
        filter: "blur(2px)",
      }}
    />
  );

  return (
    <section
      id="ai-website"
      ref={sectionRef}
      className={`py-32 relative overflow-hidden ${
        isWeb3
          ? "bg-gradient-to-b from-[#FF5C3A]/10 via-[#FFB07C]/10 to-[#FF6A4D]/10"
          : "bg-neutral-50 dark:bg-neutral-900"
      }`}
    >
      <AnimatedStarsBackground />

      {/* Ambient floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingParticle delay={0} x={30} y={-100} size={4} duration={8} />
        <FloatingParticle delay={2} x={-20} y={-50} size={6} duration={10} />
        <FloatingParticle delay={4} x={50} y={-120} size={3} duration={9} />
        <FloatingParticle delay={1} x={-40} y={-80} size={5} duration={7} />
        <FloatingParticle delay={3} x={10} y={-90} size={8} duration={12} />
      </div>

      {/* Background gradient layers */}
      <div
        className="absolute inset-0 bg-gradient-to-b opacity-30 pointer-events-none"
        style={{
          background: isWeb3
            ? "radial-gradient(circle at 30% 20%, rgba(255, 92, 58, 0.3) 0%, transparent 50%)"
            : "radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
        }}
      ></div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block"
          >
            <div
              className={`px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-flex ${
                isWeb3
                  ? "bg-white/10 text-[#18181b] backdrop-blur-md border border-[#18181b]/20"
                  : "bg-neutral-900/5 text-neutral-600 dark:bg-white/5 dark:text-neutral-400"
              }`}
            >
              <span className="relative inline-flex items-center">
                AI-Driven Experience
                <span
                  className={`ml-2 w-2 h-2 rounded-full ${
                    isWeb3 ? "bg-[#FF5C3A]" : "bg-indigo-500"
                  } animate-ping absolute -right-4`}
                ></span>
                <span
                  className={`ml-2 w-2 h-2 rounded-full ${
                    isWeb3 ? "bg-[#FF5C3A]" : "bg-indigo-500"
                  } absolute -right-4`}
                ></span>
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${
              isWeb3
                ? "text-[#18181b] drop-shadow-lg"
                : "text-neutral-900 dark:text-white"
            }`}
            style={
              isWeb3 ? { textShadow: "0 2px 16px rgba(255, 91, 58, 0.29)" } : {}
            }
          >
            AI-Powered Website Generation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={`text-lg max-w-xl mx-auto ${
              isWeb3
                ? "text-[#18181b]/80"
                : "text-neutral-600 dark:text-neutral-400"
            }`}
          >
            From concept to live site in minutes, not days. Let our AI build
            your next website with stunning design and clean code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div style={{ y }} className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.95,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Glass morphism effect on top of video */}
              <div
                className={`absolute inset-0 backdrop-blur-[2px] opacity-20 ${
                  isWeb3
                    ? "bg-gradient-to-br from-[#FF5C3A]/20 to-[#FFB07C]/10"
                    : "bg-gradient-to-br from-blue-500/20 to-indigo-500/10"
                }`}
              ></div>

              <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating interactive elements */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md p-2 rounded-full shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isInView ? 0 : 20,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Zap
                  className={`w-5 h-5 ${
                    isWeb3 ? "text-[#FF5C3A]" : "text-indigo-500"
                  }`}
                />
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <div
              className={`absolute -z-10 -bottom-6 -left-6 w-64 h-64 rounded-full opacity-20 ${
                isWeb3 ? "bg-[#FF5C3A]" : "bg-indigo-500"
              } blur-3xl`}
            ></div>
            <div
              className={`absolute -z-10 -top-6 -right-6 w-48 h-48 rounded-full opacity-10 ${
                isWeb3 ? "bg-[#FF5C3A]" : "bg-indigo-500"
              } blur-2xl`}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? isWeb3
                          ? "bg-gradient-to-r from-[#FF5C3A] to-[#FF6A4D] text-[#18181b] shadow-lg"
                          : "bg-neutral-900 text-white dark:bg-white dark:text-black"
                        : isWeb3
                        ? "bg-white/10 text-[#18181b] hover:bg-white/20"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeTab === tab.id && isInView ? 1 : 0,
                    y: activeTab === tab.id && isInView ? 0 : 20,
                    display: activeTab === tab.id ? "block" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isWeb3
                        ? "text-[#18181b]"
                        : "text-neutral-900 dark:text-white"
                    }`}
                  >
                    {tab.label} your website with AI
                  </h3>
                  <p
                    className={`mb-6 ${
                      isWeb3
                        ? "text-[#18181b]/80"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {tab.description}. Our AI models are trained on the latest
                    web design trends and best practices to deliver stunning
                    results.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                      }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 ${
                          isWeb3 ? "bg-[#FF5C3A]" : "bg-green-500"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span
                        className={`${
                          isWeb3
                            ? "text-[#18181b]"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        {tab.id === "design" &&
                          "Responsive designs that look great on all devices"}
                        {tab.id === "code" &&
                          "Clean, semantic HTML with modern CSS and JavaScript"}
                        {tab.id === "deploy" &&
                          "Automatic optimization for speed and performance"}
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                      }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 ${
                          isWeb3 ? "bg-[#FF5C3A]" : "bg-green-500"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span
                        className={`${
                          isWeb3
                            ? "text-[#18181b]"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        {tab.id === "design" &&
                          "Custom color schemes that match your brand identity"}
                        {tab.id === "code" &&
                          "Optimized for SEO and accessibility out of the box"}
                        {tab.id === "deploy" &&
                          "CI/CD integration for smooth updates and changes"}
                      </span>
                    </motion.li>
                  </ul>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => window.open("https:/ai.ez1.dev/", "_blank")}
                  className={`rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isWeb3
                      ? "bg-gradient-to-r from-[#FF5C3A] to-[#FF6A4D] text-[#18181b] border border-[#18181b]/10"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  }`}
                >
                  Try AI Website Builder
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIWebsiteSection;
