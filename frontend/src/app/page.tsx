import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Heart, Gift, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section with DIRECT STYLE for background */}
      <div 
        className="relative flex-1 flex flex-col justify-center items-center text-center text-white min-h-[600px] overflow-hidden"
        style={{
          backgroundColor: '#f3f4f6',
        }}
      >
        {/* Background Image using Next.js Image */}
        <Image
          src="https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=2000&auto=format&fit=crop"
          alt="Fresh flowers background"
          fill
          sizes="100vw"
          priority
          className="object-cover -z-10"
          unoptimized={true}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Fresh Flowers, <br/> Delivered Daily
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 text-gray-100 drop-shadow-md">
            Handcrafted bouquets made with love for every special moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-[#F72585] hover:bg-[#d61a6c] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
              Shop Now
            </Link>
            <Link href="/about" className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mt-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
          {[
            { icon: Heart, label: 'Romance', desc: 'Beautiful roses & romantic bouquets' },
            { icon: Gift, label: 'Gifts', desc: 'Perfect for special occasions' },
            { icon: Calendar, label: 'Events', desc: 'Weddings & corporate events' },
          ].map((item, idx) => (
            <Link href="/shop" key={idx} className="bg-white/95 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-white transition-all cursor-pointer shadow-xl border-b-4 border-[#F72585] group">
              <div className="w-16 h-16 bg-[#FFF0F5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-[#F72585]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.label}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}