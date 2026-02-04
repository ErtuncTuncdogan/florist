import Navbar from '@/components/Navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20 pt-28 relative overflow-hidden">
      <Navbar />
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="fixed top-20 right-[-10%] w-[700px] h-[700px] bg-[#F72585] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-400 opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-gray-500 text-lg">Have a question or ready to order? We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Glassy Panel */}
          <div className="lg:col-span-2 border border-white/60 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-medium text-gray-900 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name *" className="w-full p-4 bg-white/50 rounded-2xl border border-gray-100 focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
                <input type="email" placeholder="Email *" className="w-full p-4 bg-white/50 rounded-2xl border border-gray-100 focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
              </div>
              <input type="tel" placeholder="Phone" className="w-full p-4 bg-white/50 rounded-2xl border border-gray-100 focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />
              <textarea rows={4} placeholder="Message *" className="w-full p-4 bg-white/50 rounded-2xl border border-gray-100 focus:bg-white focus:border-[#F72585] focus:ring-2 focus:ring-[#F72585]/20 outline-none transition-all" />

              <button type="button" className="w-full bg-[#F72585] text-white py-4 rounded-full font-bold hover:bg-[#d61a6c] transition-all shadow-lg hover:shadow-[#F72585]/40 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Sidebar - Glassy Panel */}
          <div className="space-y-8">
            <div className="border border-white/60 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-pink-50 rounded-full group-hover:bg-[#F72585] transition-colors group-hover:text-white text-[#F72585]">
                    <MapPin className="w-6 h-6" />
                </div>
                <div><h4 className="font-bold text-gray-900 mb-1">Address</h4><p className="text-sm text-gray-600">Okopowa 59<br/>Warsaw, Poland</p></div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-pink-50 rounded-full group-hover:bg-[#F72585] transition-colors group-hover:text-white text-[#F72585]">
                    <Phone className="w-6 h-6" />
                </div>
                <div><h4 className="font-bold text-gray-900 mb-1">Phone</h4><p className="text-sm text-gray-600">1111111</p></div>
              </div>
              <div className="flex gap-4 items-start group">
                 <div className="p-3 bg-pink-50 rounded-full group-hover:bg-[#F72585] transition-colors group-hover:text-white text-[#F72585]">
                    <Mail className="w-6 h-6" />
                </div>
                 <div><h4 className="font-bold text-gray-900 mb-1">Email</h4><p className="text-sm text-gray-600">hello@bloomandpetal.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}