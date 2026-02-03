import Navbar from '@/components/Navbar';
import { Heart, Award, Leaf, Users, User } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Hero Image & Text Overlay */}
        <div className="relative h-[600px] lg:h-auto lg:min-h-[calc(100vh-80px)]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80")' }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 text-white">
              <h1 className="text-5xl font-normal mb-6 leading-tight">About <br/>Bloom & Petal</h1>
              <p className="text-lg leading-relaxed text-gray-100 mb-6 max-w-lg font-light">
                Founded in 2015 by master florist Emma Richardson, our boutique flower shop has grown from a small studio into a beloved local destination for exceptional floral arrangements.
              </p>
              <p className="text-lg leading-relaxed text-gray-100 max-w-lg font-light">
                We specialize in creating custom arrangements for weddings, corporate events, and everyday celebrations, always with attention to detail and artistic flair.
              </p>
            </div>
        </div>

        {/* Right Side: Values & Team */}
        <div className="p-10 lg:p-20 bg-gray-50 overflow-y-auto">
          <h2 className="text-3xl font-medium text-gray-900 mb-8">Our Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Heart, title: "Passion", desc: "Love in every arrangement" },
              { icon: Award, title: "Quality", desc: "Only the freshest flowers" },
              { icon: Leaf, title: "Sustainability", desc: "Eco-friendly practices" },
              { icon: Users, title: "Community", desc: "Supporting local growers" },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <val.icon className="w-8 h-8 text-[#F72585] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">{val.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{val.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-medium text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "Emma", role: "Founder" },
              { name: "Sophie", role: "Designer" },
              { name: "Marcus", role: "Events" },
            ].map((person, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-[#FFF0F5] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-[#F72585]" />
                </div>
                <h4 className="font-bold text-gray-900">{person.name}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-1 font-bold">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}