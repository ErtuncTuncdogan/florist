"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  // Clear the cart when landing on success page
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center pt-20 px-4">
        <div className="w-full max-w-2xl bg-[#F0FDF4] border border-dashed border-[#86efac] rounded-2xl p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-20 h-20 bg-[#00C853] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
          
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Order Successfully Fulfilled!</h1>
          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            Thank you for your order! We'll start preparing your beautiful flowers right away. You'll receive a confirmation email shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Continue Shopping
            </Link>
            <Link href="/" className="bg-[#F72585] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d61a6c] transition-colors shadow-md">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}