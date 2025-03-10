"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Netlify Account",
    description:
      "Link your Netlify account with our platform with a single click.",
  },
  {
    number: "02",
    title: "Generate Your Website",
    description:
      "Use our AI tools to create your website, landing page, or web application.",
  },
  {
    number: "03",
    title: "One-Click Deployment",
    description:
      "Deploy your site instantly to Netlify with our automatic integration.",
  },
  {
    number: "04",
    title: "Continuous Updates",
    description: "Any changes you make automatically trigger new deployments.",
  },
];

const AutoDeploySection = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              <Rocket className="w-4 h-4 mr-2" />
              Automatic Deployment
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-neutral-900 dark:text-white leading-tight">
              Seamless Deployment
              <br />
              to Netlify in Seconds
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Focus on creating amazing web experiences, not on deployment
              processes. With our automatic Netlify integration, your sites go
              live instantly.
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: parseInt(step.number) * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-neutral-700 dark:text-neutral-300">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-900/50 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 dark:from-blue-900/30 dark:to-indigo-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Netlify deployment animation/image placeholder */}
                <div className="w-3/4 aspect-video bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
                  {/* This would be an image or animation showing Netlify deployment */}
                  <div className="h-6 bg-neutral-100 dark:bg-neutral-700 flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">●</span>
                      <span>Netlify Build started...</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-neutral-400 mr-2">$</span>
                      <span>Installing dependencies...</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-neutral-400 mr-2">$</span>
                      <span>Building site...</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-neutral-400 mr-2">$</span>
                      <span>Optimizing assets...</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Site is live at <br />
                        <span className="italic underline cursor-pointer">
                          https://ez1.your-site.netlify.app
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 dark:opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 dark:opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutoDeploySection;
