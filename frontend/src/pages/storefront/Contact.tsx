import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import heroImg from '../../assets/baklava_hero_1772920970326.png';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-baker-900 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-baker-900/80 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide uppercase text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Pages</span>
            <span className="text-white/50">/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">// CONTACT US</p>
            <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold mb-6">If You Have Any Query, Please Contact Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="bg-[#FDF5EB] p-8 md:p-12 rounded-sm shadow-sm">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-white border border-gray-200 py-4 px-5 rounded-md focus:outline-none focus:border-baker-500 focus:ring-1 focus:ring-baker-500 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full bg-white border border-gray-200 py-4 px-5 rounded-md focus:outline-none focus:border-baker-500 focus:ring-1 focus:ring-baker-500 transition-all"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            className="w-full bg-white border border-gray-200 py-4 px-5 rounded-md focus:outline-none focus:border-baker-500 focus:ring-1 focus:ring-baker-500 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            rows={5} 
                            placeholder="Message" 
                            className="w-full bg-white border border-gray-200 py-4 px-5 rounded-md focus:outline-none focus:border-baker-500 focus:ring-1 focus:ring-baker-500 transition-all resize-none"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="bg-baker-500 text-white font-bold py-4 px-12 rounded-full hover:bg-baker-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8 h-full flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    <div className="flex items-start gap-4 p-6 bg-baker-50 rounded-sm border border-baker-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <MapPin className="w-5 h-5 text-baker-500" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg font-bold text-baker-900 mb-1">Our Office</h4>
                            <p className="text-[#777777] text-sm">123 Street, Tunis, Tunisia</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 bg-baker-50 rounded-sm border border-baker-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Phone className="w-5 h-5 text-baker-500" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg font-bold text-baker-900 mb-1">Call Us</h4>
                            <p className="text-[#777777] text-sm">+216 71 123 456</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-baker-50 rounded-sm border border-baker-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Mail className="w-5 h-5 text-baker-500" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg font-bold text-baker-900 mb-1">Email Us</h4>
                            <p className="text-[#777777] text-sm">info@bdisweets.tn</p>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex-grow rounded-sm overflow-hidden min-h-[300px] border border-gray-200 relative grayscale hover:grayscale-0 transition-all duration-500">
                   <iframe 
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.36224213759!2d10.10302798952404!3d36.81897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd971216bc5103c81!2sTunis!5e0!3m2!1sen!2stn!4v1709400000000!5m2!1sen!2stn" 
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                   ></iframe>
                </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
