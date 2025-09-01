export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">HelaTip</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          A decentralized tipping platform to support creators and communities
          transparently on the blockchain.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/dashboard"
            className="rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Go to Dashboard
          </a>
          <a
            href="/about"
            className="rounded-2xl border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why HelaTip?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Decentralized</h3>
            <p className="text-gray-600">
              Built on blockchain, ensuring transparent and trustless tipping
              for creators worldwide.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Community First</h3>
            <p className="text-gray-600">
              Empower communities to support each other directly without middlemen.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p className="text-gray-600">
              Seamless experience with wallet connect integration and simple dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 py-6 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} HelaTip. Built with 💜 on Farcaster Frames.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:text-indigo-600">About</a>
          <a href="/dashboard" className="hover:text-indigo-600">Dashboard</a>
        </div>
      </footer>
    </main>
  );
}
