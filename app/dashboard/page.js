export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="mt-4 sm:mt-0 rounded-2xl bg-indigo-600 px-5 py-2 text-white font-semibold shadow hover:bg-indigo-700 transition">
          Connect Wallet
        </button>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Total Tips</h2>
          <p className="text-3xl font-bold text-indigo-600">123</p>
          <p className="text-gray-500">Tips received</p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Earnings</h2>
          <p className="text-3xl font-bold text-green-600">0.42 ETH</p>
          <p className="text-gray-500">On-chain balance</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Supporters</h2>
          <p className="text-3xl font-bold text-purple-600">56</p>
          <p className="text-gray-500">Unique tippers</p>
        </div>
      </section>
    </main>
  );
}
