"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layout, Zap } from "lucide-react";

const AIWebsiteSection = () => {
  const [activeTab, setActiveTab] = useState("design");

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

  return (
    <section
      id="ai-website"
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
            AI-Powered Website Generation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            From concept to live site in minutes, not days. Let our AI build
            your next website with stunning design and clean code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-900/50"
          >
            <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
              <Image
                src="/ai-website-demo.png"
                alt="AI Website Generator Demo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? "block" : "hidden"}`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">
                    {tab.label} your website with AI
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {tab.description}. Our AI models are trained on the latest
                    web design trends and best practices to deliver stunning
                    results.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
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
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {tab.id === "design" &&
                          "Responsive designs that look great on all devices"}
                        {tab.id === "code" &&
                          "Clean, semantic HTML with modern CSS and JavaScript"}
                        {tab.id === "deploy" &&
                          "Automatic optimization for speed and performance"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
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
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {tab.id === "design" &&
                          "Custom color schemes that match your brand identity"}
                        {tab.id === "code" &&
                          "Optimized for SEO and accessibility out of the box"}
                        {tab.id === "deploy" &&
                          "CI/CD integration for smooth updates and changes"}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}

              <Button
                onClick={() => (window.location.href = "https://ai.ez1.dev")}
                className="rounded-xl px-6 py-3 text-base font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                Try it now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIWebsiteSection;
