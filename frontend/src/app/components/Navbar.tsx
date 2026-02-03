"use client";

import Link from 'next/link';
import { ShoppingCart, Flower2, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flower2 className="w-8 h-8 text-[#F72585] group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Bloom & Petal</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <Link href="/" className="hover:text-[#F72585] transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-[#F72585] transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-[#F72585] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#F72585] transition-colors">Contact</Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F72585] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-[#F72585] hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/shop" className="block px-3 py-2 text-gray-600 hover:text-[#F72585] hover:bg-gray-50 rounded-md">Shop</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-[#F72585] hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-[#F72585] hover:bg-gray-50 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}