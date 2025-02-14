import { BackgroundPaths } from "@/components/BackgroundPaths"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <BackgroundPaths title="Dream It, Build It!" />
      </main>
      <Footer />
    </div>
  )
}
