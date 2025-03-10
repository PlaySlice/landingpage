import AIWebsiteSection from "@/components/AIWebsiteSection";
import AutoDeploySection from "@/components/AutoDeploySection";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import ClientFeedbackSection from "@/components/ClientFeedbackSection";
import EndorsementSection from "@/components/EndorsementSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromptEnhancerSection from "@/components/PromptEnhancerSection";
import Web3ToggleSection from "@/components/Web3ToggleSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <BackgroundPaths title="Dream It, Build It!" />
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
