"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { WagmiProvider, http } from "wagmi";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });



const helaTestnet = {
  id: 666888, 
  name: 'HeLa Testnet',
  nativeCurrency: { name: 'Hela', symbol: 'HELA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.helalabs.com/'] },
  },
  blockExplorers: {
    default: { name: 'HelaScan', url: 'https://testnet-scan.helalabs.com/' },
  },
  testnet: true,
};


const config = getDefaultConfig({
  appName: "HelaTip",
  
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains: [helaTestnet], 
  transports: {
    [helaTestnet.id]: http(), 
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
              {}
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}