export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">About HelaTip</h1>
      <p className="text-gray-700 leading-relaxed">
        HelaTip is a decentralized tipping mini-app that allows creators and
        users to send and receive tips seamlessly on-chain. Our mission is to
        empower communities by making value transfer transparent, fast, and
        borderless.
      </p>
      <p className="text-gray-700 leading-relaxed">
        With wallet integration and blockchain technology, you can show support
        to your favorite creators in just a few clicks while maintaining full
        ownership of your funds.
      </p>
      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <p className="text-indigo-800 font-medium">
          🚀 Built with Next.js, RainbowKit, and Wagmi.
        </p>
      </div>
    </div>
  );
}
