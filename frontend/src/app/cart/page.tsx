"use client";

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  const DELIVERY_FEE = 9.99;
  const TAX = totalPrice * 0.08; // approx 8%
  const FINAL_TOTAL = totalPrice + DELIVERY_FEE + TAX;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h2 className="text-3xl text-gray-900 font-medium mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 text-lg">Looks like you haven't added any flowers to your cart yet.</p>
          <Link href="/shop" className="bg-[#F72585] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d61a6c] transition-colors shadow-lg">
            Browse Flowers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-[#F72585] font-medium mt-1">${item.price}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-6 mt-4">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-50"><Minus className="w-4 h-4 text-gray-600" /></button>
                      <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-50"><Plus className="w-4 h-4 text-gray-600" /></button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-red-500 text-sm font-medium hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery</span>
                  <span>${DELIVERY_FEE}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>${TAX.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 mb-8">
                <span>Total</span>
                <span className="text-[#F72585]">${FINAL_TOTAL.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => router.push('/success')}
                className="w-full bg-[#F72585] text-white py-4 rounded-md font-bold hover:bg-[#d61a6c] transition-colors shadow-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}