import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import AnimatedStarsBackground from "./AnimatedStarsBackground";

// Define types for the animated icon components
interface AnimatedIconProps {
  paths: string[];
  isWeb3: boolean;
}

// Icons with animated variants using SVG paths
const AnimatedIcon = ({ paths, isWeb3 }: AnimatedIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d: string, i: number) => (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { 
              duration: 1.5, 
              delay: 0.2 * i,
              ease: "easeInOut" 
            }
          }}
        />
      ))}
    </svg>
  );
};

interface IconProps {
  isWeb3: boolean;
}

// Enhanced animated icons
const RevenueIcon = ({ isWeb3 }: IconProps) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      "M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"
    ]}
  />
);

const OptimizationIcon = ({ isWeb3 }: IconProps) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M18.5 7.5L12 1L5.5 7.5",
      "M12 1L12 23",
      "M5.5 16.5L12 23L18.5 16.5"
    ]}
  />
);

const TokenIcon = ({ isWeb3 }: IconProps) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M17.4 14.3l-2.1-2.1-1.4 1.4 2.1 2.1c.3 0 .5.1.7.3.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7h-2c0 1.1.4 2.2 1.2 3 .7.7 1.8 1.2 3 1.2s2.2-.4 3-1.2c.8-.8 1.2-1.8 1.2-3 0-1.2-.5-2.3-1.3-3-.2-.2-.5-.3-.7-.4zM6 10c0-1.1.4-2.2 1.2-3 .7-.7 1.8-1.2 3-1.2s2.2.4 3 1.2c.8.8 1.2 1.8 1.2 3h2c0-.3.1-.6.3-.7.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7h-2c0 1.1-.4 2.2-1.2 3-.3.3-.6.5-.9.7l1.4 1.4 2.1-2.1.7.7-2.8 2.8-3.6-3.6c-.7-.5-1.2-1.3-1.2-2.2zm9.2 2.3l.5.5.5-.5zm-5.4-5.4l.5.5.5-.5-.5-.5z",
      "M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"
    ]}
  />
);

const BlockchainIcon = ({ isWeb3 }: IconProps) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M2 12h4v10h12V12h4V2H2z",
      "M7 7h10",
      "M7 12h10",
      "M7 17h10"
    ]}
  />
);

const PromptIcon = ({ isWeb3 }: IconProps) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M12 2a9 9 0 0 1 9 9",
      "M12 2a9 9 0 0 0-9 9",
      "M15 5.5v5h5",
      "M9 5.5v5H4",
      "M7 15a9 9 0 0 0 5 8",
      "M17 15a9 9 0 0 1-5 8",
      "M12 12l4.5 4.5",
      "M12 12l-4.5 4.5"
    ]}
  />
);

// Define the roadmap items with enhanced descriptions
const roadmapItems = [
  {
    title: "Revenue Sharing",
    description: "Introducing a revolutionary revenue sharing model that rewards community members and contributors based on participation and stake.",
    icon: (isWeb3: boolean) => <RevenueIcon isWeb3={isWeb3} />,
    phase: "Phase 1",
    color: "#FF5C3A"
  },
  {
    title: "Optimization & Templates",
    description: "Enhanced AI optimization models and premium templates designed for instant deployment and frictionless building experience.",
    icon: (isWeb3: boolean) => <OptimizationIcon isWeb3={isWeb3} />,
    phase: "Phase 2",
    color: "#FF7A4D"
  },
  {
    title: "Token Launch Integration",
    description: "Seamless token launch capabilities with integrated liquidity management and distribution systems directly on the platform.",
    icon: (isWeb3: boolean) => <TokenIcon isWeb3={isWeb3} />,
    phase: "Phase 3",
    color: "#FF9674"
  },
  {
    title: "Multi-Blockchain Support",
    description: "Extending our deployment capabilities to support multiple blockchain ecosystems with cross-chain interoperability.",
    icon: (isWeb3: boolean) => <BlockchainIcon isWeb3={isWeb3} />,
    phase: "Phase 4",
    color: "#FFB092"
  },
  {
    title: "End Product Generation",
    description: "Advanced AI prompt system that directly generates fully-optimized, production-ready end products with minimal input required.",
    icon: (isWeb3: boolean) => <PromptIcon isWeb3={isWeb3} />,
    phase: "Phase 5",
    color: "#FFCAB0"
  }
];

// Interface for particle system
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Simplified version of the EnhancedParticles component with fewer particles
const EnhancedParticles = ({ isWeb3 }: { isWeb3: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const particleCount = 10; // Reduced from 25
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15, 
      delay: Math.random() * 5,
      opacity: Math.random() * 0.2 + 0.1
    }));
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            isWeb3 
              ? `bg-[${particle.id % 2 === 0 ? "#FF5C3A" : "#FFB07C"}]` 
              : `bg-[${particle.id % 2 === 0 ? "#2563eb" : "#60a5fa"}]`
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -30], // Reduced movement
            opacity: [particle.opacity, particle.opacity * 1.2, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear" // Simpler easing function
          }}
        />
      ))}
    </div>
  );
};

// Simplified card wrapper component (no 3D effects)
interface SimpleCardProps {
  children: React.ReactNode;
  isWeb3: boolean;
  className?: string;
}

const SimpleCard = ({ children, isWeb3, className = "" }: SimpleCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

// Main component with simplified animations
const RoadmapSection = ({ isWeb3 = false }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]); // Reduced scale change
  
  // Simplified animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Using simpler duration-based animation instead of springs
      }
    }
  };
  
  // Simplified card animations
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 + i * 0.1, // Reduced stagger delay
      }
    }),
    hover: {
      y: -3,
      transition: {
        duration: 0.2 // Simple duration-based transition
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <AnimatedStarsBackground />
      <EnhancedParticles isWeb3={isWeb3} />

      {/* Simplified background elements - fewer animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -right-[15%] top-[25%] w-[60%] h-[50%] rounded-full blur-[80px]"
          style={{
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 92, 58, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
          }}
        />
 
        <div
          className="absolute -left-[15%] top-[60%] w-[50%] h-[40%] rounded-full blur-[100px]"
          style={{
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 122, 77, 0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ opacity, scale }} 
        className="container mx-auto px-4 relative z-10"
      >
        {/* Header section with simpler animations */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="w-full flex flex-col items-center mb-12">
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-3xl xs:text-4xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 ${
                isWeb3 ? "text-[#18181b]" : "text-blue-400"
              } drop-shadow-lg text-center px-3 sm:px-4 bg-clip-text${
                !isWeb3 ? " text-transparent bg-gradient-to-r from-blue-400 to-blue-600" : ""
              }`}
              style={
                isWeb3
                  ? { textShadow: "0 2px 16px rgba(255, 91, 58, 0.29)" }
                  : {}
              }
            >
              Our Roadmap
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-center max-w-3xl mt-6 text-lg ${
                isWeb3 ? "text-[#18181b]/80" : "text-white/80"
              }`}
            >
              Our vision for the future is clear. Here's what we're building next to revolutionize AI development on Solana.
            </motion.p>
          </div>

          {/* Simplified timeline */}
          <div className="mt-24 relative">
            {/* Simple timeline line instead of animated progress */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden"
              style={{
                background: isWeb3
                  ? "linear-gradient(180deg, transparent 5%, #FF5C3A, transparent 95%)"
                  : "linear-gradient(180deg, transparent 5%, #2563eb, transparent 95%)",
                opacity: 0.3
              }}
            />

            {/* Timeline items */}
            <div className="relative space-y-32 md:space-y-48">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline center point - simplified */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-20 h-20 rounded-full z-10 flex items-center justify-center overflow-hidden backdrop-blur-sm"
                      style={{
                        background: isWeb3
                          ? `linear-gradient(135deg, #FF5C3ACC, #FF5C3A99)`
                          : `linear-gradient(135deg, #2563ebCC, #4F85F688)`,
                        boxShadow: isWeb3
                          ? `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)`
                          : `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)`,
                        border: isWeb3 ? `1px solid ${item.color}` : "1px solid #3b82f6"
                      }}
                    >
                      {/* Phase number - simplified */}
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-sm uppercase tracking-wide font-medium text-white/70 mb-0.5">Phase</span>
                        <span className="text-xl font-semibold text-white"
                          style={{ letterSpacing: "0.02em" }}
                        >
                          {item.phase.split(' ')[1]}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content card - simplified */}
                  <SimpleCard 
                    isWeb3={isWeb3}
                    className={`w-full md:w-5/12 flex flex-col mb-16 md:mb-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-20" : "md:ml-auto md:pl-20 md:items-end"
                    }`}
                  >
                    <motion.div
                      variants={cardVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{ y: -3 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-full max-w-lg p-7 rounded-2xl backdrop-blur-md ${
                        isWeb3 
                          ? `border border-[#FF5C3A]/30 bg-gradient-to-br from-white/15 to-white/5` 
                          : "bg-gradient-to-br from-white/10 to-white/5 border-blue-500/20 border"
                      } transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      } overflow-hidden relative hover:shadow-lg`}
                      style={{
                        boxShadow: isWeb3
                          ? `0 10px 30px -5px rgba(255, 92, 58, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)`
                          : "0 10px 30px -5px rgba(37, 99, 235, 0.15)",
                        ...(isWeb3 && {
                          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)`,
                        })
                      }}
                    >
                      {/* Icon - simplified */}
                      <div 
                        className={`p-5 mx-4 rounded-xl inline-flex mb-8 relative z-10 ${
                          isWeb3 
                            ? `bg-gradient-to-br from-[#FF5C3A]/25 to-[#FF5C3A]/10 text-[#FF5C3A] drop-shadow-lg` 
                            : "bg-gradient-to-br from-blue-500/15 to-blue-500/5 text-blue-400"
                        }`}
                        style={isWeb3 ? {
                          border: `1.5px solid rgba(255, 92, 58, 0.4)`,
                          boxShadow: `0 10px 20px -2px rgba(255, 92, 58, 0.3), inset 0 1px 2px rgba(255,255,255,0.15)`,
                          backdropFilter: "blur(8px)"
                        } : {}}
                      >
                        {item.icon(isWeb3)}
                      </div>
                      
                      {/* Title - without animation */}
                      <div className="relative mb-3 inline-block z-10">
                        <h3 className={`text-2xl font-bold ${
                          isWeb3 ? "text-[#18181b]" : "text-white"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className={`${
                        isWeb3 ? "text-[#18181b]/70" : "text-white/70"
                      } leading-relaxed relative z-10`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </SimpleCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action - already simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-20 sm:mt-24 md:mt-32"
        >
          <motion.button
            onClick={() => window.open("https://ai.ez1.dev/", "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center text-white text-base xs:text-lg sm:text-xl font-semibold rounded-full px-8 xs:px-10 sm:px-12 py-4 xs:py-5 sm:py-6 shadow-lg transition-all duration-300"
            style={{
              background: isWeb3 
                ? "linear-gradient(135deg, #FF5C3A, #FF7A4D)"
                : "linear-gradient(135deg, #2563eb, #3b82f6)",
              boxShadow: isWeb3
                ? "0 10px 30px -5px rgba(255, 92, 58, 0.4)"
                : "0 10px 30px -5px rgba(37, 99, 235, 0.4)",
              cursor: "pointer",
              border: "none",
            }}
          >
            Join us on this Journey
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RoadmapSection;