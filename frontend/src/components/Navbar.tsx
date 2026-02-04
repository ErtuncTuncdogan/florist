"use client";

import Link from 'next/link';
import { ShoppingCart, Flower2, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Logic: Check if we are on the Home Page
  const isHome = pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isHome 
          ? 'bg-black/10 backdrop-blur-md border-white/10 text-white' // HOME: Keeps your favorite look
          : 'bg-white/70 backdrop-blur-xl border-gray-200/50 shadow-sm text-gray-900' // OTHERS: Now "Frosted Glass" instead of solid white
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flower2 className={`w-8 h-8 transition-colors ${isHome ? 'text-white' : 'text-[#F72585]'} group-hover:rotate-12`} />
            <span className="text-2xl font-medium tracking-tight">Bloom & Petal</span>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-medium ${isHome ? 'text-white/90' : 'text-gray-600'}`}>
            <Link href="/" className={`transition-colors ${isHome ? 'hover:text-white' : 'hover:text-[#F72585]'}`}>Home</Link>
            <Link href="/shop" className={`transition-colors ${isHome ? 'hover:text-white' : 'hover:text-[#F72585]'}`}>Shop</Link>
            <Link href="/about" className={`transition-colors ${isHome ? 'hover:text-white' : 'hover:text-[#F72585]'}`}>About</Link>
            <Link href="/contact" className={`transition-colors ${isHome ? 'hover:text-white' : 'hover:text-[#F72585]'}`}>Contact</Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link 
              href="/cart" 
              className={`relative p-3 rounded-full transition-all ${
                isHome ? 'hover:bg-white/20' : 'hover:bg-gray-100/50 hover:text-[#F72585]'
              }`}
            >
              <ShoppingCart className={`w-6 h-6 ${isHome ? 'text-white' : 'text-gray-700'}`} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-0 bg-[#F72585] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              className={`md:hidden p-2 ${isHome ? 'text-white' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-800">
            <Link href="/" className="block px-3 py-2 hover:text-[#F72585] hover:bg-white/50 rounded-md">Home</Link>
            <Link href="/shop" className="block px-3 py-2 hover:text-[#F72585] hover:bg-white/50 rounded-md">Shop</Link>
            <Link href="/about" className="block px-3 py-2 hover:text-[#F72585] hover:bg-white/50 rounded-md">About</Link>
            <Link href="/contact" className="block px-3 py-2 hover:text-[#F72585] hover:bg-white/50 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}