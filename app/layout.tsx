import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NovaMart | Premium E-commerce',
  description: 'Experience luxury shopping with NovaMart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-2xl font-bold tracking-tighter text-primary">NOVAMART</div>
        <div className="hidden space-x-8 md:flex">
          <a href="/" className="text-sm font-medium hover:text-accent">Home</a>
          <a href="/shop" className="text-sm font-medium hover:text-accent">Shop</a>
          <a href="/about" className="text-sm font-medium hover:text-accent">About</a>
          <a href="/contact" className="text-sm font-medium hover:text-accent">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/search" className="p-2 hover:text-accent">🔍</a>
          <a href="/wishlist" className="p-2 hover:text-accent">❤️</a>
          <a href="/cart" className="p-2 hover:text-accent relative">
            🛒 <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-accent text-[10px] flex items-center justify-center text-white">0</span>
          </a>
          <a href="/account" className="p-2 hover:text-accent">👤</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold tracking-tighter text-primary mb-4">NOVAMART</div>
          <p className="text-sm text-gray-500">Premium curated products for the modern lifestyle.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Shop</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><a href="/shop">All Products</a></li>
            <li><a href="/categories/electronics">Electronics</a></li>
            <li><a href="/categories/fashion">Fashion</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="border p-2 rounded text-sm w-full" />
            <button className="bg-primary text-white px-4 py-2 rounded text-sm">Join</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-xs text-gray-400">
        © 2026 NovaMart. All rights reserved.
      </div>
    </footer>
  )
}
