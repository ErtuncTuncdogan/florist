import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Heart, Gift, Calendar } from 'lucide-react';

export default function Home() {
  return (
    // REMOVED "pt-20" so the hero image goes behind the navbar
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative flex-1 flex flex-col justify-center items-center text-center text-white min-h-[100vh]" // Changed to 100vh for full screen impact
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533907650686-70576141c030?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay - increased slightly so text pops */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-20"> {/* Added pt-32 to push text down visually */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-xl tracking-tight">
            Fresh Flowers, <br/> Delivered Daily
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Handcrafted bouquets made with love for every special moment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* GLASSY PRIMARY BUTTON */}
            <Link href="/shop" className="bg-[#F72585]/90 backdrop-blur-md border border-white/20 hover:bg-[#F72585] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-[#F72585]/40 hover:-translate-y-1">
              Shop Now
            </Link>
            {/* GLASSY SECONDARY BUTTON */}
            <Link href="/about" className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all shadow-lg hover:-translate-y-1">
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Cards - Glass Effect */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mt-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
          {[
            { icon: Heart, label: 'Romance', desc: 'Beautiful roses & romantic bouquets' },
            { icon: Gift, label: 'Gifts', desc: 'Perfect for special occasions' },
            { icon: Calendar, label: 'Events', desc: 'Weddings & corporate events' },
          ].map((item, idx) => (
            <Link href="/shop" key={idx} className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-3xl text-center hover:bg-white/90 transition-all cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-[#F72585]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">{item.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}