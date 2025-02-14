import { BackgroundPaths } from "@/components/BackgroundPaths"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-start justify-center">
        <BackgroundPaths title="Dream It, Build It!" />
      </main>
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold">How will $EZ token be implemented?</h2>
        <p>User will have to pay a fee to deploy directly on ez1</p>
      </div>
      <Footer />
    </div>
  )
}
