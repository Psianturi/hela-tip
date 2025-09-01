"use client";

import { useAccount } from "wagmi";
import { useState } from "react";

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("");

  const handleTip = () => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    alert(`Sending tip of ${amount} ETH from ${address}`);
    // TODO: integrate smart contract / sendTransaction here
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>

      {!isConnected ? (
        <p className="text-gray-600">
          Please connect your wallet to access the tipping dashboard.
        </p>
      ) : (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-gray-700">
              Connected as:{" "}
              <span className="font-mono text-indigo-600">{address}</span>
            </p>
          </div>

          {/* Input Amount */}
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Enter tip amount (ETH)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleTip}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Send Tip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
