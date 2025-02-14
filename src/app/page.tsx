import { BackgroundPaths } from "@/components/BackgroundPaths"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Background Section */}
        <section>
          <BackgroundPaths title="Dream It, Build It!" />
        </section>
        {/* Info Card Section */}
        <section className="max-w-xl mx-auto my-12 px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              $EZ Token Implementation Strategy
            </h2>
            <p className="text-gray-600">
              To foster a robust and sustainable ecosystem, a small fee will be charged to allow users to deploy directly on ez1.dev—with hosting and a domain name included. A portion of these fees will be burned to reduce supply, while the remainder will be redistributed to all holders, promoting long-term value.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
