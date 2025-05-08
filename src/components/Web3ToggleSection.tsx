"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Globe, Layers } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import AnimatedStarsBackground from "@/components/AnimatedStarsBackground";

const Web3ToggleSection = ({ isWeb3: isWeb3Prop = undefined }: { isWeb3?: boolean | undefined }) => {
  const [isWeb3State, setIsWeb3State] = useState(false);
  const isWeb3 = isWeb3Prop !== undefined ? isWeb3Prop : isWeb3State;
  const [activeTab, setActiveTab] = useState<"create" | "interact" | "deploy">(
    "create"
  );

  const tabContent = {
    create: {
      title: isWeb3 ? "Create Solana Programs" : "Create Web Apps",
      description: isWeb3
        ? "Build smart contracts on Solana without needing to learn Rust. Our AI understands your requirements and generates optimized, secure code."
        : "Build modern web applications with our AI-powered code generation. No complex frameworks to learn.",
      features: isWeb3
        ? [
            "AI-powered Rust code generation",
            "Solana programming model abstraction",
            "Built-in best practices",
            "Automatic test generation",
          ]
        : [
            "Custom framework code generation",
            "Modern component architecture",
            "Built-in best practices",
            "Automatic testing",
          ],
    },
    interact: {
      title: isWeb3 ? "Web Interface Generation" : "API Integration",
      description: isWeb3
        ? "Create beautiful, responsive web apps that interact with your Solana programs. Our AI generates frontend code with Solana wallet integration."
        : "Build APIs and integrate third-party services seamlessly. Our AI handles the complex integration logic.",
      features: isWeb3
        ? [
            "Phantom & Solflare wallet integration",
            "Transaction builders for your program",
            "User-friendly UI components",
            "Responsive design for all devices",
          ]
        : [
            "RESTful API generation",
            "Third-party service integration",
            "Authentication flows",
            "API documentation",
          ],
    },
    deploy: {
      title: isWeb3 ? "End-to-End Deployment" : "Cloud Deployment",
      description: isWeb3
        ? "Deploy your Solana programs to testnet or mainnet and launch your web app with just a few clicks."
        : "Deploy your application to major cloud providers with automated CI/CD pipelines.",
      features: isWeb3
        ? [
            "One-click Solana program deployment",
            "Automatic program verification",
            "Web app hosted on Netlify",
            "Domain name setup and configuration",
          ]
        : [
            "AWS/GCP/Azure deployment",
            "Automated CI/CD pipelines",
            "SSL certificate setup",
            "Domain configuration",
          ],
    },
  };

  return (
    <section id="web3" className={`py-24 ${isWeb3 ? 'bg-gradient-to-b from-[#FF5C3A]/10 via-[#FFB07C]/10 to-[#FF6A4D]/10' : 'bg-white dark:bg-neutral-950'}`}>
      <AnimatedStarsBackground />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isWeb3 ? 'bg-white/20 text-white border border-white/40' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400'}`}
          >
            <div className="flex items-center space-x-2">
              <span>Web3 Mode</span>
              {isWeb3Prop === undefined && (
                <Switch
                  checked={isWeb3}
                  onCheckedChange={setIsWeb3State}
                  className={
                    isWeb3
                      ? "data-[state=checked]:bg-purple-600 dark:data-[state=checked]:bg-purple-500"
                      : ""
                  }
                  aria-label="Toggle Web3 mode"
                />
              )}
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isWeb3 ? 'text-white drop-shadow-lg' : 'text-neutral-900 dark:text-white'}`}
            style={isWeb3 ? {textShadow: '0 2px 16px #FF5C3A88'} : {}}
          >
            {isWeb3 ? "Web3 Toggle Mode" : "Web Development Mode"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-lg max-w-2xl mx-auto ${isWeb3 ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'}`}
          >
            {isWeb3
              ? "Seamlessly create Solana programs and web interfaces with a simple toggle. No Rust or Web3 experience required."
              : "Build modern web applications with our AI-powered platform. No complex frameworks or tools required."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
                {isWeb3
                  ? "Everything you need for Web3"
                  : "Web Development Tools"}
              </h3>

              <div className="space-y-4 mb-8">
                <button
                  onClick={() => setActiveTab("create")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeTab === "create"
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <Code
                    className={`mr-3 h-5 w-5 ${
                      activeTab === "create"
                        ? "text-indigo-500"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  />
                  <span className="font-medium">
                    {isWeb3 ? "Create Solana Programs" : "Create Web Apps"}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("interact")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeTab === "interact"
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <Globe
                    className={`mr-3 h-5 w-5 ${
                      activeTab === "interact"
                        ? "text-indigo-500"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  />
                  <span className="font-medium">
                    {isWeb3 ? "Build Web Interfaces" : "API Integration"}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("deploy")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeTab === "deploy"
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <Layers
                    className={`mr-3 h-5 w-5 ${
                      activeTab === "deploy"
                        ? "text-indigo-500"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  />
                  <span className="font-medium">
                    {isWeb3 ? "Deploy End-to-End" : "Cloud Deployment"}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="border-b border-neutral-200 dark:border-neutral-800 p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {tabContent[activeTab].title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {tabContent[activeTab].description}
                </p>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Web3ToggleSection;
