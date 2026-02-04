"use client";

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  { id: '1', name: 'Classic Rose Bouquet', price: 49.99, category: 'Romance', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'Sunny Sunflowers', price: 39.99, category: 'Gifts', image: 'https://images.unsplash.com/photo-1599270613570-a620f2e59f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZmxvd2VyfGVufDB8fDB8fHww' },
  { id: '3', name: 'Spring Tulips Mix', price: 44.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: 'Elegant Orchids', price: 69.99, category: 'Luxury', image: 'https://plus.unsplash.com/premium_photo-1675342750593-1314378f1e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JjaGlkZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '5', name: 'Lavender Dreams', price: 54.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF2ZW5kZXJ8ZW58MHx8MHx8fDA%3D' },
  { id: '6', name: 'Wedding Romance', price: 149.99, category: 'Events', image: 'https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?q=80&w=800&auto=format&fit=crop' },
];

const FILTERS = ['All', 'Romance', 'Gifts', 'Seasonal', 'Luxury', 'Events'];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeFilter);

  return (
    // CHANGED: bg-transparent so the global layout blobs show through
    <div className="min-h-screen bg-transparent pb-20 pt-28">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Our Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Curated fresh blooms for every occasion.</p>
        </div>

        {/* Glassy Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-md border ${
                activeFilter === filter
                ? 'bg-[#F72585]/90 text-white border-transparent shadow-lg shadow-[#F72585]/30' 
                : 'bg-white/40 text-gray-600 border-white/40 hover:bg-white hover:text-[#F72585] shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            // Cards use bg-white/60 for that frosty glass effect over the background blobs
            <div key={product.id} className="bg-white/60 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-white/60 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gray-100/50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                   {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[#F72585] text-2xl font-bold">${product.price}</span>
                  
                  <button 
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="bg-gray-900/90 hover:bg-[#F72585] backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}