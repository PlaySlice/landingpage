import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import AnimatedStarsBackground from "./AnimatedStarsBackground";

// Icons with animated variants using SVG paths
const AnimatedIcon = ({ paths, isWeb3 }) => {
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
      {paths.map((d, i) => (
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

// Enhanced animated icons
const RevenueIcon = ({ isWeb3 }) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      "M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"
    ]}
  />
);

const OptimizationIcon = ({ isWeb3 }) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M18.5 7.5L12 1L5.5 7.5",
      "M12 1L12 23",
      "M5.5 16.5L12 23L18.5 16.5"
    ]}
  />
);

const TokenIcon = ({ isWeb3 }) => (
  <AnimatedIcon
    isWeb3={isWeb3}
    paths={[
      "M17.4 14.3l-2.1-2.1-1.4 1.4 2.1 2.1c.3 0 .5.1.7.3.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7h-2c0 1.1.4 2.2 1.2 3 .7.7 1.8 1.2 3 1.2s2.2-.4 3-1.2c.8-.8 1.2-1.8 1.2-3 0-1.2-.5-2.3-1.3-3-.2-.2-.5-.3-.7-.4zM6 10c0-1.1.4-2.2 1.2-3 .7-.7 1.8-1.2 3-1.2s2.2.4 3 1.2c.8.8 1.2 1.8 1.2 3h2c0-.3.1-.6.3-.7.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7h-2c0 1.1-.4 2.2-1.2 3-.3.3-.6.5-.9.7l1.4 1.4 2.1-2.1.7.7-2.8 2.8-3.6-3.6c-.7-.5-1.2-1.3-1.2-2.2zm9.2 2.3l.5.5.5-.5zm-5.4-5.4l.5.5.5-.5-.5-.5z",
      "M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"
    ]}
  />
);

const BlockchainIcon = ({ isWeb3 }) => (
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

const PromptIcon = ({ isWeb3 }) => (
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
    icon: (isWeb3) => <RevenueIcon isWeb3={isWeb3} />,
    phase: "Phase 1",
    color: "#FF5C3A"
  },
  {
    title: "Optimization & Templates",
    description: "Enhanced AI optimization models and premium templates designed for instant deployment and frictionless building experience.",
    icon: (isWeb3) => <OptimizationIcon isWeb3={isWeb3} />,
    phase: "Phase 2",
    color: "#FF7A4D"
  },
  {
    title: "Token Launch Integration",
    description: "Seamless token launch capabilities with integrated liquidity management and distribution systems directly on the platform.",
    icon: (isWeb3) => <TokenIcon isWeb3={isWeb3} />,
    phase: "Phase 3",
    color: "#FF9674"
  },
  {
    title: "Multi-Blockchain Support",
    description: "Extending our deployment capabilities to support multiple blockchain ecosystems with cross-chain interoperability.",
    icon: (isWeb3) => <BlockchainIcon isWeb3={isWeb3} />,
    phase: "Phase 4",
    color: "#FFB092"
  },
  {
    title: "End Product Generation",
    description: "Advanced AI prompt system that directly generates fully-optimized, production-ready end products with minimal input required.",
    icon: (isWeb3) => <PromptIcon isWeb3={isWeb3} />,
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

// Enhanced particle system with more varied particles
const EnhancedParticles = ({ isWeb3 }: { isWeb3: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const particleCount = 25;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1
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
              ? `bg-gradient-to-br from-[${particle.id % 2 === 0 ? "#FF5C3A" : "#FFB07C"}] to-[${particle.id % 3 === 0 ? "#FF6A4D" : "#FFCAB0"}]` 
              : `bg-gradient-to-br from-[${particle.id % 2 === 0 ? "#2563eb" : "#60a5fa"}] to-[${particle.id % 3 === 0 ? "#3b82f6" : "#93c5fd"}]`
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            filter: `blur(${particle.size > 3 ? 1 : 0}px)`
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, particle.id % 3 === 0 ? 1.2 : 0.8, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Holographic card effect component
interface HolographicCardProps {
  children: React.ReactNode;
  isWeb3: boolean;
  className?: string;
}

const HolographicCard = ({ children, isWeb3, className = "" }: HolographicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = -((e.clientY - centerY) / (rect.height / 2));
    
    setRotateX(percentY * 5); // Reduced rotation from 10 to 5 degrees
    setRotateY(percentX * 5);
  };

  useEffect(() => {
    if (!mouseOver) {
      setRotateX(0);
      setRotateY(0);
    }
  }, [mouseOver]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="w-full h-full relative"
      >
        {/* Subtle holographic effect - reduced opacity */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${mouseOver ? 'opacity-30' : ''}`}
            style={{
              background: isWeb3
                ? "linear-gradient(135deg, rgba(255, 92, 58, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 176, 124, 0.05) 100%)"
                : "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(59, 130, 246, 0.05) 100%)",
              backgroundSize: "200% 200%",
              backgroundPosition: `${50 + rotateY * 5}% ${50 - rotateX * 5}%`,
              borderRadius: "inherit",
            }}
          />
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
};

// Main component
const RoadmapSection = ({ isWeb3 = false }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  // Springy motion values for more natural animations
  const springConfig = { stiffness: 100, damping: 15, mass: 0.5 };
  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.2], [100, 0]), springConfig);
  const timelineProgress = useSpring(useTransform(scrollYProgress, [0.1, 0.5], [0, 1]), springConfig);
  
  // Premium animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };
  
  const barVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 2,
        delay: 0.3
      }
    }
  };
  
  // 3D rotation for phase dots
  const dotVariants = {
    hidden: { 
      scale: 0, 
      opacity: 0, 
      rotateY: 180,
      rotateX: 45
    },
    visible: (i) => ({ 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 15,
        mass: 1,
        delay: 0.3 + i * 0.15
      }
    }),
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Card animations with more refined and natural motion
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      x: -10, 
      rotateY: -2, 
      scale: 0.95,
      filter: "blur(5px)"
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 45,  // Lower stiffness for more natural motion
        damping: 15,    // Adjusted damping for better oscillation
        mass: 0.8,      // Lower mass for more responsive movement
        delay: 0.2 + i * 0.15,  // Shorter delays between cards
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }),
    hover: {
      y: -3, 
      scale: 1.015, 
      boxShadow: "0 15px 30px rgba(0,0,0,0.07)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.6  // More responsive hover state
      }
    }
  };
  
  // Parallax effect for background elements
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Fancy 3D perspective effect
  const perspective = useTransform(scrollYProgress, [0, 1], [1200, 800]);
  
  return (
    <section 
      ref={sectionRef}
      className={`py-32 relative overflow-hidden`}
    >
      <AnimatedStarsBackground />
      <EnhancedParticles isWeb3={isWeb3} />

      {/* Decorative 3D elements with parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ 
            y: parallaxY1, 
            opacity: parallaxOpacity,
            rotateZ: useTransform(scrollYProgress, [0, 1], [0, 10]),
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 92, 58, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
          }}
          className="absolute -right-[15%] top-[25%] w-[60%] h-[50%] rounded-full blur-[80px]"
        />
 
        <motion.div
          style={{ 
            y: parallaxY2, 
            opacity: parallaxOpacity,
            rotateZ: useTransform(scrollYProgress, [0, 1], [0, -15]),
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 122, 77, 0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
          }}
          className="absolute -left-[15%] top-[60%] w-[50%] h-[40%] rounded-full blur-[100px]"
        />
        
        {/* Top center subtle glow */}
        <motion.div
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 202, 176, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)'
          }}
          className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[40%] h-[30%] rounded-full blur-[120px]"
        />
      </div>

      {/* Enhanced large decorative lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right side large glow */}
        <motion.div
          style={{ 
            y: parallaxY1, 
            opacity: parallaxOpacity,
            rotateZ: useTransform(scrollYProgress, [0, 1], [0, 10]),
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 92, 58, 0.25) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
          }}
          className="absolute -right-[20%] top-[30%] w-[70%] h-[60%] rounded-full blur-[120px]"
        />
        
        {/* Left side large glow */}
        <motion.div
          style={{ 
            y: parallaxY2, 
            opacity: parallaxOpacity,
            rotateZ: useTransform(scrollYProgress, [0, 1], [0, -15]),
            background: isWeb3
              ? 'radial-gradient(circle, rgba(255, 122, 77, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'
          }}
          className="absolute -left-[20%] top-[55%] w-[60%] h-[40%] rounded-full blur-[100px]"
        />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ opacity, scale }} 
        className="container mx-auto px-4 relative z-10"
      >
        {/* Header section with premium animations */}
        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          style={{ y: headerY }}
        >
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
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className={`text-center max-w-3xl mt-6 text-lg ${
                isWeb3 ? "text-[#18181b]/80" : "text-white/80"
              }`}
            >
              Our vision for the future is clear. Here's what we're building next to revolutionize AI development on Solana.
            </motion.p>
          </div>

          {/* Premium timeline with 3D and interactive elements */}
          <div className="mt-24 relative">
            {/* Animated timeline progress */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden"
              style={{
                background: isWeb3
                  ? "linear-gradient(180deg, transparent 5%, #FF5C3A, transparent 95%)"
                  : "linear-gradient(180deg, transparent 5%, #2563eb, transparent 95%)",
                opacity: 0.3,
                scaleY: timelineProgress,
                transformOrigin: "top"
              }}
            >
              <motion.div
                className="absolute inset-0 w-full"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  height: "100%",
                  background: isWeb3
                    ? "linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.8), transparent)"
                    : "linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
                }}
              />
            </motion.div>

            {/* Timeline items */}
            <div className="relative space-y-32 md:space-y-48">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline center point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                    {/* 3D rotating phase dot */}
                    <motion.div
                      variants={dotVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-20 h-20 rounded-full z-10 flex items-center justify-center overflow-hidden backdrop-blur-sm`}
                      style={{
                        background: isWeb3
                          ? `linear-gradient(135deg, #FF5C3ACC, #FF5C3A99)`
                          : `linear-gradient(135deg, #2563ebCC, #4F85F688)`,
                        boxShadow: isWeb3
                          ? `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)`
                          : `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)`,
                        border: isWeb3 ? `1px solid ${item.color}` : "1px solid #3b82f6",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {/* Subtle glass effect */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                          borderRadius: "inherit"
                        }}
                      />
                      
                      {/* Phase number - cleaned up typography */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <span className="text-sm uppercase tracking-wide font-medium text-white/70 mb-0.5">Phase</span>
                        <span className="text-xl font-semibold text-white"
                          style={{ 
                            letterSpacing: "0.02em",
                          }}
                        >
                          {item.phase.split(' ')[1]}
                        </span>
                      </div>
                      
                      {/* Subtle ring pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2],
                          opacity: [0.4, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: isWeb3 ? `1px solid rgba(255, 92, 58, 0.13)` : "1px solid rgba(59, 130, 246, 0.1)",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <HolographicCard 
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
                      whileHover="hover"
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-full max-w-lg p-7 rounded-2xl backdrop-blur-md ${
                        isWeb3 
                          ? `border border-[#FF5C3A]/30 bg-gradient-to-br from-white/15 to-white/5` 
                          : "bg-gradient-to-br from-white/10 to-white/5 border-blue-500/20 border"
                      } transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      } overflow-hidden relative group`}
                      style={{
                        boxShadow: isWeb3
                          ? `0 20px 40px -5px rgba(255, 92, 58, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)`
                          : "0 20px 40px -5px rgba(37, 99, 235, 0.15)",
                        ...(isWeb3 && {
                          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)`,
                        })
                      }}
                    >
                      {/* Subtle highlight on hover - reduced opacity */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                        style={{
                          background: isWeb3
                            ? `radial-gradient(circle at 50% 0%, rgba(255, 92, 58, 0.2) 0%, transparent 70%)`
                            : "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.2) 0%, transparent 70%)"
                        }}
                      />
                      
                      {/* Icon - unified styling */}
                      <motion.div 
                        className={`p-5 mx-4 rounded-xl inline-flex mb-8 relative z-10 ${
                          isWeb3 
                            ? `bg-gradient-to-br from-[#FF5C3A]/25 to-[#FF5C3A]/10 text-[#FF5C3A] drop-shadow-lg` 
                            : "bg-gradient-to-br from-blue-500/15 to-blue-500/5 text-blue-400"
                        }`}
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.05,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        style={isWeb3 ? {
                          border: `1.5px solid rgba(255, 92, 58, 0.4)`,
                          boxShadow: `0 10px 20px -2px rgba(255, 92, 58, 0.3), inset 0 1px 2px rgba(255,255,255,0.15)`,
                          backdropFilter: "blur(8px)"
                        } : {}}
                      >
                        {item.icon(isWeb3)}
                      </motion.div>

                      {/* Web3 only - add decorative elements to cards */}
                      {isWeb3 && (
                        <>
                          <div 
                            className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 opacity-15"
                            style={{
                              background: `radial-gradient(circle, #FF5C3A 0%, transparent 70%)`,
                              borderRadius: "100%",
                              filter: "blur(2px)"
                            }}
                          />
                          <div 
                            className="absolute bottom-0 left-0 w-20 h-20 -mb-8 -ml-8 opacity-15"
                            style={{
                              background: `radial-gradient(circle, #FF5C3A 0%, transparent 70%)`,
                              borderRadius: "100%",
                              filter: "blur(1px)"
                            }}
                          />
                          <motion.div
                            className="absolute right-5 bottom-5 w-16 h-1.5 rounded-full opacity-25"
                            style={{
                              background: `linear-gradient(90deg, transparent, #FF5C3A, transparent)`,
                              boxShadow: `0 0 8px 0 rgba(255, 92, 58, 0.4)`
                            }}
                            animate={{ 
                              width: ["30%", "60%", "30%"],
                              opacity: [0.25, 0.5, 0.25]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <div 
                            className="absolute left-4 top-4 w-2 h-2 rounded-full opacity-30"
                            style={{
                              background: "#FF5C3A",
                              boxShadow: `0 0 8px 0 rgba(255, 92, 58, 0.6)`
                            }}
                          />
                        </>
                      )}
                      
                      {/* Title with animated underline - improved visibility */}
                      <div className="relative mb-3 inline-block z-10">
                        <h3 className={`text-2xl font-bold ${
                          isWeb3 ? "text-[#18181b]" : "text-white"
                        }`}>
                          {item.title}
                        </h3>
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileHover={{ width: "100%" }}
                          className="h-[2px] rounded-full transition-all duration-300 absolute bottom-0 left-0"
                          style={{
                            background: isWeb3 ? "#FF5C3A" : "#3b82f6"
                          }}
                        />
                      </div>
                      
                      {/* Description - improved z-index */}
                      <p className={`${
                        isWeb3 ? "text-[#18181b]/70" : "text-white/70"
                      } leading-relaxed relative z-10`}>
                        {item.description}
                      </p>
                      
                      {/* Simplified corner decoration */}
                      <motion.div
                        className="absolute -z-1 w-32 h-32 opacity-20"
                        style={{
                          top: index % 3 === 0 ? -16 : "auto", 
                          bottom: index % 3 !== 0 ? -16 : "auto",
                          right: index % 2 === 0 ? -16 : "auto",
                          left: index % 2 !== 0 ? -16 : "auto",
                          borderRadius: "100%",
                          background: isWeb3
                            ? `radial-gradient(circle at 50% 0%, rgba(255, 92, 58, 0.2) 0%, transparent 70%)`
                            : "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.3, 0.2],
                          rotate: [0, 45, 0]
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </HolographicCard>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action with simplified design for both modes */}
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