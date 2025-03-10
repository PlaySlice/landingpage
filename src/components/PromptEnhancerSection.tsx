"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2 } from "lucide-react";

const PromptEnhancerSection = () => {
  const [samplePrompt, setSamplePrompt] = useState(
    "Create a landing page for a tech startup"
  );
  const [enhancedPrompt, setEnhancedPrompt] = useState(
    "Create a responsive landing page for a cutting-edge tech startup with a modern, clean design using a color palette of navy blue, white, and subtle teal accents. Include a hero section with a compelling headline, animated features section, testimonial carousel, pricing comparison table, and contact form with validation. Optimize for mobile devices and ensure accessibility compliance."
  );

  const examples = [
    {
      basic: "Create a landing page for a tech startup",
      enhanced:
        "Create a responsive landing page for a cutting-edge tech startup with a modern, clean design using a color palette of navy blue, white, and subtle teal accents. Include a hero section with a compelling headline, animated features section, testimonial carousel, pricing comparison table, and contact form with validation. Optimize for mobile devices and ensure accessibility compliance.",
    },
    {
      basic:
        "Design a user-friendly mobile app for managing daily tasks and reminders",
      enhanced:
        "Design a user-friendly mobile app for managing daily tasks and reminders with an intuitive interface using a minimalist aesthetic. Implement features like drag-and-drop task prioritization, customizable categories with color coding, smart reminders based on location and time patterns, progress visualization with weekly/monthly reports, and seamless cloud sync across devices. Ensure dark mode support, haptic feedback for interactions, and accessibility features for diverse users.",
    },
    {
      basic: "Build an e-commerce website for a fashion brand",
      enhanced:
        "Build a high-performance e-commerce website for a luxury fashion brand featuring a sophisticated design with a monochromatic color scheme. Implement advanced filtering and search capabilities, size guide with measurements, 360-degree product views, virtual try-on using AR, personalized recommendations based on browsing history, seamless checkout with multiple payment options, and inventory tracking system. Ensure mobile responsiveness, fast loading times, and secure payment processing.",
    },
    {
      basic: "Create a social media dashboard",
      enhanced:
        "Create a comprehensive social media analytics dashboard with real-time data visualization, featuring customizable widgets for key metrics across multiple platforms. Include sentiment analysis of mentions, engagement rate tracking, competitor comparison tools, automated report generation, and predictive analytics for optimal posting times. Implement responsive design with dark/light modes, data export capabilities, and role-based access control.",
    },
  ];

  const handleEnhanceDemo = () => {
    // Find current example index
    const currentIndex = examples.findIndex((ex) => ex.basic === samplePrompt);
    // Get next example (loop back to start if at end)
    const nextIndex = (currentIndex + 1) % examples.length;

    setSamplePrompt(examples[nextIndex].basic);
    setEnhancedPrompt(examples[nextIndex].enhanced);
  };

  return (
    <section
      id="prompt-enhancer"
      className="py-24 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white"
          >
            <span className="inline-flex items-center">
              <Sparkles className="w-8 h-8 mr-2 text-blue-500" />
              Model Prompt Enhancer
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Transform simple ideas into detailed, powerful prompts that get the
            most out of any AI model.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs italic text-neutral-500 dark:text-neutral-500 mt-2"
          >
            Note: These are example prompts for demonstration purposes only and
            are not currently being processed by AI.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                  Basic Prompt
                </h3>
                <div className="bg-neutral-100 dark:bg-neutral-700 rounded-xl p-4 border border-neutral-200 dark:border-neutral-600">
                  <p className="text-neutral-800 dark:text-neutral-200">
                    {samplePrompt}
                  </p>
                </div>
              </div>

              <div className="mb-8 relative">
                <div className="absolute left-1/2 -ml-4 -mt-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Wand2 className="text-white w-4 h-4" />
                </div>
                <div className="border-r-2 border-dashed border-blue-500 h-8 absolute left-1/2 -ml-[1px] -mt-4"></div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                  Enhanced Prompt
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-neutral-800 dark:text-neutral-200">
                    {enhancedPrompt}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleEnhanceDemo}
                  className="rounded-xl px-6 py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md flex items-center"
                >
                  <Wand2 className="mr-2 w-4 h-4" />
                  Try another example
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                Boost Productivity
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Save time crafting detailed prompts and get better results from
                AI models.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                Enhance Clarity
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Create prompts with precise instructions that reduce ambiguity
                and confusion.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                Control Output
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Get exactly what you want by fine-tuning parameters and style
                preferences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromptEnhancerSection;
