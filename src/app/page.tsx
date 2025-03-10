"use client";
import AIWebsiteSection from "@/components/AIWebsiteSection";
import AutoDeploySection from "@/components/AutoDeploySection";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import ClientFeedbackSection from "@/components/ClientFeedbackSection";
import EndorsementSection from "@/components/EndorsementSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromptEnhancerSection from "@/components/PromptEnhancerSection";
import Web3ToggleSection from "@/components/Web3ToggleSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    // Hide scroll indicator after 10 seconds
    const timeout = setTimeout(() => {
      setShowScroll(false);
    }, 10000);

    // Hide scroll indicator on scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener and timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative">
          <BackgroundPaths title="Dream It, Build It!" />

          {/* Mouse Scroll indicator */}
          {showScroll && (
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
              style={{
                opacity: showScroll ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            >
              <div className="w-8 h-14 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
                <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-scroll-mouse" />
              </div>
            </div>
          )}
        </section>

        {/* Endorsement Section */}
        {/* <EndorsementSection /> */}

        {/* AI Website Generation Section */}
        <AIWebsiteSection />

        {/* Prompt Enhancer Section */}
        <PromptEnhancerSection />

        {/* Auto Deploy Section */}
        <AutoDeploySection />

        {/* Web3 Toggle Section */}
        <Web3ToggleSection />

        {/* Client Feedback Section */}
        {/* <ClientFeedbackSection /> */}
      </main>
      <Footer />
    </div>
  );
}
