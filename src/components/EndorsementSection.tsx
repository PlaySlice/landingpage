"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, ExternalLink } from "lucide-react";

const EndorsementSection = () => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-md">
                  <Image
                    src="/tolly-avatar.png"
                    alt="@tolly"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    @tolly
                  </h3>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                      <Twitter className="w-3 h-3 mr-1" />
                      Solana Co-founder
                    </span>
                  </div>
                </div>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                  We're proud to share that{" "}
                  <span className="font-semibold">@tolly</span>, co-founder of
                  Solana, has followed Ez1 and our journey in building the next
                  generation of AI-powered web development tools.
                </p>

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 mb-6 border border-neutral-200 dark:border-neutral-700 relative">
                  <div className="absolute -top-2 -left-2 text-neutral-400 dark:text-neutral-500 transform rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21.5 12a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-1a3 3 0 0 1 3-3h.5a.5.5 0 0 1 .5.5v4zm-10 0a.5.5 0 0 1-.5.5H7.5a.5.5 0 0 1-.5-.5v-1a3 3 0 0 1 3-3h.5a.5.5 0 0 1 .5.5v4z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 italic">
                    Ez1 is building innovative tools that bring AI and Web3
                    together. Their approach to simplifying complex technology
                    through intelligent interfaces is exactly what we need to
                    drive mainstream adoption.
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-neutral-400 dark:text-neutral-500">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21.5 12a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-1a3 3 0 0 1 3-3h.5a.5.5 0 0 1 .5.5v4zm-10 0a.5.5 0 0 1-.5.5H7.5a.5.5 0 0 1-.5-.5v-1a3 3 0 0 1 3-3h.5a.5.5 0 0 1 .5.5v4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EndorsementSection;
