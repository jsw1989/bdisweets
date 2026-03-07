import { Link } from 'react-router-dom';
import { Check, Facebook, Twitter, Instagram } from 'lucide-react';

import heroImg from '../../assets/baklava_hero_1772920925417.png';
import heritageImg from '../../assets/heritage_1772921071776.png';
import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';

// Team Data
const team = [
  { id: 1, name: 'Youssef Ben Ali', role: 'Master Baker', image: heritageImg },
  { id: 2, name: 'Amina Mansour', role: 'Pastry Chef', image: heritageImg },
  { id: 3, name: 'Karim Trabelsi', role: 'Quality Control', image: heritageImg },
  { id: 4, name: 'Salma Khemir', role: 'Decoration Specialist', image: heritageImg },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. BAKER HERO OVERLAY */}
      <section className="relative pt-40 pb-24 bg-baker-900 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-baker-900/80 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide uppercase text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Pages</span>
            <span className="text-white/50">/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </section>

      {/* 2. BAKER ABOUT SPLIT PANE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Image Composition */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 pr-12 pb-12">
                <img src={kaakWarkaImg} alt="Fresh Pastries" className="w-full rounded-sm shadow-xl aspect-square object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 border-8 border-white z-20 shadow-xl">
                <img src={heritageImg} alt="Baking Process" className="w-full object-cover aspect-video" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">// ABOUT US</p>
                <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold leading-tight">
                  We Bake Every Item From The Core Of Our Hearts
                </h2>
              </div>
              
              <p className="text-[#777777] leading-relaxed mb-6">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              
              <p className="text-[#777777] leading-relaxed mb-8">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                <div className="flex items-center gap-3 text-baker-900 font-medium">
                  <Check className="text-baker-500 w-5 h-5 flex-shrink-0" />
                  Quality Products
                </div>
                <div className="flex items-center gap-3 text-baker-900 font-medium">
                  <Check className="text-baker-500 w-5 h-5 flex-shrink-0" />
                  Custom Products
                </div>
                <div className="flex items-center gap-3 text-baker-900 font-medium">
                  <Check className="text-baker-500 w-5 h-5 flex-shrink-0" />
                  Online Order
                </div>
                <div className="flex items-center gap-3 text-baker-900 font-medium">
                  <Check className="text-baker-500 w-5 h-5 flex-shrink-0" />
                  Home Delivery
                </div>
              </div>
              
              <Link to="/about" className="btn-primary inline-block">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BAKER COUNTERS */}
      <section className="bg-baker-900 py-16 text-center text-white bg-fixed bg-center bg-cover relative" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-baker-900/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-baker-500 mb-2 font-serif">50</h2>
              <p className="uppercase tracking-widest text-sm font-medium">Years Of Experience</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-baker-500 mb-2 font-serif">175</h2>
              <p className="uppercase tracking-widest text-sm font-medium">Skilled Artisans</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-baker-500 mb-2 font-serif">1234</h2>
              <p className="uppercase tracking-widest text-sm font-medium">Total Products</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-baker-500 mb-2 font-serif">1234</h2>
              <p className="uppercase tracking-widest text-sm font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BAKER TEAM GALLERY */}
      <section className="py-24 bg-baker-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">// TEAM MEMBERS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold mb-6">Our Master Bakers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group relative overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-xl transition-shadow border border-gray-100/50">
                <img src={member.image} alt={member.name} className="w-full aspect-[3/4] object-cover" />
                
                {/* Baker Hover Overlay */}
                <div className="absolute inset-0 bg-baker-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center transform translate-y-4 group-hover:translate-y-0 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm uppercase tracking-wider mb-6 opacity-90">{member.role}</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
