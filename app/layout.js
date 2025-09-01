"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { WagmiProvider, http } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// ===== Wagmi + RainbowKit Config =====
const config = getDefaultConfig({
  appName: "HelaTip",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {/* Navbar Global */}
              <Navbar />

              {/* Page Content */}
              <main className="p-6">{children}</main>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
