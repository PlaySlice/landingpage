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
      <div className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          $EZ Token Implementation Strategy
        </h2>
        <p className="text-gray-600">
          The $EZ token is an integral part of our ecosystem. To maintain platform integrity and ensure sustainable development, a nominal fee will be applied during the deployment process on the EZ1 platform.
        </p>
      </div>
      <Footer />
    </div>
  )
}
