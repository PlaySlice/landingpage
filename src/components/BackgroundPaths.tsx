"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="absolute top-1/4 z-10 container mx-auto px-4 md:px-6 text-center pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto -mt-16"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter leading-[1.2] pb-2 overflow-visible"
            style={{ lineHeight: "1.2" }}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="inline-block">
            <div className="flex flex-col mt-[5px] space-y-4">
              <Button
                variant="ghost"
                className="rounded-xl px-6 py-3 text-base font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                onClick={() => window.open("https://ai.ez1.dev/", "_blank")}
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Build your idea
                </span>
                <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Button>
              <Button
                variant="ghost"
                className="rounded-xl px-6 py-3 text-base font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                onClick={() =>
                  (window.location.href = "https://ez1.gitbook.io/ez1-docs")
                }
              >
                <Book className="w-5 h-5 mr-2" />
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Visit documentation
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
