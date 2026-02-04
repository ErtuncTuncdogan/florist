import Navbar from '@/components/Navbar';
import { Heart, Award, Leaf, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20 pt-28 relative overflow-hidden">
      <Navbar />
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="fixed top-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-300 opacity-[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#F72585] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 relative z-10">
         {/* Hero Image Card */}
         <div className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80")' }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
              <h1 className="text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">About Us</h1>
              <p className="text-lg font-medium opacity-90 drop-shadow-md">Crafting moments of joy since 2015.</p>
            </div>
         </div>

         <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">From Our Garden to Your Home</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded by master florist Emma Richardson, Bloom & Petal started as a small passion project and grew into a beloved local studio. We believe flowers are more than just decoration—they are a language of love, care, and celebration.
            </p>
            
            {/* Glassy Value Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
               {[
                 { icon: Heart, label: "Passion" },
                 { icon: Award, label: "Quality" },
                 { icon: Leaf, label: "Eco-Friendly" },
                 { icon: Users, label: "Community" },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="p-3 bg-white rounded-full shadow-sm text-[#F72585]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block">{item.label}</span>
                      <span className="text-xs text-gray-500">Committed to excellence</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}