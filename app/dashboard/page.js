"use client";

import { useAccount, useWriteContract } from "wagmi";
import { useState } from "react";
import { parseEther } from "viem"; // Utility untuk format angka

// --- KONFIGURASI KONTRAK (GANTI DENGAN YANG ASLI DARI DOKUMENTASI) ---
const hlusdContractAddress = "0x....."; // TODO: Ganti dengan alamat kontrak HLUSD di HeLa Testnet
const recipientAddress = "0x....."; // TODO: Ganti dengan alamat penerima tip (misal: dompet kreator)

// ABI minimal untuk fungsi transfer ERC20
const erc20Abi = [
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];
// --------------------------------------------------------------------


export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("");
  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const handleTip = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid tip amount.");
      return;
    }

    try {
      await writeContract({
        address: hlusdContractAddress,
        abi: erc20Abi,
        functionName: 'transfer',
        args: [
          recipientAddress,
          parseEther(amount) // Mengubah '10' menjadi 10000000000000000000 (sesuai desimal token)
        ],
      });
    } catch (e) {
      console.error("Transaction failed:", e);
      alert("Transaction failed. Check the console for details.");
    }
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

          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Enter tip amount (HLUSD)" // <-- Diperbaiki
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isPending}
            />
            <button
              onClick={handleTip}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-300"
              disabled={isPending}
            >
              {isPending ? 'Sending...' : 'Send Tip'}
            </button>
          </div>
          
          {isSuccess && <p className="text-green-600">Tip sent successfully!</p>}
          {error && <p className="text-red-600">Error: {error.shortMessage || error.message}</p>}

        </div>
      )}
    </div>
  );
}