import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "HelaTip",
  description: "Decentralized tipping platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
          <h1 className="text-xl font-bold text-indigo-600">HelaTip</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          </div>
        </nav>

        {/* Halaman yg aktif */}
        <main>{children}</main>
      </body>
    </html>
  );
}
