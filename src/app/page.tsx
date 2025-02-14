import { BackgroundPaths } from "@/components/BackgroundPaths"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <BackgroundPaths title="Dream It, Build It!" />
        <div className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg p-6 text-center">
          <BackgroundPaths h2 className="text-2xl font-semibold mb-3 text-gray-800">
            $EZ Token Implementation Strategy
          </h2>
          <p className="text-gray-600">
            To foster a robust and sustainable ecosystem, a small fee will be charged to allow users to deploy directly on our platform, complete with hosting and a domain name. A portion of these fees will be burned to reduce supply, while the remainder will be redistributed to all holders.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
