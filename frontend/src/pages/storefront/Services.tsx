import { Link } from 'react-router-dom';
import { ShoppingBag, Award, CheckCircle, Truck } from 'lucide-react';
import heroImg from '../../assets/baklava_hero_1772920925417.png';
import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';
import mlabesImg from '../../assets/mlabes_1772921046544.png';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. BAKER HERO OVERLAY */}
      <section className="relative pt-40 pb-24 bg-baker-900 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-baker-900/80 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide uppercase text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Pages</span>
            <span className="text-white/50">/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* 2. BAKER SERVICES 2-COLUMN LAYOUT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Text and Service Grid */}
            <div className="lg:w-1/2">
              <div className="mb-10">
                <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">// OUR SERVICES</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-baker-900 leading-tight">What Do We Offer For You?</h2>
              </div>
              <p className="text-[#777777] mb-10 leading-relaxed">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              
              {/* 2x2 Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-baker-500 text-white flex items-center justify-center rounded-full flex-shrink-0 shadow-lg">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-baker-900 mb-2">Quality Products</h3>
                    <p className="text-[#777777] text-sm leading-relaxed">Magna sea amet stet diam dolor sed justo stet amet</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-baker-500 text-white flex items-center justify-center rounded-full flex-shrink-0 shadow-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-baker-900 mb-2">Custom Orders</h3>
                    <p className="text-[#777777] text-sm leading-relaxed">Magna sea amet stet diam dolor sed justo stet amet</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-baker-500 text-white flex items-center justify-center rounded-full flex-shrink-0 shadow-lg">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-baker-900 mb-2">Home Delivery</h3>
                    <p className="text-[#777777] text-sm leading-relaxed">Magna sea amet stet diam dolor sed justo stet amet</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-baker-500 text-white flex items-center justify-center rounded-full flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-baker-900 mb-2">Event Catering</h3>
                    <p className="text-[#777777] text-sm leading-relaxed">Magna sea amet stet diam dolor sed justo stet amet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image Collage */}
            <div className="lg:w-1/2 relative">
              {/* Gold Background Element for depth */}
              <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-baker-500/20 rounded-sm z-0 hidden sm:block"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
                {/* Vertical Image */}
                <div className="mt-12 h-full">
                  <img src={mlabesImg} alt="Mlabes Pastry" className="w-full h-full object-cover rounded-sm shadow-xl" />
                </div>
                {/* Horizontal Image */}
                <div className="mb-12 h-full">
                  <img src={kaakWarkaImg} alt="Kaak Warka Process" className="w-full h-full object-cover rounded-sm shadow-xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FACTS COUNTERS */}
      <section className="bg-baker-50 py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50">
              <div className="w-16 h-16 mx-auto text-baker-500 mb-4 opacity-80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <p className="text-[#777777] uppercase tracking-widest text-sm mb-3 font-medium">Years Experience</p>
              <h2 className="text-5xl font-serif font-bold text-baker-900">50</h2>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50">
               <div className="w-16 h-16 mx-auto text-baker-500 mb-4 opacity-80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <p className="text-[#777777] uppercase tracking-widest text-sm mb-3 font-medium">Skilled Professionals</p>
              <h2 className="text-5xl font-serif font-bold text-baker-900">175</h2>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50">
              <div className="w-16 h-16 mx-auto text-baker-500 mb-4 opacity-80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
              <p className="text-[#777777] uppercase tracking-widest text-sm mb-3 font-medium">Total Products</p>
              <h2 className="text-5xl font-serif font-bold text-baker-900">135</h2>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100/50">
              <div className="w-16 h-16 mx-auto text-baker-500 mb-4 opacity-80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <p className="text-[#777777] uppercase tracking-widest text-sm mb-3 font-medium">Order Everyday</p>
              <h2 className="text-5xl font-serif font-bold text-baker-900">9357</h2>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
