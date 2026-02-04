"use client";

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const safeTotal = totalPrice || 0;
  const DELIVERY_FEE = 9.99;
  const TAX = safeTotal * 0.08;
  const FINAL_TOTAL = safeTotal + DELIVERY_FEE + TAX;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      router.push('/success');
    }, 1500);
  };

  if (cart.length === 0) {
    router.push('/shop');
    return null;
  }

  return (
    // Added pt-24 for glassy navbar spacing
    <div className="min-h-screen bg-gray-50 pb-20 pt-24">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/cart" className="inline-flex items-center text-gray-500 hover:text-[#F72585] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Cart
        </Link>

        <h1 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-[#F72585] w-6 h-6" />
                <h2 className="text-xl font-bold text-gray-900">Shipping Information</h2>
              </div>
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="text" placeholder="First Name" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <input required type="text" placeholder="Last Name" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <input required type="text" placeholder="Address" className="md:col-span-2 w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <input required type="text" placeholder="City" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <input required type="text" placeholder="Zip Code" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
              </form>
            </div>

            {/* Payment */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-[#F72585] w-6 h-6" />
                <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="MM/YY" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                  <input type="text" placeholder="CVC" className="w-full p-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-96">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Your Order</h2>
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
                        <img src={item.image} alt="" className="w-full h-full object-cover"/>
                      </div>
                      <span className="text-gray-600">{item.name} <span className="text-xs text-gray-400">x{item.quantity}</span></span>
                    </div>
                    <span className="font-medium">${((item.price || 0) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 mb-8 border-t border-gray-100 pt-4">
                <span>Total</span>
                <span className="text-[#F72585]">${FINAL_TOTAL.toFixed(2)}</span>
              </div>
              <button 
                type="submit" form="checkout-form" disabled={isProcessing}
                className="w-full bg-[#F72585] text-white py-4 rounded-full font-bold hover:bg-[#d61a6c] transition-all shadow-lg hover:shadow-[#F72585]/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}