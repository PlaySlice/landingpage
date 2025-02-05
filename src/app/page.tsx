import { BackgroundPaths } from "@/components/BackgroundPaths"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-start justify-center">
        <BackgroundPaths title="Your local AI agents, online!" />
      </main>
      <Footer />
    </div>
  )
}

