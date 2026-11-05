import { Toaster } from 'react-hot-toast';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'StudioSpace',
  description: 'Book your creative workspace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* amar navbar ekhane */}
        <nav className="bg-white shadow-sm py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">StudioSpace</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/studios" className="hover:text-blue-500">Explore</Link>
              <Link href="/my-listings" className="hover:text-blue-500">My Listings</Link>
              <Link href="/add-studio" className="bg-blue-600 text-white px-4 py-2 rounded">Add Studio</Link>
            </div>
          </div>
        </nav>

        <Toaster position="top-center" />

        {/* main content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* amar footer ekhane */}
        <footer className="bg-gray-800 text-white py-8 text-center mt-10">
          <p className="text-xl font-bold mb-2">StudioSpace</p>
          <p className="text-sm text-gray-400">© 2026 StudioSpace. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}