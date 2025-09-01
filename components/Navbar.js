"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">HelaTip</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-blue-600 transition">
          Dashboard
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition">
          About
        </Link>

        {/* Wallet Connect (compact style) */}
        <ConnectButton
          showBalance={false}
          chainStatus="icon"   // tampil icon chain kecil
          accountStatus="avatar" // tampil avatar address kecil
        />
      </div>
    </nav>
  );
}
