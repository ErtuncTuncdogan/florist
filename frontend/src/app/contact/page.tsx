import Navbar from '@/components/Navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-500">Have a question or ready to order? We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 border border-gray-100 p-8 rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-medium text-gray-600 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Name *</label>
                  <input type="text" placeholder="Your name" className="w-full p-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#F72585] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email *</label>
                  <input type="email" placeholder="your@email.com" className="w-full p-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#F72585] outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone</label>
                <input type="tel" placeholder="(555) 123-4567" className="w-full p-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#F72585] outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message *</label>
                <textarea rows={4} placeholder="Tell us about your floral needs..." className="w-full p-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#F72585] outline-none transition-all" />
              </div>

              <button type="button" className="w-full bg-[#F72585] text-white py-4 rounded-md font-bold hover:bg-[#d61a6c] transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            <div className="border border-gray-100 p-8 rounded-xl shadow-sm bg-white space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#F72585] w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">123 Garden Street<br/>Bloomfield, CA 94102</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-[#F72585] w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="text-[#F72585] w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-sm text-gray-600">hello@bloomandpetal.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-[#F72585] w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Hours</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Mon-Fri: 9am - 6pm<br/>Sat: 10am - 5pm<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF0F5] p-6 rounded-xl border border-[#F72585]/10">
              <h4 className="font-bold text-[#F72585] mb-2">Same Day Delivery</h4>
              <p className="text-sm text-gray-700">Order before 2pm for same-day delivery. Perfect for last-minute gifts!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}