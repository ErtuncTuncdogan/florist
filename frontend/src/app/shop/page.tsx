"use client";

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

// Data from your screenshot
const PRODUCTS = [
  { id: '1', name: 'Classic Rose Bouquet', price: 49.99, category: 'Romance', image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80', badge: 'Bestseller' },
  { id: '2', name: 'Sunny Sunflowers', price: 39.99, category: 'Gifts', image: 'https://images.unsplash.com/photo-1543314988-59648939c36c?auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'Spring Tulips Mix', price: 44.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'Elegant Orchids', price: 69.99, category: 'Luxury', image: 'https://images.unsplash.com/photo-1566904990038-1644d673190e?auto=format&fit=crop&w=800&q=80', badge: 'Luxury' },
  { id: '5', name: 'Lavender Dreams', price: 54.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1498606775960-9d57a4087595?auto=format&fit=crop&w=800&q=80' },
  { id: '6', name: 'Wedding Romance', price: 149.99, category: 'Events', image: 'https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?auto=format&fit=crop&w=800&q=80', badge: 'Bestseller' },
];

const FILTERS = ['All', 'Romance', 'Gifts', 'Seasonal', 'Luxury', 'Events'];

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Our Flower Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Discover our curated selection of fresh, beautiful flowers, perfect for any occasion and delivered with care.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter, idx) => (
            <button 
              key={filter} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                idx === 0 
                ? 'bg-[#F72585] text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#F72585] hover:text-[#F72585]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-[#F72585] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border border-gray-200 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[#F72585] text-2xl font-bold">${product.price}</span>
                  <button 
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="bg-gray-900 hover:bg-[#F72585] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
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